import { Component, OnInit } from '@angular/core';
import { DuanService } from 'src/app/services/duan.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  duanAmount!: number;
  nhanvienAmount!: number;
  taskAmount!: number;
  constructor(
    private taskService: TaskService,
    private employeeService: EmployeeService,
    private duanService: DuanService
  ) {}

  ngDoCheck() {
    this.taskAmount = this.taskService.listTask.length + 1;
    this.duanAmount = this.duanService.listDuAn.length + 1;
    this.nhanvienAmount = this.employeeService.listNhanVien.length + 1;
  }

  ngOnInit(): void {}
}
