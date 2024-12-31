import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { OrderModel } from '../model/order.model';
import { Stock } from '../model/stock.model';
import { CustomResponse } from '../model/response.message';
import { OrderSummary } from '../model/order.summary.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };

    getPlacedOrders(): Observable<OrderModel[]>{
      return this.http.get<OrderModel[]>(`${this.host}/placed-orders`)
    }

    fulfilOrder(orderId: string): Observable<OrderModel[]>{
      return this.http.put<OrderModel[]>(`${this.host}/placed-orders/${orderId}`, {})
    }

    cancelOrder(orderId: string): Observable<CustomResponse>{
      return this.http.delete<CustomResponse>(`${this.host}/orders/${orderId}/cancel`, {})
    }

    completeOrder(orderId: string): Observable<CustomResponse>{
      return this.http.put<CustomResponse>(`${this.host}/placed-orders/${orderId}`, {})
    }

    getOrderSummary(): Observable<OrderSummary>{
      return this.http.get<OrderSummary>(`${this.host}/admin/order-summary`)
    }


}
