import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: []
})
export class CreateComponent implements OnInit {
  id: number;
  user: User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      if (this.id !== undefined) {
        this.userService.GetUser(this.id).subscribe(res => {
          console.log(res);
          this.user = res;
        });
      }
    });
  }
  SaveData(form: NgForm) {
    if (form.valid) {
      if (this.id > 0) {
        this.userService.UpdateUser(this.user).subscribe(res => {
          console.log(res);
          if (res.status === 200) {
            this.router.navigate(['/']);
          }
        });
      } else {
        this.userService.AddUser(this.user).subscribe(res => {
          console.log(res);
          if (res.status === 201) {
            this.router.navigate(['/']);
          }
        });
      }
    }
  }
}
