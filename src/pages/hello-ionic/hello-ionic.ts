import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { CartPage } from '../../pages/cart/cart';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  @ViewChild(Nav) nav: Nav;

  rootPage = this;

  constructor(public menu: MenuController) {

  }

  gotoCart() {
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.nav.setRoot(CartPage);
  }
}
