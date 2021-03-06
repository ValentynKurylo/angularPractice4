import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../model/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post

  @Output()
  liftPost = new EventEmitter<Post>()

  constructor() { }

  ngOnInit(): void {
  }

  showPost(){
    this.liftPost.emit(this.post)
  }
}
