import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-sua',
  templateUrl: './employee-sua.component.html',
  styleUrls: ['./employee-sua.component.scss'],
})
export class EmployeeSuaComponent implements OnInit {
  addNhanVien!: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const employee = this.employeeService.getEmployee(id);
    this.addNhanVien = new FormGroup({
      ho: new FormControl(employee.ho, [Validators.required]),
      ten: new FormControl(employee.ten, [Validators.required]),
      ngaysinh: new FormControl(employee.ngaysinh),
      phai: new FormControl(employee.phai),
      khuvuc: new FormControl(employee.khuvuc),
    });
  }

  xuly() {
    if (this.addNhanVien.valid) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.employeeService.updateEmployee(id, this.addNhanVien.value);
      this.router.navigate(['/employee-list']);
    }
  }
}
