import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { Stock } from '../model/stock.model';
import { CustomResponse } from '../model/response.message';
import { ItemModel } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };

  getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.host}/admin/items`)
  }

  deleteStock(itemId: string): Observable<CustomResponse>{
    return this.http.delete<CustomResponse>(`${this.host}/admin/items/${itemId}`)
  }


  addStock(stock: ItemModel): Observable<Stock>{
    return this.http.post<Stock>(`${this.host}/admin/items`, stock);
  }


}
