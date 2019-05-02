import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { Bagels } from '../../data-store/bagels';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string}>;
  bagels: Bagels;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({title: 'Bagel ' + i});
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  getBagels() {
    return this.bagels.getBagels();
  }
}
