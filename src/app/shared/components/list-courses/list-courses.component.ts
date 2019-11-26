import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from 'src/app/models/ICourse';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {
  courses: ICourse[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getAllCourses()
    .subscribe(courses => {
      this.courses = courses;
    });
  }
}
