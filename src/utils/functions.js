// gameLogic.js
import { CHOICES } from "./constants";

export function determineWinner(playerChoice, computerChoice) {
  if (playerChoice.name === computerChoice.name) {
    return "It is a draw !";
  }
  if (
    (playerChoice.name === "rock" && computerChoice.name === "scissors") ||
    (playerChoice.name === "paper" && computerChoice.name === "rock") ||
    (playerChoice.name === "scissors" && computerChoice.name === "paper")
  ) {
    return "You win !";
  }
  return "You lose !";
}

// Fonction pour générer un choix aléatoire de l'ordinateur
export function getRandomChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
