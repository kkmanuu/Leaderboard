const displayToScreen = (apiReturnObject, container) => {
  const playerList = apiReturnObject.result;
  playerList.forEach((player) => {
    const individualPlayer = document.createElement('li');
    const playersName = document.createElement('p');
    const playersScore = document.createElement('p');
    individualPlayer.className = 'name-and-score-li';
    playersName.innerHTML = `${player.user}:`;
    playersScore.innerHTML = ` ${player.score}`;
    container.appendChild(individualPlayer);
    individualPlayer.appendChild(playersName);
    individualPlayer.appendChild(playersScore);
  });
};

export default displayToScreen;