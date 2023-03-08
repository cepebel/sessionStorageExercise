import { Injectable } from '@angular/core';
import { Iuser, Icourses } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Observable, range } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  GET_COURSES_BY_ID = 'http://localhost:3000/courses?_id='
  myCourseString: string =''
  myCourses: Icourses[] = [{_id:1, type:"hola", name:"name", semester:0}]
  myStringHelp: string = "&_id="
  myQuery: string =''


  constructor(private http: HttpClient) { }

  getAllUserCoursers(id_course?: number[]): Observable <Icourses[]>{
    if(id_course == undefined){
      this.myCourseString = ""
    }
    else{
      this.myQuery = id_course?.join('&_id=')
       this.http.get<Icourses[]>(this.GET_COURSES_BY_ID +this.myQuery).subscribe(res => {
        this.myCourses = res
        console.log('respuesta recibida')
      })
    }
    return this.http.get<Icourses[]>(this.GET_COURSES_BY_ID +this.myQuery);
    
  }

 
}
