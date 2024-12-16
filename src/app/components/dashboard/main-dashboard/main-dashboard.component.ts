import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { Subscription } from 'rxjs';
import { SummaryStatisticsService } from '../../services/summary-statistics.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit{
  summaryStatistics: any;
    subscriptions: Subscription[] = []


  username: string;

  constructor(
    private _utilService: UtilService,
    private _summaryStatisticsService :SummaryStatisticsService
  ){}


  ngOnInit(): void {
    this.username = this._utilService.getObjectFromStorage('user').name
    this.getSummaryStats()
  }

  getSummaryStats(){
    this.subscriptions.push(
      this._summaryStatisticsService.getSummaryStatistics().subscribe({
        next: (res) => {
           this.summaryStatistics = res
           console.log(this.summaryStatistics);
        },
        error: (err) => {
          console.log(err);
        }
      })
    )
  }


}
