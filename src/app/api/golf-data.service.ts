import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GolfDataService {

  selectedCourseData: any;

  constructor(private httpClient: HttpClient) { }

  getGolfData(id: number): Observable<any> {
    const url = 'https://golf-courses-api.herokuapp.com/courses/';
    const golfId = id;
    return this.httpClient.get<any>((url + golfId));
  }
}
