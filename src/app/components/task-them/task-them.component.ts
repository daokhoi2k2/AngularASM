import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuanService } from 'src/app/services/duan.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.scss'],
})
export class TaskThemComponent implements OnInit {
  listTask: Task[] = [];
  listDuAn: DuAn[] = [];
  listEmployee: NhanVien[] = [];
  newTask!: FormGroup;
  constructor(
    private taskService: TaskService,
    private duAnService: DuanService,
    private employeeService: EmployeeService,
    private fbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listTask = this.taskService.listTask;
    this.listEmployee = this.employeeService.listNhanVien;
    this.listDuAn = this.duAnService.listDuAn;
    this.newTask = this.fbuilder.group({
      id: [''],
      tenTask: [''],
      moTa: [''],
      duAnID: [''],
      nhanvienID: [''],
      priority: [''],
      status: [''],
    });
  }

  handleClickTask() {
    this.taskService.addTask(this.newTask.value).subscribe((res) => {
      this.router.navigate(['/task-list']);
    })
  }
}
