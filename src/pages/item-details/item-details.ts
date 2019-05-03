import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import { ADDONS } from '../../data-store/addOnDataStore';
import { ListPage } from '../list/list';
import { CartPage } from '../cart-page/cart-page';
import { SMEARS } from '../../data-store/smears';
import { Bagel } from '../../models/bagel';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: Bagel;
  addons = ADDONS;
  smears = SMEARS;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = new Bagel();
    const item = navParams.get('item');
    this.selectedItem.name = item.name;
    this.selectedItem.price = item.price;
    this.selectedItem.description = item.description;
    this.selectedItem.imageLocation = item.imageLocation;
  }

  addToCart(){
    Cart.addToCart(this.selectedItem);
    this.presentLoading('Please wait...');
    // dialog popup?
    // this.navCtrl.setRoot(ListPage);

    this.selectedItem = undefined;
    this.navCtrl.setRoot(CartPage);
  }

  selectAddon(element){
    if (this.selectedItem.addOns == undefined){
      this.selectedItem.addOns = [];
    }
    if (element.checked == true) {
      this.selectedItem.addOns.push(element);
    } else {
      const index = this.selectedItem.addOns.indexOf(element, 0);
      if (index > -1) {
         this.selectedItem.addOns.pop();
      }
   }
   console.log(this.selectedItem.addOns);
  }

  selectSmear(smear){
    this.selectedItem.smear = smear;
    console.log(smear);
  }

  gotoBagels() {
    this.navCtrl.setRoot(ListPage);
  }

  presentLoading(text: string) {
    this.loadingCtrl.create({
      content: text,
      duration: 1000,
      dismissOnPageChange: true,
    }).present();
  }
}
