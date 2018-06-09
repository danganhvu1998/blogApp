webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_global__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, http, globalVal, stoSave) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.globalVal = globalVal;
        this.stoSave = stoSave;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.tokenCheck();
    };
    LoginPage.prototype.tokenCheck = function () {
        var _this = this;
        console.log("Token checking ...");
        this.stoSave.get("token").then(function (result) {
            console.log("Token: ", result);
            var data = "token=" + result;
            //this.presentAlert("HAHA", result);
            _this.postAjax('http://localhost:8000/api/users/checktoken', data, "NONE");
        });
        //this.navCtrl.setRoot(GlobalPage);
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
    LoginPage.prototype.hashCode = function (s) {
        return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    };
    LoginPage.prototype.userInform = function (data, errorRaise) {
        //console.log(data);
        //return 0;
        var dataJson = JSON.parse(data);
        console.log(dataJson);
        if (dataJson['result'] > 0) {
            this.globalVal.userID = dataJson['id'];
            this.globalVal.userName = dataJson['name'];
            this.globalVal.email = dataJson['email'];
            this.stoSave.set('token', dataJson['token']);
            console.log(this.globalVal.email);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__global_global__["a" /* GlobalPage */]);
        }
        else if (errorRaise != "NONE") {
            this.presentAlert(errorRaise, '');
        }
    };
    LoginPage.prototype.___postAjax = function (url, data, success) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
    LoginPage.prototype.postAjax = function (url, data, errorRaise) {
        console.log("Sending ...", data);
        var vm = this;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function () {
            console.log("Current status:", xhr.readyState, xhr.status);
            if (xhr.readyState > 3 && xhr.status == 200) {
                vm.userInform(xhr.responseText, errorRaise);
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
            this.postAjax('http://localhost:8000/api/users/login', data, "Wrong email or password");
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
            this.postAjax('http://localhost:8000/api/users/register', data, "Email existed");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('loginUsername'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "loginUsername", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('loginPassword'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "loginPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('regisUsername'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "regisUsername", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('regisPassword'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "regisPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('regisRePassword'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "regisRePassword", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Alway Free</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<!--Login-->\n	<h3 style="color:Chocolate;">Login</h3>\n	<ion-list>\n	  <ion-item>\n	    <ion-label floating>Email</ion-label>\n	    <ion-input #loginUsername value="danganhvu@gmail.com" type="email"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Password</ion-label>\n	    <ion-input #loginPassword value="davdav" type="password"></ion-input>\n	  </ion-item>\n	</ion-list>\n	<button ion-button (click)=login() color="secondary" round full>Login</button><br>\n\n\n	<!--Register-->\n	<h3 style="color:DarkGoldenRod;">Register</h3>\n	<ion-list>\n	  <ion-item>\n	    <ion-label floating>Email</ion-label>\n	    <ion-input #regisUsername type="email"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Password</ion-label>\n	    <ion-input #regisPassword type="password"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Retype Password</ion-label>\n	    <ion-input #regisRePassword type="password"></ion-input>\n	  </ion-item>\n	</ion-list>\n	<button ion-button (click)=regis() color="danger" round full>Register For Free</button><br>\n\n</ion-content>\n'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

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

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, globalVal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVal = globalVal;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage', this.globalVal.email, this.globalVal.userID, this.globalVal.userName);
    };
    UserPage.prototype.userInform = function (data, errorRaise) {
        //console.log(data);
        //return 0;
        var dataJson = JSON.parse(data);
        console.log(dataJson);
        if (dataJson['result'] > 0) {
            this.globalVal.userID = dataJson['id'];
            this.globalVal.userName = dataJson['name'];
            this.globalVal.email = dataJson['email'];
            this.globalVal.presentAlert("Name and password changed", '');
        }
        else
            this.globalVal.presentAlert(errorRaise, '');
    };
    UserPage.prototype.postAjax = function (url, data, errorRaise) {
        console.log("Sending ...", data);
        var vm = this;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function () {
            console.log("Current status:", xhr.readyState, xhr.status);
            if (xhr.readyState > 3 && xhr.status == 200) {
                vm.userInform(xhr.responseText, errorRaise);
            }
        };
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
        return xhr;
    };
    UserPage.prototype.whatever = function () {
        console.log(this.userName.value, this.userPass.value, this.password.value);
        var userPass = this.userPass.value;
        if (this.userPass.value == '') {
            userPass = this.password.value;
        }
        var data = "id=" + this.globalVal.userID
            + "&password=" + this.password.value
            + "&username=" + this.globalVal.email
            + "&userName=" + this.userName.value
            + "&userPass=" + userPass;
        console.log(data);
        //api/users/changepass
        this.postAjax('http://localhost:8000/api/users/changepass', data, "Wrong Password");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('userName'),
        __metadata("design:type", Object)
    ], UserPage.prototype, "userName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('userPass'),
        __metadata("design:type", Object)
    ], UserPage.prototype, "userPass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], UserPage.prototype, "password", void 0);
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User Setting - {{globalVal.userName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n\n		<ion-item>\n	    <ion-label>Email : {{globalVal.email}}</ion-label>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>New Username : </ion-label>\n	    <ion-input #userName type="text" value={{globalVal.userName}}></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>New Password : </ion-label>\n	    <ion-input #userPass type="password"></ion-input>\n	  </ion-item>\n\n		<ion-item>\n	    <ion-label>Current Password : </ion-label>\n	    <ion-input #password type="password"></ion-input>\n	  </ion-item>	  \n\n	</ion-list>\n	<button ion-button (click)=whatever() color="light" round full>Save Change</button>\n</ion-content>\n'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]) === "function" && _c || Object])
    ], UserPage);
    return UserPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		280,
		14
	],
	"../pages/global/global.module": [
		281,
		13
	],
	"../pages/home/home.module": [
		282,
		12
	],
	"../pages/login/login.module": [
		283,
		11
	],
	"../pages/logout/logout.module": [
		290,
		8
	],
	"../pages/show/show.module": [
		284,
		10
	],
	"../pages/user/user.module": [
		285,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_user__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_global_global__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_show_show__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_global_global__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_global_global__["a" /* GlobalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_show_show__["a" /* ShowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/global/global.module#GlobalPageModule', name: 'GlobalPage', segment: 'global', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show/show.module#ShowPageModule', name: 'ShowPage', segment: 'show', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_global_global__["a" /* GlobalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_show_show__["a" /* ShowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_user_user__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_global_global__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'My Blog', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */] },
            { title: 'Global Blog', component: __WEBPACK_IMPORTED_MODULE_6__pages_global_global__["a" /* GlobalPage */] },
            { title: 'Chat', component: __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */] },
            { title: 'User Setting', component: __WEBPACK_IMPORTED_MODULE_3__pages_user_user__["a" /* UserPage */] },
            { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__["a" /* LogoutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>BlogApp</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, stoSave, navParams) {
        this.navCtrl = navCtrl;
        this.stoSave = stoSave;
        this.navParams = navParams;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogoutPage');
        this.stoSave.set('token', 'ahihihihi');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object])
    ], LogoutPage);
    return LogoutPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.userID = 0;
        this.userName = "Con Ma Xau";
        this.email = "";
        this.guestID = 0;
        this.guestName = "Con Ma Xau";
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider.prototype.presentAlert = function (alertTitle, alertBody) {
        var alert = this.alertCtrl.create({
            title: alertTitle,
            subTitle: alertBody,
            buttons: ['OK']
        });
        alert.present();
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_show__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GlobalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlobalPage = /** @class */ (function () {
    //userID = 5;
    //userName = "Dang Anh Vu";
    function GlobalPage(navCtrl, navParams, alertCtrl, globalVal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.globalVal = globalVal;
        this.blogJson = [];
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
        //console.log(data);
        var blog;
        var result = JSON.parse(data);
        this.blogJson = result['blogs'];
        for (blog in this.blogJson) {
            //console.log(this.blogJson[blog]);
        }
    };
    GlobalPage.prototype.userInform = function (data) {
        var result = JSON.parse(data);
        if (result['result'] == 1) {
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
    GlobalPage.prototype.sendBlog = function (title, body, id) {
        var data = "title=" + title
            + "&body=" + body
            + "&user_id=" + id.toString();
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
            this.sendBlog(this.title.value, this.body.value, this.globalVal.userID);
        }
        this.update();
    };
    GlobalPage.prototype.blogUserInfo = function (guestId, guestName) {
        console.log(guestId, guestName);
        if (guestId == this.globalVal.userID) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.globalVal.guestID = guestId;
            this.globalVal.guestName = guestName;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__show_show__["a" /* ShowPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], GlobalPage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('body'),
        __metadata("design:type", Object)
    ], GlobalPage.prototype, "body", void 0);
    GlobalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-global',template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/global/global.html"*/'<!--\n  Generated template for the GlobalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Welcome to BLOGAPP - {{globalVal.userName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n	  <ion-item>\n	    <ion-label floating>Blog Title</ion-label>\n	    <ion-input #title type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Blog Content</ion-label>\n	    <ion-input #body type="text"></ion-input>\n	  </ion-item>\n	</ion-list>\n	<button ion-button (click)=blog() color="light" round full>POST</button><br>\n\n	<div *ngFor=\'let blog of blogJson\'>\n    <ion-card>\n      <ion-card-header>\n        <ion-item item-right>\n          <strong item-left>{{blog.title}}</strong>\n          <button ion-button item-right clear small (click)=blogUserInfo(blog.user_id,blog.created_by) color="danger">\n            <ion-icon name="logo-reddit"></ion-icon>\n            <div>{{blog[\'created_by\']}} - {{blog[\'user_id\']}}</div>\n          </button>\n        </ion-item>\n        <ion-item><p>{{blog[\'created_at\']}}</p></ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item><p>{{blog[\'body\']}}</p></ion-item>\n      </ion-card-content>\n    </ion-card>\n	</div>\n\n<!--\n@foreach($posts as $post)\n    <div class="well">\n        <div class="row">\n            <div class="col-md-4 col-sm-4">\n                <img style="width:100%" src="/storage/cover_images/{{$post->cover_image}}">\n            </div>\n            <div class="col-md-8 col-sm-8">\n                <h3><a href="/posts/{{$post->id}}">{{$post->title}}</a></h3>\n                <small>Written on {{$post->created_at}} by {{$post->user->name}}</small>\n            </div>\n        </div>\n    </div>\n@endforeach\n\n\n<ion-row class="home" *ngFor="let blog of blogJson">\n 		<div   *ngFor="let homeobj of home.teachers ">\n   			<img src="{{ homeobj?.img }}" alt="">\n  		</div>\n	</ion-row>\n\n  <ion-card>\n  <ion-card-header>\n    Header\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n\n\n\n\n-->'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/global/global.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], GlobalPage);
    return GlobalPage;
}());

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

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, alertCtrl, globalVal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.globalVal = globalVal;
        this.blogJson = [];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalPage');
        this.update();
    };
    HomePage.prototype.presentAlert = function (alertTitle, alertBody) {
        var alert = this.alertCtrl.create({
            title: alertTitle,
            subTitle: alertBody,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.userLog = function (data) {
        console.log(data);
    };
    HomePage.prototype.blogPrint = function (data) {
        //console.log(data);
        var blog;
        var result = JSON.parse(data);
        this.blogJson = result['blogs'];
        for (blog in this.blogJson) {
            //console.log(this.blogJson[blog]);
        }
    };
    HomePage.prototype.userInform = function (data) {
        var result = JSON.parse(data);
        if (result['result'] == 1) {
            console.log('Post ok');
            this.presentAlert('Post was posted', '');
        }
        else {
            console.log('Post error');
            this.presentAlert('Server Error', 'unknown error');
        }
    };
    HomePage.prototype.postAjax = function (url, data, requestType) {
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
    HomePage.prototype.sendBlog = function (title, body, id) {
        var data = "title=" + title
            + "&body=" + body
            + "&user_id=" + id.toString();
        this.postAjax('http://localhost:8000/api/blogs', data, 'POST');
    };
    HomePage.prototype.update = function () {
        this.postAjax("http://localhost:8000/api/blogs/", this.globalVal.userID.toString(), 'GET');
    };
    HomePage.prototype.blog = function () {
        if (this.title.value.length == 0) {
            this.presentAlert('Title cannot be emply', '');
        }
        else if (this.body.value.length == 0) {
            this.presentAlert('Body cannot be emply', '');
        }
        else {
            this.sendBlog(this.title.value, this.body.value, this.globalVal.userID);
        }
        this.update();
    };
    HomePage.prototype.blogUserInfo = function (guestId, guestName) {
        console.log(guestId, guestName);
        if (guestId == this.globalVal.userID) {
            this.navCtrl.setRoot(HomePage_1);
        }
        else {
            this.globalVal.guestID = guestId;
            this.globalVal.guestName = guestName;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('body'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "body", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User Blog</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n	  <ion-item>\n	    <ion-label floating>Blog Title</ion-label>\n	    <ion-input #title type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Blog Content</ion-label>\n	    <ion-input #body type="text"></ion-input>\n	  </ion-item>\n	</ion-list>\n	<button ion-button (click)=blog() color="light" round full>POST</button><br>\n\n	<div *ngFor=\'let blog of blogJson\'>\n    <ion-card>\n      <ion-card-header>\n        <ion-item item-right>\n          <strong item-left>{{blog.title}}</strong>\n          <button ion-button item-right clear small (click)=blogUserInfo(blog.user_id,blog.created_by) color="danger">\n            <ion-icon name="logo-reddit"></ion-icon>\n            <div>{{blog[\'created_by\']}} - {{blog[\'user_id\']}}</div>\n          </button>\n        </ion-item>\n        <ion-item><p>{{blog[\'created_at\']}}</p></ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item><p>{{blog[\'body\']}}</p></ion-item>\n      </ion-card-content>\n    </ion-card>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowPage = /** @class */ (function () {
    function ShowPage(navCtrl, navParams, globalVal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVal = globalVal;
        this.blogJson = [];
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        this.update();
    };
    ShowPage.prototype.blogPrint = function (data) {
        //console.log(data);
        var blog;
        var result = JSON.parse(data);
        this.blogJson = result['blogs'];
        for (blog in this.blogJson) {
            //console.log(this.blogJson[blog]);
        }
    };
    ShowPage.prototype.postAjax = function (url, data, requestType) {
        var vm = this;
        var xhr = new XMLHttpRequest();
        if (requestType == 'GET')
            url = url + data;
        xhr.open(requestType, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState > 3 && xhr.status == 200) {
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
    ShowPage.prototype.sendBlog = function (title, body, id) {
        var data = "title=" + title
            + "&body=" + body
            + "&user_id=" + id.toString();
        this.postAjax('http://localhost:8000/api/blogs', data, 'POST');
    };
    ShowPage.prototype.update = function () {
        this.postAjax("http://localhost:8000/api/blogs/", this.globalVal.guestID.toString(), 'GET');
    };
    ShowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show',template:/*ion-inline-start:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/show/show.html"*/'<!--\n  Generated template for the ShowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{globalVal.guestName}}\'s Blog Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngFor=\'let blog of blogJson\'>\n    <ion-card>\n      <ion-card-header>\n        <ion-item item-right>\n          <strong item-left>{{blog.title}}</strong>\n        </ion-item>\n        <ion-item><p>{{blog[\'created_at\']}}</p></ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item><p>{{blog[\'body\']}}</p></ion-item>\n      </ion-card-content>\n    </ion-card>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/kyatod/Dropbox/githubResource/blogApp/client/src/pages/show/show.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ShowPage);
    return ShowPage;
}());

//# sourceMappingURL=show.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map