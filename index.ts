// Import stylesheets
import './style.css';
import { Player } from './models/Player';
import { Colour } from './models/Colour.enum';

init();

function init() {
  //players
  let playerSelector: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('playerSelector')
  );

  let player1: Player = new Player('Player 1', 0);
  let player2: Player = new Player('Player 2', 0);

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
}

function changeColour() {}

function rollDice(){}