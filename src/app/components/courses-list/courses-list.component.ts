import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../models/ICourse';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: ICourse[];
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getAllCourses()
      .subscribe(courses => this.courses = courses);
  }

}
