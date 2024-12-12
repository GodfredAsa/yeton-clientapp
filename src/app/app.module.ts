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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainDashboardComponent } from './components/dashboard/main-dashboard/main-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DonutPieChartComponent } from './components/charts/donut-pie-chart/donut-pie-chart.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { StackBarChartComponent } from './components/charts/stack-bar-chart/stack-bar-chart.component';
import { MonthlySalesChartComponent } from './components/charts/monthly-sales-chart/monthly-sales-chart.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';

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
    MainDashboardComponent,
    DonutPieChartComponent,
    BarChartComponent,
    StackBarChartComponent,
    MonthlySalesChartComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
