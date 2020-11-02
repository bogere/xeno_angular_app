import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {TeacherService} from "../../service/teacher.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  addStudentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,private router: Router, 
    private teacherApiService: TeacherService,
    private userApiService: ApiService
  ) { }

  ngOnInit() {

    this.addStudentForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      lastName: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      guardian: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      studentAddress: ['', [Validators.required]],
      guardianContact: ['', [Validators.required]],
      classYear:['', [Validators.required]],
      admissionNumber: ['', [Validators.required]],
      joinedDate: ['', [Validators.required]],
      registrationDate: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const self = this;
    if(self.addStudentForm.invalid){
      return;
    }
    
    const _studentForm = this.addStudentForm.value;
    let studentObject = {
       userId: "1",
       address: _studentForm.address,
       contact: _studentForm.contact,
       //joinedDate: _studentForm.joinedDate,
       createdBy: "admin",
       updatedBy: "admin",
       gender: "male"
    }
    let studentUser = {
      username: _studentForm.username,
      email: _studentForm.email,
      firstName: _studentForm.firstName,
      lastName: _studentForm.lastName,
      password: _studentForm.password,
      userType: "teacher",
      createdBy: "admin",
      updatedBy: "admin"
    }

  //first create the user before u create teacher (respect data entity organisation)
    self.userApiService.createUser(studentUser)
       .subscribe( (newUser:any) =>{
         studentObject.userId = newUser.id;
        self.teacherApiService.createTeacher(studentObject)
            .subscribe( data => {
              self.router.navigate(['list-student']);
        });  
      })
}

}
