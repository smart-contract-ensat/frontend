import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper/helper.service';
import { CommandeProduct } from 'src/app/services/models/CommandeProduct';
import { UserService } from 'src/app/services/services';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.scss']
})
export class CommandeClientComponent implements OnInit {
  bufferValue = 75;
  value =0;
  constructor(  private helperService: HelperService,private userService:UserService) { }
  commandeProduct!:CommandeProduct[];
  
  ngOnInit(): void {
    var id = this.helperService.userId;
    this.userService.findByIdUser(id).subscribe({
        next:(res)=>{
           
           this.commandeProduct=res.commandeProductDtosClient;
          
           console.log( this.commandeProduct);
        },
        error:(err)=>{
          console.log(err);
        }
    })
  }
}
