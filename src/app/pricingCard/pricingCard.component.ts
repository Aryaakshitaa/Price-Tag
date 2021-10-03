import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './pricingCard.component.html',
  styleUrls: ['./pricingCard.component.css']
})
export class PricingCardComponent implements OnInit {
  @Input() myData = {
    title: "Free",
    price: "$0",
    user: {
      data: "Single User",
      available: true,
      bold: false
    },
    storage: {
      data: "5GB Storage",
      available: true,
      bold: false
    },
    projectA: {
      data: "Unlimited Public Projects",
      available: true,
      bold: false
    },
    access: {
      data: "Community Access",
      available: true,
      bold: false
    },
    projectB: {
      data: "Unlimited Private Projects",
      available: false,
      bold: false
    },
    support: {
      data: "Dedicated Phone Support",
      available: false,
      bold: false
    },
    subdomain: {
      data: "Free Subdomain",
      available: false,
      bold: false
    },
    status: {
      data: "Monthly Status Reports",
      available: false,
      bold: false
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
