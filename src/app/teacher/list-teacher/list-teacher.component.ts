import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../../service/teacher.service";

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  teachers: Teacher[];

  constructor(private router:Router, private apiService: TeacherService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getTeachers()
      .subscribe( (data:any) => {
          this.teachers = data;
      });
  }

  deleteTeacher(teacher: Teacher): void {
    this.apiService.deleteTeacher(teacher.id)
      .subscribe( data => {
        this.teachers = this.teachers.filter(u => u !== teacher);
      })
  };

  editTeacher(teacher: Teacher): void {
    this.router.navigateByUrl('/edit-teacher', {state: teacher});
  };

  addTeacher(): void {
    this.router.navigate(['add-teacher']);
  };

}
