webpackJsonp([1,5],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () {
            if (AppSettings.devMode) {
                return 'http://localhost:8080/api/';
            }
            else {
                return 'https://blockexplorer.gamecredits.com/api/';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "BLOCK_SOCKET_SERVER_URL", {
        get: function () {
            return 'https://blockexplorer.gamecredits.com/block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "TX_SOCKET_SERVER_URL", {
        get: function () {
            return 'https://blockexplorer.gamecredits.com/tx';
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());

AppSettings.devMode = false;
//# sourceMappingURL=appSettings.js.map

/***/ }),

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FooterService = (function () {
    function FooterService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    FooterService.prototype.getLatestTransactions = function () {
        var _this = this;
        var url = this.baseApiUrl + 'transactions/latest?limit=5';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    FooterService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FooterService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return FooterService;
}());
FooterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FooterService);

var _a;
//# sourceMappingURL=footer.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-header',
        template: __webpack_require__(262)
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networkPage_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkPageComponent = (function () {
    function NetworkPageComponent(networkPageService) {
        this.networkPageService = networkPageService;
        this.lat = 31.678418;
        this.lng = 7.809007;
        this.prva = 53.678418;
        this.druga = 89.809007;
        this.zoom = 1;
        this.markers = [];
        this.peersToShow = [];
        this.showButton = false;
    }
    NetworkPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkPageService.getNetworkInfo().subscribe(function (resp) {
            _this.networkInfo = resp;
        });
        this.networkPageService.getClientInfo().subscribe(function (resp) {
            _this.clientInfo = resp;
            _this.peersToShow = _this.clientInfo.peerInfo.slice(0, 5);
            _this.showButton = true;
        });
    };
    NetworkPageComponent.prototype.showAll = function () {
        this.peersToShow = this.clientInfo.peerInfo;
    };
    return NetworkPageComponent;
}());
NetworkPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-network',
        template: __webpack_require__(263)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__networkPage_service__["a" /* NetworkPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__networkPage_service__["a" /* NetworkPageService */]) === "function" && _a || Object])
], NetworkPageComponent);

var _a;
//# sourceMappingURL=networkPage.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NetworkPageService = (function () {
    function NetworkPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    NetworkPageService.prototype.getNetworkInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    NetworkPageService.prototype.getClientInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'client/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    NetworkPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    NetworkPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return NetworkPageService;
}());
NetworkPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], NetworkPageService);

