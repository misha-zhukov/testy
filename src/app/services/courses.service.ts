import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { ICourse } from '../models/ICourse';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>('/api/data/courses')
      .pipe(catchError(this.handleError<ICourse[]>('getAllCourses', [])));
  }

  getOneCourse(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`/api/data/quiz/${id}`)
      .pipe(catchError(this.handleError<ICourse>('getOneCourse')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
