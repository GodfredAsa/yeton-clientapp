import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { UserModel } from '../model/user.model';
import { UserSummary } from '../model/user.summary.model';
import { CustomResponse } from '../model/response.message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };

  getAllCustomers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.host}/users/admin`)
  }

  logoutUser(phone: string): Observable<any>{
    return this.http.post<any>(`${this.host}/users/logout`, {phone})
  }

  getCustomerSummary(): Observable<UserSummary>{
    return this.http.get<UserSummary>(`${this.host}/admin/user-summary`)
  }

  activateOrInactivateUserAccount(phone: string): Observable<CustomResponse>{
    return this.http.put<CustomResponse>(`${this.host}/admin/users/${phone}/blacklist`, {})
  }



}
