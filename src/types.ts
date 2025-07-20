export type TaskCategory = 'work' | 'personal' | 'urgent' | 'shopping' | 'health';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: TaskCategory;
  dueDate: Date | null;
  createdAt: Date;
  order: number;
}

export interface Quote {
  text: string;
  author: string;
}