
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/angular';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonItem,
    IonInput,
    IonTextarea,
    IonButton
  ]
})
export class AddTaskPage {
  title = '';
  description = '';

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  saveTask() {
    if (!this.title.trim()) {
      alert('Please enter a task title.');
      return;
    }

    this.taskService.addTask(
      this.title.trim(),
      this.description.trim()
    );

    alert('Task successfully added!');
    this.router.navigateByUrl('/home');
  }
}
