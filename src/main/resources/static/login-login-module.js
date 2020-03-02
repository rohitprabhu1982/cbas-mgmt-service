(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/authentication/components/access.denied.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/access.denied.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./access.denied.html */ "./src/app/authentication/components/access.denied.html")
        }),
        __metadata("design:paramtypes", [])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/access.denied.html":
/*!**************************************************************!*\
  !*** ./src/app/authentication/components/access.denied.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Access Denied. You do not have permissions to access the page!!</H1>"

/***/ }),

/***/ "./src/app/login/components/confirm/confirmRegistration.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/login/components/confirm/confirmRegistration.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationComponent", function() { return ConfirmRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmRegistrationComponent = /** @class */ (function () {
    function ConfirmRegistrationComponent(router, auth, storage) {
        this.auth = auth;
        this.storage = storage;
        this.msg = "A confirmation code has been sent.  Please check your email and enter the code to continue.";
        this.title = "Resend Confirmation Code";
        this.accountConfirmed = "N";
        this.newEmailAddressOnly = false;
        this.router = router;
        this.onInit();
    }
    ConfirmRegistrationComponent.prototype.onInit = function () {
        // this.status = this.auth.amp_getLoginState();
        // let username = this.status.getUsername();
        // let loggedInUsername = this.storage.retrieve("LOGGEDUSERID");
        // if (!(loggedInUsername || username)) {
        // 	this.router.navigate(["/login"]);
        // }
        // this.errorMessage = null;
        // if (this.status.isAccountConfirmed()) this.accountConfirmed = "Y";
    };
    ConfirmRegistrationComponent.prototype.onConfirmRegistration = function () {
        var handler = this;
        var confirmationCode = this.confirmationCode
            ? this.confirmationCode.trim()
            : "";
        if (!this.status.isAccountConfirmed()) {
            // let username = this.status.getUsername();
            // this.auth.amp_confirmSignUp(username, confirmationCode).subscribe(
            // 	result => {
            // 		this.status.confirmSignup();
            // 		this.router.navigate(["/login"]);
            // 	},
            // 	error => {
            // 		if (!isNil(error.message)) {
            // 			handler.errorMessage = error.message;
            // 		}
            // 		console.log(error);
            // 	}
            // );
        }
        else {
            // this.auth.amp_confirmVerification(confirmationCode).subscribe(
            // 	result => {
            // 		this.status.successfulSignIn();
            // 		this.router.navigate(["/app/applicant/search"]);
            // 	},
            // 	error => {
            // 		if (!isNil(error.message)) {
            // 			handler.errorMessage = error.message;
            // 		}
            // 		console.error(error);
            // 	}
            // );
        }
    };
    ConfirmRegistrationComponent.prototype.onResend = function () {
        var loggedInUsername = this.storage.retrieve("LOGGEDUSERID");
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(loggedInUsername)) {
            // this.auth.amp_getAuthenticatedUser().subscribe(awsUser => {
            // 	let saveEmail = awsUser.attributes["email"];
            // 	if (awsUser.attributes["email_verified"] === false) {
            // 		this.auth
            // 			.amp_updateUserEmail(awsUser, "dev@null.xyz")
            // 			.subscribe(result => {
            // 				this.auth
            // 					.amp_updateUserEmail(awsUser, saveEmail)
            // 					.subscribe(result => {
            // 						jQuery("#app-popup").modal("show");
            // 					});
            // 			});
            // 	} else {
            // 		this.router.navigate(["/app/applicant/search"]);
            // 	}
            // });
        }
        else {
            var username = this.status.getUsername();
            // this.auth.amp_resendVerificationCode(username).subscribe(
            // 	result => {
            // 		jQuery("#app-popup").modal("show");
            // 	},
            // 	error => {
            // 		console.log(error);
            // 		if (!isNil(error.message)) {
            // 			this.errorMessage = error.message;
            // 		}
            // 	}
            // );
        }
    };
    ConfirmRegistrationComponent.prototype.onClose = function () {
        jQuery("#app-popup").modal("hide");
    };
    ConfirmRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "confirm-registration",
            template: __webpack_require__(/*! ./confirmRegistration.html */ "./src/app/login/components/confirm/confirmRegistration.html"),
            styles: [__webpack_require__(/*! ./confirmRegistration.style.scss */ "./src/app/login/components/confirm/confirmRegistration.style.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], ConfirmRegistrationComponent);
    return ConfirmRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/login/components/confirm/confirmRegistration.html":
/*!*******************************************************************!*\
  !*** ./src/app/login/components/confirm/confirmRegistration.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          PipelinePro\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <div class=\"widget-body\">\r\n            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n              <div class=\"form-group\">\r\n                <h4 *ngIf=\"accountConfirmed=='N'\">Confirm Registration</h4>\r\n                <h4 *ngIf=\"accountConfirmed=='Y'\">Confirm Email</h4>\r\n              </div>\r\n              <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n                {{ errorMessage }}\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"confirmationCode\">Confirmation Code</label>\r\n                <input id=\"confirmationCode\" type=\"text\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"confirmationCode\"\r\n                  [ngModelOptions]=\"{standalone: true}\">\r\n                  <small id=\"h-confirmationCode\" class=\"form-text text-muted font-italic\">(Check your email for confirmation code. Please check SPAM folder as well.)</small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button (click)=\"onConfirmRegistration()\" id=\"confirmRegistration\" type=\"submit\" class=\"btn btn-primary btn-block\">Confirm\r\n                </button>\r\n              </div>\r\n              <div class=\"row mt25\">\r\n                 <a class=\"mx-auto\" (click)=\"onResend()\" href=\"#\"> <i class=\"fa fa-fw fa-envelope-o\"></i> Resend Confirmation Code</a>\r\n              </div>\r\n              <div class=\"row mt10\">\r\n                <div class=\"col-lg-12 col-xs-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-xs-6 text-center\">\r\n                      <a [routerLink]=\"['/login/register']\"> <i class=\"fa fa-fw fa-group\"></i> Register</a>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-xs-6 text-center\">\r\n                        <a [routerLink]=\"['/login']\"> <i class=\"fa fa-fw fa-user\"></i> Login</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n<div class=\"modal fade\" id=\"app-popup\">\r\n\t<div class=\"modal-dialog\" role=\"app-popup\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header modal-title-bar\">\r\n\t\t\t\t<div title=\"title\" class=\"h4 modal-title text-xs-center fw-bold mt\" >{{title}}</div>\r\n\t\t\t</div>\r\n\t\t\t<!--Modal Body-->\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div [innerHTML]=\"msg\"></div>\r\n\t\t\t</div>\r\n\t\t\t<!--Modal Footer-->\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-gray\" (click)=\"onClose()\" title=\"Close\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/components/confirm/confirmRegistration.style.scss":
/*!*************************************************************************!*\
  !*** ./src/app/login/components/confirm/confirmRegistration.style.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n\r\n * Typography\r\n * ======================================================================== */\n/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #dee2e6; }\n.login-page .page-footer {\n  margin-bottom: -25px;\n  font-size: 0.9rem;\n  color: #868e96;\n  text-align: center; }\n@media (min-height: 600px) {\n    .login-page .page-footer {\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n.widget-login-container {\n  padding-top: 25%; }\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 500; }\n.widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n.widget-login {\n  padding: 30px; }\n.widget-login > header h1,\n  .widget-login > header h2,\n  .widget-login > header h3,\n  .widget-login > header h4,\n  .widget-login > header h5,\n  .widget-login > header h6 {\n    font-weight: 500;\n    text-align: center; }\n.widget-login-info {\n  font-size: 0.9rem;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n.widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n.login-form .form-control {\n  font-size: 0.9rem;\n  background-color: #eeeeee; }\n.login-form .form-control:focus {\n    background-color: #dee2e6; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9jb25maXJtL0M6XFxVc2Vyc1xcYXNhcGFcXERvY3VtZW50c1xcQ2Jhc3NcXGNiYXNyZXBvXFxjYmFzLXVpL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sb2dpbi9jb21wb25lbnRzL2NvbmZpcm0vQzpcXFVzZXJzXFxhc2FwYVxcRG9jdW1lbnRzXFxDYmFzc1xcY2Jhc3JlcG9cXGNiYXMtdWkvc3JjXFxhcHBcXGxvZ2luXFxjb21wb25lbnRzXFxjb25maXJtXFxjb25maXJtUmVnaXN0cmF0aW9uLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7Ozs4RUFHOEU7QUNkOUUscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7RUFDRSwwQkRnQ2dCLEVDL0JqQjtBQUVEO0VBQ0UscUJBQW9CO0VBQ3BCLGtCRFdxQjtFQ1ZyQixlRDZCZ0I7RUM1QmhCLG1CQUFrQixFQU9uQjtBQUxDO0lBTkY7TUFPSSxVQUFTO01BQ1QsUUFBTztNQUNQLFNBQVEsRUFFWCxFQUFBO0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGlCRCtDc0IsRUN6Q3ZCO0FBVkQ7SUFPSSxnQkFBZTtJQUNmLGVBQWMsRUFDZjtBQUdIO0VBQ0UsY0FBYSxFQWNkO0FBZkQ7Ozs7OztJQVdNLGlCRDRCa0I7SUMzQmxCLG1CQUFrQixFQUNuQjtBQUlMO0VBQ0Usa0JEbENxQjtFQ21DckIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUtuQjtBQVZEO0lBUUksbUJBQWtCLEVBQ25CO0FBR0g7RUFFSSxrQkQvQ21CO0VDZ0RuQiwwQkRpTXFDLEVDNUx0QztBQVJIO0lBTU0sMEJEbkNZLEVDb0NiIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm1SZWdpc3RyYXRpb24uc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbmcgdmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWluY2x1ZGUtYm9udXM6IGZhbHNlICFkZWZhdWx0O1xyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtY2xhc3MtcHJlZml4OiBnbHlwaGljb24gIWRlZmF1bHQ7XHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LWJhc2Utc2l6ZTogMTRweCAhZGVmYXVsdDtcclxuXHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LXBhdGg6ICd+L2ZvbnRzL2dseXBoaWNvbnMnICFkZWZhdWx0O1xyXG4kZmEtZm9udC1wYXRoOiAnfi9mb250LWF3ZXNvbWUvZm9udHMnICFkZWZhdWx0O1xyXG5cclxuLypcclxuXHJcbiAqIFR5cG9ncmFwaHlcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiRmb250LXNpemUtaW5pdGlhbDogMTRweDsgLy8gcmVzZXQgZGVmYXVsdCBicm93c2VyIHZhbHVlIGZyb20gMTZweCB0byAxM3B4XHJcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGFyZ2VyOiAxLjFyZW07XHJcbiRmb250LXNpemUtbWluaTogMC45cmVtO1xyXG4kZm9udC1zaXplLWluZGV4OiAwLjdyZW07XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcbi8vXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAjZWVlZWVlICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICM4NjhlOTYgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogIzU1NSAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktbGlnaHQ6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGJsdWU6ICM1ZDhmYzIgIWRlZmF1bHQ7XHJcbiRyZWQ6ICNkZDU4MjYgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICNmMGI1MTggIWRlZmF1bHQ7XHJcbiRncmVlbjogIzY0YmQ2MyAhZGVmYXVsdDtcclxuJGN5YW46ICM1ZGM0YmYgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAocHJpbWFyeTogJGJsdWUsXHJcbnNlY29uZGFyeTogJGdyYXktNjAwLFxyXG5zdWNjZXNzOiAkZ3JlZW4sXHJcbnByaW1hcnktbGlnaHQ6ICNkZWU0ZWUsXHJcbnN1Y2Nlc3MtbGlnaHQ6ICNlY2ZhZWMsXHJcbmluZm8tbGlnaHQ6ICNmMmZhZmEsXHJcbndhcm5pbmctbGlnaHQ6ICNmZGY3ZTYsXHJcbmRhbmdlci1saWdodDogI2ZmZjJlZixcclxuaW5mbzogJGN5YW4sXHJcbndhcm5pbmc6ICR5ZWxsb3csXHJcbmRhbmdlcjogJHJlZCxcclxuZGFyazogJGdyYXktODAwLFxyXG5pbnZlcnNlOiAkZ3JheS03MDAsXHJcbmdyYXk6ICRncmF5LTMwMCxcclxuZGVmYXVsdDogI2Y4ZjhmOCk7XHJcblxyXG4kbGluay1jb2xvcjogIzIxOGJjMztcclxuXHJcbiR0ZXh0LWNvbG9yOiAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LXRoaW46IDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLXNtYWxsZXI6IDg1JSAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGFkZGl0aW9uLWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG5cclxuJGJvZHktYmc6IGxpZ2h0Z3JheSAhZGVmYXVsdDsgLy8gI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGJvZHktYmctbGlnaHQ6IGxpZ2h0ZW4oJGJvZHktYmcsIDMlKTtcclxuXHJcbi8vPT0gQ29tcG9uZW50c1xyXG4vL1xyXG5cclxuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAwLjI1cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tYmFzZS1ob3Jpem9udGFsOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1sYXJnZS1ob3Jpem9udGFsOiAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1zbWFsbC12ZXJ0aWNhbDogMC4yNXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IC4zcmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmc6IDE0cHg7XHJcblxyXG4vLz09IFNpZGViYXJcclxuLy9cclxuJHNpZGViYXItcGFkZGluZy1ob3Jpem9udGFsOiAxMXB4O1xyXG4kc2lkZWJhci13aWR0aC1vcGVuOiAyMjBweDtcclxuJHNpZGViYXItd2lkdGgtY2xvc2VkOiA1MHB4O1xyXG4kc2lkZWJhci10cmFuc2l0aW9uLXRpbWU6IDAuM3MgIWRlZmF1bHQ7XHJcbiRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoOiA0cHg7XHJcbiRzaWRlYmFyLXdpZHRoOiAkc2lkZWJhci13aWR0aC1vcGVuKyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJHNpZGViYXItYmctY29sb3I6ICMxNzUyOUY7XHJcbiRzaWRlYmFyLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kc2lkZWJhci1pdGVtLWJvcmRlci1jb2xvcjogIzJkMmQyZDtcclxuJHNpZGViYXItaXRlbS1hY3RpdmUtY29sb3I6ICNmMmJlMzU7XHJcbiRzaWRlYmFyLWl0ZW0taG92ZXItYmctY29sb3I6ICMxMTE7XHJcblxyXG4kY2hhdC1zaWRlYmFyLWJnLWNvbG9yOiAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiRjaGF0LXNpZGViYXItd2lkdGg6IDI1MHB4KyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItZGl2aWRlcjogJyc7XHJcbiRicmVhZGNydW1iLXBhZGRpbmcteTogMDtcclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50O1xyXG5cclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4kd2lkZ2V0LWJnOiAjZmZmO1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAjNDQ0O1xyXG4kd2lkZ2V0LXNoYWRvdzogMCAwIDEwcHggZGFya2VuKCRib2R5LWJnLCA1JSk7XHJcblxyXG5cclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNHJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDAuOHJlbTtcclxuXHJcbiRpbnB1dC1oZWlnaHQtc21hbGw6IDMwcHg7XHJcblxyXG4vLz09IE5hdmJhclxyXG4vL1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDUwcHggIWRlZmF1bHQ7XHJcbiRuYXZiYXItcGFkZGluZy15OiAwICFkZWZhdWx0O1xyXG4kbmF2YmFyLXBhZGRpbmcteDogMCAhZGVmYXVsdDtcclxuXHJcbiRuYXZiYXItZGFzaGJvYXJkLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWNvbG9yOiAjNzc3ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1ib3JkZXI6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1iZywgNi41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgbGlua3NcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvcjogIzY2NiAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBsaW5rc1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWNvbG9yOiAjMzMzICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1hY3RpdmUtY29sb3I6ICM1NTUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstYWN0aXZlLWJnOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYmcsIDYuNSUpICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWNvbG9yOiAjY2NjICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBicmFuZCBsYWJlbFxyXG4kbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvcjogJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvciAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItY29sb3I6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvciwgMTAlKSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIHRvZ2dsZVxyXG4kbmF2YmFyLWRhc2hib2FyZC10b2dnbGUtaG92ZXItYmc6ICNkZGQgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLXRvZ2dsZS1pY29uLWJhci1iZzogIzg4OCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtdG9nZ2xlLWJvcmRlci1jb2xvcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBDb250ZW50XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRjb250ZW50LXBhZGRpbmc6IDQwcHg7XHJcbiRjb250ZW50LXBhZGRpbmctdG9wOiAkY29udGVudC1wYWRkaW5nKyRuYXZiYXItaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuLy8gU2NyZWVuc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kc2NyZWVuLWxnLWhlaWdodDogNjcwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vXHJcbiRidG4tZGVmYXVsdC1iZzogJGFkZGl0aW9uLWJnICFkZWZhdWx0O1xyXG4kYnRuLWRlZmF1bHQtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkdGV4dC1jb2xvcjtcclxuXHJcbi8vIFdpZGdldHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kd2lkZ2V0LXBhZGRpbmctdmVydGljYWw6IDE1cHggIWRlZmF1bHQ7XHJcbiR3aWRnZXQtcGFkZGluZy1ob3Jpem9udGFsOiAyMHB4ICFkZWZhdWx0O1xyXG4kd2lkZ2V0LWJnLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4vLz09IE5hdnNcclxuLy9cclxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy89PSBGb3Jtc1xyXG4vL1xyXG4kaW5wdXQtYm9yZGVyLWZvY3VzOiAjNGQ5MGZlICFkZWZhdWx0OyAvL3dlYmtpdCBmb2N1cyBjb2xvclxyXG4kbGVnZW5kLWNvbG9yOiBsaWdodGVuKCR0ZXh0LWNvbG9yLCAxNSUpICFkZWZhdWx0O1xyXG5cclxuJHByZS1iZzogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuXHJcbiRjdXJzb3ItZGlzYWJsZWQ6IG5vdC1hbGxvd2VkICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybSBzdGF0ZXMgYW5kIGFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29sb3JzIGZvciBmb3JtIGZlZWRiYWNrIHN0YXRlcyBhbmQsIGJ5IGRlZmF1bHQsIGFsZXJ0cy5cclxuXHJcbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICMzYzc2M2QgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1zdWNjZXNzLWJnOiAjZGZmMGQ4ICFkZWZhdWx0O1xyXG4kc3RhdGUtc3VjY2Vzcy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtc3VjY2Vzcy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWluZm8tdGV4dDogIzMxNzA4ZiAhZGVmYXVsdDtcclxuJHN0YXRlLWluZm8tYmc6ICNkOWVkZjcgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1pbmZvLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1pbmZvLWJnLCA3JSkgIWRlZmF1bHQ7XHJcblxyXG4kc3RhdGUtd2FybmluZy10ZXh0OiAjOGE2ZDNiICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1iZzogI2ZjZjhlMyAhZGVmYXVsdDtcclxuJG1hcmstYmc6ICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtd2FybmluZy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWRhbmdlci10ZXh0OiAjYTk0NDQyICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJnOiAjZjJkZWRlICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbi8vKiAgUG9wb3ZlciAgKi9cclxuJHBvcG92ZXItYmc6ICNlYmVmZjEgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuJGJyYW5kLXByaW1hcnk6IGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyOiAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhbmVsLWJnOiAjZmZmICFkZWZhdWx0O1xyXG4kcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnOiAjZjVmNWY1ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMDAwICFkZWZhdWx0O1xyXG4kZ3JheS1kYXJrZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXHJcbiRncmF5LWRhcms6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzM1xyXG4kZ3JheTogbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcclxuJGdyYXktbGlnaHQ6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XHJcbiRncmF5LWxpZ2h0ZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXHJcbiRncmF5LXNlbWktbGlnaHRlcjogJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40Mjg1NzE0MjkgIWRlZmF1bHQ7IC8vIDIwLzE0XHJcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXHJcbiRsaW5lLWhlaWdodC1jb21wdXRlZDogZmxvb3IoKCRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlKSkgIWRlZmF1bHQ7IC8vIH4yMHB4XHJcblxyXG4kYnJhbmQtcHJpbWFyeTogZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XHJcbiRicmFuZC1zdWNjZXNzOiAjNWNiODVjICFkZWZhdWx0O1xyXG4kYnJhbmQtaW5mbzogIzViYzBkZSAhZGVmYXVsdDtcclxuJGJyYW5kLXdhcm5pbmc6ICNmMGFkNGUgIWRlZmF1bHQ7XHJcbiRicmFuZC1kYW5nZXI6ICNkOTUzNGYgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcbiRzcGFjZXIteTogMSBlbSAhZGVmYXVsdDsiLCJAaW1wb3J0IFwiaGVscGVyc1wiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiogICAgICAgICAgICAgTE9HSU4gICAgICAgICAgICAgKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTMwMDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgLnBhZ2UtZm9vdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICBjb2xvcjogJHRleHQtbXV0ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWxvZ2luLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxufVxyXG5cclxuLndpZGdldC1sb2dpbi1sb2dvIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG5cclxuICAuZmEtY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLndpZGdldC1sb2dpbiB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgPmhlYWRlciB7XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIGg2IHtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW4taW5mbyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLW1pbmk7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmLmFiYy1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LXNlbWktbGlnaHRlcjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/components/forgot/forgotPassword.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/login/components/forgot/forgotPassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordStep1Component, ForgotPassword2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordStep1Component", function() { return ForgotPasswordStep1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword2Component", function() { return ForgotPassword2Component; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordStep1Component = /** @class */ (function () {
    function ForgotPasswordStep1Component(router, auth) {
        this.router = router;
        this.auth = auth;
        this.msg = "Please check your email for your user name and log in to continue.";
        this.title = "User Name Recovery";
        this.errorMessage = null;
    }
    ForgotPasswordStep1Component.prototype.onNext = function () {
        this.errorMessage = null;
        // forgot username
        if (this.email && this.email.trim().length > 0) {
            // this.auth.amp_forgotUsername(this.email).subscribe(
            // 	result => {
            // 		jQuery("#app-popup").modal("show");
            // 	},
            // 	error => {
            // 		console.error(error);
            // 		if (!isNil(error.message)) {
            // 			this.errorMessage = error.message;
            // 		}
            // 	}
            // );
        }
        else {
            // forgot password
            // console.log("username:", this.username);
            // this.auth.amp_forgotPassword(this.username).subscribe(
            // 	result => {
            // 		this.router.navigate(["/login/forgotPassword", this.username]);
            // 	},
            // 	error => {
            // 		console.log(error);
            // 		if (!isNil(error.message)) {
            // 			this.errorMessage = error.message;
            // 		}
            // 	}
            // );
        }
    };
    ForgotPasswordStep1Component.prototype.onClose = function () {
        jQuery("#app-popup").modal("hide");
        this.router.navigate(["/login"]);
    };
    ForgotPasswordStep1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "awscognito-angular2-app",
            template: __webpack_require__(/*! ./forgotPassword.html */ "./src/app/login/components/forgot/forgotPassword.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], ForgotPasswordStep1Component);
    return ForgotPasswordStep1Component;
}());

var ForgotPassword2Component = /** @class */ (function () {
    function ForgotPassword2Component(router, route, auth) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        console.log("username from the url: " + this.username);
    }
    ForgotPassword2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.username = params["username"];
        });
        this.errorMessage = null;
    };
    ForgotPassword2Component.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ForgotPassword2Component.prototype.onNext = function () {
        this.errorMessage = null;
        // this.auth
        // 	.amp_forgotPasswordSubmit(
        // 		this.username,
        // 		this.verificationCode,
        // 		this.password
        // 	)
        // 	.subscribe(
        // 		result => {
        // 			this.router.navigate(["/login"]);
        // 		},
        // 		error => {
        // 			console.log(error);
        // 			if (!isNil(error.message)) {
        // 				this.errorMessage = error.message;
        // 			}
        // 		}
        // 	);
    };
    ForgotPassword2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "awscognito-angular2-app",
            template: __webpack_require__(/*! ./forgotPasswordStep2.html */ "./src/app/login/components/forgot/forgotPasswordStep2.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], ForgotPassword2Component);
    return ForgotPassword2Component;
}());



