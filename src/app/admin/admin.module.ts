import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AdminOperationsComponent } from './components/admin-operations/admin-operations.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../components/header/header.component';

import {
  NbLayoutModule
} from '@nebular/theme';

@NgModule({
  declarations: [AdminComponent, AddCourseComponent, AdminOperationsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    HeaderComponent
  ]
})
export class AdminModule { }
