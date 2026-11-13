
import { Injectable } from '@angular/core';

export interface TodoTask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'todo_tasks';

  getTasks(): TodoTask[] {
    const saved = localStorage.getItem(this.storageKey);

    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved) as TodoTask[];
    } catch {
      return [];
    }
  }

  saveTasks(tasks: TodoTask[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(title: string, description: string): void {
    const tasks = this.getTasks();

    tasks.push({
      id: Date.now(),
      title,
      description,
      completed: false
    });

    this.saveTasks(tasks);
  }

  toggleTask(id: number): void {
    const tasks = this.getTasks().map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    this.saveTasks(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter(task => task.id !== id);
    this.saveTasks(tasks);
  }
}
