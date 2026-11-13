
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonLabel
} from '@ionic/angular';

import { TaskService, TodoTask } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCheckbox,
    IonLabel
  ]
})
export class HomePage {
  tasks: TodoTask[] = [];

  constructor(private taskService: TaskService) {}

  ionViewWillEnter() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
    this.loadTasks();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  get completedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }
}
