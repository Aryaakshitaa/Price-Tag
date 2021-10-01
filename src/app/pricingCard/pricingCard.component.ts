import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './pricingCard.component.html',
  styleUrls: ['./pricingCard.component.css']
})
export class PricingCardComponent implements OnInit {
  @Input() myData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
