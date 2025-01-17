import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StocksComponent } from './components/dashboard/stocks/stocks.component';
import { MainDashboardComponent } from './components/dashboard/main-dashboard/main-dashboard.component';
import { AccountProfileComponent } from './components/dashboard/account-profile/account-profile.component';
import { FaqsComponent } from './components/dashboard/faqs/faqs.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { OrderComponent } from './components/dashboard/orders/orders.component';
import { CustomersComponent } from './components/dashboard/customers/customers.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent,
    children: [
      { path: "", redirectTo: "", pathMatch: "full" },
      { path: "", component: MainDashboardComponent},
      { path: "stocks", component: StocksComponent},
      { path: "categories", component: CategoriesComponent},
      { path: "profile", component: AccountProfileComponent},
      { path: "orders", component: OrderComponent},
      { path: "users", component: CustomersComponent},
      { path: "faqs", component: FaqsComponent},







    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
