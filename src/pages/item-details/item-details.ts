import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Cart } from '../../data-store/cart';
import {ADDONS} from '../../data-store/addOnDataStore'

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  addons = ADDONS;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  addToCart(){
    Cart.addToCart(this.selectedItem);
    this.presentLoading('Please wait...');

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

  presentLoading(text: string) {
    this.loadingCtrl.create({
      content: text,
      duration: 1000,
      dismissOnPageChange: true,
    }).present()
  }
}
