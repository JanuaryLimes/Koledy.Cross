import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Carol, CarolList } from '../../model/carol.model';
import { CarolItemPage } from '../carol-item/carol-item';
import * as carolsFromJson from '../../assets/teksty.json';
import accents from 'remove-accents';

@Component({
  selector: 'page-carol-list',
  templateUrl: 'carol-list.html'
})
export class CarolListPage {
  carolList: CarolList;
  constructor(public navCtrl: NavController) {
    this.carolList = new CarolList();
    this.carolList.carols = carolsFromJson['koledy']['koleda'];

    console.log(accents.remove('łóć'));
  }

  get items(): Carol[] {
    return this.carolList.carols
      .filter(carol => {
        if (!this.searchText) {
          return true;
        } else {
          let sn = accents.remove(this.searchText.toLowerCase());
          let cn = accents.remove(carol.nazwa.toLowerCase());
          return cn.includes(sn);
        }
      })
      .sort((a, b) => {
        let al = accents.remove(a.nazwa.toLowerCase());
        let bl = accents.remove(b.nazwa.toLowerCase());
        if (al < bl) {
          return -1;
        }
        if (al > bl) {
          return 1;
        }
        return 0;
      });
  }

  searchText: string;

  itemTapped(carol: Carol) {
    this.navCtrl.push(CarolItemPage, {
      carol: carol
    });
  }

  onInput(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  onCancel(e: any) {
    console.log('cancel');
  }
}
