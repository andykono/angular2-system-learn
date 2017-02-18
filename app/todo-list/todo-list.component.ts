import {
    Component
} from '@angular/core';
import {
    Todo
} from '../shared/todo';
import {
    todos
} from '../shared/data';


@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
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