import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the GlobalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global',
  templateUrl: 'global.html',
})
export class GlobalPage {
	@ViewChild('title') title;
	@ViewChild('body') body;
  globalBlogs : object;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

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

  userInform(data){
    var result = JSON.parse(data);
    //cannot run this.presentAlert
    if(result['result']==1){//data posted cfed by server
      console.log('Post ok');
      //this.presentAlert('Post was posted', '');
    } else {
      console.log('Post error');
      //this.presentAlert('Server Error', 'unknown error');
    }
  }

  postAjax(url, data, success, requestType) {
      var xhr = new XMLHttpRequest();
      if(requestType=='GET') url = url+data;
      xhr.open(requestType, url, true);
      xhr.onreadystatechange = function() {
          if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
      };
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //xhr.setRequestHeader("Content-type", "application/json");
      if(requestType!='GET') xhr.send(data);
      else xhr.send();
      return xhr;
  }

	sendBlog(title, body){
    var data = "title="+title
      +"&body="+body;
    this.postAjax('http://localhost:8000/api/blogs', data, this.userInform, 'POST' )
	}

  blogPrint(data){
    console.log(data);
    var blog;
    var result = JSON.parse(data);
    for (blog in result['blogs'] ){
      console.log(result['blogs'][blog]);
      //this.globalBlogs = result['blogs'][blog];
      //console.log(blog['title'], blog['body'], blog['user_id']);
    }
  }

  update(){
    this.postAjax("http://localhost:8000/api/blogs", '', this.blogPrint, 'GET')
  }

  blog(){
  	if(this.title.value.length == 0){
  		this.presentAlert('Title cannot be emply', '');
  	} else if(this.body.value.length == 0){
  		this.presentAlert('Body cannot be emply', '');
  	} else {
			this.sendBlog(this.title.value, this.body.value)
  	}
    this.update()
  }

}
/*
loadDoc(type) {
    console.log("loadDoc running!");
    var xhttp = new XMLHttpRequest();  
    console.log("POST METHOD hahahaha");  
    var data = "username="+this.username.value
      +"&password="+this.password.value
      +"&rememberMe="+this.rememberMe.value;
    console.log("Data:", data);
    xhttp.onreadystatechange = function() {
      console.log("loadDoc ... ", this.readyState, this.status)
      if (this.readyState == 4 && this.status == 200) {
         console.log("Taken value:\n\t", this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:8000/blogs/post_store", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
  }

 */