var _a;
//# sourceMappingURL=networkPage.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionsPageComponent = (function () {
    function TransactionsPageComponent(transactionsPageService, route) {
        this.transactionsPageService = transactionsPageService;
        this.route = route;
    }
    TransactionsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.transactionsPageService.getTransaction('' + params['txid']); })
            .subscribe(function (resp) {
            _this.transaction = resp;
            _this.transactionsPageService.getBlockConfirmations(_this.transaction.blockhash)
                .subscribe(function (resp) {
                _this.confirmations = resp.confirmations;
            });
        });
    };
    return TransactionsPageComponent;
}());
TransactionsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-transactions',
        template: __webpack_require__(264)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__["a" /* TransactionsPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__["a" /* TransactionsPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], TransactionsPageComponent);

var _a, _b;
//# sourceMappingURL=transactionsPage.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionsPageService = (function () {
    function TransactionsPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    TransactionsPageService.prototype.getTransaction = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'transactions/' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    TransactionsPageService.prototype.getBlockConfirmations = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/' + hash + '/confirmations';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    TransactionsPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TransactionsPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return TransactionsPageService;
}());
TransactionsPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TransactionsPageService);

var _a;
//# sourceMappingURL=transactionsPage.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(167);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_homePage_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_blocks_blocksPage_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_allTransactions_allTransactionsPage_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_network_networkPage_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_block_blockPage_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactionsPage_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_address_addressPage_component__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'home',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_homePage_component__["a" /* HomePageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'blocks',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: ':hash', component: __WEBPACK_IMPORTED_MODULE_8__pages_block_blockPage_component__["a" /* BlockPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_blocks_blocksPage_component__["a" /* BlocksPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'allTransactions',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_allTransactions_allTransactionsPage_component__["a" /* AllTransactionsPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'network',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__pages_network_networkPage_component__["a" /* NetworkPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'transactions',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: ':txid', component: __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactionsPage_component__["a" /* TransactionsPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'addresses',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: ':hash', component: __WEBPACK_IMPORTED_MODULE_10__pages_address_addressPage_component__["a" /* AddressPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing-module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(255),
        styles: [__webpack_require__(242)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customDirectives_angular2_google_chart_directive__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_layout_header_header_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_layout_footer_footer_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_homePage_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blocks_blocksPage_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_allTransactions_allTransactionsPage_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_network_networkPage_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_block_blockPage_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactionsPage_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_address_addressPage_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_layout_footer_footer_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_homePage_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_blocks_blocksPage_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_allTransactions_allTransactionsPage_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_block_blockPage_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactionsPage_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_address_addressPage_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_network_networkPage_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_pages_socket_socket_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_layout_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_layout_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_homePage_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_blocks_blocksPage_component__["a" /* BlocksPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_allTransactions_allTransactionsPage_component__["a" /* AllTransactionsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_network_networkPage_component__["a" /* NetworkPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_block_blockPage_component__["a" /* BlockPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactionsPage_component__["a" /* TransactionsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_address_addressPage_component__["a" /* AddressPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__customDirectives_angular2_google_chart_directive__["a" /* GoogleChart */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDVGMQhtueV-z7v4kjQ80kYd26jrmqV-o4'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__pages_layout_footer_footer_service__["a" /* FooterService */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_homePage_service__["a" /* HomePageService */],
            __WEBPACK_IMPORTED_MODULE_20__pages_blocks_blocksPage_service__["a" /* BlocksPageService */],
            __WEBPACK_IMPORTED_MODULE_21__pages_allTransactions_allTransactionsPage_service__["a" /* AllTransactionsPageService */],
            __WEBPACK_IMPORTED_MODULE_22__pages_block_blockPage_service__["a" /* BlockPageService */],
            __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactionsPage_service__["a" /* TransactionsPageService */],
            __WEBPACK_IMPORTED_MODULE_24__pages_address_addressPage_service__["a" /* AddressPageService */],
            __WEBPACK_IMPORTED_MODULE_25__pages_network_networkPage_service__["a" /* NetworkPageService */],
            __WEBPACK_IMPORTED_MODULE_26_app_pages_socket_socket_service__["a" /* BlockSocketService */],
            __WEBPACK_IMPORTED_MODULE_26_app_pages_socket_socket_service__["b" /* TxSocketService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleChart = (function () {
    function GoogleChart(element) {
        this.element = element;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._element = this.element.nativeElement;
    }
    GoogleChart.prototype.ngOnChanges = function () {
        var _this = this;
        if (!googleLoaded) {
            googleLoaded = true;
            google.charts.load('current', { 'packages': ['corechart', 'gauge']['orgchart'] });
        }
        setTimeout(function () { return _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element, _this.ready); }, 1000);
    };
    GoogleChart.prototype.drawGraph = function (chartOptions, chartType, chartData, ele, ready) {
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {}
            });
            google.visualization.events.addListener(wrapper, 'error', function (googleError) {
                google.visualization.errors.removeError(googleError.id);
            });
            wrapper.draw(ele);
            ready.emit(); // customized this shit because divic wanter the dummy graph to be "blured" before the real one had loaded, and i added an event so i could know when to swap
        }
    };
    return GoogleChart;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartType'),
    __metadata("design:type", String)
], GoogleChart.prototype, "chartType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], GoogleChart.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
    __metadata("design:type", Object)
], GoogleChart.prototype, "chartData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('ready'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GoogleChart.prototype, "ready", void 0);
GoogleChart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[GoogleChart]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], GoogleChart);

var _a, _b;
//# sourceMappingURL=angular2-google-chart.directive.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_appSettings__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSocketService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TxSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockSocketService = (function () {
    function BlockSocketService() {
        this.blockSocketServerUrl = __WEBPACK_IMPORTED_MODULE_3_app_appSettings__["a" /* AppSettings */].BLOCK_SOCKET_SERVER_URL;
        this.initSocket();
    }
    BlockSocketService.prototype.initConnection = function () {
        this.socket.emit('block_connected');
    };
    BlockSocketService.prototype.initSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.blockSocketServerUrl);
    };
    BlockSocketService.prototype.getBlockConnection = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('block_response', function (data) {
                observer.next(data.block_data);
                console.log(data.block_data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    BlockSocketService.prototype.getBlock = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('background_block_sender', function (data) {
                observer.next(data.latest_block_data);
                console.log(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return BlockSocketService;
}());
BlockSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BlockSocketService);

var TxSocketService = (function () {
    function TxSocketService() {
        this.txSocketServerUrl = __WEBPACK_IMPORTED_MODULE_3_app_appSettings__["a" /* AppSettings */].TX_SOCKET_SERVER_URL;
        this.initSocket();
    }
    TxSocketService.prototype.initConnection = function () {
        this.socket.emit('tx_connected');
    };
    TxSocketService.prototype.initSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.txSocketServerUrl);
    };
    TxSocketService.prototype.getTxConnection = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('tx_response', function (data) {
                observer.next(data.tx_data);
                console.log(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    TxSocketService.prototype.getTx = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('background_tx_sender', function (data) {
                observer.next(data.latest_tx_data);
                console.log(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return TxSocketService;
}());
TxSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TxSocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../assets/css/exploder.css\">\r\n\r\n<router-outlet name=\"header\"></router-outlet>\r\n\r\n<router-outlet> </router-outlet>\r\n\r\n<router-outlet name=\"footer\"></router-outlet>\r\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid page-banner block-header\">\r\n    \t<div class=\"container\">\r\n    \t\t<div class=\"row\">\r\n    \t\t\t<div class=\"col-xs-12\">\r\n    \t\t\t\t<h1 class=\"block-title\">\r\n    \t\t\t\t\tAddress <small>View information about a GameCredits address</small>\r\n    \t\t\t\t</h1>\r\n    \t\t\t\t<p>\r\n    \t\t\t\t\t<i class=\"fa fa-at\"></i>\r\n    \t\t\t\t\tAddress: {{address}}\r\n    \t\t\t\t</p>\r\n    \t\t\t</div>\r\n    \t\t\t<div class=\"col-md-6\">\r\n    \t\t\t\t<div class=\"table-responsive\">\r\n    \t\t\t\t\t<table class=\"table\">\r\n    \t\t\t\t\t\t<tbody>\r\n    \t\t\t\t\t\t\t<tr>\r\n    \t\t\t\t\t\t\t\t<th>Summary</th>\r\n    \t\t\t\t\t\t\t\t<th></th>\r\n    \t\t\t\t\t\t\t</tr>\r\n    \t\t\t\t\t\t\t<tr>\r\n    \t\t\t\t\t\t\t\t<td>Number Of Transactions</td>\r\n    \t\t\t\t\t\t\t\t<td>{{totalTransactionsNumber}}</td>\r\n    \t\t\t\t\t\t\t</tr>\r\n    \t\t\t\t\t\t</table>\r\n    \t\t\t\t\t</div>\r\n    \t\t\t\t</div>\r\n    \t\t\t\t<div class=\"col-md-6\">\r\n    \t\t\t\t\t<div class=\"table-responsive\">\r\n    \t\t\t\t\t\t<table class=\"table\">\r\n    \t\t\t\t\t\t\t<tr>\r\n    \t\t\t\t\t\t\t\t<td>Total volume:</td>\r\n    \t\t\t\t\t\t\t\t<td>{{volume | number:'1.5-5'}} GAME</td>\r\n    \t\t\t\t\t\t\t</tr>\r\n    \t\t\t\t\t\t\t<tr>\r\n    \t\t\t\t\t\t\t\t<td>Estimated balance</td>\r\n                                    <td>{{currentValue | number:'1.5-5'}} GAME</td>\r\n    \t\t\t\t\t\t\t</tr>\r\n    \t\t\t\t\t\t</table>\r\n    \t\t\t\t\t</div>\r\n    \t\t\t\t</div>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t</div>\r\n\r\n    \t<div class=\"container address-transactions\">\r\n    \t\t<div class=\"row\">\r\n    \t\t\t<div class=\"col-xs-12 block-transactions\">\r\n    \t\t\t\t<h3 class=\"address-transactions-title\">{{selectedTrancationsTagName}} {{transactionsTagNumber}} <button class=\"btn btn-primary pull-right\" (click)=\"setMenu('All Transactions')\">All transactions</button>\r\n    \t\t\t\t\t<button class=\"pull-right btn btn-primary\" (click)=\"setMenu('Unspent Transactions')\">Unspent transactions </button></h3>\r\n\r\n    \t\t\t\t\t<div  *ngIf=\"selectedTrancationsTagName == 'All Transactions' && allTransactions\">\r\n    \t\t\t\t\t\t<div class=\"panel panel-default\" *ngFor=\"let trans of allTransactions\">\r\n    \t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n    \t\t\t\t\t\t\t\t<a href=\"/transactions/345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\">\r\n    \t\t\t\t\t\t\t\t\t345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\r\n    \t\t\t\t\t\t\t\t</a>\r\n    \t\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-calendar\"> 2017-05-11T14:43:06+02:00</i></span>\r\n    \t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t<div class=\"panel-body\">\r\n    \t\t\t\t\t\t\t\t<div class=\"row\">\r\n    \t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n    \t\t\t\t\t\t\t\t\t\t<p><b>Inputs</b></p>\r\n    \t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\r\n    \t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let input of trans?.vin\" >\r\n    \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"input.prev_txid\"> \r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t{{input.prev_txid}}\r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t</a> \r\n    \t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\r\n    \t\t\t\t\t\t\t\t\t\t\t</li> \r\n\r\n    \t\t\t\t\t\t\t\t\t\t</ul>\r\n    \t\t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n    \t\t\t\t\t\t\t\t\t\t<p><b>Outputs</b></p>\r\n    \t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\r\n    \t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\" let output of trans?.vout \">\r\n\r\n    \t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let adress of output?.addresses\">\r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t[\r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{'/addresses/'+ adress}}\" >\r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t{{adress}}\r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n    \t\t\t\t\t\t\t\t\t\t\t\t\t]\r\n    \t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t\t\t\t\t\tAmount: {{output.value | number:'1.5-5'}} GAME\r\n    \t\t\t\t\t\t\t\t\t\t\t\t<Br> <br>\r\n    \t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n    \t\t\t\t\t\t\t\t\t\t\t</ul>\r\n    \t\t\t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t\t<div class=\"panel-footer text-right\">\r\n    \t\t\t\t\t\t\t\t\t<b>Total:</b> 50 GAME\r\n    \t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t</div>\r\n\r\n                                <button class=\"btn btn-primary col-md-12 load-more-button\" *ngIf=\"totalTransactionsNumber > allTransactions.length\" (click)=\"loadMoreTransactions()\"> Load More Transactions </button>\r\n    \t\t\t\t\t\t</div>        \r\n\r\n    \t\t\t\t\t\t<div class=\"panel panel-default\" *ngIf=\"selectedTrancationsTagName == 'Unspent Transactions'\" >\r\n    \t\t\t\t\t\t<div class=\"panel panel-default\" *ngFor=\"let trans of unspent \">\r\n                                <div class=\"panel-heading\">\r\n                                    <a href=\"/transactions/345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\">\r\n                                        345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\r\n                                    </a>\r\n                                    <span class=\"pull-right\"><i class=\"fa fa-calendar\"> 2017-05-11T14:43:06+02:00</i></span>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <p><b>Inputs</b></p>\r\n                                            <ul class=\"list-unstyled\">\r\n\r\n                                                <li *ngFor=\"let input of trans?.vin\" >\r\n                                                    <div *ngIf=\"input.prev_txid\"> \r\n                                                        <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\r\n                                                            {{input.prev_txid}}\r\n                                                        </a> \r\n                                                    </div>\r\n                                                    <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\r\n                                                </li> \r\n\r\n                                            </ul>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <p><b>Outputs</b></p>\r\n                                            <ul class=\"list-unstyled\">\r\n\r\n                                                    <div *ngFor=\"let adress of trans?.vout?.addresses\">\r\n                                                        [\r\n                                                        <a routerLink=\"{{'/addresses/'+ adress}}\" >\r\n                                                            {{adress}}\r\n                                                        </a>\r\n                                                        ]\r\n                                                    </div>\r\n                                                    Amount: {{trans?.vout?.value | number:'1.5-5'}} GAME\r\n                                                    <Br> <br>\r\n\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"panel-footer text-right\">\r\n                                        <b>Total:</b> 50 GAME\r\n                                    </div>\r\n                                </div>\r\n    \t\t\t\t\t\t</div>  \r\n\r\n    \t\t\t\t\t</div>\r\n    \t\t\t\t</div>\r\n    \t\t\t</div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<h1>All transactions</h1>\r\n\t<h2>{{ block_test }}</h2>\r\n    <div class=\"search-results\"\r\n\t    infiniteScroll\r\n\t    [infiniteScrollDistance]=\"1\"\r\n\t    [infiniteScrollThrottle]=\"300\"\r\n\t    (scrolled)=\"onScroll()\">\r\n\t\t<table class=\"table latest-blocks-table\">\r\n\t\t    <thead>\r\n\t\t    <tr>\r\n\t\t      <th>Transaction id</th>\r\n\t\t\t\t\t<th>Block hash</th>\r\n\t\t\t\t\t<th>Age</th>\r\n\t\t      <th>Total</th>\r\n\t\t    </tr>\r\n\t\t    </thead>\r\n\r\n\t\t    <tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let transaction of txs.slice().reverse()\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"{{'/transactions/' + transaction.txid}}\">\r\n\t\t\t\t\t\t\t\t {{transaction.txid.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t ..{{transaction.txid.substring(54,64)}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + transaction.blockhash}}\">\r\n\t\t\t\t\t\t\t\t{{transaction.blockhash.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t..{{transaction.blockhash.substring(54,64)}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{calulateMinutesFromNow(transaction?.blocktime)}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{transaction.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr *ngFor=\"let transaction of txArray\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"{{'/transactions/' + transaction.txid}}\">\r\n\t\t\t\t\t\t\t\t {{transaction.txid.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t ..{{transaction.txid.substring(54,64)}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + transaction.blockhash}}\">\r\n\t\t\t\t\t\t\t\t{{transaction.blockhash.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t..{{transaction.blockhash.substring(54,64)}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{calulateMinutesFromNow(transaction?.blocktime)}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{transaction.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t    </tbody>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div class=\"block-details\"> \r\n  <div class=\"container-fluid page-banner block-header\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <h1 class=\"block-title\">\r\n            Block #{{block?.height}} <small>{{block?.hash}}</small>\r\n          </h1>\r\n          <p>\r\n            <i class=\"fa fa-tree\"></i>\r\n            Merkle root: {{block?.merkleroot}}\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <tbody>\r\n                <tr>\r\n                  <th>Summary</th>\r\n                  <th></th>\r\n                </tr>\r\n                <tr>\r\n                  <td>Number Of Transactions</td>\r\n                  <td>{{block?.tx?.length}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Total sent</td>\r\n                  <td>{{block?.total | number:'1.5-5'}} GAME</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Difficulty</td>\r\n                  <td>{{block?.difficulty}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Version</td>\r\n                  <td>{{block?.version}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <tr>\r\n                <td>Confirmations</td>\r\n                <td>{{confirmations?.confirmations}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Bits</td>\r\n                <td>{{block?.bits}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Size</td>\r\n                <td>{{block?.size}} kB</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Timestamp</td>\r\n                <td>{{ (block?.time * 1000 ) | date:'medium'}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Nonce</td>\r\n                <td>{{block?.nonce}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container-fluid boxes-banner\">\r\n    <div class=\"container\">\r\n      <h4 class=\"chain-links-label\"><i class=\"fa fa-chain\"></i> Chain links</h4>\r\n      <div class=\"row boxes\">\r\n        <div class=\"col-md-1 hidden-sm hidden-xs\"></div>\r\n        <div class=\"col-md-2\">\r\n          <p>\r\n            Previous\r\n          </p>\r\n          <p>\r\n            <i class=\"fa fa-cube fa-5x\"></i> \r\n          </p>\r\n          <p class=\"block-link\">\r\n            <a routerLink=\"{{ '/blocks/' + block?.previousblockhash}}\">{{block?.previousblockhash}}</a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\r\n          <div class=\"line\"></div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <p class=\"box-label\">\r\n            This block\r\n          </p>\r\n          <p>\r\n            <i class=\"fa fa-cube fa-5x\"></i> \r\n          </p>\r\n          <p class=\"block-link\">\r\n            <a routerLink=\"{{ '/blocks/' + block?.hash}}\">{{block?.hash}}</a>\r\n          </p>\r\n        </div>\r\n        <div *ngIf=\"block?.nextblockhash\">\r\n          <div class=\"col-md-2 hidden-xs hidden-sm\">\r\n            <div class=\"line\"></div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <p>\r\n              Next\r\n            </p>\r\n            <p>\r\n              <i class=\"fa fa-cube fa-5x\"></i> \r\n            </p>\r\n            <p class=\"block-link\">\r\n              <a routerLink=\"{{ '/blocks/' + block?.nextblockhash}}\">{{block?.nextblockhash}}</a>\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-1 hidden-sm hidden-xs\"></div>\r\n        </div>\r\n      </div>   \r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container block-transactions\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 block-transactions\">\r\n        <h3 class=\"block-transactions-title\">Block Transactions ({{transactions?.length}})</h3>\r\n\r\n\r\n        <div class=\"panel panel-default\" *ngFor=\"let trans of transactions\">\r\n          <div class=\"panel-heading custom-panel-heading\">\r\n            <b> TXID: </b>\r\n            <a routerLink=\"{{'/transactions/' + trans.txid}}\">\r\n             {{trans.txid}}\r\n           </a>\r\n           <span class=\"pull-right\"><i class=\"fa fa-calendar\"> {{ (trans.blocktime * 1000 ) | date:'medium'}}</i></span>\r\n         </div>\r\n         <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <p><b>Inputs</b></p>\r\n              <ul class=\"list-unstyled\">\r\n\r\n                <li *ngFor=\"let input of trans.vin\" >\r\n                  <div *ngIf=\"input.prev_txid\"> \r\n                    <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\r\n                      {{input.prev_txid}}\r\n                    </a> \r\n                  </div>\r\n                  <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\r\n                </li> \r\n\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <p><b>Outputs</b></p>\r\n              <ul class=\"list-unstyled\">\r\n\r\n                <li *ngFor=\" let output of trans.vout \">\r\n                  <div *ngFor=\"let adress of output.addresses\">\r\n                    {{output.value | number:'1.5-5'}} GAME ->\r\n                    <a routerLink=\"{{'/addresses/'+ adress}}\" >\r\n                      {{adress}}\r\n                    </a> <span *ngIf=\"output.spent\" class=\"badge badge-status\" style=\"background-color: #EB5757\">Spent</span> <span  *ngIf=\"!output.spent\" class=\"badge badge-status\" style=\"background-color: #F47F4B\">Unspent</span>\r\n                  </div>\r\n                </li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer custom-panel-footing text-right\">\r\n        <hr class=\"custom-panel-line\">\r\n          <b>Total:</b> {{trans?.total | number:'1.5-5'}} GAME\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<h1>All blocks </h1>\r\n\t<h2>{{ block_test }}</h2>\r\n    <div class=\"search-results\"\r\n\t    infiniteScroll\r\n\t    [infiniteScrollDistance]=\"1\"\r\n\t    [infiniteScrollThrottle]=\"300\"\r\n\t    (scrolled)=\"onScroll()\">\r\n\t\t<table class=\"table latest-blocks-table\">\r\n\t\t    <thead>\r\n\t\t    <tr>\r\n\t\t      <th>Height</th>\r\n\t\t      <th>Age</th>\r\n\t\t      <th>Transactions</th>\r\n\t\t      <th>Total Sent</th>\r\n\t\t      <th>Size (kB)</th>\r\n\t\t    </tr>\r\n\t\t    </thead>\r\n\r\n\t\t    <tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let block of blocks.slice().reverse()\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{calulateMinutesFromNow(block?.time)}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{block?.tx?.length}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{block?.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t{{block?.size}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t        <tr *ngFor=\"let block of blockArray\">\r\n\t\t          <td>\r\n\t\t            <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n\t\t          </td>\r\n\t\t          <td>\r\n\t\t            {{calulateMinutesFromNow(block?.time)}}\r\n\t\t          </td>\r\n\t\t          <td>\r\n\t\t            {{block?.tx?.length}}\r\n\t\t          </td>\r\n\t\t          <td>\r\n\t\t            {{block?.total | number:'1.5-5'}} GAME\r\n\t\t          </td>\r\n\t\t          <td>\r\n\t\t            {{block?.size}}\r\n\t\t          </td>\r\n\t\t        </tr>\r\n\t\t    </tbody>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"container-fluid page-banner\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-9\">\r\n                    <img *ngIf=\"showPlaceholder\" src=\"../../assets/images/placeholder.png\" alt=\"\" style=\"filter: blur(5px);\">\r\n                    <div id=\"line_chart\" [chartData]=\"line_ChartData\" [chartOptions]= \"line_ChartOptions\" (ready)=\"hidePlaceholder()\" chartType=\"LineChart\" GoogleChart></div>\r\n                </div>\r\n                <div class=\"col-md-3 network-info\">\r\n                    <div class=\"page-header home-title\">\r\n                      <h3>GameCredits</h3>\r\n                    </div>\r\n                    <div>\r\n                    <span class=\"usd-price-big\">${{price | number:'1.5-5'}}</span> <a class=\"link-underline\" href=\"https://coinmarketcap.com/currencies/gamecredits/\"> source</a>\r\n                    </div>\r\n                    <table class=\"home-table\">\r\n                      <tr>\r\n                          <td>\r\n                            Blockchain height:\r\n                          </td>\r\n                          <td>\r\n                            <a class=\"link-underline\" routerLink=\"{{ '/blocks/' + latestBlocks[0]?.hash}}\">{{latestBlocks[0]?.height}}</a>\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>\r\n                            Coin supply:\r\n                          </td>\r\n                          <td>\r\n                             {{networkInfo?.coinSupply}}\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>\r\n                            Blockchain size:\r\n                          </td>\r\n                          <td>\r\n                             {{networkInfo?.blockchainSize}}GB\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>\r\n                            Hash rate:\r\n                          </td>\r\n                          <td>\r\n                             {{networkInfo?.hashrate / 1000000000 | number:'1.1-1'}} GH/s\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>\r\n                            Number of transactions: &nbsp;\r\n                          </td>\r\n                          <td>\r\n                              {{networkInfo?.numTransactions}}\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>\r\n                            Sync status:\r\n                          </td>\r\n                          <td>\r\n                            {{clientInfo?.syncProgress}} %\r\n                          </td>\r\n                      </tr>\r\n                    </table>\r\n                    <p>\r\n                        <a href=\"{{bootstrapLink}}\" class=\"btn btn-primary download-button\" role=\"button\"> <i class=\"fa fa-download\" aria-hidden=\"true\"> Download bootstrap.zip </i></a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"search-div\">\r\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n            <input #search type=\"text\" class=\"search\" placeholder=\"Search by block hash, transaction ID or address\" (keyup.enter)=\"onSearch(search.value)\">\r\n        </div>\r\n\r\n        <h1>Latest blocks</h1>\r\n        <table class=\"table latest-blocks-table\">\r\n            <thead>\r\n            <tr>\r\n              <th>Height</th>\r\n              <th>Age</th>\r\n              <th>Transactions</th>\r\n              <th>Total Sent</th>\r\n              <th>Size (kB)</th>\r\n            </tr>\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"latestBlocks\" >\r\n              <tr *ngFor=\"let block of blocks.slice().reverse()\">\r\n                <td>\r\n                  <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n                </td>\r\n                <td>\r\n                  {{calulateMinutesFromNow(block?.time)}}\r\n                </td>\r\n                <td>\r\n                  {{block?.tx?.length}}\r\n                </td>\r\n                <td>\r\n                  {{block?.total | number:'1.5-5'}} GAME\r\n                </td>\r\n                <td>\r\n                  {{block?.size}}\r\n                </td>\r\n              </tr>\r\n                <tr *ngFor=\"let block of latestBlocks\">\r\n                  <td>\r\n                    <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n                  </td>\r\n                  <td>\r\n                    {{calulateMinutesFromNow(block?.time)}}\r\n                  </td>\r\n                  <td>\r\n                    {{block?.tx?.length}}\r\n                  </td>\r\n                  <td>\r\n                    {{block?.total | number:'1.5-5'}} GAME\r\n                  </td>\r\n                  <td>\r\n                    {{block?.size}}\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n          </table>\r\n          <div class=\"row text-center\">\r\n             <hr>\r\n             <div class=\"cointainer-blocks\">\r\n                <a class=\"btn btn-primary all-blocks-button\" routerLink=\"/blocks\"> <i class=\"fa fa-th\" aria-hidden=\"true\"> </i> Show all blocks</a>\r\n             </div>\r\n          </div>\r\n    </div>\r\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-wrap\">\r\n\t\t\t<div class=\"logo\">\r\n\t\t\t<img src=\"../../../assets/images/logo.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6 game-text\">\r\n\t\t\t\t<h2>New to GameCredits?</h2>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tGameCredits is creating a new payment gateway for the gaming industry.\r\n\t\t\t\t\tThere are a lot of challenges and limitations with current payment solutions and platforms in the gaming industry.\r\n\t\t\t\t\tWe will provide gaming companies a very specific solution to make payments seamless, easy and secure.\r\n\t\t\t\t\tWe will offer the gaming industry ways to pay less and make more.\r\n\t\t\t\t\tOur in game payment gateway is built for the gaming industry by the gaming industry. <a class=\"link-underline\"href=\"https://gamecredits.com\">Read more</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<a href=\"https://www.facebook.com/gamecredits/\"><i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i></a>\r\n\t\t\t\t<a href=\"https://twitter.com/game_credits\"><i class=\"fa fa-twitter-square fa-2x\" aria-hidden=\"true\"></i></a>\r\n\t\t\t\t<a href=\"https://www.linkedin.com/company/gamecredits\"><i class=\"fa fa-linkedin-square fa-2x\" aria-hidden=\"true\"></i></a>\r\n\t\t\t\t<a href=\"https://www.youtube.com/channel/UCzkC8rkM38sxpuPcnyr1lXg\"><i class=\"fa fa-youtube-square fa-2x\" aria-hidden=\"true\"></i></a>\r\n\t\t\t\t<a href=\"https://gamecredits.com/slack.html\"><i class=\"fa fa-slack fa-2x\" aria-hidden=\"true\"></i></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6 latest-transactions\">\r\n\t\t\t\t<h2>Latest (mined) transactions</h2>\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table latest-transactions-table\">\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let transaction of txs\">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<a href=\"{{'/transactions/' + transaction.txid}}\"> {{transaction.txid.substring(0,29)}}..</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t{{transaction.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let transaction of latestTransactions\">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<a href=\"{{'/transactions/' + transaction.txid}}\"> {{transaction.txid.substring(0,29)}}..</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t{{transaction.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n\t<div class=\"container\">\r\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\r\n\t\t<div class=\"navbar-header\">\r\n\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t\t<div class=\"padding-top-5\">\r\n\r\n\t\t\t\t\t <a class=\"header-logo\" href=\"#\">  <img src=\"../../../assets/images/whitelogo.png\" alt=\"\" height=\"40\"> Block Explorer <span class=\"badge\" style=\"background-color: #F47F4B\">Beta</span></a>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\r\n\t\t\t\t<li><a routerLink=\"/blocks\">Blocks</a></li>\r\n\t\t\t\t<li><a routerLink=\"/allTransactions\">Transactions</a></li>\r\n\t\t\t\t<li><a routerLink=\"/network\">Network</a></li>\r\n\t\t\t\t<li><a href=\"https://blockexplorer.gamecredits.com/api/ui\">API</a></li>\r\n\t\t\t</ul>\r\n\t\t</div><!-- /.navbar-collapse -->\r\n\t</div><!-- /.container-fluid -->\r\n</nav>\r\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row text-center\">\r\n\t\t<h1 class=\"pull-left network-title\"> Block Explorer: addnode = 148.251.15.209:40002 </h1>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t<p class=\"pull-left\">\r\n\t\t\t\tMAP OF EXPLORER CONNECTIONS\r\n \t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<p align=\"left\"> \r\n\t\t\t\t\t<b>\r\n\t\t\t\t\tThis maps shows live full nodes that are connected to the\r\n\t\t\t\t\tBlock Explorer. These are NOT all live nodes, only the ones\r\n\t\t\t\t\tthat the Explorer client is “talking to” at the moment.\r\n\t\t\t\t\t</b>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<table class=\"table peers-table\">\r\n\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t<th class=\"no-border-top\">\r\n\t\t\t\t\t\t\tNode\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th class=\"no-border-top\">\r\n\t\t\t\t\t\t\tVersion\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr *ngFor=\"let peer of peersToShow\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">{{peer?.addr}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"pull-left\">{{peer?.subver}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<span *ngIf=\"showButton\" (click)=\"showAll()\" class=\"all-peers-button\"> <b> Show all peers </b> </span>\r\n \t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" class=\"map\">\r\n\t\t\t<div *ngFor=\"let peer of clientInfo?.peerInfo\">\r\n\t\t\t  <sebm-google-map-marker [latitude]=\"peer.latitude\" [longitude]=\"peer.longitude\" ></sebm-google-map-marker>\r\n\t\t\t</div>\r\n\t\t\t</sebm-google-map>\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row last-row text-for-network\"> \r\n\t<p>\r\n\t\t* If syncing of your client takes a long time you can add a node manually and it may speed up the syncing process. In order to do that start your client from the command line with the -addnode=148.251.15.209:40002 parameter or you can add that parameter to the gamecredits.conf file in your data directory. \r\nFor more info read this article about running Bitcoin, all the same rules apply to GameCredits: https://en.bitcoin.it/wiki/Running_Bitcoin\r\n\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid transaction-header\">\r\n  <div class=\"container\">\r\n    <h1>Transaction <small>View information about a GameCredits transaction</small></h1>\r\n    <p>\r\n      <i class=\"fa fa-hashtag\"></i>\r\n      {{transaction?.blockhash}}\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid transaction-body\">\r\n  <div class=\"container\">\r\n    <div class=\"transaction-card col-xs-12\">\r\n      <div class=\"transaction-card__body\">\r\n        <div class=\"col-md-6\">\r\n          <p><strong>Inputs:</strong></p>\r\n          <ul class=\"list-unstyled\">\r\n\r\n            <li *ngFor=\"let input of transaction?.vin\" >\r\n              <div *ngIf=\"input.prev_txid\"> \r\n                <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\r\n                  {{input.prev_txid}}\r\n                </a> \r\n              </div>\r\n              <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\r\n            </li> \r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p><strong>Outputs</strong></p>\r\n          <ul class=\"list-unstyled\">\r\n\r\n            <li *ngFor=\" let output of transaction?.vout \">\r\n\r\n              <div *ngFor=\"let adress of output.addresses\">\r\n                [\r\n                <a routerLink=\"/addresses/Gf2uS2ZaWWXkbj3DK263zsK2bqU4rvLHCy\" >\r\n                  {{adress}}\r\n                </a>\r\n                ]\r\n              </div>\r\n              Amount: {{output.value | number:'1.5-5'}} GAME\r\n              <Br> <br>\r\n              </li>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"transaction-card__footer\">\r\n          <div class=\"col-xs-12\">\r\n            <p class=\"pull-right\">\r\n              <span data-toggle=\"tooltip\" title=\"Transaction is considered confirmed if more than 6 confirmations are available\">\r\n                Total sent: {{transaction?.total | number:'1.5-5'}} GAME, Confirmations: {{confirmations}},  Status: <i class=\"fa fa-check-circle-o\" *ngIf=\" confirmations > 6\"></i> <i class=\"fa fa-times\" *ngIf=\" confirmations < 7\"></i> \r\n              </span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 transaction-summary\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th>Summary</th>\r\n              <th></th>\r\n            </tr>\r\n            <tr>\r\n              <td>Blockhash:</td>\r\n              <td>{{transaction?.blockhash}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Blocktime:</td>\r\n              <td>{{ ( transaction?.blocktime * 1000 )  | date:'medium'}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Version:</td>\r\n              <td>{{transaction?.version}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addressPage_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressPageComponent = (function () {
    function AddressPageComponent(addressPageService, route) {
        this.addressPageService = addressPageService;
        this.route = route;
        this.address = '';
        this.allTransactions = [];
        this.unspent = [];
        this.selectedTrancationsTagName = "All Transactions";
        this.transactionsTagNumber = 0;
        this.volume = 0;
        this.nextTransactionsPageLink = '';
        this.currentValue = 0;
        this.totalTransactionsNumber = 0;
    }
    AddressPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.address = '' + params['hash'];
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressAllTransactions('' + params['hash']); })
            .subscribe(function (resp) {
            _this.allTransactions = resp.transactions;
            _this.nextTransactionsPageLink = resp.next;
            _this.setMenu('All Transactions');
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressUnspent('' + params['hash']); })
            .subscribe(function (resp) {
            var i;
            for (i = 0; i < resp.length; i++) {
                var item = resp[i];
                item.vin = Array.from(resp[i].vin);
                _this.unspent.push(item);
            }
            console.log(_this.unspent);
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressVolume('' + params['hash']); })
            .subscribe(function (resp) {
            _this.volume = Number(resp);
            isNaN(_this.volume) ? _this.volume = 0 : _this.volume = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressTotalTransactionsNumber('' + params['hash']); })
            .subscribe(function (resp) {
            _this.totalTransactionsNumber = Number(resp);
            isNaN(_this.totalTransactionsNumber) ? _this.totalTransactionsNumber = 0 : _this.totalTransactionsNumber = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressBalance('' + params['hash']); })
            .subscribe(function (resp) {
            _this.currentValue = Number(resp);
            isNaN(_this.currentValue) ? _this.currentValue = 0 : _this.currentValue = resp;
        });
    };
    AddressPageComponent.prototype.setMenu = function (name) {
        this.selectedTrancationsTagName = name;
        if (name == 'All Transactions') {
            this.transactionsTagNumber = this.allTransactions ? this.allTransactions.length : 0;
        }
        else if (name == 'Unspent Transactions') {
            this.transactionsTagNumber = 0; // FIX THIS AFTER DIVIC FIXES BACKEND 
        }
    };
    AddressPageComponent.prototype.loadMoreTransactions = function () {
        var _this = this;
        this.addressPageService.getNextTransactions(this.nextTransactionsPageLink).subscribe(function (resp) {
            _this.allTransactions = _this.allTransactions.concat(resp.transactions);
            _this.nextTransactionsPageLink = resp.next;
            _this.transactionsTagNumber = _this.allTransactions.length;
        });
    };
    return AddressPageComponent;
}());
AddressPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-adress',
        template: __webpack_require__(256)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__addressPage_service__["a" /* AddressPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__addressPage_service__["a" /* AddressPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddressPageComponent);

var _a, _b;
//# sourceMappingURL=addressPage.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressPageService = (function () {
    function AddressPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    AddressPageService.prototype.getAddressAllTransactions = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressUnspent = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/unspent';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressTotalTransactionsNumber = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/transaction-count';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressVolume = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/volume';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressBalance = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/balance';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getNextTransactions = function (link) {
        var _this = this;
        var url = this.baseApiUrl + link.substring(1);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AddressPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return AddressPageService;
}());
AddressPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AddressPageService);

var _a;
//# sourceMappingURL=addressPage.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allTransactionsPage_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllTransactionsPageComponent = (function () {
    function AllTransactionsPageComponent(allTransactionsPageService, txSocketService) {
        this.allTransactionsPageService = allTransactionsPageService;
        this.txSocketService = txSocketService;
        this.txArray = [];
        this.currentlyLoaded = 0;
        this.loadPerScroll = 30;
        this.txs = [];
    }
    AllTransactionsPageComponent.prototype.ngOnInit = function () {
        this.addTransactions();
        this.socket = this.txSocketService.initConnection();
        this.getTxInitMessage();
        this.getSocketTx();
    };
    AllTransactionsPageComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    AllTransactionsPageComponent.prototype.addTransactions = function () {
        var _this = this;
        this.allTransactionsPageService.getLatestTransactions(this.loadPerScroll, this.currentlyLoaded).subscribe(function (resp) {
            _this.txArray = _this.txArray.concat(resp);
        });
        this.currentlyLoaded += this.loadPerScroll;
    };
    AllTransactionsPageComponent.prototype.onScroll = function () {
        this.addTransactions();
    };
    AllTransactionsPageComponent.prototype.getTxInitMessage = function () {
        var _this = this;
        this.socket = this.txSocketService.getTxConnection().subscribe(function (tx_response) {
            _this.tx_test = tx_response;
        });
    };
    AllTransactionsPageComponent.prototype.getSocketTx = function () {
        var _this = this;
        this.socket = this.txSocketService.getTx().subscribe(function (tx_data) {
            _this.txs.push(tx_data);
        });
    };
    AllTransactionsPageComponent.prototype.calulateMinutesFromNow = function (time) {
        var now = new Date();
        var minutesOld = Math.abs(Math.round((now.valueOf() / 1000 - time) / 60));
        var message = '';
        var days = Math.floor(minutesOld / (60 * 24));
        var hours = Math.floor((minutesOld - days * 60 * 24) / 60);
        var minutes = minutesOld % 60;
        message += minutes + ' m ';
        if (hours || days) {
            message += hours + ' h ';
        }
        if (days) {
            message += days + ' d ';
        }
        return message;
    };
    return AllTransactionsPageComponent;
}());
AllTransactionsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-transactions',
        template: __webpack_require__(257),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */], __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__allTransactionsPage_service__["a" /* AllTransactionsPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__allTransactionsPage_service__["a" /* AllTransactionsPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */]) === "function" && _b || Object])
], AllTransactionsPageComponent);

