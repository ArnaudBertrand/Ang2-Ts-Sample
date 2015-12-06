/// <reference path="../../typings/_custom.d.ts" />

/* Angular 2 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

// global Angular core and other Angular module directives (form/router)
export var ANGULAR_DIRECTIVES: Array<any> = [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    ROUTER_DIRECTIVES,
];

// global App only directives
export var APP_DIRECTIVES: Array<any> = [
    ANGULAR_DIRECTIVES
];