/***/ }),

/***/ "./src/app/login/components/forgot/forgotPassword.html":
/*!*************************************************************!*\
  !*** ./src/app/login/components/forgot/forgotPassword.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          PipelinePro\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <div class=\"widget-body\">\r\n            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n              <div class=\"form-group\">\r\n                <h2>Account Recovery</h2>\r\n              </div>\r\n              <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n                {{ errorMessage }}\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"signupUsername\">User name</label>\r\n                <input id=\"signupUsername\" type=\"text\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"username\"\r\n                  [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <!-- <b>&nbsp;&nbsp;OR</b><br/><br/>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"emailAddress\">Email Address</label>\r\n                <input id=\"emailAddress\" type=\"text\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"email\"\r\n                  [ngModelOptions]=\"{standalone: true}\">\r\n              </div> -->\r\n              <div class=\"form-group\">\r\n                <button (click)=\"onNext()\" id=\"nextPage\" type=\"submit\" class=\"btn btn-primary btn-block\">Next\r\n                </button>\r\n              </div>\r\n              <hr>\r\n              <div class=\"row mt25\">\r\n                <div class=\"col-lg-2 col-xs-2\">\r\n                </div>\r\n                <div class=\"col-lg-5 col-xs-5\">\r\n                  <a [routerLink]=\"['/login/register']\"> <i class=\"fa fa-fw fa-sign-in\"></i> Register</a>\r\n                </div>\r\n                <div class=\"col-lg-4 col-xs-4\">\r\n                  <a [routerLink]=\"['/login']\"> <i class=\"fa fa-fw fa-user\"></i> Login</a>\r\n                </div>\r\n                <div class=\"col-lg-1 col-xs-1\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n<div class=\"modal fade\" id=\"app-popup\">\r\n  <div class=\"modal-dialog\" role=\"app-popup\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header modal-title-bar\">\r\n        <div title=\"title\" class=\"h4 modal-title text-xs-center fw-bold mt\">{{title}}</div>\r\n      </div>\r\n      <!--Modal Body-->\r\n      <div class=\"modal-body\">\r\n        <div [innerHTML]=\"msg\"></div>\r\n      </div>\r\n      <!--Modal Footer-->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-gray\" (click)=\"onClose()\" title=\"Close\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/components/forgot/forgotPasswordStep2.html":
/*!******************************************************************!*\
  !*** ./src/app/login/components/forgot/forgotPasswordStep2.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          PipelinePro\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <div class=\"widget-body\">\r\n            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n              <div class=\"form-group\">\r\n                <h2>Forgot Password</h2>\r\n              </div>\r\n              <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n                {{ errorMessage }}\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"verificationCode\">Verification Code</label>\r\n                <input id=\"verificationCode\" type=\"verificationCode\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"verificationCode\"\r\n                  [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"newPassword\">New Password</label>\r\n                <input id=\"newPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\" length=\"40\" [(ngModel)]=\"password\"\r\n                  [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button (click)=\"onNext()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                  Reset Password\r\n                </button>\r\n              </div>\r\n\r\n              <hr>\r\n              <p><a [routerLink]=\"['/login/resendCode']\"> <i class=\"fa fa-fw fa-group\"></i> Go back</a>\r\n              </p>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/components/lg-msgbox.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/login/components/lg-msgbox.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginMessageBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMessageBox", function() { return LoginMessageBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* This is a component which we pass in modal*/
var LoginMessageBox = /** @class */ (function () {
    function LoginMessageBox(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    LoginMessageBox.prototype.ngOnInit = function () { };
    LoginMessageBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login-msg-box",
            template: "\n\t\t<div class=\"modal-header\" style=\"background-color:#4175ab; color: #ffff\">\n\t\t\t<h4 class=\"modal-title pull-left\">{{ title }}</h4>\n\t\t\t<button\n\t\t\t\ttype=\"button\"\n\t\t\t\tclass=\"close pull-right\"\n\t\t\t\taria-label=\"Close\"\n\t\t\t\t(click)=\"bsModalRef.hide()\"\n\t\t\t>\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<p>{{ message }}</p>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button\n\t\t\t\ttype=\"button\"\n\t\t\t\tclass=\"btn btn-default\"\n\t\t\t\t(click)=\"bsModalRef.hide()\"\n\t\t\t>\n\t\t\t\t{{ closeBtnName }}\n\t\t\t</button>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], LoginMessageBox);
    return LoginMessageBox;
}());



/***/ }),

