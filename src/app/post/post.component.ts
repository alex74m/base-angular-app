import {Component, Inject, OnInit} from '@angular/core';
import {PostService} from "../providers/post.service";
import { map, filter } from 'rxjs/operators';

import {Post} from "../Model/Post";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './modal/dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

    constructor(public dialogRef: MatDialogRef<PostComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    public posts : Post[] = [];
    public comments : Comment[] = [];
    animal: string;
    name: string;
    selectedPost : Post;

    lol2 : string;

    constructor(private postService: PostService, public dialog: MatDialog) {
    }

    ngOnInit() {

        /*
        this.postService.getPosts().pipe(
            map((posts: Post[]) => posts.filter(post => post.id == 1))
        ).subscribe((posts) => {
            this.posts = posts;//.filter(post=> post.id ==1);
            console.log(this.posts);
        },err => {
            console.error('Oops:', err.message);
            this.openDialog();
        },
        () => {
            console.log(`We're done here!`);
        });
*/

        this.postService.getPostAndComment().pipe(
            //map(([posts, comments]) => posts.filter(post => post.id == 1, ))
        ).subscribe(([posts, comments]) => {
                this.posts = posts.filter(post=> post.id ==1);
                this.comments = comments.filter(comment=> comment.postId == 1);
                console.log('post', this.posts);
                console.log('comments',this.comments);
        },err => {
            console.error('Oops:', err.message);
            this.openDialog();
        },
        () => {
            console.log(`We're done here!`);
        });

    }


    getlol(val){
        console.log(val);
        this.lol2 = val;
    }

    onSelect(post: Post): void {
        this.selectedPost = post;
      }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogContentExampleDialog, {
            width: '250px',
            data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

}

