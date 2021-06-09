import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {TransferService} from "../../../../services/transfer.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]
  fullUser: User

  constructor(private userService: UserService, private transfer: TransferService){ }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {this.users=value})
  }
  liftUser(user: User){
    this.fullUser = user

  }
  Login(){
    this.fullUser.username = this.transfer.store.getValue()
  }
}
