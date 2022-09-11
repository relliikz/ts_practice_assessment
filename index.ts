// Import stylesheets
import './style.css';
import { Player } from './models/Player';
import { Colour } from './models/Colour.enum';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let diceOne: HTMLElement = document.getElementById('diceDiv');
