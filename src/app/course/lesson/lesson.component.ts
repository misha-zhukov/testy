import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from 'src/app/models/ILesson';
import { CourseDataService } from 'src/app/services/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { IOption } from 'src/app/models/IOption';
import { IStep } from 'src/app/models/IStep';

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
  finalResultPct: number;

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(courseParams => {
        this.activatedRoute.params.subscribe(lessonParams => {
          if (this.courseDataService.course && this.courseDataService.course._id === courseParams['id-course'])  {
            this.lesson = this.courseDataService.course.lessons.filter(x => x._id === lessonParams['id-lesson'])[0];
          } else {
          this.coursesService.getLessonById(courseParams['id-course'], lessonParams['id-lesson']).subscribe(lesson => {
            this.lesson = lesson
          });
        }
      });
    });
  }

  toggleCheckbox(option: IOption) {
    option.checked = !option.checked;
  }

  hasQuizes() {
    return this.lesson.steps.filter(x => x.options).length > 0;
  }

  submit() {
    let stepsWithQuizes: IStep[] = this.lesson.steps.filter(x => x.options);
    if(stepsWithQuizes) {
      let stepRatioRightSum = 0;
      for (const step of stepsWithQuizes) {
        let optionsRightSum = 0;
        for (const option of step.options) {
          optionsRightSum += +(option.checked == option.right);
        }
        stepRatioRightSum += optionsRightSum / step.options.length;
      }

      this.finalResultPct = 100 * stepRatioRightSum / stepsWithQuizes.length;
    }
  }

  finish() {

  }
}
