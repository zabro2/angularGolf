import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GolfDataService } from 'src/app/api/golf-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: number;
  courseData: any;

  constructor(private route: ActivatedRoute, private golfDataService: GolfDataService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.golfDataService
      .getGolfData(this.id)
      .subscribe(data => {
        this.courseData = data.data;
        console.log(this.courseData);
      });
  }

}
