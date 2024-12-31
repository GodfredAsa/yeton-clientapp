import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ChartsResponse } from '../model/charts.response';
import { UserSummary } from '../model/user.summary.model';
import { DailySalesResponse } from '../model/Daily.sales.response';

@Injectable({
  providedIn: 'root'
})
export class SummaryStatisticsService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };

  getSummaryStatistics(): Observable<UserSummary>{
    return this.http.get<UserSummary>(`${this.host}/summary`)
  }


  getVendorItemStats():Observable<ChartsResponse>{
    return this.http.get<ChartsResponse>(`${this.host}/admin/vendor-item`)
  }

  getStockLevelStats():Observable<ChartsResponse>{
    return this.http.get<ChartsResponse>(`${this.host}/admin/stock-levels`)
  }

  getDailySalesTrends():Observable<DailySalesResponse>{
    return this.http.get<DailySalesResponse>(`${this.host}/admin/daily-sales`)
  }
}
