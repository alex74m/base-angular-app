import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from "../Model/Post";
import { Observable } from "rxjs/Rx";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators";
import { forkJoin } from 'rxjs';


const ENV = environment;

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private pathPosts: string = `${ENV.host}/posts`;
    private pathComments: string = `${ENV.host}/comments`;

    constructor(private http: HttpClient, ) {
    }

    public getPostAndComment(): Observable<any> {
        return forkJoin(this.getPosts(), this.getComents());
    }

    private getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.pathPosts, { observe: "body" }).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log('errrr', err);
                throw err;
            })
        );
    }


    private getComents(): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.pathComments, { observe: "body" }).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log('errrr', err);
                throw err;
            })
        );
    }


}
