import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { GlobalProvider } from "../../providers/global/global";
import { ShowPage } from "../show/show";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public globalVal: GlobalProvider,
    ) {
  }

  @ViewChild('title') title;
  @ViewChild('body') body;
  blogJson =[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalPage');
    this.update();

  }

  presentAlert(alertTitle, alertBody) {
  	let alert = this.alertCtrl.create({
    	title: alertTitle,
    	subTitle: alertBody,
    	buttons: ['OK']
  	});
  	alert.present();
	}

  userLog(data){
    console.log(data);
  }
  
  blogPrint(data){
    //console.log(data);
    var blog;
    var result = JSON.parse(data);
    this.blogJson = result['blogs'];
    for (blog in this.blogJson ){
      //console.log(this.blogJson[blog]);
    }
  }

  userInform(data){
    var result = JSON.parse(data);
    if(result['result']==1){//data posted cfed by server
      console.log('Post ok');
      this.presentAlert('Post was posted', '');
    } else {
      console.log('Post error');
      this.presentAlert('Server Error', 'unknown error');
    }
  }

  postAjax(url, data, requestType) {
    let vm = this;
    var xhr = new XMLHttpRequest();
    if(requestType=='GET') url = url+data;
    xhr.open(requestType, url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) {
          if(requestType=='POST') vm.userInform(xhr.responseText);
          else vm.blogPrint(xhr.responseText);
        }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    if(requestType!='GET') xhr.send(data);
    else xhr.send();
    return xhr;
  }

	sendBlog(title, body, id){
    var data = "title="+title
      +"&body="+body
      +"&user_id="+id.toString();
    this.postAjax('http://localhost:8000/api/blogs', data, 'POST' )
	}

  update(){
    this.postAjax("http://localhost:8000/api/blogs/", this.globalVal.userID.toString(), 'GET')
  }

  blog(){
  	if(this.title.value.length == 0){
  		this.presentAlert('Title cannot be emply', '');
  	} else if(this.body.value.length == 0){
  		this.presentAlert('Body cannot be emply', '');
  	} else {
			this.sendBlog(this.title.value, this.body.value, this.globalVal.userID)
  	}
    this.update()
  }

  blogUserInfo(guestId, guestName){
    console.log(guestId, guestName);
    if(guestId == this.globalVal.userID){
      this.navCtrl.setRoot( HomePage );
    } else {
      this.globalVal.guestID = guestId;
      this.globalVal.guestName = guestName;
      this.navCtrl.push( ShowPage );
    }
  }
}
