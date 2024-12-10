import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SummaryStatisticsService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };

  getSummaryStatistics(): Observable<any>{
    return this.http.get<any>(`${this.host}/summary`)
  }
}
