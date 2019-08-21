import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GolfDataService } from 'src/app/api/golf-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: number;
  courseData: any;
  holeDifficulty: any;
  selectedDiffIdx: number;
  coursePar = 0;
  courseHandiCap = 0;

  playerList = [];
;
  constructor(private route: ActivatedRoute, private golfDataService: GolfDataService) { }

    playerControl = new FormControl('');

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.golfDataService
      .getGolfData(this.id)
      .subscribe(data => {
        this.courseData = data.data;
        console.log(this.courseData);
      });
  }

  addPlayer(player) {
    let newPlayer = player.value
    this.playerList.push(newPlayer);
    this.playerControl.reset();
  }

  onDifficultySelect(difficulty): void {
    this.holeDifficulty = difficulty.teeType;
    this.selectedDiffIdx = this.courseData.holes[0].teeBoxes.indexOf(difficulty);
    this.coursePar = 0;
    this.courseHandiCap = 0;
    this.courseData.holes.forEach(hole => {
      this.coursePar += hole.teeBoxes[this.selectedDiffIdx].par;
      this.courseHandiCap += hole.teeBoxes[this.selectedDiffIdx].hcp;
    });
    console.log(this.holeDifficulty);
    console.log(this.selectedDiffIdx);
    console.log(this.coursePar);
    console.log(this.courseHandiCap);
  }

}
