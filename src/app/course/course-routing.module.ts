import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [{
  component: CourseComponent,
  path: ':id-course',
  children: [
    {
      path: 'lesson/:id-lesson',
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
