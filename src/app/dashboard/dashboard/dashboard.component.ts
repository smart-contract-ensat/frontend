import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarComponent } from "../../shared/side-bar/side-bar.component";



@Component({
    selector: 'app-dashboard',

    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {
    products:any[] = [];

    ngOnInit(): void {
        this.products = [
          { id: 1, name: 'Product 1', quantity: 5, price: 10.00, status: 'In Stock' },
          { id: 2, name: 'Product 2', quantity: 10, price: 15.00, status: 'Out of Stock' },
          { id: 3, name: 'Product 3', quantity: 3, price: 20.00, status: 'In Stock' }
        ];
      }

    constructor(private router: Router){}

    navigate(route: string[]) {
        this.router.navigate(route);
    }

  

}
