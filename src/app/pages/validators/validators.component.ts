import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Validator } from 'src/app/models/validators.model';
import { XrpAccountsService } from 'src/app/services/xrp-accounts.service';
import { XrpValidatorsService } from 'src/app/services/xrp-validators.service';
import * as XrpActions from './../../actions/xrp.actions'

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  ValidatorsCount: number; 
  AllValidators: Validator[] = [];
  RippleValidators: Validator[] = [];
  UNL: Validator[] = []; 
  toggleView = false;

  constructor(private ValdiatorService: XrpValidatorsService, private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.ValdiatorService.getAllValidators().subscribe(response => {
      console.log(response)
      this.ValidatorsCount = response.count;
      this.AllValidators = response.validators;
      this.AllValidators.forEach(element => {
        element.visible = false;
      })
      console.log("this is the validor: ", this.AllValidators)
      // this.store.dispatch( new XrpActions.XrpValidator(this.AllValidators))
    })
  }

  getRippleValidators() {
    this.AllValidators.forEach(element => {
      console.log(element)
      if(element.domain === undefined){
        return;
      }
      else if(element.domain.includes("ripple")){
        this.RippleValidators.push(element)
        console.log('this is the element',element)
      }
    });
    console.log('these are the ripple validators: ', this.RippleValidators)
  }

  getUniqueNodeList() {
    this.AllValidators.forEach(element => {
      
      if(element.unl === true){
        this.UNL.push(element)
      }
    })
    console.log('this is the unl: ', this.UNL)
  }

  changeView(val) {
    val.visible = !val.visible
  }
}
