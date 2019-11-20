import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { QuestionStepperComponent } from './components/question-stepper/question-stepper.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'quiz/:id', component: QuestionStepperComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./@auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
