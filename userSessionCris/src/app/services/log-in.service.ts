import { catchError } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Iuser, users } from '../app.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  sessionUser: users = {}
  loggedUser: Iuser = {}
  GET_USER_BY_NAME = 'http://localhost:3000/users?name='
  GET_ALL_USERS = 'http://localhost:3142/api/users/all'
  ADD_USER = 'http://localhost:3142/api/userss/add'
  GET_USER_BY_ID = 'http://localhost:3142/api/users/get/'
  GET_USER_BY_EMAIL = 'http://localhost:3142/api/users/get/email/'

  constructor(private http: HttpClient) { }

  getUserByMail(mail:string): Observable<users>{
    return this.http.get<users>(this.GET_USER_BY_EMAIL+mail)
  }

  checkandLoginObservable(name: string): Observable <Iuser> {
    return this.http.get<Iuser>(this.GET_USER_BY_NAME+ name)
  }
  
}
