import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { CommandeProduct } from 'src/app/services/models/CommandeProduct';
import { UserService } from 'src/app/services/services';
import { CommandeService } from 'src/app/services/services/commande.service';

@Component({
  selector: 'app-commande-products-producteur',
  templateUrl: './commande-products-producteur.component.html',
  styleUrls: ['./commande-products-producteur.component.scss']
})
export class CommandeProductsProducteurComponent implements OnInit {
  bufferValue = 75;
  value =0;
  constructor(  private helperService: HelperService,private userService:UserService,private commande:CommandeService,private route:Router) { }
  commandeProductDtosProducteur!:CommandeProduct[];
  ngOnInit(): void {
    var id = this.helperService.userId;
    this.userService.findByIdUser(id).subscribe({
        next:(res)=>{
           this.commandeProductDtosProducteur=res.commandeProductDtosProducteur;
           console.log( this.commandeProductDtosProducteur);
        },
        error:(err)=>{
          console.log(err);
        }
    })
  }


     
  acquisitionmp(id:any){
       console.log(id)
       this.commande.activeAcquisitionMp(id).subscribe({
           next:()=>{
               console.log("change ")
               this.route.navigate(['/user/commande-product']).then(() => {
                window.location.reload();
            });           },
           error:(err)=>{
            console.log("err "+err)
           }
       });

     
       
  }

  assemblageproduit(id:any){
    this.commande.activeassemblageProduit(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-product']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
       console.log("err "+err)
      }
  });
  }
  
 valide(id:any){
    this.commande.valide(id).subscribe({
      next:()=>{
          console.log("change ")
          this.route.navigate(['/user/commande-product']).then(() => {
            window.location.reload();
        });
      },
      error:(err)=>{
       console.log("err "+err)
      }
  });

}

eballageEtiquetageProduit(id:any){
  this.commande.eballageEtiquetageProduit(id).subscribe({
    next:()=>{
      this.route.navigate(['/user/commande-product']).then(() => {
        window.location.reload();
    });
    },
    error:(err)=>{
     console.log("err "+err)
    }
});
}

fin(id:any){
   this.commande.fin(id).subscribe({
    next:()=>{
      this.route.navigate(['/user/commande-product']).then(() => {
        window.location.reload();
    });
    },
    error:(err)=>{
     console.log("err "+err)
    }
});
}

stockageDistributionProduit(id:any){
    this.commande.stockageDistributionProduit(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-product']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
       console.log("err "+err)
      }
  });
}


transformationmp(id:any){
   this.commande.transformationMp(id).subscribe({
    next:()=>{
      this.route.navigate(['/user/commande-product']).then(() => {
        window.location.reload();
    });
    },
    error:(err)=>{
     console.log("err "+err)
    }
});
}


}
