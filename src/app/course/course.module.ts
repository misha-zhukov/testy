import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { NbMenuModule, NbCardModule, NbInputModule,
  NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { CourseContentComponent } from './course-content/course-content.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [CourseComponent, CourseContentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NbMenuModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    CourseRoutingModule
  ],
})
export class CourseModule { }