/***/ "./src/app/login/components/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/components/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _model_credentials_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/credentials.model */ "./src/app/login/model/credentials.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/login/services/profile.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _lg_msgbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lg-msgbox.component */ "./src/app/login/components/lg-msgbox.component.ts");
/* harmony import */ var _admin_services_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin/services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _core_sharedata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/sharedata.service */ "./src/app/core/sharedata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// Step 1: User logs in
// Step 2:
var LoginComponent = /** @class */ (function () {
    function LoginComponent(storage, auth, adminService, profile, modalService, shareDataService, router) {
        this.storage = storage;
        this.auth = auth;
        this.adminService = adminService;
        this.profile = profile;
        this.modalService = modalService;
        this.shareDataService = shareDataService;
        this.router = router;
        this.model = new _model_credentials_model__WEBPACK_IMPORTED_MODULE_5__["Credentials"]("rohit@test.com", "Password.01");
        this.alerts = [
            {
                type: "warning",
                msg: '<span class="fw-semi-bold">Warning:</span> Error Logging in'
            }
        ];
        this.AppTitle = "CBASDemo";
        switch (_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].stage) {
            case 'dev':
                this.AppTitle = "CBASDemo";
                break;
            case 'qa':
                this.AppTitle = "CBASDemo-QA";
                break;
            default:
                break;
        }
        this.loginTitle = "User Login";
        this.showErrorFlag = false;
        this.currentYear = new Date().getFullYear().toString();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token_id') !== null) {
            if (this.auth.jwt_hasRole('MOS-OCD')) {
                // this.router.navigate(['app/timesheet/resplan']);
                this.router.navigate(['app/reports/current-request-reports']);
            }
            else {
                // this.router.navigate(['app/tdl/search']);
                this.router.navigate(['app/reports/current-request-reports']);
            }
        }
        else {
            this.showErrorFlag = false;
            this.isLoginButtonClicked = false;
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        jQuery("#uname").focus();
        this.clearLocalStorageContent();
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].stage === 'dev') {
            // this.login();
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.busySignIn) {
            this.busySignIn.unsubscribe();
        }
    };
    LoginComponent.prototype.onResetError = function () {
        this.showErrorFlag = false;
        this.alerts = [];
    };
    LoginComponent.prototype.onShowError = function (error) {
        this.showErrorFlag = true;
        this.alerts.push({ type: "warning", msg: error });
    };
    LoginComponent.prototype.onShowBodyError = function (error) {
        this.showErrorFlag = true;
        this.alerts.push({ type: "warning", msg: error });
    };
    LoginComponent.prototype.clearLocalStorageContent = function () { };
    LoginComponent.prototype.displayConfirmationMessage = function (msgtoDisplay) {
        var initialState = {
            message: msgtoDisplay,
            title: "Need Email Verification"
        };
        this.bsModalRefMessageBox = this.modalService.show(_lg_msgbox_component__WEBPACK_IMPORTED_MODULE_9__["LoginMessageBox"], {
            initialState: initialState
        });
        this.bsModalRefMessageBox.content.closeBtnName = "Close";
    };
    LoginComponent.prototype.proceedtoLandingPage = function () {
        var _this = this;
        var that = this;
        this.adminService.getUserbyEmail(this.model.username)
            .subscribe(function (data) {
            if (data) {
                that.currentUser = data;
                that.storage.store('UserID', that.currentUser.userId);
                var loggedUserName = _this.currentUser.firstName + " " + that.currentUser.lastName;
                that.storage.store('LoggedUser', loggedUserName);
                that.shareDataService.loggedUser = loggedUserName;
                if (that.auth.jwt_hasRole('ROLE_USER')) {
                    // that.router.navigate(['app/timesheet/resplan']);
                    that.router.navigate(['app/reports/current-request-reports']);
                }
                else {
                    // that.router.navigate(['app/tdl/search']);
                    that.router.navigate(['app/reports/current-request-reports']);
                }
            }
        });
    };
    // Step 6: Send check for verification email
    LoginComponent.prototype.verifySendEmail = function (localUser) {
        this.proceedtoLandingPage();
    };
    LoginComponent.prototype.login = function () {
        return this.jwt_login();
    };
    LoginComponent.prototype.jwt_login = function () {
        var _this = this;
        if (this.isLoginButtonClicked) {
            return true;
        }
        this.clearLocalStorageContent();
        this.onResetError();
        jQuery("#frm-login")
            .parsley()
            .validate();
        if (jQuery("#frm-login")
            .parsley()
            .isValid()) {
            var handler = this;
            this.isLoginButtonClicked = true;
            // let status: LoginState = this.auth.jwt_getLoginState();
            // Step 2: See if user is authorized to login
            this.auth.jwt_login(this.model).subscribe(function (data) {
                if (data) {
                    _this.auth.jwt_setAccessToken(data.accesstoken);
                    _this.auth.jwt_setRefreshToken(data.refreshtoken);
                    _this.auth.jwt_setRole(data.rolelist);
                    // status.successfulSignIn();
                    _this.proceedtoLandingPage();
                }
            }, function (error) {
                // console.error(error.code);
                if (!Object(ramda__WEBPACK_IMPORTED_MODULE_4__["isNil"])(error.error) && !Object(ramda__WEBPACK_IMPORTED_MODULE_4__["isNil"])(error.error.errorCode)) {
                    _this.onShowError(error.error.message);
                }
                else {
                    _this.onShowError(error);
                }
                _this.isLoginButtonClicked = false;
            });
        }
    };
    LoginComponent.prototype.logout = function () {
        this.auth.jwt_logout();
        this.router.navigate(["login"]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.template.html */ "./src/app/login/components/login.template.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _admin_services_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"]],
            host: {
                class: "login-page app"
            },
            styles: [__webpack_require__(/*! ./login.style.scss */ "./src/app/login/components/login.style.scss")]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _admin_services_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_sharedata_service__WEBPACK_IMPORTED_MODULE_11__["ShareDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/components/login.style.scss":
/*!***************************************************!*\
  !*** ./src/app/login/components/login.style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n\r\n * Typography\r\n * ======================================================================== */\n.login-page {\n  background-image: url('background.jpg');\n  background-size: cover; }\n.login-page .page-footer {\n  margin-bottom: -25px;\n  font-size: 0.9rem;\n  color: #868e96;\n  text-align: center; }\n@media (min-height: 600px) {\n    .login-page .page-footer {\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n.widget-login-container {\n  padding-top: 25%; }\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 500; }\n.widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n.widget-login {\n  padding: 30px; }\n.widget-login > header h1,\n  .widget-login > header h2,\n  .widget-login > header h3,\n  .widget-login > header h4,\n  .widget-login > header h5,\n  .widget-login > header h6 {\n    font-weight: 500;\n    text-align: center; }\n.widget-login-info {\n  font-size: 0.9rem;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n.widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n.login-form .form-control {\n  font-size: 0.9rem; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXGFwcFxcbG9naW5cXGNvbXBvbmVudHNcXGxvZ2luLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7Ozs4RUFHOEU7QUNkOUU7RUFDRSx3Q0FBa0Q7RUFDbEQsdUJBQXFCLEVBRXRCO0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsa0JEWXFCO0VDWHJCLGVEOEJnQjtFQzdCaEIsbUJBQWtCLEVBT25CO0FBTEM7SUFORjtNQU9JLFVBQVM7TUFDVCxRQUFPO01BQ1AsU0FBUSxFQUVYLEVBQUE7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsaUJEZ0RzQixFQzFDdkI7QUFWRDtJQU9JLGdCQUFlO0lBQ2YsZUFBYyxFQUNmO0FBR0g7RUFDRSxjQUFhLEVBY2Q7QUFmRDs7Ozs7O0lBV00saUJENkJrQjtJQzVCbEIsbUJBQWtCLEVBQ25CO0FBSUw7RUFDRSxrQkRqQ3FCO0VDa0NyQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFLbkI7QUFURDtJQU9JLG1CQUFrQixFQUNuQjtBQUdIO0VBRUksa0JEN0NtQixFQzhDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9jb21wb25lbnRzL2xvZ2luLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW5nIHZhcmlhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRlbmFibGUtc2hhZG93czogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1pbmNsdWRlLWJvbnVzOiBmYWxzZSAhZGVmYXVsdDtcclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWNsYXNzLXByZWZpeDogZ2x5cGhpY29uICFkZWZhdWx0O1xyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtZm9udC1iYXNlLXNpemU6IDE0cHggIWRlZmF1bHQ7XHJcblxyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtZm9udC1wYXRoOiAnfi9mb250cy9nbHlwaGljb25zJyAhZGVmYXVsdDtcclxuJGZhLWZvbnQtcGF0aDogJ34vZm9udC1hd2Vzb21lL2ZvbnRzJyAhZGVmYXVsdDtcclxuXHJcbi8qXHJcblxyXG4gKiBUeXBvZ3JhcGh5XHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4kZm9udC1zaXplLWluaXRpYWw6IDE0cHg7IC8vIHJlc2V0IGRlZmF1bHQgYnJvd3NlciB2YWx1ZSBmcm9tIDE2cHggdG8gMTNweFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGc6IDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtc206IDAuODc1cmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxhcmdlcjogMS4xcmVtO1xyXG4kZm9udC1zaXplLW1pbmk6IDAuOXJlbTtcclxuJGZvbnQtc2l6ZS1pbmRleDogMC43cmVtO1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6ICdvcGVuJyxcclxuc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdvcGVuJyxcclxuc2Fucy1zZXJpZjtcclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG4vL1xyXG5cclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNmNWY1ZjUgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogI2VlZWVlZSAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjODY4ZTk2ICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICM1NTUgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzM0MzQzNCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XHJcbiRncmF5LWxpZ2h0OiAjZGRkICFkZWZhdWx0O1xyXG5cclxuXHJcbiRibHVlOiAjNWQ4ZmMyICFkZWZhdWx0O1xyXG4kcmVkOiAjZGQ1ODI2ICFkZWZhdWx0O1xyXG4keWVsbG93OiAjZjBiNTE4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICM2NGJkNjMgIWRlZmF1bHQ7XHJcbiRjeWFuOiAjNWRjNGJmICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKHByaW1hcnk6ICRibHVlLFxyXG5zZWNvbmRhcnk6ICRncmF5LTYwMCxcclxuc3VjY2VzczogJGdyZWVuLFxyXG5wcmltYXJ5LWxpZ2h0OiAjZGVlNGVlLFxyXG5zdWNjZXNzLWxpZ2h0OiAjZWNmYWVjLFxyXG5pbmZvLWxpZ2h0OiAjZjJmYWZhLFxyXG53YXJuaW5nLWxpZ2h0OiAjZmRmN2U2LFxyXG5kYW5nZXItbGlnaHQ6ICNmZmYyZWYsXHJcbmluZm86ICRjeWFuLFxyXG53YXJuaW5nOiAkeWVsbG93LFxyXG5kYW5nZXI6ICRyZWQsXHJcbmRhcms6ICRncmF5LTgwMCxcclxuaW52ZXJzZTogJGdyYXktNzAwLFxyXG5ncmF5OiAkZ3JheS0zMDAsXHJcbmRlZmF1bHQ6ICNmOGY4ZjgpO1xyXG5cclxuJGxpbmstY29sb3I6ICMyMThiYzM7XHJcblxyXG4kdGV4dC1jb2xvcjogJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC10aGluOiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtc2l6ZS1zbWFsbGVyOiA4NSUgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRhZGRpdGlvbi1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWJnOiBsaWdodGdyYXkgIWRlZmF1bHQ7IC8vICNmNWY1ZjUgIWRlZmF1bHQ7XHJcbiRib2R5LWJnLWxpZ2h0OiBsaWdodGVuKCRib2R5LWJnLCAzJSk7XHJcblxyXG4vLz09IENvbXBvbmVudHNcclxuLy9cclxuXHJcbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6IDAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6IDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFkZGluZy1zbWFsbC12ZXJ0aWNhbDogMC4yNXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtYXJnaW4tYmFzZS12ZXJ0aWNhbDogMC41cmVtICFkZWZhdWx0O1xyXG4kbWFyZ2luLWJhc2UtaG9yaXpvbnRhbDogMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtYXJnaW4tbGFyZ2UtdmVydGljYWw6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tbGFyZ2UtaG9yaXpvbnRhbDogMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtYXJnaW4tc21hbGwtdmVydGljYWw6IDAuMjVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tc21hbGwtaG9yaXpvbnRhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAuM3JlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IC4zNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRuYXYtbGluay1wYWRkaW5nOiAxNHB4O1xyXG5cclxuLy89PSBTaWRlYmFyXHJcbi8vXHJcbiRzaWRlYmFyLXBhZGRpbmctaG9yaXpvbnRhbDogMTFweDtcclxuJHNpZGViYXItd2lkdGgtb3BlbjogMjIwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWNsb3NlZDogNTBweDtcclxuJHNpZGViYXItdHJhbnNpdGlvbi10aW1lOiAwLjNzICFkZWZhdWx0O1xyXG4kc2lkZWJhci1zbGltLXNjcm9sbC13aWR0aDogNHB4O1xyXG4kc2lkZWJhci13aWR0aDogJHNpZGViYXItd2lkdGgtb3Blbiskc2lkZWJhci1zbGltLXNjcm9sbC13aWR0aCAhZGVmYXVsdDtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiAjMTc1MjlGO1xyXG4kc2lkZWJhci1jb2xvcjogJHdoaXRlO1xyXG5cclxuJHNpZGViYXItaXRlbS1ib3JkZXItY29sb3I6ICMyZDJkMmQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWNvbG9yOiAjZjJiZTM1O1xyXG4kc2lkZWJhci1pdGVtLWhvdmVyLWJnLWNvbG9yOiAjMTExO1xyXG5cclxuJGNoYXQtc2lkZWJhci1iZy1jb2xvcjogJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kY2hhdC1zaWRlYmFyLXdpZHRoOiAyNTBweCskc2lkZWJhci1zbGltLXNjcm9sbC13aWR0aCAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWRpdmlkZXI6ICcnO1xyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDA7XHJcbiRicmVhZGNydW1iLWJnOiB0cmFuc3BhcmVudDtcclxuXHJcbiRiYWRnZS1mb250LXdlaWdodDogNjAwO1xyXG5cclxuJHdpZGdldC1iZzogI2ZmZjtcclxuJHdpZGdldC10aXRsZS1jb2xvcjogIzQ0NDtcclxuJHdpZGdldC1zaGFkb3c6IDAgMCAxMHB4IGRhcmtlbigkYm9keS1iZywgNSUpO1xyXG5cclxuXHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjRyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAwLjhyZW07XHJcblxyXG4kaW5wdXQtaGVpZ2h0LXNtYWxsOiAzMHB4O1xyXG5cclxuLy89PSBOYXZiYXJcclxuLy9cclxuXHJcbiRuYXZiYXItaGVpZ2h0OiA1MHB4ICFkZWZhdWx0O1xyXG4kbmF2YmFyLXBhZGRpbmcteTogMCAhZGVmYXVsdDtcclxuJG5hdmJhci1wYWRkaW5nLXg6IDAgIWRlZmF1bHQ7XHJcblxyXG4kbmF2YmFyLWRhc2hib2FyZC1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1jb2xvcjogIzc3NyAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYm9yZGVyOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYmcsIDYuNSUpICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIGxpbmtzXHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstY29sb3I6ICM2NjYgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgbGlua3NcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1ob3Zlci1jb2xvcjogIzMzMyAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1ob3Zlci1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstYWN0aXZlLWNvbG9yOiAjNTU1ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWFjdGl2ZS1iZzogZGFya2VuKCRuYXZiYXItZGFzaGJvYXJkLWJnLCA2LjUlKSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1kaXNhYmxlZC1jb2xvcjogI2NjYyAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgYnJhbmQgbGFiZWxcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtY29sb3I6ICRuYXZiYXItZGFzaGJvYXJkLWxpbmstY29sb3IgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWJyYW5kLWhvdmVyLWNvbG9yOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtY29sb3IsIDEwJSkgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWJyYW5kLWhvdmVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciB0b2dnbGVcclxuJG5hdmJhci1kYXNoYm9hcmQtdG9nZ2xlLWhvdmVyLWJnOiAjZGRkICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC10b2dnbGUtaWNvbi1iYXItYmc6ICM4ODggIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLXRvZ2dsZS1ib3JkZXItY29sb3I6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQ29udGVudFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kY29udGVudC1wYWRkaW5nOiA0MHB4O1xyXG4kY29udGVudC1wYWRkaW5nLXRvcDogJGNvbnRlbnQtcGFkZGluZyskbmF2YmFyLWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbi8vIFNjcmVlbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJHNjcmVlbi1sZy1oZWlnaHQ6IDY3MHB4ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vL1xyXG4kYnRuLWRlZmF1bHQtYmc6ICRhZGRpdGlvbi1iZyAhZGVmYXVsdDtcclxuJGJ0bi1kZWZhdWx0LWJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjE1KSAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJHRleHQtY29sb3I7XHJcblxyXG4vLyBXaWRnZXRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHdpZGdldC1wYWRkaW5nLXZlcnRpY2FsOiAxNXB4ICFkZWZhdWx0O1xyXG4kd2lkZ2V0LXBhZGRpbmctaG9yaXpvbnRhbDogMjBweCAhZGVmYXVsdDtcclxuJHdpZGdldC1iZy1jb2xvcjogJHdoaXRlO1xyXG5cclxuLy89PSBOYXZzXHJcbi8vXHJcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vPT0gRm9ybXNcclxuLy9cclxuJGlucHV0LWJvcmRlci1mb2N1czogIzRkOTBmZSAhZGVmYXVsdDsgLy93ZWJraXQgZm9jdXMgY29sb3JcclxuJGxlZ2VuZC1jb2xvcjogbGlnaHRlbigkdGV4dC1jb2xvciwgMTUlKSAhZGVmYXVsdDtcclxuXHJcbiRwcmUtYmc6ICNmNWY1ZjUgIWRlZmF1bHQ7XHJcblxyXG4kY3Vyc29yLWRpc2FibGVkOiBub3QtYWxsb3dlZCAhZGVmYXVsdDtcclxuXHJcbi8vIEZvcm0gc3RhdGVzIGFuZCBhbGVydHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbG9ycyBmb3IgZm9ybSBmZWVkYmFjayBzdGF0ZXMgYW5kLCBieSBkZWZhdWx0LCBhbGVydHMuXHJcblxyXG4kc3RhdGUtc3VjY2Vzcy10ZXh0OiAjM2M3NjNkICFkZWZhdWx0O1xyXG4kc3RhdGUtc3VjY2Vzcy1iZzogI2RmZjBkOCAhZGVmYXVsdDtcclxuJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyOiBkYXJrZW4oJHN0YXRlLXN1Y2Nlc3MtYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbiRzdGF0ZS1pbmZvLXRleHQ6ICMzMTcwOGYgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1pbmZvLWJnOiAjZDllZGY3ICFkZWZhdWx0O1xyXG4kc3RhdGUtaW5mby1ib3JkZXI6IGRhcmtlbigkc3RhdGUtaW5mby1iZywgNyUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLXdhcm5pbmctdGV4dDogIzhhNmQzYiAhZGVmYXVsdDtcclxuJHN0YXRlLXdhcm5pbmctYmc6ICNmY2Y4ZTMgIWRlZmF1bHQ7XHJcbiRtYXJrLWJnOiAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcclxuJHN0YXRlLXdhcm5pbmctYm9yZGVyOiBkYXJrZW4oJHN0YXRlLXdhcm5pbmctYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbiRzdGF0ZS1kYW5nZXItdGV4dDogI2E5NDQ0MiAhZGVmYXVsdDtcclxuJHN0YXRlLWRhbmdlci1iZzogI2YyZGVkZSAhZGVmYXVsdDtcclxuJHN0YXRlLWRhbmdlci1ib3JkZXI6IGRhcmtlbigkc3RhdGUtZGFuZ2VyLWJnLCA1JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyogIFBvcG92ZXIgICovXHJcbiRwb3BvdmVyLWJnOiAjZWJlZmYxICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbiRicmFuZC1wcmltYXJ5OiBkYXJrZW4oIzQyOGJjYSwgNi41JSkgIWRlZmF1bHQ7IC8vICMzMzdhYjdcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlcjogJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwYW5lbC1iZzogI2ZmZiAhZGVmYXVsdDtcclxuJHBhbmVsLWRlZmF1bHQtaGVhZGluZy1iZzogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyOiAjZGRkICFkZWZhdWx0O1xyXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGdyYXktYmFzZTogIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktZGFya2VyOiBsaWdodGVuKCRncmF5LWJhc2UsIDEzLjUlKSAhZGVmYXVsdDsgLy8gIzIyMlxyXG4kZ3JheS1kYXJrOiBsaWdodGVuKCRncmF5LWJhc2UsIDIwJSkgIWRlZmF1bHQ7IC8vICMzMzNcclxuJGdyYXk6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMzMuNSUpICFkZWZhdWx0OyAvLyAjNTU1XHJcbiRncmF5LWxpZ2h0OiBsaWdodGVuKCRncmF5LWJhc2UsIDQ2LjclKSAhZGVmYXVsdDsgLy8gIzc3N1xyXG4kZ3JheS1saWdodGVyOiBsaWdodGVuKCRncmF5LWJhc2UsIDkzLjUlKSAhZGVmYXVsdDsgLy8gI2VlZVxyXG4kZ3JheS1zZW1pLWxpZ2h0ZXI6ICRncmF5LTMwMCAhZGVmYXVsdDtcclxuXHJcbi8vKiogVW5pdC1sZXNzIGBsaW5lLWhlaWdodGAgZm9yIHVzZSBpbiBjb21wb25lbnRzIGxpa2UgYnV0dG9ucy5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNDI4NTcxNDI5ICFkZWZhdWx0OyAvLyAyMC8xNFxyXG4vLyoqIENvbXB1dGVkIFwibGluZS1oZWlnaHRcIiAoYGZvbnQtc2l6ZWAgKiBgbGluZS1oZWlnaHRgKSBmb3IgdXNlIHdpdGggYG1hcmdpbmAsIGBwYWRkaW5nYCwgZXRjLlxyXG4kbGluZS1oZWlnaHQtY29tcHV0ZWQ6IGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSkpICFkZWZhdWx0OyAvLyB+MjBweFxyXG5cclxuJGJyYW5kLXByaW1hcnk6IGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xyXG4kYnJhbmQtc3VjY2VzczogIzVjYjg1YyAhZGVmYXVsdDtcclxuJGJyYW5kLWluZm86ICM1YmMwZGUgIWRlZmF1bHQ7XHJcbiRicmFuZC13YXJuaW5nOiAjZjBhZDRlICFkZWZhdWx0O1xyXG4kYnJhbmQtZGFuZ2VyOiAjZDk1MzRmICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tYm9yZGVyOiAjZGRkICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG4kc3BhY2VyLXk6IDEgZW0gIWRlZmF1bHQ7IiwiQGltcG9ydCBcImhlbHBlcnNcIjtcclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1nL2JhY2tncm91bmQuanBnXCIpOyBcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IFxyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICRncmF5LXNlbWktbGlnaHRlcjtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgLnBhZ2UtZm9vdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICBjb2xvcjogJHRleHQtbXV0ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWxvZ2luLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxufVxyXG5cclxuLndpZGdldC1sb2dpbi1sb2dvIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG5cclxuICAuZmEtY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLndpZGdldC1sb2dpbiB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgPmhlYWRlciB7XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIGg2IHtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW4taW5mbyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLW1pbmk7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmLmFiYy1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/components/login.template.html":
/*!******************************************************!*\
  !*** ./src/app/login/components/login.template.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-4 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          {{AppTitle}}\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <header>\r\n            <h2 title=\"login title\" class=\"h4 no-margin fw-bold\">\r\n              <i class=\"fa fa-fw fa-user\"></i>\r\n              {{loginTitle}}\r\n            </h2>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <form class=\"login-form mt-lg\" id=\"frm-login\" role=\"form\" data-parsley-priority-enabled=\"false\" novalidate=\"novalidate\"\r\n              data-parsley-validate data-parsley-focus=\"first\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"uname\" name=\"username\" placeholder=\"Username\" aria-label=\"username\"\r\n                  [(ngModel)]=\"model.username\" required=\"required\" data-parsley-required-message=\"Error: Username is required\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pwd\" type=\"password\" placeholder=\"Password\" name=\"password\" required\r\n                  [(ngModel)]=\"model.password\" required=\"required\" data-parsley-required-message=\"Error: Password is required\">\r\n              </div>\r\n              <div aria-live=\"assertive\">\r\n                <div role=\"alert\" *ngIf=\"showErrorFlag\" class=\"row\">\r\n                  <div class=\"offset-lg-1 col-lg-10\">\r\n                    <alert *ngFor=\"let alert of alerts; let i = index\" [type]=\"alert.type + ' alert-sm'\">\r\n                      <div [innerHTML]=\"alert.msg\"></div>\r\n                    </alert>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                  <button id=\"btn-login\" type=\"submit\" (click)=\"login()\" class=\"btn btn-primary btn-block\">Login</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class=\"page-footer col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-4 offset-xs-1\">\r\n    <div><span>{{currentYear}} &copy; CTP - CBAS Demo Application</span></div>\r\n    <div><span>Build: 1.0.0 Published: December 06, 2019 - 07:30 PM EST</span></div>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/login/components/logout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/components/logout.component.ts ***!
  \******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.alerts = [
            {
                type: 'warning',
                msg: '<span class="fw-semi-bold">Warning:</span> Error Logging in'
            }
        ];
        this.showErrorFlag = false;
        this.currentYear = new Date().getFullYear().toString();
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.showErrorFlag = false;
    };
    LogoutComponent.prototype.login = function () {
        this.router.navigate(['app/admin/dashboard']);
    };
    LogoutComponent.prototype.logout = function () {
        this.router.navigate(['logout']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[logout]',
            template: __webpack_require__(/*! ./logout.template.html */ "./src/app/login/components/logout.template.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                class: 'login-page app'
            },
            styles: [__webpack_require__(/*! ./login.style.scss */ "./src/app/login/components/login.style.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/login/components/logout.template.html":
/*!*******************************************************!*\
  !*** ./src/app/login/components/logout.template.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          DMAT\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <header>\r\n            <label title=\"login title\" class=\"h4 no-margin fw-bold\">You are logged out of DMAT. To log back in, \r\n              <a [routerLink]=\"['../../login']\">click here</a></label>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <form class=\"login-form mt-lg\">\r\n            <div *ngIf=\"showErrorFlag\" class=\"row\">\r\n                  <div class=\"form-group row\">\r\n                    <div class=\"offset-xs-1 col-lg-10 col-xs-10\">\r\n                      <alert *ngFor=\"let alert of alerts; let i = index\" [type]=\"alert.type + ' alert-sm'\">\r\n                          <div [innerHTML]=\"alert.msg\"></div><div>Email us for assistance at: sdat.taxcreditapp@maryland.gov</div>\r\n                      </alert>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class=\"page-footer\">\r\n    <label title=\"footer\">{{currentYear}} &copy; Deloitte.</label>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/components/mfa/mfa.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/login/components/mfa/mfa.component.ts ***!
  \*******************************************************/
/*! exports provided: MFAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MFAComponent", function() { return MFAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MFAComponent = /** @class */ (function () {
    function MFAComponent() {
        console.log("MFAComponent constructor");
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MFAComponent.prototype, "destination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], MFAComponent.prototype, "onSubmit", void 0);
    MFAComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-mfa',
            template: __webpack_require__(/*! ./mfa.html */ "./src/app/login/components/mfa/mfa.html")
        }),
        __metadata("design:paramtypes", [])
    ], MFAComponent);
    return MFAComponent;
}());



/***/ }),

/***/ "./src/app/login/components/mfa/mfa.html":
/*!***********************************************!*\
  !*** ./src/app/login/components/mfa/mfa.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n    <div>\r\n        Authentication code has been sent to: {{destination}}\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input id=\"mfaCode\" required type=\"text\" maxlength=\"10\" class=\"form-control\"\r\n               length=\"40\" #code>\r\n    </div>\r\n    <button (click)=\"onSubmit(code.value)\" type=\"submit\" class=\"btn btn-primary btn-block\">\r\n        Submit code\r\n    </button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/components/newpassword/newpassword.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/login/components/newpassword/newpassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewPasswordUser, NewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordUser", function() { return NewPasswordUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function() { return NewPasswordComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPasswordUser = /** @class */ (function () {
    function NewPasswordUser() {
    }
    return NewPasswordUser;
}());

