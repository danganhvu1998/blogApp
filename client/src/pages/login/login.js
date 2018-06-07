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
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { GlobalPage } from '../global/global';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentAlert = function (alertTitle, alertBody) {
        var alert = this.alertCtrl.create({
            title: alertTitle,
            subTitle: alertBody,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LoginPage.prototype.userInform = function (data) {
        var dataJson = JSON.parse(data);
        if (dataJson['result'] == 1)
            this.navCtrl.setRoot(GlobalPage);
        else
            this.presentAlert('Wrong email or password', '');
    };
    LoginPage.prototype.___postAjax = function (url, data, success) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, options)
                .toPromise()
                .then(function (response) {
                console.log('API Response : ', response);
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.log(url, data);
            });
        });
    };
    LoginPage.prototype.postAjax = function (url, data, success) {
        console.log("Sending ...", data);
        var vm = this;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function () {
            console.log("Current status:", xhr.readyState, xhr.status);
            if (xhr.readyState > 3 && xhr.status == 200) {
                vm.userInform(xhr.responseText);
            }
        };
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(data);
        return xhr;
    };
    LoginPage.prototype.login = function () {
        var username = this.loginUsername.value;
        var password = this.loginPassword.value;
        console.log(username, password, this.validateEmail(username));
        if (!this.validateEmail(username)) {
            this.presentAlert('Email invalid', '');
        }
        else {
            console.log("Sending username, password to server ...");
            var data = "username=" + username + "&password=" + password;
            //var data = { username : username, password : password };
            this.postAjax('http://localhost:8000/api/users/login', data, this.userInform);
        }
        //Sent username and password to server to login
    };
    LoginPage.prototype.regis = function () {
        var username = this.regisUsername.value;
        var password = this.regisPassword.value;
        if (password != this.regisRePassword.value) {
            this.presentAlert('Password is different', '');
            return 0;
        }
        console.log(username, password);
        if (!this.validateEmail(username)) {
            this.presentAlert('Email invalid', '');
        }
        else {
            console.log("Sending username, password to server ...");
            var data = "username=" + username + "&password=" + password;
            //var data = JSON.stringify{ username : username, password : password };      
            this.postAjax('http://localhost:8000/api/users/register', data, this.userInform);
        }
    };
    __decorate([
        ViewChild('loginUsername'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "loginUsername", void 0);
    __decorate([
        ViewChild('loginPassword'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "loginPassword", void 0);
    __decorate([
        ViewChild('regisUsername'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "regisUsername", void 0);
    __decorate([
        ViewChild('regisPassword'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "regisPassword", void 0);
    __decorate([
        ViewChild('regisRePassword'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "regisRePassword", void 0);
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            Http])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
/*
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



return new Promise((resolve, reject) => {
this.http.post('url', data, options)
.toPromise()
.then((response) =>
{
console.log('API Response : ', response.json());
resolve(response.json());
})
.catch((error) =>
{
console.error('API Error : ', error.status);
console.error('API Error : ', JSON.stringify(error));
reject(error.json());
});
});
*/ 
//# sourceMappingURL=login.js.map