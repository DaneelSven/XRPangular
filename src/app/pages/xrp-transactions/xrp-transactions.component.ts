import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { XrpTransactionService } from 'src/app/services/xrp-transaction.service';

@Component({
  selector: 'app-xrp-transactions',
  templateUrl: './xrp-transactions.component.html',
  styleUrls: ['./xrp-transactions.component.css']
})
export class XrpTransactionsComponent implements OnInit {


  constructor(private xrpTransactionService: XrpTransactionService) { }

  ngOnInit(): void {
    this.xrpTransactionService.getNetworkFees().subscribe(res => {
      
    })
  }

}
