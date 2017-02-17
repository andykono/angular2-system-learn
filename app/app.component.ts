import { Component } from '@angular/core';

const todos = [
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
    todos = todos;

    toggle(todo: any){
        todo.complited = !todo.complited;
    };

    delete(todo:any){
        let idx = this.todos.indexOf(todo);
        if(idx!=-1){
            this.todos.splice(idx, 1);
        }
    };
}