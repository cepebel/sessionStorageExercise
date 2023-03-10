import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Iuser, Icourses } from '../app.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseCardComponent implements OnInit {
  filterSelection:string = '';
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
