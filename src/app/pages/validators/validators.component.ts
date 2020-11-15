import { Component, OnInit } from '@angular/core';
import { XrpValidatorsService } from 'src/app/services/xrp-validators.service';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  ValidatorsCount: number; 
  AllValidators: any[] = [];
  RippleValidators: any[] = [];
  UNL: any[] = []; 

  constructor(private ValdiatorService: XrpValidatorsService) { }

  ngOnInit(): void {
    this.ValdiatorService.getAllValidators().subscribe(response => {
      console.log(response)
      this.ValidatorsCount = response.count;
      this.AllValidators = response.validators;
      console.log("this is the validor: ", this.AllValidators)
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
}
