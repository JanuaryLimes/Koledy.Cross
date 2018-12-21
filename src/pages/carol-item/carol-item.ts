import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carol } from '../../model/carol.model';

@Component({
  selector: 'page-carol-item',
  templateUrl: 'carol-item.html'
})
export class CarolItemPage {
  carol: Carol;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carol = navParams.get('carol');
  }
}
