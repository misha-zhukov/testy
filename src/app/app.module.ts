import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesService } from './services/courses.service';
import {
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot(
      {
        name: 'default',
      })
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
