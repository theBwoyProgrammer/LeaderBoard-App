import { listObj } from './object';

export default class ListObj {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  static displayAny(scores) {
    const list = document.querySelector('.scores-ul');
    for (let i = 0; i < listObj.length; i += 1) {
      list.innerHTML += `<li class="li">${scores[i].name}: ${scores[i].scpres}</li>`;
    }
  }
}