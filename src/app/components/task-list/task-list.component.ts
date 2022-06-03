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

  handleDeleteTask(e: any, id: number) {
    e.stopPropagation();
    this.taskService.deleteTask(id).subscribe((res) => {
      this.taskService.refresh();
    })
  }

  ngOnInit(): void {
    this.taskService.refresh();
  }

  ngDoCheck() {
    this.listTask = this.taskService.listTask;
  }
}
