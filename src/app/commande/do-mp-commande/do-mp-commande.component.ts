import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { UserDto } from 'src/app/services/models';
import { MP } from 'src/app/services/models/MP';
import { Product } from 'src/app/services/models/product';
import { CommandeMpService } from 'src/app/services/services/commande-mp.service';
import { CommandeService } from 'src/app/services/services/commande.service';
import { MPService } from 'src/app/services/services/mp.service';
import { ProductService } from 'src/app/services/services/product.service';

@Component({
  selector: 'app-do-mp-commande',
  templateUrl: './do-mp-commande.component.html',
  styleUrls: ['./do-mp-commande.component.scss']
})
export class DoMpCommandeComponent implements OnInit {
  constructor( 
    private activatedRoute:ActivatedRoute
    ,private productService:ProductService
    ,private route:Router,
    private mpService:MPService,
    private helperService: HelperService,
    private commandeService:CommandeService,
    private commandeMp:CommandeMpService

  ) { }
  user!:UserDto;
  mp!:MP;
  id_mp!:number;

  form!:FormGroup;
  

  ngOnInit(): void {

   this.form = new FormGroup({
    quantity:new FormControl("", Validators.required),
    specifications:new FormControl("", Validators.required),
   })

    var id =  this.activatedRoute.snapshot.paramMap.get('id');
   
    console.log(id);
    if(id!=null){
     this.id_mp=Number.parseInt(id);
     this.mpService.findOneMpById(Number.parseInt(id)).subscribe({
       next: (res) => {
         this.mp=res;
          console.log(res)

 if(this.mp.id_user){
  this.id_fournisseur = this.mp.id_user;
              this.mpService.findMpsByUser(this.mp.id_user).subscribe({
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


 id_fournisseur!:number;
 id_producteur!:number;




 envoyerCommande(){
  this.id_producteur= this.helperService.userId;
   var a = {
    "id_producteur":this.id_producteur,
    "id_fourniseur":this.id_fournisseur,
    "specifications":this.form.value.specifications,
     "quntity":this.form.value.quantity,
    "mps": [ { "id": this.id_mp }]
  }
   this.commandeMp.addCommande(a).subscribe({
       next:(res)=>{
        console.log(res);
         this.route.navigate(["/user/commande-mp-producteur"])
       },error:(err)=>{
        console.log(err);

       }
   })

  
 }
}
