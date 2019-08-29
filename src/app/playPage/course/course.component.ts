import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { GolfDataService } from 'src/app/services/golf-data.service';
import { PlayerService } from 'src/app/services/player.service';

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
  coursePar: number = 0;
  courseHandiCap: number = 0;
  playerControl = new FormControl();
  totalScores = []
  playerCount = 0;

  constructor(
    private route: ActivatedRoute,
    private golfDataService: GolfDataService,
    public playerService: PlayerService, ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.golfDataService
      .getGolfData(this.id)
      .subscribe(data => {
        this.courseData = data.data;
        console.log(this.courseData);
      });
  };

  addPlayer() {
    let playerName = this.playerControl.value
    let newPlayer = { name: playerName };
    this.playerService.addPlayer(newPlayer);
    this.playerControl.reset();
    this.totalScores.push({ out: 0, in: 0, total: 0 });
    this.playerService.savePlayer(this.playerService.players[this.playerCount])
    this.playerCount++;
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
  }

  updateScores() {

  }

  finishGame() {
    this.playerService.players.forEach(player => {
      this.playerService.updatePlayer(player);
    });
  }

  clearDb() {
  }
}
