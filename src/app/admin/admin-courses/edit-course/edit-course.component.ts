import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router'
import { ICourse } from '../../../models/ICourse';
import { Course } from 'src/app/models/Course';
import { Lesson } from 'src/app/models/Lesson';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

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

  saveCourse(event) {
    this.coursesService.updateCourse(this.course).subscribe(data => 
      { 
        data
      });;
  }

  addLesson(event) {
    this.course.lessons.unshift(new Lesson());
  }
}
