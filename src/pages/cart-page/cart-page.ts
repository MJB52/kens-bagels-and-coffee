import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import { CheckoutPage } from '../checkout/checkout';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart-page.html',
})
export class CartPage {

  cart: Cart;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  checkout() {
    this.navCtrl.push(CheckoutPage);
  }
}
