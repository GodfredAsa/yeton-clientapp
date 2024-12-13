import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../model/category.model';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MOBILE_NUMBER_VALIDATE } from '../../pattern-validators/pattern.validators';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories: CategoryModel[] = []
  selectedCategory: CategoryModel;
  subscriptions :Subscription[] = []

  showCategoryModal: boolean = false;

  isUpdatingCategory: boolean = false;

  addCategoryForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    categoryImageUrl: new FormControl("", [Validators.required, Validators.minLength(20)]),
  })

  constructor(
    private _categoryService :CategoryService,
    private _utilsService : UtilService
  ){}



  ngOnInit(): void {
    this.getCategories()
  }


  getCategories(){
    this.subscriptions.push(
      this._categoryService.getCategories().subscribe({
        next: (res) => {
          this.categories = res
          console.log(this.categories);
          this._utilsService.setObjectToLocalStorage('categories', this.categories)

        }, error: (err) => {
          console.log(err.error.message);

        }
      }))
  }

  showAddCategoryModal(){
    this.showCategoryModal = !this.showCategoryModal
  }


  addCategory(){
    console.log( this.addCategoryForm.value);
    const category =  {name: this.addCategoryForm.value.name,
      categoryImageUrl: this.addCategoryForm.value.categoryImageUrl
    }

    this.subscriptions.push(
      this._categoryService.addCategory(category).subscribe({
        next: (res) => {
          window.location.reload()
        }, error: (err) => {
          window.location.reload()
        }
      })
    )
  }

  getSelectedCategory(category: CategoryModel){
    this.selectedCategory = category
  }

  unSelectCategory(){
    this.selectedCategory = null
  }

  deleteCategory(){
    this.subscriptions.push(
      this._categoryService.deleteCategory(this.selectedCategory.categoryId).subscribe({
        next: (response) => {
          console.log( response.message);
          window.location.reload()
        }, error: (err) => {
          console.log(err.error.message);

        }
      })
    )
  }

  selectCategoryToBeUpdated(){
    this.addCategoryForm.patchValue({
      name: this.selectedCategory.name,
      categoryImageUrl: this.selectedCategory.imageUrl
    })

    this.showCategoryModal = true


  }


  updateCategory(){
    const category =  { name: this.addCategoryForm.value.name,
      categoryImageUrl: this.addCategoryForm.value.categoryImageUrl
    }

    this.subscriptions.push(
      this._categoryService.updateCategory(this.selectedCategory.categoryId, category).subscribe({
        next: (res) => {
          console.log(res);

          // window.location.reload()
        }, error: (err) => {
          console.log(err);

          // window.location.reload()
        }
      })
    )
  }



}
