import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Teacher} from "../model/teacher.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/api/v1/teachers/';

  getTeachers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getTeacherById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createTeacher(teacher: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, teacher);
  }

  updateTeacher(teacher: Teacher): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + teacher.id, teacher);
  }

  deleteTeacher(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
