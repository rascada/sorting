import { Component } from 'angular2/core';

import SortingComponent from '../sorting/sorting.component';
const template = require('./app.component.jade');
const style = require('./app.component.styl');

@Component({
    directives: [SortingComponent],
    selector: 'angular2',
    styles: [style],
    template,
})
class AppComponent {}

export default AppComponent;
