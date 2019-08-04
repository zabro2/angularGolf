import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

interface GolfCourse {
  id: string;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class GolfCourseDataService {

  constructor(private httpClient: HttpClient) { }

  getGolfCourses(): Observable<GolfCourse[]> {
    const url = 'http://golf-courses-api.herokuapp.com/courses';

    return this.httpClient.get<any>(url).pipe(map(data => data.courses));
  }
}
