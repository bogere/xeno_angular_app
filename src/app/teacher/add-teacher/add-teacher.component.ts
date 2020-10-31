import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {TeacherService} from "../../service/teacher.service";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
   
  addTeacherForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,private router: Router, 
    private teacherApiService: TeacherService,
    private userApiService: ApiService
    ) { }

  ngOnInit() {
    this.addTeacherForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      lastName: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      address: ['', [Validators.required]],
      //gender: ['', Validators.required],
      contact: ['', [Validators.required]],
      joinedDate: ['', [Validators.required]],
    });
  }

  onSubmit() {
      const self = this;
      if(self.addTeacherForm.invalid){
        return;
      }
      
      const _teacherForm = this.addTeacherForm.value;
      let teacherObject = {
         userId: "1",
         address: _teacherForm.address,
         contact: _teacherForm.contact,
         //joinedDate: _teacherForm.joinedDate,
         createdBy: "admin",
         updatedBy: "admin",
         gender: "male"
      }
      let teacherUser = {
        username: _teacherForm.username,
        email: _teacherForm.email,
        firstName: _teacherForm.firstName,
        lastName: _teacherForm.lastName,
        password: _teacherForm.password,
        userType: "teacher",
        createdBy: "admin",
        updatedBy: "admin"
      }

    //first create the user before u create teacher (respect data entity organisation)
      //self.userApiService.createUser(teacherUser)
        //.subscribe( (newUser:any) =>{
          //debugger;
          self.teacherApiService.createTeacher(teacherObject)
              .subscribe( data => {
                debugger;
                self.router.navigate(['list-teacher']);
          });  
        //})
  }

}
