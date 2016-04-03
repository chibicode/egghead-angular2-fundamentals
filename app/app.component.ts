import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';

@Component({
  selector: 'my-app',
  directives: [TodoInput],
  template: '<h1><todo-input></todo-input>My First Angular 2 App</h1>'
})
export class AppComponent { }
