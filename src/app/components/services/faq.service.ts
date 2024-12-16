import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { FAQModel } from '../model/faq.model';
import { CustomResponse } from '../model/response.message';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  public host = environment.apiUrl;

  constructor( private http: HttpClient  ) { };


   getFaqs(): Observable<FAQModel[]>{
      return this.http.get<FAQModel[]>(`${this.host}/faqs`)
    }


    deleteFaqById(faqId: string): Observable<any>{
      return this.http.delete<any>(`${this.host}/faqs/${faqId}`)
    }

    updateFaq(faqId: string, faq: {title: string, message: string}): Observable<FAQModel[]>{
      return this.http.put<FAQModel[]>(`${this.host}/faqs/${faqId}`, faq)
    }

    addFaq(faq: {title: string, message: string}): Observable<CustomResponse>{
      return this.http.post<CustomResponse>(`${this.host}/faqs`, faq)
    }


}
