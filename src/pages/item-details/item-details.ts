import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import { ADDONS } from '../../data-store/addOnDataStore';
import { CartPage } from '../cart-page/cart-page';
import { SMEARS } from '../../data-store/smears';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  addons = ADDONS;
  smears = SMEARS;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  addToCart(){
    Cart.addToCart(this.selectedItem);
    this.presentLoading('Please wait...');
    // dialog popup?
    // this.navCtrl.setRoot(ListPage);
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
         this.selectedItem.addOns.splice(index, 1);
      }
   }
   console.log(this.selectedItem.addOns);
  }

  selectSmear(smear){
    this.selectedItem.smear = smear;
    console.log(smear);
  }

  presentLoading(text: string) {
    this.loadingCtrl.create({
      content: text,
      duration: 1000,
      dismissOnPageChange: true,
    }).present()
  }
}
