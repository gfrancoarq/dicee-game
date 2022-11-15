let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDice = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDice2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);

let title = document.querySelector("h1");
if (randomNumber1 == randomNumber2) {
  title.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  title.innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 wins! 🚩";
}
