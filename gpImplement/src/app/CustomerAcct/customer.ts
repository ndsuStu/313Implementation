import { order } from './order';

export interface Customer{
    isActive: boolean;
    firstName: string;
    lastName: string;
    orders: order[]; //Each index in this array will store a short description of a customer's transaction
    cardNumber: number; //Stores the customer's current credit card on file
    unpaidBalance: number; //Stores the amount the customer owes for services recieved.

}