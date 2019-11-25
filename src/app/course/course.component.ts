import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router'
import { ICourse } from '../models/ICourse';
import { NbMenuItem } from '@nebular/theme';
import { CourseDataService } from '../services/course-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input()
  menu: NbMenuItem[] = [];

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private courseDataService: CourseDataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.coursesService.getCourseById(params['id-course']).subscribe(course =>
          {
            this.course = course;
            this.initMenu(course);
          });
      });
  }

  get course(): ICourse {
    return this.courseDataService.course;
  }
  set course(value: ICourse) {
    this.courseDataService.course = value;
  }

  initMenu(course: ICourse) {
    var menu = course.lessons.map(lesson =>  {
      return {
        title: lesson.title,
        // icon: 'layout-outline',
        link: `/course/${this.course._id}/lesson/${lesson._id}`
      }
    });
    this.menu = menu;
  }
}


