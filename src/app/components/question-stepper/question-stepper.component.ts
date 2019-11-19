import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../../models/ICourse';
import { IQuestion } from '../../models/IQuestion';

@Component({
  selector: 'app-question-stepper',
  templateUrl: './question-stepper.component.html',
  styleUrls: ['./question-stepper.component.scss']
})
export class QuestionStepperComponent implements OnInit {
  course: ICourse;
  public questions: IQuestion[] = [];

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.coursesService.getOneCourse(this.route.snapshot.params['id']).subscribe(course => {
      console.log(course);
      this.course = course;
      this.questions = course.questions;
    });
  }

}