/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
var NewPasswordComponent = /** @class */ (function () {
    function NewPasswordComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.errorMessage = null;
        this.registrationUser = new NewPasswordUser();
    }
    NewPasswordComponent.prototype.onChangePassword = function () {
        var that = this;
        // this.auth.amp_getAuthenticatedUser().subscribe(
        // 	awsUser => {
        // 		this.auth
        // 			.amp_changePassword(
        // 				awsUser,
        // 				that.registrationUser.existingPassword,
        // 				that.registrationUser.password
        // 			)
        // 			.subscribe(
        // 				result => {
        // 					this.router.navigate(["/login"]);
        // 				},
        // 				error => {
        // 					console.log(error);
        // 					if (!isNil(error.message)) {
        // 						this.errorMessage = error.message;
        // 					}
        // 				}
        // 			);
        // 	},
        // 	error => {
        // 		console.log(error);
        // 		if (!isNil(error.message)) {
        // 			this.errorMessage = error.message;
        // 		}
        // 	}
        // );
    };
    NewPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "awscognito-angular2-app",
            template: __webpack_require__(/*! ./newpassword.html */ "./src/app/login/components/newpassword/newpassword.html"),
            styles: [__webpack_require__(/*! ./newpassword.style.scss */ "./src/app/login/components/newpassword/newpassword.style.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], NewPasswordComponent);
    return NewPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/components/newpassword/newpassword.html":
/*!***************************************************************!*\
  !*** ./src/app/login/components/newpassword/newpassword.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          PipelinePro\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <div class=\"widget-body\">\r\n            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n              <div class=\"form-group\">\r\n                <h2>Set new password</h2>\r\n              </div>\r\n              <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n                {{ errorMessage }}\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"signupEmail\">Username / Email</label>\r\n                <input id=\"signupEmail\" type=\"email\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"registrationUser.username\"\r\n                  [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"existingPassword\">Old/Temporary Password</label>\r\n                <input id=\"existingPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\" placeholder=\"at least 8 characters\"\r\n                  length=\"40\" [(ngModel)]=\"registrationUser.existingPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"signupPassword\">New Password</label>\r\n                <input id=\"signupPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\" placeholder=\"at least 8 characters\"\r\n                  length=\"40\" [(ngModel)]=\"registrationUser.password\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button (click)=\"onChangePassword()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                  Set your password\r\n                </button>\r\n              </div>\r\n              <hr>\r\n              <p>Already have an account? <a [routerLink]=\"['/login']\"> <i class=\"fa fa-fw fa-lock\"></i>Login</a></p>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./src/app/login/components/newpassword/newpassword.style.scss":
/*!*********************************************************************!*\
  !*** ./src/app/login/components/newpassword/newpassword.style.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n\r\n * Typography\r\n * ======================================================================== */\n/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #dee2e6; }\n.login-page .page-footer {\n  margin-bottom: -25px;\n  font-size: 0.9rem;\n  color: #868e96;\n  text-align: center; }\n@media (min-height: 600px) {\n    .login-page .page-footer {\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n.widget-login-container {\n  padding-top: 25%; }\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 500; }\n.widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n.widget-login {\n  padding: 30px; }\n.widget-login > header h1,\n  .widget-login > header h2,\n  .widget-login > header h3,\n  .widget-login > header h4,\n  .widget-login > header h5,\n  .widget-login > header h6 {\n    font-weight: 500;\n    text-align: center; }\n.widget-login-info {\n  font-size: 0.9rem;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n.widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n.login-form .form-control {\n  font-size: 0.9rem;\n  background-color: #eeeeee; }\n.login-form .form-control:focus {\n    background-color: #dee2e6; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9uZXdwYXNzd29yZC9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9uZXdwYXNzd29yZC9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXGFwcFxcbG9naW5cXGNvbXBvbmVudHNcXG5ld3Bhc3N3b3JkXFxuZXdwYXNzd29yZC5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBOzs7OEVBRzhFO0FDZDlFLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDO0VBQ0UsMEJEZ0NnQixFQy9CakI7QUFFRDtFQUNFLHFCQUFvQjtFQUNwQixrQkRXcUI7RUNWckIsZUQ2QmdCO0VDNUJoQixtQkFBa0IsRUFPbkI7QUFMQztJQU5GO01BT0ksVUFBUztNQUNULFFBQU87TUFDUCxTQUFRLEVBRVgsRUFBQTtBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixpQkQrQ3NCLEVDekN2QjtBQVZEO0lBT0ksZ0JBQWU7SUFDZixlQUFjLEVBQ2Y7QUFHSDtFQUNFLGNBQWEsRUFjZDtBQWZEOzs7Ozs7SUFXTSxpQkQ0QmtCO0lDM0JsQixtQkFBa0IsRUFDbkI7QUFJTDtFQUNFLGtCRGxDcUI7RUNtQ3JCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFLbkI7QUFWRDtJQVFJLG1CQUFrQixFQUNuQjtBQUdIO0VBRUksa0JEL0NtQjtFQ2dEbkIsMEJEaU1xQyxFQzVMdEM7QUFSSDtJQU1NLDBCRG5DWSxFQ29DYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2NvbXBvbmVudHMvbmV3cGFzc3dvcmQvbmV3cGFzc3dvcmQuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbmcgdmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWluY2x1ZGUtYm9udXM6IGZhbHNlICFkZWZhdWx0O1xyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtY2xhc3MtcHJlZml4OiBnbHlwaGljb24gIWRlZmF1bHQ7XHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LWJhc2Utc2l6ZTogMTRweCAhZGVmYXVsdDtcclxuXHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LXBhdGg6ICd+L2ZvbnRzL2dseXBoaWNvbnMnICFkZWZhdWx0O1xyXG4kZmEtZm9udC1wYXRoOiAnfi9mb250LWF3ZXNvbWUvZm9udHMnICFkZWZhdWx0O1xyXG5cclxuLypcclxuXHJcbiAqIFR5cG9ncmFwaHlcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiRmb250LXNpemUtaW5pdGlhbDogMTRweDsgLy8gcmVzZXQgZGVmYXVsdCBicm93c2VyIHZhbHVlIGZyb20gMTZweCB0byAxM3B4XHJcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGFyZ2VyOiAxLjFyZW07XHJcbiRmb250LXNpemUtbWluaTogMC45cmVtO1xyXG4kZm9udC1zaXplLWluZGV4OiAwLjdyZW07XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcbi8vXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAjZWVlZWVlICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICM4NjhlOTYgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogIzU1NSAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktbGlnaHQ6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGJsdWU6ICM1ZDhmYzIgIWRlZmF1bHQ7XHJcbiRyZWQ6ICNkZDU4MjYgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICNmMGI1MTggIWRlZmF1bHQ7XHJcbiRncmVlbjogIzY0YmQ2MyAhZGVmYXVsdDtcclxuJGN5YW46ICM1ZGM0YmYgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAocHJpbWFyeTogJGJsdWUsXHJcbnNlY29uZGFyeTogJGdyYXktNjAwLFxyXG5zdWNjZXNzOiAkZ3JlZW4sXHJcbnByaW1hcnktbGlnaHQ6ICNkZWU0ZWUsXHJcbnN1Y2Nlc3MtbGlnaHQ6ICNlY2ZhZWMsXHJcbmluZm8tbGlnaHQ6ICNmMmZhZmEsXHJcbndhcm5pbmctbGlnaHQ6ICNmZGY3ZTYsXHJcbmRhbmdlci1saWdodDogI2ZmZjJlZixcclxuaW5mbzogJGN5YW4sXHJcbndhcm5pbmc6ICR5ZWxsb3csXHJcbmRhbmdlcjogJHJlZCxcclxuZGFyazogJGdyYXktODAwLFxyXG5pbnZlcnNlOiAkZ3JheS03MDAsXHJcbmdyYXk6ICRncmF5LTMwMCxcclxuZGVmYXVsdDogI2Y4ZjhmOCk7XHJcblxyXG4kbGluay1jb2xvcjogIzIxOGJjMztcclxuXHJcbiR0ZXh0LWNvbG9yOiAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LXRoaW46IDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLXNtYWxsZXI6IDg1JSAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGFkZGl0aW9uLWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG5cclxuJGJvZHktYmc6IGxpZ2h0Z3JheSAhZGVmYXVsdDsgLy8gI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGJvZHktYmctbGlnaHQ6IGxpZ2h0ZW4oJGJvZHktYmcsIDMlKTtcclxuXHJcbi8vPT0gQ29tcG9uZW50c1xyXG4vL1xyXG5cclxuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAwLjI1cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tYmFzZS1ob3Jpem9udGFsOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1sYXJnZS1ob3Jpem9udGFsOiAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1zbWFsbC12ZXJ0aWNhbDogMC4yNXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IC4zcmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmc6IDE0cHg7XHJcblxyXG4vLz09IFNpZGViYXJcclxuLy9cclxuJHNpZGViYXItcGFkZGluZy1ob3Jpem9udGFsOiAxMXB4O1xyXG4kc2lkZWJhci13aWR0aC1vcGVuOiAyMjBweDtcclxuJHNpZGViYXItd2lkdGgtY2xvc2VkOiA1MHB4O1xyXG4kc2lkZWJhci10cmFuc2l0aW9uLXRpbWU6IDAuM3MgIWRlZmF1bHQ7XHJcbiRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoOiA0cHg7XHJcbiRzaWRlYmFyLXdpZHRoOiAkc2lkZWJhci13aWR0aC1vcGVuKyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJHNpZGViYXItYmctY29sb3I6ICMxNzUyOUY7XHJcbiRzaWRlYmFyLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kc2lkZWJhci1pdGVtLWJvcmRlci1jb2xvcjogIzJkMmQyZDtcclxuJHNpZGViYXItaXRlbS1hY3RpdmUtY29sb3I6ICNmMmJlMzU7XHJcbiRzaWRlYmFyLWl0ZW0taG92ZXItYmctY29sb3I6ICMxMTE7XHJcblxyXG4kY2hhdC1zaWRlYmFyLWJnLWNvbG9yOiAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiRjaGF0LXNpZGViYXItd2lkdGg6IDI1MHB4KyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItZGl2aWRlcjogJyc7XHJcbiRicmVhZGNydW1iLXBhZGRpbmcteTogMDtcclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50O1xyXG5cclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4kd2lkZ2V0LWJnOiAjZmZmO1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAjNDQ0O1xyXG4kd2lkZ2V0LXNoYWRvdzogMCAwIDEwcHggZGFya2VuKCRib2R5LWJnLCA1JSk7XHJcblxyXG5cclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNHJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDAuOHJlbTtcclxuXHJcbiRpbnB1dC1oZWlnaHQtc21hbGw6IDMwcHg7XHJcblxyXG4vLz09IE5hdmJhclxyXG4vL1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDUwcHggIWRlZmF1bHQ7XHJcbiRuYXZiYXItcGFkZGluZy15OiAwICFkZWZhdWx0O1xyXG4kbmF2YmFyLXBhZGRpbmcteDogMCAhZGVmYXVsdDtcclxuXHJcbiRuYXZiYXItZGFzaGJvYXJkLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWNvbG9yOiAjNzc3ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1ib3JkZXI6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1iZywgNi41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgbGlua3NcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvcjogIzY2NiAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBsaW5rc1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWNvbG9yOiAjMzMzICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1hY3RpdmUtY29sb3I6ICM1NTUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstYWN0aXZlLWJnOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYmcsIDYuNSUpICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWNvbG9yOiAjY2NjICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBicmFuZCBsYWJlbFxyXG4kbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvcjogJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvciAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItY29sb3I6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvciwgMTAlKSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIHRvZ2dsZVxyXG4kbmF2YmFyLWRhc2hib2FyZC10b2dnbGUtaG92ZXItYmc6ICNkZGQgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLXRvZ2dsZS1pY29uLWJhci1iZzogIzg4OCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtdG9nZ2xlLWJvcmRlci1jb2xvcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBDb250ZW50XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRjb250ZW50LXBhZGRpbmc6IDQwcHg7XHJcbiRjb250ZW50LXBhZGRpbmctdG9wOiAkY29udGVudC1wYWRkaW5nKyRuYXZiYXItaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuLy8gU2NyZWVuc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kc2NyZWVuLWxnLWhlaWdodDogNjcwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vXHJcbiRidG4tZGVmYXVsdC1iZzogJGFkZGl0aW9uLWJnICFkZWZhdWx0O1xyXG4kYnRuLWRlZmF1bHQtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkdGV4dC1jb2xvcjtcclxuXHJcbi8vIFdpZGdldHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kd2lkZ2V0LXBhZGRpbmctdmVydGljYWw6IDE1cHggIWRlZmF1bHQ7XHJcbiR3aWRnZXQtcGFkZGluZy1ob3Jpem9udGFsOiAyMHB4ICFkZWZhdWx0O1xyXG4kd2lkZ2V0LWJnLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4vLz09IE5hdnNcclxuLy9cclxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy89PSBGb3Jtc1xyXG4vL1xyXG4kaW5wdXQtYm9yZGVyLWZvY3VzOiAjNGQ5MGZlICFkZWZhdWx0OyAvL3dlYmtpdCBmb2N1cyBjb2xvclxyXG4kbGVnZW5kLWNvbG9yOiBsaWdodGVuKCR0ZXh0LWNvbG9yLCAxNSUpICFkZWZhdWx0O1xyXG5cclxuJHByZS1iZzogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuXHJcbiRjdXJzb3ItZGlzYWJsZWQ6IG5vdC1hbGxvd2VkICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybSBzdGF0ZXMgYW5kIGFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29sb3JzIGZvciBmb3JtIGZlZWRiYWNrIHN0YXRlcyBhbmQsIGJ5IGRlZmF1bHQsIGFsZXJ0cy5cclxuXHJcbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICMzYzc2M2QgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1zdWNjZXNzLWJnOiAjZGZmMGQ4ICFkZWZhdWx0O1xyXG4kc3RhdGUtc3VjY2Vzcy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtc3VjY2Vzcy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWluZm8tdGV4dDogIzMxNzA4ZiAhZGVmYXVsdDtcclxuJHN0YXRlLWluZm8tYmc6ICNkOWVkZjcgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1pbmZvLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1pbmZvLWJnLCA3JSkgIWRlZmF1bHQ7XHJcblxyXG4kc3RhdGUtd2FybmluZy10ZXh0OiAjOGE2ZDNiICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1iZzogI2ZjZjhlMyAhZGVmYXVsdDtcclxuJG1hcmstYmc6ICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtd2FybmluZy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWRhbmdlci10ZXh0OiAjYTk0NDQyICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJnOiAjZjJkZWRlICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbi8vKiAgUG9wb3ZlciAgKi9cclxuJHBvcG92ZXItYmc6ICNlYmVmZjEgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuJGJyYW5kLXByaW1hcnk6IGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyOiAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhbmVsLWJnOiAjZmZmICFkZWZhdWx0O1xyXG4kcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnOiAjZjVmNWY1ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMDAwICFkZWZhdWx0O1xyXG4kZ3JheS1kYXJrZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXHJcbiRncmF5LWRhcms6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzM1xyXG4kZ3JheTogbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcclxuJGdyYXktbGlnaHQ6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XHJcbiRncmF5LWxpZ2h0ZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXHJcbiRncmF5LXNlbWktbGlnaHRlcjogJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40Mjg1NzE0MjkgIWRlZmF1bHQ7IC8vIDIwLzE0XHJcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXHJcbiRsaW5lLWhlaWdodC1jb21wdXRlZDogZmxvb3IoKCRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlKSkgIWRlZmF1bHQ7IC8vIH4yMHB4XHJcblxyXG4kYnJhbmQtcHJpbWFyeTogZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XHJcbiRicmFuZC1zdWNjZXNzOiAjNWNiODVjICFkZWZhdWx0O1xyXG4kYnJhbmQtaW5mbzogIzViYzBkZSAhZGVmYXVsdDtcclxuJGJyYW5kLXdhcm5pbmc6ICNmMGFkNGUgIWRlZmF1bHQ7XHJcbiRicmFuZC1kYW5nZXI6ICNkOTUzNGYgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcbiRzcGFjZXIteTogMSBlbSAhZGVmYXVsdDsiLCJAaW1wb3J0IFwiaGVscGVyc1wiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiogICAgICAgICAgICAgTE9HSU4gICAgICAgICAgICAgKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTMwMDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgLnBhZ2UtZm9vdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICBjb2xvcjogJHRleHQtbXV0ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWxvZ2luLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxufVxyXG5cclxuLndpZGdldC1sb2dpbi1sb2dvIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG5cclxuICAuZmEtY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLndpZGdldC1sb2dpbiB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgPmhlYWRlciB7XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIGg2IHtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW4taW5mbyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLW1pbmk7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmLmFiYy1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LXNlbWktbGlnaHRlcjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/components/register/registration.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/login/components/register/registration.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_cognito_phone_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/cognito-phone.pipe */ "./src/app/login/util/cognito-phone.pipe.ts");
/* harmony import */ var _registration_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration.model */ "./src/app/login/components/register/registration.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, auth, titlecasePipe) {
        this.auth = auth;
        this.titlecasePipe = titlecasePipe;
        this.phoneMask = {
            mask: [
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/
            ]
        };
        this.router = router;
        this.phonePipe = new _util_cognito_phone_pipe__WEBPACK_IMPORTED_MODULE_4__["CognitoPhonePipe"]();
        this.onInit();
    }
    RegisterComponent.prototype.onInit = function () {
        this.registrationUser = new _registration_model__WEBPACK_IMPORTED_MODULE_5__["RegistrationUser"]();
        this.errorMessage = null;
        jQuery(document).ready(function () {
            jQuery("#userName").focus();
        });
    };
    RegisterComponent.prototype.onRegister = function () {
        this.errorMessage = null;
        var transformUser = new _registration_model__WEBPACK_IMPORTED_MODULE_5__["RegistrationUser"]();
        transformUser.username = this.registrationUser.username;
        transformUser.firstname = this.registrationUser.firstname;
        transformUser.name = this.registrationUser.name;
        transformUser.email = this.registrationUser.email;
        transformUser.password = this.registrationUser.password;
        // transformUser.phone_number = this.registrationUser.phone_number;
        // transformUser.awsPhone = this.phonePipe.transform(
        // 	this.registrationUser.phone_number
        // );
        var handler = this;
        jQuery("#frm-register")
            .parsley()
            .validate();
        if (jQuery("#frm-register")
            .parsley()
            .isValid()) {
            // this.auth.amp_signUp(transformUser).subscribe(
            // 	result => {
            // 		let status = this.auth.amp_getLoginState();
            // 		status.signUp(transformUser);
            // 		this.router.navigate(["/login/confirmRegistration"]);
            // 		// this.onSubmitConfirmation(result);
            // 	},
            // 	error => {
            // 		if (!isNil(error.message)) {
            // 			handler.errorMessage = error.message;
            // 		}
            // 		console.log(error);
            // 	}
            // );
        }
    };
    RegisterComponent.prototype.capitalizeNames = function () {
        this.registrationUser.name = this.titlecasePipe.transform(this.registrationUser.name);
        this.registrationUser.firstname = this.titlecasePipe.transform(this.registrationUser.firstname);
    };
    RegisterComponent.prototype.lowercaseEmail = function () {
        this.registrationUser.email = !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.registrationUser.email)
            ? this.registrationUser.email.toLowerCase()
            : "";
        this.registrationUser.confirmEmail = !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.registrationUser.confirmEmail)
            ? this.registrationUser.confirmEmail.toLowerCase()
            : "";
    };
    RegisterComponent.prototype.replaceNil = function (text) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(text)) {
            return "";
        }
        return text;
    };
    RegisterComponent.prototype.onSubmitConfirmation = function (value) { };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-register-cognito",
            template: __webpack_require__(/*! ./registration.template.html */ "./src/app/login/components/register/registration.template.html"),
            styles: [__webpack_require__(/*! ./registration.style.scss */ "./src/app/login/components/register/registration.style.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/login/components/register/registration.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/login/components/register/registration.model.ts ***!
  \*****************************************************************/
/*! exports provided: RegistrationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUser", function() { return RegistrationUser; });
/* harmony import */ var _util_cognito_phone_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/cognito-phone.pipe */ "./src/app/login/util/cognito-phone.pipe.ts");

var RegistrationUser = /** @class */ (function () {
    function RegistrationUser() {
        this.phonePipe = new _util_cognito_phone_pipe__WEBPACK_IMPORTED_MODULE_0__["CognitoPhonePipe"]();
        this.firstname = "";
        this.name = "";
    }
    RegistrationUser.prototype.populate = function (user) {
        if (user) {
            this.username = user.username;
            var attributes = user.attributes;
            this.name = attributes["family_name"];
            this.firstname = attributes["given_name"];
            this.email = attributes["email"];
            this.emailVerified = attributes["email_verified"];
            this.awsPhone = attributes["phone_number"];
            this.phone_number = this.phonePipe.parse(this.awsPhone);
        }
    };
    return RegistrationUser;
}());



/***/ }),

