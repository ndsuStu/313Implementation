import { Injectable } from '@angular/core';
import { Customer } from './CustomerAcct/customer';

//To Be Done: 1) add accounts to the customers array. 
//2) create an addCust method


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  //stores whether an employee has logged in.
  isEmployee: boolean = false;

  //========================= Customer Storage and Login ================================

  custName: string = "";

  //this array holds all customers in sorted order by last name (Note that is alphabetical to begin with)
  customers: Customer[] = [];

  //This method adds a new customer to the customers array in its appropriate poition when sorted alphabetically



}
