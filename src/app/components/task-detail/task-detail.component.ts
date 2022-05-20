import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  id: any = '';
  taskDetail: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskServices: TaskService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const result = this.taskServices.listTask.filter((item) => {
      return item.id == this.id;
    })[0];
    this.taskDetail = result;
    console.log(this.taskDetail);
  }

}
