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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  gotoCart() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.push(CartPage);
}

  getBagels() {
    return this.bagels;
  }
}
