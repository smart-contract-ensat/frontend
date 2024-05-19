import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableAuthService } from 'src/app/variable-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  typeAccount!:string|null;
  constructor(private router: Router,private variableAuthService:VariableAuthService ){}
  ngOnInit(): void {
    if(localStorage.getItem("typeAccount")!=null){
      this.typeAccount=localStorage.getItem("typeAccount");
    }
  }

  navigate(route: string[]) {
    this.router.navigate(route);
  }

  navigateToSignIn() {
    this.navigate(['/login']);
  }

  logout() {
    // Effacer le token du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('typeAccount');
    // Rediriger l'utilisateur vers la page de connexion
    this.router.navigate(['login']);
  }

  

}
