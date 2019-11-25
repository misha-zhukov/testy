import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { AdminCoursesComponent } from "./admin-courses/admin-courses.component";
import { EditCourseComponent } from "./admin-courses/edit-course/edit-course.component";
import { EditLessonComponent } from "./admin-courses/edit-course/edit-lesson/edit-lesson.component";
import { EditWholeCourseComponent } from './admin-courses/edit-whole-course/edit-whole-course.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "edit-course/:id-course/edit-lesson",
        component: EditLessonComponent
      },
      {
        path: "edit-course/:id-course/edit-lesson/:id-lesson",
        component: EditLessonComponent
      },
      {
        path: "courses",
        component: AdminCoursesComponent
      },
      {
        path: "edit-course/:id",
        component: EditCourseComponent
      },
      {
        path: "edit-course",
        component: EditCourseComponent
      },
      {
        path: "edit-whole-course/:id",
        component: EditWholeCourseComponent
      },
      {
        path: "edit-whole-course",
        component: EditWholeCourseComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "courses",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "courses"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
