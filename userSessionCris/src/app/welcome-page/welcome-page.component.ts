import { CoursesService } from './../courses.service';
import { Iuser, Icourses } from './../app.model';
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
  myUser: Iuser = {}

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
   this.myUserString = sessionStorage.getItem("myuser") || ''
   this.myUser = JSON.parse(this.myUserString)[0]
   this.coursesService.getAllUserCoursers(this.myUser.courses).subscribe(res => {this.myCourses = res})
   console.log(this.myCourses)
  }

 

}
