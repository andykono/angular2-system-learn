import { Component } from '@angular/core';

class Todo {
    constructor(
        public title: string,
        public complited: boolean = false
    ) {}
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
    newTodoTitle: string = '';

    create(){
        let todo: Todo = new Todo(this.newTodoTitle);
        this.todos.push(todo)
        this.newTodoTitle = '';
    };

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