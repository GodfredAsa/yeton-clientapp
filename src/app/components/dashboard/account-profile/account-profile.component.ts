import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit{
  user: any;

  userForm: FormGroup;

  constructor(
    private _utilService: UtilService,
    private fb: FormBuilder
  ){}


  ngOnInit(): void {
    this.user = this._utilService.getObjectFromStorage("user")
    this.userForm = this.fb.group({
      gender: [this.user.gender],
      isAdmin: [this.user.isAdmin],
      name: [this.user.name],
      phone: [this.user.phone],
    })

    console.log(this.user);
  }

  updateUser(){
    console.log(this.user);

  }

}
