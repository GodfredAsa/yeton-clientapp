import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stock } from '../../model/stock.model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit, OnDestroy{

  successMessage: string = "Created successfully "
  stocks: Stock[] = [];
  numberOfStocks: number = 20;
  selectedStock: Stock;
  subscriptions: Subscription[] = []

  showStockModal: boolean = false

  constructor(
    private _stockService :StockService
  ){}
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }


  ngOnInit(): void {
    this.getStockOfItems()
  }

  searchStocks(search: string) {
    if (!search) {
      this.stocks = this.getStockOfItems();
      return;
    }

    const searchedStocks: Stock[] = [];
    const searchLower = search.toLocaleLowerCase();
    for (let stock of this.stocks) {
      if (
        stock.itemName.toLocaleLowerCase().includes(searchLower) ||
        (stock.category && stock.category.toLocaleLowerCase().includes(searchLower)) ||
        (stock.brand && stock.brand.toLocaleLowerCase().includes(searchLower)) ||
        (stock.model && stock.model.toLocaleLowerCase().includes(searchLower)) ||
        (stock.price.toString() && stock.price.toString().toLocaleLowerCase().includes(searchLower)) ||

        (stock.condition && stock.condition.toLocaleLowerCase().includes(searchLower)) ||

        (stock.stock.toString() && stock.stock.toString().toLocaleLowerCase().includes(searchLower))
      ) {
        searchedStocks.push(stock);
      }
    }

    this.stocks = searchedStocks.length > 0 ? searchedStocks : this.getStockOfItems();
  }



  getStockOfItems(): Stock[]{
    this.subscriptions.push(
      this._stockService.getStocks().subscribe({
        next: (res) => {
         this.stocks = res.slice(0, this.numberOfStocks);
        },
        error: (err) => {
          console.log(err);
        }}))

        return this.stocks;
  }

  getStock(stock: Stock){
   this.selectedStock = stock
  }

  showSelling(forSale: boolean) : string{
    return forSale ? "Yes" : "No";
  }


  unSelectStock(){
    this.selectedStock = null
  }


  deleteStock(){
    this.subscriptions.push(
      this._stockService.deleteStock(this.selectedStock.itemId).subscribe({
        next: (res) => {
          window.location.reload()
        }, error: (err) => {
          window.location.reload()
        }
      })
    )
  }


  showAddStockModal(){
    this.showStockModal = !this.showStockModal
  }

  changeOldToSlightlyUsed(name: string): string{
    return name === "OLD" ? "Slightly Used " : name.toLocaleLowerCase();
  }

}
