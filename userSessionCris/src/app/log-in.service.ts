import { catchError } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Iuser, Icourses } from './app.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  
  loggedUser: Iuser = {}
  GET_USER_BY_NAME = 'http://localhost:3000/users?name='

  constructor(private http: HttpClient) { }

  checkandLogIn(name: string): boolean {
    this.http.get<Iuser>(this.GET_USER_BY_NAME+ name).subscribe(res => {
      this.loggedUser = res
      sessionStorage.setItem("myuser", JSON.stringify(res));
      console.log('Acabo de recuperar el usuario')
    })
    console.log('Voy a comprobar si tiene valor')
    if (this.loggedUser == undefined){
      console.log('No hay valor')
      return false
    }
    else{
      return true
    } 
  } 

  checkandLoginObservable(name: string): Observable <Iuser> {
    return this.http.get<Iuser>(this.GET_USER_BY_NAME+ name)
  }
  private handleError (error: HttpErrorResponse){
    if(error.status === 0){
      console.error('An error occurred', error.error)
    }

  }
}
