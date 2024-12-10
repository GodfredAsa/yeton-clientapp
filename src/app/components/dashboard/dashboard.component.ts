import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  loginToken: string;
  imageUrl: any;

  constructor(
    private _utilService: UtilService,
    private _router: Router
  ){

  }

  showSideBar: boolean = false


ngOnDestroy(): void {

  }

  hideShowSidebar(){
    this.showSideBar = !this.showSideBar

  }


  ngOnInit(): void {
    let user = this._utilService.getObjectFromStorage('user')
    if(user){
      this.imageUrl = user?.imageUrl
    }
    console.log(this.imageUrl);

  }
}
