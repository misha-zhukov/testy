import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { CoursesComponent } from './courses/courses.component';
import { AdminMenu } from './admin-menu';
import { NbMenuModule } from '@nebular/theme';

@NgModule({
  declarations: [AdminComponent, CoursesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    NbMenuModule
  ],
  providers: [AdminMenu]
})
export class AdminModule { 

}
