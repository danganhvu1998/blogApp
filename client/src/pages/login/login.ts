import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { GlobalPage } from '../global/global'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('loginUsername') loginUsername;
  @ViewChild('loginPassword') loginPassword;
  @ViewChild('regisUsername') regisUsername;
  @ViewChild('regisPassword') regisPassword;
  @ViewChild('regisRePassword') regisRePassword;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentAlert(alertTitle, alertBody) {
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertBody,
      buttons: ['OK']
    });
    alert.present();
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  userInform(data){
    var dataJson = JSON.parse(data);
    if(dataJson['result']==1) this.navCtrl.setRoot(GlobalPage);
    else this.presentAlert('Wrong email or password', '');
  }

  postAjax(url, data, success) {
    console.log("Sending ...", data);
    let vm = this;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onreadystatechange = function() {
      console.log("Current status:", xhr.readyState, xhr.status);
      if (xhr.readyState>3 && xhr.status==200) {
        vm.userInform(xhr.responseText);
      }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    return xhr;
  }



  login(){
    var username = this.loginUsername.value;
    var password = this.loginPassword.value;
    console.log(username, password, this.validateEmail(username));
    if( !this.validateEmail(username) ){
      this.presentAlert('Email invalid', '');
    } else {
      console.log("Sending username, password to server ...");
      var data = "username="+username+"&password="+password;
      this.postAjax('http://localhost:8000/api/users/login', data, this.userInform);
    }
    //Sent username and password to server to login
  }

  regis(){
    var username = this.regisUsername.value;
    var password = this.regisPassword.value;
    if(password!= this.regisRePassword.value){
      this.presentAlert('Password is different', '')
      return 0;
    }
    console.log(username, password);
    if( !this.validateEmail(username) ){
      this.presentAlert('Email invalid', '');
    } else {
      console.log("Sending username, password to server ...");
      var data = "username="+username+"&password="+password;
      var postResult = this.postAjax('http://localhost:8000/api/users/register', data, this.userInform);
    }
  }

}
