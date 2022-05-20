import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  listTask: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.listTask = this.taskService.listTask;
  }
}
