import { Component, OnInit, Input } from '@angular/core';
import { IOption } from 'src/app/models/IOption';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  option;

  @Input()
  options: IOption[];

  constructor() { }

  ngOnInit() {
  }

}
