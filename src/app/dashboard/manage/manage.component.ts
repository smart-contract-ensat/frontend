import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SideBarComponent } from "../../shared/side-bar/side-bar.component";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss'],

})
export class ManageComponent {

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    public dialog: MatDialog){}

  navigate(route: string[]) {
      this.router.navigate(route);
  }

  products:any[] = [];

  ngOnInit(): void {
      this.products = [
        { id: 1, name: 'Product 1', quantity: 5, price: 10.00, status: 'In Stock' },
        { id: 2, name: 'Product 2', quantity: 10, price: 15.00, status: 'Out of Stock' },
        { id: 3, name: 'Product 3', quantity: 3, price: 20.00, status: 'In Stock' }
      ];
    }

    openDialog(): void {
     this.router.navigate(['user/product']);
    }
  

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentExampleDialog {}