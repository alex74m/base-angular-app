import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})
export class VoterComponent implements OnInit {
  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  
  constructor() { }

  ngOnInit() {
  }

 
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
