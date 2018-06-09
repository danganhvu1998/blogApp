import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public globalVal: GlobalProvider,
  	) {
  }

  blogJson =[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    this.update()
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

  postAjax(url, data, requestType) {
    let vm = this;
    var xhr = new XMLHttpRequest();
    if(requestType=='GET') url = url+data;
    xhr.open(requestType, url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) {
          vm.blogPrint(xhr.responseText);
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
    this.postAjax("http://localhost:8000/api/blogs/", this.globalVal.guestID.toString(), 'GET')
  }

}
