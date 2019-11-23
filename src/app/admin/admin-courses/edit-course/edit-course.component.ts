import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router'
import { ICourse } from '../../../models/ICourse';
import { Course } from 'src/app/models/Course';
import { Lesson } from 'src/app/models/Lesson';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  @Input()
  course: ICourse = new Course();
tinymceinit = {
  base_url: '/tinymce', 
  height : '600',
  suffix: '.min',      
  plugins: 'lists advlist image link preview anchor media',
  toolbar: 'undo redo | bold italic | bullist numlist outdent indent| image link',
  file_picker_callback : function(cb, value, meta) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    // Note: In modern browsers input[type="file"] is functional without 
    // even adding it to the DOM, but that might not be the case in some older
    // or quirky browsers like IE, so you might want to add it to the DOM
    // just in case, and visually hide it. And do not forget do remove it
    // once you do not need it anymore.

    input.onchange = function() {
      var file = input.files[0];

      var reader = new FileReader();
      reader.onload = function () {
        // Note: Now we need to register the blob in TinyMCEs image blob
        // registry. In the next release this part hopefully won't be
        // necessary, as we are looking to handle it internally.
        var id = 'blobid' + (new Date()).getTime();
        var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(',')[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        // call the callback and populate the Title field with the file name
        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };

    input.click();
  }
} 
  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.coursesService.getCourseById(params['id']).subscribe(course => 
          { 
            this.course = course  
          });
      });
  }

  saveCourse(event) {
    this.coursesService.updateCourse(this.course).subscribe(data => 
      { 
        data
      });;
  }

  addLesson(event) {
    this.course.lessons.unshift(new Lesson());
  }
}
