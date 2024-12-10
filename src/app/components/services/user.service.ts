import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };

  getAllUsersOnline(): Observable<any>{
    return this.http.get<any>(`${this.host}/summary`)
  }

  logoutUser(phone: string): Observable<any>{
    return this.http.post<any>(`${this.host}/users/logout`, {phone})
  }
}