var _a, _b;
//# sourceMappingURL=allTransactionsPage.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionsPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllTransactionsPageService = (function () {
    function AllTransactionsPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    AllTransactionsPageService.prototype.getLatestTransactions = function (limit, offset) {
        var _this = this;
        var url = this.baseApiUrl + 'transactions/latest?limit=' + limit + '&offset=' + offset;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AllTransactionsPageService.prototype.getLatestBlocks = function () {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/latest?limit=10';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AllTransactionsPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AllTransactionsPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return AllTransactionsPageService;
}());
AllTransactionsPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AllTransactionsPageService);

var _a;
//# sourceMappingURL=allTransactionsPage.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blockPage_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockPageComponent = (function () {
    function BlockPageComponent(blockPageService, route) {
        this.blockPageService = blockPageService;
        this.route = route;
    }
    BlockPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.blockPageService.getBlock('' + params['hash']); })
            .subscribe(function (resp) {
            _this.block = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.blockPageService.getBlockConfirmations('' + params['hash']); })
            .subscribe(function (resp) {
            _this.confirmations = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.blockPageService.getBlockTransactions('' + params['hash']); })
            .subscribe(function (resp) {
            _this.transactions = resp;
        });
    };
    return BlockPageComponent;
}());
BlockPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-block',
        template: __webpack_require__(258)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blockPage_service__["a" /* BlockPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blockPage_service__["a" /* BlockPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], BlockPageComponent);

var _a, _b;
//# sourceMappingURL=blockPage.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlockPageService = (function () {
    function BlockPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    BlockPageService.prototype.getBlock = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlockPageService.prototype.getBlockConfirmations = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/' + hash + '/confirmations';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlockPageService.prototype.getBlockTransactions = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'transactions?blockhash=' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlockPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BlockPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return BlockPageService;
}());
BlockPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BlockPageService);

var _a;
//# sourceMappingURL=blockPage.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlocksPageComponent = (function () {
    function BlocksPageComponent(blocksPageService, blockSocketService) {
        this.blocksPageService = blocksPageService;
        this.blockSocketService = blockSocketService;
        this.blockArray = [];
        this.currentlyLoaded = 0;
        this.loadPerScroll = 30;
        this.blocks = [];
    }
    BlocksPageComponent.prototype.ngOnInit = function () {
        this.addBlocks();
        this.socket = this.blockSocketService.initConnection();
        this.getBlockInitMessage();
        this.getSocketBlock();
    };
    BlocksPageComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    BlocksPageComponent.prototype.addBlocks = function () {
        var _this = this;
        this.blocksPageService.getBlocks(this.loadPerScroll, this.currentlyLoaded).subscribe(function (resp) {
            _this.blockArray = _this.blockArray.concat(resp);
        });
        this.currentlyLoaded += this.loadPerScroll;
    };
    BlocksPageComponent.prototype.onScroll = function () {
        this.addBlocks();
    };
    BlocksPageComponent.prototype.getBlockInitMessage = function () {
        var _this = this;
        this.socket = this.blockSocketService.getBlockConnection().subscribe(function (block_response) {
            _this.block_test = block_response;
        });
    };
    BlocksPageComponent.prototype.getSocketBlock = function () {
        var _this = this;
        this.socket = this.blockSocketService.getBlock().subscribe(function (block_data) {
            _this.blocks.push(block_data);
        });
    };
    BlocksPageComponent.prototype.calulateMinutesFromNow = function (time) {
        var now = new Date();
        var minutesOld = Math.abs(Math.round((now.valueOf() / 1000 - time) / 60));
        var message = '';
        var days = Math.floor(minutesOld / (60 * 24));
        var hours = Math.floor((minutesOld - days * 60 * 24) / 60);
        var minutes = minutesOld % 60;
        message += minutes + ' m ';
        if (hours || days) {
            message += hours + ' h ';
        }
        if (days) {
            message += days + ' d ';
        }
        return message;
    };
    return BlocksPageComponent;
}());
BlocksPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-blocks',
        template: __webpack_require__(259),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__["a" /* BlocksPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__["a" /* BlocksPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */]) === "function" && _b || Object])
], BlocksPageComponent);

