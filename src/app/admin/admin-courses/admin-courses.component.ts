import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from 'src/app/models/ICourse';
import { Course } from 'src/app/models/Course';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {
  courses: ICourse[] = [];

  constructor(private coursesService: CoursesService,
    private toasterService: NbToastrService) { }

  ngOnInit() {
    this.coursesService.getAllCourses()
    .subscribe(courses => {
      this.courses = courses
    });
  }

  addNewCourse(){
    this.courses.unshift(new Course())
  }

  // saveChanges(event) {
  //   let observable = new Observable<string>();
  //   observable = this.coursesService.updateCourse(this.courses);
  //   observable.subscribe(() => {
  //       this.toasterService.success('updated');
  //     });
  // }
}
