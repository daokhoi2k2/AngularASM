import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NhanVien } from 'src/app/nhan-vien';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-sua',
  templateUrl: './employee-sua.component.html',
  styleUrls: ['./employee-sua.component.scss'],
})
export class EmployeeSuaComponent implements OnInit {
  addNhanVien!: FormGroup;
  employee: NhanVien = {} as NhanVien;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id).subscribe((employee: NhanVien) => {
      this.employee = employee;
      this.addNhanVien = new FormGroup({
        ho: new FormControl(employee.ho, [Validators.required]),
        ten: new FormControl(employee.ten, [Validators.required]),
        ngaysinh: new FormControl(employee.ngaysinh),
        phai: new FormControl(employee.phai),
        khuvuc: new FormControl(employee.khuvuc),
      });
      console.log(employee.phai);
    });
    this.addNhanVien = new FormGroup({
      ho: new FormControl(this.employee.ho, [Validators.required]),
      ten: new FormControl(this.employee.ten, [Validators.required]),
      ngaysinh: new FormControl(this.employee.ngaysinh),
      phai: new FormControl(this.employee.phai),
      khuvuc: new FormControl(this.employee.khuvuc),
    });


  }

  xuly() {
    if (this.addNhanVien.valid) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.addNhanVien.value.phai = JSON.parse(this.addNhanVien.value.phai);
      this.employeeService
        .updateEmployee(id, this.addNhanVien.value)
        .subscribe(() => {
          this.employeeService.refresh();
          this.router.navigate(['/employee-list']);
        });
    }
  }
}
