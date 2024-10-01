// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    task.id = this.nextId++;
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  filterTasks(completed: boolean): Task[] {
    return this.tasks.filter(task => task.completed === completed);
  }
}
