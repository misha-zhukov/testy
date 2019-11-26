/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxValidationMessageComponent } from "./validation-message/validation-message.component";
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { PricingComponent } from './components/pricing/pricing.component';

const COMPONENTS = [NgxValidationMessageComponent];

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS, ListCoursesComponent, PricingComponent]
})
export class SharedModule {}
