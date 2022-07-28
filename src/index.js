import './styles.css';

import apiSend from './modules/api';
import getData from './modules/get';

getData();
const submitBtn = document.querySelector('.input-3');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  apiSend();
  alert('Added successfully');
  document.getElementById('name').value = '';
  document.querySelector('.input-2').value = '';
});
