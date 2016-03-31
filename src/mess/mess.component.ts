import { Component, Input, ViewEncapsulation } from 'angular2/core';

const template = require('./mess.component.jade');
const styles = [require('./mess.component.styl')];

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'mess',
  template,
  styles,
})
class MessComponent {
  @Input() numbers: number[];
}

export default MessComponent;
