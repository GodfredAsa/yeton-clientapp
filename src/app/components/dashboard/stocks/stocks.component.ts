import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stock } from '../../model/stock.model';
import { StockService } from '../../services/stock.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from '../../model/category.model';
import { UtilService } from '../../services/util.service';
import { ItemModel } from '../../model/item.model';
import { StockSummary } from '../../model/stock.summary.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit, OnDestroy{

  notificationMessage: string;
  isSuccess: boolean;
  isError: boolean;

  stocks: Stock[] = [];
  numberOfStocks: number = 20;
  selectedStock: Stock;
  selectedStockToBeUpdate: Stock;

  subscriptions: Subscription[] = []

  categories: CategoryModel[] = []
  stockSummary: StockSummary;

  showAddItem: boolean = false;
  showUpdateItem: boolean = false;

    addItemForm = new FormGroup({
      categoryId: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      brand: new FormControl("", [Validators.required, Validators.minLength(5)]),
      condition: new FormControl("", [Validators.required, Validators.minLength(5)]),
      model: new FormControl("", [Validators.required, Validators.minLength(5)]),
      price: new FormControl("", [Validators.required, Validators.minLength(5)]),
      stock: new FormControl("", [Validators.required, Validators.minLength(5)]),
      cost: new FormControl("", [Validators.required, Validators.minLength(5)]),
      image: new FormControl("", [Validators.required, Validators.minLength(5)]),
      hasVendor: new FormControl(true, [Validators.required, Validators.minLength(5)]),
      hasGallery: new FormControl(true, [Validators.required, Validators.minLength(5)]),
      forSale: new FormControl(true, [Validators.required, Validators.minLength(5)]),
    })

  constructor(
    private _stockService :StockService,
    private _utilsService : UtilService
  ){}

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  ngOnInit(): void {
    this.getStockOfItems();
    this.categories = this._utilsService.getObjectFromStorage("categories");
    this.getStockSummaries()
  }

  searchStocks(search: string) {
    if (!search) {
      this.stocks = this.getStockOfItems();
      return;
    }

    const searchedStocks: Stock[] = [];
    const searchLower = search.toLocaleLowerCase();
    for (let stock of this.stocks) {
      if (stock.itemName.toLocaleLowerCase().includes(searchLower) ||
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
        }
      }))
      return this.stocks;
  }

  getStock(stock: Stock){
   this.selectedStock = stock
  }

  getUpdateStock(stock: Stock){
    if(stock === this.selectedStock){
      this.selectedStockToBeUpdate = stock
      this._utilsService.setObjectToLocalStorage('selectedStock', stock);

    }else{
      this.selectedStockToBeUpdate = stock
      this._utilsService.setObjectToLocalStorage('selectedStock', stock);

    }
      // this.selectedStockToBeUpdate = stock
      // console.log(stock);
      // this._utilsService.setObjectToLocalStorage('selectedStock', stock);
      this.showUpdateItem = !this.showUpdateItem
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
          window.location.reload();
        }, error: (err) => {
          window.location.reload();
        }
      })
    )
  }


  showAddStockModal(){
    this.showAddItem = !this.showAddItem
  }

  changeOldToSlightlyUsed(name: string): string{
    return name === "OLD" ? "Slightly Used " : name.toLocaleLowerCase();
  }

  addItemToStock(){
    let item : ItemModel = {
      categoryId: this.addItemForm.value.categoryId,
      name: this.addItemForm.value.name,
      brand: this.addItemForm.value.brand,
      condition: this.addItemForm.value.condition,
      model: this.addItemForm.value.model,
      price: Number(this.addItemForm.value.price),
      stock: Number(this.addItemForm.value.stock),
      image: this.addItemForm.value.image,
      hasGallery: this.addItemForm.value.hasGallery,
      forSale: this.addItemForm.value.forSale,
      hasVendor: this.addItemForm.value.hasVendor,
      cost: Number(this.addItemForm.value.cost)
    }
    this.subscriptions.push(
      this._stockService.addStock(item).subscribe({
        next: (res) => {
          window.location.reload();
        }, error: (err) => {
          window.location.reload();
          console.log(err);
        }
      })
    )
  }


  getStockSummaries(){
    this.subscriptions.push(
      this._stockService.getStockSummary().subscribe({
        next: (res) => {
          console.log(res);
          this.stockSummary = res
        }, error: (err) => {
          console.log(err);

        }
      })
    )
  }



}
