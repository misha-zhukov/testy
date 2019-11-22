import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { AdminMenu } from './admin-menu';
import { NbMenuModule, NbCardModule, NbInputModule,
  NbButtonModule } from '@nebular/theme';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, AdminCoursesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    NbMenuModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    NbButtonModule
  ],
  providers: [AdminMenu]
})
export class AdminModule { 

}
