// Import stylesheets
import './style.css';
import { Player } from './models/Player';
import { Colour } from './models/Colour.enum';

let Players: Player[] = [];
let playerRolls: Number[] = [];

//event listeners
document.getElementById('rollDice').addEventListener('click', rollDice);
document
  .getElementById('changeColour-btn')
  .addEventListener('click', changeColour);

init();

function init() {
  //players
  let playerSelector: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('playerSelector')
  );

  let player1: Player = new Player('Player 1', 0, Colour.Blue);
  let player2: Player = new Player('Player 2', 0, Colour.Red);
  Players.push(player1);
  Players.push(player2);

  let option1: string = `<option value="0">${player1.name}</option>`;
  let option2: string = `<option value="1">${player2.name}</option>`;
  playerSelector.innerHTML += option1;
  playerSelector.innerHTML += option2;

  //colours
  let colourSelector: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('colourSelector')
  );

  let colourOption1: string = `<option value="0">${Colour.Red}</option>`;
  let colourOption2: string = `<option value="1">${Colour.Pink}</option>`;
  let colourOption3: string = `<option value="2">${Colour.Blue}</option>`;
  colourSelector.innerHTML += colourOption1;
  colourSelector.innerHTML += colourOption2;
  colourSelector.innerHTML += colourOption3;

  updateDisplay();
}

function changeColour() {
  //make it apply the selected colour to the dice of the selected player
  let selection: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('playerSelector')
  );
  let colourSelection: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('colourSelector')
  );
  let tempHold: string = '';

  tempHold = colourSelection.value;
  if (tempHold === '0') {
    Players[selection.value].colour = Colour.Red;
  } else if (tempHold === '1') {
    Players[selection.value].colour = Colour.Pink;
  } else if (tempHold === '2') {
    Players[selection.value].colour = Colour.Blue;
  }

  /*   Players[selection.value].colour = colourSelection.value; */

  updateDisplay();
}

function drawPlayers() {
  let playerDiv: HTMLDivElement = <HTMLDivElement>(
    document.getElementById('playerDiv')
  );
  playerDiv.innerHTML = '';
  for (let index in Players) {
    let newPlayer: HTMLDivElement = <HTMLDivElement>(
      document.createElement('div')
    );
    newPlayer.className = 'player';
    newPlayer.innerHTML = Players[index].score.toString();
    newPlayer.style.backgroundColor = Players[index].colour;
    playerDiv.appendChild(newPlayer);
  }
}

function rollDice() {
  //make it roll a 6 sided die, show the result in the created dice, and add the score to the player
  let selection: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('playerSelector')
  );
  Players[selection.value].score++;
  console.log(Players[selection.value].score);
}

function updateStats() {
  for (let i = 0; i < playerRolls.length; i++) {}
}

function winGame() {
  let winner: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('rollDice')
  );

  if (Players[0].score >= 20) {
    winner.innerHTML = 'Winner: Player 1';
  } else if (Players[1].score >= 20) {
    winner.innerHTML = 'Winner: Player 2';
  }
}

function updateDisplay() {
  drawPlayers();
}
