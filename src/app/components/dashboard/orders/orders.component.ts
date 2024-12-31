import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderModel } from '../../model/order.model';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs';
import { OrderSummary } from '../../model/order.summary.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrderComponent implements OnInit, OnDestroy{

  subscriptions :Subscription[] = []
  orders :OrderModel[] = []
  allOrders :OrderModel[] = []

  orderSummary :OrderSummary;


  selectedOrder: OrderModel;
  selectedElement: string  = "PENDING";

  // tabElements = ["PENDING", "COMPLETED", "CANCELLED" ]
  tabElements = ["PENDING", "COMPLETED"]


  constructor(
    private _orderService: OrderService,
  ){}

  ngOnInit(): void {
    this.getAllPendingOrders();
    this.getOrderSummaries()
   }


  getAllPendingOrders(){
    this.subscriptions.push(
      this._orderService.getPlacedOrders().subscribe({
        next: (res) => {
          this.allOrders = res
          this.orders = this.allOrders.filter(order => order.orderStatus === "PENDING")
        }, error: (err) => {
          console.log(err.error.message);
        }
      })
    )
  }

  cancelOrder(){
    this.subscriptions.push(
      this._orderService.cancelOrder(this.selectedOrder.orderId).subscribe({
        next: (res) => {
         console.log(res.message);
         window.location.reload();
        }, error: (err) => {
          console.log(err.error.message);
         window.location.reload();

        }
      })
    )
  }


  completeOrder(){
    this.subscriptions.push(
      this._orderService.completeOrder(this.selectedOrder.orderId).subscribe({
        next: (res) => {
          console.log(res.message);
          window.location.reload();
        }, error: (err) => {
          console.log(err.error.message);
          window.location.reload();
        }
      })
    )
  }

  getOrderSummaries(){
    this.subscriptions.push(
      this._orderService.getOrderSummary().subscribe({
        next: (res) => {
          this.orderSummary = res;
          console.log(res);
        }, error: (err) => {
          console.log(err.error.message);

        }
      })
    )
  }




  getSelectedOrder(order: OrderModel){
    this.selectedOrder = order
  }

  unSelectOrder(){
    this.selectedOrder = null
  }

  selectElement(el: string): void {
    this.selectedElement = el;
    if(this.selectedElement === "PENDING"){
      this.getAllPendingOrders()
      this.orders = this.allOrders.filter(order => order.orderStatus === this.selectedElement)
    } if(this.selectedElement === "COMPLETED"){
      this.orders = this.allOrders.filter(order => order.orderStatus === "COMPLETED")
      console.log(this.orders);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
   }





}
