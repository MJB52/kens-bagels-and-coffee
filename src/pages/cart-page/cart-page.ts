import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import { CheckoutPage } from '../checkout/checkout';
import { Bagel } from '../../models/bagel';
import { ListPage } from '../list/list';
import { ItemDetailsPage } from '../item-details/item-details';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart-page.html',
})
export class CartPage {

  cart: Cart;
  totalPrice: number;
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
    this.navCtrl.setRoot(CheckoutPage);
  }

  gotoBagels() {
    this.navCtrl.setRoot(ListPage);
  }

  itemDetails(item) {
    // Dialog?
    this.navCtrl.setRoot(ItemDetailsPage, {item: item});
  }

  getSum() {
    // Cart.getTotal().subscribe(price => {
    //   this.totalPrice = price;
    // })
    // return this.totalPrice;
    this.totalPrice = 0;
    for (const item of this.bagels) {
      this.totalPrice += item.price;
    }
    const total = Number(this.totalPrice).toFixed(2);
    return total;
  }

  getTax() {
    const price = this.totalPrice * .065;
    const tax = Number(price).toFixed(2);
    return tax;
  }

  getTotal() {
    const price = this.totalPrice * 1.065;
    const total = Number(price).toFixed(2);
    return total;
  }
}
