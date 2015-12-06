import {Component, View} from 'angular2/angular2';
const TEMPLATE = require('./header.tpl.html');
const STYLE = require('./header.styl');

@Component({
    selector: 'lh-header'
})
@View({
    template: TEMPLATE,
    styles: [STYLE]
})
export class Header {
}
