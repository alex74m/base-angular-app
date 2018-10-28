import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../Model/Joke';

@Component({
  selector: 'joke',
  template: `
<div class="card card-block">
  <h4 class="card-title">{{data.setup}}</h4>
  <p class="card-text"
     [hidden]="data.hide">{{data.punchline}}</p>
     <button (click)="data.toggle()"
     class="btn btn-warning">Tell Me FROM JOKECOMPONENT
  </button>
</div>
  `
})
export class JokeComponent {
  @Input('jokeInput') data: Joke;
}