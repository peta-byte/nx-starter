import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@app-ng/data';

@Component({
  selector: 'app-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [];

  constructor(private http: HttpClient){
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
    // this.getData().then((value: Todo[]) => this.todos = value);
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  getData(): Promise<Todo[]> {
    return Promise.resolve([{ title: 'Todo 1' }, { title: 'Todo 2' }]);
  }
}
