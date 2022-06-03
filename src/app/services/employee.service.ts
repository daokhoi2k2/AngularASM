import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NhanVien } from '../nhan-vien';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  listNhanVien: NhanVien[] = [];

  deleteEmployee = (id: number) => {
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  };

  addEmployee = (employee: NhanVien) => {
    return this.http.post(`http://localhost:3000/employee`, employee);
  };

  updateEmployee = (id: number, data: NhanVien) => {
    return this.http.put(`http://localhost:3000/employee/${id}`, data);
  };

  getEmployee = (id: number) => {
    return this.http.get<NhanVien>(`http://localhost:3000/employee/${id}`);
  };

  refresh = () => {
    this.http.get(`http://localhost:3000/employee`).subscribe((data) => {
      this.listNhanVien = data as NhanVien[];
    });
  };

  constructor(private http: HttpClient) {
    this.refresh();
  }
}
