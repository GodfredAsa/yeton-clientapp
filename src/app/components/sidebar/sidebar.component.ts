import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sideBarItems = [
    {icon: "", name: "Dashboard", link: 'dashboard'},
    {icon: "", name: "Stocks", link: 'dashboard/stocks'},
    {icon: "", name: "Sales" , link: 'dashboard/sales'},
    {icon: "", name: "Categories", link: 'dashboard/categories'},
    {icon: "", name: "FAQs", link: 'dashboard/faqs'},
  ]

  constructor(private _router: Router){}



  selectedIndex: number = 0;
  currentPage = "dashboard"

  selectItem(index: number, current_page: string): void {
    this.selectedIndex = index;
    this.currentPage = current_page
    this.navigateToDashboard(this.currentPage)

    console.log(this.currentPage);

  }


  navigateToDashboard(page: string){
    this._router.navigateByUrl(`/${page}`)

  }

}
