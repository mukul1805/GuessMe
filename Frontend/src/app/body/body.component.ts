import { Component, NgModule } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent {
  dataList: any;    
  dataLength: number = 0;                 
  position: number = 0;           
  scoreA: number = 0;
  scoreB: number = 0;
  turn: number = 0;                  // 1=teamA, -1=team, 0=NoTeam
  arr: number[] = [];                // to store random nums
  toggle: boolean = false;
  firstClick: boolean = false;
  secondClick: boolean = true;
  startTimeout:any;

  constructor(private dataService: FetchDataService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe(
      (result) => {
        this.dataList = result;
        this.dataLength = result.length;
        console.log(result)
      },
      (error) => {
        console.log("Error!", error)
      }
    );
  }

  
  getRandomPosition() {
    this.position = Math.floor(Math.random() * this.dataLength);

    while (this.arr.includes(this.position) || this.position === this.dataLength - 1)  {
      if (this.arr.length === this.dataLength - 1) {
        this.arr = [];
      }
      this.position = Math.floor(Math.random() * this.dataLength);
    }
    this.arr.push(this.position);
    return this.position;
  }

  correct() {
    this.getRandomPosition();

    if (this.turn == 1) { this.scoreA += 2; }
    else if (this.turn == -1) { this.scoreB += 2; }
  }

  inCorrect() {
    this.getRandomPosition();

    if (this.turn == 1) { this.scoreA -= 2; }
    else if (this.turn == -1) { this.scoreB -= 2; }
  }

  pass() {
    this.getRandomPosition();

    if (this.turn == 1) { this.scoreA -= 1; }
    else if (this.turn == -1) { this.scoreB -= 1; }
  }

  gameStarted() {
    this.firstClick = true;                  //to block teamA button
    this.turn = 1;
    this.toggle = !this.toggle;
    this.startTimeout = setTimeout(() => {
      this.turn = -1;       //---
      this.toggle = !this.toggle;
      this.secondClick = false;
    }, 30000)
  }

  //New Game

  newGame(){                      //removed reload;
    this.firstClick=false;
    this.scoreA=0;
    this.scoreB=0;
    clearTimeout(this.startTimeout);
    this.toggle=!this.toggle;
  }



  winner() {
    this.toggle = !this.toggle;              //to enable when teamB starts
    this.getRandomPosition();                //as clicking in team2, word must change
    this.secondClick = true;                 //to block teamB button
    setTimeout(() => {
      if (this.scoreA > this.scoreB)
        alert("A is the Winner!")
      else if (this.scoreA < this.scoreB)
        alert("B is the Winner!")
      else
        alert("Match Tied!")

      this.toggle = !this.toggle             //disable at last
    },30000);
  }
}