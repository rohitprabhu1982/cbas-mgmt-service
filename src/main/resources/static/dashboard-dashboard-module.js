(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/bar-chart-demo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/bar-chart-demo.component.ts ***!
  \*******************************************************/
/*! exports provided: BarChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartDemoComponent", function() { return BarChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BarChartDemoComponent = /** @class */ (function () {
    function BarChartDemoComponent() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Activities', 'Artifacts', 'Ceremonies', 'Culture', 'Roles'];
        this.barChartType = 'horizontalBar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [3, 4, 4, 2, 1], label: 'Discovery' }
        ];
        // public randomize(): void {
        //   // Only Change 3 values
        //   let data = [
        //     Math.round(Math.random() * 100),
        //     59,
        //     80,
        //     (Math.random() * 100),
        //     56,
        //     (Math.random() * 100),
        //     40];
        //   let clone = JSON.parse(JSON.stringify(this.barChartData));
        //   clone[0].data = data;
        //   this.barChartData = clone;
        //   /**
        //    * (My guess), for Angular to recognize the change in the dataset
        //    * it has to change the dataset variable directly,
        //    * so one way around it, is to clone the data, change it and then
        //    * assign it;
        //    */
        // }
    }
    // events
    BarChartDemoComponent.prototype.chartClicked = function (e) {
    };
    BarChartDemoComponent.prototype.chartHovered = function (e) {
    };
    BarChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[bar-chart-demo]',
            template: __webpack_require__(/*! ./bar-chart-demo.template.html */ "./src/app/dashboard/bar-chart-demo.template.html")
        })
    ], BarChartDemoComponent);
    return BarChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/bar-chart-demo.template.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/bar-chart-demo.template.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div style=\"display: block\">\r\n    <!-- <canvas baseChart\r\n                  [datasets]=\"barChartData\"\r\n                  [labels]=\"barChartLabels\"\r\n                  [options]=\"barChartOptions\"\r\n                  [legend]=\"barChartLegend\"\r\n                  [chartType]=\"barChartType\"\r\n                  (chartHover)=\"chartHovered($event)\"\r\n                  (chartClick)=\"chartClicked($event)\"></canvas> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tdl_services_acquisition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tdl/services/acquisition.service */ "./src/app/tdl/services/acquisition.service.ts");
/* harmony import */ var _login_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_fb, _acquisitionService, authService) {
        this._fb = _fb;
        this._acquisitionService = _acquisitionService;
        this.authService = authService;
        this.isDataAvailable = false;
        this.acquisitionList = [];
        this.officeList = [];
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['CTP-20-C-0001', 'CTP-20-C-0002', 'CTP-20-C-003'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barFundingAmount = [];
        this.acquisitionData = [];
        this.barChartData = [
            { data: [13000.0, 11000.0, 21000.0], label: 'Funding Amount' }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartForm = this._fb.group({
            office: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this._acquisitionService.getAcquisitionOfficeData().subscribe(function (args) {
            _this.officeList = args;
        });
        this.roleList = this.authService.jwt_getRole();
        // this.busyTableSave = this._acquisitionService.getAcquisitionCTPData('OIMT', 'Contracts', 'Working').subscribe(args => {
        // 	console.log("this.rolelist", this.authService.jwt_getRole());
        //     this.acquisitionData = args;
        //     if(this.acquisitionData.length>0){
        //       this.acquisitionData.forEach(element => {
        //         this.barChartLabelsCTP.push(element.ctpLineItem)
        //         this.barFundingAmount.push(element.fundingAmount)
        //         this.barChartDataCTP[0].data = this.barFundingAmount;
        //       });
        //     }
        //     console.log("this.bar", this.barChartLabelsCTP);
        //     console.log("this.fun", this.barFundingAmount);
        // });
        // this.barChartDataCTP = [{}]
    };
    DashboardComponent.prototype.acquisition = function () {
        var _this = this;
        this._acquisitionService
            .getAcquisitionCTPDataWithOptional(this.officeName, this.roleList)
            .subscribe(function (args) {
            _this.acquisitionList = args;
            _this.barChartLabels.length = 0;
            _this.barChartData[0].data.length = 0;
            if (_this.acquisitionList.length > 0) {
                _this.acquisitionList.forEach(function (element) {
                    _this.barChartLabels.push(element.ctpLineItem);
                    _this.barChartData[0].data.push(element.fundingAmount);
                    console.log("this.chart", _this.chart);
                    _this.isDataAvailable = true;
                });
            }
            console.log("this.bar", _this.barChartLabels);
            console.log("this.fun", _this.barChartData[0]);
            // console.log("this.rolelist", this.authService.jwt_getRole());
            // if (args.length > 0) {
            //   this.acquisitionList = args;
            //   // console.log(this.acquisitionList, "acquisitionList");
            //   };
            // } else {
            //   this.acquisitionList = [];
            // }
        });
    };
    DashboardComponent.prototype.onOfficeChangeEvent = function (event) {
        this.officeName = event.target.value;
        this.isDataAvailable = false;
        // this.officeCtp = this.officeName.slice(3)
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]),
        __metadata("design:type", ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"])
    ], DashboardComponent.prototype, "chart", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.template.html */ "./src/app/dashboard/dashboard.template.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _tdl_services_acquisition_service__WEBPACK_IMPORTED_MODULE_1__["AcquisitionService"],
            _login_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: routes, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets.component */ "./src/app/dashboard/widgets.component.ts");
/* harmony import */ var _mydashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mydashboard.component */ "./src/app/dashboard/mydashboard.component.ts");
/* harmony import */ var _bar_chart_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-chart-demo.component */ "./src/app/dashboard/bar-chart-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: "", component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], pathMatch: "full" }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.routes = routes;
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _widgets_component__WEBPACK_IMPORTED_MODULE_6__["WidgetPage"],
                _mydashboard_component__WEBPACK_IMPORTED_MODULE_7__["MyDashboardPage"],
                _bar_chart_demo_component__WEBPACK_IMPORTED_MODULE_8__["BarChartDemoComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.template.html":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.template.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"card-title\">Dashboard</h1>\r\n        <form [formGroup]=\"chartForm\" (ngSubmit)=\"acquisition()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h3 class=\"subheader\">Pre-Commitment</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">Office</label>\r\n                <!-- <select class=\"form-control border border-dark\" id=\"exampleFormControlSelect1\" (change)=\"onOfficeChangeEvent($event)\" formControlName=\"office\"\r\n                        placholder=\"Select an option\">\r\n                        <option value=\"\">Select an option</option>\r\n                       <option *ngFor=\"let item of officeList\" value=\"item\">{{item}}</option>\r\n                      </select> -->\r\n                <select id=\"office\" class=\"form-control border border-dark\" placholder=\"Select an option\"\r\n                  (change)=\"onOfficeChangeEvent($event)\" formControlName=\"office\">\r\n                  <option [value]=\"null\">Select office</option>\r\n                  <option *ngFor=\"let ofc of officeList\" [value]=\"ofc\">{{ofc}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <button class=\"btn btn-primary\" [disabled]=\"!chartForm.valid\">\r\n                  Go\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n\r\n\r\n        </form>\r\n        <div class=\"row\">\r\n            <div style=\"display: block; width: 400px;\r\n            height: 200px;\" *ngIf=\"isDataAvailable\">\r\n              <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\r\n                [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\r\n              </canvas>\r\n            </div>\r\n            <!-- <div style=\"display: block;\" *ngIf=\"barChartDataCTP.length >0\">\r\n              <canvas baseChart [datasets]=\"barChartDataCTP\" [labels]=\"barChartLabelsCTP\" [options]=\"barChartOptions\"\r\n                [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\r\n              </canvas>\r\n            </div> -->\r\n          </div>\r\n        <!-- <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body px-0\">\r\n                <h4 class=\"subheader\">CTP Planned Commitment Date</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body pl-0\">\r\n                <h4 class=\"subheader\">Pre-Commitment Project Details</h4>\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleFormControlSelect1\">Acquisitions Type</label>\r\n                      <select class=\"form-control border border-dark\" id=\"exampleFormControlSelect1\"\r\n                        formControlName=\"office\" placholder=\"Select an option\">\r\n                        <option value=\"\">Select an option</option>>\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleFormControlSelect1\">Office</label>\r\n                      <select class=\"form-control border border-dark\" id=\"exampleFormControlSelect1\"\r\n                        formControlName=\"office\" placholder=\"Select an option\">\r\n                        <option value=\"\">Select an option</option>\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <h1 class=\"page-title\">Dashboard <small><small>The Lucky One</small></small></h1> -->\r\n\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <section widget class=\"widget\">\r\n      <header>\r\n        <h4>\r\n          Example <span class=\"fw-semi-bold\">Widget</span>\r\n        </h4>\r\n        <div class=\"widget-controls\">\r\n          <a data-widgster=\"expand\" title=\"Expand\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-up\"></i></a>\r\n          <a data-widgster=\"collapse\" title=\"Collapse\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-down\"></i></a>\r\n          <a href=\"#\" data-widgster=\"close\"><i class=\"glyphicon glyphicon-remove\"></i></a>\r\n        </div>\r\n      </header>\r\n      <div class=\"widget-body\">\r\n        <img class=\"pull-left mr-sm\" src=\"assets/img/a2.png\" alt=\"Angular\" width=\"100\">\r\n        <p class=\"lead\">You are looking at a completely new version of Sing App built\r\n          with brand new <strong>Angular Final Release</strong></p>\r\n        <p class=\"fs-mini\">Made by <a href=\"http://flatlogic.com\" target=\"_blank\">Flatlogic</a>.</p>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/dashboard/models/dash-tdl-info.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/models/dash-tdl-info.model.ts ***!
  \*********************************************************/
/*! exports provided: TDLDashboardInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDLDashboardInfo", function() { return TDLDashboardInfo; });
var TDLDashboardInfo = /** @class */ (function () {
    function TDLDashboardInfo() {
    }
    return TDLDashboardInfo;
}());



/***/ }),

/***/ "./src/app/dashboard/models/spendceiling.model.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/models/spendceiling.model.ts ***!
  \********************************************************/
/*! exports provided: SpendCeilingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpendCeilingInfo", function() { return SpendCeilingInfo; });
var SpendCeilingInfo = /** @class */ (function () {
    function SpendCeilingInfo() {
    }
    return SpendCeilingInfo;
}());



/***/ }),

/***/ "./src/app/dashboard/mydashboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/mydashboard.component.ts ***!
  \****************************************************/
/*! exports provided: MyDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardPage", function() { return MyDashboardPage; });
/* harmony import */ var _shared_service_date_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/service/date.service */ "./src/app/shared/service/date.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_dash_search_criteria_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/dash-search-criteria.model */ "./src/app/dashboard/models/dash-search-criteria.model.ts");
/* harmony import */ var _models_dash_tdl_info_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/dash-tdl-info.model */ "./src/app/dashboard/models/dash-tdl-info.model.ts");
/* harmony import */ var _models_spendceiling_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/spendceiling.model */ "./src/app/dashboard/models/spendceiling.model.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { CodeNumValue } from "../project/models/codenumvalue.model";
// import { PoP } from "../project/models/pop.model";




