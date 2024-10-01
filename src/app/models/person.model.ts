
export interface Person {
  id: number;
  fullName: string;
  age: number;
}

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  assignedTo: Person[];
}
