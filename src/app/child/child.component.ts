import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Model/Post';

/**
 * Pass data from parent to child with input binding => //1
 * 
 */
@Component({
  selector: 'app-child',
  template: `
    <h3>{{post.title}} says:</h3>
    <p>I, {{post.title}}, am at your service, {{masterName}}.</p>
  `
})
export class ChildComponent implements OnInit {

  @Input() post : Post;//1

  @Input('monAlias') masterName: string;//1

  constructor() { }

  ngOnInit() {
  }

}
