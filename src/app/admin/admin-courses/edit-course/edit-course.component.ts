import { Component, OnInit, Input } from "@angular/core";
import { CoursesService } from "src/app/services/courses.service";
import { ActivatedRoute } from "@angular/router";
import { ICourse } from "../../../models/ICourse";
import { Course } from "src/app/models/Course";
import { Lesson } from "src/app/models/Lesson";
import { CourseDataService } from "src/app/services/course-data.service";

@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.scss"]
})
export class EditCourseComponent implements OnInit {
  constructor(
    private courseDataService: CourseDataService,
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {
  }

  get course(): ICourse {
    return this.courseDataService.course;
  }
  set course(value: ICourse) {
    this.courseDataService.course = value;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if("id" in params) {
        this.coursesService.getCourseById(params["id"]).subscribe(course => {
          this.course = course;
        });
      } else {
        this.course = new Course();
        this.course.lessons = [];
      }
    });
  }

  saveCourse(event) {
    this.coursesService.updateCourse(this.course).subscribe(data => {
      data;
    });
  }

  addLesson(event) {
    this.course.lessons.unshift(new Lesson());
  }
}
