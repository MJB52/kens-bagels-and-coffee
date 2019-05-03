import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { BAGELS } from '../../data-store/bagels';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  bagels = BAGELS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  getBagels() {
    return this.bagels;
  }
}
