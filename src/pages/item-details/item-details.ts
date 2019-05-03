import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import { ListPage } from '../list/list';
import { CartPage } from '../cart-page/cart-page';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  addToCart(){
    Cart.addToCart(this.selectedItem);
    // dialog popup?
    // this.navCtrl.setRoot(ListPage);
    this.navCtrl.setRoot(CartPage);
  }
}
