import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment

  @Output()
  liftComment = new EventEmitter<Comment>()

  constructor() { }

  ngOnInit(): void {
  }

  showComment(){
    this.liftComment.emit(this.comment)
  }
}
