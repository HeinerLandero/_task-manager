import { Person } from './person.model';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  deadline: string;
  assignedTo: Person[];
  skills: string[];
}

