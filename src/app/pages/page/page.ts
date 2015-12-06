import {Component, View} from 'angular2/angular2';
const TEMPLATE = require('./page.tpl.html');

import {FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'coding'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: TEMPLATE
})
export class Page {
    public hero: Hero = new Hero('2', 'Joh snow');
}

class Hero{
    constructor(
        public id: string,
        public name: string
    ){
    }
}