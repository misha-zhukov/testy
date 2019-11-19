import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable, of} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses():Observable<ICourse[]> {
    return this.http.get<ICourse[]>('/api/data/courses')
      .pipe(catchError(this.handleError<ICourse[]>('getAllCourses', [])));
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
