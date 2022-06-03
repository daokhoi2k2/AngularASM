import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-them',
  templateUrl: './employee-them.component.html',
  styleUrls: ['./employee-them.component.scss'],
})
export class EmployeeThemComponent implements OnInit {
  addNhanVien!: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addNhanVien = new FormGroup({
      ho: new FormControl('', [Validators.required]),
      ten: new FormControl('', [Validators.required]),
      ngaysinh: new FormControl(''),
      phai: new FormControl(),
      khuvuc: new FormControl(),
    });
  }

  xuly() {
    if (this.addNhanVien.valid) {
      this.addNhanVien.value.phai = JSON.parse(this.addNhanVien.value.phai);
      this.employeeService
        .addEmployee(this.addNhanVien.value)
        .subscribe((res) => {
          this.router.navigate(['/employee-list']);
          this.employeeService.refresh();
        });
    }
  }
}
