import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
const TEMPLATE = require('./home.tpl.html');
const STYLE = require('./home.styl');

@Component({
    selector: 'coding'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: TEMPLATE,
    styles: [STYLE]
})
export class Home {
    public title: string = 'Home page';
}
