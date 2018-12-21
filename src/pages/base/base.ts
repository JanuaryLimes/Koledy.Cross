import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarolListPage } from '../carol-list/carol-list';

@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})
export class BasePage {
  constructor(public navCtrl: NavController) {}

  openCarols() {
    this.navCtrl.setRoot(CarolListPage);
  }
}
