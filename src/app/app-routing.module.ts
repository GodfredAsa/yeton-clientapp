import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StocksComponent } from './components/dashboard/stocks/stocks.component';
import { MainDashboardComponent } from './components/dashboard/main-dashboard/main-dashboard.component';
import { AccountProfileComponent } from './components/dashboard/account-profile/account-profile.component';
import { RecentSalesComponent } from './components/dashboard/recent-sales/recent-sales.component';
import { FaqsComponent } from './components/dashboard/faqs/faqs.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent,
    children: [
      { path: "", redirectTo: "", pathMatch: "full" },
      { path: "", component: MainDashboardComponent},
      { path: "stocks", component: StocksComponent},
      // { path: "categories", component: CategoriesComponent},
      { path: "profile", component: AccountProfileComponent},
      { path: "sales", component: RecentSalesComponent},
      { path: "faqs", component: FaqsComponent},







    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
