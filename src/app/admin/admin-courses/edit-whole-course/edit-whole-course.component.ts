import { Component, OnInit } from '@angular/core';
import { CoursesService } from "src/app/services/courses.service";
import { ActivatedRoute } from "@angular/router";
import { ICourse } from "../../../models/ICourse";
import { Course } from "src/app/models/Course";
import { Lesson } from "src/app/models/Lesson";
import { Step } from 'src/app/models/Step';
import { ILesson } from 'src/app/models/ILesson';
import { Option } from 'src/app/models/Option';
import { IStep } from 'src/app/models/IStep';
import { FileUploader } from 'ng2-file-upload';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-edit-whole-course',
  templateUrl: './edit-whole-course.component.html',
  styleUrls: ['./edit-whole-course.component.scss']
})
export class EditWholeCourseComponent implements OnInit {
  course: ICourse;
  tinymceinit = {
    base_url: "/tinymce",
    height: "250",
    suffix: ".min",
    plugins: "lists advlist image link preview anchor media",
    toolbar:
      "undo redo | bold italic | bullist numlist outdent indent| image link"
  };

  public uploader: FileUploader = new FileUploader({url:'http://localhost:3001/api/upload'});

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private toasterService: NbToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if("id" in params) {
        this.coursesService.getCourseById(params["id"]).subscribe(course => {
          this.course = course;
        });
      } else {
        this.course = new Course();
      }
    });
  }

  saveCourse(event) {
    this.uploader.uploadAll();
    if(this.course._id) {
      this.updateCourse(this.course);
    } else {
      this.createCourse(this.course);
    }
  }

  updateCourse(course){
    this.coursesService.updateCourse(course).subscribe(data => {
      this.toasterService.success('', 'Course updated');
    },
    error => {
      this.toasterService.warning = error;
    });
  }

  createCourse(course){
    this.coursesService.createCourse(course).subscribe(data => {
      this.toasterService.show('', 'Course created');
    },
    error => {
      this.toasterService.warning = error;
    });
  }

  addLesson(event) {
    this.course.lessons.unshift(new Lesson());
  }

  addStep(lesson: ILesson) {
    lesson.steps.unshift(new Step());
  }

  addOption(step: IStep) {
    step.options.unshift(new Option());
  }
}
