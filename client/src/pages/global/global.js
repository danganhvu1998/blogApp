var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the GlobalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlobalPage = /** @class */ (function () {
    function GlobalPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.blogJson = [1, 2, 3, 4, 5, 6];
    }
    GlobalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalPage');
        this.update();
    };
    GlobalPage.prototype.presentAlert = function (alertTitle, alertBody) {
        var alert = this.alertCtrl.create({
            title: alertTitle,
            subTitle: alertBody,
            buttons: ['OK']
        });
        alert.present();
    };
    GlobalPage.prototype.userLog = function (data) {
        console.log(data);
    };
    GlobalPage.prototype.blogPrint = function (data) {
        console.log(data);
        var blog;
        var result = JSON.parse(data);
        this.blogJson = result['blogs'];
        for (blog in this.blogJson) {
            console.log(this.blogJson[blog]);
        }
    };
    GlobalPage.prototype.userInform = function (data) {
        var result = JSON.parse(data);
        if (result['result'] == 1) { //data posted cfed by server
            console.log('Post ok');
            this.presentAlert('Post was posted', '');
        }
        else {
            console.log('Post error');
            this.presentAlert('Server Error', 'unknown error');
        }
    };
    GlobalPage.prototype.postAjax = function (url, data, requestType) {
        var vm = this;
        var xhr = new XMLHttpRequest();
        if (requestType == 'GET')
            url = url + data;
        xhr.open(requestType, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState > 3 && xhr.status == 200) {
                if (requestType == 'POST')
                    vm.userInform(xhr.responseText);
                else
                    vm.blogPrint(xhr.responseText);
            }
        };
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //xhr.setRequestHeader("Content-type", "application/json");
        if (requestType != 'GET')
            xhr.send(data);
        else
            xhr.send();
        return xhr;
    };
    GlobalPage.prototype.sendBlog = function (title, body) {
        var data = "title=" + title
            + "&body=" + body;
        this.postAjax('http://localhost:8000/api/blogs', data, 'POST');
    };
    GlobalPage.prototype.update = function () {
        this.postAjax("http://localhost:8000/api/blogs", '', 'GET');
    };
    GlobalPage.prototype.blog = function () {
        if (this.title.value.length == 0) {
            this.presentAlert('Title cannot be emply', '');
        }
        else if (this.body.value.length == 0) {
            this.presentAlert('Body cannot be emply', '');
        }
        else {
            this.sendBlog(this.title.value, this.body.value);
        }
        this.update();
    };
    __decorate([
        ViewChild('title'),
        __metadata("design:type", Object)
    ], GlobalPage.prototype, "title", void 0);
    __decorate([
        ViewChild('body'),
        __metadata("design:type", Object)
    ], GlobalPage.prototype, "body", void 0);
    GlobalPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-global',
            templateUrl: 'global.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], GlobalPage);
    return GlobalPage;
}());
export { GlobalPage };
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
//# sourceMappingURL=global.js.map