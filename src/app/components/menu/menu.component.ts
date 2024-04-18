import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isAdmin = false;
  role = 'user';
  userFullname = '';

  constructor(
    private helperService: HelperService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.isAdmin) {
      this.role = 'admin';
    }
    this.userFullname = this.helperService.userFullname;
  }


  logout() {
    // Effacer le token du localStorage
    localStorage.removeItem('token');
    // Rediriger l'utilisateur vers la page de connexion
    this.router.navigate(['login']);
  }
  

}
