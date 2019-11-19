import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-question-stepper',
  templateUrl: './question-stepper.component.html',
  styleUrls: ['./question-stepper.component.scss']
})
export class QuestionStepperComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }
  course: any;

  ngOnInit() {
    this.coursesService.getOneCourse(1).subscribe(course => this.course = course);
  }

}
