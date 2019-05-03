import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import { CheckoutPage } from '../checkout/checkout';
import { Bagel } from '../../models/bagel';
import { ListPage } from '../list/list';
import { ItemDetailsPage } from '../item-details/item-details';
import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart-page.html',
})
export class CartPage {

  cart: Cart;
  totalPrice: number;
  pricePlusTax: number;
  tipPrice: number = 0;
  tipForm: any;
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
      this.bagels = items;
    });
  }

  checkout() {
    Cart.setPrice(this.getTotal());
    this.navCtrl.setRoot(PaymentPage);
  }

  gotoBagels() {
    this.navCtrl.setRoot(ListPage);
  }

  itemDetails(item) {
  }

  clearCart() {
    Cart.clearCart();
    this.navCtrl.setRoot(CartPage);
  }

  removeItem(item) {
    Cart.removeItem(item);
    this.getItems();
  }

  getPrice(item) {
    let price = item.price;
    if (item.smear) {
      price += item.smear.price;
    }
    if (item.addOns) {
      for (const addon of item.addOns) {
        price += addon.price;
      }
    }
    const total = Number(price).toFixed(2);
    return total;
  }

  getSum() {
    this.totalPrice = 0;
    for (const item of this.bagels) {
      this.totalPrice += item.price;
      if (item.smear) {
        this.totalPrice += item.smear.price;
      }
      if (item.addOns) {
        for (const addon of item.addOns) {
          this.totalPrice += addon.price;
        }
      }
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
    this.pricePlusTax = this.totalPrice * 1.065;
    this.pricePlusTax += this.tipPrice;
    const total = Number(this.pricePlusTax).toFixed(2);
    return total;
  }

  isCartEmpty() {
    return (this.totalPrice == 0);
  }

  updateTip(percentage: number) {
    this.tipPrice = percentage * this.totalPrice;
  }

  getTip() {
    return Number(this.tipPrice).toFixed(2);
  }

  changeTip() {
    const temp = Number(this.tipForm);
    this.tipPrice = temp;
  }

  getAddOns(item : Bagel): string{
    let formattedString = '+ ';
    if(item.addOns){
      item.addOns.forEach(item => {
        formattedString += item.name + ' + ';
      })
    }
    return formattedString;
  }
}
