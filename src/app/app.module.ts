import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DuanListComponent } from './components/duan-list/duan-list.component';
import { DuanThemComponent } from './components/duan-them/duan-them.component';
import { DuanSuaComponent } from './components/duan-sua/duan-sua.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskThemComponent } from './components/task-them/task-them.component';
import { TaskSuaComponent } from './components/task-sua/task-sua.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeThemComponent } from './components/employee-them/employee-them.component';
import { EmployeeSuaComponent } from './components/employee-sua/employee-sua.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DuanDetailComponent } from './components/duan-detail/duan-detail.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    DuanListComponent,
    DuanThemComponent,
    DuanSuaComponent,
    TaskListComponent,
    TaskThemComponent,
    TaskSuaComponent,
    EmployeeListComponent,
    EmployeeThemComponent,
    EmployeeSuaComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    DuanDetailComponent,
    TaskDetailComponent,
    DashBoardComponent,
    LoginComponent,
    ChangePasswordComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
