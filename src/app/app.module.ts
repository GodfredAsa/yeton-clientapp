import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductOverviewComponent } from './components/dashboard/product-overview/product-overview.component';
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
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { FaqsComponent } from './components/dashboard/faqs/faqs.component';
import { TitleComponent } from './components/title/title.component';
import { OrderComponent } from './components/dashboard/orders/orders.component';
import { StatsComponent } from './components/stats/stats.component';
import { UpdateStockComponent } from './components/dashboard/stocks/update-stock/update-stock.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CustomersComponent } from './components/dashboard/customers/customers.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductOverviewComponent,
    OrderComponent,
    NavbarComponent,
    StocksComponent,
    AccountProfileComponent,
    SidebarComponent,
    MainDashboardComponent,
    DonutPieChartComponent,
    BarChartComponent,
    StackBarChartComponent,
    CategoriesComponent,
    FaqsComponent,
    TitleComponent,
    StatsComponent,
    UpdateStockComponent,
    NotificationComponent,
    CustomersComponent,
    LineChartComponent
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
