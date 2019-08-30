import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { GolfCourse } from '../interfaces/golf-course';

@Injectable({
  providedIn: 'root'
})

export class GolfCourseDataService {

  constructor(private httpClient: HttpClient) { }

  getGolfCourses(): Observable<GolfCourse[]> {
    const url = 'https://golf-courses-api.herokuapp.com/courses';
    return this.httpClient.get<any>(url).pipe(map(data => data.courses));
  }
}
