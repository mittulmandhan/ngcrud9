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
  user: User;
  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  SaveData(form: NgForm) {
    if (form.valid) {
      this.userService.AddUser(this.user).subscribe(res => {
        console.log(res);
        if (res.status === 201) {
          this.router.navigate(['/']);
        }
      });
    }
  }

}
