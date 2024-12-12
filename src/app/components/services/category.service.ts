import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { CategoryModel } from '../model/category.model';
import { CustomResponse } from '../model/response.message';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };


  getCategories(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${this.host}/categories`)
  }


  addCategory(category: {name: string, categoryImageUrl: string}): Observable<any>{
    return this.http.post<any>(`${this.host}/categories`, category)
  }
  // CustomResponse
  deleteCategory(categoryId: string): Observable<CustomResponse>{
    return this.http.delete<CustomResponse>(`${this.host}/categories/${categoryId}`)
  }

  updateCategory(categoryId: string, category: {name: string, categoryImageUrl: string}): Observable<CustomResponse>{
    return this.http.put<CustomResponse>(`${this.host}/categories/${categoryId}`, category)
  }



}
