import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from 'src/app/models/ICourse';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {
  courses: ICourse[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getAllCourses()
    .subscribe(courses => {
      this.courses = courses
    });
  }

  addNewCourse(){
    this.courses.unshift(new Course())
  }
}
