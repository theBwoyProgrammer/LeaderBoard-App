const ul = document.querySelector('.scores-ul');
// eslint-disable-next-line consistent-return
const getData = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/%20Y7ZXYP3t7YJxEb1QKBYe/scores/');

  try {
    const response = await data.json();
    const list = response.result;
    list.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('li');
      li.innerHTML = `${item.user}: ${item.score}`;
      ul.appendChild(li);
    });
  } catch (error) {
    return error;
  }
};

export default getData;
