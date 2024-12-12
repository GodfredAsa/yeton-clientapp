import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() imageUrl;

  private subscriptions: Subscription[] = []


  constructor(
    private _router :Router,
    private _userService :UserService,
    private _utilService: UtilService,
  ){}

  logoutUser(){
    this.subscriptions.push(
      this._userService.logoutUser(this._utilService.getValueFromLocalStorage("phone")).subscribe({
        next: (res) => {
          this._utilService.removeAllValuesFromLocalStorage()
          this._router.navigateByUrl("/")
        },
        error: (err) => {
          console.log(err);
        }
      })
    )
  }

  viewUserProfile(){
    this._router.navigate(['dashboard/profile'])
  }
}
