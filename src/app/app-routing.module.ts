import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DuanDetailComponent } from './components/duan-detail/duan-detail.component';
import { DuanListComponent } from './components/duan-list/duan-list.component';
import { DuanThemComponent } from './components/duan-them/duan-them.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeThemComponent } from './components/employee-them/employee-them.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskThemComponent } from './components/task-them/task-them.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'duan-list',
    component: DuanListComponent,
  },
  {
    path: 'duan-detail/:id',
    component: DuanDetailComponent,
  },
  {
    path: 'duan-them',
    component: DuanThemComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-them',
    component: EmployeeThemComponent,
  },
  {
    path: 'task-list',
    component: TaskListComponent,
  },
  {
    path: 'task-detail/:id',
    component: TaskDetailComponent,
  },
  {
    path: 'task-them',
    component: TaskThemComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
