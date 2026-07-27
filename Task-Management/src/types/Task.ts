export type TaskStatus = "Pending" | "Completed";

export interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: number;
  assignedName: string;
  status: TaskStatus;
}

