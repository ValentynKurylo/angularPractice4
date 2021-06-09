import { Component, OnInit } from '@angular/core';
import {Comment} from "../../model/comment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[]
  fullComment: Comment

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => {this.comments = value})
  }

  liftComment(comment: Comment){
    this.fullComment = comment
  }
}
