import { Component, OnInit } from '@angular/core';

import { GolfCourse } from '../interfaces/golf-course';
import { GolfCourseDataService } from '../api/golf-course-data.service';
import { GolfDataService } from '../api/golf-data.service';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.css']
})
export class CourseSelectComponent implements OnInit {

  courses: GolfCourse[];
  selectedCourse: any;
  coursesInfo

  constructor(private golfCourseDataService: GolfCourseDataService, private golfDataService: GolfDataService) { }

  ngOnInit(): void {
    this.golfCourseDataService
      .getGolfCourses()
      .subscribe(data => this.courses = data);
  }

  onCourseSelect(id: number): void {
    this.golfDataService
      .getGolfData(id)
      .subscribe(data => {
        this.selectedCourse = data.data;
      });
  }

}
