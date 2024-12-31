import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  setValueToLocalStorage(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  getValueFromLocalStorage(name: string) {
    return localStorage.getItem(name)
  }

  removeValueFromLocalStorage(name: string): void {
    localStorage.removeItem(name);
  }

  removeAllValuesFromLocalStorage() {
    localStorage.clear()
  }

  setObjectToLocalStorage(name: string, object: any) {
    localStorage.setItem(name, JSON.stringify(object))
  }

  removeItemsWithSimilarPatternFromStorage(pattern: RegExp) {
    Object.keys(localStorage).forEach(key => {
      if (pattern.test(key)) {
        localStorage.removeItem(key);
      }
    });
  }

  getObjectFromStorage(name: string): any{
    return JSON.parse(localStorage.getItem(name));
  }

  formatToCurrency(amount: any) : string{
    return  amount.toLocaleString('en-US');
  }


}
