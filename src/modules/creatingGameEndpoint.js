const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createNewGame = async () => {
  const response = await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Alice Border Future Games',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Response Status: ${response.status}`);
  }

  const result = await response.json();
  return result.id; // Save and return the game ID
};

export default createNewGame;
