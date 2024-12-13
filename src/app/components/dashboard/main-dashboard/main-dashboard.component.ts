import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit{


  username: string;

  constructor(
    private _utilService: UtilService
  ){}


  ngOnInit(): void {
    this.username = this._utilService.getObjectFromStorage('user').name
  }


}
