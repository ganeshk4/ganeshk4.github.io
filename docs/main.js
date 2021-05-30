(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var src_app_components_game_config_game_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/game-config/game-config.component */ "./src/app/components/game-config/game-config.component.ts");
/* harmony import */ var src_app_components_game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [{
        path: '',
        pathMatch: 'full',
        component: src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
        path: 'two-player',
        component: src_app_components_game_config_game_config_component__WEBPACK_IMPORTED_MODULE_0__["GameConfigComponent"]
    }, {
        path: 'game',
        component: src_app_components_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'connect-four';
    }
    btnClick() {
        this.router.navigate(['/two-player']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_custom_btn_custom_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/custom-btn/custom-btn.component */ "./src/app/components/custom-btn/custom-btn.component.ts");
/* harmony import */ var _components_game_config_game_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game-config/game-config.component */ "./src/app/components/game-config/game-config.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_modal_option_select_option_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modal/option-select/option-select.component */ "./src/app/components/modal/option-select/option-select.component.ts");
/* harmony import */ var _service_state_manager_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/state-manager.service */ "./src/app/service/state-manager.service.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_state_manager_service__WEBPACK_IMPORTED_MODULE_13__["StateManagerService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_custom_btn_custom_btn_component__WEBPACK_IMPORTED_MODULE_8__["CustomBtnComponent"],
        _components_game_config_game_config_component__WEBPACK_IMPORTED_MODULE_9__["GameConfigComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _components_modal_option_select_option_select_component__WEBPACK_IMPORTED_MODULE_12__["OptionSelectComponent"],
        _components_game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_custom_btn_custom_btn_component__WEBPACK_IMPORTED_MODULE_8__["CustomBtnComponent"],
                    _components_game_config_game_config_component__WEBPACK_IMPORTED_MODULE_9__["GameConfigComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _components_modal_option_select_option_select_component__WEBPACK_IMPORTED_MODULE_12__["OptionSelectComponent"],
                    _components_game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                providers: [_service_state_manager_service__WEBPACK_IMPORTED_MODULE_13__["StateManagerService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/custom-btn/custom-btn.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/custom-btn/custom-btn.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBtnComponent", function() { return CustomBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class CustomBtnComponent {
    constructor() {
        this.colorClass = 'bg-blue-one';
    }
    ngOnInit() {
    }
}
CustomBtnComponent.ɵfac = function CustomBtnComponent_Factory(t) { return new (t || CustomBtnComponent)(); };
CustomBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomBtnComponent, selectors: [["app-custom-btn"]], inputs: { text: "text", bgClass: "bgClass", colorClass: "colorClass" }, decls: 4, vars: 3, consts: [[1, "custom-btn", 3, "ngClass"], [1, "btn-icon", 3, "ngClass"], [1, "btn-text"]], template: function CustomBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colorClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bgClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".custom-btn[_ngcontent-%COMP%] {\n  display: flex;\n  width: 240px;\n  height: 60px;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.custom-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  background-position: center;\n  background-size: 50%;\n}\n.custom-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  width: calc(100% - 60px);\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tYnRuL2N1c3RvbS1idG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWJ0bi9jdXN0b20tYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAuYnRuLWljb24ge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxuICB9XHJcbiAgLmJ0bi10ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-btn',
                templateUrl: './custom-btn.component.html',
                styleUrls: ['./custom-btn.component.scss']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bgClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/game-config/game-config.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-config/game-config.component.ts ***!
  \*****************************************************************/
/*! exports provided: GameConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConfigComponent", function() { return GameConfigComponent; });
/* harmony import */ var src_app_components_modal_option_select_option_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/modal/option-select/option-select.component */ "./src/app/components/modal/option-select/option-select.component.ts");
/* harmony import */ var src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/state-manager.service */ "./src/app/service/state-manager.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class GameConfigComponent {
    constructor(dialog, router, service, formBuilder) {
        this.dialog = dialog;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.selectedNumberOfGames = src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["numberOfGames"][src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["EnumNumberOfGames"].TWO];
        this.selectedwhoStarts = src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["whoStarts"][src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["EnumWhoStarts"].ALTERNATE];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            firstPlayerName: ['David'],
            secondPlayerName: ['Maria'],
            numberOfGames: [src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["EnumNumberOfGames"].TWO],
            whoStarts: [src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["EnumWhoStarts"].ALTERNATE],
        });
    }
    openTurnModal() {
        const dialogRef = this.dialog.open(src_app_components_modal_option_select_option_select_component__WEBPACK_IMPORTED_MODULE_0__["OptionSelectComponent"], {
            width: '450px',
            data: { selection: this.form.getRawValue().whoStarts, options: src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["whoStarts"], title: 'Who Starts' }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.form.controls['whoStarts'].setValue(result);
                this.selectedwhoStarts = src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["whoStarts"][result];
            }
        });
    }
    openGameNumbersModal() {
        const dialogRef = this.dialog.open(src_app_components_modal_option_select_option_select_component__WEBPACK_IMPORTED_MODULE_0__["OptionSelectComponent"], {
            width: '450px',
            data: { selection: this.form.getRawValue().numberOfGames, options: src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["numberOfGames"], title: 'Number Of Game' }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.form.controls['numberOfGames'].setValue(result);
                this.selectedNumberOfGames = src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["numberOfGames"][result];
            }
        });
    }
    start() {
        this.service.config = this.form.getRawValue();
        this.router.navigate(['/game']);
    }
}
GameConfigComponent.ɵfac = function GameConfigComponent_Factory(t) { return new (t || GameConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["StateManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
GameConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GameConfigComponent, selectors: [["app-game-config"]], decls: 37, vars: 3, consts: [[1, "container"], [1, "panel-white", 3, "formGroup"], [1, "setting", "setting-player1"], [1, "setting-icon-border"], [1, "setting-icon"], [1, "setting-desc"], [1, "info"], [1, "selection"], ["formControlName", "firstPlayerName", "type", "text"], [1, "setting", "setting-player2"], ["formControlName", "secondPlayerName", "type", "text"], [1, "setting", "setting-gamenumber", 3, "click"], [1, "setting", "setting-turn", 3, "click"], [1, "separator"], [1, "start-btn", 3, "click"]], template: function GameConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Player 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Player 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameConfigComponent_Template_div_click_18_listener() { return ctx.openGameNumbersModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Number of Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameConfigComponent_Template_div_click_26_listener() { return ctx.openTurnModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Who starts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameConfigComponent_Template_div_click_35_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Start Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedNumberOfGames);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedwhoStarts);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]], styles: [".bg-blue-one[_ngcontent-%COMP%] {\n  background-color: #4BABFF;\n}\n\n.bg-blue-two[_ngcontent-%COMP%] {\n  background-color: #4B7BFF;\n}\n\n.bg-blue-three[_ngcontent-%COMP%] {\n  background-color: #4B4BFF;\n}\n\n.bg-purple-one[_ngcontent-%COMP%] {\n  background-color: #6E4BFF;\n}\n\n.panel-white[_ngcontent-%COMP%] {\n  width: 600px;\n  border: 1px solid #F7F7F7;\n  border-radius: 30px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 10px #00000029;\n  z-index: 1;\n  padding: 30px;\n}\n\n.start-btn[_ngcontent-%COMP%] {\n  background-color: #4B7BFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  color: #fff;\n  margin-top: 15px;\n  padding: 15px;\n  cursor: pointer;\n}\n\n.setting[_ngcontent-%COMP%] {\n  border: 1px solid #70707026;\n  padding: 5px;\n  display: flex;\n  border-radius: 10px;\n  margin: 15px 0;\n}\n\n.setting[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%] {\n  border: 10px solid #222;\n  border-radius: 50%;\n  height: 70px;\n  width: 70px;\n}\n\n.setting[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  background-size: 74%;\n  background-position: center;\n}\n\n.setting[_ngcontent-%COMP%]   .setting-desc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 80px);\n  justify-content: space-around;\n  padding-left: 10px;\n}\n\n.setting[_ngcontent-%COMP%]   .setting-desc[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  color: #424242;\n  opacity: 0.56;\n  margin-bottom: 10px;\n}\n\n.setting[_ngcontent-%COMP%]   .setting-desc[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #949494;\n}\n\n.setting[_ngcontent-%COMP%]   .setting-desc[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  width: 100%;\n  font-size: 18px;\n  border: none;\n  background-color: transparent;\n}\n\n.setting-player1[_ngcontent-%COMP%] {\n  background: #DCF6E4;\n}\n\n.setting-player1[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%] {\n  border-color: #37AC5D;\n}\n\n.setting-player1[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/avatar01.png\");\n}\n\n.setting-player2[_ngcontent-%COMP%] {\n  background: #F6EFD5;\n}\n\n.setting-player2[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%] {\n  border-color: #F8D146;\n}\n\n.setting-player2[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/avatar02.png\");\n  background-size: 86%;\n}\n\n.setting-gamenumber[_ngcontent-%COMP%], .setting-turn[_ngcontent-%COMP%] {\n  background: #EFF3FF;\n}\n\n.setting-gamenumber[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%], .setting-turn[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%] {\n  border-color: #B1C4F9;\n}\n\n.setting-gamenumber[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%], .setting-turn[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/winner.png\");\n  background-size: 65%;\n  background-repeat: no-repeat;\n}\n\n.setting-turn[_ngcontent-%COMP%]   .setting-icon-border[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/run.png\");\n  background-size: 65%;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtY29uZmlnL2dhbWUtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9fbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ0E7RUFaRSx5QkFwQmU7QUNFakI7O0FEaUNBO0VBWkUseUJBdEJlO0FDS2pCOztBRGdDQTtFQVpFLHlCQXhCaUI7QUNRbkI7O0FEK0JBO0VBWkUseUJBMUJpQjtBQ1duQjs7QUFaQTtFQ0lFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RURMQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBa0JGOztBQWZBO0VEY0UseUJBdEJlO0VFQWYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RURTQSxtQkFBQTtFQUNBLFdEQ007RUNBTixnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBb0JGOztBQWpCQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFvQkY7O0FBbkJFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBcUJKOztBQXBCSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FBc0JOOztBQW5CRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQXFCSjs7QUFwQkk7RUFDRSxjRDdCTTtFQzhCTixhQUFBO0VBQ0EsbUJBQUE7QUFzQk47O0FBcEJJO0VBQ0UsZ0NBQUE7QUFzQk47O0FBcEJNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBc0JSOztBQWpCQTtFQUNFLG1CRDNEZ0I7QUMrRWxCOztBQW5CRTtFQUNFLHFCRDVEYztBQ2lGbEI7O0FBcEJJO0VBQ0Usb0RBQUE7QUFzQk47O0FBakJFO0VBQ0UsbUJEbEVlO0FDc0ZuQjs7QUFuQkk7RUFDRSxxQkRuRWE7QUN3Rm5COztBQXBCTTtFQUNFLG9EQUFBO0VBQ0Esb0JBQUE7QUFzQlI7O0FBakJFO0VBQ0UsbUJEMUVnQjtBQzhGcEI7O0FBbkJJO0VBQ0UscUJEM0VjO0FDZ0dwQjs7QUFwQk07RUFDRSxrREFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFzQlI7O0FBZk07RUFDRSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFrQlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtY29uZmlnL2dhbWUtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWJsdWUtb25lOiAjNEJBQkZGO1xyXG4kbGlnaHQtYmx1ZS10d286ICM0QjdCRkY7XHJcbiRsaWdodC1ibHVlLXRocmVlOiAjNEI0QkZGO1xyXG4kbGlnaHQtcHVycGxlLW9uZTogIzZFNEJGRjtcclxuJGxpZ2h0LWdyZWVuLW9uZTogI0RDRjZFNDtcclxuJGxpZ2h0LWdyZWVuLXR3bzogIzM3QUM1RDtcclxuJGRhcmstZ3JlZW46IzI3OEQ0ODtcclxuJGxpZ2h0LXllbGxvdy1vbmU6ICNGNkVGRDU7XHJcbiRsaWdodC15ZWxsb3ctdHdvOiAjRjhEMTQ2O1xyXG4kZGFyay15ZWxsb3c6ICNCQjlBMjI7XHJcbiRsaWdodC1za3libHVlLW9uZTogI0VGRjNGRjtcclxuJGxpZ2h0LXNreWJsdWUtdHdvOiAjQjFDNEY5O1xyXG5cclxuJG9yYW5nZTogI0ZGNzI0MztcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGRhcmstdGV4dDogIzQyNDI0MjtcclxuJHN1Yi10ZXh0OiAjOTQ5NDk0O1xyXG5cclxuQG1peGluIGJnLWJsdWUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1vbmU7XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS10d287XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdGhyZWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibHVlLXRocmVlO1xyXG59XHJcbkBtaXhpbiBiZy1wdXJwbGUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtcHVycGxlLW9uZTtcclxufVxyXG5cclxuLmJnLWJsdWUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLW9uZTtcclxufVxyXG4uYmctYmx1ZS10d28ge1xyXG4gIEBpbmNsdWRlIGJnLWJsdWUtdHdvO1xyXG59XHJcbi5iZy1ibHVlLXRocmVlIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLXRocmVlO1xyXG59XHJcbi5iZy1wdXJwbGUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1wdXJwbGUtb25lO1xyXG59XHJcbiIsIi5iZy1ibHVlLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QkFCRkY7XG59XG5cbi5iZy1ibHVlLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjdCRkY7XG59XG5cbi5iZy1ibHVlLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCNEJGRjtcbn1cblxuLmJnLXB1cnBsZS1vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU0QkZGO1xufVxuXG4ucGFuZWwtd2hpdGUge1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y3Rjc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzAwMDAwMDI5O1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCN0JGRjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZXR0aW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDI2O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLnNldHRpbmcgLnNldHRpbmctaWNvbi1ib3JkZXIge1xuICBib3JkZXI6IDEwcHggc29saWQgIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuLnNldHRpbmcgLnNldHRpbmctaWNvbi1ib3JkZXIgLnNldHRpbmctaWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiA3NCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zZXR0aW5nIC5zZXR0aW5nLWRlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc2V0dGluZyAuc2V0dGluZy1kZXNjIC5pbmZvIHtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIG9wYWNpdHk6IDAuNTY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2V0dGluZyAuc2V0dGluZy1kZXNjIC5zZWxlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk0OTQ5NDtcbn1cbi5zZXR0aW5nIC5zZXR0aW5nLWRlc2MgLnNlbGVjdGlvbiBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZXR0aW5nLXBsYXllcjEge1xuICBiYWNrZ3JvdW5kOiAjRENGNkU0O1xufVxuLnNldHRpbmctcGxheWVyMSAuc2V0dGluZy1pY29uLWJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogIzM3QUM1RDtcbn1cbi5zZXR0aW5nLXBsYXllcjEgLnNldHRpbmctaWNvbi1ib3JkZXIgLnNldHRpbmctaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2F2YXRhcjAxLnBuZ1wiKTtcbn1cblxuLnNldHRpbmctcGxheWVyMiB7XG4gIGJhY2tncm91bmQ6ICNGNkVGRDU7XG59XG4uc2V0dGluZy1wbGF5ZXIyIC5zZXR0aW5nLWljb24tYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjhEMTQ2O1xufVxuLnNldHRpbmctcGxheWVyMiAuc2V0dGluZy1pY29uLWJvcmRlciAuc2V0dGluZy1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYXZhdGFyMDIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDg2JTtcbn1cblxuLnNldHRpbmctZ2FtZW51bWJlciwgLnNldHRpbmctdHVybiB7XG4gIGJhY2tncm91bmQ6ICNFRkYzRkY7XG59XG4uc2V0dGluZy1nYW1lbnVtYmVyIC5zZXR0aW5nLWljb24tYm9yZGVyLCAuc2V0dGluZy10dXJuIC5zZXR0aW5nLWljb24tYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjQjFDNEY5O1xufVxuLnNldHRpbmctZ2FtZW51bWJlciAuc2V0dGluZy1pY29uLWJvcmRlciAuc2V0dGluZy1pY29uLCAuc2V0dGluZy10dXJuIC5zZXR0aW5nLWljb24tYm9yZGVyIC5zZXR0aW5nLWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy93aW5uZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnNldHRpbmctdHVybiAuc2V0dGluZy1pY29uLWJvcmRlciAuc2V0dGluZy1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcnVuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2NSU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59IiwiQG1peGluIGFsaWduVG9DZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5AbWl4aW4gcGFuZWwoJGJnKSB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y3Rjc7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAkYmcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GameConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-game-config',
                templateUrl: './game-config.component.html',
                styleUrls: ['./game-config.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_1__["StateManagerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/state-manager.service */ "./src/app/service/state-manager.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function GameComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const cellIndex_r9 = ctx.index; const cellRowIndex_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.cellSelected(cellRowIndex_r6, cellIndex_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cellIndex_r9 = ctx.index;
    const cellRowIndex_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.cells[cellRowIndex_r6][cellIndex_r9]);
} }
function GameComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_3_div_1_Template, 1, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cellRow_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", cellRow_r5);
} }
function GameComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Playing Game ", ctx_r1.games.currentGame, "");
} }
function GameComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r14.tournamentWinnerName, ", you won tournament");
} }
function GameComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r15.roundWinnerName, ", you won Game ", ctx_r15.games.currentGame, "");
} }
function GameComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Congratulation!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameComponent_div_8_div_3_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameComponent_div_8_div_4_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.tornamentEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.tornamentEnd);
} }
function GameComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_39_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.startNewGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Next Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.endGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "End Tournament");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const checkInline = 4;
class GameComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.cells = [];
        this.gameEnd = false;
        this.tornamentEnd = false;
        this.games = {
            whoStarts: src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumWhoStarts"].ALTERNATE,
            totalGames: 0,
            currentGame: 0,
            firstPlayerName: '',
            secondPlayerName: '',
            firstPlayerScore: 0,
            secondPlayerScore: 0
        };
    }
    ngOnInit() {
        this.startNewGame();
    }
    decideTurn() {
        switch (this.games.whoStarts) {
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumWhoStarts"].ALTERNATE:
                if (this.lastGameTurn === 'P1') {
                    this.turn = 'P2';
                    this.lastGameTurn = 'P2';
                }
                else {
                    this.turn = 'P1';
                    this.lastGameTurn = 'P1';
                }
                break;
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumWhoStarts"].FIRST_PLAYER:
                this.turn = 'P1';
                break;
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumWhoStarts"].SECOND_PLAYER:
                this.turn = 'P2';
                break;
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumWhoStarts"].LOOSER:
                if (this.games.firstPlayerName === this.roundWinnerName) {
                    this.turn = 'P2';
                }
                else {
                    this.turn = 'P1';
                }
                break;
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumWhoStarts"].WINNER:
                if (this.games.firstPlayerName === this.roundWinnerName) {
                    this.turn = 'P1';
                }
                else {
                    this.turn = 'P2';
                }
                break;
            default:
                break;
        }
    }
    startNewGame() {
        this.roundWinnerName = '';
        this.gameEnd = false;
        if (!this.service.config) {
            this.router.navigate(['/']);
        }
        const { firstPlayerName, secondPlayerName, numberOfGames, whoStarts } = this.service.config;
        this.games.firstPlayerName = firstPlayerName;
        this.games.secondPlayerName = secondPlayerName;
        this.games.whoStarts = whoStarts;
        this.games.currentGame++;
        switch (numberOfGames) {
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumNumberOfGames"].TWO:
                this.games.totalGames = 2;
                break;
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumNumberOfGames"].THREE:
                this.games.totalGames = 3;
                break;
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumNumberOfGames"].FIVE:
                this.games.totalGames = 5;
                break;
            case src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["EnumNumberOfGames"].TEN:
                this.games.totalGames = 10;
                break;
        }
        this.cells = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.decideTurn();
    }
    switchTurn() {
        if (this.turn === 'P1') {
            this.turn = 'P2';
        }
        else {
            this.turn = 'P1';
        }
    }
    findDestinationCell(rowIndex, cellIndex) {
        if (rowIndex < this.cells.length - 1) {
            if (!this.cells[rowIndex + 1][cellIndex]) {
                this.findDestinationCell(rowIndex + 1, cellIndex);
            }
            else {
                this.cells[rowIndex][cellIndex] = this.turn;
                this.checkWin(rowIndex, cellIndex);
            }
        }
        else {
            if (!this.cells[rowIndex][cellIndex]) {
                this.cells[rowIndex][cellIndex] = this.turn;
                this.checkWin(rowIndex, cellIndex);
            }
        }
    }
    cellSelected(rowIndex, cellIndex) {
        if (this.gameEnd) {
            return;
        }
        if (!this.cells[rowIndex][cellIndex]) {
            this.findDestinationCell(rowIndex, cellIndex);
        }
    }
    checkVerticle(rowIndex, cellIndex) {
        let success = false;
        let counter = 0;
        let playerId = this.cells[rowIndex][cellIndex];
        for (let i = 0; i < this.cells.length; i++) {
            if (playerId === this.cells[i][cellIndex]) {
                counter++;
                if (counter > 3) {
                    success = true;
                    break;
                }
            }
            else {
                counter = 0;
            }
        }
        return success;
    }
    checkHorizontal(rowIndex, cellIndex) {
        let success = false;
        let counter = 0;
        let playerId = this.cells[rowIndex][cellIndex];
        for (let i = 0; i < this.cells.length; i++) {
            if (playerId === this.cells[rowIndex][i]) {
                counter++;
                if (counter > 3) {
                    success = true;
                    break;
                }
            }
            else {
                counter = 0;
            }
        }
        return success;
    }
    // check diagonal \
    checkFirstDiagonal(rowIndex, cellIndex) {
        let success = false;
        let counter = 0;
        const playerId = this.cells[rowIndex][cellIndex];
        let startRowIndex = rowIndex;
        let startCellIndex = cellIndex;
        while (!(startRowIndex === 0 || startCellIndex === 0)) {
            startRowIndex--;
            startCellIndex--;
        }
        while (!(startRowIndex === this.cells.length || startCellIndex === this.cells.length)) {
            if (playerId === this.cells[startRowIndex][startCellIndex]) {
                counter++;
                if (counter > 3) {
                    success = true;
                    break;
                }
            }
            else {
                counter = 0;
            }
            startRowIndex++;
            startCellIndex++;
        }
        return success;
    }
    // check diagonal /
    checkOtherDiagonal(rowIndex, cellIndex) {
        let success = false;
        let counter = 0;
        const playerId = this.cells[rowIndex][cellIndex];
        let startRowIndex = rowIndex;
        let startCellIndex = cellIndex;
        while (!(startRowIndex === 0 || startCellIndex === this.cells.length - 1)) {
            startRowIndex--;
            startCellIndex++;
        }
        while (!(startRowIndex === this.cells.length || startCellIndex === 0)) {
            if (playerId === this.cells[startRowIndex][startCellIndex]) {
                counter++;
                if (counter > 3) {
                    success = true;
                    break;
                }
            }
            else {
                counter = 0;
            }
            startRowIndex++;
            startCellIndex--;
        }
        return success;
    }
    checkDiagonals(rowIndex, cellIndex) {
        // first-daigonal
        let success = false;
        success = this.checkFirstDiagonal(rowIndex, cellIndex);
        if (!success) {
            success = this.checkOtherDiagonal(rowIndex, cellIndex);
        }
        return success;
    }
    checkWin(rowIndex, cellIndex) {
        let success;
        success = this.checkVerticle(rowIndex, cellIndex);
        if (!success) {
            success = this.checkHorizontal(rowIndex, cellIndex);
        }
        if (!success) {
            success = this.checkDiagonals(rowIndex, cellIndex);
        }
        if (!success) {
            this.switchTurn();
        }
        else {
            this.gameEnd = true;
            if (this.turn === 'P1') {
                this.games.firstPlayerScore++;
                this.roundWinnerName = this.games.firstPlayerName;
            }
            else {
                this.games.secondPlayerScore++;
                this.roundWinnerName = this.games.secondPlayerName;
            }
            if (this.games.totalGames === this.games.currentGame) {
                this.endGame();
            }
        }
        return success;
    }
    endGame() {
        this.tornamentEnd = true;
        if (this.games.firstPlayerScore > this.games.secondPlayerScore) {
            this.tournamentWinnerName = this.games.firstPlayerName;
        }
        else {
            this.tournamentWinnerName = this.games.secondPlayerName;
        }
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["StateManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 41, vars: 12, consts: [[1, "container"], [1, "panel-white"], [1, "board"], ["class", "cell-row", 4, "ngFor", "ngForOf"], [1, "meta"], [1, "game-title"], ["class", "round-title", 4, "ngIf"], ["class", "congratulation-section", 4, "ngIf"], [1, "player", "player1"], [1, "icon-border", 3, "ngClass"], [1, "icon"], [1, "desc"], [1, "p-info"], [1, "info"], [1, "name"], [1, "score"], [1, "text"], [1, "total"], [1, "player", "player2"], [1, "separator"], [1, "buttons"], ["class", "btn undo", 3, "click", 4, "ngIf"], ["class", "btn end", 3, "click", 4, "ngIf"], [1, "cell-row"], ["class", "cell", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "cell", 3, "ngClass", "click"], [1, "round-title"], [1, "congratulation-section"], [1, "congrats-text"], [4, "ngIf"], [1, "btn", "undo", 3, "click"], [1, "btn", "end", 3, "click"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GameComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GameComponent_div_8_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Player 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Player 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, GameComponent_div_39_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, GameComponent_div_40_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cells);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.games.totalGames, " Games Tournament");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.gameEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.turn === "P1" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.games.firstPlayerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.games.firstPlayerScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.turn === "P2" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.games.secondPlayerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.games.secondPlayerScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tornamentEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tornamentEnd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".bg-blue-one[_ngcontent-%COMP%] {\n  background-color: #4BABFF;\n}\n\n.bg-blue-two[_ngcontent-%COMP%] {\n  background-color: #4B7BFF;\n}\n\n.bg-blue-three[_ngcontent-%COMP%] {\n  background-color: #4B4BFF;\n}\n\n.bg-purple-one[_ngcontent-%COMP%] {\n  background-color: #6E4BFF;\n}\n\n.panel-white[_ngcontent-%COMP%] {\n  width: 600px;\n  border: 1px solid #F7F7F7;\n  border-radius: 30px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  height: 500px;\n  width: 80%;\n  box-shadow: 0px 3px 10px #00000029;\n  z-index: 1;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.board[_ngcontent-%COMP%] {\n  background-color: #84A4FC;\n  width: 480px;\n}\n\n.cell-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: 5px;\n  height: 50px;\n  width: 50px;\n}\n\n.meta[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.player[_ngcontent-%COMP%] {\n  border: 1px solid #70707026;\n  padding: 5px;\n  display: flex;\n  border-radius: 10px;\n  margin: 15px 0;\n}\n\n.player[_ngcontent-%COMP%]   .icon-border[_ngcontent-%COMP%] {\n  position: relative;\n  border: 10px solid #222;\n  border-radius: 50%;\n  height: 70px;\n  width: 70px;\n}\n\n.player[_ngcontent-%COMP%]   .icon-border[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border: 10px solid transparent;\n  border-radius: 50%;\n  position: absolute;\n  height: 70px;\n  width: 70px;\n  top: -20px;\n  left: -20px;\n}\n\n.player[_ngcontent-%COMP%]   .icon-border[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  background-size: 74%;\n  background-position: center;\n}\n\n.player[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  display: flex;\n  width: calc(100% - 80px);\n  justify-content: space-around;\n  padding-left: 10px;\n  margin-top: 10px;\n}\n\n.player[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .player[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #424242;\n  opacity: 0.56;\n}\n\n.player[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .player[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n}\n\n.player1[_ngcontent-%COMP%] {\n  background: #DCF6E4;\n}\n\n.player1[_ngcontent-%COMP%]   .icon-border[_ngcontent-%COMP%] {\n  border-color: #37AC5D;\n}\n\n.player1[_ngcontent-%COMP%]   .icon-border[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/avatar01.png\");\n}\n\n.player2[_ngcontent-%COMP%] {\n  background: #F6EFD5;\n}\n\n.player2[_ngcontent-%COMP%]   .icon-border[_ngcontent-%COMP%] {\n  border-color: #F8D146;\n}\n\n.player2[_ngcontent-%COMP%]   .icon-border[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/avatar02.png\");\n  background-size: 86%;\n}\n\n.icon-border.active[_ngcontent-%COMP%]::before {\n  border-color: #FFA200 !important;\n}\n\n.cell.P1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url(\"/assets/images/avatar01.png\");\n  background-color: #DCF6E4;\n  background-repeat: no-repeat;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  background-position: center;\n  background-size: 72%;\n  border: 10px solid;\n  border-color: #37AC5D;\n  border-radius: 50%;\n}\n\n.cell.P2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url(\"/assets/images/avatar02.png\");\n  background-color: #F6EFD5;\n  background-repeat: no-repeat;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  background-position: center;\n  background-size: 78%;\n  border: 10px solid;\n  border-color: #F8D146;\n  border-radius: 50%;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.game-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #424242;\n  font-size: 24px;\n  margin-top: 10px;\n}\n\n.round-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #505351;\n  font-size: 18px;\n}\n\n.end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  padding: 15px;\n  margin: 10px;\n  cursor: pointer;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #4B7BFF26;\n  color: #CC0000;\n  white-space: nowrap;\n}\n\n.undo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  padding: 15px;\n  margin: 10px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  background-color: #4B7BFF;\n}\n\n.congratulation-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.congratulation-section[_ngcontent-%COMP%]   .congrats-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #FF6600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBWkUseUJBcEJlO0FDRWpCOztBRGlDQTtFQVpFLHlCQXRCZTtBQ0tqQjs7QURnQ0E7RUFaRSx5QkF4QmlCO0FDUW5COztBRCtCQTtFQVpFLHlCQTFCaUI7QUNXbkI7O0FBWEE7RUNHRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VESkEsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFpQkY7O0FBZEE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFpQkY7O0FBZkE7RUFDRSxhQUFBO0FBa0JGOztBQWhCQTtFQUNFLGVBQUE7RUFDQSxzQkRSTTtFQ1NOLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBbUJGOztBQWpCQTtFQUNFLFlBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXFCRjs7QUFwQkU7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXNCSjs7QUFyQkk7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXVCTjs7QUFyQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQXVCTjs7QUFwQkU7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFzQko7O0FBckJJO0VDbEVGLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEa0VJLGNEckRNO0VDc0ROLGFBQUE7QUF5Qk47O0FBdkJJO0VDdkVGLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEdUVJLGVBQUE7QUEyQk47O0FBdkJBO0VBQ0UsbUJEM0VnQjtBQ3FHbEI7O0FBekJFO0VBQ0UscUJENUVjO0FDdUdsQjs7QUExQkk7RUFDRSxvREFBQTtBQTRCTjs7QUF2QkU7RUFDRSxtQkRsRmU7QUM0R25COztBQXpCSTtFQUNFLHFCRG5GYTtBQzhHbkI7O0FBMUJNO0VBQ0Usb0RBQUE7RUFDQSxvQkFBQTtBQTRCUjs7QUF0Qkk7RUFDRSxnQ0FBQTtBQXlCTjs7QUFwQkk7RUFDRSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSx5QkR6R1k7RUMwR1osNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJEaEhZO0VDaUhaLGtCQUFBO0FBdUJOOztBQWxCSTtFQUNFLFdBQUE7RUFDQSxvREFBQTtFQUNBLHlCRHZIYTtFQ3dIYiw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkQ5SGE7RUMrSGIsa0JBQUE7QUFxQk47O0FBakJFO0VDMUlBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEMElFLHNCQUFBO0FBc0JKOztBQW5CRTtFQy9JQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRCtJQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBd0JIOztBQXRCRTtFQ3JKQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRHFKRSxjQUFBO0VBQ0QsZUFBQTtBQTJCSDs7QUFmRTtFQ3BLQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRDRKRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFJQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBeUJKOztBQXZCRTtFQzNLQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRDRKRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFXQSxXRGhLSTtFQ2lLSix5QkQ5S2E7QUMrTWpCOztBQTlCRTtFQ2pMQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRGlMRSxzQkFBQTtBQW1DSjs7QUFsQ0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQW9DTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWJsdWUtb25lOiAjNEJBQkZGO1xyXG4kbGlnaHQtYmx1ZS10d286ICM0QjdCRkY7XHJcbiRsaWdodC1ibHVlLXRocmVlOiAjNEI0QkZGO1xyXG4kbGlnaHQtcHVycGxlLW9uZTogIzZFNEJGRjtcclxuJGxpZ2h0LWdyZWVuLW9uZTogI0RDRjZFNDtcclxuJGxpZ2h0LWdyZWVuLXR3bzogIzM3QUM1RDtcclxuJGRhcmstZ3JlZW46IzI3OEQ0ODtcclxuJGxpZ2h0LXllbGxvdy1vbmU6ICNGNkVGRDU7XHJcbiRsaWdodC15ZWxsb3ctdHdvOiAjRjhEMTQ2O1xyXG4kZGFyay15ZWxsb3c6ICNCQjlBMjI7XHJcbiRsaWdodC1za3libHVlLW9uZTogI0VGRjNGRjtcclxuJGxpZ2h0LXNreWJsdWUtdHdvOiAjQjFDNEY5O1xyXG5cclxuJG9yYW5nZTogI0ZGNzI0MztcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGRhcmstdGV4dDogIzQyNDI0MjtcclxuJHN1Yi10ZXh0OiAjOTQ5NDk0O1xyXG5cclxuQG1peGluIGJnLWJsdWUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1vbmU7XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS10d287XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdGhyZWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibHVlLXRocmVlO1xyXG59XHJcbkBtaXhpbiBiZy1wdXJwbGUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtcHVycGxlLW9uZTtcclxufVxyXG5cclxuLmJnLWJsdWUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLW9uZTtcclxufVxyXG4uYmctYmx1ZS10d28ge1xyXG4gIEBpbmNsdWRlIGJnLWJsdWUtdHdvO1xyXG59XHJcbi5iZy1ibHVlLXRocmVlIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLXRocmVlO1xyXG59XHJcbi5iZy1wdXJwbGUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1wdXJwbGUtb25lO1xyXG59XHJcbiIsIi5iZy1ibHVlLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QkFCRkY7XG59XG5cbi5iZy1ibHVlLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjdCRkY7XG59XG5cbi5iZy1ibHVlLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCNEJGRjtcbn1cblxuLmJnLXB1cnBsZS1vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU0QkZGO1xufVxuXG4ucGFuZWwtd2hpdGUge1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y3Rjc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogODAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzAwMDAwMDI5O1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmJvYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0QTRGQztcbiAgd2lkdGg6IDQ4MHB4O1xufVxuXG4uY2VsbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2VsbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLm1ldGEge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5wbGF5ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwMjY7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4ucGxheWVyIC5pY29uLWJvcmRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICMyMjI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cbi5wbGF5ZXIgLmljb24tYm9yZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cbi5wbGF5ZXIgLmljb24tYm9yZGVyIC5pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDc0JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnBsYXllciAuZGVzYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wbGF5ZXIgLmRlc2MgLmluZm8sIC5wbGF5ZXIgLmRlc2MgLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIG9wYWNpdHk6IDAuNTY7XG59XG4ucGxheWVyIC5kZXNjIC5uYW1lLCAucGxheWVyIC5kZXNjIC50b3RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wbGF5ZXIxIHtcbiAgYmFja2dyb3VuZDogI0RDRjZFNDtcbn1cbi5wbGF5ZXIxIC5pY29uLWJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogIzM3QUM1RDtcbn1cbi5wbGF5ZXIxIC5pY29uLWJvcmRlciAuaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2F2YXRhcjAxLnBuZ1wiKTtcbn1cblxuLnBsYXllcjIge1xuICBiYWNrZ3JvdW5kOiAjRjZFRkQ1O1xufVxuLnBsYXllcjIgLmljb24tYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjhEMTQ2O1xufVxuLnBsYXllcjIgLmljb24tYm9yZGVyIC5pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYXZhdGFyMDIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDg2JTtcbn1cblxuLmljb24tYm9yZGVyLmFjdGl2ZTo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZBMjAwICFpbXBvcnRhbnQ7XG59XG5cbi5jZWxsLlAxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIwMS5wbmdcIik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQ0Y2RTQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDcyJTtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMzN0FDNUQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNlbGwuUDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2F2YXRhcjAyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RUZENTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogNzglO1xuICBib3JkZXI6IDEwcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI0Y4RDE0NjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzQyNDI0MjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucm91bmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM1MDUzNTE7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEI3QkZGMjY7XG4gIGNvbG9yOiAjQ0MwMDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udW5kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjdCRkY7XG59XG5cbi5jb25ncmF0dWxhdGlvbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29uZ3JhdHVsYXRpb24tc2VjdGlvbiAuY29uZ3JhdHMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNGRjY2MDA7XG59IiwiQG1peGluIGFsaWduVG9DZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5AbWl4aW4gcGFuZWwoJGJnKSB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y3Rjc7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAkYmcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return [{ type: src_app_service_state_manager_service__WEBPACK_IMPORTED_MODULE_0__["StateManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _custom_btn_custom_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-btn/custom-btn.component */ "./src/app/components/custom-btn/custom-btn.component.ts");




class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    btnClick() {
        this.router.navigate(['/two-player']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 11, consts: [[1, "container"], [1, "design"], [1, "panel-white"], [1, "top-section"], [1, "game-title"], [1, "main-title"], [1, "sub-title"], [1, "play-video"], [1, "video-icon"], [1, "play-icon"], [1, "play-text"], [1, "img"], [1, "btn-container"], [1, "btn-row"], [3, "text", "bgClass"], [3, "text", "bgClass", "colorClass", "click"], [3, "text", "bgClass", "colorClass"], [1, "panel-grey"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Connect Four!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Play with other players around the world.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PLAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-custom-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-custom-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_app_custom_btn_click_18_listener() { return ctx.btnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-custom-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-custom-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Custom Game")("bgClass", "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Two Players")("bgClass", "two")("colorClass", "bg-blue-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Game Online")("bgClass", "online")("colorClass", "bg-blue-three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Training Game")("bgClass", "training")("colorClass", "bg-purple-one");
    } }, directives: [_custom_btn_custom_btn_component__WEBPACK_IMPORTED_MODULE_2__["CustomBtnComponent"]], styles: [".bg-blue-one[_ngcontent-%COMP%] {\n  background-color: #4BABFF;\n}\n\n.bg-blue-two[_ngcontent-%COMP%] {\n  background-color: #4B7BFF;\n}\n\n.bg-blue-three[_ngcontent-%COMP%] {\n  background-color: #4B4BFF;\n}\n\n.bg-purple-one[_ngcontent-%COMP%] {\n  background-color: #6E4BFF;\n}\n\n.panel-white[_ngcontent-%COMP%] {\n  width: 600px;\n  border: 1px solid #F7F7F7;\n  border-radius: 30px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  height: 500px;\n  box-shadow: 0px 3px 10px #00000029;\n  z-index: 1;\n}\n\n.panel-grey[_ngcontent-%COMP%] {\n  width: 600px;\n  border: 1px solid #F7F7F7;\n  border-radius: 30px;\n  background: #EEEEEE 0% 0% no-repeat padding-box;\n  display: flex;\n  display: none;\n  align-items: flex-end;\n  padding: 35px;\n  margin-top: -75px;\n  height: 150px;\n}\n\n.panel-grey[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #424242;\n}\n\n.design[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 50px;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.btn-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.top-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.top-section[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -60px;\n  left: 35px;\n}\n\n.top-section[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  letter-spacing: 0px;\n  font-weight: bold;\n  font-size: 18px;\n  color: #3D4276;\n  text-transform: uppercase;\n}\n\n.top-section[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #949494;\n}\n\n.top-section[_ngcontent-%COMP%]   .play-video[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-section[_ngcontent-%COMP%]   .play-video[_ngcontent-%COMP%]   .video-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100px;\n  height: 100px;\n  background: #FF7243 0% 0% no-repeat padding-box;\n  box-shadow: 10px 10px 50px #ff724373;\n  border-radius: 12px;\n}\n\n.top-section[_ngcontent-%COMP%]   .play-video[_ngcontent-%COMP%]   .video-icon[_ngcontent-%COMP%]   .play-text[_ngcontent-%COMP%] {\n  position: absolute;\n  letter-spacing: 4.4px;\n  color: #424242;\n  bottom: 7px;\n  left: 24px;\n}\n\n.top-section[_ngcontent-%COMP%]   .play-video[_ngcontent-%COMP%]   .video-icon[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  background-color: #FF7243;\n  border: 4px solid #fff;\n  border-radius: 50%;\n}\n\n.top-section[_ngcontent-%COMP%]   .play-video[_ngcontent-%COMP%]   .video-icon[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  border-left: 8px solid #fff;\n}\n\n.top-section[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 300px;\n  position: relative;\n}\n\n.top-section[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 400px;\n  top: -90px;\n  left: -10px;\n  width: 400px;\n  background: transparent url(\"/assets/images/4inarow.png\") no-repeat;\n  background-size: 100%;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBWkUseUJBcEJlO0FDRWpCOztBRGlDQTtFQVpFLHlCQXRCZTtBQ0tqQjs7QURnQ0E7RUFaRSx5QkF4QmlCO0FDUW5COztBRCtCQTtFQVpFLHlCQTFCaUI7QUNXbkI7O0FBWEE7RUNHRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VESkEsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQWlCRjs7QUFkQTtFQ0pFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RURHQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQW9CRjs7QUFuQkU7RUFDRSxnQkFBQTtFQUNBLGNESlE7QUN5Qlo7O0FBakJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFvQkY7O0FBaEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBbUJGOztBQWhCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFtQkY7O0FBaEJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFtQkY7O0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQW9CSjs7QUFuQkk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQXFCTjs7QUFuQkk7RUFDRSxlQUFBO0VBQ0EsY0QzQ0s7QUNnRVg7O0FBbEJFO0VBQ0UsVUFBQTtFQy9ERixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRG9GRjs7QUFyQkk7RUNqRUYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RURpRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQXlCTjs7QUF4Qk07RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0Q3REk7RUM4REosV0FBQTtFQUNBLFVBQUE7QUEwQlI7O0FBeEJNO0VDaEZKLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEZ0ZNLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRHpFQztFQzBFRCxzQkFBQTtFQUNBLGtCQUFBO0FBNEJSOztBQTNCUTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBNkJWOztBQXhCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEwQko7O0FBekJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1FQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQTJCTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWJsdWUtb25lOiAjNEJBQkZGO1xyXG4kbGlnaHQtYmx1ZS10d286ICM0QjdCRkY7XHJcbiRsaWdodC1ibHVlLXRocmVlOiAjNEI0QkZGO1xyXG4kbGlnaHQtcHVycGxlLW9uZTogIzZFNEJGRjtcclxuJGxpZ2h0LWdyZWVuLW9uZTogI0RDRjZFNDtcclxuJGxpZ2h0LWdyZWVuLXR3bzogIzM3QUM1RDtcclxuJGRhcmstZ3JlZW46IzI3OEQ0ODtcclxuJGxpZ2h0LXllbGxvdy1vbmU6ICNGNkVGRDU7XHJcbiRsaWdodC15ZWxsb3ctdHdvOiAjRjhEMTQ2O1xyXG4kZGFyay15ZWxsb3c6ICNCQjlBMjI7XHJcbiRsaWdodC1za3libHVlLW9uZTogI0VGRjNGRjtcclxuJGxpZ2h0LXNreWJsdWUtdHdvOiAjQjFDNEY5O1xyXG5cclxuJG9yYW5nZTogI0ZGNzI0MztcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGRhcmstdGV4dDogIzQyNDI0MjtcclxuJHN1Yi10ZXh0OiAjOTQ5NDk0O1xyXG5cclxuQG1peGluIGJnLWJsdWUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1vbmU7XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS10d287XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdGhyZWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibHVlLXRocmVlO1xyXG59XHJcbkBtaXhpbiBiZy1wdXJwbGUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtcHVycGxlLW9uZTtcclxufVxyXG5cclxuLmJnLWJsdWUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLW9uZTtcclxufVxyXG4uYmctYmx1ZS10d28ge1xyXG4gIEBpbmNsdWRlIGJnLWJsdWUtdHdvO1xyXG59XHJcbi5iZy1ibHVlLXRocmVlIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLXRocmVlO1xyXG59XHJcbi5iZy1wdXJwbGUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1wdXJwbGUtb25lO1xyXG59XHJcbiIsIi5iZy1ibHVlLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QkFCRkY7XG59XG5cbi5iZy1ibHVlLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjdCRkY7XG59XG5cbi5iZy1ibHVlLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCNEJGRjtcbn1cblxuLmJnLXB1cnBsZS1vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU0QkZGO1xufVxuXG4ucGFuZWwtd2hpdGUge1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y3Rjc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzAwMDAwMDI5O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGFuZWwtZ3JleSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y3RjdGNztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogI0VFRUVFRSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMzVweDtcbiAgbWFyZ2luLXRvcDogLTc1cHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ucGFuZWwtZ3JleSBzcGFuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG5cbi5kZXNpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idG4tcm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi50b3Atc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9wLXNlY3Rpb24gLmdhbWUtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTYwcHg7XG4gIGxlZnQ6IDM1cHg7XG59XG4udG9wLXNlY3Rpb24gLmdhbWUtdGl0bGUgLm1haW4tdGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzNENDI3NjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50b3Atc2VjdGlvbiAuZ2FtZS10aXRsZSAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cbi50b3Atc2VjdGlvbiAucGxheS12aWRlbyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvcC1zZWN0aW9uIC5wbGF5LXZpZGVvIC52aWRlby1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkY3MjQzIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggI2ZmNzI0MzczO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnRvcC1zZWN0aW9uIC5wbGF5LXZpZGVvIC52aWRlby1pY29uIC5wbGF5LXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxldHRlci1zcGFjaW5nOiA0LjRweDtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIGJvdHRvbTogN3B4O1xuICBsZWZ0OiAyNHB4O1xufVxuLnRvcC1zZWN0aW9uIC5wbGF5LXZpZGVvIC52aWRlby1pY29uIC5wbGF5LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzI0MztcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnRvcC1zZWN0aW9uIC5wbGF5LXZpZGVvIC52aWRlby1pY29uIC5wbGF5LWljb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmZmY7XG59XG4udG9wLXNlY3Rpb24gLmltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50b3Atc2VjdGlvbiAuaW1nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDAwcHg7XG4gIHRvcDogLTkwcHg7XG4gIGxlZnQ6IC0xMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi9hc3NldHMvaW1hZ2VzLzRpbmFyb3cucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59IiwiQG1peGluIGFsaWduVG9DZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5AbWl4aW4gcGFuZWwoJGJnKSB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0Y3Rjc7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAkYmcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/modal/option-select/option-select.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/modal/option-select/option-select.component.ts ***!
  \***************************************************************************/
/*! exports provided: OptionSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionSelectComponent", function() { return OptionSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function OptionSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r1.label);
} }
class OptionSelectComponent {
    constructor(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.options = [];
    }
    ngOnInit() {
        const { data } = this;
        const { options, selection, title } = data;
        const keys = Object.keys(options);
        for (const key of keys) {
            this.options.push({ label: options[key], value: key });
        }
        this.title = title;
        this.form = this.fb.group({
            selection: [selection]
        });
    }
    okay() {
        this.dialogRef.close(this.form.getRawValue().selection);
    }
    cancel() {
        this.dialogRef.close();
    }
}
OptionSelectComponent.ɵfac = function OptionSelectComponent_Factory(t) { return new (t || OptionSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
OptionSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionSelectComponent, selectors: [["app-option-select"]], decls: 11, vars: 3, consts: [[1, "modal-title"], [1, "options", 3, "formGroup"], ["aria-label", "Select an option", "formControlName", "selection"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "separator"], [1, "buttons"], [1, "cancel", 3, "click"], [1, "ok", 3, "click"], [1, "option"], ["color", "primary", 3, "value"]], template: function OptionSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OptionSelectComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionSelectComponent_Template_div_click_7_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionSelectComponent_Template_div_click_9_listener() { return ctx.okay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioButton"]], styles: [".bg-blue-one[_ngcontent-%COMP%] {\n  background-color: #4BABFF;\n}\n\n.bg-blue-two[_ngcontent-%COMP%] {\n  background-color: #4B7BFF;\n}\n\n.bg-blue-three[_ngcontent-%COMP%] {\n  background-color: #4B4BFF;\n}\n\n.bg-purple-one[_ngcontent-%COMP%] {\n  background-color: #6E4BFF;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  color: #424242;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  margin: 10px 0;\n}\n\n.options[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n\n.options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  border: 1px solid #70707026;\n  padding: 15px 20px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  background-color: #EFF3FF;\n}\n\n.separator[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 15px;\n  font-size: 18px;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  padding: 15px;\n  border-radius: 10px;\n  cursor: pointer;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #4B7BFF26;\n  color: #4B7BFF;\n}\n\n.ok[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  padding: 15px;\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #4B7BFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL29wdGlvbi1zZWxlY3Qvb3B0aW9uLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBWkUseUJBcEJlO0FDRWpCOztBRGlDQTtFQVpFLHlCQXRCZTtBQ0tqQjs7QURnQ0E7RUFaRSx5QkF4QmlCO0FDUW5COztBRCtCQTtFQVpFLHlCQTFCaUI7QUNXbkI7O0FBWkE7RUFDRSxjRGFVO0VFZlYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RURFQSxlQUFBO0VBQ0EsY0FBQTtBQWlCRjs7QUFkQTtFQUNFLGVBQUE7QUFpQkY7O0FBaEJFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkROZ0I7QUN3QnBCOztBQWRBO0VBQ0UsZ0JBQUE7QUFpQkY7O0FBZEE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFpQkY7O0FBUEE7RUNyQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUQ4QkEsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFJQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0R6Q2U7QUN5RGpCOztBQWRBO0VDM0NFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEOEJBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBVUEsV0RoQ007RUNpQ04seUJEOUNlO0FDcUVqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvb3B0aW9uLXNlbGVjdC9vcHRpb24tc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWJsdWUtb25lOiAjNEJBQkZGO1xyXG4kbGlnaHQtYmx1ZS10d286ICM0QjdCRkY7XHJcbiRsaWdodC1ibHVlLXRocmVlOiAjNEI0QkZGO1xyXG4kbGlnaHQtcHVycGxlLW9uZTogIzZFNEJGRjtcclxuJGxpZ2h0LWdyZWVuLW9uZTogI0RDRjZFNDtcclxuJGxpZ2h0LWdyZWVuLXR3bzogIzM3QUM1RDtcclxuJGRhcmstZ3JlZW46IzI3OEQ0ODtcclxuJGxpZ2h0LXllbGxvdy1vbmU6ICNGNkVGRDU7XHJcbiRsaWdodC15ZWxsb3ctdHdvOiAjRjhEMTQ2O1xyXG4kZGFyay15ZWxsb3c6ICNCQjlBMjI7XHJcbiRsaWdodC1za3libHVlLW9uZTogI0VGRjNGRjtcclxuJGxpZ2h0LXNreWJsdWUtdHdvOiAjQjFDNEY5O1xyXG5cclxuJG9yYW5nZTogI0ZGNzI0MztcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGRhcmstdGV4dDogIzQyNDI0MjtcclxuJHN1Yi10ZXh0OiAjOTQ5NDk0O1xyXG5cclxuQG1peGluIGJnLWJsdWUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1vbmU7XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS10d287XHJcbn1cclxuQG1peGluIGJnLWJsdWUtdGhyZWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibHVlLXRocmVlO1xyXG59XHJcbkBtaXhpbiBiZy1wdXJwbGUtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtcHVycGxlLW9uZTtcclxufVxyXG5cclxuLmJnLWJsdWUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLW9uZTtcclxufVxyXG4uYmctYmx1ZS10d28ge1xyXG4gIEBpbmNsdWRlIGJnLWJsdWUtdHdvO1xyXG59XHJcbi5iZy1ibHVlLXRocmVlIHtcclxuICBAaW5jbHVkZSBiZy1ibHVlLXRocmVlO1xyXG59XHJcbi5iZy1wdXJwbGUtb25lIHtcclxuICBAaW5jbHVkZSBiZy1wdXJwbGUtb25lO1xyXG59XHJcbiIsIi5iZy1ibHVlLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QkFCRkY7XG59XG5cbi5iZy1ibHVlLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjdCRkY7XG59XG5cbi5iZy1ibHVlLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCNEJGRjtcbn1cblxuLmJnLXB1cnBsZS1vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU0QkZGO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBjb2xvcjogIzQyNDI0MjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5vcHRpb25zIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLm9wdGlvbnMgLm9wdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzAyNjtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYzRkY7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jYW5jZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0QjdCRkYyNjtcbiAgY29sb3I6ICM0QjdCRkY7XG59XG5cbi5vayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI3QkZGO1xufSIsIkBtaXhpbiBhbGlnblRvQ2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuQG1peGluIHBhbmVsKCRiZykge1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjdGN0Y3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogJGJnIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-option-select',
                templateUrl: './option-select.component.html',
                styleUrls: ['./option-select.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/state-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/state-manager.service.ts ***!
  \**************************************************/
/*! exports provided: EnumNumberOfGames, EnumWhoStarts, numberOfGames, whoStarts, StateManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumNumberOfGames", function() { return EnumNumberOfGames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumWhoStarts", function() { return EnumWhoStarts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfGames", function() { return numberOfGames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whoStarts", function() { return whoStarts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateManagerService", function() { return StateManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var EnumNumberOfGames;
(function (EnumNumberOfGames) {
    EnumNumberOfGames["TWO"] = "TWO";
    EnumNumberOfGames["THREE"] = "THREE";
    EnumNumberOfGames["FIVE"] = "FIVE";
    EnumNumberOfGames["TEN"] = "TEN";
})(EnumNumberOfGames || (EnumNumberOfGames = {}));
var EnumWhoStarts;
(function (EnumWhoStarts) {
    EnumWhoStarts["ALTERNATE"] = "ALTERNATE";
    EnumWhoStarts["LOOSER"] = "LOOSER";
    EnumWhoStarts["WINNER"] = "WINNER";
    EnumWhoStarts["FIRST_PLAYER"] = "FIRST_PLAYER";
    EnumWhoStarts["SECOND_PLAYER"] = "SECOND_PLAYER";
})(EnumWhoStarts || (EnumWhoStarts = {}));
const numberOfGames = {
    TWO: '2 Games',
    THREE: '3 Games',
    FIVE: '5 Games',
    TEN: '10 Games'
};
const whoStarts = {
    ALTERNATE: 'Alternative turn',
    LOOSER: 'Looser first',
    WINNER: 'Winner first',
    FIRST_PLAYER: 'Always player 01',
    SECOND_PLAYER: 'Always player 02'
};
class StateManagerService {
    constructor() { }
}
StateManagerService.ɵfac = function StateManagerService_Factory(t) { return new (t || StateManagerService)(); };
StateManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateManagerService, factory: StateManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\gitrepo\ganeshk4.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map