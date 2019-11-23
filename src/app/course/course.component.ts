import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router'
import { ICourse } from '../models/ICourse';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input()
  course: ICourse;
  menu: NbMenuItem[] = [];

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.coursesService.getCourseById(params['id']).subscribe(course => 
          { 
            this.course = course;
            this.initMenu(course);
          });
      });
  }

  initMenu(course: ICourse) {
    var menu = course.lessons.map(lesson =>  {
      return {
        title: lesson.title,
        icon: 'layout-outline',
        link: '/dashboard/courses'
      }
    });
    this.menu = menu;
  }
}


