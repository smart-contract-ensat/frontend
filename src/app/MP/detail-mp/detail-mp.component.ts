import { MPService } from 'src/app/services/services/mp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/services/product.service';
import { Product } from 'src/app/services/models/product';
import { UserDto } from 'src/app/services/models';
import { MP } from 'src/app/services/models/MP';

@Component({
  selector: 'app-detail-mp',
  templateUrl: './detail-mp.component.html',
  styleUrls: ['./detail-mp.component.scss']
})
export class DetailMPComponent implements OnInit {

 
  constructor(private activatedRoute:ActivatedRoute,private mpService:MPService,private productService:ProductService,private route:Router) { }
  user!:UserDto;
  mp!:MP;
  id_mp!:number;
  ngOnInit(): void {

  


     var id =  this.activatedRoute.snapshot.paramMap.get('id');
    
     console.log(id);
     if(id!=null){
      this.id_mp=Number.parseInt(id);
      this.mpService.findOneMpById(Number.parseInt(id)).subscribe({
        next: (res) => {
          this.mp=res;
           console.log(res)




  if(this.mp.id_user){
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




 confirmation(){
    
      this.route.navigate(["/confirmation-mp/"+this.id_mp])
   
 }


}
