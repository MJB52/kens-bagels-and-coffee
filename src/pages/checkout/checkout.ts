import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart-page/cart-page';
import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  gotoCart() {
    this.navCtrl.setRoot(CartPage);
  }

  gotoPay() {
    this.navCtrl.setRoot(PaymentPage);
  }
}
