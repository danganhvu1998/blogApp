import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public stoSave: Storage,
  	) {
  }

  hashCode(s){
  	return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.stoSave.set("cookies","hahahatinnguoivkl");
    this.stoSave.get("cookies").then(result => {
    	console.log(result, this.hashCode(result));
    });
  }

}
