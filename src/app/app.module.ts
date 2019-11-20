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
import { ThemeModule } from './@theme/theme.module';
import { AuthModule } from './@auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { InitUserService } from './@theme/services/init-user.service';
import { CoreModule } from './@core/core.module';

export function init_app(injector: Injector) {
  return () =>
    new Promise<any>((resolve: Function) => {
      const initUserService = injector.get(InitUserService);
      initUserService.initCurrentUser().subscribe(() => { },
        () => resolve(), () => resolve()); // a place for logging error
    });
}


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
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbActionsModule,
    NbButtonModule,
    HttpClientModule,
    NbCardModule,
    NbRadioModule,
    NbStepperModule,
    AuthModule.forRoot(),
    AdminModule,
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  providers: [CoursesService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [Injector],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
