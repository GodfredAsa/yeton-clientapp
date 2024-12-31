import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CategoryModel } from 'src/app/components/model/category.model';
import { ItemModel } from 'src/app/components/model/item.model';
import { Stock } from 'src/app/components/model/stock.model';
import { StockService } from 'src/app/components/services/stock.service';
import { UtilService } from 'src/app/components/services/util.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit{

  @Input() showUpdateItem: boolean;
  @Input() selectedStock: Stock;

  subscriptions: Subscription[] = []
  categories: CategoryModel[] = []

  addItemForm: FormGroup

  // addItemForm = new FormGroup({
  //   categoryId: new FormControl("", [Validators.required]),
  //   name: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   brand: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   condition: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   model: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   price: new FormControl(0, [Validators.required, Validators.minLength(5)]),
  //   stock: new FormControl(0, [Validators.required, Validators.minLength(5)]),
  //   cost: new FormControl(0, [Validators.required, Validators.minLength(5)]),
  //   image: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   hasVendor: new FormControl(true, [Validators.required, Validators.minLength(5)]),
  //   hasGallery: new FormControl(true, [Validators.required, Validators.minLength(5)]),
  //   forSale: new FormControl(true, [Validators.required, Validators.minLength(5)]),

  // })

  constructor(
        private _stockService :StockService,
        private _utilsService : UtilService,
        private fb :FormBuilder
  ){}

  ngOnInit(): void {
    this.categories = this._utilsService.getObjectFromStorage("categories");
    this.selectedStock = this._utilsService.getObjectFromStorage('selectedStock');
    setTimeout(() => {
      console.log(`SELECTED STOCK ${this.selectedStock.itemName}`);

      this.addItemForm = this.fb.group({
        name: [this.selectedStock.itemName],
        brand: [this.selectedStock.brand],
        condition: [this.selectedStock.condition],
        model: [this.selectedStock.model],
        price:[this.selectedStock.price],
        stock: [this.selectedStock.stock],
        image: [this.selectedStock.image],
        hasGallery: [this.selectedStock.hasGallery],
        forSale: [this.selectedStock.forSale],
        hasVendor: [this.selectedStock.hasVendor],
        cost: [this.selectedStock.cost],
        categoryId: [this.categories[0].categoryId],
      })
    }, 300);


  }

  updateStock(){
    this.subscriptions.push(
      this._stockService.updateStock(this.selectedStock.itemId, this.addItemForm.value).subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload()
        }, error: (err) => {
          console.log(err.error.message);

        }
      })
    )
  }

  closeModalRemoveSelectedStock(){


    if(!this.showUpdateItem){
      this._utilsService.removeValueFromLocalStorage("selectedStock");
      this.selectedStock = null
    }
  this.showUpdateItem = !this.showUpdateItem;



  }



}
