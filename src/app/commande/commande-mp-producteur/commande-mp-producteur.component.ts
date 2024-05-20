import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { CommandeMp } from 'src/app/services/models/CommandeMp';
import { CommandeProduct } from 'src/app/services/models/CommandeProduct';
import { UserService } from 'src/app/services/services';
import { CommandeMpService } from 'src/app/services/services/commande-mp.service';
import { CommandeService } from 'src/app/services/services/commande.service';

@Component({
  selector: 'app-commande-mp-producteur',
  templateUrl: './commande-mp-producteur.component.html',
  styleUrls: ['./commande-mp-producteur.component.scss']
})
export class CommandeMpProducteurComponent implements OnInit {

  bufferValue = 75;
  value =0;
  constructor(  
    private helperService: HelperService
    ,private userService:UserService,
    private commande:CommandeService,
    private route:Router,
    private commandeMp:CommandeMpService
  ) { }
  commandeMpDtoProducteur!:CommandeMp[];
  ngOnInit(): void {
    var id = this.helperService.userId;
    this.userService.findByIdUser(id).subscribe({
        next:(res)=>{
          this.commandeMpDtoProducteur=res.commandeMpDtoProducteur;
           console.log(this.commandeMpDtoProducteur);
        },
        error:(err)=>{
          console.log(err);
        }
    })
  }


  reception(id:any){
    this.commandeMp.reception(id).subscribe({
      next:()=>{
        this.route.navigate(['/user/commande-mp-producteur']).then(() => {
          window.location.reload();
      });
      },
      error:(err)=>{
        console.log(err)
      }
  })
  }

}
