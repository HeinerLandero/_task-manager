// src/app/services/person.service.ts
import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: Person[] = [];
  private nextId = 1;

  constructor() {}

  getPersons(): Person[] {
    return this.persons;
  }

  addPerson(person: Person): void {
    person.id = this.nextId++;
    this.persons.push(person);
  }
}
