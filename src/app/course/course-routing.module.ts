import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [{
  component: CourseComponent,
  path: ':id',
  children: [
    {
      path: 'lesson/:id',
      component: LessonComponent,
    },
  ]
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
},
{
  path: '**',
  redirectTo: '',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
}
