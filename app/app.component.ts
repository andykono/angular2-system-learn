import { Component } from '@angular/core';

const todos = [
    'Learn JavaScript',
    'Learn Angular 2',
    'Wrte App'
];

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Angular todo.';
    todos = todos;
}