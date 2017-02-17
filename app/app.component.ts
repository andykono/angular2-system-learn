import { Component } from '@angular/core';

class Todo {
    title: string;
    complited: boolean
};

const todos: Todo[] = [
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
    todos: Todo[] = todos;

    toggle(todo: Todo) {
        todo.complited = !todo.complited;
    };

    delete(todo: Todo) {
        let idx = this.todos.indexOf(todo);
        if (idx != -1) {
            this.todos.splice(idx, 1);
        }
    };
}