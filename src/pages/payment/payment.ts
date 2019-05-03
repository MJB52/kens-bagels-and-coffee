import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { CreditCardValidator } from 'ngx-credit-cards';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartPage } from '../cart-page/cart-page';
import { Cart } from '../../data-store/cart';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  isCard = true;
  formGroup: FormGroup;
  total: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _formBuilder: FormBuilder) {

    this.formGroup = this._formBuilder.group({
      email: ['', Validators.required],
      cardNumber: ['', [CreditCardValidator.validateCardNumber]],
      cardExpDate: ['', [CreditCardValidator.validateCardExpiry]],
      cardCvv: ['', [CreditCardValidator.validateCardCvc]],
      cardName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
    this.total = Cart.getPrice();
  }

  ionViewDidLoad() {
  }

  toggleCard() {
    this.isCard = !this.isCard;
  }

  gotoHome() {
    this.navCtrl.setRoot(ListPage);
  }
}
