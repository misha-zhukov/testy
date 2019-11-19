import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-stepper',
  templateUrl: './question-stepper.component.html',
  styleUrls: ['./question-stepper.component.scss']
})
export class QuestionStepperComponent implements OnInit {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }
  course: any;

  ngOnInit() {
    this.coursesService.getOneCourse(this.route.snapshot.params['id']).subscribe(course => this.course = course);
  }

}
