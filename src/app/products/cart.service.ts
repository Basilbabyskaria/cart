import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartarray:any=[];
  cartlist= new BehaviorSubject([])
  constructor() { }
  //add to cart
addcart(product:any){
  this.cartarray.push(product)
  this.cartlist.next(this.cartarray);
  console.log(this.cartlist);
  
}
}
