import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/login.response';
import { AuthenticationService } from '../services/authentication.service';
import { UtilService } from '../services/util.service';
import { MOBILE_NUMBER_VALIDATE } from '../pattern-validators/pattern.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private subscriptions: Subscription[] = []
  user: User;
  errorMessage: any;




  loginForm = new FormGroup({
    phone: new FormControl("", [Validators.required, Validators.pattern(MOBILE_NUMBER_VALIDATE)]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)]),
  })

  constructor(
    private _authenticationService: AuthenticationService,
    private _utilService: UtilService,
    private router: Router
  ){}

  login(){
   this.subscriptions.push(
    this._authenticationService.login(this.loginForm.value.phone, this.loginForm.value.password).subscribe({
      next: (res) => {
        this._utilService.setValueToLocalStorage("token", res.token);
        this.user = res.user
        if(!this.user.isAdmin){
          this.setErrorWithTimeout("You do not have adequate permissions", 4000)
        }else{
        this._utilService.setObjectToLocalStorage('user', res.user);
          this._utilService.setValueToLocalStorage("phone", this.loginForm.value.phone)
          this.router.navigateByUrl("/dashboard")
        }
      }, error: (err) => {
        this.setErrorWithTimeout( err.error.message, 4000)
      }
    })
   )}


   setErrorWithTimeout(message: string, timeOut: number){
    this.errorMessage = message
    setTimeout(() => {
      this.errorMessage = ''
    }, timeOut);





   }

}
