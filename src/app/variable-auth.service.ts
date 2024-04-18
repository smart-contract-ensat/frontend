import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableAuthService {

  constructor() { }

  public type_account:string="";

  getType():string { return this.type_account}
  setType(value:string) { this.type_account = value}

}
