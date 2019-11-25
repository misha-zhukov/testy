import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { LayoutModule } from "../layout/layout.module";
import { AdminMenu } from "./admin-menu";
import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule
} from "@nebular/theme";
import { AdminCoursesComponent } from "./admin-courses/admin-courses.component";
import { FormsModule } from "@angular/forms";
import { EditCourseComponent } from "./admin-courses/edit-course/edit-course.component";
import { EditorModule } from "@tinymce/tinymce-angular";
import { EditLessonComponent } from "./admin-courses/edit-course/edit-lesson/edit-lesson.component";

@NgModule({
  declarations: [
    AdminComponent,
    AdminCoursesComponent,
    EditCourseComponent,
    EditLessonComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    NbMenuModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    EditorModule
  ],
  providers: [AdminMenu]
})
export class AdminModule {}
