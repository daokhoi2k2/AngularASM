import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuanService } from 'src/app/services/duan.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.scss'],
})
export class DuanThemComponent implements OnInit {
  employeeList: NhanVien[] = [];
  constructor(
    private employeeService: EmployeeService,
    private duAnService: DuanService,
    private router: Router
  ) {}

    xuly(form: any) {
      const { valid, value } = form;
      if(valid) {
        value.id = this.duAnService.listDuAn.length + 1;
        this.duAnService.listDuAn.push(value);
        this.router.navigate(['/duan-list']);
    }
  }

  ngOnInit(): void {
    this.employeeList = this.employeeService.listNhanVien;
  }

  ngOnChecked() {
    console.log("Changed");
  }
}
