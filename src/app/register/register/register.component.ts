import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  invalidRegister: boolean = false;
  validRegister: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    debugger;
    const registerPayload = {
      username: this.registerForm.controls.username.value ,
      password: this.registerForm.controls.password.value
    }
    this.apiService.createUser(registerPayload).subscribe(data => {
      debugger;
      if(data.status === 201) {
        //this.router.navigate(['login']);
        this.validRegister = true;
      }else {
        this.invalidRegister = true;
        alert(data.message);
      }
      
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      firstName: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      lastName: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      userType:['admin'],
      createdBy: ['admin'],
      updatedBy: ['admin']
    });
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  };

}