var MyDashboardPage = /** @class */ (function () {
    function MyDashboardPage(dashboardService) {
        this.dashboardService = dashboardService;
        this.selpopCode = "T03";
        this.pieTypeChartLabels = [];
        this.pieTypeChartData = [];
        this.pieStatusChartLabels = [];
        this.pieStatusChartData = [];
        this.pieChartType = "pie";
        this.pieChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            legend: {
                display: false
            }
        };
        this.pieChartColors = [
            {
                backgroundColor: [
                    "#5DA5DA",
                    "#FAA43A",
                    "#60BD68",
                    "#F17CB0",
                    "#B2912F",
                    "#B276B2",
                    "#DECF3F",
                    "#4D4D4D",
                    "#F15854"
                ],
                borderColor: [
                    "rgba(135,206,250,1)",
                    "rgba(106,90,205,1)",
                    "rgba(148,159,177,1)"
                ]
            }
        ];
        this.showErrorFlag = false;
        this.tdlDBInfo = new _models_dash_tdl_info_model__WEBPACK_IMPORTED_MODULE_5__["TDLDashboardInfo"]();
    }
    MyDashboardPage.prototype.ngOnInit = function () {
        var start = _shared_service_date_service__WEBPACK_IMPORTED_MODULE_0__["DateService"].getDateBySubtractingDaysFromToday(29);
        var end = _shared_service_date_service__WEBPACK_IMPORTED_MODULE_0__["DateService"].getToday();
        this.refreshDashboardForDateRange(_shared_service_date_service__WEBPACK_IMPORTED_MODULE_0__["DateService"].getFormattedText(start, "YYYY-MM-DD"), _shared_service_date_service__WEBPACK_IMPORTED_MODULE_0__["DateService"].getFormattedText(end, "YYYY-MM-DD"));
        this.loadProjectShortSummary();
    };
    MyDashboardPage.prototype.ngAfterViewInit = function () { };
    MyDashboardPage.prototype.ngOnDestroy = function () {
        if (this.busyLoadPops) {
            this.busyLoadPops.unsubscribe();
        }
        if (this.busytdlDBInfo) {
            this.busytdlDBInfo.unsubscribe();
        }
        if (this.busyLoadSpendCeilingInfo) {
            this.busyLoadSpendCeilingInfo.unsubscribe();
        }
        if (this.busyLoadProjectSummary) {
            this.busyLoadProjectSummary.unsubscribe();
        }
    };
    MyDashboardPage.prototype.loadProjectShortSummary = function () {
        var _this = this;
        this.busyLoadProjectSummary = this.dashboardService
            .getTopUpcomingProjectsDue()
            .subscribe(function (data) {
            if (data) {
                _this.listProjects = data;
            }
        }, function (error) {
            // this.showErrorFlag = true;
            // this.alerts = [];
            // this.alerts.push({ type: "warning", msg: error });
        });
    };
    MyDashboardPage.prototype.loadTDLInfo = function (dsc) {
        var _this = this;
        var handler = this;
        // Total Active TDL Numbers, Cost and Hours
        this.busytdlDBInfo = this.dashboardService
            .getTDLDashboardInfo(dsc)
            .subscribe(function (data) {
            if (data) {
                handler.tdlDBInfo = data;
            }
        }, function (error) {
            _this.showErrorFlag = true;
            // this.alerts = [];
            // this.alerts.push({type: 'warning', msg: error});
        });
    };
    MyDashboardPage.prototype.loadTDLTypeInfo = function (dsc) {
        var _this = this;
        var handler = this;
        // Total Active TDL Numbers, Cost and Hours
        this.busytdlDBInfo = this.dashboardService
            .getTDLDashboardTypeInfo(dsc)
            .subscribe(function (data) {
            if (data) {
                handler.tdlTypeBreakdownInfo = data;
                var typebdlabels = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](handler.tdlTypeBreakdownInfo, "code");
                handler.pieTypeChartData = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](handler.tdlTypeBreakdownInfo, "numvalue");
                handler.pieTypeChartLabels.length = 0;
                for (var i = 0; i < typebdlabels.length; i++) {
                    handler.pieTypeChartLabels.push(typebdlabels[i]);
                }
            }
        }, function (error) {
            _this.showErrorFlag = true;
            // this.alerts = [];
            // this.alerts.push({type: 'warning', msg: error});
        });
    };
    MyDashboardPage.prototype.loadTDLStatusInfo = function (dsc) {
        var _this = this;
        var handler = this;
        // Total Active TDL Numbers, Cost and Hours
        this.busytdlDBInfo = this.dashboardService
            .getTDLDashboardStatusInfo(dsc)
            .subscribe(function (data) {
            if (data) {
                handler.tdlStatusBreakdownInfo = data;
                var statusbdlabels = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](handler.tdlStatusBreakdownInfo, "code");
                handler.pieStatusChartData = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](handler.tdlStatusBreakdownInfo, "numvalue");
                _this.pieStatusChartLabels.length = 0;
                for (var i = 0; i < statusbdlabels.length; i++) {
                    _this.pieStatusChartLabels.push(statusbdlabels[i]);
                }
            }
        }, function (error) {
            _this.showErrorFlag = true;
            // this.alerts = [];
            // this.alerts.push({type: 'warning', msg: error});
        });
    };
    MyDashboardPage.prototype.getProjectedSpendValue = function (code) {
        var retValue = 0.0;
        var si = new _models_spendceiling_model__WEBPACK_IMPORTED_MODULE_6__["SpendCeilingInfo"]();
        var rowIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.projSpendInfo, function (o) {
            return o.category === code;
        });
        if (rowIndex !== -1) {
            retValue = this.projSpendInfo[rowIndex].cost;
        }
        return retValue;
    };
    MyDashboardPage.prototype.getProjectedSpendPercent = function (code) {
        var retValue = 0.0;
        var rowIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.projSpendInfo, function (o) {
            return o.category === code;
        });
        if (rowIndex !== -1) {
            retValue =
                this.projSpendInfo[rowIndex].spendLimit === 0.0
                    ? 0.0
                    : this.projSpendInfo[rowIndex].cost /
                        this.projSpendInfo[rowIndex].spendLimit;
        }
        return retValue;
    };
    MyDashboardPage.prototype.getProjectedSpendPercentStyle = function (code) {
        var styles = {
            width: (this.getProjectedSpendPercent(code) * 100.0).toString() + "%"
        };
        return styles;
    };
    MyDashboardPage.prototype.getActualSpendValue = function (code) {
        var retValue = 0.0;
        var si = new _models_spendceiling_model__WEBPACK_IMPORTED_MODULE_6__["SpendCeilingInfo"]();
        var rowIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.actSpendInfo, function (o) {
            return o.category === code;
        });
        if (rowIndex !== -1) {
            retValue = this.actSpendInfo[rowIndex].cost;
        }
        return retValue;
    };
    MyDashboardPage.prototype.getActualSpendPercent = function (code) {
        var retValue = 0.0;
        var rowIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.actSpendInfo, function (o) {
            return o.category === code;
        });
        if (rowIndex !== -1) {
            retValue =
                this.actSpendInfo[rowIndex].spendLimit === 0.0
                    ? 0.0
                    : this.actSpendInfo[rowIndex].cost /
                        this.actSpendInfo[rowIndex].spendLimit;
        }
        return retValue;
    };
    MyDashboardPage.prototype.getActualSpendPercentStyle = function (code) {
        var styles = {
            width: (this.getActualSpendPercent(code) * 100.0).toString() + "%"
        };
        return styles;
    };
    MyDashboardPage.prototype.loadSpendCeilingInfo = function (dsc) {
        var _this = this;
        var handler = this;
        // Total Active TDL Numbers, Cost and Hours
        var loadprojspend = this.dashboardService.getDashboardProjectedSpendInfo(dsc);
        var loadactspend = this.dashboardService.getDashboardActualSpendInfo(dsc);
        this.busyLoadSpendCeilingInfo = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            loadprojspend,
            loadactspend
        ]).subscribe(function (data) {
            if (data) {
                handler.projSpendInfo = data[0];
                handler.actSpendInfo = data[1];
            }
        }, function (error) {
            _this.showErrorFlag = true;
            // this.alerts = [];
            // this.alerts.push({type: 'warning', msg: error});
        });
    };
    MyDashboardPage.prototype.refreshDashboardForDateRange = function (start, end) {
        var dsc = new _models_dash_search_criteria_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSearchCriteria"]();
        dsc.dtFrom = start;
        dsc.dtTo = end;
        dsc.popCode = this.selpopCode;
        dsc.resourceID = -1;
        this.loadTDLInfo(dsc);
        this.loadTDLStatusInfo(dsc);
        this.loadTDLTypeInfo(dsc);
        this.loadSpendCeilingInfo(dsc);
    };
    MyDashboardPage.prototype.getProjectPercentComplete = function (proj) {
        var percent = 0.0;
        if (proj.planCost > 0.0) {
            percent = proj.actualCost / proj.planCost;
        }
        return percent;
    };
    MyDashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "[my-dashboard]",
            template: __webpack_require__(/*! ./mydashboard.template.html */ "./src/app/dashboard/mydashboard.template.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [],
            styles: [__webpack_require__(/*! ./mydashboard.style.scss */ "./src/app/dashboard/mydashboard.style.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], MyDashboardPage);
    return MyDashboardPage;
}());



/***/ }),

