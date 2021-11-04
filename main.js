function loggedin() {
    var player1 = document.getElementById("play1name").value;
    var player2 = document.getElementById("play2name").value;
    localStorage.setItem("name1", player1);
    localStorage.setItem("name2", player2);
    window.location = "mathquiz.html";
}