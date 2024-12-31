import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { Subscription } from 'rxjs';
import { SummaryStatisticsService } from '../../services/summary-statistics.service';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../model/category.model';
import { ChartsResponse } from '../../model/charts.response';
import { DailySalesResponse } from '../../model/Daily.sales.response';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit{
  summaryStatistics: any;
  subscriptions: Subscription[] = [];
  categories: CategoryModel[] = [];
  vendorItemData :ChartsResponse;;
  stockLevelData :ChartsResponse;
  dailySales :DailySalesResponse



  constructor(
    private _summaryStatisticsService :SummaryStatisticsService,
    private _utilsService: UtilService,
    private _categoryService :CategoryService,

  ){}

  ngOnInit(): void {
    this.getSummaryStats();
    this.getCategories();
    this.getVendorItemStats();
    this.getStockLevelStats();
    this. getDailySalesTrends()
  }

  getSummaryStats(){
    this.subscriptions.push(
      this._summaryStatisticsService.getSummaryStatistics()
      .subscribe({
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


  getCategories(){
    this.subscriptions.push(
      this._categoryService.getCategories().subscribe({
        next: (res) => {
          this.categories = res
          this._utilsService.setObjectToLocalStorage('categories', this.categories)
        }, error: (err) => {
          console.log(err.error.message);

        }
      }))
  }


  getVendorItemStats(){
    this.subscriptions.push(
      this._summaryStatisticsService.getVendorItemStats().subscribe({
        next: (res) => {
          console.log(res);
          this.vendorItemData = res
        }, error: (err) => {
          console.log(err);


        }
      })
    )
  }


  getStockLevelStats(){
    this.subscriptions.push(
      this._summaryStatisticsService.getStockLevelStats().subscribe({
        next: (res) => {
          console.log(res);
          this.stockLevelData = res
        }, error: (err) => {
          console.log(err);
        }
      })
    )
  }

  getDailySalesTrends(){
    this.subscriptions.push(
      this._summaryStatisticsService.getDailySalesTrends().subscribe({
        next: (res) => {
          console.log(res);
          this.dailySales = res
        }, error: (err) => {
          console.log(err);
        }
      })
    )
  }

  formatToCommaSeparation(amount: Number) : string{
    return this._utilsService.formatToCurrency(amount)
  }


}
