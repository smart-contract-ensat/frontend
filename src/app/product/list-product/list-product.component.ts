import { HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/models/product';
import { ProductService } from 'src/app/services/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products!:Product[];
  errorMessage: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //this.loadProducts();
    //console.log(this.products)
  }

  loadProducts() {
    this.productService.findAllProducts().subscribe({
       next:(result) => {
        this.products = result;
        console.log(this.products)
      
       },error:(err) => {console.log(err)}
    })
  }


  

}
