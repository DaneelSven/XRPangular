import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.css']
})
export class ActionCardComponent implements OnInit {

  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() navigation: string = "";

  @Input() clickable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
