import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register/register.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import { AddStudentComponent } from './student/add-student/add-student.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import {ListTeacherComponent} from './teacher/list-teacher/list-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { ListStudentComponent } from './student/list-student/list-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path: 'add-teacher', component: AddTeacherComponent},
  {path: 'list-teacher', component: ListTeacherComponent},
  {path: 'edit-teacher', component: EditTeacherComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'list-student', component: ListStudentComponent},
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
