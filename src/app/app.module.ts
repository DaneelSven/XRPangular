import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { XrpTransactionsComponent } from './pages/xrp-transactions/xrp-transactions.component';
import { ValidatorsComponent } from './pages/validators/validators.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { StoreModule} from '@ngrx/store'
import { simpleReducer } from './simple.reducer';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    XrpTransactionsComponent,
    ValidatorsComponent,
    AccountsComponent,
    ActionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({ message: simpleReducer}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
