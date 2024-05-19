/* tslint:disable */

import { Product } from "./product";

/* eslint-disable */
export interface UserDto {
  email: string;
  firstname: string;
  id?: number;
  lastname: string;
  password: string;
  iban?: string;
  active?: boolean;
  role?:number;
  products?:Product[]
}
