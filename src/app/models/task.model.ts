export interface Task {
  id: number;
  title: string;
  completed: boolean;
  assignedTo: Person[];
}
