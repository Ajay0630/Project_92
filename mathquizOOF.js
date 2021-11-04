player1score = 0;
player2score = 0;
play1name = localStorage.getItem("name1")
play2name = localStorage.getItem("name2")

document.getElementById("nick1").innerHTML = play1name + " : ";
document.getElementById("nick2").innerHTML = play2name + " : ";

document.getElementById("nick1score").innerHTML = parseInt(player1score);
document.getElementById("nick2score").innerHTML = parseInt(player2score);

document.getElementById("questionplay").innerHTML = "It is " + play1name + "'s turn for question";
document.getElementById("answerplay").innerHTML = "It is " + play2name + "'s turn for answer";
function send() {
    var num1 = document.getElementById("num1input").value;
    var num2 = document.getElementById("num2input").value;
    mulquestion = "<h4>" + num1 + " X " + num2 + "</h4>";
    inputbox = "<br>Answer : <input type='number' id='inputcheckbox'><br><br>";
    checkbutton = "<button class='btn btn-info' onclick='check()'>Check</button>";
    row = mulquestion + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    answer = parseInt(num1) * parseInt(num2);
    var num1 = document.getElementById("num1input").value;
    var num2 = document.getElementById("num2input").value;
    document.getElementById("num1input").value = "";
    document.getElementById("num2input").value = "";  
    playerans = document.getElementById("inputcheckbox").value;
    if (playerans == answer) {
        if (answerTurn == "player1") {
            player1score = player1score + 1;
            document.getElementById("nick1score").innerHTML = player1score;
        } else {
            player2score = player2score + 1;
            document.getElementById("nick2score").innerHTML = player2score;
        }
    }
    if (questionTurn == "player2") {
        questionTurn = "player1";
        document.getElementById("questionplay").innerHTML = "It is " + play1name + "'s turn for question";
    } else {
        questionTurn = "player2";
        document.getElementById("questionplay").innerHTML = "It is " + play2name + "'s turn for question";
    }
    if (answerTurn == "player2") {
        answerTurn = "player1";
        document.getElementById("answerplay").innerHTML = "It is " + play1name + "'s turn for answer";
    } else {
        answerTurn = "player2";
        document.getElementById("answerplay").innerHTML = "It is " + play2name + "'s turn for answer";
    }
}