let player1 = ""
let player2 = ""
const probability = ["rock", "paper", "scissors"]
let scorePlayer1 = 0
let scorePlayer2 = 0
let win = null



const play = document.querySelector(".button");
play.addEventListener('click', game);
const display = document.querySelector("#score1");
const display2 = document.querySelector("#score2");


function game() {

    randomise(player1, 'player1');
    randomise(player2, 'player2');
    winner();
    msg();
    off();
}

function randomise(score, player) {
    const pro = Math.floor(Math.random() * 3);
    if (player === 'player1') {
        player1 = probability[pro]
    } else {
        player2 = probability[pro]
    };
    score = probability[pro]

    const result = document.querySelector(`#${player}`);
    result.innerHTML = score;

    if (score === 'rock') {
        result.innerHTML = `<div class='emoji'>👊</div>`
    } else if (score === 'paper') {
        result.innerHTML = `<div class='emoji'>🖐 </div>`

    } else {
        result.innerHTML = `<div class='emoji'> ✌️ </div>`
    }

};

function winner() {
    console.log(player1, player2);
    if (player1 === 'paper' && player2 === 'rock') {
        scorePlayer1 = scorePlayer1 + 1
        display.innerHTML = scorePlayer1
        console.log(scorePlayer1)
        win = "player1"
        return
    } else if (player1 === 'scissors' && player2 === 'paper') {
        scorePlayer1 = scorePlayer1 + 1
        display.innerHTML = scorePlayer1
        win = "player1"
        return
    } else if (player1 === 'rock' && player2 === 'scissors') {
        scorePlayer1 = scorePlayer1 + 1
        display.innerHTML = scorePlayer1
        win = "player1"
        return
    } else if (player1 === player2) {
        win = null
        return
    } else {

        scorePlayer2 = scorePlayer2 + 1
        display2.innerHTML = scorePlayer2
        console.log(scorePlayer2)
        win = "player2"
        return
    }
};

function msg() {
    if (win === "player1") {
        on();
    } else if (player1 === player2) {
        on();
    } else {
        on();
    }

};

function on() {
    document.querySelector(".overlay").style.display = "block";
    const modal = document.createElement("div");
    modal.innerHTML = win ? `🎉 Congrats ${win} you win 🎉 ` : "Sorry try again";
    modal.classList.add("my-class");
    const container = document.querySelector(".container")
    container.appendChild(modal)


}



function off() {
    const out = document.querySelector(".overlay");
    const disapeare = document.querySelector(".my-class")
    window.onclick = function(event) {
        if (event.target == out) {
            out.style.display = "none";
            disapeare.remove();
        }

    }
}












// function myFunction() {
//     var para = document.createElement("P");
//     para.innerText = "This is a paragraph.";
//     document.body.appendChild(para);
//   }