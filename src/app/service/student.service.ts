import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from "../model/student.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/api/v1/students/';

  getStudents() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getStudentById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createStudent(student: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, student);
  }

  updateStudent(student: Student): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + student.id, student);
  }

  deleteStudent(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
