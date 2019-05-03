import { Component } from '@angular/core';

import { NavController, NavParams, MenuController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { CartPage } from '../cart-page/cart-page';
import { BAGELS } from '../../data-store/bagels';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  bagels = BAGELS;
  logoPic = "../assets/imgs/KensCoffeeAndBagelsLogo.png";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  gotoCart() {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(CartPage);
}

  getBagels() {
    return this.bagels;
  }
}
