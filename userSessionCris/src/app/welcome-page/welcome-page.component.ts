import { CoursesService } from '../services/courses.service';
import { Iuser, Icourses, users } from './../app.model';
import { Component, OnInit } from '@angular/core';
import { Observable, range } from 'rxjs';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  myCourses: Icourses[] = []
  myUserString?: string 
  myUser: users = {}

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
   this.myUserString = sessionStorage.getItem("myuser") || ''
   this.myUser = JSON.parse(this.myUserString)
   console.log('Usuario logeado: '+this.myUser.username)
 
  }
  cerrarSesion(){
    sessionStorage.clear();
  }
 

}
