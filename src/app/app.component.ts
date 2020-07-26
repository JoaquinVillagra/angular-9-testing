import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'Fomulario Ingreso datos Shopping';

  InsertData: FormGroup;

  titleFormControl = new FormControl('', [Validators.required]);
  commentFormControl = new FormControl('', [Validators.required]);

  constructor(private commentService: CommentService){}

  ngOnInit(): void {
    this.InsertData = new FormGroup({
      title: this.titleFormControl,
      comment: this.commentFormControl
    });
    console.log("Inicio de la pag");
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  onSubmit(): void {
    const comment = {
      title: this.InsertData.get('title').value,
      comment: this.InsertData.get('comment').value
    }
    
    this.commentService.onCreatePost(comment)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

}
