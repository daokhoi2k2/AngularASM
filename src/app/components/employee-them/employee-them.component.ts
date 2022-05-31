import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-them',
  templateUrl: './employee-them.component.html',
  styleUrls: ['./employee-them.component.scss']
})
export class EmployeeThemComponent implements OnInit {
  addNhanVien!: FormGroup;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.addNhanVien = new FormGroup({
      ho: new FormControl("", [Validators.required]),
      ten:  new FormControl("", [Validators.required]),
      ngaysinh: new FormControl(""),
      phai: new FormControl(),
      khuvuc: new FormControl(),
    })
  }

  xuly() {
    if(this.addNhanVien.valid) {
      console.log(this.addNhanVien.value)
      this.employeeService.addEmployee(this.addNhanVien.value);
      this.router.navigate(["/employee-list"])
    }
  }

}
