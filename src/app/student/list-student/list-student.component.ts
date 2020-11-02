import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Student} from "../../model/student.model";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: Student[];

  constructor(private router:Router, private apiService: StudentService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getStudents()
      .subscribe( (data:any) => {
          this.students = data;
      });
  }

  deleteStudent(student: Student): void {
    this.apiService.deleteStudent(student.id)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      })
  };

  editStudent(student: Student): void {
    this.router.navigateByUrl('/edit-student', {state: student});
  };

  addStudent(): void {
    this.router.navigate(['add-student']);
  };


}
