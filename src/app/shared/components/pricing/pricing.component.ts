import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-pricing', templateUrl: './pricing.component.html', styleUrls: ['./pricing.component.scss']})
export class PricingComponent implements OnInit {
  freeFeatures : String[] = ['Basic Courses', 'Basic learning paths'];
  proFeatures : String[] = ['Career tracks', 'Members-only Content', 'Real-world Projects', 'Interview mockups'];
  constructor() {}

  ngOnInit() {}

}
