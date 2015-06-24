/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'todo-list.html',
  directives: [NgFor, NgIf]
})
// Component controller
class MyAppComponent {
  name: string;
  todos: Array<string>;

  constructor() {
    this.name = 'Alice';
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event: KeyboardEvent) {
    if($event.which === 13) {
      const target = <HTMLInputElement> $event.target;
      this.addTodo(target.value);
      target.value = null;
    }
  }
}

bootstrap(MyAppComponent);
