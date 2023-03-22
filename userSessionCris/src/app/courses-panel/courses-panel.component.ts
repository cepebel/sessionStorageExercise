import { Component, OnInit } from '@angular/core';
import { Icourses, Iuser, users } from '../app.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-panel',
  templateUrl: './courses-panel.component.html',
  styleUrls: ['./courses-panel.component.scss']
})
export class CoursesPanelComponent implements OnInit {
  myCourses: Icourses[] = []
  myUserString?: string 
  myUser: users = {}

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.myUserString = sessionStorage.getItem("myuser") || ''
    this.myUser = JSON.parse(this.myUserString)
  }
  cerrarSesion(){
    sessionStorage.clear();
  }

}
