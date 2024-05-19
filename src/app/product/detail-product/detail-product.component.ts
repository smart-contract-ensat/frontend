import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/services/product.service';
import { Product } from 'src/app/services/models/product';
import { UserDto } from 'src/app/services/models';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  product!:Product;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }
  user!:UserDto;
  ngOnInit(): void {




     var id =  this.activatedRoute.snapshot.paramMap.get('id');
     console.log(id);
     if(id!=null){
      this.productService.findProductById(Number.parseInt(id)).subscribe({
        next: (res) => {
          this.product=res;
           console.log(res)




  if(this.product.id_user){
               this.productService.findProductByUser(this.product.id_user).subscribe({
            next:(res)=>{
               console.log(res);
               this.user=res;
            },
            error:(err)=>{
              console.log(err);
            }
      })
  }











        },
        error: (err) => {
          console.log(err)
        }
     })
     }


  


   
  }

}
