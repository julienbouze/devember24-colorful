"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CHOICES } from "../utils/constants";
import { determineWinner, getRandomChoice } from "../utils/functions";

export function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  function handlePlayerChoice(choice) {
    const randomChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);
    setResult(determineWinner(choice, randomChoice));
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold text-gray-700">Rock - Paper - Scissors</h1>

      {result && playerChoice && computerChoice && (
        <div
          className={`w-full max-w-lg p-4 text-center text-white rounded-lg ${
            result === "You win !" ? "bg-gradient-to-r from-green-400 to-green-600" :
            result === "It is a draw !" ? "bg-gradient-to-r from-yellow-400 to-yellow-600" :
            "bg-gradient-to-r from-red-400 to-red-600"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={playerChoice.icon} size="2x" />
              <p>You</p>
            </div>

            <p className="text-2xl font-semibold">{result}</p>

            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={computerChoice.icon} size="2x" />
              <p>Computer</p>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex w-full justify-center items-center gap-12 flex-wrap">
        {CHOICES.map((choice) => (
          <div
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            className={`flex rounded-full w-60 h-60 ${choice.color} justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer transform transition-transform hover:scale-105`}
          >
            <div className={`flex rounded-full justify-center items-center w-40 h-40 bg-gradient-to-br ${choice.gradient}`}>
              <FontAwesomeIcon icon={choice.icon} color="white" size="3x" />
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex w-full justify-center items-center gap-6 flex-wrap">
        {CHOICES.map((choice) => (
          <div
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            className={`flex rounded-full w-40 h-40 ${choice.color} justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer transform transition-transform hover:scale-105`}
          >
            <div className={`flex rounded-full justify-center items-center w-32 h-32 bg-gradient-to-br ${choice.gradient}`}>
              <FontAwesomeIcon icon={choice.icon} color="white" size="3x" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
