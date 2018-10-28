import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Model/Post';
import { AuthService } from '../auth.service';
import { PostService } from '../providers/post.service';

/**
 * Pass data from parent to child with input binding => //1
 * 
 */
@Component({
  selector: 'app-parent',
  template: `
    <h2>{{master}} controls {{posts.length}} heroes</h2>
    <app-child *ngFor="let post of posts"
      [post]="post"
      [monAlias]="hey">
    </app-child>
  `
})
export class ParentComponent implements OnInit {

  posts : Post[] = [];//1
  hey = 'helooo';//1

  constructor(private postService: PostService) { }

  ngOnInit() {
    //1 :
    this.postService.getPostAndComment().pipe(
      //map(([posts, comments]) => posts.filter(post => post.id == 1, ))
  ).subscribe(([posts, comments]) => {
          this.posts = posts; //.filter(post=> post.id ==1);
          console.log('post', this.posts);
  },err => {
      console.error('Oops:', err.message);
  },
  () => {
      console.log(`We're done here!`);
  });
  }


}
