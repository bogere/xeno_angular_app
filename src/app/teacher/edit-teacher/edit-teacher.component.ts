import { Component, OnInit,Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {first} from "rxjs/operators";
import {Teacher} from "../../model/teacher.model";
import {TeacherService} from "../../service/teacher.service";

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  teacher: Teacher;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,private router: Router, 
    private teacherApiService: TeacherService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    const teacherDetails = history.state;

    this.editForm = this.formBuilder.group({
      id: [''],
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
    
    //initialise the editable values.
    this.editForm.setValue(teacherDetails)

  }

  onSubmit() {
    this.teacherApiService.updateTeacher(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Teacher updated successfully.');
            this.router.navigate(['list-teacher']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
