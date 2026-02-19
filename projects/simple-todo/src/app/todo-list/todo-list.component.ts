import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';
  // .trim() -> " " into "" 
  empty = this.newTask.trim(); // "" -> false, " " -> true

  addTask() {
    // console.log(this.empty);
    if (!this.empty) {
      return;
    }
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
