import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { PersonService } from '../services/person.service';
import { Task } from '../models/task.model';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = { id: 0, title: '', completed: false, deadline: '', assignedTo: [], skills: [] };
  persons: Person[] = [];

  constructor(private taskService: TaskService, private personService: PersonService) {
    this.persons = this.personService.getPersons();
  }

  addTask(): void {
    if (this.task.title.length >= 5 && this.task.assignedTo.length > 0) {
      this.taskService.addTask(this.task);
      this.task = { id: 0, title: '', completed: false, deadline: '', assignedTo: [], skills: [] };
    }
  }

  addPerson(fullName: string, age: string): void {
    const ageNumber = parseInt(age, 10);
    if (fullName.length >= 5 && ageNumber > 18) {
      const person: Person = { id: 0, fullName, age: ageNumber };
      this.personService.addPerson(person);
      this.task.assignedTo.push(person);
    }
  }

  addSkill(skill: string): void {
    if (skill.length >= 5) {
      this.task.skills.push(skill);
    }
  }

  removeSkill(index: number): void {
    this.task.skills.splice(index, 1);
  }

  removePerson(index: number): void {
    this.task.assignedTo.splice(index, 1);
  }
}
