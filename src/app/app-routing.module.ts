import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { QuestionStepperComponent } from './components/question-stepper/question-stepper.component';
import { NgxLoginComponent } from './@auth/components/login/login.component';
import { NgxRegisterComponent } from './@auth/components/register/register.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'quiz/:id', component: QuestionStepperComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'auth/sign-up', component: NgxLoginComponent, pathMatch: 'full'},
  { path: 'auth/register', component: NgxRegisterComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
