/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♣", "♥", "♠"];
  let value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "k",
    "A"
  ];

  let chosenSuit = getrandomElement(suit);
  let chosenValue = getrandomElement(value);
  let leftSuit = document.querySelector(".left-suit");
  let middleNumber = document.querySelector(".middle-number");
  let rightSuit = document.querySelector(".right-suit");
  leftSuit.innerHTML = chosenSuit;
  middleNumber.innerHTML = chosenValue;
  rightSuit.innerHTML = chosenSuit;
  console.log(chosenSuit, chosenValue, chosenSuit);
};

function getrandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
