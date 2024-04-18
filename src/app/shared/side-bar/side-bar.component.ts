import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { VariableAuthService } from 'src/app/variable-auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  constructor(private elementRef: ElementRef,private router:Router, private variableAuthService:VariableAuthService) { }
  typeAccount!:string|null;
  ngOnInit(): void {
    localStorage.setItem("typeAccount",this.variableAuthService.getType())
    if(localStorage.getItem("typeAccount")!=null){
      this.typeAccount=localStorage.getItem("typeAccount");
    }
    
 
  }

  ngAfterViewInit(): void {
    const arrowElements = this.elementRef.nativeElement.querySelectorAll('.arrow');
    
    for (let i = 0; i < arrowElements.length; i++) {
      arrowElements[i].addEventListener('click', (e:any) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
      });
    }
  }

  logout() {
    // Effacer le token du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('typeAccount');
    // Rediriger l'utilisateur vers la page de connexion
    this.router.navigate(['login']);
  }


  
}
