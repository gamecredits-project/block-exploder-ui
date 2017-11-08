webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__ = __webpack_require__("../../../../../src/app/pages/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__ = __webpack_require__("../../../../../src/app/pages/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_homePage_component__ = __webpack_require__("../../../../../src/app/pages/home/homePage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_blocks_blocksPage_component__ = __webpack_require__("../../../../../src/app/pages/blocks/blocksPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_allTransactions_allTransactionsPage_component__ = __webpack_require__("../../../../../src/app/pages/allTransactions/allTransactionsPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_network_networkPage_component__ = __webpack_require__("../../../../../src/app/pages/network/networkPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_block_blockPage_component__ = __webpack_require__("../../../../../src/app/pages/block/blockPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactionsPage_component__ = __webpack_require__("../../../../../src/app/pages/transactions/transactionsPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_address_addressPage_component__ = __webpack_require__("../../../../../src/app/pages/address/addressPage.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing-module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet name=\"header\"></router-outlet>\r\n\r\n<router-outlet> </router-outlet>\r\n\r\n<router-outlet name=\"footer\"></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customDirectives_angular2_google_chart_directive__ = __webpack_require__("../../../../../src/app/customDirectives/angular2-google-chart.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_layout_header_header_component__ = __webpack_require__("../../../../../src/app/pages/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_layout_footer_footer_component__ = __webpack_require__("../../../../../src/app/pages/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_homePage_component__ = __webpack_require__("../../../../../src/app/pages/home/homePage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blocks_blocksPage_component__ = __webpack_require__("../../../../../src/app/pages/blocks/blocksPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_allTransactions_allTransactionsPage_component__ = __webpack_require__("../../../../../src/app/pages/allTransactions/allTransactionsPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_network_networkPage_component__ = __webpack_require__("../../../../../src/app/pages/network/networkPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_block_blockPage_component__ = __webpack_require__("../../../../../src/app/pages/block/blockPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactionsPage_component__ = __webpack_require__("../../../../../src/app/pages/transactions/transactionsPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_address_addressPage_component__ = __webpack_require__("../../../../../src/app/pages/address/addressPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_layout_footer_footer_service__ = __webpack_require__("../../../../../src/app/pages/layout/footer/footer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_homePage_service__ = __webpack_require__("../../../../../src/app/pages/home/homePage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_blocks_blocksPage_service__ = __webpack_require__("../../../../../src/app/pages/blocks/blocksPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_allTransactions_allTransactionsPage_service__ = __webpack_require__("../../../../../src/app/pages/allTransactions/allTransactionsPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_block_blockPage_service__ = __webpack_require__("../../../../../src/app/pages/block/blockPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactionsPage_service__ = __webpack_require__("../../../../../src/app/pages/transactions/transactionsPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_address_addressPage_service__ = __webpack_require__("../../../../../src/app/pages/address/addressPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_network_networkPage_service__ = __webpack_require__("../../../../../src/app/pages/network/networkPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_pages_socket_socket_service__ = __webpack_require__("../../../../../src/app/pages/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_qrcode3__ = __webpack_require__("../../../../ngx-qrcode3/index.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_27_ngx_qrcode3__["a" /* NgxQRCodeModule */],
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

/***/ "../../../../../src/app/appSettings.ts":
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

/***/ "../../../../../src/app/customDirectives/angular2-google-chart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartType'),
    __metadata("design:type", String)
], GoogleChart.prototype, "chartType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], GoogleChart.prototype, "chartOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
    __metadata("design:type", Object)
], GoogleChart.prototype, "chartData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('ready'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GoogleChart.prototype, "ready", void 0);
GoogleChart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[GoogleChart]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], GoogleChart);

var _a, _b;
//# sourceMappingURL=angular2-google-chart.directive.js.map

/***/ }),

/***/ "../../../../../src/app/pages/address/addressPage.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\" page-banner block-header\">\r\n    \t<div class=\"container\">\r\n    \t\t<div class=\"\">\r\n          <div class=\"col-xs-12 col-lg-5 col-md-6 col-sm-6 border-right sm-border block-address-wrap\">\r\n            <h1 class=\"block-title\">\r\n              Address\r\n            </h1>\r\n            <p class=\"address\">\r\n              {{address}}\r\n            </p>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-12 qr-code sm-border\">\r\n              <ngx-qrcode [qrc-element-type]=\"'url'\" [qrc-value] = \"currentLocation\">\r\n              </ngx-qrcode>\r\n          </div>\r\n    \t\t\t<div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12 block-summary md-border-top\" style=\"padding: 0px !important;\">\r\n    \t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    \t\t\t\t\t\t\t\t<h5>Summary</h5>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6\">\r\n                <div class=\"row block-label\"># Of Transactions</div>\r\n                <div class=\"row block-value\">{{totalTransactionsNumber}}</div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6\">\r\n                <div class=\"row block-label\">Total volume:</div>\r\n                <div class=\"row block-value\">{{volume | number:'1.5-5'}} GAME</div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6\">\r\n                <div class=\"row block-label\">Estimated balance</div>\r\n                <div class=\"row block-value\">{{currentValue | number:'1.5-5'}} GAME</div>\r\n              </div>\r\n    \t\t\t\t\t</div>\r\n    \t\t\t\t</div>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t</div>\r\n<!-- TRANSACTIONS -->\r\n    <div class=\"blocks-wrapper\">\r\n      <div class=\"container address-transactions\">\r\n\r\n        <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-9\">\r\n          <h3 class=\"address-transactions-title\"> {{selectedTrancationsTagName}}  <button class=\"btn transaction-number\">{{transactionsTagNumber}}</button></h3>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-4 col-lg-3 text-center\" style=\"padding-top: 20px;\">\r\n\r\n          <div class=\"col-xs-6 col-sm-6\" style=\"padding: 0\">\r\n            <button class=\"btn filter-btn\" [ngClass]=\"{'active': selectedTrancationsTagName == 'All Transactions'}\" (click)=\"setMenu('All Transactions')\">All </button>\r\n          </div>\r\n          <div class=\"col-xs-6 col-sm-6\" style=\"padding: 0\">\r\n            <button class=\"btn filter-btn\"  [ngClass]=\"{'active': selectedTrancationsTagName != 'All Transactions'}\" style=\"margin-right: 10px\" (click)=\"setMenu('Unspent Transactions')\">Unspent </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"\">\r\n          <div class=\"col-xs-12 block-transactions\">\r\n\r\n            <div  *ngIf=\"selectedTrancationsTagName == 'All Transactions' && allTransactions\">\r\n              <div class=\"panel panel-default panel-block\" *ngFor=\"let trans of allTransactions\">\r\n                <div class=\"panel-heading\">\r\n\r\n                    <p class=\"col-sm-11 col-xs-9 vcenter\">\r\n                      <a href=\"{{'/transactions/' + trans.txid}}\" class=\"block-link col-sm-11 col-xs-10 vcenter hidden-xs\" >\r\n                        {{trans.txid}}\r\n                      </a>\r\n                      <a href=\"{{'/transactions/' + trans.txid}}\" class=\"block-link col-sm-11 col-xs-10 vcenter hidden-sm hidden-md hidden-lg\" >\r\n                        {{trans.txid.substring(0,10)}}...{{trans.txid.substring(55,64)}}\r\n                      </a>\r\n\r\n                    </p>\r\n                  <div class=\"panel-rectangle col-sm-1 col-xs-3 float-right\">\r\n                    <a href=\"{{'/transactions/' + trans.txid}}\">\r\n                      <i class=\"glyphicon glyphicon-chevron-right vcenter\"></i>\r\n                    </a>\r\n                  </div>\r\n\r\n\r\n                    <!--<span ><i class=\"icon-calendar\"> {{ (trans?.blocktime * 1000 ) | date:'medium'}}</i></span>-->\r\n\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"\">\r\n                    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-content\" style=\"height: 100%\">\r\n                      <p class=\"block-label\">Inputs</p>\r\n                      <ul class=\"list-unstyled\">\r\n\r\n                        <li *ngFor=\"let input of trans?.vin\" >\r\n                          <div *ngIf=\"input.prev_txid\">\r\n                            <p class=\"block-link\">\r\n                              <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\" class=\"hidden-xs\" >\r\n                                {{input.prev_txid}}\r\n                              </a>\r\n                              <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\" class=\"hidden-sm hidden-md hidden-lg\" >\r\n                                {{input.prev_txid.substring(0,10)}}...{{input.prev_txid.substring(55,64)}}\r\n                              </a>\r\n\r\n                            </p>\r\n                          </div>\r\n                          <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\r\n                        </li>\r\n\r\n                      </ul>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 md-border-left block-content md-border-top\">\r\n                      <p class=\"block-label\">Outputs</p>\r\n                      <ul class=\"list-unstyled\">\r\n\r\n                        <li *ngFor=\" let output of trans?.vout \">\r\n\r\n                          <div class=\"col-md-8 col-sm-8 col-xs-12\" *ngFor=\"let adress of output?.addresses\" style=\"padding-left: 0px;\">\r\n                            <a routerLink=\"{{'/addresses/'+ adress}}\" class=\"hidden-xs\">\r\n                              {{adress}}\r\n                            </a>\r\n\r\n                            <a routerLink=\"{{'/addresses/'+ adress}}\" class=\"hidden-sm hidden-md hidden-lg\" >\r\n                              {{adress.substring(0,10)}}...{{adress.substring(23,64)}}\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"col-md-4 col-sm-4 col-xs-12 block-value\" style=\"padding-left: 0px;\">\r\n                             {{output.value | number:'1.5-5'}} GAME\r\n                          </div>\r\n\r\n                          <Br> <br>\r\n                        </li>\r\n\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                  <div class=\"col-md-6 block-label xs-text-left\">\r\n                    {{ (trans?.blocktime * 1000 ) | date:'medium'}}\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right xs-text-left\">\r\n                    <span class=\"block-label\">Total:</span> <span class=\"block-value\">{{trans?.total | number:'1.5-5'}} GAME</span>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <button class=\"btn active filter-btn\" *ngIf=\"totalTransactionsNumber > allTransactions.length\" (click)=\"loadMoreTransactions()\"> Load More Transactions </button>\r\n            </div>\r\n\r\n            <div class=\"panel panel-default panel-block\" *ngIf=\"selectedTrancationsTagName == 'Unspent Transactions'\" >\r\n              <div class=\"panel panel-default panel-block\" *ngFor=\"let trans of unspent \">\r\n                <div class=\"panel-heading\" style=\"\">\r\n                  <p class=\"block-link col-sm-11 col-xs-9 vcenter\">\r\n                      <a href=\"{{'/transactions/' + trans.txid}}\">\r\n                        {{trans.txid}}\r\n                      </a>\r\n                    </p>\r\n                  <div class=\"panel-rectangle\">\r\n                    <a href=\"{{'/transactions/' + trans.txid}}\">\r\n                      <i class=\"glyphicon glyphicon-chevron-right vcenter\"></i>\r\n                    </a>\r\n                </div>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"\">\r\n                    <div class=\"col-md-12 block-content\" style=\"height: 100%\">\r\n                      <p class=\"block-label\">Inputs</p>\r\n                      <ul class=\"list-unstyled\">\r\n\r\n                        <li *ngFor=\"let input of trans?.addresses\" >\r\n                          <div *ngIf=\"input\">\r\n                            <a routerLink=\"{{'/address/'+ input}}\" class=\"hidden-xs\" >\r\n                              {{input.prev_txid}}\r\n                            </a>\r\n                            <a routerLink=\"{{'/address/'+ input}}\" class=\"hidden-sm hidden-md hidden-lg\" >\r\n                              {{input.substring(0,10)}}...{{input.substring(55,64)}}\r\n                            </a>\r\n                          </div>\r\n                        </li>\r\n\r\n                      </ul>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n                  <div class=\"panel-footer\">\r\n                    <div class=\"col-md-12 text-right xs-text-left\">\r\n                      <span class=\"block-label\">Total:</span> <span class=\"block-value\">{{trans?.value | number:'1.5-5'}} GAME</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/address/addressPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addressPage_service__ = __webpack_require__("../../../../../src/app/pages/address/addressPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
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
    function AddressPageComponent(addressPageService, route, router) {
        this.addressPageService = addressPageService;
        this.route = route;
        this.router = router;
        this.address = '';
        this.allTransactions = [];
        this.unspent = [];
        this.selectedTrancationsTagName = "All Transactions";
        this.transactionsTagNumber = 0;
        this.volume = 0;
        this.nextTransactionsPageLink = '';
        this.currentValue = 0;
        this.totalTransactionsNumber = 0;
        this.currentLocation = "www.blockexplorer.gamecredits.com";
    }
    AddressPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.address = '' + params['hash'];
        });
        this.currentLocation = window.location.href;
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
                item.vin = Array.from(resp[i].addresses);
                _this.unspent.push(item);
            }
            console.log(_this.unspent);
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressVolume('' + params['hash']); })
            .subscribe(function (resp) {
            _this.volume = Number(resp.volume);
            isNaN(_this.volume) ? _this.volume = 0 : _this.volume = resp.volume;
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressTotalTransactionsNumber('' + params['hash']); })
            .subscribe(function (resp) {
            _this.totalTransactionsNumber = Number(resp.transactionCount);
            isNaN(_this.totalTransactionsNumber) ? _this.totalTransactionsNumber = 0 : _this.totalTransactionsNumber = resp.transactionCount;
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressBalance('' + params['hash']); })
            .subscribe(function (resp) {
            _this.currentValue = Number(resp.balance);
            isNaN(_this.currentValue) ? _this.currentValue = 0 : _this.currentValue = resp.balance;
        });
    };
    AddressPageComponent.prototype.setMenu = function (name) {
        this.selectedTrancationsTagName = name;
        if (name == 'All Transactions') {
            this.transactionsTagNumber = this.allTransactions ? this.allTransactions.length : 0;
        }
        else if (name == 'Unspent Transactions') {
            this.transactionsTagNumber = this.unspent ? this.unspent.length : 0;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-adress',
        template: __webpack_require__("../../../../../src/app/pages/address/addressPage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__addressPage_service__["a" /* AddressPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__addressPage_service__["a" /* AddressPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddressPageComponent);

var _a, _b, _c;
//# sourceMappingURL=addressPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/address/addressPage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AddressPageService);

var _a;
//# sourceMappingURL=addressPage.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/allTransactions/allTransactionsPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid blocks-wrapper\">\r\n\t<div class=\"container\">\r\n\t\t<h1 class=\"blocks-title\">Transactions</h1>\r\n\t\t<h2>{{ block_test }}</h2>\r\n\t\t<div class=\"search-results\"\r\n\t\t\tinfiniteScroll\r\n\t\t\t[infiniteScrollDistance]=\"1\"\r\n\t\t\t[infiniteScrollThrottle]=\"300\"\r\n\t\t\t(scrolled)=\"onScroll()\">\r\n\t\t\t<table class=\"table latest-blocks-table hidden-xs\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t<tr class=\"blocks-table-header\">\r\n\t\t\t\t<th>TRANSACTION ID</th>\r\n\t\t\t\t<th>BLOCK HASH</th>\r\n\t\t\t\t<th>AGE</th>\r\n\t\t\t\t<th>TOTAL</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let transaction of txs.slice().reverse()\">\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"{{'/transactions/' + transaction.txid}}\">\r\n\t\t\t\t\t\t\t\t\t{{transaction.txid.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t..{{transaction.txid.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + transaction.blockhash}}\">\r\n\t\t\t\t\t\t\t\t\t{{transaction.blockhash.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t..{{transaction.blockhash.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t{{calulateMinutesFromNow(transaction?.blocktime)}}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t{{transaction.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr *ngFor=\"let transaction of txArray\">\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"{{'/transactions/' + transaction.txid}}\">\r\n\t\t\t\t\t\t\t\t\t{{transaction.txid.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t..{{transaction.txid.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + transaction.blockhash}}\">\r\n\t\t\t\t\t\t\t\t\t{{transaction.blockhash.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t..{{transaction.blockhash.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t{{calulateMinutesFromNow(transaction?.blocktime)}}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t{{transaction.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<div class=\"container-fluid hidden-sm hidden-md hidden-lg\">\r\n\t\t\t\t\t<div class=\"row one-card\" *ngFor=\"let transaction of txs.slice().reverse()\">\r\n\t\t\t\t\t\t\t<table class=\"table one-card-table transactions-card-table\">\r\n\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t<td class=\"\" style=\"padding-top:30px\">\r\n\t\t\t\t\t\t\t\t\t\tTRANSACTION ID <br>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"transactions-card-link\"  href=\"{{'/transactions/' + transaction.txid}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{transaction.txid.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t\t\t..{{transaction.txid.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"\">\r\n\t\t\t\t\t\t\t\t\t\tBLOCK HASH  <br>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"transactions-card-link\" routerLink=\"{{ '/blocks/' + transaction.blockhash}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{transaction.blockhash.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t\t\t..{{transaction.blockhash.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"\">\r\n\t\t\t\t\t\t\t\t\t\tAGE <br>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{calulateMinutesFromNow(transaction?.blocktime)}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t<td  style=\"padding-bottom:30px\">\r\n\t\t\t\t\t\t\t\t\t\tTOTAL <br>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{transaction.total | number:'1.5-5'}} GAME</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t<div class=\"container-fluid hidden-sm hidden-md hidden-lg\">\r\n\t\t\t\t\t<div class=\"row one-card\" *ngFor=\"let transaction of txArray\">\r\n\t\t\t\t\t\t\t<table class=\"table one-card-table transactions-card-table\">\r\n\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t<td class=\"\" style=\"padding-top:30px\">\r\n\t\t\t\t\t\t\t\t\t\tTRANSACTION ID <br>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"transactions-card-link\"  href=\"{{'/transactions/' + transaction.txid}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{transaction.txid.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t\t\t..{{transaction.txid.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"\">\r\n\t\t\t\t\t\t\t\t\t\tBLOCK HASH  <br>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"transactions-card-link\" routerLink=\"{{ '/blocks/' + transaction.blockhash}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{transaction.blockhash.substring(0,10)}}..\r\n\t\t\t\t\t\t\t\t\t\t\t..{{transaction.blockhash.substring(54,64)}}\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"\">\r\n\t\t\t\t\t\t\t\t\t\tAGE <br>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{calulateMinutesFromNow(transaction?.blocktime)}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t<td  style=\"padding-bottom:30px\">\r\n\t\t\t\t\t\t\t\t\t\tTOTAL <br>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{transaction.total | number:'1.5-5'}} GAME</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/allTransactions/allTransactionsPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allTransactionsPage_service__ = __webpack_require__("../../../../../src/app/pages/allTransactions/allTransactionsPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__ = __webpack_require__("../../../../../src/app/pages/socket/socket.service.ts");
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
        message += minutes + 'm ';
        if (hours || days) {
            message += hours + 'h ';
        }
        if (days) {
            message += days + 'd ';
        }
        return message;
    };
    return AllTransactionsPageComponent;
}());
AllTransactionsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-transactions',
        template: __webpack_require__("../../../../../src/app/pages/allTransactions/allTransactionsPage.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */], __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__allTransactionsPage_service__["a" /* AllTransactionsPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__allTransactionsPage_service__["a" /* AllTransactionsPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */]) === "function" && _b || Object])
], AllTransactionsPageComponent);

var _a, _b;
//# sourceMappingURL=allTransactionsPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/allTransactions/allTransactionsPage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionsPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AllTransactionsPageService);

var _a;
//# sourceMappingURL=allTransactionsPage.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/block/blockPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block-details\"> \r\n  <div class=\"container-fluid page-banner-2 block-header\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 left-half\">\r\n          <div class=\"bottom-border-block-row\">\r\n            <h1 class=\"block-title\">\r\n              Block <span class=\"hidden-sm hidden-md hidden-lg\"> <br> </span> #{{block?.height}} \r\n              <span class=\"pull-right next-prev-link hidden-xs \" *ngIf=\"block?.nextblockhash\"> <a routerLink=\"{{ '/blocks/' + block?.nextblockhash}}\">></a>  </span>\r\n              <span class=\"pull-right next-prev-link hidden-xs\" > <a   routerLink=\"{{ '/blocks/' + block?.previousblockhash}}\"><</a> </span>\r\n            </h1>\r\n            <div class=\"block-hash-text\">\r\n            <span >{{block?.hash}}</span>\r\n            </div>\r\n            <br>\r\n          </div>\r\n          <div class=\"bottom-border-block-row\">\r\n              <h5 class=\"small-title-texts\">\r\n                  Merkle Root\r\n              </h5>\r\n              <div class=\"root-text\">\r\n                  <span style=\"word-break: break-all;\">{{block?.merkleroot}}</span>\r\n              </div>\r\n              <br><br>\r\n            </div>\r\n          <div class=\"table-responsive hidden-xs\" style=\"padding-top:25px; border: 0px !important;\">\r\n              <table class=\"table\">\r\n                <tbody class=\"block-summary-2-table\">\r\n                  <tr>\r\n                    <th class=\"small-title-texts\">Summary</th>\r\n                    <th></th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                        <span class=\"block-summary-small-text\"># OF TRANSACTIONS</span> <br>\r\n                        <span class=\"block-summary-small-text-white\">{{block?.tx?.length}}</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"block-summary-small-text\">TOTAL SENT</span> <br>\r\n                        <span class=\"block-summary-small-text-white\">{{block?.total | number:'1.5-5'}} GAME</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"block-summary-small-text\">DIFFICULTY</span> <br>\r\n                        <span class=\"block-summary-small-text-white\">{{block?.difficulty}}</span>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">SIZE</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{block?.size}} kB</span>\r\n                      </td>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">TIMESTAMP</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{ (block?.time * 1000 ) | date:'medium'}}</span>\r\n                      </td>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">NONCE</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{block?.nonce}}</span>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">VERSION</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{block?.version}}</span>\r\n                      </td>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">CONFIRMATIONS</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{confirmations?.confirmations}}</span>\r\n                      </td>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">BITS</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{block?.bits}}</span>\r\n                      </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"table-responsive hidden-sm hidden-md hidden-lg\" style=\"padding-top:25px; border: 0px !important \">\r\n                <table class=\"table\">\r\n                  <tbody class=\"block-summary-2-table\">\r\n                    <tr>\r\n                      <th class=\"small-title-texts\">Summary</th>\r\n                      <th></th>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\"># OF TRANSACTIONS</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{block?.tx?.length}}</span>\r\n                      </td>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">TOTAL SENT</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{block?.total | number:'1.5-5'}} GAME</span>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                          <span class=\"block-summary-small-text\">DIFFICULTY</span> <br>\r\n                          <span class=\"block-summary-small-text-white\">{{block?.difficulty}}</span>\r\n                      </td>\r\n                        <td>\r\n                            <span class=\"block-summary-small-text\">SIZE</span> <br>\r\n                            <span class=\"block-summary-small-text-white\">{{block?.size}} kB</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"block-summary-small-text\">BITS</span> <br>\r\n                            <span class=\"block-summary-small-text-white\">{{block?.bits}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"block-summary-small-text\">NONCE</span> <br>\r\n                            <span class=\"block-summary-small-text-white\">{{block?.nonce}}</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"block-summary-small-text\">VERSION</span> <br>\r\n                            <span class=\"block-summary-small-text-white\">{{block?.version}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"block-summary-small-text\">CONFIRMATIONS</span> <br>\r\n                            <span class=\"block-summary-small-text-white\">{{confirmations?.confirmations}}</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>\r\n                              <span class=\"block-summary-small-text\">TIMESTAMP</span> <br>\r\n                              <span class=\"block-summary-small-text-white\">{{ (block?.time * 1000 ) | date:'medium'}}</span>\r\n                          </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6 right-half\">\r\n            <div class=\"block-transactions\">\r\n                <div class=\"row\">\r\n                  <div class=\"block-transactions\">\r\n                    <div class=\"bottom-border-block-row\" style=\"padding-bottom:15px; margin-bottom:15px;\">\r\n                      <h3 class=\"block-transactions-title \">Block Transactions &nbsp; &nbsp;<span class=\"number-with-background\">{{transactions?.length}}</span></h3>\r\n                      <span class=\"pull-right small-loop-icon hidden-xs\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                    </div>\r\n            \r\n\r\n                    <div class=\"main-card-block\" *ngFor=\"let trans of transactions\">\r\n\r\n                    <div class=\"first-row-xs\">\r\n                        <div class=\"col-xs-6 hidden-xs\">\r\n                          <a routerLink=\"{{'/transactions/' + trans.txid}}\" class=\"block-transaction-link\">{{trans.txid}}</a>\r\n                        </div>\r\n\r\n                        <div class=\"col-xs-6 hidden-sm hidden-md hidden-lg\">\r\n                            <a href=\"{{'/transactions/' + trans.txid}}\" class=\"block-transaction-link\">{{trans.txid.substring(0,10)}}...{{trans.txid.substring(54,64)}}</a>\r\n                        </div>\r\n\r\n                        <div class=\"first-row-box pull-right\">\r\n                            <a routerLink=\"{{'/transactions/' + trans.txid}}\" style=\"text-decoration:none;\">></a>\r\n                        </div>\t\r\n                    </div>\r\n\r\n                     <div class=\"panel-body\" style=\"background-color: rgba(123,147,166,0.07);\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <span class=\"block-summary-small-text\">INPUTS</span>\r\n                          <ul class=\"list-unstyled\">\r\n            \r\n                            <li *ngFor=\"let input of trans.vin\" >\r\n                              <div *ngIf=\"input.prev_txid\"> \r\n                                <p class=\"block-link\">\r\n                                  <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\" class=\"block-transaction-link hidden-xs\">\r\n                                    {{input.prev_txid}}\r\n                                  </a>\r\n                                  <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\" class=\"block-transaction-link hidden-sm hidden-md hidden-lg\">\r\n                                    {{input.prev_txid.substring(0,14)}}...{{input.prev_txid.substring(50,64)}}\r\n                                  </a> \r\n                                  \r\n                                </p>\r\n                              </div>\r\n                              <div *ngIf=\"!input.prev_txid\"> <span class=\"block-summary-small-text-white\">No Inputs (Newly Generated Coins)</span></div>\r\n                            </li> \r\n            \r\n                          </ul>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <span class=\"block-summary-small-text\">OUTPUTS</span>\r\n                          <ul class=\"list-unstyled\">\r\n            \r\n                            <li *ngFor=\" let output of trans.vout \">\r\n                              \r\n                              <div *ngFor=\"let adress of output.addresses\" class=\"holder-div\" >\r\n                                  <div class=\"col-sm-7\">\r\n                                    <a routerLink=\"{{'/addresses/'+ adress}}\" class=\"block-transaction-link hidden-xs\" >\r\n                                      {{adress}}\r\n                                    </a>\r\n                                    <a routerLink=\"{{'/addresses/'+ adress}}\" class=\"block-transaction-link hidden-sm hidden-md hidden-lg\" >\r\n                                      {{adress.substring(0,10)}}...{{adress.substring(20,64)}}\r\n                                    </a>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\" style=\"text-align:center;\">\r\n                                      <span class=\"block-summary-small-text-white\">{{output.value | number:'1.5-5'}} GAME</span> \r\n                                  </div>\r\n                                  <div class=\"col-sm-2 border-r-4px\" *ngIf=\"output.spent\" style=\"background-color: rgba(20,199,219,0.15);\" > \r\n                                    <span  class=\"badge-status-text\" style=\"\tcolor: #14C7DB;\">SPENT</span>\r\n                                  </div>\r\n                                  <div class=\"col-sm-2 border-r-4px\" *ngIf=\"!output.spent\" style=\"background-color: rgba(123,147,166,0.15);\">\r\n                                    <span   class=\"badge-status-text\" style=\"color: #7B93A6;\">UNSPENT</span>\r\n                                  </div>\r\n                              </div>\r\n                            </li>\r\n            \r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"last-row-panel\">\r\n                        <div>\r\n                            <span class=\"block-summary-small-text-2\"> {{ (trans.blocktime * 1000 ) | date:'medium'}} </span>\r\n                        </div>\r\n                        <span class=\"hidden-sm hidden-md hidden-lg\"> <br> </span>\r\n                        <div class=\"pull-right footer-card-right-div hidden-xs\">\r\n                          <span class=\"block-summary-small-text\">TOTAL</span> &nbsp; \r\n                          <span class=\"block-summary-small-text-white\">{{trans?.total | number:'1.5-5'}} GAME </span>\r\n                        </div>\r\n                        <div class=\"footer-card-right-div hidden-sm hidden-md hidden-lg\" style=\"padding-left:15px !important\">\r\n                            <span class=\"block-summary-small-text\">TOTAL</span> &nbsp; \r\n                            <span class=\"block-summary-small-text-white\">{{trans?.total | number:'1.5-5'}} GAME </span>\r\n                          </div>\r\n                    </div>\r\n                  </div>\r\n            \r\n                </div>\r\n              </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/block/blockPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blockPage_service__ = __webpack_require__("../../../../../src/app/pages/block/blockPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-block',
        template: __webpack_require__("../../../../../src/app/pages/block/blockPage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blockPage_service__["a" /* BlockPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blockPage_service__["a" /* BlockPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], BlockPageComponent);

var _a, _b;
//# sourceMappingURL=blockPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/block/blockPage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BlockPageService);

var _a;
//# sourceMappingURL=blockPage.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/blocks/blocksPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid blocks-wrapper\">\r\n\t<div class=\"container\">\r\n\t\t<h1 class=\"blocks-title\">Blocks </h1>\r\n\t\t\t<div class=\"search-results\"\r\n\t\t\tinfiniteScroll\r\n\t\t\t[infiniteScrollDistance]=\"1\"\r\n\t\t\t[infiniteScrollThrottle]=\"300\"\r\n\t\t\t(scrolled)=\"onScroll()\">\r\n\t\t\t\t<table class=\"table latest-blocks-table hidden-xs\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class=\"blocks-table-header\">\r\n\t\t\t\t\t\t\t<th>HEIGHT</th>\r\n\t\t\t\t\t\t\t<th>AGE</th>\r\n\t\t\t\t\t\t\t<th>TRANSACTIONS</th>\r\n\t\t\t\t\t\t\t<th>TOTAL SENT</th>\r\n\t\t\t\t\t\t\t<th>SIZE (KB)</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let block of blocks.reverse()\">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t{{calulateMinutesFromNow(block?.time)}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t{{block?.tx?.length}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t{{block?.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t{{block?.size}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let block of blockArray\">\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t{{calulateMinutesFromNow(block?.time)}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t{{block?.tx?.length}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t{{block?.total | number:'1.5-5'}} GAME\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t{{block?.size}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t\t<div class=\"container-fluid hidden-sm hidden-md hidden-lg\">\r\n\t\t\t\t\t<div class=\"row one-card\" *ngFor=\"let block of blocks.reverse()\">\r\n\t\t\t\t\t\t\t<div class=\"first-row-xs\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"first-row-box pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + block.hash}}\">></a>\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<table class=\"table one-card-table\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"card-bot-border\">\r\n\t\t\t\t\t\t\t\t\t\tAGE <br>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{calulateMinutesFromNow(block?.time)}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"card-left-border card-bot-border\">\r\n\t\t\t\t\t\t\t\t\t\tTRANS.  <br>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{block?.tx?.length}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"card-left-border card-bot-border\">\r\n\t\t\t\t\t\t\t\t\t\tSIZE (KB) <br>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{block?.size}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\tTOTAL SENT GAME <br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{block?.total | number:'1.5-5'}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"container-fluid hidden-sm hidden-md hidden-lg\">\r\n\t\t\t\t\t\t<div class=\"row one-card\" *ngFor=\"let block of blockArray\">\r\n\t\t\t\t\t\t\t\t<div class=\"first-row-xs\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"first-row-box pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{ '/blocks/' + block.hash}}\">></a>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<table class=\"table one-card-table\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"card-bot-border\">\r\n\t\t\t\t\t\t\t\t\t\t\tAGE <br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{calulateMinutesFromNow(block?.time)}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"card-left-border card-bot-border\">\r\n\t\t\t\t\t\t\t\t\t\t\tTRANS.  <br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{block?.tx?.length}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"card-left-border card-bot-border\">\r\n\t\t\t\t\t\t\t\t\t\t\tSIZE (KB) <br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{block?.size}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTOTAL SENT GAME <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"white-text\">{{block?.total | number:'1.5-5'}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/blocks/blocksPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__ = __webpack_require__("../../../../../src/app/pages/blocks/blocksPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__ = __webpack_require__("../../../../../src/app/pages/socket/socket.service.ts");
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
        message += minutes + 'm ';
        if (hours || days) {
            message += hours + 'h ';
        }
        if (days) {
            message += days + 'd ';
        }
        return message;
    };
    return BlocksPageComponent;
}());
BlocksPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-blocks',
        template: __webpack_require__("../../../../../src/app/pages/blocks/blocksPage.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__["a" /* BlocksPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__["a" /* BlocksPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["a" /* BlockSocketService */]) === "function" && _b || Object])
], BlocksPageComponent);

