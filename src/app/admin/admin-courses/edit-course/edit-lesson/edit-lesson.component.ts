import { Component, OnInit } from "@angular/core";
import { ILesson } from "src/app/models/ILesson";
import { CourseDataService } from "src/app/services/course-data.service";
import { ActivatedRoute } from "@angular/router";
import { CoursesService } from "src/app/services/courses.service";
import { Step } from "src/app/models/Step";

@Component({
  selector: "app-edit-lesson",
  templateUrl: "./edit-lesson.component.html",
  styleUrls: ["./edit-lesson.component.scss"]
})
export class EditLessonComponent implements OnInit {
  constructor(
    private courseDataService: CourseDataService,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  tinymceinit = {
    base_url: "/tinymce",
    height: "600",
    suffix: ".min",
    plugins: "lists advlist image link preview anchor media",
    toolbar:
      "undo redo | bold italic | bullist numlist outdent indent| image link"
  };
  lesson: ILesson;

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(courseParams => {
      this.activatedRoute.params.subscribe(lessonParams => {
        if (
          this.courseDataService.course &&
          this.courseDataService.course._id === courseParams["id-course"]
        ) {
          this.lesson = this.courseDataService.course.lessons.filter(
            x => x._id === lessonParams["id-lesson"]
          )[0];
        } else {
          this.coursesService
            .getLessonById(courseParams["id-course"], lessonParams["id-lesson"])
            .subscribe(lesson => {
              this.lesson = lesson;
            });
        }
      });
    });
  }

  addStep(event) {
    this.lesson.steps.unshift(new Step());
  }

  saveLesson(event) {
    this.coursesService.updateLesson(this.lesson).subscribe(data => {
      data;
    });
  }
}
