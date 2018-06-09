import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  @ViewChild('userName') userName;
  @ViewChild('userPass') userPass;
  @ViewChild('password') password;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public globalVal: GlobalProvider,
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage', this.globalVal.email, this.globalVal.userID, this.globalVal.userName);
  }

  userInform(data, errorRaise){
    //console.log(data);
    //return 0;
    var dataJson = JSON.parse(data);
    console.log(dataJson);
    if(dataJson['result']>0) {
      this.globalVal.userID = dataJson['id'];
      this.globalVal.userName = dataJson['name'];
      this.globalVal.email = dataJson['email'];
      this.globalVal.presentAlert("Name and password changed", '')
    }
    else this.globalVal.presentAlert(errorRaise, '');
  }

  postAjax(url, data, errorRaise){
    console.log("Sending ...", data);
    let vm = this;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onreadystatechange = function() {
      console.log("Current status:", xhr.readyState, xhr.status);
      if (xhr.readyState>3 && xhr.status==200) {
        vm.userInform(xhr.responseText, errorRaise);
      }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    return xhr;
  }

  whatever(){
    console.log(this.userName.value, this.userPass.value, this.password.value);
    var data = "id="+this.globalVal.userID
      +"&password="+this.password.value
      +"&username="+this.globalVal.email
      +"&userName="+this.userName.value
      +"&userPass="+this.userPass.value;
    console.log(data);
    //api/users/changepass
    this.postAjax('http://localhost:8000/api/users/changepass', data, "Wrong Password");
  }
}
