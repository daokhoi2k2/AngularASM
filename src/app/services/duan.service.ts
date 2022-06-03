import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DuAn } from '../du-an';

@Injectable({
  providedIn: 'root',
})
export class DuanService {
  listDuAn: DuAn[] = [];

  deleteDuAn = (id: number) => {
    this.listDuAn = this.listDuAn.filter((item) => {
      return item.id != id;
    })
    return this.http.delete(`http://localhost:3000/project/${id}`);
  };

  addDuAn = (data: DuAn) => {
    return this.http.post('http://localhost:3000/project', data);
  };

  updateDuAn = (id: number, data: DuAn) => {
    return this.http.put(`http://localhost:3000/project/${id}`, data);
  };

  getDuAn = (id: number) => {
    return this.http.get<DuAn>(`http://localhost:3000/project/${id}`);
  };

  refresh = () => {
    this.http.get('http://localhost:3000/project').subscribe((data) => {
      this.listDuAn = data as DuAn[];
    });
  }

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/project').subscribe((data) => {
      this.listDuAn = data as DuAn[];
    });
  }
}