/***/ "./src/app/login/components/register/registration.style.scss":
/*!*******************************************************************!*\
  !*** ./src/app/login/components/register/registration.style.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n\r\n * Typography\r\n * ======================================================================== */\n/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #dee2e6; }\n.login-page .page-footer {\n  margin-bottom: -25px;\n  font-size: 0.9rem;\n  color: #868e96;\n  text-align: center; }\n@media (min-height: 600px) {\n    .login-page .page-footer {\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n.widget-login-container {\n  padding-top: 25%; }\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 500; }\n.widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n.widget-login {\n  padding: 30px; }\n.widget-login > header h1,\n  .widget-login > header h2,\n  .widget-login > header h3,\n  .widget-login > header h4,\n  .widget-login > header h5,\n  .widget-login > header h6 {\n    font-weight: 500;\n    text-align: center; }\n.widget-login-info {\n  font-size: 0.9rem;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n.widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n.login-form .form-control {\n  font-size: 0.9rem;\n  background-color: #eeeeee; }\n.login-form .form-control:focus {\n    background-color: #dee2e6; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXGFwcFxcbG9naW5cXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3RyYXRpb24uc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTs7OzhFQUc4RTtBQ2Q5RSxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQztFQUNFLDBCRGdDZ0IsRUMvQmpCO0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsa0JEV3FCO0VDVnJCLGVENkJnQjtFQzVCaEIsbUJBQWtCLEVBT25CO0FBTEM7SUFORjtNQU9JLFVBQVM7TUFDVCxRQUFPO01BQ1AsU0FBUSxFQUVYLEVBQUE7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsaUJEK0NzQixFQ3pDdkI7QUFWRDtJQU9JLGdCQUFlO0lBQ2YsZUFBYyxFQUNmO0FBR0g7RUFDRSxjQUFhLEVBY2Q7QUFmRDs7Ozs7O0lBV00saUJENEJrQjtJQzNCbEIsbUJBQWtCLEVBQ25CO0FBSUw7RUFDRSxrQkRsQ3FCO0VDbUNyQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBS25CO0FBVkQ7SUFRSSxtQkFBa0IsRUFDbkI7QUFHSDtFQUVJLGtCRC9DbUI7RUNnRG5CLDBCRGlNcUMsRUM1THRDO0FBUkg7SUFNTSwwQkRuQ1ksRUNvQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdHJhdGlvbi5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2luZyB2YXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZW5hYmxlLXNoYWRvd3M6IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtaW5jbHVkZS1ib251czogZmFsc2UgIWRlZmF1bHQ7XHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1jbGFzcy1wcmVmaXg6IGdseXBoaWNvbiAhZGVmYXVsdDtcclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWZvbnQtYmFzZS1zaXplOiAxNHB4ICFkZWZhdWx0O1xyXG5cclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWZvbnQtcGF0aDogJ34vZm9udHMvZ2x5cGhpY29ucycgIWRlZmF1bHQ7XHJcbiRmYS1mb250LXBhdGg6ICd+L2ZvbnQtYXdlc29tZS9mb250cycgIWRlZmF1bHQ7XHJcblxyXG4vKlxyXG5cclxuICogVHlwb2dyYXBoeVxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuJGZvbnQtc2l6ZS1pbml0aWFsOiAxNHB4OyAvLyByZXNldCBkZWZhdWx0IGJyb3dzZXIgdmFsdWUgZnJvbSAxNnB4IHRvIDEzcHhcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxnOiAxLjI1cmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXNtOiAwLjg3NXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sYXJnZXI6IDEuMXJlbTtcclxuJGZvbnQtc2l6ZS1taW5pOiAwLjlyZW07XHJcbiRmb250LXNpemUtaW5kZXg6IDAuN3JlbTtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiAnb3BlbicsXHJcbnNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnb3BlbicsXHJcbnNhbnMtc2VyaWY7XHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuLy9cclxuXHJcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAjZjVmNWY1ICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6ICNlZWVlZWUgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcclxuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xyXG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XHJcbiRncmF5LTYwMDogIzg2OGU5NiAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiAjNTU1ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICMzNDM0MzQgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogIzI0MjQyNCAhZGVmYXVsdDtcclxuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xyXG4kZ3JheS1saWdodDogI2RkZCAhZGVmYXVsdDtcclxuXHJcblxyXG4kYmx1ZTogIzVkOGZjMiAhZGVmYXVsdDtcclxuJHJlZDogI2RkNTgyNiAhZGVmYXVsdDtcclxuJHllbGxvdzogI2YwYjUxOCAhZGVmYXVsdDtcclxuJGdyZWVuOiAjNjRiZDYzICFkZWZhdWx0O1xyXG4kY3lhbjogIzVkYzRiZiAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1jb2xvcnM6IChwcmltYXJ5OiAkYmx1ZSxcclxuc2Vjb25kYXJ5OiAkZ3JheS02MDAsXHJcbnN1Y2Nlc3M6ICRncmVlbixcclxucHJpbWFyeS1saWdodDogI2RlZTRlZSxcclxuc3VjY2Vzcy1saWdodDogI2VjZmFlYyxcclxuaW5mby1saWdodDogI2YyZmFmYSxcclxud2FybmluZy1saWdodDogI2ZkZjdlNixcclxuZGFuZ2VyLWxpZ2h0OiAjZmZmMmVmLFxyXG5pbmZvOiAkY3lhbixcclxud2FybmluZzogJHllbGxvdyxcclxuZGFuZ2VyOiAkcmVkLFxyXG5kYXJrOiAkZ3JheS04MDAsXHJcbmludmVyc2U6ICRncmF5LTcwMCxcclxuZ3JheTogJGdyYXktMzAwLFxyXG5kZWZhdWx0OiAjZjhmOGY4KTtcclxuXHJcbiRsaW5rLWNvbG9yOiAjMjE4YmMzO1xyXG5cclxuJHRleHQtY29sb3I6ICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtdGhpbjogMzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtc21hbGxlcjogODUlICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kYWRkaXRpb24tYmc6ICNmOGY4ZjggIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1iZzogbGlnaHRncmF5ICFkZWZhdWx0OyAvLyAjZjVmNWY1ICFkZWZhdWx0O1xyXG4kYm9keS1iZy1saWdodDogbGlnaHRlbigkYm9keS1iZywgMyUpO1xyXG5cclxuLy89PSBDb21wb25lbnRzXHJcbi8vXHJcblxyXG4kcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDogMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6IDAuMjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbWFyZ2luLWJhc2UtdmVydGljYWw6IDAuNXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1iYXNlLWhvcml6b250YWw6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbWFyZ2luLWxhcmdlLXZlcnRpY2FsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kbWFyZ2luLWxhcmdlLWhvcml6b250YWw6IDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbWFyZ2luLXNtYWxsLXZlcnRpY2FsOiAwLjI1cmVtICFkZWZhdWx0O1xyXG4kbWFyZ2luLXNtYWxsLWhvcml6b250YWw6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogLjNyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAuMzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbmF2LWxpbmstcGFkZGluZzogMTRweDtcclxuXHJcbi8vPT0gU2lkZWJhclxyXG4vL1xyXG4kc2lkZWJhci1wYWRkaW5nLWhvcml6b250YWw6IDExcHg7XHJcbiRzaWRlYmFyLXdpZHRoLW9wZW46IDIyMHB4O1xyXG4kc2lkZWJhci13aWR0aC1jbG9zZWQ6IDUwcHg7XHJcbiRzaWRlYmFyLXRyYW5zaXRpb24tdGltZTogMC4zcyAhZGVmYXVsdDtcclxuJHNpZGViYXItc2xpbS1zY3JvbGwtd2lkdGg6IDRweDtcclxuJHNpZGViYXItd2lkdGg6ICRzaWRlYmFyLXdpZHRoLW9wZW4rJHNpZGViYXItc2xpbS1zY3JvbGwtd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4kc2lkZWJhci1iZy1jb2xvcjogIzE3NTI5RjtcclxuJHNpZGViYXItY29sb3I6ICR3aGl0ZTtcclxuXHJcbiRzaWRlYmFyLWl0ZW0tYm9yZGVyLWNvbG9yOiAjMmQyZDJkO1xyXG4kc2lkZWJhci1pdGVtLWFjdGl2ZS1jb2xvcjogI2YyYmUzNTtcclxuJHNpZGViYXItaXRlbS1ob3Zlci1iZy1jb2xvcjogIzExMTtcclxuXHJcbiRjaGF0LXNpZGViYXItYmctY29sb3I6ICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGNoYXQtc2lkZWJhci13aWR0aDogMjUwcHgrJHNpZGViYXItc2xpbS1zY3JvbGwtd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAnJztcclxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwO1xyXG4kYnJlYWRjcnVtYi1iZzogdHJhbnNwYXJlbnQ7XHJcblxyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiR3aWRnZXQtYmc6ICNmZmY7XHJcbiR3aWRnZXQtdGl0bGUtY29sb3I6ICM0NDQ7XHJcbiR3aWRnZXQtc2hhZG93OiAwIDAgMTBweCBkYXJrZW4oJGJvZHktYmcsIDUlKTtcclxuXHJcblxyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC40cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMC44cmVtO1xyXG5cclxuJGlucHV0LWhlaWdodC1zbWFsbDogMzBweDtcclxuXHJcbi8vPT0gTmF2YmFyXHJcbi8vXHJcblxyXG4kbmF2YmFyLWhlaWdodDogNTBweCAhZGVmYXVsdDtcclxuJG5hdmJhci1wYWRkaW5nLXk6IDAgIWRlZmF1bHQ7XHJcbiRuYXZiYXItcGFkZGluZy14OiAwICFkZWZhdWx0O1xyXG5cclxuJG5hdmJhci1kYXNoYm9hcmQtYmc6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtY29sb3I6ICM3NzcgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWJvcmRlcjogZGFya2VuKCRuYXZiYXItZGFzaGJvYXJkLWJnLCA2LjUlKSAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBsaW5rc1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWNvbG9yOiAjNjY2ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIGxpbmtzXHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstaG92ZXItY29sb3I6ICMzMzMgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstaG92ZXItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWFjdGl2ZS1jb2xvcjogIzU1NSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1hY3RpdmUtYmc6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1iZywgNi41JSkgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstZGlzYWJsZWQtY29sb3I6ICNjY2MgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIGJyYW5kIGxhYmVsXHJcbiRuYXZiYXItZGFzaGJvYXJkLWJyYW5kLWNvbG9yOiAkbmF2YmFyLWRhc2hib2FyZC1saW5rLWNvbG9yICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1icmFuZC1ob3Zlci1jb2xvcjogZGFya2VuKCRuYXZiYXItZGFzaGJvYXJkLWJyYW5kLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1icmFuZC1ob3Zlci1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgdG9nZ2xlXHJcbiRuYXZiYXItZGFzaGJvYXJkLXRvZ2dsZS1ob3Zlci1iZzogI2RkZCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtdG9nZ2xlLWljb24tYmFyLWJnOiAjODg4ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC10b2dnbGUtYm9yZGVyLWNvbG9yOiAjZGRkICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIENvbnRlbnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGNvbnRlbnQtcGFkZGluZzogNDBweDtcclxuJGNvbnRlbnQtcGFkZGluZy10b3A6ICRjb250ZW50LXBhZGRpbmcrJG5hdmJhci1oZWlnaHQgIWRlZmF1bHQ7XHJcblxyXG4vLyBTY3JlZW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRzY3JlZW4tbGctaGVpZ2h0OiA2NzBweCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy9cclxuJGJ0bi1kZWZhdWx0LWJnOiAkYWRkaXRpb24tYmcgIWRlZmF1bHQ7XHJcbiRidG4tZGVmYXVsdC1ib3JkZXI6IHJnYmEoMCwgMCwgMCwgMC4xNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG5cclxuLy8gV2lkZ2V0c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiR3aWRnZXQtcGFkZGluZy12ZXJ0aWNhbDogMTVweCAhZGVmYXVsdDtcclxuJHdpZGdldC1wYWRkaW5nLWhvcml6b250YWw6IDIwcHggIWRlZmF1bHQ7XHJcbiR3aWRnZXQtYmctY29sb3I6ICR3aGl0ZTtcclxuXHJcbi8vPT0gTmF2c1xyXG4vL1xyXG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYmc6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yOiAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4vLz09IEZvcm1zXHJcbi8vXHJcbiRpbnB1dC1ib3JkZXItZm9jdXM6ICM0ZDkwZmUgIWRlZmF1bHQ7IC8vd2Via2l0IGZvY3VzIGNvbG9yXHJcbiRsZWdlbmQtY29sb3I6IGxpZ2h0ZW4oJHRleHQtY29sb3IsIDE1JSkgIWRlZmF1bHQ7XHJcblxyXG4kcHJlLWJnOiAjZjVmNWY1ICFkZWZhdWx0O1xyXG5cclxuJGN1cnNvci1kaXNhYmxlZDogbm90LWFsbG93ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb3JtIHN0YXRlcyBhbmQgYWxlcnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb2xvcnMgZm9yIGZvcm0gZmVlZGJhY2sgc3RhdGVzIGFuZCwgYnkgZGVmYXVsdCwgYWxlcnRzLlxyXG5cclxuJHN0YXRlLXN1Y2Nlc3MtdGV4dDogIzNjNzYzZCAhZGVmYXVsdDtcclxuJHN0YXRlLXN1Y2Nlc3MtYmc6ICNkZmYwZDggIWRlZmF1bHQ7XHJcbiRzdGF0ZS1zdWNjZXNzLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1zdWNjZXNzLWJnLCA1JSkgIWRlZmF1bHQ7XHJcblxyXG4kc3RhdGUtaW5mby10ZXh0OiAjMzE3MDhmICFkZWZhdWx0O1xyXG4kc3RhdGUtaW5mby1iZzogI2Q5ZWRmNyAhZGVmYXVsdDtcclxuJHN0YXRlLWluZm8tYm9yZGVyOiBkYXJrZW4oJHN0YXRlLWluZm8tYmcsIDclKSAhZGVmYXVsdDtcclxuXHJcbiRzdGF0ZS13YXJuaW5nLXRleHQ6ICM4YTZkM2IgIWRlZmF1bHQ7XHJcbiRzdGF0ZS13YXJuaW5nLWJnOiAjZmNmOGUzICFkZWZhdWx0O1xyXG4kbWFyay1iZzogJHN0YXRlLXdhcm5pbmctYmcgIWRlZmF1bHQ7XHJcbiRzdGF0ZS13YXJuaW5nLWJvcmRlcjogZGFya2VuKCRzdGF0ZS13YXJuaW5nLWJnLCA1JSkgIWRlZmF1bHQ7XHJcblxyXG4kc3RhdGUtZGFuZ2VyLXRleHQ6ICNhOTQ0NDIgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1kYW5nZXItYmc6ICNmMmRlZGUgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1kYW5nZXItYm9yZGVyOiBkYXJrZW4oJHN0YXRlLWRhbmdlci1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuLy8qICBQb3BvdmVyICAqL1xyXG4kcG9wb3Zlci1iZzogI2ViZWZmMSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtcHJpbWFyeTogZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXI6ICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFuZWwtYmc6ICNmZmYgIWRlZmF1bHQ7XHJcbiRwYW5lbC1kZWZhdWx0LWhlYWRpbmctYmc6ICNmNWY1ZjUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlcjogI2RkZCAhZGVmYXVsdDtcclxuJGlucHV0LWJnLWRpc2FibGVkOiAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRncmF5LWJhc2U6ICMwMDAgIWRlZmF1bHQ7XHJcbiRncmF5LWRhcmtlcjogbGlnaHRlbigkZ3JheS1iYXNlLCAxMy41JSkgIWRlZmF1bHQ7IC8vICMyMjJcclxuJGdyYXktZGFyazogbGlnaHRlbigkZ3JheS1iYXNlLCAyMCUpICFkZWZhdWx0OyAvLyAjMzMzXHJcbiRncmF5OiBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKSAhZGVmYXVsdDsgLy8gIzU1NVxyXG4kZ3JheS1saWdodDogbGlnaHRlbigkZ3JheS1iYXNlLCA0Ni43JSkgIWRlZmF1bHQ7IC8vICM3NzdcclxuJGdyYXktbGlnaHRlcjogbGlnaHRlbigkZ3JheS1iYXNlLCA5My41JSkgIWRlZmF1bHQ7IC8vICNlZWVcclxuJGdyYXktc2VtaS1saWdodGVyOiAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyoqIFVuaXQtbGVzcyBgbGluZS1oZWlnaHRgIGZvciB1c2UgaW4gY29tcG9uZW50cyBsaWtlIGJ1dHRvbnMuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjQyODU3MTQyOSAhZGVmYXVsdDsgLy8gMjAvMTRcclxuLy8qKiBDb21wdXRlZCBcImxpbmUtaGVpZ2h0XCIgKGBmb250LXNpemVgICogYGxpbmUtaGVpZ2h0YCkgZm9yIHVzZSB3aXRoIGBtYXJnaW5gLCBgcGFkZGluZ2AsIGV0Yy5cclxuJGxpbmUtaGVpZ2h0LWNvbXB1dGVkOiBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UpKSAhZGVmYXVsdDsgLy8gfjIwcHhcclxuXHJcbiRicmFuZC1wcmltYXJ5OiBkYXJrZW4oIzQyOGJjYSwgNi41JSkgIWRlZmF1bHQ7IC8vICMzMzdhYjdcclxuJGJyYW5kLXN1Y2Nlc3M6ICM1Y2I4NWMgIWRlZmF1bHQ7XHJcbiRicmFuZC1pbmZvOiAjNWJjMGRlICFkZWZhdWx0O1xyXG4kYnJhbmQtd2FybmluZzogI2YwYWQ0ZSAhZGVmYXVsdDtcclxuJGJyYW5kLWRhbmdlcjogI2Q5NTM0ZiAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWJvcmRlcjogI2RkZCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyOiAjZGRkICFkZWZhdWx0O1xyXG5cclxuJHNwYWNlci15OiAxIGVtICFkZWZhdWx0OyIsIkBpbXBvcnQgXCJoZWxwZXJzXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKiAgICAgICAgICAgICBMT0dJTiAgICAgICAgICAgICAqKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ubG9naW4tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMzAwO1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSAucGFnZS1mb290ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1taW5pO1xyXG4gIGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWluLWhlaWdodDogNjAwcHgpIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW4tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjUlO1xyXG59XHJcblxyXG4ud2lkZ2V0LWxvZ2luLWxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcblxyXG4gIC5mYS1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWxvZ2luIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICA+aGVhZGVyIHtcclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMsXHJcbiAgICBoNCxcclxuICAgIGg1LFxyXG4gICAgaDYge1xyXG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndpZGdldC1sb2dpbi1pbmZvIHtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICBjb2xvcjogIzg4ODtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYuYWJjLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1taW5pO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHRlcjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktc2VtaS1saWdodGVyO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/components/register/registration.template.html":
