import {Component} from '@angular/core';

export class AppComponent {
    
}

AppComponent.annotations = [
    new Component({
        selector: 'my-app',
        template: `<h1>Hello World</h1>`
    })
];