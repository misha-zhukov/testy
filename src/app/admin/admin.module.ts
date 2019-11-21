import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AdminOperationsComponent } from './components/admin-operations/admin-operations.component';
import { AdminRoutingModule } from './admin-routing.module';

import {
  NbLayoutModule
} from '@nebular/theme';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [AdminComponent, AddCourseComponent, AdminOperationsComponent,],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    LayoutModule
  ]
})
export class AdminModule { 
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AdminModule,
      providers: [
      ]
    }
  }
}
