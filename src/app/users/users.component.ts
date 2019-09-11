import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  data: any[];
  constructor(private userService: UserService) {

   }

  ngOnInit() {
    this.userService.GetUsers().subscribe(res => {
      this.data = res;
    });
  }
  DeleteUser(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.userService.DeleteUser(id).subscribe(res => {
        if (res.status === 200) {
          for (let i = 0; i < this.data.length; i++) {
            if (id === this.data[i].id) {
              this.data.splice(i, 1);
            }
          }
        }
      });
    }
  }
}
