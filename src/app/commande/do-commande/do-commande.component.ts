import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { UserDto } from 'src/app/services/models';
import { Product } from 'src/app/services/models/product';
import { CommandeService } from 'src/app/services/services/commande.service';
import { ProductService } from 'src/app/services/services/product.service';

@Component({
  selector: 'app-do-commande',
  templateUrl: './do-commande.component.html',
  styleUrls: ['./do-commande.component.scss']
})
export class DoCommandeComponent implements OnInit {

  constructor( 
    private activatedRoute:ActivatedRoute
    ,private productService:ProductService
    ,private route:Router,
    private helperService: HelperService,
    private commandeService:CommandeService

  ) { }
  user!:UserDto;
  product!:Product;
  id_product!:number;

  form!:FormGroup;
  

  ngOnInit(): void {

   this.form = new FormGroup({
    quantity:new FormControl("", Validators.required),
    specifications:new FormControl("", Validators.required),
   })

    var id =  this.activatedRoute.snapshot.paramMap.get('id');
   
    console.log(id);
    if(id!=null){
     this.id_product=Number.parseInt(id);
     this.productService.findProductById(Number.parseInt(id)).subscribe({
       next: (res) => {
         this.product=res;
          console.log(res)
 



 if(this.product.id_user){
  this.id_producteur = this.product.id_user;
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


 id_client!:number;
 id_producteur!:number;




 envoyerCommande(){
  this.id_client = this.helperService.userId;
   var a = {
    "id_producteur":this.id_producteur,
    "id_client":this.id_client,
    "specifications":this.form.value.specifications,
     "quntity":this.form.value.quantity,
    "products": [ { "id": this.id_product }]
  }
   this.commandeService.addCommande(a).subscribe({
       next:(res)=>{
        console.log(res);
         this.route.navigate(["/user/commande-product-client"])
       },error:(err)=>{
        console.log(err);

       }
   })

  
 }



}
