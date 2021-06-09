import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../model/user";
import {TransferService} from "../../../../services/transfer.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User

  @Output()
  userLift = new EventEmitter<User>()

  constructor(private transfer: TransferService) { }

  ngOnInit(): void {
  }

  choseUser(){
     let currentStore = this.transfer.store.getValue()
    currentStore = this.user.username
    this.transfer.store.next(currentStore)
    this.user.username = 'anon'
    this.userLift.emit(this.user)
  }
}
