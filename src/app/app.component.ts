import { Component } from '@angular/core';
import { GolfCourseDataService } from './api/golf-course-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  courses: any[];

  constructor(private golfCourseDataService: GolfCourseDataService) { }

  ngOnInit(): void {
    this.golfCourseDataService
      .getGolfCourses()
      .subscribe(data => this.courses = data);
  }

  onCourseSelect(id: string) {
    console.log(id)
  }

  title = 'angularGolf';
}
