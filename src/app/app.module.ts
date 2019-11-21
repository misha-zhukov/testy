import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbRadioModule, NbCardModule, NbThemeModule, NbLayoutModule, NbSearchModule, NbActionsModule,
  NbButtonModule, NbStepperModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionStepperComponent } from './components/question-stepper/question-stepper.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesListComponent,
    QuestionComponent,
    QuestionStepperComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
