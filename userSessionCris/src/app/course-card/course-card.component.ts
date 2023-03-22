import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Iuser, courses, users } from '../app.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseCardComponent implements OnInit {
  filterSelection:string = '';
  myCourses: courses[] = []
  myUserString?: string 
  myUser: users = {}


  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
   this.myUserString = sessionStorage.getItem("myuser") || ''
   this.myUser = JSON.parse(this.myUserString)
   this.coursesService.getAllUserCourses(this.myUser.userId || '').subscribe(res => {this.myCourses = res})
   console.log(this.myCourses)
  }

}
