import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class CommentService {

    constructor(private http:HttpClient){}

    onCreatePost(commentData: {title: string, comment: string}){
        return this.http
            .post(
                'https://ecmat-frontend.firebaseio.com/post.json', 
                commentData    
            );
    }
}
