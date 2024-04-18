import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services/authentication.service';
import { AuthenticationRequest } from '../../services/models/authentication-request';
import { JwtHelperService } from '@auth0/angular-jwt';
import { VariableAuthService } from 'src/app/variable-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authRequest: AuthenticationRequest = {};
  errorMessages: Array<string> = [];
  hide = true;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private variableAuth:VariableAuthService
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.errorMessages = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: async (data) => {
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.token);

        if (decodedToken.authorities[0].authority === 'ROLE_ADMIN') {
          await this.router.navigate(['admin/dashboard']);
        } else {
          console.log(decodedToken.authorities[0].authority);
          this.variableAuth.setType(decodedToken.authorities[0].authority);
          await this.router.navigate(['user/dashboard']);
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMessages.push(err.error.errorMessage);
      }
    });
  }

  async register() {
   await this.router.navigate(['register']);
  }


  logout() {
    // Effacer le token du localStorage
    localStorage.removeItem('token');
    // Rediriger l'utilisateur vers la page de connexion
    this.router.navigate(['login']);
  }

}