/*!**********************************************************************!*\
  !*** ./src/app/login/components/register/registration.template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-8 col-md-10 col-xs-12 offset-xl-2 offset-md-1 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          PipelinePro\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <div class=\"widget-body\">\r\n            <!-- <div class=\"form-group\">\r\n              <h2>\r\n                Create account\r\n                <a href=\"../../../../assets/document/RegistrationQuickstart.pdf\" class=\"btn btn-primary float-right guidelink\"\r\n                  target=\"_blank\">Login and Registration Instruction</a>\r\n              </h2>\r\n            </div> -->\r\n            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n              {{ errorMessage }}\r\n            </div>\r\n            <div class=\"signup\">\r\n              <form id=\"frm-register\" class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\"\r\n                data-parsley-priority-enabled=\"false\" novalidate=\"novalidate\" data-parsley-validate data-parsley-focus=\"first\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <p><strong>Note:</strong> Fields highlighted in yellow color are required fields</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <p><strong>User Name Requirements:</strong></p>\r\n                    <ul>\r\n                      <li>At least 8 characters long</li>\r\n                      <li>No spaces allowed</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <p><strong>Password Requirements:</strong></p>\r\n                    <ul>\r\n                      <li>At least 1 special character</li>\r\n                      <li>At least 1 number</li>\r\n                      <li>At least 1 capital letter</li>\r\n                      <li>At least 8 characters long</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n                <!-- ACCOUNT INFO -->\r\n\r\n                <div class=\"form-group\">\r\n                  <b>Account Info</b>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"control-label\" for=\"userName\">User name</label>\r\n                      <input id=\"userName\" tabindex=\"1\" type=\"text\" maxlength=\"50\" class=\"form-control rq\" [(ngModel)]=\"registrationUser.username\"\r\n                        [ngModelOptions]=\"{standalone: true}\" title=\"Enter an user name you prefer to login with. No space allowed.\"\r\n                        aria-label=\"Enter an user name you prefer to login with. No space allowed.\"\r\n                        [attr.data-parsley-minlength]=\"'8'\" required=\"required\" data-parsley-required-message=\"Error: User name is required\"\r\n                        data-parsley-pattern=\"^\\S+$\" data-parsley-pattern-message=\"No spaces allowed.\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"control-label\" for=\"signupPassword\">Password</label>\r\n                      <input id=\"signupPassword\" tabindex=\"2\" type=\"password\" maxlength=\"25\" class=\"form-control rq\"\r\n                        placeholder=\"\" length=\"40\" [(ngModel)]=\"registrationUser.password\" [ngModelOptions]=\"{standalone: true}\"\r\n                        title=\"Password must contain at least 1 uppercase, 1 lowercase and 1 special character\"\r\n                        aria-label=\"Password must contain at least 1 uppercase, 1 lowercase and 1 special character\"\r\n                        data-parsley-minlength=\"8\" data-parsley-errors-container=\".errorspannewpassinput\"\r\n                        data-parsley-uppercase=\"1\" data-parsley-lowercase=\"1\" data-parsley-number=\"1\"\r\n                        data-parsley-special=\"1\" data-parsley-required required=\"required\"\r\n                        data-parsley-required-message=\"Error: Password is required\">\r\n                      <span class=\"errorspannewpassinput\"></span>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-4\">\r\n                      <label class=\"control-label\" for=\"confirmPassword\">Confirm Password</label>\r\n                      <input id=\"confirmPassword\" tabindex=\"3\" type=\"password\" maxlength=\"25\" class=\"form-control rq\"\r\n                        placeholder=\"\" length=\"40\" [(ngModel)]=\"registrationUser.confirmPassword\" [ngModelOptions]=\"{standalone: true}\"\r\n                        title=\"Password must contain at least 1 uppercase, 1 lowercase and 1 special character\"\r\n                        data-parsley-equalto=\"#signupPassword\" required=\"required\" data-parsley-required-message=\"Error: Confirm Your Password\">\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"control-label\" for=\"signupEmail\">Email</label>\r\n                      <input id=\"signupEmail\" tabindex=\"4\" type=\"email\" maxlength=\"50\" class=\"form-control rq\" title=\"Enter a valid email address\"\r\n                        aria-label=\"Enter a valid email address\" [(ngModel)]=\"registrationUser.email\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (change)=\"lowercaseEmail()\" required=\"required\" data-parsley-required-message=\"Error: Email is required\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"control-label\" for=\"confirmEmail\">Confirm Email</label>\r\n                      <input id=\"confirmEmail\" tabindex=\"5\" type=\"email\" maxlength=\"50\" class=\"form-control rq\" title=\"Retype your email address to confirm\"\r\n                        aria-label=\"Retype your email address to confirm\" [(ngModel)]=\"registrationUser.confirmEmail\"\r\n                        [ngModelOptions]=\"{standalone: true}\" (change)=\"lowercaseEmail()\" data-parsley-equalto=\"#signupEmail\"\r\n                        required=\"required\" data-parsley-required-message=\"Error: Confirm Your Email\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- PERSONAL INFO -->\r\n\r\n                <div class=\"form-group\">\r\n                  <b>Personal Info</b>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"control-label\" for=\"firstname\">First name</label>\r\n                      <input id=\"firstname\" tabindex=\"7\" type=\"text\" maxlength=\"50\" class=\"form-control rq\" [(ngModel)]=\"registrationUser.firstname\"\r\n                        [ngModelOptions]=\"{standalone: true}\" title=\"Enter your First name\" aria-label=\"Enter your First name\"\r\n                        required=\"required\" data-parsley-required-message=\"Error:First name is required\" (change)=\"capitalizeNames()\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"control-label\" for=\"lastName\">Last name</label>\r\n                      <input id=\"lastName\" tabindex=\"9\" type=\"text\" maxlength=\"50\" class=\"form-control rq\" [(ngModel)]=\"registrationUser.name\"\r\n                        title=\"Enter your Last name\" aria-label=\"Enter your Last name\" [ngModelOptions]=\"{standalone: true}\"\r\n                        required=\"required\" data-parsley-required-message=\"Error: Last name is required\" (change)=\"capitalizeNames()\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                      <label for=\"phone-num\" class=\"form-control-label\">\r\n                        Phone Number\r\n                      </label>\r\n                      <div role=\"alert\" class=\"\">\r\n                        <input type=\"text\" tabindex=\"11\" id=\"phone-num\" placeholder=\"\" title=\"Phone Number\" [(ngModel)]=\"registrationUser.phone_number\"\r\n                          [ngModelOptions]=\"{standalone: true}\" title=\"Enter your Daytime Phone Number\" aria-label=\"Enter your Daytime Phone Number\"\r\n                          [textMask]=\"phoneMask\" class=\"form-control rq\" required=\"required\"\r\n                          data-parsley-required-message=\"Error: Phone Number is required\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n                <!-- buttons -->\r\n                <div class=\"form-group\">\r\n                  <button (click)=\"onRegister()\" tabindex=\"20\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                    Create your account\r\n                  </button>\r\n                </div>\r\n                <hr>\r\n                <p>Already have an account? <a tabindex=\"21\" [routerLink]=\"['/login']\"> <i class=\"fa fa-fw fa-lock\"></i>Login</a></p>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./src/app/login/components/resend/resendCode.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/login/components/resend/resendCode.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResendCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendCodeComponent", function() { return ResendCodeComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResendCodeComponent = /** @class */ (function () {
    function ResendCodeComponent(router, auth, storage) {
        this.router = router;
        this.auth = auth;
        this.storage = storage;
    }
    ResendCodeComponent.prototype.resendCode = function () {
        jQuery("#frm-resend")
            .parsley()
            .validate();
        if (jQuery("#frm-resend")
            .parsley()
            .isValid()) {
            this.confirmName = this.storage.retrieve("LOGGEDUSERID");
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.confirmName)) {
                // this.auth.amp_getAuthenticatedUser().subscribe(awsUser => {
                // 	let saveEmail = awsUser.attributes["email"];
                // 	if (awsUser.attributes["email_verified"] === false) {
                // 		//                    this.auth.updateUserEmail(awsUser, 'dev@null.xyz').subscribe(result => {
                // 		this.auth
                // 			.amp_updateUserEmail(awsUser, saveEmail)
                // 			.subscribe(result => {
                // 				console.log("updated");
                // 			});
                // 		//                    });
                // 	} else {
                // 		this.errorMessage = "User is already confirmed.";
                // 	}
                // });
            }
            else {
                // this.auth.amp_resendVerificationCode(this.username).subscribe(
                // 	result => {
                // 		this.router.navigate(["/login/confirmRegistration"]);
                // 	},
                // 	error => {
                // 		console.log(error);
                // 		if (!isNil(error.message)) {
                // 			this.errorMessage = error.message;
                // 		}
                // 	}
                // );
            }
        }
    };
    ResendCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "awscognito-angular2-app",
            template: __webpack_require__(/*! ./resendCode.html */ "./src/app/login/components/resend/resendCode.html"),
            styles: [__webpack_require__(/*! ./resendCode.style.scss */ "./src/app/login/components/resend/resendCode.style.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], ResendCodeComponent);
    return ResendCodeComponent;
}());



/***/ }),

/***/ "./src/app/login/components/resend/resendCode.html":
/*!*********************************************************!*\
  !*** ./src/app/login/components/resend/resendCode.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        <h1 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          PipelinePro\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h1>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <div class=\"widget-body\">\r\n            <form id=\"frm-resend\" class=\"form-resend\" method=\"POST\" action=\"#\" role=\"form\" data-parsley-priority-enabled=\"false\" novalidate=\"novalidate\"\r\n            data-parsley-validate data-parsley-focus=\"first\">\r\n              <div class=\"form-group\">\r\n                <h2>Resend Code</h2>\r\n              </div>\r\n              <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n                {{ errorMessage }}\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"signupEmail\">Username</label>\r\n                <input id=\"signupEmail\" type=\"text\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"username\"\r\n                  [ngModelOptions]=\"{standalone: true}\"\r\n                  >\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button (click)=\"resendCode()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                  Resend Code\r\n                </button>\r\n              </div>\r\n              <hr>\r\n              <div class=\"row mt25\">\r\n                <div class=\"col-lg-6 col-xs-6\">\r\n                  <a [routerLink]=\"['/login/register']\"> <i class=\"fa fa-fw fa-sign-in\"></i> Register</a>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-6\">\r\n                  <a [routerLink]=\"['/login']\"> <i class=\"fa fa-fw fa-user\"></i> Login</a>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/components/resend/resendCode.style.scss":
/*!***************************************************************!*\
  !*** ./src/app/login/components/resend/resendCode.style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n\r\n * Typography\r\n * ======================================================================== */\n/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #dee2e6; }\n.login-page .page-footer {\n  margin-bottom: -25px;\n  font-size: 0.9rem;\n  color: #868e96;\n  text-align: center; }\n@media (min-height: 600px) {\n    .login-page .page-footer {\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n.widget-login-container {\n  padding-top: 25%; }\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 500; }\n.widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n.widget-login {\n  padding: 30px; }\n.widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 500;\n    text-align: center; }\n.widget-login-info {\n  font-size: 0.9rem;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n.widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n.login-form .form-control {\n  font-size: 0.9rem;\n  border: none;\n  background-color: #eeeeee; }\n.login-form .form-control:focus {\n    background-color: #dee2e6; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vY29tcG9uZW50cy9yZXNlbmQvQzpcXFVzZXJzXFxhc2FwYVxcRG9jdW1lbnRzXFxDYmFzc1xcY2Jhc3JlcG9cXGNiYXMtdWkvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2NvbXBvbmVudHMvcmVzZW5kL0M6XFxVc2Vyc1xcYXNhcGFcXERvY3VtZW50c1xcQ2Jhc3NcXGNiYXNyZXBvXFxjYmFzLXVpL3NyY1xcYXBwXFxsb2dpblxcY29tcG9uZW50c1xccmVzZW5kXFxyZXNlbmRDb2RlLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7Ozs4RUFHOEU7QUNkOUUscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7RUFDRSwwQkRnQ2dCLEVDL0JqQjtBQUVEO0VBQ0UscUJBQW9CO0VBQ3BCLGtCRFdxQjtFQ1ZyQixlRDZCZ0I7RUM1QmhCLG1CQUFrQixFQU1uQjtBQUxDO0lBTEY7TUFNSSxVQUFTO01BQ1QsUUFBTztNQUNQLFNBQVEsRUFFWCxFQUFBO0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGlCRGdEc0IsRUMzQ3ZCO0FBVEQ7SUFNSSxnQkFBZTtJQUNmLGVBQWMsRUFDZjtBQUdIO0VBQ0UsY0FBYSxFQVFkO0FBVEQ7SUFLTSxpQkRvQ2tCO0lDbkNsQixtQkFBa0IsRUFDbkI7QUFJTDtFQUNFLGtCRDFCcUI7RUMyQnJCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFLbkI7QUFWRDtJQVFJLG1CQUFrQixFQUNuQjtBQUdIO0VBRUksa0JEdkNtQjtFQ3dDbkIsYUFBWTtFQUNaLDBCRHdNcUMsRUNwTXRDO0FBUkg7SUFNTSwwQkQzQlksRUM0QmIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9jb21wb25lbnRzL3Jlc2VuZC9yZXNlbmRDb2RlLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW5nIHZhcmlhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRlbmFibGUtc2hhZG93czogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1pbmNsdWRlLWJvbnVzOiBmYWxzZSAhZGVmYXVsdDtcclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWNsYXNzLXByZWZpeDogZ2x5cGhpY29uICFkZWZhdWx0O1xyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtZm9udC1iYXNlLXNpemU6IDE0cHggIWRlZmF1bHQ7XHJcblxyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtZm9udC1wYXRoOiAnfi9mb250cy9nbHlwaGljb25zJyAhZGVmYXVsdDtcclxuJGZhLWZvbnQtcGF0aDogJ34vZm9udC1hd2Vzb21lL2ZvbnRzJyAhZGVmYXVsdDtcclxuXHJcbi8qXHJcblxyXG4gKiBUeXBvZ3JhcGh5XHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4kZm9udC1zaXplLWluaXRpYWw6IDE0cHg7IC8vIHJlc2V0IGRlZmF1bHQgYnJvd3NlciB2YWx1ZSBmcm9tIDE2cHggdG8gMTNweFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGc6IDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtc206IDAuODc1cmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxhcmdlcjogMS4xcmVtO1xyXG4kZm9udC1zaXplLW1pbmk6IDAuOXJlbTtcclxuJGZvbnQtc2l6ZS1pbmRleDogMC43cmVtO1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6ICdvcGVuJyxcclxuc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdvcGVuJyxcclxuc2Fucy1zZXJpZjtcclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG4vL1xyXG5cclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNmNWY1ZjUgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogI2VlZWVlZSAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjODY4ZTk2ICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICM1NTUgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzM0MzQzNCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XHJcbiRncmF5LWxpZ2h0OiAjZGRkICFkZWZhdWx0O1xyXG5cclxuXHJcbiRibHVlOiAjNWQ4ZmMyICFkZWZhdWx0O1xyXG4kcmVkOiAjZGQ1ODI2ICFkZWZhdWx0O1xyXG4keWVsbG93OiAjZjBiNTE4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICM2NGJkNjMgIWRlZmF1bHQ7XHJcbiRjeWFuOiAjNWRjNGJmICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKHByaW1hcnk6ICRibHVlLFxyXG5zZWNvbmRhcnk6ICRncmF5LTYwMCxcclxuc3VjY2VzczogJGdyZWVuLFxyXG5wcmltYXJ5LWxpZ2h0OiAjZGVlNGVlLFxyXG5zdWNjZXNzLWxpZ2h0OiAjZWNmYWVjLFxyXG5pbmZvLWxpZ2h0OiAjZjJmYWZhLFxyXG53YXJuaW5nLWxpZ2h0OiAjZmRmN2U2LFxyXG5kYW5nZXItbGlnaHQ6ICNmZmYyZWYsXHJcbmluZm86ICRjeWFuLFxyXG53YXJuaW5nOiAkeWVsbG93LFxyXG5kYW5nZXI6ICRyZWQsXHJcbmRhcms6ICRncmF5LTgwMCxcclxuaW52ZXJzZTogJGdyYXktNzAwLFxyXG5ncmF5OiAkZ3JheS0zMDAsXHJcbmRlZmF1bHQ6ICNmOGY4ZjgpO1xyXG5cclxuJGxpbmstY29sb3I6ICMyMThiYzM7XHJcblxyXG4kdGV4dC1jb2xvcjogJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC10aGluOiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtc2l6ZS1zbWFsbGVyOiA4NSUgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRhZGRpdGlvbi1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWJnOiBsaWdodGdyYXkgIWRlZmF1bHQ7IC8vICNmNWY1ZjUgIWRlZmF1bHQ7XHJcbiRib2R5LWJnLWxpZ2h0OiBsaWdodGVuKCRib2R5LWJnLCAzJSk7XHJcblxyXG4vLz09IENvbXBvbmVudHNcclxuLy9cclxuXHJcbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6IDAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6IDEuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFkZGluZy1zbWFsbC12ZXJ0aWNhbDogMC4yNXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtYXJnaW4tYmFzZS12ZXJ0aWNhbDogMC41cmVtICFkZWZhdWx0O1xyXG4kbWFyZ2luLWJhc2UtaG9yaXpvbnRhbDogMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtYXJnaW4tbGFyZ2UtdmVydGljYWw6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tbGFyZ2UtaG9yaXpvbnRhbDogMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtYXJnaW4tc21hbGwtdmVydGljYWw6IDAuMjVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tc21hbGwtaG9yaXpvbnRhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAuM3JlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IC4zNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRuYXYtbGluay1wYWRkaW5nOiAxNHB4O1xyXG5cclxuLy89PSBTaWRlYmFyXHJcbi8vXHJcbiRzaWRlYmFyLXBhZGRpbmctaG9yaXpvbnRhbDogMTFweDtcclxuJHNpZGViYXItd2lkdGgtb3BlbjogMjIwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWNsb3NlZDogNTBweDtcclxuJHNpZGViYXItdHJhbnNpdGlvbi10aW1lOiAwLjNzICFkZWZhdWx0O1xyXG4kc2lkZWJhci1zbGltLXNjcm9sbC13aWR0aDogNHB4O1xyXG4kc2lkZWJhci13aWR0aDogJHNpZGViYXItd2lkdGgtb3Blbiskc2lkZWJhci1zbGltLXNjcm9sbC13aWR0aCAhZGVmYXVsdDtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiAjMTc1MjlGO1xyXG4kc2lkZWJhci1jb2xvcjogJHdoaXRlO1xyXG5cclxuJHNpZGViYXItaXRlbS1ib3JkZXItY29sb3I6ICMyZDJkMmQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWNvbG9yOiAjZjJiZTM1O1xyXG4kc2lkZWJhci1pdGVtLWhvdmVyLWJnLWNvbG9yOiAjMTExO1xyXG5cclxuJGNoYXQtc2lkZWJhci1iZy1jb2xvcjogJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kY2hhdC1zaWRlYmFyLXdpZHRoOiAyNTBweCskc2lkZWJhci1zbGltLXNjcm9sbC13aWR0aCAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWRpdmlkZXI6ICcnO1xyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDA7XHJcbiRicmVhZGNydW1iLWJnOiB0cmFuc3BhcmVudDtcclxuXHJcbiRiYWRnZS1mb250LXdlaWdodDogNjAwO1xyXG5cclxuJHdpZGdldC1iZzogI2ZmZjtcclxuJHdpZGdldC10aXRsZS1jb2xvcjogIzQ0NDtcclxuJHdpZGdldC1zaGFkb3c6IDAgMCAxMHB4IGRhcmtlbigkYm9keS1iZywgNSUpO1xyXG5cclxuXHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjRyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAwLjhyZW07XHJcblxyXG4kaW5wdXQtaGVpZ2h0LXNtYWxsOiAzMHB4O1xyXG5cclxuLy89PSBOYXZiYXJcclxuLy9cclxuXHJcbiRuYXZiYXItaGVpZ2h0OiA1MHB4ICFkZWZhdWx0O1xyXG4kbmF2YmFyLXBhZGRpbmcteTogMCAhZGVmYXVsdDtcclxuJG5hdmJhci1wYWRkaW5nLXg6IDAgIWRlZmF1bHQ7XHJcblxyXG4kbmF2YmFyLWRhc2hib2FyZC1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1jb2xvcjogIzc3NyAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYm9yZGVyOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYmcsIDYuNSUpICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIGxpbmtzXHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstY29sb3I6ICM2NjYgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgbGlua3NcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1ob3Zlci1jb2xvcjogIzMzMyAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1ob3Zlci1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstYWN0aXZlLWNvbG9yOiAjNTU1ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWFjdGl2ZS1iZzogZGFya2VuKCRuYXZiYXItZGFzaGJvYXJkLWJnLCA2LjUlKSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1kaXNhYmxlZC1jb2xvcjogI2NjYyAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgYnJhbmQgbGFiZWxcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtY29sb3I6ICRuYXZiYXItZGFzaGJvYXJkLWxpbmstY29sb3IgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWJyYW5kLWhvdmVyLWNvbG9yOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtY29sb3IsIDEwJSkgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWJyYW5kLWhvdmVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciB0b2dnbGVcclxuJG5hdmJhci1kYXNoYm9hcmQtdG9nZ2xlLWhvdmVyLWJnOiAjZGRkICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC10b2dnbGUtaWNvbi1iYXItYmc6ICM4ODggIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLXRvZ2dsZS1ib3JkZXItY29sb3I6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQ29udGVudFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kY29udGVudC1wYWRkaW5nOiA0MHB4O1xyXG4kY29udGVudC1wYWRkaW5nLXRvcDogJGNvbnRlbnQtcGFkZGluZyskbmF2YmFyLWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbi8vIFNjcmVlbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJHNjcmVlbi1sZy1oZWlnaHQ6IDY3MHB4ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vL1xyXG4kYnRuLWRlZmF1bHQtYmc6ICRhZGRpdGlvbi1iZyAhZGVmYXVsdDtcclxuJGJ0bi1kZWZhdWx0LWJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjE1KSAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJHRleHQtY29sb3I7XHJcblxyXG4vLyBXaWRnZXRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHdpZGdldC1wYWRkaW5nLXZlcnRpY2FsOiAxNXB4ICFkZWZhdWx0O1xyXG4kd2lkZ2V0LXBhZGRpbmctaG9yaXpvbnRhbDogMjBweCAhZGVmYXVsdDtcclxuJHdpZGdldC1iZy1jb2xvcjogJHdoaXRlO1xyXG5cclxuLy89PSBOYXZzXHJcbi8vXHJcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICRncmF5LTcwMCAhZGVmYXVsdDtcclxuXHJcbi8vPT0gRm9ybXNcclxuLy9cclxuJGlucHV0LWJvcmRlci1mb2N1czogIzRkOTBmZSAhZGVmYXVsdDsgLy93ZWJraXQgZm9jdXMgY29sb3JcclxuJGxlZ2VuZC1jb2xvcjogbGlnaHRlbigkdGV4dC1jb2xvciwgMTUlKSAhZGVmYXVsdDtcclxuXHJcbiRwcmUtYmc6ICNmNWY1ZjUgIWRlZmF1bHQ7XHJcblxyXG4kY3Vyc29yLWRpc2FibGVkOiBub3QtYWxsb3dlZCAhZGVmYXVsdDtcclxuXHJcbi8vIEZvcm0gc3RhdGVzIGFuZCBhbGVydHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbG9ycyBmb3IgZm9ybSBmZWVkYmFjayBzdGF0ZXMgYW5kLCBieSBkZWZhdWx0LCBhbGVydHMuXHJcblxyXG4kc3RhdGUtc3VjY2Vzcy10ZXh0OiAjM2M3NjNkICFkZWZhdWx0O1xyXG4kc3RhdGUtc3VjY2Vzcy1iZzogI2RmZjBkOCAhZGVmYXVsdDtcclxuJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyOiBkYXJrZW4oJHN0YXRlLXN1Y2Nlc3MtYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbiRzdGF0ZS1pbmZvLXRleHQ6ICMzMTcwOGYgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1pbmZvLWJnOiAjZDllZGY3ICFkZWZhdWx0O1xyXG4kc3RhdGUtaW5mby1ib3JkZXI6IGRhcmtlbigkc3RhdGUtaW5mby1iZywgNyUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLXdhcm5pbmctdGV4dDogIzhhNmQzYiAhZGVmYXVsdDtcclxuJHN0YXRlLXdhcm5pbmctYmc6ICNmY2Y4ZTMgIWRlZmF1bHQ7XHJcbiRtYXJrLWJnOiAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcclxuJHN0YXRlLXdhcm5pbmctYm9yZGVyOiBkYXJrZW4oJHN0YXRlLXdhcm5pbmctYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbiRzdGF0ZS1kYW5nZXItdGV4dDogI2E5NDQ0MiAhZGVmYXVsdDtcclxuJHN0YXRlLWRhbmdlci1iZzogI2YyZGVkZSAhZGVmYXVsdDtcclxuJHN0YXRlLWRhbmdlci1ib3JkZXI6IGRhcmtlbigkc3RhdGUtZGFuZ2VyLWJnLCA1JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyogIFBvcG92ZXIgICovXHJcbiRwb3BvdmVyLWJnOiAjZWJlZmYxICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogJHBvcG92ZXItYmcgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbiRicmFuZC1wcmltYXJ5OiBkYXJrZW4oIzQyOGJjYSwgNi41JSkgIWRlZmF1bHQ7IC8vICMzMzdhYjdcclxuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlcjogJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwYW5lbC1iZzogI2ZmZiAhZGVmYXVsdDtcclxuJHBhbmVsLWRlZmF1bHQtaGVhZGluZy1iZzogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyOiAjZGRkICFkZWZhdWx0O1xyXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGdyYXktYmFzZTogIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktZGFya2VyOiBsaWdodGVuKCRncmF5LWJhc2UsIDEzLjUlKSAhZGVmYXVsdDsgLy8gIzIyMlxyXG4kZ3JheS1kYXJrOiBsaWdodGVuKCRncmF5LWJhc2UsIDIwJSkgIWRlZmF1bHQ7IC8vICMzMzNcclxuJGdyYXk6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMzMuNSUpICFkZWZhdWx0OyAvLyAjNTU1XHJcbiRncmF5LWxpZ2h0OiBsaWdodGVuKCRncmF5LWJhc2UsIDQ2LjclKSAhZGVmYXVsdDsgLy8gIzc3N1xyXG4kZ3JheS1saWdodGVyOiBsaWdodGVuKCRncmF5LWJhc2UsIDkzLjUlKSAhZGVmYXVsdDsgLy8gI2VlZVxyXG4kZ3JheS1zZW1pLWxpZ2h0ZXI6ICRncmF5LTMwMCAhZGVmYXVsdDtcclxuXHJcbi8vKiogVW5pdC1sZXNzIGBsaW5lLWhlaWdodGAgZm9yIHVzZSBpbiBjb21wb25lbnRzIGxpa2UgYnV0dG9ucy5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNDI4NTcxNDI5ICFkZWZhdWx0OyAvLyAyMC8xNFxyXG4vLyoqIENvbXB1dGVkIFwibGluZS1oZWlnaHRcIiAoYGZvbnQtc2l6ZWAgKiBgbGluZS1oZWlnaHRgKSBmb3IgdXNlIHdpdGggYG1hcmdpbmAsIGBwYWRkaW5nYCwgZXRjLlxyXG4kbGluZS1oZWlnaHQtY29tcHV0ZWQ6IGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSkpICFkZWZhdWx0OyAvLyB+MjBweFxyXG5cclxuJGJyYW5kLXByaW1hcnk6IGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xyXG4kYnJhbmQtc3VjY2VzczogIzVjYjg1YyAhZGVmYXVsdDtcclxuJGJyYW5kLWluZm86ICM1YmMwZGUgIWRlZmF1bHQ7XHJcbiRicmFuZC13YXJuaW5nOiAjZjBhZDRlICFkZWZhdWx0O1xyXG4kYnJhbmQtZGFuZ2VyOiAjZDk1MzRmICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tYm9yZGVyOiAjZGRkICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG4kc3BhY2VyLXk6IDEgZW0gIWRlZmF1bHQ7IiwiQGltcG9ydCBcImhlbHBlcnNcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyoqICAgICAgICAgICAgIExPR0lOICAgICAgICAgICAgICoqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5sb2dpbi1wYWdle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTMwMDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgLnBhZ2UtZm9vdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICBjb2xvcjogJHRleHQtbXV0ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBtZWRpYSAobWluLWhlaWdodDogNjAwcHgpIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW4tY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAyNSU7XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW4tbG9nb3tcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4gIC5mYS1jaXJjbGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW57XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgPiBoZWFkZXJ7XHJcbiAgICBoMSxoMixoMyxoNCxoNSxoNntcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXQtbG9naW4taW5mb3tcclxuICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICBjb2xvcjogIzg4ODtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYuYWJjLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1mb3Jte1xyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWluaTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1zZW1pLWxpZ2h0ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/components/update/profile-update.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/login/components/update/profile-update.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateComponent", function() { return ProfileUpdateComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/login/services/profile.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _util_cognito_phone_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/cognito-phone.pipe */ "./src/app/login/util/cognito-phone.pipe.ts");
