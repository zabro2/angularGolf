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
  totalScores = [];
  endMessages: string[] = [];
  playerCount = 0;
  gameOver = false;

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
      });
  };

  checkKey(event) {
    if (event.keyCode == 13) {
      this.addPlayer();
    }
  }

  addPlayer() {
    let playerName = this.playerControl.value
    let canAdd = true;
    if (this.playerCount == 4) {
      alert('Max player limit reached');
      return;
    }
    this.playerService.players.forEach(player => {
      if (playerName == player.name) {
        alert('that name is already chosen');
        canAdd = false;
      }
    });
    if (canAdd) {
      let newPlayer = { name: playerName };
      this.playerService.addPlayer(newPlayer);
      this.playerControl.reset();
      this.totalScores.push({ out: 0, in: 0, total: 0 });
      this.playerCount++;
    }
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
    let players = this.playerService.players;
    for (let i = 0; i < this.playerCount; i++) {
      let outScore = 0;
      let inScore = 0;
      let totalScore = 0;
      for (let k = 0; k < 9; k++) {
        outScore += players[i].scores[k];
      }
      for (let k = 9; k < 18; k++) {
        inScore += players[i].scores[k];
      }
      totalScore = (outScore + inScore);
      this.totalScores[i].out = outScore;
      this.totalScores[i].in = inScore;
      this.totalScores[i].total = totalScore;
    }
  }

  finishGame() {
    this.gameOver = true;
    this.playerService.saveGame(this.courseData.name, this.holeDifficulty);
    for (let i = 0; i < this.playerCount; i++) {
      let score = this.totalScores[i].total;
      let par = this.coursePar;
      if (score < par) {
        if ((par - score) >= 5) {
          this.endMessages[i] = `Incredible game ${this.playerService.players[i].name}, you were well under par!`
        } else {
          this.endMessages[i] = `Awesome game ${this.playerService.players[i].name}, you were under under par!`
        }
      } else if (score == par) {
        this.endMessages[i] = `Great game ${this.playerService.players[i].name}, you hit par!`
      } else {
        if ((score - par) <= 5) {
          this.endMessages[i] = `Good game ${this.playerService.players[i].name}, you were slightly over par!`
        } else {
          this.endMessages[i] = `Good try ${this.playerService.players[i].name}, but you were well over par!`
        }
      }
    }
  }

  newGame() {
    location.reload();
  }
}
