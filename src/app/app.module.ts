import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';
import { ProductOverviewComponent } from './components/dashboard/product-overview/product-overview.component';
import { RecentSalesComponent } from './components/dashboard/recent-sales/recent-sales.component';
import { UsersOnlineComponent } from './components/dashboard/users-online/users-online.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StocksComponent } from './components/dashboard/stocks/stocks.component';
import { AccountProfileComponent } from './components/dashboard/account-profile/account-profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SummaryComponent,
    ProductOverviewComponent,
    RecentSalesComponent,
    UsersOnlineComponent,
    NavbarComponent,
    StocksComponent,
    AccountProfileComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
