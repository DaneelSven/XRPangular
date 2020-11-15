import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import { XrpAccountsService } from 'src/app/services/xrp-accounts.service';

interface AccountState {
  account: string;
}

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountInfo: {};
  xrpAccount = "rhREXVHV938ToGkdJQ9NCYEY4x8kSEtjna"

  account$: Observable<string>
  
  constructor(private store: Store<AccountState>, private xrpAccountService: XrpAccountsService) { 
    this.account$ = this.store.select('account')
  }

  firstAccount() {
    this.store.dispatch({type: 'firstAccount'})
  }

  secondAccount() {
    this.store.dispatch({type: 'secondAccount'})
  }

  ngOnInit(): void {
    this.xrpAccountService.fetchAccountInfo(this.xrpAccount).subscribe(res => {
      this.xrpAccount = res.account_data
      console.log('this is the account data', this.xrpAccount)
    })
  }

}
