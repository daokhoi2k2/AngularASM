import { Component, OnInit } from '@angular/core';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuanService } from 'src/app/services/duan.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.scss'],
})
export class TaskThemComponent implements OnInit {
  listDuAn: DuAn[] = [];
  listEmployee: NhanVien[] = [];
  constructor(
    private duanService: DuanService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.listDuAn = this.duanService.listDuAn;
    this.listEmployee = this.employeeService.listNhanVien;
  }
}
