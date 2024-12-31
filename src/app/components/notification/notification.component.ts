import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  @Input() isSuccess: boolean;
  @Input() message: string;
  @Input() isError: boolean;

  ngOnInit(): void {

    setTimeout(() => {
      this.isError = false;
      this.isSuccess = false
    }, 5000);
  }


}
