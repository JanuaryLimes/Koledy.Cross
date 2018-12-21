import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Carol } from '../../model/carol.model';
import { CarolItemPage } from '../carol-item/carol-item';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-carol-list',
  templateUrl: 'carol-list.html'
})
export class CarolListPage {
  constructor(public navCtrl: NavController, private file: File) {
    this.file
      .readAsText(this.file.applicationDirectory + 'www/assets', 'teksty.json')
      .then(t => console.log(t))
      .catch(ex => console.log(ex));
  }

  get items(): Carol[] {
    return [
      this.c('lulajze', 'costam'),
      this.c('do szopy', 'hej pasterze'),
      this.c('hej', 'hej'),
      this.c('lulajze2', 'adfdfsa')
    ];
  }

  itemTapped(carol: Carol) {
    this.navCtrl.push(CarolItemPage, {
      carol: carol
    });
  }

  c(t: string, con: string): Carol {
    const carol = new Carol();
    carol.title = t;
    carol.text = con;
    return carol;
  }
}
