const score = document.querySelector('#score');
const name = document.querySelector('#name');

const apiSend = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/%20Y7ZXYP3t7YJxEb1QKBYe/scores/',
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
    });
  const response = await data.json();
  return response;
};

export default apiSend;
