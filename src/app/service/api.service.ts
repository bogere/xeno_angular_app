import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  userUrl: string = ' http://localhost:8080/api/v1/users/';
  authUrl: string = 'http://localhost:8080/auth';

  login(loginPayload) : Observable<any> {
    const body = new HttpParams()
                        .set("username", loginPayload.username)
                        .set("password", loginPayload.password);
                        
    return this.http.post(this.authUrl + '/login', 
      body.toString(),
       {
         headers: new HttpHeaders()
         .set('Content-Type', 'application/x-www-form-urlencoded')
       }
    )
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.userUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.userUrl + id);
  }

  createUser(registerPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.authUrl + '/createUser', registerPayload);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.userUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.userUrl + id);
  }

}