/* harmony import */ var _model_profile_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/profile-user.model */ "./src/app/login/model/profile-user.model.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
var ProfileUpdateComponent = /** @class */ (function () {
    function ProfileUpdateComponent(router, authService, profileService, storage, titlecasePipe) {
        this.titlecasePipe = titlecasePipe;
        // popup settings for verification
        this.msg = "You have updated your email address.  You cannot submit an application until your email address has been validated.  Please check your email for confirmation instructions.";
        this.title = "Update Email Address";
        this.user = new _model_profile_user_model__WEBPACK_IMPORTED_MODULE_7__["ProfileUser"]();
        this.emailConfirm = "";
        this.saveEmail = "";
        this.maxDate = new Date();
        this.validDate = "1";
        this.prefixes = [
            { value: "", name: "" },
            { value: "Mr.", name: "Mr." },
            { value: "Mrs.", name: "Mrs." },
            { value: "Ms.", name: "Ms." },
            { value: "Dr.", name: "Dr." }
        ];
        this.ssnMask = {
            mask: [
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/
            ]
        };
        this.dateMask = {
            mask: [
                /[0-1]/,
                /[0-9]/,
                "/",
                /[0-3]/,
                /[0-9]/,
                "/",
                /[1-2]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/
            ]
        };
        this.zipCodeMask = {
            mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
        };
        this.phoneMask = {
            mask: [
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/
            ]
        };
        this.stateNames = [
            { value: "AL", name: "Alabama" },
            { value: "AK", name: "Alaska" },
            { value: "AZ", name: "Arizona" },
            { value: "AR", name: "Arkansas" },
            { value: "CA", name: "California" },
            { value: "CO", name: "Colorado" },
            { value: "CT", name: "Connecticut" },
            { value: "DE", name: "Delaware" },
            { value: "FL", name: "Florida" },
            { value: "GA", name: "Georgia" },
            { value: "HI", name: "Hawaii" },
            { value: "ID", name: "Idaho" },
            { value: "IL", name: "Illinois" },
            { value: "IN", name: "Indiana" },
            { value: "IA", name: "Iowa" },
            { value: "KS", name: "Kansas" },
            { value: "KY", name: "Kentucky" },
            { value: "LA", name: "Louisiana" },
            { value: "ME", name: "Maine" },
            { value: "MD", name: "Maryland" },
            { value: "MA", name: "Massachusetts" },
            { value: "MI", name: "Michigan" },
            { value: "MN", name: "Minnesota" },
            { value: "MS", name: "Mississippi" },
            { value: "MO", name: "Missouri" },
            { value: "MT", name: "Montana" },
            { value: "NE", name: "Nebraska" },
            { value: "NV", name: "Nevada" },
            { value: "NH", name: "New Hampshire" },
            { value: "NJ", name: "New Jersey" },
            { value: "NM", name: "New Mexico" },
            { value: "NY", name: "New York" },
            { value: "NC", name: "North Carolina" },
            { value: "ND", name: "North Dakota" },
            { value: "OH", name: "Ohio" },
            { value: "OK", name: "Oklahoma" },
            { value: "OR", name: "Oregon" },
            { value: "PA", name: "Pennsylvania" },
            { value: "RI", name: "Rhode Island" },
            { value: "SC", name: "South Carolina" },
            { value: "SD", name: "South Dakota" },
            { value: "TN", name: "Tennessee" },
            { value: "TX", name: "Texas" },
            { value: "UT", name: "Utah" },
            { value: "VT", name: "Vermont" },
            { value: "VA", name: "Virginia" },
            { value: "WA", name: "Washington" },
            { value: "WV", name: "West Virginia" },
            { value: "WI", name: "Wisconsin" },
            { value: "WY", name: "Wyoming" },
            { value: "-", name: "Other" }
        ];
        this.emailConfirm = "";
        this.profileService = profileService;
        this.auth = authService;
        this.storage = storage;
        this.router = router;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US");
        this.phonePipe = new _util_cognito_phone_pipe__WEBPACK_IMPORTED_MODULE_6__["CognitoPhonePipe"]();
        this.onInit();
    }
    ProfileUpdateComponent.prototype.onInit = function () {
        var _this = this;
        this.profileid = this.storage.retrieve("LOGGEDUSERID");
        this.profileService.getUserProfileData(this.profileid).subscribe(function (data) {
            if (data && data.length > 0) {
                _this.user.fromDB(data);
                _this.user.DT_PROFILE_ID = _this.profileid;
                _this.emailConfirm = _this.user.DT_EMAIL_ADDRESS;
                _this.saveEmail = _this.user.DT_EMAIL_ADDRESS;
                var significantDigits = _this.user.ssnTrimLeadingZeroes().length;
                if (significantDigits < 9) {
                    _this.user.DT_SSN = "00000" + _this.user.DT_SSN4_NO;
                    _this.ssnMask = {
                        mask: [
                            /[0-9]/,
                            /[0-9]/,
                            /[0-9]/,
                            "-",
                            /[0-9]/,
                            /[0-9]/,
                            "-",
                            _this.user.DT_SSN4_NO[0],
                            _this.user.DT_SSN4_NO[1],
                            _this.user.DT_SSN4_NO[2],
                            _this.user.DT_SSN4_NO[3]
                        ]
                    };
                }
            }
            else {
                _this.showErrorFlag = true;
                _this.errorMessage = "Failed to load profile.";
                console.error("profile returned:", data);
            }
        }, function (error) {
            _this.showErrorFlag = true;
            _this.errorMessage = "Failed to load profile.";
            console.error(error);
        });
        this.showErrorFlag = false;
        this.errorMessage = null;
    };
    // convert email to lowercase
    ProfileUpdateComponent.prototype.lowercaseEmail = function () {
        this.user.DT_EMAIL_ADDRESS = !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.user.DT_EMAIL_ADDRESS)
            ? this.user.DT_EMAIL_ADDRESS.toLowerCase()
            : "";
        this.emailConfirm = !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.emailConfirm)
            ? this.emailConfirm.toLowerCase()
            : "";
    };
    ProfileUpdateComponent.prototype.capitalizeNames = function () {
        this.user.DT_FIRST_NAME = this.titlecasePipe.transform(this.user.DT_FIRST_NAME);
        this.user.DT_MIDDLE_INITIAL = this.titlecasePipe.transform(this.user.DT_MIDDLE_INITIAL);
        this.user.DT_LAST_NAME = this.titlecasePipe.transform(this.user.DT_LAST_NAME);
    };
    ProfileUpdateComponent.prototype.updateProfile = function () {
        this.errorMessage = null;
        jQuery("#frmupdate")
            .parsley()
            .validate();
        if (jQuery("#frmupdate")
            .parsley()
            .isValid()) {
            // this.profileService
            // 	.updateUserProfile(this.profileid, this.user)
            // 	.subscribe(
            // 		data => {
            // 			this.user.DT_MIDDLE_INITIAL = this.preventNil(
            // 				this.user.DT_MIDDLE_INITIAL
            // 			);
            // 			this.user.DT_PREFIX = this.preventNil(this.user.DT_PREFIX);
            // 			this.user.DT_SUFFIX = this.preventNil(this.user.DT_SUFFIX);
            // 			this.auth.amp_getAuthenticatedUser().subscribe(
            // 				awsUser => {
            // 					this.auth.amp_updateUser(this.user, awsUser).subscribe(
            // 						data => {
            // 							if (
            // 								this.saveEmail !== this.user.DT_EMAIL_ADDRESS
            // 							) {
            // 								// pop up warning, let close button initiate navigation.
            // 								jQuery("#app-popup").modal("show");
            // 							} else {
            // 								// navigate immediately.
            // 								this.router.navigate([
            // 									"/app/applicant/search"
            // 								]);
            // 							}
            // 						},
            // 						error => {
            // 							this.errorMessage = "Failed to update profile.";
            // 							this.showErrorFlag = true;
            // 							console.error("update user:", error);
            // 						}
            // 					);
            // 				},
            // 				error => {
            // 					this.errorMessage = "Failed to update profile.";
            // 					this.showErrorFlag = true;
            // 					console.error("getAuthenticatedUser:", error);
            // 				}
            // 			);
            // 		},
            // 		error => {
            // 			this.errorMessage = "Failed to update profile.";
            // 			this.showErrorFlag = true;
            // 			console.log("update profile:", error);
            // 		}
            // 	);
        }
    };
    ProfileUpdateComponent.prototype.onClose = function () {
        // jQuery("#app-popup").modal("hide");
        // let status = this.auth.amp_getLoginState();
        // status.emailUpdated(this.user.DT_PROFILE_ID);
        // this.router.navigate(["/login/confirmRegistration"]);
    };
    ProfileUpdateComponent.prototype.preventNil = function (text) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(text)) {
            return "";
        }
        return text;
    };
    ProfileUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-profile-update",
            template: __webpack_require__(/*! ./profile-update.template.html */ "./src/app/login/components/update/profile-update.template.html"),
            styles: [__webpack_require__(/*! ./profile-update.style.scss */ "./src/app/login/components/update/profile-update.style.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]])
    ], ProfileUpdateComponent);
    return ProfileUpdateComponent;
}());



/***/ }),

