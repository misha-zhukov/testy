import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { NbMenuModule, NbCardModule, NbInputModule,
  NbButtonModule, NbStepperModule, NbCheckboxModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { CourseContentComponent } from './course-content/course-content.component';
import { CourseRoutingModule } from './course-routing.module';
import { LessonComponent } from './lesson/lesson.component';

@NgModule({
  declarations: [CourseComponent, CourseContentComponent, LessonComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NbMenuModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    CourseRoutingModule,
    NbStepperModule,
    NbCheckboxModule
  ]
})
export class CourseModule { }
