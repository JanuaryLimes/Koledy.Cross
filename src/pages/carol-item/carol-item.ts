import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carol } from '../../model/carol.model';

@Component({
  selector: 'page-carol-item',
  templateUrl: 'carol-item.html'
})
export class CarolItemPage {
  carol: Carol;
  static GlobalFontSize = 1.3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carol = navParams.get('carol');
  }

  get fontSize(): number {
    return CarolItemPage.GlobalFontSize;
  }

  get minusDisabled() {
    return CarolItemPage.GlobalFontSize <= 0.8;
  }

  get plusDisabled() {
    return CarolItemPage.GlobalFontSize >= 4;
  }

  minus() {
    CarolItemPage.GlobalFontSize -= 0.1;
  }

  plus() {
    CarolItemPage.GlobalFontSize += 0.1;
  }
}
