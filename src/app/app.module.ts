import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbGlobalLogicalPosition
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { CoursesService } from "./services/courses.service";
import { StripeService } from "./services/stripe.service";
import { HttpClientModule } from "@angular/common/http";
import { CourseDataService } from "./services/course-data.service";
import { AuthModule } from "./@auth/auth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: "default" }),
    NbEvaIconsModule,
    HttpClientModule,
    NbToastrModule.forRoot({ position: NbGlobalLogicalPosition.BOTTOM_END }),
    AuthModule.forRoot()
  ],
  providers: [CoursesService, CourseDataService, StripeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
