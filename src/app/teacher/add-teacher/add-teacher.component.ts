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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      //gender: ['', Validators.required],
      contact: ['', Validators.required],
      joinedDate: ['', Validators.required],
    });
  }

  onSubmit() {
      const self = this;
      if(self.addTeacherForm.invalid){
        return;
      }
      
      const _teacherForm = this.addTeacherForm.value;
      debugger;
      let teacherObject = {
         userId: "",
         address: _teacherForm.address,
         contact: _teacherForm.contact,
         joinedDate: _teacherForm.joinedDate
      }

    //first create the user before u create teacher (respect data entity organisation)
      self.userApiService.createUser(this.addTeacherForm.value)
        .subscribe( newUser =>{
          self.teacherApiService.createTeacher(teacherObject)
              .subscribe( data => {
                self.router.navigate(['list-user']);
          });  
        })
  }

}