var _a, _b;
//# sourceMappingURL=blocksPage.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlocksPageService = (function () {
    function BlocksPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    BlocksPageService.prototype.getBlocks = function (limit, offset) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/latest?limit=' + limit + '&offset=' + offset;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlocksPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BlocksPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return BlocksPageService;
}());
BlocksPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BlocksPageService);

var _a;
//# sourceMappingURL=blocksPage.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homePage_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = (function () {
    function HomePageComponent(homePageService, router, blockSocketService) {
        this.homePageService = homePageService;
        this.router = router;
        this.blockSocketService = blockSocketService;
        this.latestBlocks = [];
        this.networkInfo = [];
        this.bootstrapLink = [];
        this.clientInfo = [];
        this.showPlaceholder = true;
        this.line_ChartData = [];
        this.tempLineChartData = [];
        this.line_ChartOptions = {
            curveType: 'function',
            height: 400,
            vAxis: { baselineColor: '#CCCCCC', gridlines: { count: 13, color: '#dddddd' }, textStyle: { color: 'white' } },
            hAxis: { format: 'd. MMM', baselineColor: '#CCCCCC', gridlines: { count: 10, color: '#bbbbbb' }, minorGridlines: { color: 'red' }, textStyle: { color: 'white' } },
            chartArea: { left: 40, top: 40, width: '90%', height: '80%' },
            backgroundColor: '#33A579',
            yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    color: 'red'
                }],
            legend: {
                position: 'top', textStyle: { color: 'white', fontSize: 16 }, alignment: 'center', opacity: 0.1
            },
            colors: ['white'],
            pointSize: 8,
            dataOpacity: 0.5
        };
        this.blocks = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.blockSocketService.initConnection();
        this.getBlockInitMessage();
        this.getSocketBlock();
        this.homePageService.getLatestBlocks().subscribe(function (resp) {
            (_a = _this.latestBlocks).push.apply(_a, resp);
            var _a;
        });
        this.homePageService.getNetworkPrice().subscribe(function (resp) {
            _this.price = resp.priceUSD;
        });
        this.homePageService.getNetworkInfo().subscribe(function (resp) {
            _this.networkInfo = resp;
        });
        this.homePageService.getClientInfo().subscribe(function (resp) {
            _this.clientInfo = resp;
        });
        this.homePageService.getBootstrapLink().subscribe(function (resp) {
            _this.bootstrapLink = resp;
        });
        this.homePageService.getHashrates().subscribe(function (resp) {
            _this.tempLineChartData.push(['Date', 'Network Hashrate']);
            for (var index = 0; index < resp.length; ++index) {
                _this.tempLineChartData.push([new Date(resp[index].timestamp * 1000), resp[index].hashrate / 1000000000]);
            }
            _this.line_ChartData = _this.tempLineChartData; // Change dependant vaulue only one ( so we dont trriger onChange in directive multiple times)
        });
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    HomePageComponent.prototype.getBlockInitMessage = function () {
        var _this = this;
        this.socket = this.blockSocketService.getBlockConnection().subscribe(function (block_response) {
            _this.block_test = block_response;
        });
    };
    HomePageComponent.prototype.getSocketBlock = function () {
        var _this = this;
        this.socket = this.blockSocketService.getBlock().subscribe(function (block_data) {
            _this.blocks.push(block_data);
        });
    };
    HomePageComponent.prototype.calulateMinutesFromNow = function (time) {
        var now = new Date();
        var minutesOld = Math.abs(Math.round((now.valueOf() / 1000 - time) / 60));
        var message = '';
        var days = Math.floor(minutesOld / (60 * 24));
        var hours = Math.floor((minutesOld - days * 60 * 24) / 60);
        var minutes = minutesOld % 60;
        message += minutes + ' m ';
        if (hours || days) {
            message += hours + ' h ';
        }
        if (days) {
            message += days + ' d ';
        }
        return message;
    };
    HomePageComponent.prototype.hidePlaceholder = function () {
        this.showPlaceholder = false;
    };
    HomePageComponent.prototype.onSearch = function (param) {
        var _this = this;
        this.homePageService.getSearchItemType(param).subscribe(function (resp) {
            if (resp.type == 'block') {
                _this.router.navigateByUrl('blocks/' + resp.searchBy);
            }
            else if (resp.type == 'address') {
                _this.router.navigateByUrl('addresses/' + resp.searchBy);
            }
            else if (resp.type == 'transaction') {
                _this.router.navigateByUrl('transactions/' + resp.searchBy);
            }
        });
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-home',
        template: __webpack_require__(260),
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__["a" /* BlockSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__homePage_service__["a" /* HomePageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__homePage_service__["a" /* HomePageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__["a" /* BlockSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__["a" /* BlockSocketService */]) === "function" && _c || Object])
], HomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=homePage.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePageService = (function () {
    function HomePageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    HomePageService.prototype.getLatestBlocks = function () {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/latest?limit=10';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getLatestNetworkHashRates = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/hashrates?limit=20';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getNetworkPrice = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/price';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getNetworkInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getClientInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'client/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getSearchItemType = function (param) {
        var _this = this;
        var url = this.baseApiUrl + 'search/' + param;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getBootstrapLink = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/bootstrap';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return '' + _this.baseApiUrl.substring(0, _this.baseApiUrl.length - 5) + _this.extractData(res).url; })
            .catch(this.handleError);
    };
    HomePageService.prototype.getHashrates = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/hashrates?limit=25';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HomePageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return HomePageService;
}());
HomePageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HomePageService);

var _a;
//# sourceMappingURL=homePage.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(footerService, txSocketService) {
        this.footerService = footerService;
        this.txSocketService = txSocketService;
        this.latestTransactions = [];
        this.txs = [];
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.txSocketService.initConnection();
        this.getTxInitMessage();
        this.getTx();
        this.footerService.getLatestTransactions().subscribe(function (resp) {
            _this.latestTransactions = resp;
        });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    FooterComponent.prototype.getTxInitMessage = function () {
        var _this = this;
        this.socket = this.txSocketService.getTxConnection().subscribe(function (tx_response) {
            _this.tx_test = tx_response;
        });
    };
    FooterComponent.prototype.getTx = function () {
        var _this = this;
        this.socket = this.txSocketService.getTx().subscribe(function (tx_data) {
            _this.txs.push(tx_data);
            if (_this.txs.length > 5) {
                _this.txs.shift();
            }
            _this.latestTransactions.shift();
        });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-footer',
        template: __webpack_require__(261),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__footer_service__["a" /* FooterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__footer_service__["a" /* FooterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */]) === "function" && _b || Object])
], FooterComponent);

var _a, _b;
//# sourceMappingURL=footer.component.js.map

/***/ })

},[317]);
//# sourceMappingURL=main.bundle.js.map