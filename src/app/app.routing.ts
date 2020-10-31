import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register/register.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import { AddStudentComponent } from './student/add-student/add-student.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import {ListTeacherComponent} from './teacher/list-teacher/list-teacher.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path: 'add-teacher', component: AddTeacherComponent},
  {path: 'list-teacher', component: ListTeacherComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
