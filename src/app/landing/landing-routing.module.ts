import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { ListCoursesComponent } from '../shared/components/list-courses/list-courses.component';
import { LandingContentComponent } from './landing-content/landing-content.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [{
      path: '',
      component: LandingContentComponent
    }
    ,{
    path: 'list-courses',
    component: ListCoursesComponent
  }
  ],
},
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'content',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {
}
