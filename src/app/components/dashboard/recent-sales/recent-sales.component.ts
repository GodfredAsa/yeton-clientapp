import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrls: ['./recent-sales.component.css']
})
export class RecentSalesComponent {



   sales = [
    {
      "image": "https://cdn1.vectorstock.com/i/1000x1000/74/70/young-woman-passport-photo-concept-metaphor-vector-32037470.jpg",
      "product": "Apple MacBook Pro 17\"",
      "color": "Silver",
      "category": "Laptop",
      "available": "Yes",
      "featured": "Yes",
      "price": "$2999",
      "weight": "3.0 lb."
    },
    {
      "image": "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/e48cd8b6-d0dd-4b60-8ef6-ad3aae616a33/38776c76-b716-4cc7-ad29-3b3c6ed41f15.png",
      "product": "Apple MacBook Pro 17\"",
      "color": "Silver",
      "category": "Laptop",
      "available": "Yes",
      "featured": "Yes",
      "price": "$2999",
      "weight": "3.0 lb."
    },
    {
      "image": "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/552d4700-55bb-4492-bb97-75f43d2df333/fd740456-d67d-4dfd-b94b-c27fea73af5b.png",
      "product": "Apple MacBook Pro 17\"",
      "color": "Silver",
      "category": "Laptop",
      "available": "Yes",
      "featured": "Yes",
      "price": "$2999",
      "weight": "3.0 lb."
    }
  ]


  getSale(sale: Object): Object{
    console.log(sale);
    return sale;

  }

}
