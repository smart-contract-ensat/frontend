import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Product } from 'src/app/services/models/product';
import { ProductService } from 'src/app/services/services/product.service';



@Component({
  selector: 'app-list-public-product',
  templateUrl: './list-public-product.component.html',
  styleUrls: ['./list-public-product.component.scss']
})
export class ListPublicProductComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nom', 'prix', 'caracteristiques','menu'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService,  private helperService: HelperService,private route:Router) {
    this.loadProducts(); 
  
  }

    

  details(id:number) {
    this.route.navigate([`/list-product-pub/${id}`]);
    console.log(id)
    }



  ngOnInit(): void {
    this.loadProducts();
    //this.loadProductForThisUser();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadProducts() {
    this.productService.findAllProducts().subscribe({
      next: (result) => {
        this.dataSource.data = result; // Assign the data to MatTableDataSource
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


 loadProductForThisUser(){
   var id = this.helperService.userId;
   this.productService.findProductByUser(id).subscribe({
      next:(res)=>{
        console.log(res.products);
        this.dataSource.data = res.products;
      },
      error:(err)=>{
        console.log(err);
      }
   })
 }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
