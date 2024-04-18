import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableAuthService {

  constructor() {
    if(localStorage.getItem("typeAccount")!=null){
      this.type_account=localStorage.getItem("typeAccount");
    }
   }

  public type_account!:string|null;
  
  getType():any { return this.type_account}
  setType(value:string) { this.type_account = value}

}
