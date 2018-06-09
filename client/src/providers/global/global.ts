import { Injectable } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { GlobalPage } from '../../pages/global/global';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  constructor(
    public alertCtrl: AlertController,
    ) {
    console.log('Hello GlobalProvider Provider');
  }

  public userID = 0;
  public userName = "Con Ma Xau";
  public email = "";
  public guestID = 0;
  public guestName = "Con Ma Xau";

  public presentAlert(alertTitle, alertBody) {
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertBody,
      buttons: ['OK']
    });
    alert.present();
  }

}
