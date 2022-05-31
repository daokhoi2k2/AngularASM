import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuanService } from 'src/app/services/duan.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.scss'],
})
export class DuanSuaComponent implements OnInit {
  employeeList: NhanVien[] = [];
  duAn: DuAn = {} as DuAn;
  constructor(
    private employeeService: EmployeeService,
    private duAnService: DuanService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  xuly(form: any) {
    const { valid, value } = form;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeList = this.employeeService.listNhanVien;
    this.duAnService.updateDuAn(id, value);
    this.router.navigate(['/duan-list']);
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeList = this.employeeService.listNhanVien;
    this.duAn = this.duAnService.getDuAn(id);
  }
}
