import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'courses',
      component: CoursesComponent,
    },
    { 
      path: 'course-details/:id', 
      component: CourseDetailsComponent 
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
export class DashboardRoutingModule {
}
