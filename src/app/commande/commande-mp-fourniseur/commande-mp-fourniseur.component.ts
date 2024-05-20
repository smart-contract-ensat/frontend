import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { CommandeMp } from 'src/app/services/models/CommandeMp';
import { CommandeProduct } from 'src/app/services/models/CommandeProduct';
import { UserService } from 'src/app/services/services';
import { CommandeMpService } from 'src/app/services/services/commande-mp.service';
import { CommandeService } from 'src/app/services/services/commande.service';
@Component({
  selector: 'app-commande-mp-fourniseur',
  templateUrl: './commande-mp-fourniseur.component.html',
  styleUrls: ['./commande-mp-fourniseur.component.scss']
})
export class CommandeMpFourniseurComponent implements OnInit {

 
  bufferValue = 75;
  value =0;
  constructor(  
    private helperService: HelperService
    ,private userService:UserService,
    private commande:CommandeService,
    private commandeMp:CommandeMpService,
    private route:Router
  ) { }
  commandeMpDtoFourniseur!:CommandeMp[];
  ngOnInit(): void {
    var id = this.helperService.userId;
    this.userService.findByIdUser(id).subscribe({
        next:(res)=>{
          this.commandeMpDtoFourniseur=res.commandeMpDtoFourniseur;
           console.log(this.commandeMpDtoFourniseur);
        },
        error:(err)=>{
          console.log(err);
        }
    })
  }




  valide(id:any){
         
     this.commandeMp.valide(id).subscribe({
         next:()=>{
          console.log("change !")
          this.route.navigate(['/user/commande-mp-fourniseur']).then(() => {
            window.location.reload();
        });
         },
         error:(err)=>{
           console.log(err)
         }
     })

  }

  fin(id:any){
    this.commandeMp.fin(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-mp-fourniseur']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
        console.log(err)
      }
  })
  }


  preparationDuCommande(id:any){


    this.commandeMp.preparationDuCommande(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-mp-fourniseur']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
        console.log(err)
      }
  })



  }



  chargementDeMp(id:any){

    this.commandeMp.chargementDeMp(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-mp-fourniseur']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
        console.log(err)
      }
  })


  }


  repartitionLogistique(id:any){


    this.commandeMp.repartitionLogistique(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-mp-fourniseur']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
        console.log(err)
      }
  })



  }

  enLivraison(id:any){

    this.commandeMp.enLivraison(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-mp-fourniseur']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
        console.log(err)
      }
  })

  }

  reception(id:any){
    this.commandeMp.reception(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-mp-fourniseur']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
        console.log(err)
      }
  })
  }

}
