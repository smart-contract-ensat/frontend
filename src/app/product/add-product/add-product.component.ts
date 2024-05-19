import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { CategoryProduct } from 'src/app/services/models/CategoryProduct';
import { Product } from 'src/app/services/models/product';
import { ProductService } from 'src/app/services/services/product.service';
export interface Fruit {
  name: string;
}
const ENTER = 13;
const COMMA = 188;
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  constructor(private productService: ProductService, private helperService: HelperService , private route:Router) { }

  form!:FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        nom:new FormControl('',[Validators.required]),
        description:new FormControl('',[Validators.required]),
        lieu_origine:new FormControl('',[Validators.required]),
        usage:new FormControl('',[Validators.required]),
        poids_brut_unique:new FormControl('',[Validators.required]),
        taille_du_paquet_unique:new FormControl('',[Validators.required]),
        prix:new FormControl('',[Validators.required]),
        categorie:new FormControl('',[Validators.required]),
      }
    )
  }
  arrayCategoryProduct:CategoryProduct[] = [
     {
      id:1,
       nom:"Souffleurs"
     },
     {
      id:2,
       nom:"Outil de tour"
     },
     {
      id:3,
       nom:"Autres outils à main"
     },
     {
      id:4,
       nom:"Perceuses électriques"
     },
     {
      id:5,
       nom:"Coupe-verre"
     },
     {
      id:6,
       nom:"Meuleuse d’angle"
     },
     {
      id:7,
       nom:"Fers à souder"
     },
     {
      id:8,
       nom:"Trousses d'outils"
     }
  ];

  product!:Product;
  a!:string;
  addProduct() {
    if(this.form.valid){
              console.log(this.fruits);
              for(var i = 0; i < this.fruits.length;i++){
                   this.a+=this.fruits[i]+", ";
              }
              this.product=this.form.value;
              this.product.caracteristiques=this.a;
              this.product.id_user=this.helperService.userId;
              console.log(this.a);
              console.log(this.product);

                //this.saveProduct(this.product);
                this.productService.addProduct(this.product).subscribe({
                  next:(res)=>{
                    console.log(res)
                  },
                  error:(err)=>{
                     console.log(err);
                  }
                })

                this.route.navigate(["/user/product-list"])
    }
    }



/**
 * 
 *  ==================================================
 */


saveProduct(newProduct:Product): void {
  this.productService.save2({ body: newProduct }).subscribe({
    next: (response) => {
      console.log('Product saved successfully:', response);
      // Réinitialiser le nouveau produit après l'enregistrement réussi
    },
    error: (error) => {
      console.error(error);
    }
  });
}



/**
 * =================================================
 */






  selected = 'option2';

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(t: string): void {
    const index = this.fruits.indexOf(t);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
