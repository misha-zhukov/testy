import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { CourseContentComponent } from './course-content/course-content.component';

const routes: Routes = [{
  path: ':id',
  component: CourseComponent,
  // children: [
  //   {
  //     path: 'content',
  //     component: CourseContentComponent,
  //   }
  // ]
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
