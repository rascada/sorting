import { Component } from 'angular2/core';

import MessComponent from './mess.component';
const template = require('./sorting.component.jade');

@Component({
  directives: [MessComponent],
  selector: 'sort',
  template,
})
class SortingComponent {
  amount: number = 20;
  mess: number[];

  constructor() {
    this.mess = this.shuffle();
  }

  shuffle() {
    const array = [];

    for(let i = this.amount; i--;)
      array.push(Math.random() * 100 | 1);

    return array;
  }
}

export default SortingComponent;
