(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.ts":
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ "./src/app/pages/page-home/page-home.component.ts");
/* harmony import */ var _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-movie-list/page-movie-list.component */ "./src/app/pages/page-movie-list/page-movie-list.component.ts");
/* harmony import */ var _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-contact/page-contact.component */ "./src/app/pages/page-contact/page-contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-movie-profile/page-movie-profile.component */ "./src/app/pages/page-movie-profile/page-movie-profile.component.ts");





var routes = [
    {
        path: '',
        component: _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__["PageHomeComponent"]
    },
    {
        path: 'movies',
        children: [
            {
                path: '',
                component: _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_1__["PageMovieListComponent"]
            },
            {
                path: ':id',
                component: _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_4__["PageMovieProfileComponent"]
            }
        ]
    },
    {
        path: 'contact',
        component: _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_2__["PageContactComponent"]
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], {
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movie-list-item/movie-list-item.component */ "./src/app/components/movie-list-item/movie-list-item.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ "./src/app/pages/page-home/page-home.component.ts");
/* harmony import */ var _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-movie-list/page-movie-list.component */ "./src/app/pages/page-movie-list/page-movie-list.component.ts");
/* harmony import */ var _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-contact/page-contact.component */ "./src/app/pages/page-contact/page-contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-movie-profile/page-movie-profile.component */ "./src/app/pages/page-movie-profile/page-movie-profile.component.ts");
/* harmony import */ var _directives_jumbotron_jumbotron_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/jumbotron/jumbotron.directive */ "./src/app/directives/jumbotron/jumbotron.directive.ts");
/* harmony import */ var _directives_hide_me_hide_me_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/hide-me/hide-me.directive */ "./src/app/directives/hide-me/hide-me.directive.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_9__["PageHomeComponent"],
                _directives_jumbotron_jumbotron_directive__WEBPACK_IMPORTED_MODULE_14__["JumbotronDirective"],
                _directives_hide_me_hide_me_directive__WEBPACK_IMPORTED_MODULE_15__["HideMeDirective"],
                _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_10__["PageMovieListComponent"],
                _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_11__["PageContactComponent"],
                _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"],
                _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_7__["MovieListItemComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_13__["PageMovieProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div appJumbotron>\n  <h1>Movies</h1>\n</div>\n<app-menu></app-menu>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movies';
        // debugger;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"nav\">\n    <li>\n      <a\n        class=\"btn btn-default mr-1\"\n        routerLink=\"/\"\n        routerLinkActive=\"btn-primary\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n      >\n      Strona główna\n      </a>\n    </li>\n    <li>\n      <a class=\"btn btn-default mr-1\" routerLink=\"/movies\" routerLinkActive=\"btn-primary\" [routerLinkActiveOptions]=\"{ exact: true }\">Filmy</a>\n    </li>\n    <li>\n      <a class=\"btn btn-default mr-1\" routerLink=\"/contact\" routerLinkActive=\"btn-primary\" [routerLinkActiveOptions]=\"{ exact: true }\">Kontakt</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-list-item/movie-list-item.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/movie-list-item/movie-list-item.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    width: 320px;\r\n}\r\n\r\n:host img {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0LWl0ZW0vbW92aWUtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0LWl0ZW0vbW92aWUtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbjpob3N0IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/movie-list-item/movie-list-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/movie-list-item/movie-list-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img [src]=\"movie?.thumb_url\" class=\"card-img-top\" alt=\"...\" (click)=\"redirectMovieProfile()\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ movie?.title }}</h5>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movie-list-item/movie-list-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/movie-list-item/movie-list-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: MovieListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListItemComponent", function() { return MovieListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MovieListItemComponent = /** @class */ (function () {
    function MovieListItemComponent(router) {
        this.router = router;
        this.movie = null;
    }
    MovieListItemComponent.prototype.ngOnInit = function () {
    };
    MovieListItemComponent.prototype.redirectMovieProfile = function () {
        this.router.navigateByUrl('/movies/' + this.movie.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieListItemComponent.prototype, "movie", void 0);
    MovieListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-item',
            template: __webpack_require__(/*! ./movie-list-item.component.html */ "./src/app/components/movie-list-item/movie-list-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-item.component.css */ "./src/app/components/movie-list-item/movie-list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MovieListItemComponent);
    return MovieListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap\">\n  <app-movie-list-item *ngFor=\"let item of movies\" [movie]=\"item\"></app-movie-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent() {
        this.movies = null;
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieListComponent.prototype, "movies", void 0);
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/components/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/components/movie-list/movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/directives/hide-me/hide-me.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/hide-me/hide-me.directive.ts ***!
  \*********************************************************/
/*! exports provided: HideMeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideMeDirective", function() { return HideMeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HideMeDirective = /** @class */ (function () {
    function HideMeDirective($element, renderer) {
        this.$element = $element;
        this.renderer = renderer;
        this.appHideMe = null;
    }
    HideMeDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log("time: " + this.appHideMe);
        this.renderer.listen(this.$element.nativeElement, "click", function () {
            _this.remove();
        });
    };
    HideMeDirective.prototype.remove = function () {
        var _this = this;
        setTimeout(function () {
            _this.$element.nativeElement.remove();
        }, this.appHideMe * 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HideMeDirective.prototype, "appHideMe", void 0);
    HideMeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHideMe]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HideMeDirective);
    return HideMeDirective;
}());



