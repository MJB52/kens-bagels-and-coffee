import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { CartPage } from '../../pages/cart/cart';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  @ViewChild(Nav) nav: Nav;

  rootPage = this;

  constructor(public menu: MenuController, public navCtrl: NavController) {

  }

  gotoCart() {
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.navCtrl.push(CartPage);
  }
}
