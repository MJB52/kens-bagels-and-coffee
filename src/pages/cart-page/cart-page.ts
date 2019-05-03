import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import { CheckoutPage } from '../checkout/checkout';
import { Bagel } from '../../models/bagel';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart-page.html',
})
export class CartPage {

  cart: Cart;

  bagels: Bagel[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    Cart.getBagels().subscribe(items => {
      this.bagels = items;
    });
  }
  
  getItems(){
    Cart.getBagels().subscribe(items => {
      console.log(items);
      this.bagels = items;
    });
  }

  checkout() {
    this.navCtrl.push(CheckoutPage);
  }
}
