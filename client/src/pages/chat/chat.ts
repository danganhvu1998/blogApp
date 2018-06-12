import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
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
    public http: Http,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    var data = JSON.stringify({ token : '502f13a6a4bd7bdd30b2d78dd0a05677c098233e' });
    console.log("Data:", data);
    this.postAjax('http://localhost:8000/api/chats/test', data, '\n\n\nFirst Testing');
    this.___postAjax('http://localhost:8000/api/chats/test', data, '\n\n\nSecond Testing');

  }

  ___postAjax(url, data, testing) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, data, options)
      .toPromise()
      .then((response) =>
      {  
        console.log(testing);
        console.log('API Response : ', response.text);
      })
      .catch((error) =>
      { 
        console.log(testing);
        console.error('API Error : ', error.status);
        console.log(url, data);
      });
    
  }


  userInform(result, title){
    console.log(title, "\nThis is resutl: ",result);
  }

  postAjax(url, data, title){
    console.log("Sending ...", data);
    let vm = this;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onreadystatechange = function() {
      //console.log("Current status:", xhr.readyState, xhr.status);
      if (xhr.readyState>3 && xhr.status==200) {
        vm.userInform(xhr.responseText, title);
      }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    return xhr;
  }

}