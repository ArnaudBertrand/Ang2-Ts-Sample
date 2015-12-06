/** Annotations **/
import {Component, View} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

/** Directives **/
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

/** Pages **/
import {Page} from './pages/page/page.ts';
import {Home} from './pages/home/home.ts';

/** Components **/
import {Header} from './components/header/header.ts';
import {Menu} from './components/menu/menu.ts';

/** App component **/
const STYLE = require('./app.styl');
const TEMPLATE = require('./app.tpl.html');

@Component({
    selector: 'app'
})
@View({
    directives: [
        Page,
        Header,
        Home,
        Menu,
        ROUTER_DIRECTIVES
    ],
    template: TEMPLATE,
    styles: [STYLE]
})
@RouteConfig([
    { path: '/', as:'Home', component: Home},
    { path: '/page', as:'Page', component: Page}
])
export class App {}
