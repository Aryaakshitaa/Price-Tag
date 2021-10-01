import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
cards = [
    {
      title: "Free",
      price: "$0",
      user: {
        data: "Single User",
        available: true
      },
      storage: {
        data: "5GB Storage",
        available: true
      },
      projectA: {
        data: "Unlimited Public Projects",
        available: true
      },
      access: {
        data: "Community Access",
        available: true
      },
      projectB: {
        data: "Unlimited Private Projects",
        available: false
      },
      support: {
        data: "Dedicated Phone Support",
        available: false
      },
      subdomain: {
        data: "Free Subdomain",
        available: false
      },
      status: {
        data: "Monthly Status Reports",
        available: false
      }
    },
    {
      title: "Plus",
      price: "$9",
      user: {
        data: "5 Users",
        available: true
      },
      storage: {
        data: "50GB Storage",
        available: true
      },
      projectA: {
        data: "Unlimited Public Projects",
        available: true
      },
      access: {
        data: "Community Access",
        available: true
      },
      projectB: {
        data: "Unlimited Private Projects",
        available: true
      },
      support: {
        data: "Dedicated Phone Support",
        available: true
      },
      subdomain: {
        data: "Free Subdomain",
        available: true
      },
      status: {
        data: "Monthly Status Reports",
        available: false
      }
    },
    {
      title: "Pro",
      price: "$49",
      user: {
        data: "Unlimited Users",
        available: true
      },
      storage: {
        data: "150GB Storage",
        available: true
      },
      projectA: {
        data: "Unlimited Public Projects",
        available: true
      },
      access: {
        data: "Community Access",
        available: true
      },
      projectB: {
        data: "Unlimited Private Projects",
        available: true
      },
      support: {
        data: "Dedicated Phone Support",
        available: true
      },
      subdomain: {
        data: "Unlimited Free Subdomains",
        available: true
      },
      status: {
        data: "Monthly Status Reports",
        available: true
      }
    }
  ]
}
