import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginResponse } from '../model/login.response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { };

  public login(phone: string, password: string): Observable<UserLoginResponse>{
    return this.http.post<UserLoginResponse>(`${this.host}/login`, {phone, password})
  }
}
