import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/nhan-vien';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  listNhanVien: NhanVien[] = [];
  constructor(private employeeService: EmployeeService) {}

  handleDeleteEmployee(e: any, id: number) {
    this.employeeService.deleteEmployee(id);
  }

  ngDoCheck() {
    this.listNhanVien = this.employeeService.listNhanVien;
  }

  ngOnInit(): void {
    this.listNhanVien = this.employeeService.listNhanVien;
  }
}
