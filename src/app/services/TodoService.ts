/// <reference path="../../../typings/tsd.d.ts" />

import {bind, Inject} from 'angular2/di';

interface Todo {
  id: number;
  title: string;
  status: string;
  createdAt: Date;
}

let counter = 0;

const data: Todo[] = [
  { id: ++counter, title: 'Angular2 Router', status: 'done', createdAt: new Date() },
  { id: ++counter, title: 'Angular2 Component', status: 'done', createdAt: new Date() },
  { id: ++counter, title: 'Angular2 Core Directives', status: 'done', createdAt: new Date() },
  { id: ++counter, title: 'Angular2 Custom Directives', status: 'done', createdAt: new Date() },
  { id: ++counter, title: 'Angular2 Dependence Injection', status: 'done', createdAt: new Date() },
  { id: ++counter, title: 'Angular2 Form', status: 'pending', createdAt: new Date() },
  { id: ++counter, title: 'Include Development environment', status: 'pending', createdAt: new Date() },
  { id: ++counter, title: 'Include Production environment', status: 'pending', createdAt: new Date() },
  { id: ++counter, title: 'Unit tests', status: 'pending', createdAt: new Date() }
];

function cloneObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Our Todo Service that uses Store helper class for managing our state
export class TodoService {

  private _todos: Array<Todo>;

  constructor() {
    this._todos = cloneObj(data);
  }

  addOne(title) {
    this._todos.push({
      id: ++counter,
      title: title,
      status: 'pending',
      createdAt: new Date()
    });
  }

  removeOne(id) {
    const n = this._todos.length;
    for (let i = 0; i < n; i++) {
      if (this._todos[i].id === id) {
        this._todos.splice(i, 1);
        return 1;
      }
    }
    return 0;
  }

  find() {
    return cloneObj(this._todos);
  }
}
