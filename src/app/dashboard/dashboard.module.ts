import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { CoursesComponent } from './courses/courses.component';
import { NbMenuModule, NbCardModule, NbInputModule,
  NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { DashboardMenu } from './dashboard-menu';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [DashboardComponent, CoursesComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    NbMenuModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    NbButtonModule
  ],
  providers: [DashboardMenu]
})
export class DashboardModule { }
