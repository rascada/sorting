import { Component } from 'angular2/core';

import SortingComponent from './sorting.component';
const template = require('./app.component.jade');
const style = require('./app.component.styl');

@Component({
    directives: [SortingComponent],
    selector: 'angular2',
    styles: [style],
    template,
})
class AppComponent {
  title: string = 'ng2-webpack example';
  name: string = '';
}

export default AppComponent;
