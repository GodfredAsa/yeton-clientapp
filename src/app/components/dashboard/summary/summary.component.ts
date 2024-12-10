import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SummaryStatisticsService } from '../../services/summary-statistics.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  subscriptions: Subscription[] = []

  summaryStatistics: any;

  constructor(private _summaryStatisticsService :SummaryStatisticsService){}


  ngOnInit(): void {
   this.getSummaryStats()
  }

  getSummaryStats(){
    this.subscriptions.push(
      this._summaryStatisticsService.getSummaryStatistics().subscribe({
        next: (res) => {
           this.summaryStatistics = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    )

  }


}
