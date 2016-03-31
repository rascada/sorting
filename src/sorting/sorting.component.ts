import { Component, ViewEncapsulation } from 'angular2/core';

import bubbleSort from '../algorithm/bubble';
import MessComponent from '../mess/mess.component';
const template = require('./sorting.component.jade');
const styles = [require('./sorting.component.styl')];

@Component({
  encapsulation: ViewEncapsulation.Native,
  directives: [MessComponent],
  selector: 'sort',
  template,
  styles,
})
class SortingComponent {
  title: string = 'bubble sort'
  amount: number = 100;
  speed: number = 50;
  mess: number[];
  algorithm;

  constructor() {
    this.mess = this.shuffle();
    this.algorithm = bubbleSort;
  }

  sort() {
    this.algorithm(this.mess, this.speed);
  }

  shuffle() {
    const array = [];

    for(let i = this.amount; i--;)
      array.push(Math.random() * 100 | 1);

    return array;
  }
}

export default SortingComponent;
