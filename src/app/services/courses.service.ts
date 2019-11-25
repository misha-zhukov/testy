import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { ICourse } from '../models/ICourse';
import { ILesson } from '../models/ILesson';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>('/api/data/courses')
      .pipe(catchError(this.handleError<ICourse[]>('getAllCourses', [])));
  }

  getOneCourse(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`/api/data/quiz/${id}`)
      .pipe(catchError(this.handleError<ICourse>('getOneCourse')));
  }

  getCourseById(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`/api/data/course/${id}`)
      .pipe(catchError(this.handleError<ICourse>('getCourseById')));
  }

  getLessonById(idCourse: string, idLesson: string): Observable<ILesson> {
    return this.http.get<ILesson>(`/api/data/course/${idCourse}/lesson/${idLesson}`)
      .pipe(catchError(this.handleError<ILesson>('getLessonById')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  updateCourse(course: ICourse): Observable<any> {
    return this.http.post('api/data/course/update', course);
  }

  updateLesson(lesson: ILesson): Observable<any> {
    return this.http.post('api/data/lesson/update', lesson);
  }
}
