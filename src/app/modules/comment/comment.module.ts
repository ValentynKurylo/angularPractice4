import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "./services/comment.service";
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers:[CommentService]
})
export class CommentModule { }
