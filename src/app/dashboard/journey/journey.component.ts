import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarComponent } from "../../shared/side-bar/side-bar.component";
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';


@Component({
    selector: 'app-journey',

    templateUrl: './journey.component.html',
    styleUrls: ['./journey.component.scss'],
})
export class JourneyComponent {
  products:any[] = [];
  events: any[];

  constructor(
    private router: Router, 
    public dialog: MatDialog
  ){
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];
  }

  navigate(route: string[]) {
      this.router.navigate(route);
  }
  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Product 1', quantity: 5, price: 10.00, status: 'In Stock' },
      { id: 2, name: 'Product 2', quantity: 10, price: 15.00, status: 'Out of Stock' },
      { id: 3, name: 'Product 3', quantity: 3, price: 20.00, status: 'In Stock' }
    ];
  }

}
