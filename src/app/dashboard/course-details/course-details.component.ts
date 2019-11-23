import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router'
import { ICourse } from '../../models/ICourse';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input()
  course: ICourse = new Course();

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.coursesService.getCourseById(params['id']).subscribe(course => 
          { 
            this.course = course  
          });
      });
  }

}
