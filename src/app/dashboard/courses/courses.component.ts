import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/ICourse';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: ICourse[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getAllCourses()
    .subscribe(courses => {
      this.courses = courses
    });
  }

}
