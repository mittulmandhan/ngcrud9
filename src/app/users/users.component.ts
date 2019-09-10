import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  data: any[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetUsers().subscribe(res => {
      this.data = res;
    });
  }

  DeleteUser(id: number) {

  }

}
