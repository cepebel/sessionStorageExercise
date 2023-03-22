import { courses, users } from './../app.model';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent implements OnInit {
  COURSES: courses[] = []
  displayedColumns: string[] = ['courseName', 'courseType', 'etsCredits', 'semester', 'actions']
  myUserString: string = ''
  myUser: users = {}
  myCourses: courses[] = []
  
  constructor(private courseServices: CoursesService) { }

  ngOnInit(): void {
    this.myUserString = sessionStorage.getItem("myuser") || ''
    this.myUser = JSON.parse(this.myUserString)

    this.courseServices.getAllCourses().subscribe(res=>{
      this.COURSES = res
      console.log('Cursos:'+this.COURSES)
    })
    console.log('Usuario para todos los cursos: '+this.myUser.username)
    this.courseServices.getAllUserCourses(this.myUser.userId || '').subscribe(res=>{
      this.myCourses = res
    })
  }

  enroleOnCourse(courseId: string){
    console.log("Entro en enrole")
    let messg = this.courseServices.enroleOnCourse(this.myUser.userId || '', courseId).subscribe(res=>{
      return res
    })
    console.log(messg)
  }

  

}
