import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { EditCourseComponent } from './admin-courses/edit-course/edit-course.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'courses',
      component: AdminCoursesComponent,
    },
    { 
      path: 'edit-course/:id', 
      component: EditCourseComponent 
    },
  ]
},
{
  path: '',
  redirectTo: 'courses',
  pathMatch: 'full',
},
{
  path: '**',
  redirectTo: 'courses',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