/***/ "./src/app/login/components/update/profile-update.style.scss":
/*!*******************************************************************!*\
  !*** ./src/app/login/components/update/profile-update.style.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2NvbXBvbmVudHMvdXBkYXRlL3Byb2ZpbGUtdXBkYXRlLnN0eWxlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/login/components/update/profile-update.template.html":
/*!**********************************************************************!*\
  !*** ./src/app/login/components/update/profile-update.template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"\">\r\n        <a [routerLink]='[\"/app/applicant/search\"]' id=\"dly-ops\">View Applications</a>\r\n    </li>\r\n    <li class=\" active\">\r\n        <a href=\"javascript:void(0)\">Update Profile</a>\r\n    </li>\r\n</ol>\r\n<h1 class=\"h4 page-title\">Update Profile</h1>\r\n<div class=\"SearchCriteriaController\" data-ng-controller=\"SearchCriteriaController\">\r\n    <div aria-live=\"assertive\">\r\n        <div role=\"alert\" *ngIf=\"showErrorFlag\" class=\"row\">\r\n            <div class=\"col-lg-offset-1 col-lg-6 col-xs-12\">\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-md-12 col-xs-12\">\r\n                        <alert class=\"warning alert-sm\">\r\n                            <div [innerHTML]=\"errorMessage\"></div>\r\n                        </alert>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Edit widget-->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <section id=\"sec_appln_info\" class=\"widget h-thin-divider\" widget>\r\n                <form #frmupdate=\"ngForm\" id=\"frmupdate\" data-parsley-priority-enabled=\"false\" novalidate=\"novalidate\"\r\n                    data-parsley-validate data-parsley-focus=\"first\">\r\n                    <p><strong>Note:</strong> Fields highlighted in yellow color are required fields</p>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-xs-12\">\r\n                            <fieldset>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-lg-6 col-xs-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"full-name\" class=\"form-control-label\">\r\n                                                Full Name Of Applicant:\r\n                                            </label>\r\n                                            <div role=\"alert\" class=\"\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-2 col-xs-2 pr-0\">\r\n                                                        <select id=\"prev-addr-county1\" class=\"form-control\" tabindex=\"1\"\r\n                                                            [(ngModel)]=\"user.DT_PREFIX\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                            <option *ngFor=\"let pfx of prefixes\" [ngValue]=\"pfx.value\">{{pfx.name}}</option>\r\n                                                        </select>\r\n                                                        <small id=\"prefixHelp\" class=\"form-text text-muted font-italic\">Prefix</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-3 col-xs-4 px-0\">\r\n                                                        <input type=\"text\" id=\"first-name\" placeholder=\"\" aria-label=\"Enter First Name\"\r\n                                                            title=\"First Name\" data-parsley-trigger=\"change\"\r\n                                                            [(ngModel)]=\"user.DT_FIRST_NAME\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                            tabindex=\"2\" length=\"20\" class=\"form-control rq\"\r\n                                                            data-parsley-required required=\"required\" (change)=\"capitalizeNames()\"\r\n                                                            data-parsley-required-message=\"\">\r\n                                                        <small id=\"firstNameHelp\" class=\"form-text text-muted font-italic\">First</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-2 col-xs-4 px-0\">\r\n                                                            <input type=\"text\" id=\"mi\" placeholder=\"\" aria-label=\"Middle Initial\" title=\"Middle Initial\"\r\n                                                                [(ngModel)]=\"user.DT_MIDDLE_INITIAL\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                tabindex=\"3\" length=\"2\" class=\"form-control\"\r\n                                                                (change)=\"capitalizeNames()\">\r\n                                                            <small id=\"miHelp\" class=\"form-text text-muted font-italic\">Middle Initial</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-3 col-xs-4 px-0\">\r\n                                                        <input type=\"text\" id=\"last-name\" placeholder=\"\" aria-label=\"Enter Last Name\"\r\n                                                            title=\"Last Name\" maxlength=\"20\" data-parsley-trigger=\"change\"\r\n                                                            [(ngModel)]=\"user.DT_LAST_NAME\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                            tabindex=\"4\" class=\"form-control rq\" required=\"required\" (change)=\"capitalizeNames()\"\r\n                                                            data-parsley-required data-parsley-required-message=\"\">\r\n                                                        <small id=\"lastNameHelp\" class=\"form-text text-muted font-italic\">Last</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-2 col-xs-1 px-0\">\r\n                                                        <input type=\"text\" id=\"nm_suffix\" placeholder=\"\" aria-label=\"Enter Suffix\"\r\n                                                            title=\"Suffix\" [(ngModel)]=\"user.DT_SUFFIX\"\r\n                                                            [ngModelOptions]=\"{standalone: true}\" tabindex=\"5\" class=\"form-control\">\r\n                                                        <small id=\"suffixHelp\" class=\"form-text text-muted font-italic\">Suffix</small>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-lg-2 col-xs-2 d-none\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"birth-date\" class=\"form-control-label text-md-right\">\r\n                                                Date of Birth:\r\n                                            </label>\r\n                                            <div role=\"alert\">\r\n                                                <input type=\"text\" id=\"birth-date\" placeholder=\"\" aria-label=\"Enter Date of Birth \"\r\n                                                    title=\"Birth Date\" [(ngModel)]=\"user.DT_BIRTHDAY\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                    tabindex=\"6\" class=\"form-control rq\" [attr.data-parsley-validdate]=\"validDate\"\r\n                                                    data-parsley-trigger=\"change\" data-parsley-pattern=\"(^\\d{2}/?\\d{2}/?\\d{4}$|^XX/XX/XXXX$)\"\r\n                                                    [attr.data-parsley-maxdate]=\"maxDate\" data-parsley-errors-container=\".errorspanmaxdobdate\"\r\n                                                    [textMask]=\"dateMask\" required=\"required\"\r\n                                                    data-parsley-required-message=\"\" data-parsley-pattern-message=\"\">\r\n                                                <small id=\"dobHelp\" class=\"form-text text-muted font-italic\">MM/DD/YYYY</small>\r\n                                                <span class=\"errorspanmaxdobdate\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-lg-2 col-xs-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"soc-sec\" class=\"form-control-label\">\r\n                                                Social Security Number:\r\n                                            </label>\r\n                                            <div role=\"alert\" class=\"\">\r\n                                                <input type=\"text\" id=\"soc-sec\" placeholder=\"\" aria-label=\"Enter Social Security\"\r\n                                                    title=\"Social Security\" data-parsley-trigger=\"change focusout\"\r\n                                                    readonly\r\n                                                    [value]=\"'***-**-'+ user.DT_SSN4_NO\"\r\n                                                    [textMask]=\"ssnMask\" tabindex=\"7\" class=\"form-control rq\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-lg-2 col-xs-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"phone-num\" class=\"form-control-label\">\r\n                                                Daytime Phone Number:\r\n                                            </label>\r\n                                            <div role=\"alert\" class=\"\">\r\n                                                <input type=\"text\" id=\"phone-num\" placeholder=\"\" aria-label=\"Enter Daytime Phone Number\"\r\n                                                    title=\"Daytime Phone Number\" [(ngModel)]=\"user.DT_PHONE_NUMBER\"\r\n                                                    [ngModelOptions]=\"{standalone: true}\" [textMask]=\"phoneMask\"\r\n                                                    tabindex=\"8\" class=\"form-control rq\" required=\"required\"\r\n                                                    data-parsley-trigger=\"change focusout\" data-parsley-pattern=\"(^\\d{3}-?\\d{3}-?\\d{4}$|^XXX-XX-XXXX$)\"\r\n                                                    data-parsley-required-message=\"\" data-parsley-pattern-message=\"\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Mailing Address -->\r\n                    <!-- <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-xs-12\">\r\n                            <fieldset>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-lg-12 col-xs-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <div role=\"alert\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-5 col-xs-5 form-group\">\r\n                                                        <label for=\"app-mail-addr1\" class=\"form-control-label\">\r\n                                                            Mailing Address:\r\n                                                        </label>\r\n                                                        <input type=\"text\" id=\"app-mail-addr1\" placeholder=\"\" aria-label=\"Enter Street Address\"\r\n                                                            maxlength=\"30\" [(ngModel)]=\"user.DT_MAILING_ADDR1\"\r\n                                                            [ngModelOptions]=\"{standalone: true}\" title=\"Street Address\"\r\n                                                            data-parsley-trigger=\"change focusout\" tabindex=\"9\" class=\"form-control rq\"\r\n                                                            required=\"required\" data-parsley-required-message=\"\">\r\n                                                        <small id=\"h-app-mail-addr1\" class=\"form-text text-muted font-italic\">(Number\r\n                                                            and Street or Rural\r\n                                                            Route)</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-1 col-xs-1 form-group\">\r\n                                                        <label for=\"app-mail-addr-apt\">&nbsp;</label>\r\n                                                        <input type=\"text\" id=\"app-mail-addr-apt\" placeholder=\"\" aria-label=\"Enter Apt\"\r\n                                                            [(ngModel)]=\"user.DT_MAILING_ADDR2\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                            title=\"Apt No/Building\" tabindex=\"10\" class=\"form-control\">\r\n                                                        <small id=\"h-app-mail-addr-apt\" class=\"form-text text-muted font-italic\">(Apt)</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-2 col-xs-2 form-group\">\r\n                                                        <label for=\"app-mail-addr-city\">&nbsp;</label>\r\n                                                        <input type=\"text\" id=\"app-mail-addr-city\" placeholder=\"\" aria-label=\"Enter City or Town\"\r\n                                                            maxlength=\"22\" [(ngModel)]=\"user.DT_MAILING_CITY_TOWN_PO\"\r\n                                                            [ngModelOptions]=\"{standalone: true}\" title=\"City or Town\"\r\n                                                            data-parsley-trigger=\"change focusout\" tabindex=\"11\" class=\"form-control rq\"\r\n                                                            required=\"required\" data-parsley-required-message=\"\">\r\n                                                        <small id=\"h-app-mail-addr-city\" class=\"form-text text-muted font-italic\">(City,\r\n                                                            Town, or Post Office)</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-2 col-xs-2 form-group\">\r\n                                                        <label for=\"app-mail-addr-state\" class=\"form-control-label\">\r\n                                                            State\r\n                                                        </label>\r\n                                                        <select id=\"app-mail-addr-state\" tabindex=\"12\" class=\"form-control rq\"\r\n                                                            [(ngModel)]=\"user.DT_MAILING_STATE\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                            title=\"Enter State\" aria-label=\"Enter State\" required=\"required\"\r\n                                                            data-parsley-required-message=\"Error: State is required\">\r\n                                                            <option *ngFor=\"let state of stateNames\" [ngValue]=\"state.value\">{{state.value}}\r\n                                                                - {{state.name}}</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-1 col-xs-1 form-group\">\r\n                                                        <label for=\"app-mail-addr-zipcode\">&nbsp;</label>\r\n                                                        <input type=\"text\" id=\"app-mail-addr-zipcode\" placeholder=\"\"\r\n                                                            aria-label=\"Enter Zip Code\" [(ngModel)]=\"user.DT_MAILING_ZIP1\"\r\n                                                            [ngModelOptions]=\"{standalone: true}\" title=\"Zip Code\"\r\n                                                            data-parsley-trigger=\"change focusout\" [textMask]=\"zipCodeMask\"\r\n                                                            data-parsley-pattern=\"(^\\d{5}$|^XXXXX$)\" required=\"required\"\r\n                                                            data-parsley-required-message=\"\"\r\n                                                            data-parsley-pattern-message=\"\" tabindex=\"13\" class=\"form-control rq\">\r\n                                                        <small id=\"h-app-mail-addr-zipcode\" class=\"form-text text-muted font-italic\">(Zip\r\n                                                            Code)</small>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-1 col-xs-1 form-group\">\r\n                                                        <label for=\"app-mail-addr-zipOpt\">&nbsp;</label>\r\n                                                        <input type=\"text\" id=\"app-mail-addr-zipOpt\" placeholder=\"\"\r\n                                                            aria-label=\"Zip Optional\" [(ngModel)]=\"user.DT_MAILING_ZIP2\"\r\n                                                            maxlength=\"4\" data-parsley-pattern=\"(^\\d{4}$|^XXXXX$)\"\r\n                                                            data-parsley-pattern-message=\"\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                            title=\"Zip Optional\" tabindex=\"14\" class=\"form-control\">\r\n                                                        <small id=\"h-app-mail-addr-zipOpt\" class=\"form-text text-muted font-italic\">(Optional)</small>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- Property Address -->\r\n                    <!-- <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-xs-12\">\r\n                                <fieldset>\r\n                                    <div class=\"form-group row\">\r\n                                        <div class=\"col-lg-12 col-xs-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <div role=\"alert\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-lg-5 col-xs-5 form-group\">\r\n                                                            <label for=\"app-prop-addr1\" class=\"form-control-label\">\r\n                                                                Property Address:\r\n                                                            </label>\r\n                                                            <input type=\"text\" id=\"app-prop-addr1\" placeholder=\"\" aria-label=\"Enter Street Address\"\r\n                                                                maxlength=\"30\" [(ngModel)]=\"user.DT_MAILING_ADDR1\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\" title=\"Street Address\"\r\n                                                                data-parsley-trigger=\"change focusout\" tabindex=\"15\" class=\"form-control rq\"\r\n                                                                required=\"required\" data-parsley-required-message=\"\">\r\n                                                            <small id=\"h-app-prop-addr1\" class=\"form-text text-muted font-italic\">(Number\r\n                                                                and Street or Rural\r\n                                                                Route)</small>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-xs-1 form-group\">\r\n                                                            <label for=\"app-prop-addr-apt\">&nbsp;</label>\r\n                                                            <input type=\"text\" id=\"app-prop-addr-apt\" placeholder=\"\" aria-label=\"Enter Apt\"\r\n                                                                [(ngModel)]=\"user.DT_MAILING_ADDR2\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                title=\"Apt No/Building\" tabindex=\"16\" class=\"form-control\">\r\n                                                            <small id=\"h-app-prop-addr-apt\" class=\"form-text text-muted font-italic\">(Apt)</small>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-2 col-xs-2 form-group\">\r\n                                                            <label for=\"app-prop-addr-city\">&nbsp;</label>\r\n                                                            <input type=\"text\" id=\"app-prop-addr-city\" placeholder=\"\" aria-label=\"Enter City or Town\"\r\n                                                                maxlength=\"22\" [(ngModel)]=\"user.DT_MAILING_CITY_TOWN_PO\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\" title=\"City or Town\"\r\n                                                                data-parsley-trigger=\"change focusout\" tabindex=\"17\" class=\"form-control rq\"\r\n                                                                required=\"required\" data-parsley-required-message=\"\">\r\n                                                            <small id=\"h-app-prop-addr-city\" class=\"form-text text-muted font-italic\">(City,\r\n                                                                Town, or Post Office)</small>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-2 col-xs-2 form-group\">\r\n                                                            <label for=\"app-prop-addr-state\" class=\"form-control-label\">\r\n                                                                State\r\n                                                            </label>\r\n                                                            <select id=\"app-prop-addr-state\" tabindex=\"18\" class=\"form-control rq\"\r\n                                                                [(ngModel)]=\"user.DT_MAILING_STATE\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                title=\"Enter State\" aria-label=\"Enter State\" required=\"required\"\r\n                                                                data-parsley-required-message=\"Error: State is required\">\r\n                                                                <option *ngFor=\"let state of stateNames\" [ngValue]=\"state.value\">{{state.value}}\r\n                                                                    - {{state.name}}</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-xs-1 form-group\">\r\n                                                            <label for=\"app-prop-addr-zipcode\">&nbsp;</label>\r\n                                                            <input type=\"text\" id=\"app-prop-addr-zipcode\" placeholder=\"\"\r\n                                                                aria-label=\"Enter Zip Code\" [(ngModel)]=\"user.DT_MAILING_ZIP1\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\" title=\"Zip Code\"\r\n                                                                data-parsley-trigger=\"change focusout\" [textMask]=\"zipCodeMask\"\r\n                                                                data-parsley-pattern=\"(^\\d{5}$|^XXXXX$)\" required=\"required\"\r\n                                                                data-parsley-required-message=\"\"\r\n                                                                data-parsley-pattern-message=\"\" tabindex=\"19\" class=\"form-control rq\">\r\n                                                            <small id=\"h-app-prop-addr-zipcode\" class=\"form-text text-muted font-italic\">(Zip\r\n                                                                Code)</small>\r\n                                                        </div>\r\n                                                        <div class=\"col-lg-1 col-xs-1 form-group\">\r\n                                                            <label for=\"app-prop-addr-zipOpt\">&nbsp;</label>\r\n                                                            <input type=\"text\" id=\"app-prop-addr-zipOpt\" placeholder=\"\"\r\n                                                                aria-label=\"Zip Optional\" [(ngModel)]=\"user.DT_MAILING_ZIP2\"\r\n                                                                maxlength=\"4\" data-parsley-pattern=\"(^\\d{4}$|^XXXXX$)\"\r\n                                                                data-parsley-pattern-message=\"\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                title=\"Zip Optional\" tabindex=\"20\" class=\"form-control\">\r\n                                                            <small id=\"h-app-prop-addr-zipOpt\" class=\"form-text text-muted font-italic\">(Optional)</small>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </fieldset>\r\n                            </div>\r\n                        </div> -->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <label class=\"control-label\" for=\"signupEmail\">Email</label>\r\n                                <input id=\"signupEmail\" tabindex=\"15\" type=\"email\" maxlength=\"50\" class=\"form-control rq\"\r\n                                    title=\"Enter a valid email address\" aria-label=\"Enter a valid email address\"\r\n                                    [(ngModel)]=\"user.DT_EMAIL_ADDRESS\" [ngModelOptions]=\"{standalone: true}\" (change)=\"lowercaseEmail()\"\r\n                                    required=\"required\" data-parsley-required-message=\"Error: Email is required\">\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <label class=\"control-label\" for=\"confirmEmail\">Confirm Email</label>\r\n                                <input id=\"confirmEmail\" tabindex=\"16\" type=\"email\" maxlength=\"50\" class=\"form-control rq\"\r\n                                    title=\"Retype your email address to confirm\" aria-label=\"Retype your email address to confirm\"\r\n                                    [(ngModel)]=\"emailConfirm\" [ngModelOptions]=\"{standalone: true}\" (change)=\"lowercaseEmail()\"\r\n                                    data-parsley-equalto=\"#signupEmail\" required=\"required\"\r\n                                    data-parsley-required-message=\"Error: Confirm Your Email\">\r\n                            </div>\r\n                            <div class=\"col-md-2 offset-md-2\">\r\n                                <label for=\"updateSubmit\">&nbsp;</label>\r\n                                <button (click)=\"updateProfile()\" tabindex=\"17\" id=\"updateSubmit\" type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                                    Update your account\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"app-popup\">\r\n\t<div class=\"modal-dialog\" role=\"app-popup\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header modal-title-bar\">\r\n\t\t\t\t<div title=\"title\" class=\"h4 modal-title text-xs-center fw-bold mt\" >{{title}}</div>\r\n\t\t\t</div>\r\n\t\t\t<!--Modal Body-->\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div [innerHTML]=\"msg\"></div>\t\t\r\n\t\t\t</div>\r\n\t\t\t<!--Modal Footer-->\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-gray\" (click)=\"onClose()\" title=\"Close\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: routes, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _authentication_components_access_denied_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication/components/access.denied.component */ "./src/app/authentication/components/access.denied.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/confirm/confirmRegistration.component */ "./src/app/login/components/confirm/confirmRegistration.component.ts");
/* harmony import */ var _components_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forgot/forgotPassword.component */ "./src/app/login/components/forgot/forgotPassword.component.ts");
/* harmony import */ var _components_lg_msgbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/lg-msgbox.component */ "./src/app/login/components/lg-msgbox.component.ts");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login.component */ "./src/app/login/components/login.component.ts");
/* harmony import */ var _components_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/logout.component */ "./src/app/login/components/logout.component.ts");
/* harmony import */ var _components_mfa_mfa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mfa/mfa.component */ "./src/app/login/components/mfa/mfa.component.ts");
/* harmony import */ var _components_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/newpassword/newpassword.component */ "./src/app/login/components/newpassword/newpassword.component.ts");
/* harmony import */ var _components_register_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/registration.component */ "./src/app/login/components/register/registration.component.ts");
/* harmony import */ var _components_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/resend/resendCode.component */ "./src/app/login/components/resend/resendCode.component.ts");
/* harmony import */ var _components_update_profile_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/update/profile-update.component */ "./src/app/login/components/update/profile-update.component.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: "", component: _components_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], pathMatch: "full" },
    { path: "register", component: _components_register_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: "forgotPassword", component: _components_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordStep1Component"] },
    { path: "newPassword", component: _components_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_13__["NewPasswordComponent"] },
    { path: "forgotPassword/:username", component: _components_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassword2Component"] },
    { path: "resendCode", component: _components_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_15__["ResendCodeComponent"] },
    { path: "confirmRegistration", component: _components_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmRegistrationComponent"] }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.routes = routes;
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _components_register_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmRegistrationComponent"],
                _components_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordStep1Component"],
                _components_mfa_mfa_component__WEBPACK_IMPORTED_MODULE_12__["MFAComponent"],
                _components_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_13__["NewPasswordComponent"],
                _components_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_15__["ResendCodeComponent"],
                _authentication_components_access_denied_component__WEBPACK_IMPORTED_MODULE_5__["AccessDeniedComponent"],
                _components_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassword2Component"],
                _components_update_profile_update_component__WEBPACK_IMPORTED_MODULE_16__["ProfileUpdateComponent"],
                _components_lg_msgbox_component__WEBPACK_IMPORTED_MODULE_9__["LoginMessageBox"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["TitleCasePipe"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_17__["LocalStorageService"]],
            entryComponents: [_components_lg_msgbox_component__WEBPACK_IMPORTED_MODULE_9__["LoginMessageBox"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/model/credentials.model.ts":
/*!**************************************************!*\
  !*** ./src/app/login/model/credentials.model.ts ***!
  \**************************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
var Credentials = /** @class */ (function () {
    function Credentials(username, password) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/app/tdl/models/codevalue.model.ts":
/*!***********************************************!*\
  !*** ./src/app/tdl/models/codevalue.model.ts ***!
  \***********************************************/
/*! exports provided: CodeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeValue", function() { return CodeValue; });
var CodeValue = /** @class */ (function () {
    function CodeValue(c, v) {
        this.code = c;
        this.value = v;
    }
    return CodeValue;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map