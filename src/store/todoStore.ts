import { create } from 'zustand';
import { Task, TaskCategory } from '../types';

interface TodoState {
  tasks: Task[];
  darkMode: boolean;
  addTask: (title: string, category: TaskCategory, dueDate: Date | null) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTaskOrder: (tasks: Task[]) => void;
  toggleDarkMode: () => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  tasks: [],
  darkMode: false,
  addTask: (title, category, dueDate) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
          category,
          dueDate,
          createdAt: new Date(),
          order: state.tasks.length,
        },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  updateTaskOrder: (tasks) => set({ tasks }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));