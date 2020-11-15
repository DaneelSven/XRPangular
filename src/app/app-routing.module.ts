import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { HomeComponent } from './pages/home/home.component';
import { ValidatorsComponent } from './pages/validators/validators.component';
import { XrpTransactionsComponent } from './pages/xrp-transactions/xrp-transactions.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'validators', component: ValidatorsComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'transactions', component: XrpTransactionsComponent},
  {path: '', pathMatch: "full", component: HomeComponent},
  {path: '**', redirectTo: ''}
]




@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
