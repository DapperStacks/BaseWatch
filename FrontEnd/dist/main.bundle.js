webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `,
    })
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_component__ = __webpack_require__("../../../../../src/app/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_message_component__ = __webpack_require__("../../../../../src/app/new-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_component__ = __webpack_require__("../../../../../src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_component__ = __webpack_require__("../../../../../src/app/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_12__home_component__["a" /* HomeComponent */]
    },
    {
        path: 'messages/:name',
        component: __WEBPACK_IMPORTED_MODULE_6__messages_component__["a" /* MessagesComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_13__register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_15__login_component__["a" /* LoginComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_16__user_component__["a" /* UserComponent */]
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_6__messages_component__["a" /* MessagesComponent */]
    },
];
//Decorator.
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_message_component__["a" /* NewMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_14__auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:54202/auth';
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    get tokenHeader() {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
    }
    login(loginData) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
            this.authenticate(res);
        });
    }
    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }
    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }
    authenticate(res) {
        var authResponse = res.json();
        if (!authResponse.token) {
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/']);
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
], AuthService);



/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'home',
        template: `
    <div class="row column u-align-center">
    <mat-card class="welcome">
      <div class="b-title">
        <h1 class=".mat-display-4">
          Welcome to BaseWatch
        </h1>
        <h2 class=".mat-display-3">
          Your home for strategy, hero comparisons, and competitive tactics!
        </h2>
      </div>
      <div>
        <h3 class=".mat-display-2">
          Season 7 is here! Many things have changed since the last patch over the last few months! 
        </h3>
        <h4 class=".mat-display-2">
          We're seeing major changes since the last Blizzard update, heroes have been nerfed and boosted, please see the chart for specifics.
          As the Competitive season draws closer to the end, players around the world have dedicated time to gameplay to develop effective strategies depending on each team!
        </h4>
        <h5 class=".mat-display-2">
          Please give us your feedback for grandmaster level tactics!
        </h5>
      </div>
    </mat-card>
    <mat-card>
      <img mat-card-image src="https://www.hdwallpapers.in/walls/overwatch_4k-HD.jpg" alt="image caption">
    </mat-card>
  </div>
  <mat-card>
    <img mat-card-image class="image" src="https://static1.squarespace.com/static/56b3cac001dbae7de45090ec/t/5740ea47e707eb88946cb876/1463938013394/" alt="Overwatch Stats">
  </mat-card>
  <new-message></new-message>
  <messages></messages>
  
  `,
    })
], HomeComponent);



/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let LoginComponent = 
//Export it.
class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.loginData = {
            email: '',
            password: ''
        };
    }
    login() {
        this.auth.login(this.loginData);
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',
        template: ` 
        <mat-card class="card content">
            <mat-input-container>
                <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
            </mat-input-container>
            <mat-input-container>
                <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
            </mat-input-container>
            <button mat-raised-button color="warn" (click)="login()">Login</button>
        </mat-card>
    `
    })
    //Export it.
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
], LoginComponent);



/***/ }),

/***/ "../../../../../src/app/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Displays all the messages inside the message board. 



//Provide it as an angular component - Component Decorator, defined a template, starting message text.
let MessagesComponent = 
//Export it.
class MessagesComponent {
    constructor(webService, route) {
        this.webService = webService;
        this.route = route;
    }
    ngOnInit() {
        var name = this.route.snapshot.params['name'];
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    }
};
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'messages',
        template: `
    <mat-card class="card hero">
        <mat-card-title> Hero Board </mat-card-title>
        <mat-card class=" card content"> 
            <div *ngFor="let message of webService.messages | async">
                <img mat-card-avatar src="https://pbs.twimg.com/media/B2IupThIEAANjji.png" alt="Avatar image here">
                <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor:pointer">{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
            </div>
        </mat-card>
    </mat-card>
    `
    })
    //Export it.
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
], MessagesComponent);



/***/ }),

/***/ "../../../../../src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NavComponent = 
//Export it.
class NavComponent {
    constructor(auth) {
        this.auth = auth;
    }
};
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'nav',
        template: ` 
        <mat-toolbar color="warn">
            <button mat-button routerLink="/"> 
                <img class="baseWatchLogo" src="http://blizzpro.com/wp-content/uploads/sites/10/2017/11/OWL2-380x162.png" alt="BaseWatchLogo">
            </button>
            <button mat-button routerLink="/messages"> Saved Strategies </button>
            <span style="flex: 1 1 auto"></span>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login"> Login </button>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register"> Register </button>
            <button *ngIf="auth.isAuthenticated" mat-button routerLink="/user"> Welcome {{auth.name}} </button>
            <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()"> Logout </button>
        </mat-toolbar>
    `
    })
    //Export it.
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
], NavComponent);



/***/ }),

/***/ "../../../../../src/app/new-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Provide it as an angular component - Component Decorator, defined a template, starting message text.
let NewMessageComponent = 
//Export it.
class NewMessageComponent {
    constructor(webService, auth) {
        this.webService = webService;
        this.auth = auth;
        this.message = {
            owner: this.auth.name,
            text: ""
        };
        this.owner = "DapperStacks";
    }
    post() {
        this.webService.postMessage(this.message);
    }
};
NewMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'new-message',
        template: `
    <mat-card class="content newMessage">
        <mat-card-title> You must be a member to post a Message! </mat-card-title>
        <img mat-card-avatar src="https://img1.etsystatic.com/187/0/13105519/il_570xN.1258695533_9o6p.jpg" alt="Avatar image here">
        <mat-card-content>
            <mat-input-container>
                <textarea class="title" [(ngModel)]="message.text" matInput placeholder="Insert your Message"></textarea>
             </mat-input-container>
             <mat-card-actions>
                <button (click)="post()" mat-button color="warn">Send</button>
             </mat-card-actions>
        </mat-card-content>
    </mat-card>
    `
    })
    //Export it.
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
], NewMessageComponent);



/***/ }),

/***/ "../../../../../src/app/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card content\">\r\n    <form [formGroup] = \"form\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error':isValid('firstName')}\" matInput placeholder=\"First Name\" formControlName=\"firstName\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error':isValid('lastName')}\" matInput placeholder=\"Last Name\" formControlName=\"lastName\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" type=\"email\" [ngClass]=\"{'error':isValid('email')}\"matInput placeholder=\"Email\" formControlName=\"email\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" type=\"password\" [ngClass]=\"{'error':isValid('password')}\"matInput placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input style=\"width:350px\" type=\"password\" [ngClass]=\"{'error':isValid('confirmPassword')}\" matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n        </mat-input-container>\r\n        <span *ngIf=\"form.errors?.mismatchedFields\"> Passwords don't match! </span>\r\n        <br>\r\n        <button mat-raised-button color=\"warn\">Register</button>\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let RegisterComponent = class RegisterComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.form = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, emailValid()]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        }, { validator: matchingFields('password', 'confirmPassword') });
    }
    onSubmit() {
        console.log(this.form.error);
        this.auth.register(this.form.value);
    }
    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
};
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        moduleId: module.i,
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/register.component.html"),
        styles: [`
    .error{
        background-color: #fff0f0
    }
  
  
  
  `
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
], RegisterComponent);

function matchingFields(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value)
            return { mismatchedFields: true };
    };
}
function emailValid() {
    return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}


/***/ }),

/***/ "../../../../../src/app/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UserComponent = 
//Export it.
class UserComponent {
    constructor(webService) {
        this.webService = webService;
        this.model = {
            firstName: "",
            lastName: ""
        };
    }
    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }
    saveUser(userData) {
        this.webService.saveUser(userData).subscribe();
    }
};
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user',
        template: ` 
        <mat-card class="card">
            <mat-input-container>
                <input matInput [(ngModel)] = "model.firstName" placeholder="First Name">
            </mat-input-container>
            <mat-input-container>
                <input matInput [(ngModel)] = "model.lastName" placeholder="Last Name">
            </mat-input-container>
            <button mat-raised-button color="accent" (click)="saveUser(model)">Save Changes</button>
        </mat-card>
    `
    })
    //Export it.
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]])
], UserComponent);



/***/ }),

/***/ "../../../../../src/app/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx_js__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let WebService = class WebService {
    constructor(http, sb, auth) {
        this.http = http;
        this.sb = sb;
        this.auth = auth;
        this.BASE_URL = 'http://localhost:54202/api';
        this.messageStore = [];
        this.messageSubjet = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx_js__["Subject"]();
        this.messages = this.messageSubjet.asObservable();
        this.getMessages('');
    }
    getMessages(user) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubjet.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages");
        });
    }
    postMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var response = yield this.http.post(this.BASE_URL + '/messages', message).toPromise();
                this.messageStore.push(response.json());
                this.messageSubjet.next(this.messageStore);
            }
            catch (error) {
                this.handleError("Unable to post message");
            }
        });
    }
    getUser() {
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());
    }
    saveUser(userData) {
        return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader).map(res => res.json());
    }
    handleError(error) {
        console.log(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
};
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]])
], WebService);



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map