var _a, _b;
//# sourceMappingURL=blocksPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/blocks/blocksPage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BlocksPageService);

var _a;
//# sourceMappingURL=blocksPage.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/homePage.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"container-fluid page-banner home\">\r\n        <div class=\"container\">\r\n          <div class=\"home-header row\">\r\n            <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <h5>GameCredits Stats</h5>\r\n                  <h1>${{price | number:'1.5-5'}}</h1>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n\r\n                  <div class=\"home-box\">\r\n                    <div class=\"block-label\">\r\n                      BLOCkCHAIN SIZE\r\n                    </div>\r\n                    <div class=\"block-value\">{{networkInfo?.blockchainSize}}GB</div>\r\n                    <div class=\"bchain-animation\">\r\n                      <div id=\"ripple\" class=\"centered\">\r\n                        <div class=\"circle\"></div>\r\n                        <div class=\"circle\"></div>\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n\r\n                  <div class=\"home-box row height-80-px no-left-right-margin\">\r\n                    <div class=\"col-lg-12 col-md-6 col-sm-6 col-xs-12 no-left-right-padding\">\r\n                      <div class=\"block-label\">\r\n                        HASH RATE\r\n                      </div>\r\n                      <div class=\"block-value\">{{networkInfo?.hashrate / 1000000000 | number:'1.1-1'}} GH/s</div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-md-6 col-sm-6 col-xs-12 no-left-right-padding\" style=\"overflow:hidden;\">\r\n                      <div  class=\"position-top-54-px\">\r\n                      <svg \r\n                      width=\"120px\" height=\"100px\"\r\n                      viewBox=\"5 0 80 60\">\r\n                      <path id=\"wave\" \r\n                          fill=\"none\" \r\n                          stroke=\"#00D7DF\" \r\n                          stroke-width=\"2\"\r\n                          stroke-linecap=\"round\"\r\n                          [attr.d]=\"buildWave(120, 90)\"\r\n                          >\r\n                      </path>\r\n                      </svg>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row hidden-md hidden-sm hidden-xs\" style=\"margin-top: 43px;\">\r\n                <div class=\"col-md-6\">\r\n                  <button class=\"btn home-download-btn\"> Download Current Chain</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <span class=\"block-value\">Source of information</span><br />\r\n                  <a href=\"coinmarketcap.com\">coinmarketcap.com</a>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-9 col-sm-12 col-xs-12\" style=\"min-height: 400px; padding-top: 12px;\">\r\n              <h5 style=\"padding-left: 8px;\">Network Hashrate</h5>\r\n              <div id=\"line_chart\" [chartData]=\"line_ChartData\" [chartOptions]= \"line_ChartOptions\" (ready)=\"hidePlaceholder()\" chartType=\"LineChart\" GoogleChart ></div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-3 col-sm-12 col-xs-12\">\r\n              <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-6\">\r\n                <div class=\"home-box\">\r\n                  <div class=\"block-label\">\r\n                    SYNC STATUS\r\n                  </div>\r\n                  <div class=\"block-value\">{{clientInfo?.syncProgress}} %</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-6\">\r\n                <div class=\"home-box\">\r\n                  <div class=\"block-label\">\r\n                    COIN SUPPLY\r\n                  </div>\r\n                  <div class=\"block-value\">{{networkInfo?.coinSupply}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-6\">\r\n                <div class=\"home-box\">\r\n                  <div class=\"block-label\">\r\n                    BLOCKCHAIN HEIGHT\r\n                  </div>\r\n                  <div class=\"block-value\">{{latestBlocks[0]?.height}}</div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-6\">\r\n                <div class=\"home-box\">\r\n                  <div class=\"block-label\">\r\n                    # OF TRANSACTIONS\r\n                  </div>\r\n                  <div class=\"block-value\">{{networkInfo?.numTransactions}}</div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\" hidden-lg hidden-xs col-sm-12 col-md-12 vcenter\" style=\"margin-top: 43px;\">\r\n              <div class=\"col-md-6 col-sm-6\">\r\n                <button class=\"btn home-download-btn-lg\"> Download</button>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 vcenter\" style=\"padding-left: 30px; padding-top: 12px\">\r\n                <span class=\"block-value\">Source of information</span>\r\n                <a href=\"coinmarketcap.com\">coinmarketcap.com</a>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- BLOCKS & TRANSACTIONS -->\r\n          <div class=\"home-body row\">\r\n\r\n              <div class=\"col-lg-7 col-md-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-7 col-sm-7 col-md-7\" >\r\n                    <h2>Latest Blocks</h2>\r\n                  </div>\r\n                  <div class=\"col-xs-5 col-sm-5 col-md-5 text-right\" style=\"padding-right: 24px;padding-top: 21px;\">\r\n                    <a routerLink=\"/blocks/\">\r\n                      View All\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table latest-blocks-table hidden-xs\">\r\n                  <thead>\r\n                  <tr class=\"blocks-table-header\">\r\n                    <th>HEIGHT</th>\r\n                    <th>AGE</th>\r\n                    <th>TRANSACTIONS</th>\r\n                    <th>TOTAL SENT</th>\r\n                    <th>SIZE (KB)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody *ngIf=\"latestBlocks\" >\r\n                  <tr *ngFor=\"let block of latestBlocks\">\r\n                    <td>\r\n                      <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n                    </td>\r\n                    <td>\r\n                      {{calulateMinutesFromNow(block?.time)}}\r\n                    </td>\r\n                    <td>\r\n                      {{block?.tx?.length}}\r\n                    </td>\r\n                    <td>\r\n                      {{block?.total | number:'1.5-5'}} GAME\r\n                    </td>\r\n                    <td>\r\n                      {{block?.size}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let block of blockArray\">\r\n                    <td>\r\n                      <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n                    </td>\r\n                    <td>\r\n                      {{calulateMinutesFromNow(block?.time)}}\r\n                    </td>\r\n                    <td>\r\n                      {{block?.tx?.length}}\r\n                    </td>\r\n                    <td>\r\n                      {{block?.total | number:'1.5-5'}} GAME\r\n                    </td>\r\n                    <td>\r\n                      {{block?.size}}\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!--SMALL SCREEN BLOCKS-->\r\n                <div class=\"hidden-sm hidden-lg hidden-md panel panel-default panel-block\" *ngIf=\"latestBlocks\" >\r\n                  <div class=\"panel panel-default panel-block\"  *ngFor=\"let block of latestBlocks\">\r\n                    <div class=\"panel-heading\" style=\"\">\r\n                      <p class=\"block-link col-sm-11 col-xs-9 vcenter\">\r\n                        <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\r\n                      </p>\r\n                      <div class=\"panel-rectangle\">\r\n                        <a routerLink=\"{{ '/blocks/' + block.hash}}\">\r\n                        <i class=\"glyphicon glyphicon-chevron-right vcenter\"></i>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                      <div class=\"\">\r\n                        <div class=\"col-xs-4 block-content\" style=\"height: 100%; border-right: 1px solid rgba(123, 147, 166, 0.1) \">\r\n                          <p class=\"block-label\">AGE</p>\r\n                          <p class=\"block-value\"> {{calulateMinutesFromNow(block?.time)}}</p>\r\n                      </div>\r\n                        <div class=\"col-xs-4 block-content\" style=\"height: 100%; border-right: 1px solid rgba(123, 147, 166, 0.1)\">\r\n                          <p class=\"block-label\">TRANS.</p>\r\n                          <p class=\"block-value\"> {{block?.tx?.length}}</p>\r\n\r\n                        </div>\r\n                        <div class=\"col-xs-4 block-content\" style=\"height: 100%\">\r\n                          <p class=\"block-label\">SIZE (KB)</p>\r\n                          <p class=\"block-value\"> {{block?.size}}</p>\r\n\r\n                        </div>\r\n                        <div class=\"col-xs-12 block-content\" style=\"height: 100% ;border-top: 1px solid rgba(123, 147, 166, 0.1)\">\r\n                          <p class=\"block-label\">TOTAL SENT GAME</p>\r\n                          <p class=\"block-value\"> {{block?.total | number:'1.5-5'}} </p>\r\n\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n            <div class=\"col-md-5\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-7 col-sm-7 col-md-7\" >\r\n                  <h2>Latest Transactions</h2>\r\n                </div>\r\n                <div class=\"col-xs-5 col-sm-5 col-md-5 text-right\" style=\"padding-right: 24px;padding-top: 21px;\">\r\n                  <a routerLink=\"/transactions/\">\r\n                    View All\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <!--TODO@luka: replace this with transactions table-->\r\n              <table class=\"table latest-blocks-table \">\r\n                <thead>\r\n                <tr class=\"blocks-table-header\">\r\n                  <th>TRANSACTION ID</th>\r\n                  <th>GAME</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody *ngIf=\"latestTransactions\" >\r\n                <tr *ngFor=\"let trans of latestTransactions\">\r\n                  <td >\r\n                    <a routerLink=\"{{ '/transactions/' + trans.txid}}\">{{trans?.txid.substring(0,15)}}..</a>\r\n                  </td>\r\n                  <td>\r\n                    {{trans?.total | number:'1.5-5'}} GAME\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/homePage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homePage_service__ = __webpack_require__("../../../../../src/app/pages/home/homePage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__ = __webpack_require__("../../../../../src/app/pages/socket/socket.service.ts");
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
        this.latestTransactions = [];
        this.networkInfo = [];
        this.bootstrapLink = [];
        this.clientInfo = [];
        this.data = {};
        this.showPlaceholder = true;
        this.line_ChartData = [];
        this.tempLineChartData = [];
        this.line_ChartOptions = {
            curveType: 'function',
            height: 400,
            vAxis: { baselineColor: '#CCCCCC', gridlines: { count: 13, color: '#2d3c49', opacity: 0.13 }, textStyle: { color: '#808080' } },
            hAxis: { format: 'd. MMM', baselineColor: '#0a0a0a', gridlines: { count: 10, color: '#1d2e3b', opacity: 0.13 }, minorGridlines: { color: 'red' }, textStyle: { color: '#808080' } },
            chartArea: { left: 40, top: 20, width: '95%', height: '80%' },
            backgroundColor: '#1d2e3b',
            yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    color: 'red'
                }],
            colors: ['#dddddd'],
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
        this.homePageService.getLatestTransactions().subscribe(function (resp) {
            (_a = _this.latestTransactions).push.apply(_a, resp);
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
                _this.line_ChartData = _this.tempLineChartData;
            }
            _this.line_ChartData = _this.tempLineChartData; // Change dependant vaulue only once ( so we dont trriger onChange in directive multiple times)
        });
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    HomePageComponent.prototype.onResize = function () {
        var _this = this;
        this.homePageService.getHashrates().subscribe(function (resp) {
            _this.tempLineChartData.push(['Date', 'Network Hashrate']);
            _this.line_ChartData = [];
            for (var index = 0; index < resp.length - 12; ++index) {
                _this.tempLineChartData.push([new Date(resp[index].timestamp * 1000), resp[index].hashrate / 1000000000]);
                _this.line_ChartData = _this.tempLineChartData;
            }
            // Change dependant vaulue only once ( so we dont trriger onChange in directive multiple times)
        });
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
    HomePageComponent.prototype.buildWave = function (w, h) {
        var pathData;
        var a = h / 4;
        var y = h / 2;
        var m = 0.512286623256592433;
        return pathData = ['M', w * 0, y + a / 2, 'c', a * m, 0, -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a].join(' ');
        // path.setAttribute('d', pathData);
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
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-home',
        template: __webpack_require__("../../../../../src/app/pages/home/homePage.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__["a" /* BlockSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__homePage_service__["a" /* HomePageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__homePage_service__["a" /* HomePageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__["a" /* BlockSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_pages_socket_socket_service__["a" /* BlockSocketService */]) === "function" && _c || Object])
], HomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=homePage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/homePage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var url = this.baseApiUrl + 'blocks/latest?limit=8';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getLatestTransactions = function () {
        var _this = this;
        var url = this.baseApiUrl + 'transactions/latest?limit=8';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getBlockHashByHeight = function (param) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks?height=' + param;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomePageService);

var _a;
//# sourceMappingURL=homePage.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-wrap\">\r\n\r\n      <div class=\"bottom-border border-right footer-info no-padding col-sm-12 col-lg-8 col-xs-12\">\r\n        <div class=\"gc-info col-sm-6 col-xs-12 col-lg-9\">\r\n          <div class=\"col-sm-12 col-xs-12 logo\">\r\n            <a class=\"header-logo\" href=\"#\">\r\n              <img src=\"../../../assets/images/icn_game@2x.png\" alt=\"\" height=\"23.61\">\r\n              Gamecredits</a>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-6 col-lg-10 col-md-6 footer-info no-padding\">\r\n            <h2>New to GameCredits?</h2>\r\n            <p>GameCredits is creating a new payment gateway for the gaming industry.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"footer-links col-xs-12 col-sm-6 col-lg-3 col-md-6 footer-info no-padding\">\r\n          <h2>Links</h2>\r\n          <ul class=\"col-xs-6 col-sm-6 col-md-6 col-lg-12\">\r\n            <li><a routerLink=\"/blocks\">Blocks</a></li>\r\n            <li><a routerLink=\"/allTransactions\">Transactions</a></li>\r\n            <li><a routerLink=\"/network\">Network</a></li>\r\n          </ul>\r\n          <ul class=\"col-xs-6 col-sm-6 col-md-6 col-lg-12\">\r\n            <li><a href=\"https://blockexplorer.gamecredits.com/api/ui\">API</a></li>\r\n            <li><a href=\"https://gamecredits.com\">Gamecredits</a></li>\r\n            <li><a href=\"https://gamecredits.com/blog\">Blog</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-xs-12 col-sm-12 footer-info col-lg-4\">\r\n        <div class=\"padding-large cosl-xs-12 col-sm-6 col-lg-12\">\r\n          <h1>\r\n            Interested in more news about Gamecredits?\r\n          </h1>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-lg-12 padding-large\">\r\n          <button class=\"btn custom-btn \">\r\n            Visit our blog\r\n          </button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_service__ = __webpack_require__("../../../../../src/app/pages/layout/footer/footer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__ = __webpack_require__("../../../../../src/app/pages/socket/socket.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-footer',
        template: __webpack_require__("../../../../../src/app/pages/layout/footer/footer.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__footer_service__["a" /* FooterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__footer_service__["a" /* FooterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_pages_socket_socket_service__["b" /* TxSocketService */]) === "function" && _b || Object])
], FooterComponent);

var _a, _b;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/layout/footer/footer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FooterService);

var _a;
//# sourceMappingURL=footer.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header col-sm-12\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-10  vcenter\" style=\"width:255px;\">\r\n          <i class=\"toggler glyphicon glyphicon-menu-hamburger\"\r\n             data-toggle=\"collapse\" data-target=\".bs-example-navbar-collapse-1\">\r\n          </i>\r\n          <a class=\"header-logo\" href=\"#\">\r\n            <img src=\"../../../assets/images/icn_game@2x.png\" alt=\"\" height=\"23.61\">\r\n            Block Explorer</a>\r\n        </div>\r\n        <div class=\"hidden-xs hidden-sm col-md-6 search-header vcenter md-border-left\">\r\n          <i class=\"glyphicon glyphicon-search\"></i>\r\n          <input #search type=\"text\" placeholder=\"Search by blockhash...\" (keyup.enter)=\"onSearch(search.value)\" style=\"width: 400px\"/>\r\n        </div>\r\n        <div class=\"col-md-2 col-sm-8 col-lg-3 vcenter text-right\">\r\n          <div data-toggle=\"collapse\" data-target=\".bs-example-navbar-collapse-1\"\r\n               class=\"custom-x collapse bs-example-navbar-collapse-1\">\r\n            X\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n  <!-- Collect the nav links, forms, and other content for toggling -->\r\n</nav>\r\n<div class=\"collapse navbar-collapsed bs-example-navbar-collapse-1\">\r\n  <ul class=\"header-custom-nav\">\r\n    <li><a routerLink=\"/home\">Home</a></li>\r\n    <li><a routerLink=\"/blocks\">Blocks</a></li>\r\n    <li><a routerLink=\"/allTransactions\">Transactions</a></li>\r\n    <li><a routerLink=\"/network\">Network</a></li>\r\n    <li><a href=\"https://blockexplorer.gamecredits.com/api/ui\">API</a></li>\r\n  </ul>\r\n</div><!-- /.navbar-collapse -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_homePage_service__ = __webpack_require__("../../../../../src/app/pages/home/homePage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(homePageService, router) {
        this.homePageService = homePageService;
        this.router = router;
    }
    HeaderComponent.prototype.onSearch = function (param) {
        var _this = this;
        this.homePageService.getSearchItemType(param).subscribe(function (resp) {
            if (resp.type == 'block') {
                // check if search param is integer
                if (!isNaN(resp.searchBy)) {
                    _this.homePageService.getBlockHashByHeight(resp.searchBy).subscribe(function (data) {
                        _this.router.navigateByUrl('blocks/' + data['hash']);
                    });
                }
                else {
                    _this.router.navigateByUrl('blocks/' + resp.searchBy);
                }
            }
            else if (resp.type == 'address') {
                _this.router.navigateByUrl('addresses/' + resp.searchBy);
                // console.log(resp.searchBy);
            }
            else if (resp.type == 'transaction') {
                _this.router.navigateByUrl('transactions/' + resp.searchBy);
            }
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-header',
        template: __webpack_require__("../../../../../src/app/pages/layout/header/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_homePage_service__["a" /* HomePageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_homePage_service__["a" /* HomePageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/network/networkPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-banner block-header\">\r\n  <div class=\"container network\">\r\n    <div class=\"network-header\">\r\n      <div class=\"col-md-7\">\r\n        <div class=\"row\">\r\n          <h1 class=\" padding15pxsides padding15pxtop\">\r\n            addnode = 148.251.15.209:40002\r\n          </h1>\r\n        </div>\r\n\r\n        <h4>\r\n          Block Explorer\r\n        </h4>\r\n\r\n\r\n      </div>\r\n      <div class=\"row text-center col-md-5\">\r\n\r\n        <div class=\"row\">\r\n          <h2 class=\"pull-left padding15pxsides padding15pxtop\">\r\n            Map of explorer connections\r\n          </h2>\r\n        </div>\r\n        <div class=\"row padding15pxsides\">\r\n          <p align=\"left\">\r\n\r\n            This maps shows live full nodes that are connected to the\r\n            Block Explorer. These are NOT all live nodes, only the ones\r\n            that the Explorer client is “talking to” at the moment.\r\n\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    </div>\r\n\r\n\r\n\t<!--<div class=\"row text-center\">-->\r\n\t\t<!--<div class=\"col-md-4\">-->\r\n\t\t\t<!--<div class=\"row padding15pxsides\">-->\r\n\t\t\t\t<!--<table class=\"table peers-table\">-->\r\n\t\t\t\t\t<!--<tr >-->\r\n\t\t\t\t\t\t<!--<th class=\"no-border-top\">-->\r\n\t\t\t\t\t\t\t<!--Node-->\r\n\t\t\t\t\t\t<!--</th>-->\r\n\t\t\t\t\t\t<!--<th class=\"no-border-top\">-->\r\n\t\t\t\t\t\t\t<!--Version-->\r\n\t\t\t\t\t\t<!--</th>-->\r\n\t\t\t\t\t<!--</tr>-->\r\n\t\t\t\t\t<!--<tr *ngFor=\"let peer of peersToShow\">-->\r\n\t\t\t\t\t\t<!--<td>-->\r\n\t\t\t\t\t\t\t<!--<span class=\"pull-left\">{{peer?.addr}}</span>-->\r\n\t\t\t\t\t\t<!--</td>-->\r\n\t\t\t\t\t\t<!--<td>-->\r\n\t\t\t\t\t\t\t<!--<span class=\"pull-left\">{{peer?.subver}}</span>-->\r\n\t\t\t\t\t\t<!--</td>-->\r\n\t\t\t\t\t<!--</tr>-->\r\n\t\t\t\t<!--</table>-->\r\n\t\t\t\t<!--<span *ngIf=\"showButton\" (click)=\"showAll()\" class=\"all-peers-button\"> <b> Show all peers </b> </span>-->\r\n \t\t\t<!--</div>-->\r\n\t\t<!--</div>-->\r\n\t\t<!--<div class=\"col-md-8 no-padding\">-->\r\n\t\t\t<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" class=\"map\">\r\n\t\t\t<div *ngFor=\"let peer of clientInfo?.peerInfo\">\r\n\t\t\t  <sebm-google-map-marker [latitude]=\"peer.latitude\" [longitude]=\"peer.longitude\" >\r\n\r\n        </sebm-google-map-marker>\r\n\t\t\t</div>\r\n\t\t\t</sebm-google-map>\r\n\t\t<!--</div>-->\r\n\t<!--</div>-->\r\n\t<!--<div class=\"row last-row text-for-network padding15pxsides\">-->\r\n\t<!--<p>-->\r\n\t\t<!--* If syncing of your client takes a long time you can add a node manually and it may speed up the syncing process. In order to do that start your client from the command line with the -<i>addnode=148.251.15.209:40002</i> parameter or you can add that parameter to the gamecredits.conf file in your data directory.-->\r\n<!--For more info read this article about running Bitcoin, all the same rules apply to GameCredits: <a href=\"https://en.bitcoin.it/wiki/Running_Bitcoin\">https://en.bitcoin.it/wiki/Running_Bitcoin</a>-->\r\n\t<!--</p>-->\r\n\t<!--</div>-->\r\n\r\n  <div class=\"container network\">\r\n    <table class=\"table latest-blocks-table hidden-xs text-center\">\r\n      <thead>\r\n      <tr class=\"blocks-table-header\">\r\n        <th></th>\r\n        <th>NODE</th>\r\n        <th></th>\r\n        <th>VERSION</th>\r\n        <th></th>\r\n      </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n      <tr *ngFor=\"let peer of peersToShow\">\r\n        <td></td>\r\n        <td>\r\n          {{peer?.addr}}\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n          {{peer?.subver}}\r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row one-card hidden-sm hidden-md hidden-lg\" *ngFor=\"let peer of peersToShow\" style=\"border-bottom: 1px solid rgba(123, 147, 166, 0.1)\">\r\n      <table class=\"table one-card-table transactions-card-table\">\r\n        <tr >\r\n          <td class=\"\" style=\"padding-top:30px\">\r\n            NODE <br>\r\n            <span class=\"block-value\">{{peer?.addr}}</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"\">\r\n            VERSION  <br>\r\n           <span class=\"block-value\">{{peer?.subver}}</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/network/networkPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networkPage_service__ = __webpack_require__("../../../../../src/app/pages/network/networkPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-network',
        template: __webpack_require__("../../../../../src/app/pages/network/networkPage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__networkPage_service__["a" /* NetworkPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__networkPage_service__["a" /* NetworkPageService */]) === "function" && _a || Object])
], NetworkPageComponent);

var _a;
//# sourceMappingURL=networkPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/network/networkPage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NetworkPageService);

var _a;
//# sourceMappingURL=networkPage.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/socket/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSocketService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TxSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TxSocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/transactions/transactionsPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" page-banner block-header\">\r\n  <div class=\"container\">\r\n    <div class=\"\">\r\n      <div class=\"col-xs-12 col-lg-5 col-md-6 col-sm-6 border-right sm-border block-address-wrap\">\r\n        <h1 class=\"block-title\">\r\n          Transaction\r\n        </h1>\r\n        <p class=\"address\">\r\n          {{transaction?.blockhash}}\r\n        </p>\r\n      </div>\r\n      <div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-12 qr-code sm-border\">\r\n        <ngx-qrcode [qrc-element-type]=\"'url'\" [qrc-value] = \"currentLocation\">\r\n        </ngx-qrcode>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-summary md-border-top\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n          <h5>Summary</h5>\r\n          <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-12\">\r\n            <div class=\"row block-label\">Blockhash</div>\r\n            <div class=\"row block-value\">{{transaction?.blockhash}}</div>\r\n            <div class=\"row block-value\"><br /></div>\r\n          </div>\r\n          <div class=\"col-md-1 col-sm-1 hidden-xs\"></div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-10\">\r\n            <div class=\"row block-label\">Blocktime:</div>\r\n            <div class=\"row block-value\">{{ ( transaction?.blocktime * 1000 )  | date:'medium'}}</div>\r\n          </div>\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-2\" >\r\n            <div class=\"row block-label\">Version</div>\r\n            <div class=\"row block-value\">{{transaction?.version}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"blocks-wrapper\">\r\n  <div class=\"container address-transactions\">\r\n    <div class=\"\">\r\n      <div class=\"col-xs-12 block-transactions\">\r\n\r\n          <div class=\"panel panel-default panel-block\" style=\"margin-top:64px;\">\r\n\r\n            <div class=\"panel-body\">\r\n              <div class=\"\">\r\n                <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-content\" style=\"height: 100%\">\r\n                  <p class=\"block-label\">Inputs</p>\r\n                  <ul class=\"list-unstyled\">\r\n\r\n                    <li *ngFor=\"let input of transaction?.vin\" >\r\n                      <div *ngIf=\"input.prev_txid\">\r\n                        <p class=\"block-link\">\r\n                          <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\" class=\"hidden-xs\" >\r\n                            {{input.prev_txid}}\r\n                          </a>\r\n                          <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\" class=\"hidden-sm hidden-md hidden-lg\" >\r\n                            {{input.prev_txid.substring(0,10)}}...{{input.prev_txid.substring(55,64)}}\r\n                          </a>\r\n                        </p>\r\n                      </div>\r\n                      <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\r\n                    </li>\r\n\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 md-border-left block-content md-border-top\">\r\n                  <p class=\"block-label\">Outputs</p>\r\n                  <ul class=\"list-unstyled\">\r\n\r\n                    <li *ngFor=\" let output of transaction?.vout \">\r\n\r\n                      <div class=\"col-md-8 col-sm-8 col-xs-12\" style=\"padding: 0\" *ngFor=\"let adress of output?.addresses\">\r\n                        <a routerLink=\"{{'/addresses/'+ adress}}\" class=\"hidden-xs\">\r\n                          {{adress}}\r\n                        </a>\r\n                        <a routerLink=\"{{'/addresses/'+ adress}}\" class=\"hidden-sm hidden-md hidden-lg\" >\r\n                          {{adress.substring(0,10)}}...{{adress.substring(23,64)}}\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-md-4 col-sm-4 col-xs-12 block-value\" style=\"padding: 0\">\r\n                        {{output.value | number:'1.5-5'}} GAME\r\n                      </div>\r\n\r\n                      <Br> <br>\r\n                    </li>\r\n\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <div class=\"col-md-4 col-xs-12 xs-text-left\">\r\n                <span class=\"block-label\">Confirmations:</span>\r\n                <span class=\"block-value\">{{confirmations}}</span>\r\n              </div>\r\n              <div class=\"col-md-4 col-xs-12 text-center xs-text-left\">\r\n                <span class=\"block-label\">Status:</span>\r\n                <span class=\"block-value\" *ngIf=\" confirmations > 6\">Complete</span>\r\n                <!--TODO@luka check status names-->\r\n                <span class=\"block-value\" *ngIf=\" confirmations < 7\">UnComplete</span>\r\n              </div>\r\n              <div class=\"col-md-4 col-xs-12 text-right xs-text-left\">\r\n                <span class=\"block-label\">Total Sent:</span> <span class=\"block-value\">{{transaction?.total | number:'1.5-5'}} GAME</span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/transactions/transactionsPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__ = __webpack_require__("../../../../../src/app/pages/transactions/transactionsPage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
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
        this.currentLocation = "www.blockexplorer.gamecredits.com";
    }
    TransactionsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentLocation = window.location.href;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-transactions',
        template: __webpack_require__("../../../../../src/app/pages/transactions/transactionsPage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__["a" /* TransactionsPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__["a" /* TransactionsPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TransactionsPageComponent);

var _a, _b;
//# sourceMappingURL=transactionsPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/transactions/transactionsPage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TransactionsPageService);

var _a;
//# sourceMappingURL=transactionsPage.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map