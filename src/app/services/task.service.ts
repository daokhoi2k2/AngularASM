import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  listTask: Task[] = [];

  deleteTask = (id: number) => {
    return this.http.delete(`http://localhost:3000/task/${id}`);
  };

  addTask = (task: Task) => {
    return this.http.post(`http://localhost:3000/task`, task);
  };

  updateTask = (id: number, data: Task) => {
    return this.http.put(`http://localhost:3000/task/${id}`, data);
  };

  getTask = (id: number) => {
    return this.http.get<Task>(`http://localhost:3000/task/${id}`);
  };

  refresh = () => {
    this.http.get('http://localhost:3000/task').subscribe((data) => {
      this.listTask = data as Task[];
    });
  };

  constructor(private http: HttpClient) {
    this.refresh();
  }
}
