import { Injectable } from '@angular/core';
import { Iuser, Icourses, courses, Ijoin } from '../app.model';
import { HttpClient } from '@angular/common/http';
import { Observable, range } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  GET_ALL_COURSES = 'http://localhost:3142/api/courses/all'
  ADD_COURSE = 'http://localhost:3142/api/courses/add'
  GET_COURSE_BY_ID = 'http://localhost:3142/api/courses/get/'
  WITHDRAW_COURSE = 'http://localhost:3142/api/courses/withdraw'
  GET_COURSE_VACANCIES = 'http://localhost:3142/api/courses/getVacancies/'
  UPDATE_COURSE_VACANCIES = 'http://localhost:3142/api/courses/updateVacancies'
  ENROLE_ON_COURSE = 'http://localhost:3142/api/courses/enrole'
  GET_ALL_JOINS = 'http://localhost:3142/api/courses/get/join/all'
  GET_JOIN_BY_ID = 'http://localhost:3142/api/courses/get/join/'
  GET_USER_JOINS = 'http://localhost:3142/api/courses/get/join/user/'
  GET_USER_COURSES = 'http://localhost:3142/api/courses/get/courses/user/'

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<courses[]>{
    console.log('Entramos en la petición')
    return this.http.get<courses[]>(this.GET_ALL_COURSES)
  }

  getAllUserJoins(userId: string): Observable <Ijoin[]>{
    return this.http.get<Ijoin[]>(this.GET_USER_JOINS+userId);
  }

  getAllUserCourses(userId: string): Observable<courses[]>{
    console.log('courseServices-userId:'+userId)
    return this.http.get<courses[]>(this.GET_USER_COURSES+userId)
  }

  enroleOnCourse(newUserId: string, newCourseId: string): Observable<string|undefined>{
    return this.http.post<string>(this.ENROLE_ON_COURSE, {userId: newUserId, courseId: newCourseId})
  }

  getJoinById(joinId: string): Observable<Ijoin>{
    return this.http.get<Ijoin>(this.GET_JOIN_BY_ID+joinId)
  }
 
}
