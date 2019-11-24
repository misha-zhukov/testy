import { Injectable } from '@angular/core';
import { ICourse } from '../models/ICourse';

@Injectable() 
export class CourseDataService {
  course: ICourse;
}