import { Component, OnInit } from '@angular/core';
import { Joke } from '../Model/Joke';

@Component({
  selector: 'joke-list',
  template: `
<joke *ngFor="let j of jokes" [jokeInput]="j"></joke>
<joke-form (jokeCreated)="createNewJoke($event)"></joke-form>
  `
})
export class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  createNewJoke(joke) {
    this.jokes.unshift(joke);
  }

}