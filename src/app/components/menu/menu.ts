import {Component, View} from 'angular2/angular2';
const TEMPLATE = require('./menu.tpl.html');
const STYLE = require('./menu.styl');

// Router
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'lh-menu'
})
@View({
    directives: [ROUTER_DIRECTIVES],
    template: TEMPLATE,
    styles: [STYLE]
})
export class Menu {
}
