import { Component } from '@angular/core';

interface ITodo {
    title: string, 
    complited: boolean
};

const todos: ITodo[] = [
    {title: 'Learn JavaScript', complited: true},
    {title: 'Learn Angular 2', complited: false},
    {title: 'Wrte App', complited: false},
];

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Angular todo.';
    todos: ITodo[] = todos;

    toggle(todo: ITodo) {
        todo.complited = !todo.complited;
    };

    delete(todo: ITodo) {
        let idx = this.todos.indexOf(todo);
        if (idx != -1) {
            this.todos.splice(idx, 1);
        }
    };
}