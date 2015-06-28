/// <reference path="../../../../typings/tsd.d.ts" />

// Angular 2
import {Component, View, Directive, coreDirectives} from 'angular2/angular2';

// App
import {appDirectives} from '../../directives/directives';
import {TodoService} from '../../services/TodoService';

// Use webpack to get files as a raw string using raw-loader
const template = require('./todo.html');

// Simple component
@Component({
  selector: 'todo'
})
@View({
  directives: [coreDirectives, appDirectives],
  template: template
})
export class Todo {

  constructor(private todoService: TodoService) {
  }

  addOne($event, todoTitleField) {
    $event.preventDefault();
    this.todoService.addOne(todoTitleField.value);
    todoTitleField.value = null;
    todoTitleField.focus();
  }

  removeOne(todo) {
    this.todoService.removeOne(todo.id);
  }

  find() {
    return this.todoService.find();
  }
}
