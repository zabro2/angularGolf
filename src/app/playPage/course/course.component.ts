import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { GolfDataService } from 'src/app/services/golf-data.service';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/interfaces/player';

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
  playerControl = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private golfDataService: GolfDataService,
    public playerService: PlayerService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.golfDataService
      .getGolfData(this.id)
      .subscribe(data => {
        this.courseData = data.data;
        console.log(this.courseData);
      });
  }

  addPlayer(player) {
    let playerName = player.value
    let newPlayer: Player;
    newPlayer = {name: playerName};
    this.playerService.addPlayer(newPlayer);
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
