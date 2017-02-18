import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo} from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter(); 

    toggle(){
        this.todo.complited = !this.todo.complited;
    }

    onDelete(){
        this.delete.emit(this.todo);
    }
}