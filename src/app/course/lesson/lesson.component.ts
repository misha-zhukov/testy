import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from 'src/app/models/ILesson';
import { CourseDataService } from 'src/app/services/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  constructor(private courseDataService: CourseDataService, private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService) { 
  }

  lesson: ILesson;

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(courseParams => {
        this.activatedRoute.params.subscribe(lessonParams => {
          if (this.courseDataService.course && this.courseDataService.course._id === courseParams['id-course'])  {
            this.lesson = this.courseDataService.course.lessons.filter(x => x._id === lessonParams['id-lesson'])[0];
          }  else {
          this.coursesService.getLessonById(courseParams['id-course'], lessonParams['id-lesson']).subscribe(lesson => {
            this.lesson = lesson
          });
        }
      });
    });
  }
}
