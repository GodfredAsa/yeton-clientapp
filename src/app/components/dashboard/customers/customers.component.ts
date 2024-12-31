import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { UserModel } from '../../model/user.model';
import { UserSummary } from '../../model/user.summary.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy{

  private _subscriptions :Subscription[] = []
  customers: UserModel[] = []
  userSummaries: UserSummary;

  showUserViewModal: boolean = false;
  deleteSelectedUserModal: boolean = false;

  selectedUser: UserModel;

constructor(
  private _userService :UserService
){}



ngOnInit(): void {
  this.getAllCustomers();
  this.getUserSummary()
}

getSelectedUser(customer: UserModel){
  this.deleteSelectedUserModal = true
  this.selectedUser = customer;
}

getAllCustomers(): UserModel[]{
  this._subscriptions.push(
    this._userService.getAllCustomers().subscribe({
      next: (res) => {
        this.customers = res
      }, error: (err) => {
        console.log(err);
      }
    })
  )
  return this.customers
}

getUserSummary(){
  this._subscriptions.push(
    this._userService.getCustomerSummary().subscribe({
      next: (res) => {
        console.log(res);
        this.userSummaries = res
      }, error: (err) => {
        console.log(err);

      }
    })
  )
}

ngOnDestroy(): void {
  this._subscriptions.forEach(sub => sub.unsubscribe())
}


blockOrUnblockCustomer(){
  this._subscriptions.push(
    this._userService.activateOrInactivateUserAccount(this.selectedUser.phone).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload()
      }, error: (err) => {
        console.log(err);
        window.location.reload()
      }
    })
  )

}


searchedCustomers(search: string){
  if(!search){
    this.customers = this.getAllCustomers();
     return
  }

  const searchedCustomers :UserModel[] = [];
  const searchLower = search.toLocaleLowerCase();
  for(let user of this.customers){
    if(user.phone.toLocaleLowerCase().includes(searchLower) ||
       user.gender.toLocaleLowerCase().includes(searchLower) ||
       user.name.toLocaleLowerCase().includes(searchLower)
  ){
      searchedCustomers.push(user);
    }
  }
  this.customers = searchedCustomers.length > 0 ? searchedCustomers : this.getAllCustomers();
}


}