/***/ "./src/app/dashboard/mydashboard.style.scss":
/*!**************************************************!*\
  !*** ./src/app/dashboard/mydashboard.style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n\r\n * Typography\r\n * ======================================================================== */\n.ng-busy {\n  z-index: 1002; }\n.ng-busy,\n.ng-busy > *,\n.ng-busy > dynamiccomponent > * {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px; }\n.ng-busy-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  background: #fff;\n  opacity: .7; }\n.ng-busy-default-wrapper {\n  text-align: center; }\n.ng-busy-default-sign {\n  position: relative;\n  display: inline-block;\n  z-index: 1003;\n  padding: 12px 14px;\n  border: 1px solid #d8d8d8;\n  border-top: 0;\n  border-radius: 4px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  background: #f8f8f8;\n  color: #333; }\n.ng-busy-default-text {\n  display: inline-block;\n  margin-left: 6px;\n  max-width: 400px;\n  font-size: 14px;\n  text-align: left; }\n.ng-busy-default-spinner {\n  position: relative;\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: middle; }\n.ng-busy-default-spinner div {\n  position: absolute;\n  left: 44.5%;\n  top: 37%;\n  width: 10%;\n  height: 26%;\n  background: #666;\n  border-radius: 50px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  -webkit-animation: busy-spinner-anim 1s linear infinite;\n  animation: busy-spinner-anim 1s linear infinite; }\n.ng-busy-default-spinner .bar1 {\n  -webkit-transform: rotate(0deg) translate(0, -142%);\n  transform: rotate(0deg) translate(0, -142%);\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n.ng-busy-default-spinner .bar2 {\n  -webkit-transform: rotate(30deg) translate(0, -142%);\n  transform: rotate(30deg) translate(0, -142%);\n  -webkit-animation-delay: -0.91666667s;\n  animation-delay: -0.91666667s; }\n.ng-busy-default-spinner .bar3 {\n  -webkit-transform: rotate(60deg) translate(0, -142%);\n  transform: rotate(60deg) translate(0, -142%);\n  -webkit-animation-delay: -0.83333333s;\n  animation-delay: -0.83333333s; }\n.ng-busy-default-spinner .bar4 {\n  -webkit-transform: rotate(90deg) translate(0, -142%);\n  transform: rotate(90deg) translate(0, -142%);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s; }\n.ng-busy-default-spinner .bar5 {\n  -webkit-transform: rotate(120deg) translate(0, -142%);\n  transform: rotate(120deg) translate(0, -142%);\n  -webkit-animation-delay: -0.66666667s;\n  animation-delay: -0.66666667s; }\n.ng-busy-default-spinner .bar6 {\n  -webkit-transform: rotate(150deg) translate(0, -142%);\n  transform: rotate(150deg) translate(0, -142%);\n  -webkit-animation-delay: -0.58333333s;\n  animation-delay: -0.58333333s; }\n.ng-busy-default-spinner .bar7 {\n  -webkit-transform: rotate(180deg) translate(0, -142%);\n  transform: rotate(180deg) translate(0, -142%);\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n.ng-busy-default-spinner .bar8 {\n  -webkit-transform: rotate(210deg) translate(0, -142%);\n  transform: rotate(210deg) translate(0, -142%);\n  -webkit-animation-delay: -0.41666667s;\n  animation-delay: -0.41666667s; }\n.ng-busy-default-spinner .bar9 {\n  -webkit-transform: rotate(240deg) translate(0, -142%);\n  transform: rotate(240deg) translate(0, -142%);\n  -webkit-animation-delay: -0.33333333s;\n  animation-delay: -0.33333333s; }\n.ng-busy-default-spinner .bar10 {\n  -webkit-transform: rotate(270deg) translate(0, -142%);\n  transform: rotate(270deg) translate(0, -142%);\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s; }\n.ng-busy-default-spinner .bar11 {\n  -webkit-transform: rotate(300deg) translate(0, -142%);\n  transform: rotate(300deg) translate(0, -142%);\n  -webkit-animation-delay: -0.16666667s;\n  animation-delay: -0.16666667s; }\n.ng-busy-default-spinner .bar12 {\n  -webkit-transform: rotate(330deg) translate(0, -142%);\n  transform: rotate(330deg) translate(0, -142%);\n  -webkit-animation-delay: -0.08333333s;\n  animation-delay: -0.08333333s; }\n@-webkit-keyframes busy-spinner-anim {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0.25; } }\n@keyframes busy-spinner-anim {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0.25; } }\n.daterangepicker {\n  position: absolute;\n  color: inherit;\n  background-color: #fff;\n  border-radius: 4px;\n  width: 278px;\n  padding: 4px;\n  margin-top: 1px;\n  top: 100px;\n  left: 20px;\n  /* Calendars */ }\n.daterangepicker:before, .daterangepicker:after {\n    position: absolute;\n    display: inline-block;\n    border-bottom-color: rgba(0, 0, 0, 0.2);\n    content: ''; }\n.daterangepicker:before {\n    top: -7px;\n    border-right: 7px solid transparent;\n    border-left: 7px solid transparent;\n    border-bottom: 7px solid #ccc; }\n.daterangepicker:after {\n    top: -6px;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid #fff;\n    border-left: 6px solid transparent; }\n.daterangepicker.opensleft:before {\n    right: 9px; }\n.daterangepicker.opensleft:after {\n    right: 10px; }\n.daterangepicker.openscenter:before {\n    left: 0;\n    right: 0;\n    width: 0;\n    margin-left: auto;\n    margin-right: auto; }\n.daterangepicker.openscenter:after {\n    left: 0;\n    right: 0;\n    width: 0;\n    margin-left: auto;\n    margin-right: auto; }\n.daterangepicker.opensright:before {\n    left: 9px; }\n.daterangepicker.opensright:after {\n    left: 10px; }\n.daterangepicker.dropup {\n    margin-top: -5px; }\n.daterangepicker.dropup:before {\n      top: initial;\n      bottom: -7px;\n      border-bottom: initial;\n      border-top: 7px solid #ccc; }\n.daterangepicker.dropup:after {\n      top: initial;\n      bottom: -6px;\n      border-bottom: initial;\n      border-top: 6px solid #fff; }\n.daterangepicker.dropdown-menu {\n    max-width: none;\n    z-index: 3001; }\n.daterangepicker.single .ranges, .daterangepicker.single .calendar {\n    float: none; }\n.daterangepicker.show-calendar .calendar {\n    display: block; }\n.daterangepicker .calendar {\n    display: none;\n    max-width: 270px;\n    margin: 4px; }\n.daterangepicker .calendar.single .calendar-table {\n      border: none; }\n.daterangepicker .calendar th, .daterangepicker .calendar td {\n      white-space: nowrap;\n      text-align: center;\n      min-width: 32px; }\n.daterangepicker .calendar-table {\n    border: 1px solid #fff;\n    padding: 4px;\n    border-radius: 4px;\n    background-color: #fff; }\n.daterangepicker table {\n    width: 100%;\n    margin: 0; }\n.daterangepicker td, .daterangepicker th {\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 4px;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    cursor: pointer; }\n.daterangepicker td.available:hover, .daterangepicker th.available:hover {\n      background-color: #eee;\n      border-color: transparent;\n      color: inherit; }\n.daterangepicker td.week, .daterangepicker th.week {\n      font-size: 80%;\n      color: #ccc; }\n.daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {\n    background-color: #fff;\n    border-color: transparent;\n    color: #999; }\n.daterangepicker td.in-range {\n    background-color: #ebf4f8;\n    border-color: transparent;\n    color: #000;\n    border-radius: 0; }\n.daterangepicker td.start-date {\n    border-radius: 4px 0 0 4px; }\n.daterangepicker td.end-date {\n    border-radius: 0 4px 4px 0; }\n.daterangepicker td.start-date.end-date {\n    border-radius: 4px; }\n.daterangepicker td.active, .daterangepicker td.active:hover {\n    background-color: #357ebd;\n    border-color: transparent;\n    color: #fff; }\n.daterangepicker th.month {\n    width: auto; }\n.daterangepicker td.disabled, .daterangepicker option.disabled {\n    color: #999;\n    cursor: not-allowed;\n    text-decoration: line-through; }\n.daterangepicker select.monthselect, .daterangepicker select.yearselect {\n    font-size: 12px;\n    padding: 1px;\n    height: auto;\n    margin: 0;\n    cursor: default; }\n.daterangepicker select.monthselect {\n    margin-right: 2%;\n    width: 56%; }\n.daterangepicker select.yearselect {\n    width: 40%; }\n.daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {\n    width: 50px;\n    margin-bottom: 0; }\n.daterangepicker .input-mini {\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    color: #555;\n    height: 30px;\n    line-height: 30px;\n    display: block;\n    vertical-align: middle;\n    margin: 0 0 5px 0;\n    padding: 0 6px 0 28px;\n    width: 100%; }\n.daterangepicker .input-mini.active {\n      border: 1px solid #08c;\n      border-radius: 4px; }\n.daterangepicker .daterangepicker_input {\n    position: relative; }\n.daterangepicker .daterangepicker_input i {\n      position: absolute;\n      left: 8px;\n      top: 8px; }\n.daterangepicker.rtl .input-mini {\n    padding-right: 28px;\n    padding-left: 6px; }\n.daterangepicker.rtl .daterangepicker_input i {\n    left: auto;\n    right: 8px; }\n.daterangepicker .calendar-time {\n    text-align: center;\n    margin: 5px auto;\n    line-height: 30px;\n    position: relative;\n    padding-left: 28px; }\n.daterangepicker .calendar-time select.disabled {\n      color: #ccc;\n      cursor: not-allowed; }\n.ranges {\n  font-size: 11px;\n  float: none;\n  margin: 4px;\n  text-align: left; }\n.ranges ul {\n    list-style: none;\n    margin: 0 auto;\n    padding: 0;\n    width: 100%; }\n.ranges li {\n    font-size: 13px;\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    border-radius: 4px;\n    color: #08c;\n    padding: 3px 12px;\n    margin-bottom: 8px;\n    cursor: pointer; }\n.ranges li:hover {\n      background-color: #08c;\n      border: 1px solid #08c;\n      color: #fff; }\n.ranges li.active {\n      background-color: #08c;\n      border: 1px solid #08c;\n      color: #fff; }\n/*  Larger Screen Styling */\n@media (min-width: 564px) {\n  .daterangepicker {\n    width: auto; }\n    .daterangepicker .ranges ul {\n      width: 160px; }\n    .daterangepicker.single .ranges ul {\n      width: 100%; }\n    .daterangepicker.single .calendar.left {\n      clear: none; }\n    .daterangepicker.single.ltr .ranges, .daterangepicker.single.ltr .calendar {\n      float: left; }\n    .daterangepicker.single.rtl .ranges, .daterangepicker.single.rtl .calendar {\n      float: right; }\n    .daterangepicker.ltr {\n      direction: ltr;\n      text-align: left; }\n      .daterangepicker.ltr .calendar.left {\n        clear: left;\n        margin-right: 0; }\n        .daterangepicker.ltr .calendar.left .calendar-table {\n          border-right: none;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n      .daterangepicker.ltr .calendar.right {\n        margin-left: 0; }\n        .daterangepicker.ltr .calendar.right .calendar-table {\n          border-left: none;\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n      .daterangepicker.ltr .left .daterangepicker_input {\n        padding-right: 12px; }\n      .daterangepicker.ltr .calendar.left .calendar-table {\n        padding-right: 12px; }\n      .daterangepicker.ltr .ranges, .daterangepicker.ltr .calendar {\n        float: left; }\n    .daterangepicker.rtl {\n      direction: rtl;\n      text-align: right; }\n      .daterangepicker.rtl .calendar.left {\n        clear: right;\n        margin-left: 0; }\n        .daterangepicker.rtl .calendar.left .calendar-table {\n          border-left: none;\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n      .daterangepicker.rtl .calendar.right {\n        margin-right: 0; }\n        .daterangepicker.rtl .calendar.right .calendar-table {\n          border-right: none;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n      .daterangepicker.rtl .left .daterangepicker_input {\n        padding-left: 12px; }\n      .daterangepicker.rtl .calendar.left .calendar-table {\n        padding-left: 12px; }\n      .daterangepicker.rtl .ranges, .daterangepicker.rtl .calendar {\n        text-align: right;\n        float: right; } }\n@media (min-width: 730px) {\n  .daterangepicker .ranges {\n    width: auto; }\n  .daterangepicker.ltr .ranges {\n    float: left; }\n  .daterangepicker.rtl .ranges {\n    float: right; }\n  .daterangepicker .calendar.left {\n    clear: none !important; } }\n.mt10 {\n  margin-top: 10px; }\n.progress100 {\n  width: 100%; }\n.height200 {\n  height: 200px; }\n.height300 {\n  height: 300px; }\n.live-tile a:link,\n.list-tile a:link,\n.copy-tile a:link,\n.live-tile a:visited,\n.list-tile a:visited,\n.copy-tile a:visited {\n  color: inherit; }\n.live-tile,\n.list-tile,\n.copy-tile,\n.tile-strip .flip-list > li {\n  height: auto;\n  width: 100%;\n  margin: 0;\n  color: inherit; }\n.live-tile.fade,\n  .list-tile.fade,\n  .copy-tile.fade,\n  .tile-strip .flip-list > li.fade {\n    opacity: 1; }\n.live-tile p,\n.list-tile p,\n.copy-tile p {\n  padding: 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcYXNhcGFcXERvY3VtZW50c1xcQ2Jhc3NcXGNiYXNyZXBvXFxjYmFzLXVpL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvQzpcXFVzZXJzXFxhc2FwYVxcRG9jdW1lbnRzXFxDYmFzc1xcY2Jhc3JlcG9cXGNiYXMtdWkvc3JjXFxzY3NzXFxidXN5LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXHNjc3NcXGRhdGVyYW5nZXBpY2tlci5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvQzpcXFVzZXJzXFxhc2FwYVxcRG9jdW1lbnRzXFxDYmFzc1xcY2Jhc3JlcG9cXGNiYXMtdWkvc3JjXFxhcHBcXGRhc2hib2FyZFxcbXlkYXNoYm9hcmQuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTs7OzhFQUc4RTtBQ2hCOUU7RUFDRSxjQUFhLEVBQ2Q7QUFDRDs7O0VBR0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVcsRUFDWjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLFlBQVcsRUFDWjtBQUNEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiwwQ0FBeUM7RUFDekMsb0JBQW1CO0VBQ25CLFlBQVcsRUFDWjtBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZ0JBQWU7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VUFBUztFQUNULGVBQWMsRUFLakI7QUFaRDs7OztJQVVRLFdBQVUsRUFDYjtBQUdMOzs7RUFHSSxXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbXlkYXNoYm9hcmQuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbmcgdmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWluY2x1ZGUtYm9udXM6IGZhbHNlICFkZWZhdWx0O1xyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtY2xhc3MtcHJlZml4OiBnbHlwaGljb24gIWRlZmF1bHQ7XHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LWJhc2Utc2l6ZTogMTRweCAhZGVmYXVsdDtcclxuXHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LXBhdGg6ICd+L2ZvbnRzL2dseXBoaWNvbnMnICFkZWZhdWx0O1xyXG4kZmEtZm9udC1wYXRoOiAnfi9mb250LWF3ZXNvbWUvZm9udHMnICFkZWZhdWx0O1xyXG5cclxuLypcclxuXHJcbiAqIFR5cG9ncmFwaHlcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiRmb250LXNpemUtaW5pdGlhbDogMTRweDsgLy8gcmVzZXQgZGVmYXVsdCBicm93c2VyIHZhbHVlIGZyb20gMTZweCB0byAxM3B4XHJcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGFyZ2VyOiAxLjFyZW07XHJcbiRmb250LXNpemUtbWluaTogMC45cmVtO1xyXG4kZm9udC1zaXplLWluZGV4OiAwLjdyZW07XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcbi8vXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAjZWVlZWVlICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICM4NjhlOTYgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogIzU1NSAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktbGlnaHQ6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGJsdWU6ICM1ZDhmYzIgIWRlZmF1bHQ7XHJcbiRyZWQ6ICNkZDU4MjYgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICNmMGI1MTggIWRlZmF1bHQ7XHJcbiRncmVlbjogIzY0YmQ2MyAhZGVmYXVsdDtcclxuJGN5YW46ICM1ZGM0YmYgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAocHJpbWFyeTogJGJsdWUsXHJcbnNlY29uZGFyeTogJGdyYXktNjAwLFxyXG5zdWNjZXNzOiAkZ3JlZW4sXHJcbnByaW1hcnktbGlnaHQ6ICNkZWU0ZWUsXHJcbnN1Y2Nlc3MtbGlnaHQ6ICNlY2ZhZWMsXHJcbmluZm8tbGlnaHQ6ICNmMmZhZmEsXHJcbndhcm5pbmctbGlnaHQ6ICNmZGY3ZTYsXHJcbmRhbmdlci1saWdodDogI2ZmZjJlZixcclxuaW5mbzogJGN5YW4sXHJcbndhcm5pbmc6ICR5ZWxsb3csXHJcbmRhbmdlcjogJHJlZCxcclxuZGFyazogJGdyYXktODAwLFxyXG5pbnZlcnNlOiAkZ3JheS03MDAsXHJcbmdyYXk6ICRncmF5LTMwMCxcclxuZGVmYXVsdDogI2Y4ZjhmOCk7XHJcblxyXG4kbGluay1jb2xvcjogIzIxOGJjMztcclxuXHJcbiR0ZXh0LWNvbG9yOiAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LXRoaW46IDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLXNtYWxsZXI6IDg1JSAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGFkZGl0aW9uLWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG5cclxuJGJvZHktYmc6IGxpZ2h0Z3JheSAhZGVmYXVsdDsgLy8gI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGJvZHktYmctbGlnaHQ6IGxpZ2h0ZW4oJGJvZHktYmcsIDMlKTtcclxuXHJcbi8vPT0gQ29tcG9uZW50c1xyXG4vL1xyXG5cclxuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAwLjI1cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tYmFzZS1ob3Jpem9udGFsOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1sYXJnZS1ob3Jpem9udGFsOiAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1zbWFsbC12ZXJ0aWNhbDogMC4yNXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IC4zcmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmc6IDE0cHg7XHJcblxyXG4vLz09IFNpZGViYXJcclxuLy9cclxuJHNpZGViYXItcGFkZGluZy1ob3Jpem9udGFsOiAxMXB4O1xyXG4kc2lkZWJhci13aWR0aC1vcGVuOiAyMjBweDtcclxuJHNpZGViYXItd2lkdGgtY2xvc2VkOiA1MHB4O1xyXG4kc2lkZWJhci10cmFuc2l0aW9uLXRpbWU6IDAuM3MgIWRlZmF1bHQ7XHJcbiRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoOiA0cHg7XHJcbiRzaWRlYmFyLXdpZHRoOiAkc2lkZWJhci13aWR0aC1vcGVuKyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJHNpZGViYXItYmctY29sb3I6ICMxNzUyOUY7XHJcbiRzaWRlYmFyLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kc2lkZWJhci1pdGVtLWJvcmRlci1jb2xvcjogIzJkMmQyZDtcclxuJHNpZGViYXItaXRlbS1hY3RpdmUtY29sb3I6ICNmMmJlMzU7XHJcbiRzaWRlYmFyLWl0ZW0taG92ZXItYmctY29sb3I6ICMxMTE7XHJcblxyXG4kY2hhdC1zaWRlYmFyLWJnLWNvbG9yOiAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiRjaGF0LXNpZGViYXItd2lkdGg6IDI1MHB4KyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItZGl2aWRlcjogJyc7XHJcbiRicmVhZGNydW1iLXBhZGRpbmcteTogMDtcclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50O1xyXG5cclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4kd2lkZ2V0LWJnOiAjZmZmO1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAjNDQ0O1xyXG4kd2lkZ2V0LXNoYWRvdzogMCAwIDEwcHggZGFya2VuKCRib2R5LWJnLCA1JSk7XHJcblxyXG5cclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNHJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDAuOHJlbTtcclxuXHJcbiRpbnB1dC1oZWlnaHQtc21hbGw6IDMwcHg7XHJcblxyXG4vLz09IE5hdmJhclxyXG4vL1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDUwcHggIWRlZmF1bHQ7XHJcbiRuYXZiYXItcGFkZGluZy15OiAwICFkZWZhdWx0O1xyXG4kbmF2YmFyLXBhZGRpbmcteDogMCAhZGVmYXVsdDtcclxuXHJcbiRuYXZiYXItZGFzaGJvYXJkLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWNvbG9yOiAjNzc3ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1ib3JkZXI6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1iZywgNi41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgbGlua3NcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvcjogIzY2NiAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBsaW5rc1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWNvbG9yOiAjMzMzICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1hY3RpdmUtY29sb3I6ICM1NTUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstYWN0aXZlLWJnOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYmcsIDYuNSUpICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWNvbG9yOiAjY2NjICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBicmFuZCBsYWJlbFxyXG4kbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvcjogJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvciAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItY29sb3I6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvciwgMTAlKSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIHRvZ2dsZVxyXG4kbmF2YmFyLWRhc2hib2FyZC10b2dnbGUtaG92ZXItYmc6ICNkZGQgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLXRvZ2dsZS1pY29uLWJhci1iZzogIzg4OCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtdG9nZ2xlLWJvcmRlci1jb2xvcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBDb250ZW50XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRjb250ZW50LXBhZGRpbmc6IDQwcHg7XHJcbiRjb250ZW50LXBhZGRpbmctdG9wOiAkY29udGVudC1wYWRkaW5nKyRuYXZiYXItaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuLy8gU2NyZWVuc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kc2NyZWVuLWxnLWhlaWdodDogNjcwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vXHJcbiRidG4tZGVmYXVsdC1iZzogJGFkZGl0aW9uLWJnICFkZWZhdWx0O1xyXG4kYnRuLWRlZmF1bHQtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkdGV4dC1jb2xvcjtcclxuXHJcbi8vIFdpZGdldHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kd2lkZ2V0LXBhZGRpbmctdmVydGljYWw6IDE1cHggIWRlZmF1bHQ7XHJcbiR3aWRnZXQtcGFkZGluZy1ob3Jpem9udGFsOiAyMHB4ICFkZWZhdWx0O1xyXG4kd2lkZ2V0LWJnLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4vLz09IE5hdnNcclxuLy9cclxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy89PSBGb3Jtc1xyXG4vL1xyXG4kaW5wdXQtYm9yZGVyLWZvY3VzOiAjNGQ5MGZlICFkZWZhdWx0OyAvL3dlYmtpdCBmb2N1cyBjb2xvclxyXG4kbGVnZW5kLWNvbG9yOiBsaWdodGVuKCR0ZXh0LWNvbG9yLCAxNSUpICFkZWZhdWx0O1xyXG5cclxuJHByZS1iZzogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuXHJcbiRjdXJzb3ItZGlzYWJsZWQ6IG5vdC1hbGxvd2VkICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybSBzdGF0ZXMgYW5kIGFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29sb3JzIGZvciBmb3JtIGZlZWRiYWNrIHN0YXRlcyBhbmQsIGJ5IGRlZmF1bHQsIGFsZXJ0cy5cclxuXHJcbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICMzYzc2M2QgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1zdWNjZXNzLWJnOiAjZGZmMGQ4ICFkZWZhdWx0O1xyXG4kc3RhdGUtc3VjY2Vzcy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtc3VjY2Vzcy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWluZm8tdGV4dDogIzMxNzA4ZiAhZGVmYXVsdDtcclxuJHN0YXRlLWluZm8tYmc6ICNkOWVkZjcgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1pbmZvLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1pbmZvLWJnLCA3JSkgIWRlZmF1bHQ7XHJcblxyXG4kc3RhdGUtd2FybmluZy10ZXh0OiAjOGE2ZDNiICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1iZzogI2ZjZjhlMyAhZGVmYXVsdDtcclxuJG1hcmstYmc6ICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtd2FybmluZy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWRhbmdlci10ZXh0OiAjYTk0NDQyICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJnOiAjZjJkZWRlICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbi8vKiAgUG9wb3ZlciAgKi9cclxuJHBvcG92ZXItYmc6ICNlYmVmZjEgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuJGJyYW5kLXByaW1hcnk6IGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyOiAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhbmVsLWJnOiAjZmZmICFkZWZhdWx0O1xyXG4kcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnOiAjZjVmNWY1ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMDAwICFkZWZhdWx0O1xyXG4kZ3JheS1kYXJrZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXHJcbiRncmF5LWRhcms6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzM1xyXG4kZ3JheTogbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcclxuJGdyYXktbGlnaHQ6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XHJcbiRncmF5LWxpZ2h0ZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXHJcbiRncmF5LXNlbWktbGlnaHRlcjogJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40Mjg1NzE0MjkgIWRlZmF1bHQ7IC8vIDIwLzE0XHJcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXHJcbiRsaW5lLWhlaWdodC1jb21wdXRlZDogZmxvb3IoKCRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlKSkgIWRlZmF1bHQ7IC8vIH4yMHB4XHJcblxyXG4kYnJhbmQtcHJpbWFyeTogZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XHJcbiRicmFuZC1zdWNjZXNzOiAjNWNiODVjICFkZWZhdWx0O1xyXG4kYnJhbmQtaW5mbzogIzViYzBkZSAhZGVmYXVsdDtcclxuJGJyYW5kLXdhcm5pbmc6ICNmMGFkNGUgIWRlZmF1bHQ7XHJcbiRicmFuZC1kYW5nZXI6ICNkOTUzNGYgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcbiRzcGFjZXIteTogMSBlbSAhZGVmYXVsdDsiLCIubmctYnVzeSB7XHJcbiAgei1pbmRleDogMTAwMjtcclxufVxyXG4ubmctYnVzeSxcclxuLm5nLWJ1c3kgPiAqLFxyXG4ubmctYnVzeSA+IGR5bmFtaWNjb21wb25lbnQgPiAqIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuLm5nLWJ1c3ktYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTAwMTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG9wYWNpdHk6IC43O1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtc2lnbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB6LWluZGV4OiAxMDAzO1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ubmctYnVzeS1kZWZhdWx0LXRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm5nLWJ1c3ktZGVmYXVsdC1zcGlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtc3Bpbm5lciBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA0NC41JTtcclxuICB0b3A6IDM3JTtcclxuICB3aWR0aDogMTAlO1xyXG4gIGhlaWdodDogMjYlO1xyXG4gIGJhY2tncm91bmQ6ICM2NjY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidXN5LXNwaW5uZXItYW5pbSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IGJ1c3ktc3Bpbm5lci1hbmltIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4ubmctYnVzeS1kZWZhdWx0LXNwaW5uZXIgLmJhcjEge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlKDAsIC0xNDIlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtc3Bpbm5lciAuYmFyMiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDAsIC0xNDIlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45MTY2NjY2N3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjkxNjY2NjY3cztcclxufVxyXG4ubmctYnVzeS1kZWZhdWx0LXNwaW5uZXIgLmJhcjMge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlKDAsIC0xNDIlKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuODMzMzMzMzNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44MzMzMzMzM3M7XHJcbn1cclxuLm5nLWJ1c3ktZGVmYXVsdC1zcGlubmVyIC5iYXI0IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjc1cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtc3Bpbm5lciAuYmFyNSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjY2NjY2NjY3cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNjY2NjY2NjdzO1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtc3Bpbm5lciAuYmFyNiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjU4MzMzMzMzcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNTgzMzMzMzNzO1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtc3Bpbm5lciAuYmFyNyB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxufVxyXG4ubmctYnVzeS1kZWZhdWx0LXNwaW5uZXIgLmJhcjgge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40MTY2NjY2N3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjQxNjY2NjY3cztcclxufVxyXG4ubmctYnVzeS1kZWZhdWx0LXNwaW5uZXIgLmJhcjkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMzMzMzMzM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMzMzMzMzMzcztcclxufVxyXG4ubmctYnVzeS1kZWZhdWx0LXNwaW5uZXIgLmJhcjEwIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlKDAsIC0xNDIlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlKDAsIC0xNDIlKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMjVzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XHJcbn1cclxuLm5nLWJ1c3ktZGVmYXVsdC1zcGlubmVyIC5iYXIxMSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpIHRyYW5zbGF0ZSgwLCAtMTQyJSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2NjY2NjY3cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTY2NjY2NjdzO1xyXG59XHJcbi5uZy1idXN5LWRlZmF1bHQtc3Bpbm5lciAuYmFyMTIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4wODMzMzMzM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA4MzMzMzMzcztcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnVzeS1zcGlubmVyLWFuaW0ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMC4yNTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBidXN5LXNwaW5uZXItYW5pbSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwLjI1O1xyXG4gIH1cclxufVxyXG4iLCIvL1xyXG4vLyBBIHN0eWxlc2hlZXQgZm9yIHVzZSB3aXRoIEJvb3RzdHJhcCAzLnhcclxuLy8gQGF1dGhvcjogRGFuIEdyb3NzbWFuIGh0dHA6Ly93d3cuZGFuZ3Jvc3NtYW4uaW5mby9cclxuLy8gQGNvcHlyaWdodDogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTUgRGFuIEdyb3NzbWFuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBAbGljZW5zZTogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuLy8gQHdlYnNpdGU6IGh0dHBzOi8vd3d3LmltcHJvdmVseS5jb20vXHJcbi8vXHJcblxyXG4vL1xyXG4vLyBWQVJJQUJMRVNcclxuLy9cclxuXHJcbi8vXHJcbi8vIFNldHRpbmdzXHJcblxyXG4vLyBUaGUgY2xhc3MgbmFtZSB0byBjb250YWluIGV2ZXJ5dGhpbmcgd2l0aGluLlxyXG4kcHJlZml4LWNsYXNzOiBkYXRlcmFuZ2VwaWNrZXI7XHJcbiRhcnJvdy1zaXplOiAgICAgN3B4ICFkZWZhdWx0O1xyXG5cclxuLy9cclxuLy8gQ29sb3JzXHJcbiRkYXRlcmFuZ2VwaWNrZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItYmctY29sb3I6ICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XHJcblxyXG4kZGF0ZXJhbmdlcGlja2VyLWNlbGwtY29sb3I6ICAgICAgICAgICAgICAgICAkZGF0ZXJhbmdlcGlja2VyLWNvbG9yICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLWNlbGwtYm9yZGVyLWNvbG9yOiAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1jZWxsLWJnLWNvbG9yOiAgICAgICAgICAgICAgJGRhdGVyYW5nZXBpY2tlci1iZy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ob3Zlci1jb2xvcjogICAgICAgICAgICRkYXRlcmFuZ2VwaWNrZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I6ICAgICRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ob3Zlci1iZy1jb2xvcjogICAgICAgICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4kZGF0ZXJhbmdlcGlja2VyLWluLXJhbmdlLWNvbG9yOiAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLWluLXJhbmdlLWJvcmRlci1jb2xvcjogICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1pbi1yYW5nZS1iZy1jb2xvcjogICAgICAgICAgI2ViZjRmOCAhZGVmYXVsdDtcclxuXHJcbiRkYXRlcmFuZ2VwaWNrZXItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItYWN0aXZlLWJnLWNvbG9yOiAgICAgICAgICAgICMzNTdlYmQgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItYWN0aXZlLWJvcmRlci1jb2xvcjogICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuJGRhdGVyYW5nZXBpY2tlci11bnNlbGVjdGVkLWNvbG9yOiAgICAgICAgICAgIzk5OSAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci11bnNlbGVjdGVkLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItdW5zZWxlY3RlZC1iZy1jb2xvcjogICAgICAgICNmZmYgIWRlZmF1bHQ7XHJcblxyXG4vL1xyXG4vLyBkYXRlcmFuZ2VwaWNrZXJcclxuJGRhdGVyYW5nZXBpY2tlci13aWR0aDogICAgICAgICAgMjc4cHggIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItcGFkZGluZzogICAgICAgIDRweCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci16LWluZGV4OiAgICAgICAgMzAwMCAhZGVmYXVsdDtcclxuXHJcbiRkYXRlcmFuZ2VwaWNrZXItYm9yZGVyLXNpemU6ICAgIDFweCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1ib3JkZXItY29sb3I6ICAgI2NjYyAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1ib3JkZXItcmFkaXVzOiAgNHB4ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vXHJcbi8vIENhbGVuZGFyXHJcbiRkYXRlcmFuZ2VwaWNrZXItY2FsZW5kYXItbWFyZ2luOiAgICAgICAgICAgICAgJGRhdGVyYW5nZXBpY2tlci1wYWRkaW5nICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLWNhbGVuZGFyLWJnLWNvbG9yOiAgICAgICAgICAgICRkYXRlcmFuZ2VwaWNrZXItYmctY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kZGF0ZXJhbmdlcGlja2VyLWNhbGVuZGFyLWJvcmRlci1zaXplOiAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1jYWxlbmRhci1ib3JkZXItY29sb3I6ICAgICAgICAkZGF0ZXJhbmdlcGlja2VyLWJnLWNvbG9yICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLWNhbGVuZGFyLWJvcmRlci1yYWRpdXM6ICAgICAgICRkYXRlcmFuZ2VwaWNrZXItYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vXHJcbi8vIENhbGVuZGFyIENlbGxzXHJcbiRkYXRlcmFuZ2VwaWNrZXItY2VsbC1zaXplOiAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1jZWxsLXdpZHRoOiAgICAgICAgICAkZGF0ZXJhbmdlcGlja2VyLWNlbGwtc2l6ZSAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1jZWxsLWhlaWdodDogICAgICAgICAkZGF0ZXJhbmdlcGlja2VyLWNlbGwtc2l6ZSAhZGVmYXVsdDtcclxuXHJcbiRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ib3JkZXItcmFkaXVzOiAgJGRhdGVyYW5nZXBpY2tlci1jYWxlbmRhci1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLWNlbGwtYm9yZGVyLXNpemU6ICAgIDFweCAhZGVmYXVsdDtcclxuXHJcbi8vXHJcbi8vIERyb3Bkb3duc1xyXG4kZGF0ZXJhbmdlcGlja2VyLWRyb3Bkb3duLXotaW5kZXg6ICRkYXRlcmFuZ2VwaWNrZXItei1pbmRleCArIDEgIWRlZmF1bHQ7XHJcblxyXG4vL1xyXG4vLyBDb250cm9sc1xyXG4kZGF0ZXJhbmdlcGlja2VyLWNvbnRyb2wtaGVpZ2h0OiAgICAgICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItY29udHJvbC1saW5lLWhlaWdodDogICAgICAgICAgJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWhlaWdodCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAgICAjNTU1ICFkZWZhdWx0O1xyXG5cclxuJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWJvcmRlci1zaXplOiAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItY29udHJvbC1ib3JkZXItY29sb3I6ICAgICAgICAgI2NjYyAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWJvcmRlci1yYWRpdXM6ICAgICAgICA0cHggIWRlZmF1bHQ7XHJcblxyXG4kZGF0ZXJhbmdlcGlja2VyLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1zaXplOiAgIDFweCAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAjMDhjICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1yYWRpdXM6ICRkYXRlcmFuZ2VwaWNrZXItY29udHJvbC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWRpc2FibGVkLWNvbG9yOiAgICAgICAjY2NjICFkZWZhdWx0O1xyXG5cclxuLy9cclxuLy8gUmFuZ2VzXHJcbiRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWNvbG9yOiAgICAgICAgICAgICAgICAjMDhjICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1iZy1jb2xvcjogICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcclxuXHJcbiRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWJvcmRlci1zaXplOiAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWJvcmRlci1jb2xvcjogICAgICAgICAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1iZy1jb2xvciAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtYm9yZGVyLXJhZGl1czogICAgICAgICRkYXRlcmFuZ2VwaWNrZXItYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWhvdmVyLWNvbG9yOiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1ob3Zlci1iZy1jb2xvcjogICAgICAgJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtY29sb3IgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWhvdmVyLWJvcmRlci1zaXplOiAgICAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1ib3JkZXItc2l6ZSAhZGVmYXVsdDtcclxuJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtaG92ZXItYm9yZGVyLWNvbG9yOiAgICRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWhvdmVyLWJnLWNvbG9yICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1ob3Zlci1ib3JkZXItcmFkaXVzOiAgJGRhdGVyYW5nZXBpY2tlci1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtYWN0aXZlLWJvcmRlci1zaXplOiAgICRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWJvcmRlci1zaXplICFkZWZhdWx0O1xyXG4kZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtYmctY29sb3IgIWRlZmF1bHQ7XHJcbiRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWFjdGl2ZS1ib3JkZXItcmFkaXVzOiAkZGF0ZXJhbmdlcGlja2VyLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vL1xyXG4vLyBTVFlMRVNIRUVUU1xyXG4vL1xyXG4uI3skcHJlZml4LWNsYXNzfSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItYmctY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJGRhdGVyYW5nZXBpY2tlci1ib3JkZXItcmFkaXVzO1xyXG4gIHdpZHRoOiAkZGF0ZXJhbmdlcGlja2VyLXdpZHRoO1xyXG4gIHBhZGRpbmc6ICRkYXRlcmFuZ2VwaWNrZXItcGFkZGluZztcclxuICBtYXJnaW4tdG9wOiAkZGF0ZXJhbmdlcGlja2VyLWJvcmRlci1zaXplO1xyXG5cclxuICAvLyBUT0RPOiBTaG91bGQgdGhlc2UgYmUgcGFyYW1ldGVyaXplZD8/XHJcbiAgdG9wOiAxMDBweDtcclxuICBsZWZ0OiAyMHB4O1xyXG5cclxuICAkYXJyb3ctcHJlZml4LXNpemU6ICRhcnJvdy1zaXplO1xyXG4gICRhcnJvdy1zdWZmaXgtc2l6ZTogKCRhcnJvdy1zaXplIC0gJGRhdGVyYW5nZXBpY2tlci1ib3JkZXItc2l6ZSk7XHJcblxyXG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHRvcDogLSRhcnJvdy1wcmVmaXgtc2l6ZTtcclxuXHJcbiAgICBib3JkZXItcmlnaHQ6ICRhcnJvdy1wcmVmaXgtc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAkYXJyb3ctcHJlZml4LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAkYXJyb3ctcHJlZml4LXNpemUgc29saWQgJGRhdGVyYW5nZXBpY2tlci1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIHRvcDogLSRhcnJvdy1zdWZmaXgtc2l6ZTtcclxuXHJcbiAgICBib3JkZXItcmlnaHQ6ICRhcnJvdy1zdWZmaXgtc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206ICRhcnJvdy1zdWZmaXgtc2l6ZSBzb2xpZCAkZGF0ZXJhbmdlcGlja2VyLWJnLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQ6ICRhcnJvdy1zdWZmaXgtc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICYub3BlbnNsZWZ0IHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIHJlbGF0aXZlIHRvIHByZWZpeCBzaXplLlxyXG4gICAgICByaWdodDogJGFycm93LXByZWZpeC1zaXplICsgMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgcmVsYXRpdmUgdG8gc3VmZml4IHNpemUuXHJcbiAgICAgIHJpZ2h0OiAkYXJyb3ctc3VmZml4LXNpemUgKyA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm9wZW5zY2VudGVyIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm9wZW5zcmlnaHQge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgcmVsYXRpdmUgdG8gcHJlZml4IHNpemUuXHJcbiAgICAgIGxlZnQ6ICRhcnJvdy1wcmVmaXgtc2l6ZSArIDJweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIHJlbGF0aXZlIHRvIHN1ZmZpeCBzaXplLlxyXG4gICAgICBsZWZ0OiAkYXJyb3ctc3VmZml4LXNpemUgKyA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmRyb3B1cCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG5cclxuICAgIC8vIE5PVEU6IE5vdGUgc3VyZSB3aHkgdGhlc2UgYXJlIHNwZWNpYWwtY2FzZWQuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRvcDogaW5pdGlhbDtcclxuICAgICAgYm90dG9tOiAtJGFycm93LXByZWZpeC1zaXplO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBpbml0aWFsO1xyXG4gICAgICBib3JkZXItdG9wOiAkYXJyb3ctcHJlZml4LXNpemUgc29saWQgJGRhdGVyYW5nZXBpY2tlci1ib3JkZXItY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRvcDogaW5pdGlhbDtcclxuICAgICAgYm90dG9tOi0kYXJyb3ctc3VmZml4LXNpemU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci10b3A6ICRhcnJvdy1zdWZmaXgtc2l6ZSBzb2xpZCAkZGF0ZXJhbmdlcGlja2VyLWJnLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5kcm9wZG93bi1tZW51IHtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIHotaW5kZXg6ICRkYXRlcmFuZ2VwaWNrZXItZHJvcGRvd24tei1pbmRleDtcclxuICB9XHJcblxyXG4gICYuc2luZ2xlIHtcclxuICAgIC5yYW5nZXMsIC5jYWxlbmRhciB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogQ2FsZW5kYXJzICovXHJcbiAgJi5zaG93LWNhbGVuZGFyIHtcclxuICAgIC5jYWxlbmRhciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhbGVuZGFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBtYXgtd2lkdGg6ICRkYXRlcmFuZ2VwaWNrZXItd2lkdGggLSAoJGRhdGVyYW5nZXBpY2tlci1jYWxlbmRhci1tYXJnaW4gKiAyKTtcclxuICAgIG1hcmdpbjogJGRhdGVyYW5nZXBpY2tlci1jYWxlbmRhci1tYXJnaW47XHJcblxyXG4gICAgJi5zaW5nbGUge1xyXG4gICAgICAuY2FsZW5kYXItdGFibGUge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoLCB0ZCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC8vIFRPRE86IFNob3VsZCB0aGlzIGFjdHVhbGx5IGJlIGhhcmQtY29kZWQ/XHJcbiAgICAgIG1pbi13aWR0aDogMzJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYWxlbmRhci10YWJsZSB7XHJcbiAgICBib3JkZXI6ICRkYXRlcmFuZ2VwaWNrZXItY2FsZW5kYXItYm9yZGVyLXNpemUgc29saWQgJGRhdGVyYW5nZXBpY2tlci1jYWxlbmRhci1ib3JkZXItY29sb3I7XHJcbiAgICBwYWRkaW5nOiAkZGF0ZXJhbmdlcGlja2VyLWNhbGVuZGFyLW1hcmdpbjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRkYXRlcmFuZ2VwaWNrZXItY2FsZW5kYXItYm9yZGVyLXJhZGl1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItY2FsZW5kYXItYmctY29sb3I7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHRkLCB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogJGRhdGVyYW5nZXBpY2tlci1jZWxsLXdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkZGF0ZXJhbmdlcGlja2VyLWNlbGwtaGVpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGRhdGVyYW5nZXBpY2tlci1jZWxsLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXI6ICRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ib3JkZXItc2l6ZSBzb2xpZCAkZGF0ZXJhbmdlcGlja2VyLWNlbGwtYm9yZGVyLWNvbG9yO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLmF2YWlsYWJsZSB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ob3Zlci1iZy1jb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ob3Zlci1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYud2VlayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICBjb2xvcjogI2NjYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgICYub2ZmIHtcclxuICAgICAgJiwgJi5pbi1yYW5nZSwgJi5zdGFydC1kYXRlLCAmLmVuZC1kYXRlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLXVuc2VsZWN0ZWQtYmctY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLXVuc2VsZWN0ZWQtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLXVuc2VsZWN0ZWQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRGF0ZSBSYW5nZVxyXG4gICAgJi5pbi1yYW5nZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItaW4tcmFuZ2UtYmctY29sb3I7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhdGVyYW5nZXBpY2tlci1pbi1yYW5nZS1ib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLWluLXJhbmdlLWNvbG9yO1xyXG5cclxuICAgICAgLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgc3RhdGljIG9yIHNob3VsZCBpdCBiZSBwYXJhbWV0ZXJpemVkP1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhcnQtZGF0ZSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ib3JkZXItcmFkaXVzIDAgMCAkZGF0ZXJhbmdlcGlja2VyLWNlbGwtYm9yZGVyLXJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICAmLmVuZC1kYXRlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAkZGF0ZXJhbmdlcGlja2VyLWNlbGwtYm9yZGVyLXJhZGl1cyAkZGF0ZXJhbmdlcGlja2VyLWNlbGwtYm9yZGVyLXJhZGl1cyAwO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhcnQtZGF0ZS5lbmQtZGF0ZSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRkYXRlcmFuZ2VwaWNrZXItY2VsbC1ib3JkZXItcmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgJiwgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGVyYW5nZXBpY2tlci1hY3RpdmUtYmctY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLWFjdGl2ZS1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItYWN0aXZlLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICAmLm1vbnRoIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIERpc2FibGVkIENvbnRyb2xzXHJcbiAgLy9cclxuICB0ZCwgb3B0aW9uIHtcclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgJi5tb250aHNlbGVjdCwgJi55ZWFyc2VsZWN0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5tb250aHNlbGVjdCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgIHdpZHRoOiA1NiU7XHJcbiAgICB9XHJcblxyXG4gICAgJi55ZWFyc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLmhvdXJzZWxlY3QsICYubWludXRlc2VsZWN0LCAmLnNlY29uZHNlbGVjdCwgJi5hbXBtc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRleHQgSW5wdXQgQ29udHJvbHMgKGFib3ZlIGNhbGVuZGFyKVxyXG4gIC8vXHJcbiAgLmlucHV0LW1pbmkge1xyXG4gICAgYm9yZGVyOiAkZGF0ZXJhbmdlcGlja2VyLWNvbnRyb2wtYm9yZGVyLXNpemUgc29saWQgJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRkYXRlcmFuZ2VwaWNrZXItY29udHJvbC1ib3JkZXItcmFkaXVzO1xyXG4gICAgY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItY29udHJvbC1jb2xvcjtcclxuICAgIGhlaWdodDogJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWxpbmUtaGVpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6ICRkYXRlcmFuZ2VwaWNrZXItY29udHJvbC1oZWlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgLy8gVE9ETzogU2hvdWxkIHRoZXNlIGFsbCBiZSBzdGF0aWMsIHRvbz8/XHJcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgIHBhZGRpbmc6IDAgNnB4IDAgMjhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyOiAkZGF0ZXJhbmdlcGlja2VyLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1zaXplIHNvbGlkICRkYXRlcmFuZ2VwaWNrZXItY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkZGF0ZXJhbmdlcGlja2VyLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1yYWRpdXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGF0ZXJhbmdlcGlja2VyX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgLy8gTk9URTogVGhlc2UgYXBwZWFyIHRvIGJlIGV5ZWJhbGxlZCB0byBtZS4uLlxyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLnJ0bCB7XHJcbiAgICAuaW5wdXQtbWluaSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgfVxyXG4gICAgLmRhdGVyYW5nZXBpY2tlcl9pbnB1dCBpIHtcclxuICAgICAgbGVmdDogYXV0bztcclxuICAgICAgcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVGltZSBQaWNrZXJcclxuICAvL1xyXG4gIC5jYWxlbmRhci10aW1lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogJGRhdGVyYW5nZXBpY2tlci1jb250cm9sLWxpbmUtaGVpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgIGNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLWNvbnRyb2wtZGlzYWJsZWQtY29sb3I7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9cclxuLy8gUHJlZGVmaW5lZCBSYW5nZXNcclxuLy9cclxuXHJcbi5yYW5nZXMge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW46IDRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1iZy1jb2xvcjtcclxuICAgIGJvcmRlcjogJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtYm9yZGVyLXNpemUgc29saWQgJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGRhdGVyYW5nZXBpY2tlci1yYW5nZXMtYm9yZGVyLXJhZGl1cztcclxuICAgIGNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1ob3Zlci1iZy1jb2xvcjtcclxuICAgICAgYm9yZGVyOiAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1ob3Zlci1ib3JkZXItc2l6ZSBzb2xpZCAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1ob3Zlci1ib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkZGF0ZXJhbmdlcGlja2VyLXJhbmdlcy1ob3Zlci1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWhvdmVyLWJnLWNvbG9yO1xyXG4gICAgICBib3JkZXI6ICRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWhvdmVyLWJvcmRlci1zaXplIHNvbGlkICRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWhvdmVyLWJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRkYXRlcmFuZ2VwaWNrZXItcmFuZ2VzLWhvdmVyLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogIExhcmdlciBTY3JlZW4gU3R5bGluZyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTY0cHgpIHtcclxuICAuI3skcHJlZml4LWNsYXNzfSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuXHJcbiAgICAucmFuZ2VzIHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuc2luZ2xlIHtcclxuICAgICAgLnJhbmdlcyB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FsZW5kYXIubGVmdCB7XHJcbiAgICAgICAgY2xlYXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubHRyIHtcclxuICAgICAgICAucmFuZ2VzLCAuY2FsZW5kYXIge1xyXG4gICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5ydGwge1xyXG4gICAgICAgIC5yYW5nZXMsIC5jYWxlbmRhciB7XHJcbiAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmx0ciB7XHJcbiAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAuY2FsZW5kYXJ7XHJcbiAgICAgICAgJi5sZWZ0IHtcclxuICAgICAgICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgIC5jYWxlbmRhci10YWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuXHJcbiAgICAgICAgICAuY2FsZW5kYXItdGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sZWZ0IC5kYXRlcmFuZ2VwaWNrZXJfaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYWxlbmRhci5sZWZ0IC5jYWxlbmRhci10YWJsZSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJhbmdlcywgLmNhbGVuZGFyIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5ydGwge1xyXG4gICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIC5jYWxlbmRhcntcclxuICAgICAgICAmLmxlZnQge1xyXG4gICAgICAgICAgY2xlYXI6IHJpZ2h0O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgLmNhbGVuZGFyLXRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJpZ2h0IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAuY2FsZW5kYXItdGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sZWZ0IC5kYXRlcmFuZ2VwaWNrZXJfaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhbGVuZGFyLmxlZnQgLmNhbGVuZGFyLXRhYmxlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYW5nZXMsIC5jYWxlbmRhciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzMwcHgpIHtcclxuICAuI3skcHJlZml4LWNsYXNzfSB7XHJcbiAgICAucmFuZ2VzIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAmLmx0ciB7XHJcbiAgICAgIC5yYW5nZXMge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnJ0bCB7XHJcbiAgICAgIC5yYW5nZXMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhci5sZWZ0IHtcclxuICAgICAgY2xlYXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vc2Nzcy9oZWxwZXJzXCI7XHJcbkBpbXBvcnQgXCIuLy4uLy4uL3Njc3MvYnVzeVwiO1xyXG5AaW1wb3J0IFwiLi8uLi8uLi9zY3NzL2RhdGVyYW5nZXBpY2tlclwiO1xyXG5cclxuLm10MTAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2dyZXNzMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVpZ2h0MjAwIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5oZWlnaHQzMDAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuXHJcbi8vIC8qKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gLyogICAgICBMaXZlIFRpbGVzICAgICAqL1xyXG4vLyAvKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyAkZm9udC1zaXplczogJGgxLWZvbnQtc2l6ZSwgJGgyLWZvbnQtc2l6ZSwgJGgzLWZvbnQtc2l6ZSwgJGg0LWZvbnQtc2l6ZSwgJGg1LWZvbnQtc2l6ZSwgJGg2LWZvbnQtc2l6ZTtcclxuLy8gJGk6IDE7XHJcbi8vIEBlYWNoICRmb250LXNpemUgaW4gJGZvbnQtc2l6ZXN7XHJcbi8vICAgJi52YWx1ZSN7JGl9eyBmb250LXNpemU6ICRmb250LXNpemU7IH1cclxuLy8gICAkaTogJGkgKyAxO1xyXG4vLyB9XHJcblxyXG4ubGl2ZS10aWxlIGE6bGluayxcclxuLmxpc3QtdGlsZSBhOmxpbmssXHJcbi5jb3B5LXRpbGUgYTpsaW5rLFxyXG4ubGl2ZS10aWxlIGE6dmlzaXRlZCxcclxuLmxpc3QtdGlsZSBhOnZpc2l0ZWQsXHJcbi5jb3B5LXRpbGUgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubGl2ZS10aWxlLFxyXG4ubGlzdC10aWxlLFxyXG4uY29weS10aWxlLFxyXG4udGlsZS1zdHJpcCAuZmxpcC1saXN0PmxpIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gICAgJi5mYWRlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGl2ZS10aWxlIHAsXHJcbi5saXN0LXRpbGUgcCxcclxuLmNvcHktdGlsZSBwIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8vIC5saXZlLXRpbGUgcCxcclxuLy8gLmxpc3QtdGlsZSBwLFxyXG4vLyAuY29weS10aWxlIHAsXHJcbi8vIC5saXZlLXRpbGUgLmZhY2UsXHJcbi8vIC5saXN0LXRpbGUgLmZhY2UsXHJcbi8vIC5jb3B5LXRpbGUgLmZhY2V7XHJcbi8vICAgLyogbGV0IC5oKiBjbGFzc2VzIHdvcmshICovXHJcbi8vICAgJi5oMSB7IGZvbnQtc2l6ZTogJGgxLWZvbnQtc2l6ZTsgfVxyXG4vLyAgICYuaDIgeyBmb250LXNpemU6ICRoMi1mb250LXNpemU7IH1cclxuLy8gICAmLmgzIHsgZm9udC1zaXplOiAkaDMtZm9udC1zaXplOyB9XHJcbi8vICAgJi5oNCB7IGZvbnQtc2l6ZTogJGg0LWZvbnQtc2l6ZTsgfVxyXG4vLyAgICYuaDUgeyBmb250LXNpemU6ICRoNS1mb250LXNpemU7IH1cclxuLy8gICAmLmg2IHsgZm9udC1zaXplOiAkaDYtZm9udC1zaXplOyB9XHJcblxyXG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/mydashboard.template.html":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/mydashboard.template.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-7 col-md-7 col-12\">\r\n        <h1 class=\"h4 page-title\">PROGRAM DASHBOARD</h1>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-12\">\r\n        <!-- <div id=\"reportrange\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc;\">\r\n            <i class=\"fa fa-calendar-plus-o\"></i>&nbsp;\r\n            <span></span> <b class=\"caret\"></b>\r\n        </div> -->\r\n        <div class=\"form-group row\">\r\n            <label for=\"tdl-pop\" class=\"col-md-6 form-control-label text-md-right mt10\">\r\n                Task Order\r\n            </label>\r\n            <div role=\"alert\" class=\"col-md-6 col-xs-12\">\r\n                <!-- <select required class=\"form-control\" placeholder=\"\" [(ngModel)]=\"selpopCode\" [ngModelOptions]=\"{standalone: true}\"\r\n                    (change)=\"FilterTaskOrderChanged($event.target.value)\" data-parsley-required-message=\"Error: Task Order is required\">\r\n                    <option></option>\r\n                    <option *ngFor=\"let pop of listPoPs\" [value]=\"pop.name\">{{pop.name}}</option>\r\n                </select> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-primary text-white height200\">\r\n            <div class=\"widget-body clearfix\">\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-3\">\r\n                        <span class=\"widget-icon\">\r\n                            <i class=\"glyphicon glyphicon-folder-open\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-9\">\r\n                        <h6 class=\"m-0\">Projects</h6>\r\n                        <p class=\"h2 m-0 fw-normal\">{{tdlDBInfo.tdlcount}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">Plan Hours</h6>\r\n                        <p class=\"value5\">{{tdlDBInfo.sumPlanHours | number: '.0' }}</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">Plan Cost</h6>\r\n                        <p class=\"value5\">{{tdlDBInfo.sumPlanCost | currency:'USD':true:'1.0-0'}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap mt10\">\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">Actual Hours</h6>\r\n                        <p class=\"value5\">{{tdlDBInfo.sumActHours | number: '.0' }}</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">Actual Cost</h6>\r\n                        <p class=\"value5\">{{tdlDBInfo.sumActualCost | currency:'USD':true:'1.0-0'}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-primary text-white height200\" widget>\r\n            <header>\r\n                <h5>\r\n                    Projects\r\n                    <span class=\"fw-semi-bold\">By Type</span>\r\n                </h5>\r\n            </header>\r\n            <div class=\"widget-body\">\r\n                <div *ngIf=\"pieTypeChartData.length > 0\" style=\"display: block\">\r\n                    <!-- <canvas baseChart [data]=\"pieTypeChartData\" [labels]=\"pieTypeChartLabels\" [options]=\"pieChartOptions\"\r\n                        [colors]=\"pieChartColors\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n                        (chartClick)=\"chartClicked($event)\"></canvas> -->\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-primary text-white height200\" widget>\r\n            <header>\r\n                <h5>\r\n                    Projects\r\n                    <span class=\"fw-semi-bold\">By Status</span>\r\n                </h5>\r\n            </header>\r\n            <div class=\"widget-body\">\r\n                <div *ngIf=\"pieStatusChartData.length > 0\" style=\"display: block\">\r\n                    <!-- <canvas baseChart [data]=\"pieStatusChartData\" [labels]=\"pieStatusChartLabels\" [options]=\"pieChartOptions\"\r\n                        [colors]=\"pieChartColors\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n                        (chartClick)=\"chartClicked($event)\"></canvas> -->\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-primary text-white height200\">\r\n            <div class=\"widget-body clearfix\">\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-3\">\r\n                        <span class=\"widget-icon\">\r\n                            <i class=\"glyphicon glyphicon-user\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-9\">\r\n                        <h6 class=\"m-0\">HEAD COUNT</h6>\r\n                        <p class=\"h2 m-0 fw-normal\">82</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">LCATs</h6>\r\n                        <p class=\"value5\">23</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">Contractors</h6>\r\n                        <p class=\"value5\">10</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap mt10\">\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">USDC</h6>\r\n                        <p class=\"value5\">13</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">PM</h6>\r\n                        <p class=\"value5\">6</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4 col-12\">\r\n        <section class=\"widget widget-sm height300\">\r\n            <!-- <header>\r\n                <h6>Spend\r\n                    <span class=\"fw-semi-bold\">Ceiling</span>\r\n                </h6>\r\n            </header> -->\r\n            <div class=\"widget-body\">\r\n                <div live-tile class=\"live-tile\" data-mode=\"flip\" data-speed=\"750\" data-delay=\"3000\" data-height=\"313\"\r\n                    data-pause-onhover=\"true\">\r\n                    <div>\r\n                        <header>\r\n                            <h6>\r\n                                <span class=\"fw-semi-bold\">Actual</span> Spend\r\n                                <span class=\"pull-right m-0 fw-normal\">\r\n                                    <a [routerLink]=\" ['/app/resource/clinplot'] \">\r\n                                        <i class=\"fa fa-line-chart txt-gap\"></i>\r\n                                    </a>\r\n                                </span>\r\n                            </h6>\r\n                        </header>\r\n                        <div class=\"clearfix fs-mini mt10\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">IT Testing Support</span>\r\n                            <span class=\"fs-mini\">{{getActualSpendValue('CITS')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getActualSpendPercent('CITS')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar bg-success progress-xs\" [ngStyle]=\"getActualSpendPercentStyle('CITS')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">Management and Admin Support</span>\r\n                            <span class=\"fs-mini\">{{getActualSpendValue('CPMO')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getActualSpendPercent('CPMO')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getActualSpendPercentStyle('CPMO')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">CBER O&M</span>\r\n                            <span class=\"fs-mini\">{{getActualSpendValue('COTM')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getActualSpendPercent('COTM')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getActualSpendPercentStyle('COTM')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">User Support</span>\r\n                            <span class=\"fs-mini\">{{getActualSpendValue('CUSR')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getActualSpendPercent('CUSR')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getActualSpendPercentStyle('CUSR')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">System Enhancement</span>\r\n                            <span class=\"fs-mini\">{{getActualSpendValue('CTDL')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getActualSpendPercent('CTDL')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getActualSpendPercentStyle('CTDL')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">eSubmission Support</span>\r\n                            <span class=\"fs-mini\">{{getActualSpendValue('CESS')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getActualSpendPercent('CESS')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getActualSpendPercentStyle('CESS')\"></div>\r\n                        </div>\r\n                        <!-- <footer>\r\n                            <a [routerLink]=\" ['/app/resource/clinplot'] \">\r\n                                (View)\r\n                            </a>\r\n                        </footer> -->\r\n                    </div>\r\n                    <div>\r\n                        <header>\r\n                            <h6>\r\n                                <span class=\"fw-semi-bold\">Projected </span>Spend\r\n                                <span class=\"pull-right m-0 fw-normal\">\r\n                                    <a [routerLink]=\" ['/app/resource/clinplot'] \">\r\n                                        <i class=\"fa fa-line-chart txt-gap\"></i>\r\n                                    </a>\r\n                                </span>\r\n                            </h6>\r\n                        </header>\r\n                        <div class=\"clearfix fs-mini mt10\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">IT Testing Support</span>\r\n                            <span class=\"fs-mini\">{{getProjectedSpendValue('CITS')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getProjectedSpendPercent('CITS')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar bg-success progress-xs\" [ngStyle]=\"getProjectedSpendPercentStyle('CITS')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">Management and Admin Support</span>\r\n                            <span class=\"fs-mini\">{{getProjectedSpendValue('CPMO')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getProjectedSpendPercent('CPMO')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getProjectedSpendPercentStyle('CPMO')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">CBER O&M</span>\r\n                            <span class=\"fs-mini\">{{getProjectedSpendValue('COTM')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getProjectedSpendPercent('COTM')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getProjectedSpendPercentStyle('COTM')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">User Support</span>\r\n                            <span class=\"fs-mini\">{{getProjectedSpendValue('CUSR')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getProjectedSpendPercent('CUSR')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getProjectedSpendPercentStyle('CUSR')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">System Enhancement</span>\r\n                            <span class=\"fs-mini\">{{getProjectedSpendValue('CTDL')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getProjectedSpendPercent('CTDL')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getProjectedSpendPercentStyle('CTDL')\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix fs-mini mt\">\r\n                            <span class=\"pull-right m-0 fw-semi-bold\">eSubmission Support</span>\r\n                            <span class=\"fs-mini\">{{getProjectedSpendValue('CESS')| currency:'USD':true:'1.0-0'}} /\r\n                                {{getProjectedSpendPercent('CESS')|\r\n                                percent: '1.0-0'}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"bg-gray-lighter progress100 progress-xs\">\r\n                            <div class=\"progress-bar progress-xs bg-success\" [ngStyle]=\"getProjectedSpendPercentStyle('CESS')\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"col-lg-4 col-12\">\r\n        <section class=\"widget\" widget>\r\n            <header>\r\n                <h6>Upcoming\r\n                    <span class=\"fw-semi-bold\">Project Dues</span>\r\n                </h6>\r\n            </header>\r\n            <div class=\"widget-body\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Project</th>\r\n                            <th>Due</th>\r\n                            <th>% BURN</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let proj of listProjects; let i = index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{proj.name}}</td>\r\n                            <td>{{proj.due}}</td>\r\n                            <td class=\"text-center\">{{getProjectPercentComplete(proj) | percent: '1.0-0'}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-lg-3 col-12\">\r\n        <section class=\"widget widget-padding-lg\">\r\n            <div class=\"widget-body clearfix\">\r\n                <div live-tile class=\"live-tile\" data-mode=\"carousel\" data-speed=\"750\" data-delay=\"3000\" data-height=\"313\">\r\n                    <div>\r\n                        <h3>Basic &\r\n                            <span class=\"fw-semi-bold\">Advanced</span> Features</h3>\r\n                        <p class=\"value4 mt-lg\">All you need in one app</p>\r\n                        <div class=\"h4 mt-lg mb-lg\">\r\n                            <i class=\"fa fa-quote-left opacity-50\"></i>\r\n                            That's awesome!\r\n                            <i class=\"fa fa-quote-right opacity-50\"></i>\r\n                        </div>\r\n                        <div class=\"widget-footer-bottom\">\r\n                            <p>Attention to what's really important</p>\r\n                            <button class=\"btn btn-info btn-block mt\">Order Now!</button>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <h3>Beautiful\r\n                            <span class=\"fw-semi-bold\">Thing</span>\r\n                        </h3>\r\n                        <p class=\"value4 mt-lg\">Life-time package support</p>\r\n                        <div class=\"h4 mt-lg mb-lg\">\r\n                            <i class=\"fa fa-quote-left opacity-50\"></i>\r\n                            That's awesome!\r\n                            <i class=\"fa fa-quote-right opacity-50\"></i>\r\n                        </div>\r\n                        <div class=\"widget-footer-bottom\">\r\n                            <p>Attention to what's really important</p>\r\n                            <button class=\"btn btn-inverse btn-block mt\">\r\n                                <span class=\"fw-semi-bold text-warning\">Ready?</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../login/services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/*
 @author : Deloitte
 Service class to perform PermitPeriod related operations.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ "Content-Type": "application/json" })
};
var DashboardService = /** @class */ (function () {
    function DashboardService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.dashboardurl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + "/api/v1/dashboard";
    }
    DashboardService.prototype.getTDLDashboardInfo = function (dashSearchCriteria) {
        var _this = this;
        var body = { dashSearchCriteria: dashSearchCriteria };
        return this.http
            .post(this.dashboardurl + "/tdl", dashSearchCriteria, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("createProfile"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createProfile")));
    };
    DashboardService.prototype.getDashboardProjectedSpendInfo = function (dashSearchCriteria) {
        var _this = this;
        return this.http
            .post(this.dashboardurl + "/projspend", dashSearchCriteria, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("createProfile"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createProfile")));
    };
    DashboardService.prototype.getTopUpcomingProjectsDue = function () {
        var _this = this;
        return this.http.get(this.dashboardurl + "/projtop5", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("createProfile"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createProfile")));
    };
    DashboardService.prototype.getDashboardActualSpendInfo = function (dashSearchCriteria) {
        var _this = this;
        return this.http
            .post(this.dashboardurl + "/actspend", dashSearchCriteria, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("createProfile"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createProfile")));
    };
    DashboardService.prototype.getTDLDashboardTypeInfo = function (dashSearchCriteria) {
        var _this = this;
        return this.http
            .post(this.dashboardurl + "/project/type", dashSearchCriteria, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("createProfile"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createProfile")));
    };
    DashboardService.prototype.getTDLDashboardStatusInfo = function (dashSearchCriteria) {
        var _this = this;
        return this.http
            .post(this.dashboardurl + "/project/status", dashSearchCriteria, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("createProfile"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createProfile")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DashboardService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log("${operation} failed: ${error.message}");
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a Admin message with the MessageService */
    DashboardService.prototype.log = function (message) {
        //this.messageService.add("Attribute Service: ${message}");
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _login_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/widgets.component.ts ***!
  \************************************************/
/*! exports provided: WidgetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetPage", function() { return WidgetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetPage = /** @class */ (function () {
    function WidgetPage(config) {
        this.configFn = config;
        this.config = config.getConfig();
    }
    WidgetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[widgets]',
            template: __webpack_require__(/*! ./widgets.template.html */ "./src/app/dashboard/widgets.template.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./widgets.style.scss */ "./src/app/dashboard/widgets.style.scss")]
        }),
        __metadata("design:paramtypes", [_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"]])
    ], WidgetPage);
    return WidgetPage;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets.style.scss":
/*!**********************************************!*\
  !*** ./src/app/dashboard/widgets.style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC93aWRnZXRzLnN0eWxlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/widgets.template.html":
/*!*************************************************!*\
  !*** ./src/app/dashboard/widgets.template.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"h4 page-title\">DASHBOARD</h1>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-primary text-white\">\r\n            <div class=\"widget-body clearfix\">\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-3\">\r\n                        <span class=\"widget-icon\">\r\n                            <i class=\"glyphicon glyphicon-globe\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-9\">\r\n                        <h6 class=\"m-0\">ACTIVE TDLs</h6>\r\n                        <p class=\"h2 m-0 fw-normal\">15</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">Hours</h6>\r\n                        <p class=\"value5\">3000</p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">Cost</h6>\r\n                        <p class=\"value5\">$200,000</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-info text-white\">\r\n            <div class=\"widget-body clearfix\">\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-3\">\r\n                        <span class=\"widget-icon\">\r\n                            <i class=\"glyphicon glyphicon-user\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-9\">\r\n                        <div>\r\n                            <h6 class=\"m-0\">DELIVERABLES DUE</h6>\r\n                            <p class=\"h2 m-0 fw-normal\">15</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap\">\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">THIS MONTH</h6>\r\n                        <div>\r\n                            <p class=\"value5\">6</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <h6 class=\"m-0\">OVERALL</h6>\r\n                        <div>\r\n                            <p class=\"value5\">12</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <!-- <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-gray\">\r\n        <div class=\"widget-body clearfix\">\r\n            <div class=\"bg-gray text-white\">\r\n                <div class=\"row flex-nowrap\">\r\n                <div class=\"col-3\">\r\n                    <span class=\"widget-icon\">\r\n                    <i class=\"glyphicon glyphicon-globe\"></i>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-9\">\r\n                    <h6 class=\"m-0\">ORDERS</h6>\r\n                    <p class=\"h2 m-0 fw-normal\">82,765</p>\r\n                </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap\">\r\n                <div class=\"col-6\">\r\n                    <h6 class=\"m-0\">Avg. Time</h6>\r\n                    <p class=\"value5\">2:56</p>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <h6 class=\"m-0\">Last Week</h6>\r\n                    <p class=\"value5\">374</p>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-white\">\r\n                <div class=\"row flex-nowrap\">\r\n                <div class=\"col-3\">\r\n                    <span class=\"widget-icon\">\r\n                    <i class=\"glyphicon glyphicon-certificate\"></i>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-9\">\r\n                    <h6 class=\"m-0\">PICKED ORDERS</h6>\r\n                    <p class=\"h2 m-0 fw-normal\">13.8%</p>\r\n                </div>\r\n                </div>\r\n                <div class=\"row flex-nowrap\">\r\n                <div class=\"col-6\">\r\n                    <h6 class=\"m-0\">Basic</h6>\r\n                    <p class=\"value5\">3,692</p>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <h6 class=\"m-0\">Advanced</h6>\r\n                    <p class=\"value5\">1,441</p>\r\n                </div>\r\n                </div>\r\n            </div>\r\n \r\n        </div>\r\n        </section>\r\n    </div> -->\r\n    <!-- <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget bg-success text-white\">\r\n        <div class=\"widget-body clearfix\">\r\n            <div class=\"row flex-nowrap\">\r\n            <div class=\"col-3\">\r\n                <span class=\"widget-icon\">\r\n                <i class=\"glyphicon glyphicon-usd\"></i>\r\n                </span>\r\n            </div>\r\n            <div class=\"col-9\">\r\n                <h6 class=\"m-0\">TOTAL PROFIT</h6>\r\n                <p class=\"h2 m-0 fw-normal\">$7,448</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"row flex-nowrap\">\r\n            <div class=\"col-6\">\r\n                <h6 class=\"m-0\">Last Month</h6>\r\n                <p class=\"value5\">$83,541</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <h6 class=\"m-0\">Last Week</h6>\r\n                <p class=\"value5\">$17,926</p>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        </section>\r\n    </div> -->\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-2 col-md-6 col-12\">\r\n        <section class=\"widget\" widget>\r\n            <header>\r\n                <h5>\r\n                    Sparkline <span class=\"fw-semi-bold\">Pie Charts</span>\r\n                </h5>\r\n                <div class=\"widget-controls\">\r\n                    <a href=\"#\" data-widgster=\"close\"><i class=\"glyphicon glyphicon-remove\"></i></a>\r\n                </div>\r\n            </header>\r\n            <div class=\"widget-body\">\r\n                <p class=\"fs-mini text-muted\">\r\n                    Each example displayed below takes just 1 line of HTML or javascript to generate.\r\n                </p>\r\n                <div style=\"display: block\">\r\n                    <!-- <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" \r\n                        [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n                        (chartClick)=\"chartClicked($event)\"></canvas> -->\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>"

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map