import './style.css';
import { submitScoreToAPI, retrieveScoreFromAPI } from './modules/apiCalls.js';
import displayToScreen from './modules/displayScore.js';

const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');
const form = document.querySelector('form');
const allPlayers = document.querySelector('.all-score');
const blackboard = document.querySelector('.black-board');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (playerName.value && playerScore.value) {
    submitScoreToAPI(playerName.value, playerScore.value);
    blackboard.style.border = '2px solid red';
    form.reset();
    setTimeout(() => {
      blackboard.style.border = 'none';
    }, 2000);
  }
});

refreshBtn.addEventListener('click', () => {
  allPlayers.innerHTML = '';
  retrieveScoreFromAPI().then((apiReturnObject) => displayToScreen(apiReturnObject, allPlayers));
});

window.addEventListener('load', () => {
  retrieveScoreFromAPI().then((apiReturnObject) => displayToScreen(apiReturnObject, allPlayers));
});