/***/ }),

/***/ "./src/app/directives/jumbotron/jumbotron.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/jumbotron/jumbotron.directive.ts ***!
  \*************************************************************/
/*! exports provided: JumbotronDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronDirective", function() { return JumbotronDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JumbotronDirective = /** @class */ (function () {
    function JumbotronDirective($element) {
        this.$element = $element;
    }
    JumbotronDirective.prototype.ngOnInit = function () {
        this.$element.nativeElement.classList.add('jumbotron');
    };
    JumbotronDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appJumbotron]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], JumbotronDirective);
    return JumbotronDirective;
}());



/***/ }),

/***/ "./src/app/pages/page-contact/page-contact.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-contact/page-contact.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtY29udGFjdC9wYWdlLWNvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-contact/page-contact.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-contact/page-contact.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-contact/page-contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-contact/page-contact.component.ts ***!
  \**************************************************************/
/*! exports provided: PageContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContactComponent", function() { return PageContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageContactComponent = /** @class */ (function () {
    function PageContactComponent() {
    }
    PageContactComponent.prototype.ngOnInit = function () {
    };
    PageContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-contact',
            template: __webpack_require__(/*! ./page-contact.component.html */ "./src/app/pages/page-contact/page-contact.component.html"),
            styles: [__webpack_require__(/*! ./page-contact.component.css */ "./src/app/pages/page-contact/page-contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageContactComponent);
    return PageContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-home/page-home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtaG9tZS9wYWdlLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-home/page-home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movie-list [movies]=\"movies\"></app-movie-list>\n"

/***/ }),

/***/ "./src/app/pages/page-home/page-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.ts ***!
  \********************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");



var PageHomeComponent = /** @class */ (function () {
    function PageHomeComponent(moviesService) {
        this.moviesService = moviesService;
        this.movies = null;
    }
    PageHomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.moviesService.fetchMovies()];
                    case 1:
                        _a.movies = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageHomeComponent.prototype.addNumbers = function (a, b) {
        if (typeof (a) !== 'number') {
            return null;
        }
        if (typeof (b) !== 'number') {
            return null;
        }
        return a + b;
    };
    PageHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-home',
            template: __webpack_require__(/*! ./page-home.component.html */ "./src/app/pages/page-home/page-home.component.html"),
            styles: [__webpack_require__(/*! ./page-home.component.css */ "./src/app/pages/page-home/page-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], PageHomeComponent);
    return PageHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-movie-list/page-movie-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/page-movie-list/page-movie-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtbW92aWUtbGlzdC9wYWdlLW1vdmllLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-movie-list/page-movie-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/page-movie-list/page-movie-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-movie-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-movie-list/page-movie-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-movie-list/page-movie-list.component.ts ***!
  \********************************************************************/
/*! exports provided: PageMovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMovieListComponent", function() { return PageMovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageMovieListComponent = /** @class */ (function () {
    function PageMovieListComponent() {
    }
    PageMovieListComponent.prototype.ngOnInit = function () {
    };
    PageMovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-movie-list',
            template: __webpack_require__(/*! ./page-movie-list.component.html */ "./src/app/pages/page-movie-list/page-movie-list.component.html"),
            styles: [__webpack_require__(/*! ./page-movie-list.component.css */ "./src/app/pages/page-movie-list/page-movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageMovieListComponent);
    return PageMovieListComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-movie-profile/page-movie-profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/page-movie-profile/page-movie-profile.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtbW92aWUtcHJvZmlsZS9wYWdlLW1vdmllLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-movie-profile/page-movie-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-movie-profile/page-movie-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"movie\">\n  <img\n    [src]=\"movie.thumb_url\"\n    [alt]=\"movie.title\"\n  >\n\n  <h2>{{ movie.title }}</h2>\n\n  <p>{{ movie.description }}</p>\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/pages/page-movie-profile/page-movie-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/page-movie-profile/page-movie-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: PageMovieProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMovieProfileComponent", function() { return PageMovieProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageMovieProfileComponent = /** @class */ (function () {
    function PageMovieProfileComponent(moviesService, route) {
        this.moviesService = moviesService;
        this.route = route;
        this.movie = null;
    }
    PageMovieProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var movieId, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        movieId = this.route.snapshot.params.id;
                        _a = this;
                        return [4 /*yield*/, this.moviesService.fetchMovieById(movieId)];
                    case 1:
                        _a.movie = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageMovieProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-movie-profile',
            template: __webpack_require__(/*! ./page-movie-profile.component.html */ "./src/app/pages/page-movie-profile/page-movie-profile.component.html"),
            styles: [__webpack_require__(/*! ./page-movie-profile.component.css */ "./src/app/pages/page-movie-profile/page-movie-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageMovieProfileComponent);
    return PageMovieProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nie znaleziono strony\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
    }
    MoviesService.prototype.fetchMovies = function () {
        return this.http.get('/assets/movies.json').toPromise();
    };
    MoviesService.prototype.fetchMovieById = function (movieId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var movies;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchMovies()];
                    case 1:
                        movies = _a.sent();
                        return [2 /*return*/, movies.find(function (movie) { return movie.id === movieId; })];
                }
            });
        });
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\projekt\movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map