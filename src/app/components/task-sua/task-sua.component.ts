import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuanService } from 'src/app/services/duan.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.scss'],
})
export class TaskSuaComponent implements OnInit {
  listTask: Task[] = [];
  listDuAn: DuAn[] = [];
  listEmployee: NhanVien[] = [];
  task: Task = {} as Task;
  newTask!: FormGroup;
  constructor(
    private taskService: TaskService,
    private duAnService: DuanService,
    private employeeService: EmployeeService,
    private fbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id).subscribe((task) => {
      this.task = task;

      this.newTask = this.fbuilder.group({
        id: [this.task.id],
        tenTask: [this.task.tenTask],
        moTa: [this.task.moTa],
        duAnID: [this.task.duAnID],
        nhanvienID: [this.task.nhanvienID],
        priority: [this.task.priority],
        status: [this.task.status],
      });
      this.listTask = this.taskService.listTask;
      this.listEmployee = this.employeeService.listNhanVien;
      this.listDuAn = this.duAnService.listDuAn;
    });

    this.newTask = this.fbuilder.group({
      id: [this.task.id],
      tenTask: [this.task.tenTask],
      moTa: [this.task.moTa],
      duAnID: [this.task.duAnID],
      nhanvienID: [this.task.nhanvienID],
      priority: [this.task.priority],
      status: [this.task.status],
    });
    this.listTask = this.taskService.listTask;
    this.listEmployee = this.employeeService.listNhanVien;
    this.listDuAn = this.duAnService.listDuAn;
  }

  handleClickTask() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.updateTask(id, this.newTask.value).subscribe(() => {
      this.router.navigate(['/task-list']);
    });
  }
}
