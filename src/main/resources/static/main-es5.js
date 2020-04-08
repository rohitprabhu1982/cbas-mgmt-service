function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form name=\"frmMain\" id=\"frmMain\">\r\n  <app-new-header *ngIf=\"currentUser\"></app-new-header>\r\n  <!-- <app-sidebar *ngIf=\"currentUser\"></app-sidebar> -->\r\n  <div class=\"main-content\" [ngClass]=\"{'container-fluid': currentUser !== null}\" role=\"main\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <footer>\r\n    <app-footer *ngIf=\"currentUser\"></app-footer>\r\n  </footer>\r\n</form>\r\n\r\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"dialog-child-name\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-child-name\" class=\"modal-title pull-left\">You Have Been Idle!</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body pt-0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 py-2\">\r\n            {{idleState}}</div>\r\n          <div class=\"col-md-6\">\r\n            <button type=\"button\" (click)=\"logout()\" class=\"btn btn-primary\">Logout</button>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <button type=\"button\" (click)=\"stay()\" class=\"btn btn-primary pull-right\">Stay</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAcquisitionsFyTwentyAcquisitionsFyTwentyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div *ngIf=\"saveSuccess\" class=\"alert alert-success\">{{successMessage}}</div>\r\n      <div class=\"card-body\" *ngIf=\"ChangeForm\">\r\n        <h1 class=\"card-title\">Acquisitions FY20</h1>\r\n        <form [formGroup]=\"ChangeForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h2 class=\"card-title\">Pre-Commitment Project Details</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"\" for=\"office\"><b>Office</b></label>\r\n\r\n                <select id=\"office\" class=\"form-control \" placeholder=\"Select an option\"\r\n                  (change)=\"onOfficeChangeEvent($event)\" formControlName=\"office\">\r\n                  <option [value]=\"null\">Select office</option>\r\n                  <option *ngFor=\"let ofc of officeLists\" [ngValue]=\"ofc\">{{ofc}}</option>\r\n\r\n                </select>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"acquisitionType\"><b>Acquisition Type</b></label>\r\n                <select class=\"form-control \" id=\"acquisitionType\" placeholder=\"Select an option\"\r\n                  formControlName=\"acquisitionType\" (change)=\"onAcquisitionTypeChangeEvent($event)\">\r\n                  <option [value]=\"null\">Select type</option>\r\n                  <option *ngFor=\"let atype of acquisitionTypesList\" [ngValue]=\"atype\">\r\n                    {{atype}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"version\"><b>Version</b></label>\r\n                <select class=\"form-control \" id=\"version\" placeholder=\"Select an option\" formControlName=\"version\"\r\n                  (change)=\"onVersionChangeEvent($event)\">\r\n                  <option [value]=\"null\">Select version</option>\r\n                  <option *ngFor=\"let version of versionLists\" [ngValue]=\"version\">\r\n                    {{version}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"ptitle\"><b>Project Title</b></label>\r\n                <select class=\"form-control \" formControlName=\"ptitle\" id=\"ptitle\" placeholder=\"Select an option\"\r\n                  (change)=\"onPtitleChangeEvent($event)\">\r\n                  <option [value]=\"null\">Select title</option>\r\n                  <option title=\"{{ptitle}}\" *ngFor=\"let ptitle of projectTitleLists\" [ngValue]=\"ptitle\">\r\n                    {{ptitle}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getAcquisitionFYTwenty()\">\r\n                  <i class=\"fa fa-chevron-right\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\" *ngIf=\"this.acquisitionModel!=null || this.acquisitionModel!=undefined\">\r\n      <div class=\"card-body\">\r\n        <!-- <div class=\"row\">\r\n          <div class=\"col-12\">\r\n\r\n            <h3 class=\"subheader\" *ngIf=\"this.projectheader==undefined\">\r\n              Tobacco Retailer Inspection Data, Retailer Data\r\n            </h3>\r\n            <h3 class=\"subheader\" *ngIf=\"this.projectheader!=undefined\">\r\n              {{this.projectheader}}: {{this.acquisitionModel.projectTitle}},\r\n              {{this.acquisitionModel.detailedDescription }}\r\n            </h3>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"pt-3 pb-3\" style=\"border-bottom: 0.5px solid black;\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary\">\r\n            TASK INSTRUCTIONS\r\n          </button>\r\n          <button type=\"button\" class=\"pl-2 btn btn-primary float-right\" (click)=\"saveAcquisition()\">\r\n            Save\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"mr-2 btn btn-primary float-right\">\r\n                Load\r\n              </button> -->\r\n        </div>\r\n        <form [formGroup]=\"postComittmentForm\">\r\n          <tabset>\r\n            <!-- <tab class=\"pt-4\" heading=\"Project Summary\"> -->\r\n            <!-- <form [formGroup]=\"postComittmentForm\"> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Project Title</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"projectTitle\"\r\n                    value=\"{{this.acquisitionModel.projectTitle}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Detailed Description</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"detailedDescription\"\r\n                    value=\"{{this.acquisitionModel.detailedDescription}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Funding Amount</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"fundingAmount\"\r\n                    value=\"{{this.acquisitionModel.fundingAmount| currency : 'USD' : 'symbol' : '1.0-0'}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Color Code</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"colorcode\"\r\n                    value=\"{{this.acquisitionModel.colorcode}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Estimated Revised Amount</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"estimatedRevisedAmount\"\r\n                    value=\"{{this.acquisitionModel.estimatedRevisedAmount | currency : 'USD' : 'symbol' : '1.0-0'}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Estimated Total Fiscal Year Amount</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"estTotFiscalYearAmount\"\r\n                    value=\"{{this.acquisitionModel.estTotFiscalYearAmount | currency : 'USD' : 'symbol' : '1.0-0'}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Anticipated Action Type</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"anticipatedActionType\"\r\n                    value=\"{{this.acquisitionModel.anticipatedActionType}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>OAGS Cut-Off Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"oagsCutOffDate\"\r\n                      value=\"{{this.acquisitionModel.oagsCutOffDate}}\">\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>SLA Due Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"slaDueDate\"\r\n                      value=\"{{this.acquisitionModel.slaDueDate}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Estimated Total Project Value</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"estTotProjectValue\"\r\n                    value=\"{{this.acquisitionModel.estTotProjectValue | currency : 'USD' : 'symbol' : '1.0-0'}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Grants - Anticipated Award Type</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"anticipatedAwardType\"\r\n                    value=\"{{this.acquisitionModel.anticipatedAwardType}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Planned PoP Start Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"plannedPOPStartDate\"\r\n                      value=\"{{this.acquisitionModel.plannedPOPStartDate}}\">\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Planned PoP End Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"plannedPOPEndDate\"\r\n                      value=\"{{this.acquisitionModel.plannedPOPEndDate}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>CTP Planned Award Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"ctpPlannedAwardDate\"\r\n                      value=\"{{this.acquisitionModel.ctpPlannedAwardDate}}\">\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>CTP Planned Commitment Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"ctpPlannedCommitmentDate\"\r\n                      value=\"{{this.acquisitionModel.ctpPlannedCommitmentDate}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Number of Days until Acquistions Package Due</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"numOfDaysUntAcqPackDue\"\r\n                    value=\"{{this.acquisitionModel.numOfDaysUntAcqPackDue}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Existing Grant Number</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"existingGrantNumber\"\r\n                    value=\"{{this.acquisitionModel.existingGrantNumber}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Grant Status</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"grantStatus\"\r\n                    value=\"{{this.acquisitionModel.grantStatus}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Zero Dollar Req</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"zeroDollarReq\"\r\n                    value=\"{{this.acquisitionModel.zeroDollarReq}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Collaboration Flag</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"collaborationFlag\"\r\n                    value=\"{{this.acquisitionModel.collaborationFlag}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Priority Level</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"priorityLevel\"\r\n                    value=\"{{this.acquisitionModel.priorityLevel}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Recurring Item</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"recurringItem\"\r\n                    value=\"{{this.acquisitionModel.recurringItem}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>COR Name and Telephone</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"corNameAndTelNum\"\r\n                    value=\"{{this.acquisitionModel.corNameAndTelNum}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>COR Certification Level</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"corCertLevel\"\r\n                    value=\"{{this.acquisitionModel.corCertLevel}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Alternate COR Name and Telephone</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"altCorNameAndTelNum\"\r\n                    value=\"{{this.acquisitionModel.altCorNameAndTelNum}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Alternate COR Certification Level</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"altCorCertLevel\"\r\n                    value=\"{{this.acquisitionModel.altCorCertLevel}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>AAT Liaison Name and Telephone</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"aatLiasNameAndTelNum\"\r\n                    value=\"{{this.acquisitionModel.aatLiasNameAndTelNum}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Training</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"training\"\r\n                    value=\"{{this.acquisitionModel.training}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>NAICS Code/CFDA Number</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"codeCFDANum\"\r\n                    value=\"{{this.acquisitionModel.codeCFDANum}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Publication of Scientific Research</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"pubOfScintResearch\"\r\n                    value=\"{{this.acquisitionModel.pubOfScintResearch}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Conference Support</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"confSupport\"\r\n                    value=\"{{this.acquisitionModel.confSupport}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Paperwork Reduction Act</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"papworkRedAct\"\r\n                    value=\"{{this.acquisitionModel.papworkRedAct}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>COI Review Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"coiReviewDate\"\r\n                      value=\"{{this.acquisitionModel.coiReviewDate}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Sole Source</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"soleSource\"\r\n                    value=\"{{this.acquisitionModel.soleSource}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Human Subjects</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"humanSubjects\"\r\n                    value=\"{{this.acquisitionModel.humanSubjects}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Animal Subjects</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"animalSubjects\"\r\n                    value=\"{{this.acquisitionModel.animalSubjects}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Current Requisition Number</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"curRequisitionNumber\"\r\n                    value=\"{{this.acquisitionModel.curRequisitionNumber | number: '1.0-0'}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 2</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber2\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber2}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 3</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber3\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber3}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 4</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber4\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber4}}\">\r\n\r\n                </div>\r\n              </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 5</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber5\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber5}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                 \r\n                </div>\r\n              </div> -->\r\n\r\n            <!-- </form> -->\r\n            <!-- <div class=\"card-footer\">\r\n              <button type=\"button\" class=\"btn btn-outline-primary\">\r\n                TASK INSTRUCTIONS\r\n              </button>\r\n              <button type=\"button\" class=\"pl-2 btn btn-primary float-right\" (click)=\"saveAcquisition()\">\r\n                Save\r\n              </button>\r\n            </div> -->\r\n            <!-- </tab> -->\r\n            <tab class=\"pt-4\" heading=\"Project Summary\">\r\n              <!-- <form [formGroup]=\"projectDetailsForm\"> -->\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Project Title\" formControlName=\"projectTitle\" \r\n                    maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Project Title is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Detailed Description\" formControlName=\"detailedDescription\"\r\n                     maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Detailed Description is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Funding Amount\" formControlName=\"fundingAmount\"\r\n                     maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Funding Amount is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Anticipated Action Type\" formControlName=\"anticipatedActionType\"\r\n                     maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Anticipated Action Type is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Estimated Total Fiscal Year Amount\"\r\n                    formControlName=\"estTotFiscalYearAmount\"  maxLength=\"100\" autocomplete=\"off\"\r\n                    [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Estimated Total Fiscal Year Amount is required\">\r\n                    </app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Estimated Total Project Value\" formControlName=\"estTotProjectValue\"\r\n                     maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Estimated Total Project Value is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Planned PoP Start Date</b></label>\r\n\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"plannedPOPStartDate\"\r\n                      value=\"{{this.acquisitionModel.plannedPOPStartDate}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Planned PoP End Date</b></label>\r\n\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"plannedPOPEndDate\"\r\n                      value=\"{{this.acquisitionModel.plannedPOPEndDate}}\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>CTP Planned Award Date</b></label>\r\n\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"ctpPlannedAwardDate\"\r\n                      value=\"{{this.acquisitionModel.ctpPlannedAwardDate}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>CTP Planned Commitment Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"ctpPlannedCommitmentDate\"\r\n                      value=\"{{this.acquisitionModel.ctpPlannedCommitmentDate}}\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Number of Days until Acquistions Package Due\"\r\n                    formControlName=\"numOfDaysUntAcqPackDue\"  maxLength=\"100\" autocomplete=\"off\"\r\n                    [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Number of Days until Acquistions Package Due is required\">\r\n                    </app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <!-- </form> -->\r\n            </tab>\r\n            <tab class=\"pt-4\" heading=\"Project Details\">\r\n              <!-- <form [formGroup]=\"projectDetailsForm\"> -->\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Existing Contact Number\" formControlName=\"projectTitle\"\r\n                     maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Existing Contact Number is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Existing Order Number\" formControlName=\"detailedDescription\"\r\n                     maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Existing Order Number is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n                  <app-input class=\"input\" label=\"Acquisition Status\" formControlName=\"fundingAmount\"\r\n                     maxLength=\"100\" autocomplete=\"off\" [removeOptional]=\"true\">\r\n                    <app-val-msg validator=\"required\" msg=\"Acquisition Status is required\"></app-val-msg>\r\n                  </app-input>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requirement Type</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"colorcode\"\r\n                    value=\"{{this.acquisitionModel.colorcode}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Option Year Exercise</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"estimatedRevisedAmount\"\r\n                    value=\"{{this.acquisitionModel.estimatedRevisedAmount | currency : 'USD' : 'symbol' : '1.0-0'}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Zero Dollar Req</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"zeroDollarReq\"\r\n                    value=\"{{this.acquisitionModel.zeroDollarReq}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Collaboration Flag</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"collaborationFlag\"\r\n                    value=\"{{this.acquisitionModel.collaborationFlag}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Priority Level</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"priorityLevel\"\r\n                      value=\"{{this.acquisitionModel.priorityLevel}}\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Contact Pricing Type</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"slaDueDate\"\r\n                      value=\"{{this.acquisitionModel.slaDueDate}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Commodity Type</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"estTotProjectValue\"\r\n                    value=\"{{this.acquisitionModel.estTotProjectValue | currency : 'USD' : 'symbol' : '1.0-0'}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Recurring Item</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"recurringItem\"\r\n                    value=\"{{this.acquisitionModel.recurringItem}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>NAICS Code/CFDA Number</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"codeCFDANum\"\r\n                      value=\"{{this.acquisitionModel.codeCFDANum}}\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- </form> -->\r\n            </tab>\r\n\r\n            <tab class=\"pt-4\" heading=\"Key Contacts\">\r\n              <!-- <form [formGroup]=\"keyContactsForm\"> -->\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>COR Name and Telephone</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"corNameAndTelNum\"\r\n                    value=\"{{this.acquisitionModel.corNameAndTelNum}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>COR Certification Level</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"corCertLevel\"\r\n                    value=\"{{this.acquisitionModel.corCertLevel}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Alternate COR Name and Telephone</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"altCorNameAndTelNum\"\r\n                    value=\"{{this.acquisitionModel.altCorNameAndTelNum}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Alternate COR Certification Level</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"altCorCertLevel\"\r\n                    value=\"{{this.acquisitionModel.altCorCertLevel}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>AAT Liaison Name and Telephone</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"aatLiasNameAndTelNum\"\r\n                    value=\"{{this.acquisitionModel.aatLiasNameAndTelNum}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Training</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"training\"\r\n                    value=\"{{this.acquisitionModel.training}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <!-- </form> -->\r\n            </tab>\r\n            <tab class=\"pt-4\" heading=\"Req.Numbers\">\r\n              <!-- <form [formGroup]=\"reqForm\"> -->\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Current Requisition Number</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"curRequisitionNumber\"\r\n                    value=\"{{this.acquisitionModel.curRequisitionNumber | number: '1.0-0'}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 2</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber2\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber2}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 3</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber3\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber3}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 4</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber4\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber4}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Requisition Number 5</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"requisitionNumber5\"\r\n                    value=\"{{this.acquisitionModel.requisitionNumber5}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n                </div>\r\n              </div>\r\n              <!-- </form> -->\r\n            </tab>\r\n            <tab class=\"pt-4\" heading=\"Other Info\">\r\n              <!-- <form [formGroup]=\"otherInfoForm\"> -->\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Publication of Scientific Research</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"pubOfScintResearch\"\r\n                    value=\"{{this.acquisitionModel.pubOfScintResearch}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Training</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"training\"\r\n                    value=\"{{this.acquisitionModel.training}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Conference Support</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"confSupport\"\r\n                    value=\"{{this.acquisitionModel.confSupport}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Advanced Puchase Card</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"papworkRedAct\"\r\n                    value=\"{{this.acquisitionModel.papworkRedAct}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Paperwork Reduction Act</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"papworkRedAct\"\r\n                    value=\"{{this.acquisitionModel.papworkRedAct}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>IT Related</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"confSupport\"\r\n                    value=\"{{this.acquisitionModel.confSupport}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>OIMT Requisition</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"soleSource\"\r\n                    value=\"{{this.acquisitionModel.soleSource}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>COI Review Date</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"coiReviewDate\"\r\n                      value=\"{{this.acquisitionModel.coiReviewDate}}\">\r\n                    <!-- <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon2\">\r\n                                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                </span>\r\n                              </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Sole Source</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"soleSource\"\r\n                    value=\"{{this.acquisitionModel.soleSource}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Small Business Set Aside</b></label>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"date\" class=\"form-control \" formControlName=\"coiReviewDate\"\r\n                      value=\"{{this.acquisitionModel.coiReviewDate}}\">\r\n                    <!-- <div class=\"input-group-append\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon2\">\r\n                                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                    </span>\r\n                                  </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Small Business Initiative</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"fundingAmount\"\r\n                    value=\"{{this.acquisitionModel.fundingAmount| currency : 'USD' : 'symbol' : '1.0-0'}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Color Code</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"colorcode\"\r\n                    value=\"{{this.acquisitionModel.colorcode}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Human Subjects</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"humanSubjects\"\r\n                    value=\"{{this.acquisitionModel.humanSubjects}}\">\r\n\r\n                </div>\r\n                <div class=\"col-6 pb-4\">\r\n\r\n                  <label class=\"\"><b>Animal Subjects</b></label>\r\n                  <input type=\"text\" class=\"form-control \" formControlName=\"animalSubjects\"\r\n                    value=\"{{this.acquisitionModel.animalSubjects}}\">\r\n\r\n                </div>\r\n              </div>\r\n              <!-- </form> -->\r\n            </tab>\r\n            <tab class=\"pt-4\" heading=\"Notes\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <label><b>Notes</b></label>\r\n                  <textarea type=\"text\" class=\"form-control \" value=\"{{this.acquisitionModel.notes}}\"></textarea>\r\n                </div>\r\n              </div>\r\n            </tab>\r\n          </tabset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsApprveSpndPlanApprveSpndPlanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"ChangeForm\" (ngSubmit)=\"GetData()\">\r\n  <div class=\"row\" [ngBusy]=\"busy\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div *ngIf=\"saveSuccess\" class=\"alert alert-success\">{{successMessage}}</div>\r\n        <div class=\"card-body\" *ngIf=\"ChangeForm\">\r\n          <h1 class=\"card-title\">Approve FY20 Spend Plan Change Request</h1>\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h2 class=\"card-title\">Administrative Change</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">Office</label>\r\n                <select id=\"office\" class=\"form-control \" placholder=\"Select an option\"\r\n                  (change)=\"onOfficeChangeEvent($event)\" formControlName=\"office\">\r\n                  <option [value]=\"null\">Select office</option>\r\n                  <option *ngFor=\"let ofc of officeList\" [ngValue]=\"ofc\">{{ofc}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <button class=\"btn btn-primary\" [disabled]=\"!ChangeForm.valid\" (click)=\" this.acquisition()\">\r\n                  <i class=\"fa fa-chevron-right\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h3 class=\"subheader\">\r\n                FY20, Administrative Change Request (Affected Line Items within One Office)\r\n              </h3>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row align-items-center\" *ngIf=\"isDataPresent\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"search\">Search</label>\r\n                <input type=\"text\" formControlName=\"search\" class=\"form-control \" (keyup)=\"onFilterTextBoxChanged()\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#filterModal\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\"\r\n                  (click)=\"postAcquisition()\">Save</button>\r\n              </div>\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\" (click)=\"resetState()\">Reset</button>\r\n              </div>\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\" (click)=\"autoSizeCols(false)\">Auto\r\n                  Fit</button></div>\r\n            </div>\r\n          </div>\r\n          <section class=\"widget h-divider autooverflow\" widget>\r\n            <div class=\"row\" [ngBusy]=\"busyTableSave\">\r\n              <div class=\"col-12\">\r\n                <ag-grid-angular style=\"width: 100%; height: 450px;\" class=\"ag-theme-balham\" [gridOptions]=\"gridOptions\"\r\n                  [rowData]=\"acquisitionData\" [rowSelection]=\"rowSelection\" [columnDefs]=\"colDefs\"\r\n                  (selectionChanged) = 'onSelectionChanged($event)' (rowClicked)='onRowClicked($event)' (gridReady)=\"onGridReady($event)\" [floatingFilter]=\"false\" [sideBar]=\"sideBar\" [suppressMenuHide]=\"true\">\r\n                </ag-grid-angular>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"openSubmitDialog()\">\r\n            Exit\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"pl-2 btn btn-primary float-right\" (click)=\"changeStatus()\" data-toggle=\"modal\"\r\n            data-target=\"#changeStatusModal\">\r\n            Change Status\r\n          </button> -->\r\n          <button *ngIf=\"rowsSelected\" type=\"button\" class=\"pl-2 btn btn-primary float-right\" (click)=\"openSubmitDialog()\">\r\n            Change Status\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<!--Modal--->\r\n<div class=\"modal\" id=\"changeStatusModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-dialog-centered\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"card-title\">Change Status</h2>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"changeStatusForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"action\">Select Action</label>\r\n            <select class=\"form-control \" id=\"action\" formControlName=\"action\" placholder=\"Select an option\"\r\n              (change)=onActionChange($event)>\r\n              <option value=\"\">Select an option</option>\r\n              <option value=\"Approve\">Approve</option>\r\n              <option value=\"Reject\">Reject</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"nextOwner\">Select Next Owner</label>\r\n            <select class=\"form-control \" id=\"nextOwner\" formControlName=\"nextOwner\" placholder=\"Select an option\">\r\n              <option>MOS - OCE</option>\r\n              <option>Deputy - OCE</option>\r\n              <option>OCD - Office of Center Director</option>\r\n              <option>Director - OS</option>\r\n              <option>AAT Acquisition Analyst</option>\r\n              <option>Budget Execution Analyst</option>\r\n              <option>Budget Execution Lead</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"comments\">Comments</label>\r\n            <textarea class=\"form-control \" name=\"comments\" id=\"comments\" cols=\"30\" rows=\"10\"\r\n              formControlName=\"comments\"></textarea>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline-primary\" data-dismiss=\"modal\">CANCEL</button>\r\n        <button class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"submitChangeStatus()\"\r\n          [disabled]=\"!changeStatusForm.valid\" data-dismiss=\"modal\" data-target=\"#rejectApprovalModal\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Reject/Approve modal -->\r\n<div class=\"modal\" id=\"rejectApprovalModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-dialog-centered\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <p>{{changeStatusMessage}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-req-reports/current-req-reports.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-req-reports/current-req-reports.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCurrentReqReportsCurrentReqReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"ChangeForm\" (ngSubmit)=\"acquisition()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\" *ngIf=\"ChangeForm\">\r\n          <h1 class=\"card-title\">Reports</h1>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"office\">Office</label>\r\n                <select id=\"office\" class=\"form-control \" placholder=\"Select an option\"\r\n                  (change)=\"onOfficeChangeEvent($event)\" formControlName=\"office\">\r\n                  <option [value]=\"null\">Select office</option>\r\n                  <option *ngFor=\"let ofc of acquisitionDropDownData?.officeList\" [ngValue]=\"ofc\">{{ofc}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"acquisitionType\">Acquisition Type</label>\r\n                <select class=\"form-control \" id=\"acquisitionType\" placholder=\"Select an option\"\r\n                  formControlName=\"acquisitionType\" (change)=\"onAcquisitionTypeChangeEvent($event)\">\r\n                  <option [value]=\"null\">Select type</option>\r\n                  <option *ngFor=\"let atype of this.acquisitionDropDownData?.acquisitionTypeList\" [ngValue]=\"atype\">\r\n                    {{atype}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"version\">Version</label>\r\n                <select class=\"form-control \" id=\"version\" placholder=\"Select an option\" formControlName=\"version\"\r\n                  (change)=\"onVersionChangeEvent($event)\">\r\n                  <option [value]=\"null\">Select version</option>\r\n                  <option *ngFor=\"let version of this.acquisitionDropDownData?.versionList\" [ngValue]=\"version\">\r\n                    {{version}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <button class=\"btn btn-primary\">\r\n                  <i class=\"fa fa-chevron-right\"></i>\r\n                </button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row align-items-center\" *ngIf=\"isDataPresent\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"search\">Search</label>\r\n                <input type=\"text\" formControlName=\"search\" class=\"form-control \" (keyup)=\"onFilterTextBoxChanged()\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"filter\">Views</label>\r\n                <select id=\"filter\" class=\"form-control \" formControlName=\"filter\" placholder=\"Select an option\"\r\n                  (ngModelChange)=\"onFilterChangeEvent($event)\">\r\n                  <option [value]=\"null\">Select View</option>\r\n                  <option *ngFor=\"let ofc of filterJson\" [ngValue]=\"ofc.filterName\">{{ofc.filterName}}</option>\r\n                </select>\r\n              </div>\r\n              <!-- <app-select label=\"Views\" formControlName=\"filter\" [isRequired]=\"true\" [options]=\"filterJson\"\r\n              (ngModelChange)=\"onFilterChangeEvent($event)\">\r\n              </app-select> -->\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <button title=\"{{ChangeForm.get('filter').value === null ? 'Save Filter' : 'Delete/Rename Filter'}}\"\r\n                  class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#filterModal\">\r\n                  <i *ngIf=\"ChangeForm.get('filter').value === null\" class=\"fa fa-save\"></i>\r\n                  <i *ngIf=\"ChangeForm.get('filter').value !== null\" class=\"fa fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\"\r\n                  (click)=\"postAcquisition()\">Save</button>\r\n              </div>\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\" (click)=\"resetState()\">Reset</button>\r\n              </div>\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\" (click)=\"autoSizeCols(false)\">Auto\r\n                  Fit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <section class=\"widget h-divider autooverflow\" widget>\r\n            <div class=\"row\" [ngBusy]=\"busyTableSave\">\r\n              <div class=\"col-12\">\r\n                <ag-grid-angular style=\"width: 100%; height: 450px;\" class=\"ag-theme-balham\" [gridOptions]=\"gridOptions\"\r\n                  (gridReady)=\"onGridReady($event)\" [rowData]=\"acquisitionData\" [columnDefs]=\"colDefs\"\r\n                  [suppressMenuHide]=\"true\" [floatingFilter]=\"false\" [sideBar]=\"sideBar\">\r\n                </ag-grid-angular>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- filter modal --->\r\n<div class=\"modal\" id=\"filterModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-dialog-centered\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4>Save View</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"filterName\">Filter Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"gridFilter\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"stateSave\" class=\"alert alert-success\">\r\n        <span>Grid state saved successfully</span>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#deleteModal\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveState()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- edit modal -->\r\n<div class=\"modal\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-dialog-centered\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"card-title\"></h2>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h4 style=\"color: red;\"><i class=\"fa fa-exclamation-triangle\"></i>&nbsp;Are you sure you want to delete this filter?</h4>\r\n      </div>\r\n      <div *ngIf=\"stateSave\" class=\"alert alert-success\">\r\n        <span>Grid state saved successfully</span>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"toolbar\">\r\n  <button (click)=\"layoutService.addItem()\">Add Item</button>\r\n  <div class=\"draggable\" draggable=\"true\" (dragend)=\"layoutService.dropItem('example1')\">Example 1</div>\r\n  <div class=\"draggable\" draggable=\"true\" (dragend)=\"layoutService.dropItem('example2')\">Example 2</div>\r\n</div> -->\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h1 class=\"card-title\">Dashboard</h1>\r\n  </div>\r\n</div>\r\n<gridster [options]=\"options\">\r\n  <!-- <gridster-item *ngFor=\"let item of layout\" [item]=\"item\" (dragover)=\"layoutService.setDropId(item.id)\">\r\n    <ng-container appLayoutItem [componentRef]=\"layoutService.getComponentRef(item.id)\"></ng-container>\r\n    <button (click)=\"layoutService.deleteItem(item)\">Delete Item</button>\r\n  </gridster-item> -->\r\n  <gridster-item (dragover)=\"layoutService.setDropId('trend-5')\" [item]=\"{cols: 4, id:'trend-5', rows: 4, x:1, y: 1}\">\r\n    <ng-container appLayoutItem [componentRef]=\"layoutService.getComponentRef('trend-5')\">\r\n\r\n      <div class=\"card\" style=\"height:250px\">\r\n        <div class=\"card-header\">\r\n          4 Alerts\r\n        </div>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\">Cras justo odio</li>\r\n          <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n          <li class=\"list-group-item\">Vestibulum at eros</li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </gridster-item>\r\n  <gridster-item (dragover)=\"layoutService.setDropId('trend-1')\" [item]=\"{cols: 4, id:'trend-1', rows: 4, x:0, y: 0}\">\r\n    <ng-container appLayoutItem [componentRef]=\"layoutService.getComponentRef('trend-1')\">\r\n      <div class=\"card\" style=\"height:280px\">\r\n        <div class=\"card-header\">Upcoming AcqusitionsDueDate</div>\r\n        <div>\r\n          <div style=\"display: block\">\r\n            <canvas baseChart height=\"80\" width=\"100\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\"\r\n              [chartType]=\"pieChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </gridster-item>\r\n  <gridster-item (dragover)=\"layoutService.setDropId('trend-2')\" [item]=\"{cols: 6, id:'trend-2', rows: 4, x:0, y: 1}\">\r\n    <ng-container appLayoutItem [componentRef]=\"layoutService.getComponentRef('trend-2')\">\r\n      <div class=\"card\" style=\"height:280px\">\r\n        <div class=\"card-header\">WorkFlow Tracker</div>\r\n        <div class=\"card-body\">\r\n          <!--for grid-->\r\n          <ag-grid-angular style=\"width: 100%; height: 200px;\" class=\"ag-theme-balham\" [gridOptions]=\"gridOptions\"\r\n            [rowData]=\"rowData\" [columnDefs]=\"columnDefs\" (gridReady)=\"onGridReady($event)\">\r\n          </ag-grid-angular>\r\n          <!--end of grid-->\r\n\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </gridster-item>\r\n  <gridster-item (dragover)=\"layoutService.setDropId('trend-3')\" [item]=\"{cols: 4, id:'trend-3', rows: 4, x:1, y: 0}\">\r\n    <ng-container appLayoutItem [componentRef]=\"layoutService.getComponentRef('trend-3')\">\r\n      <div class=\"card\" style=\"height:250px\">\r\n        <div>\r\n          <div style=\"display: block\">\r\n            <canvas baseChart [datasets]=\"chartData\" [labels]=\"chartLabels\" [options]=\"lineChartOptions\"\r\n              [legend]=\"barChartLegend\" (chartClick)=\"onChartClick($event)\" [chartType]=\"'line'\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </gridster-item>\r\n  <gridster-item (dragover)=\"layoutService.setDropId('trend-4')\" [item]=\"{cols: 4, id:'trend-4', rows: 4, x:1, y: 1}\">\r\n    <ng-container appLayoutItem [componentRef]=\"layoutService.getComponentRef('trend-4')\">\r\n      <div class=\"card\" style=\"height:250px\">\r\n        <div style=\"display: block\">\r\n\r\n          <div class=\"card-body\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-group\">\r\n                <label class=\"\" for=\"contact\"><b>Contract</b></label>\r\n\r\n                <select id=\"contact\" class=\"form-control \" placeholder=\"Select an option\"\r\n                  (change)=\"onContractChangeEvent($event)\">\r\n                  <option [value]=\"null\">Select Contract</option>\r\n                </select>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <canvas baseChart [datasets]=\"contractchartData\" [labels]=\"contractchartLabels\" [options]=\"lineChartOptions\"\r\n              [legend]=\"contractbarChartLegend\" (chartClick)=\"contractonChartClick($event)\" [chartType]=\"'line'\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </gridster-item>\r\n</gridster>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error-page/error-page.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error-page/error-page.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErrorPageErrorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"card-title\" [innerHTML]=\"this.route.snapshot.data['page_header']\"></h1>\r\n        <small [innerHTML]=\"this.route.snapshot.data['errors']\"></small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"image-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row login-center\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-4 offset-xs-1 text-center \">\r\n        <h1 class=\"py-3\">\r\n          <i class=\"fa fa-circle text-gray mx-3\"></i>\r\n          {{appTitle}}\r\n          <i class=\"fa fa-circle text-warning mx-3\"></i>\r\n        </h1>\r\n\r\n        <div class=\"card shadow-lg mb-5 bg-white rounded\" [ngBusy]=\"busy\">\r\n          <div class=\"card-body\">\r\n            <div class=\"card-title d-inline-flex\">\r\n              <i class=\"fa fa-user fa-2x m-2\"></i>\r\n              <h4>User Login</h4>\r\n            </div>\r\n            <form [formGroup]=\"LoginForm\" (ngSubmit)=\"login()\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 mb-3\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Username\" formControlName=\"username\">\r\n                </div>\r\n                <div class=\"col-12 mb-3\">\r\n                  <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                </div>\r\n                <div class=\"col-12 mb-3\" *ngIf=\"errorFlag.flag\">\r\n                  <span class=\"text-danger\">{{errorFlag.message}}</span>\r\n                </div>\r\n                <div class=\"col-12 mb-3\">\r\n                  <button class=\"btn btn-primary btn-sm btn-block\" [disabled]=\"!LoginForm.valid\">Login</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div><span>{{currentYear}} &copy; CTP - CBAS Demo Application</span></div>\r\n        <div><span>Build: 1.0.0 Published: December 06, 2019 - 07:30 PM EST</span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/submit-plan/submit-plan.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/submit-plan/submit-plan.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSubmitPlanSubmitPlanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"ChangeForm\" (ngSubmit)=\"acquisition()\">\r\n  <div class=\"row\" [ngBusy]=\"busy\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div *ngIf=\"saveSuccess\" class=\"alert alert-success\">{{successMessage}}</div>\r\n        <div class=\"card-body\" *ngIf=\"ChangeForm\">\r\n          <h1 class=\"card-title\">Submit FY20 Spend Plan Change Request</h1>\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h2 class=\"card-title\">Administrative Change</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">Office</label>\r\n                <select id=\"office\" class=\"form-control\" placholder=\"Select an option\"\r\n                  (change)=\"onOfficeChangeEvent($event)\" formControlName=\"office\">\r\n                  <option [value]=\"null\">Select office</option>\r\n                  <option *ngFor=\"let ofc of officeList\" [ngValue]=\"ofc\">{{ofc}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <button class=\"btn btn-primary\" [disabled]=\"!ChangeForm.valid\">\r\n                  <i class=\"fa fa-chevron-right\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h3 class=\"subheader\">\r\n                FY20, Administrative Change Request (Affected Line Items within One Office)\r\n              </h3>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row align-items-center\" *ngIf=\"isDataPresent\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"search\">Search</label>\r\n                <input type=\"text\" formControlName=\"search\" class=\"form-control \" (keyup)=\"onFilterTextBoxChanged()\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-1 align-self-center\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">&nbsp;</label><br />\r\n                <!-- <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#filterModal\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\"\r\n                  (click)=\"saveAcquisition()\">Save</button>\r\n              </div>\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\" (click)=\"resetState()\">Reset</button>\r\n              </div>\r\n              <div><button class=\"btn btn-primary pull-right ml-4\" type=\"button\" (click)=\"autoSizeCols(false)\">Auto\r\n                  Fit</button></div>\r\n            </div>\r\n          </div>\r\n          <section class=\"widget h-divider autooverflow\" widget>\r\n            <div class=\"row\" [ngBusy]=\"busyTableSave\">\r\n              <div class=\"col-12\">\r\n                <ag-grid-angular style=\"width: 100%; height: 450px;\" class=\"ag-theme-balham\" [gridOptions]=\"gridOptions\"\r\n                  [rowData]=\"acquisitionList\" [quickFilterText]=\"ChangeForm.value.search\" [columnDefs]=\"colDefs\"\r\n                  [floatingFilter]=\"false\" [sideBar]=\"sideBar\" (gridReady)=\"onGridReady($event)\" [suppressMenuHide]=\"true\">\r\n                </ag-grid-angular>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"button\" *ngIf=\"saveSuccess\" class=\"btn btn-outline-primary\" (click)=\"openSubmitDialog()\">\r\n            Exit\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"pl-2 btn btn-primary float-right\" (click)=\"saveAcquisition()\">\r\n            Save\r\n          </button> -->\r\n          <button type=\"button\" *ngIf=\"saveSuccess\" class=\"btn btn-primary float-right\" (click)=\"openSubmitDialog()\">\r\n            Submit Changes \r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsCellHistoryDialogCellHistoryDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>cell-history-dialog works!</p>\r\n<ag-grid-angular style=\"width: 100%; height: 200px;\" class=\"ag-theme-balham\"\r\n    [rowData]=\"rowData\" [columnDefs]=\"columnDefs\">\r\n</ag-grid-angular>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsConfirmDialogConfirmDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 *ngIf=\"!formSubmitted\" class=\"modal-title pull-left\">{{title}}</h4>\r\n\r\n  <h4 *ngIf=\"formSubmitted\" class=\"modal-title pull-left\" style=\"color:green;\"><i class=\"fa fa-check-circle\"\r\n      aria-hidden=\"true\"></i>{{submitChangesMessage}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container\">\r\n    \r\n    <div class=\"progress\" *ngIf=\"!approveScreen && !formSubmitted\">\r\n      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n        style=\"width: 0%;\">\r\n        <span>0%</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"progress\" *ngIf=\"!approveScreen && formSubmitted\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n      style=\"width: 50%;\">\r\n      <span>50%</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"progress\" *ngIf=\"approveScreen && !formSubmitted\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n      style=\"width: 50%;\">\r\n      <span>50%</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"progress\" *ngIf=\"approveScreen && formSubmitted\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n      style=\"width: 100%;\">\r\n      <span>100%</span>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"SubmitChangeForm\" *ngIf=\"!formSubmitted && !formRejected\">\r\n    <div class=\"form-group\">\r\n      <label for=\"action\">Select Action</label>\r\n      <select class=\"form-control\" id=\"action\" formControlName=\"action\" placholder=\"Select an option\">\r\n        <option>Promote</option>\r\n        <option>Reject</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"nextOwner\">Select Next Owner</label>\r\n      <select class=\"form-control\" id=\"nextOwner\" formControlName=\"nextOwner\" placholder=\"Select an option\">\r\n        <option>MOS - OCE</option>\r\n        <option>Deputy - OCE</option>\r\n        <option>OCD - Office of Center Director</option>\r\n        <option>Director - OS</option>\r\n        <option>AAT Acquisition Analyst</option>\r\n        <option>Budget Execution Analyst</option>\r\n        <option>Budget Execution Lead</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"comments\">Comments</label>\r\n      <textarea class=\"form-control\" name=\"comments\" id=\"comments\" cols=\"30\" rows=\"10\"\r\n        formControlName=\"comments\"></textarea>\r\n    </div>\r\n  </form>\r\n  <div *ngIf=\"formRejected\">\r\n    <h4 style=\"color:red;\"><i class=\"fa fa-exclamation-triangle\"></i>{{this.submitChangesMessage}}</h4>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{closeBtnName}}</button>\r\n  <button [disabled]=\"!SubmitChangeForm.valid\" *ngIf=\"!formSubmitted && !formRejected\" type=\"button\"\r\n    class=\"btn btn-primary\" (click)=\"submitAction()\">{{submitBtnName}}</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsDropdownDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\" [ngClass]=\"{'has-danger':errors.length > 0}\">\r\n  <label [for]=\"id\" *ngIf=\"label != null\">{{label}}\r\n    <span *ngIf=\"!isRequired\" class=\"optional\">(optional)</span>\r\n   </label>\r\n  <div class=\"input-group\">\r\n    <div class=\"dropdown\" [ngClass]=\"settings.containerClasses\" [class.open]=\"isVisible\">\r\n      <!-- <button type=\"button\" class=\"form-control\" [title]=\"label\" (click)=\"clearSelection()\" [disabled]=\"disabled\" [ngClass]=\"{'is-invalid':errors.length > 0}\"\r\n         >{{ title }}\r\n        <span class=\"glyphicon glyphicon-remove pull-right\"></span>\r\n      </button> -->\r\n      <button type=\"button\" class=\"form-control\" [title]=\"label\" (click)=\"toggleDropdown()\" [disabled]=\"disabled\" [ngClass]=\"{'is-invalid':errors.length > 0}\"\r\n        (blur)=\"onBlur()\" [id]=\"id\">{{ title }}\r\n        <span class=\"caret pull-right\"></span>\r\n      </button>\r\n      <!-- TODO: Remove the inline style from this element. -->\r\n      <ul #scroller *ngIf=\"isVisible\" class=\"dropdown-menu\" (scroll)=\"settings.isLazyLoad ? checkScrollPosition($event) : null\"\r\n        (wheel)=\"settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null\" [class.pull-right]=\"settings.pullRight\"\r\n        [class.dropdown-menu-right]=\"settings.pullRight\" [style.max-height]=\"settings.maxHeight\" style=\"display: block; height: auto; overflow-y: auto;\">\r\n        <li class=\" search\" *ngIf=\"settings.enableSearch\">\r\n          <div class=\"input-group input-group-sm\">\r\n            <span class=\"input-group-addon\" id=\"sizing-addon3\">\r\n              <i class=\"fa fa-search\"></i>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{ texts.searchPlaceholder }}\" aria-describedby=\"sizing-addon3\" [formControl]=\"filterControl\"\r\n              autofocus>\r\n            <span class=\"from-group\" *ngIf=\"filterControl.value.length > 0\">\r\n              <button class=\"form-control\" type=\"button\" (click)=\"clearSearch($event)\">\r\n                <i class=\"fa fa-edit\"></i>\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </li>\r\n        <li class=\"dropdown-divider divider\" *ngIf=\"settings.enableSearch\"></li>\r\n        <li class=\" check-control check-control-check\" *ngIf=\"settings.showCheckAll && !disabledSelection\" (click)=\"checkAll()\">\r\n          <a href=\"javascript:;\" role=\"menuitem\" tabindex=\"-1\">\r\n            <span [ngClass]=\"{'glyphicon glyphicon-ok': settings.checkedStyle !== 'fontawesome','fa fa-check': settings.checkedStyle === 'fontawesome'}\"></span>\r\n            {{ texts.checkAll }}\r\n          </a>\r\n        </li>\r\n        <li class=\" check-control check-control-uncheck\" *ngIf=\"settings.showUncheckAll && !disabledSelection\" (click)=\"uncheckAll()\">\r\n          <a href=\"javascript:;\" role=\"menuitem\" tabindex=\"-1\">\r\n            <span [ngClass]=\"{'glyphicon glyphicon-remove': settings.checkedStyle !== 'fontawesome','fa fa-times': settings.checkedStyle === 'fontawesome'}\"></span>\r\n            {{ texts.uncheckAll }}\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"settings.showCheckAll || settings.showUncheckAll\" class=\"dropdown-divider divider\"></li>\r\n        <li *ngIf=\"!renderItems\" class=\"dropdown-item empty\">{{ texts.searchNoRenderText }}</li>\r\n        <li *ngIf=\"renderItems && !renderFilteredOptions.length\" class=\"dropdown-item empty\">{{ texts.searchEmptyResult }}</li>\r\n        <li class=\"pl-3\" *ngFor=\"let option of renderFilteredOptions\" (click)=\"setSelected($event, option)\" [ngStyle]=\"getItemStyle(option)\"\r\n          [ngClass]=\"option.classes\" [class.dropdown-header]=\"option.isLabel\">\r\n          <span *ngIf=\"!option.isLabel; else label\" href=\"javascript:;\" role=\"menuitem\" tabindex=\"-1\" [style.padding-left]=\"this.parents.length>0&&this.parents.indexOf(option.id)<0&&'30px'\"\r\n            [ngStyle]=\"getItemStyleSelectionDisabled()\">\r\n            <ng-container [ngSwitch]=\"settings.checkedStyle\" *ngIf=\"settings.selectionLimit != 1\">\r\n              <input *ngSwitchCase=\"'checkboxes'\" type=\"checkbox\" [checked]=\"isSelected(option)\" (click)=\"preventCheckboxCheck($event, option)\"\r\n                [disabled]=\"isCheckboxDisabled()\" [ngStyle]=\"getItemStyleSelectionDisabled()\" />\r\n              <!-- TODO: Remove the inline style from this element and the element below it. -->\r\n              <span *ngSwitchCase=\"'glyphicon'\" style=\"width: 16px;\" class=\"glyphicon\" [class.glyphicon-ok]=\"isSelected(option)\"></span>\r\n              <span *ngSwitchCase=\"'fontawesome'\" style=\"width: 16px;display: inline-block;\">\r\n                <i *ngIf=\"isSelected(option)\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n              </span>\r\n            </ng-container>\r\n            <span [ngClass]=\"settings.itemClasses\" tabindex=\"0\" [style.font-weight]=\"this.parents.indexOf(option.id)>=0? '':''\">\r\n              {{ option.name }}\r\n            </span>\r\n            <span  class=\"fa fa-edit pull-right clear-selection\" *ngIf=\"clearSelectionButtonVisible(option)\" tabindex=\"0\" (click)=\"clearSelection($event)\"></span>\r\n            <!-- <span *ngSwitchCase=\"'glyphicon'\" class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"clearSelectionButtonVisible(option)\" (click)=\"clearSelection($event)\"></span> -->\r\n\r\n          </span>\r\n          <ng-template #label>{{ option.name }}</ng-template>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div *ngFor=\"let e of errors\" class=\"invalid-feedback\">{{e}}</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"page-footer font-small blue pt-4\">\r\n\r\n    <!-- Footer Links -->\r\n    <div class=\"container-fluid footer-links text-center text-md-left pl-5 pr-5 pb-4\">\r\n\r\n        <!-- Grid row -->\r\n        <div class=\"row\">\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-5 mt-md-0 mt-3 border-right border-secondary pr-5\">\r\n\r\n                <!-- Content -->\r\n                <div class=\"footer-header border-bottom border-secondary font-weight-bold\">Acquisitions</div>\r\n                <div class=\"row pl-2 pt-2\">\r\n                    <div class=\"col-6\">\r\n                        <span class=\"font-weight-bold\">FY20</span>\r\n                        <ul class=\"list-unstyled\">\r\n                            <li>\r\n                                <a href=\"#\">Pre-Commitment</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Post-Commitment</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Award</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Report View</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">SLA Daya and OAGS Cut-off Dates</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <span class=\"font-weight-bold\">FY19</span>\r\n                        <ul class=\"list-unstyled\">\r\n                            <li>\r\n                                <a href=\"#!\">Pre-Commitment</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Post-Commitment</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Award</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Report View</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">SLA Daya and OAGS Cut-off Dates</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-1\">\r\n                <span class=\"border-right\"></span>\r\n            </div> -->\r\n\r\n            <div class=\"col-md-5 mt-md-0 mt-3 border-right border-secondary pl-5 pr-5\">\r\n                <div class=\"footer-header border-bottom border-secondary font-weight-bold\">Spend Plan Change</div>\r\n                <div class=\"row pl-2 pt-2\">\r\n                    <div class=\"col-6\">\r\n                        <span class=\"font-weight-bold\">FY20</span>\r\n                        <ul class=\"list-unstyled\">\r\n                            <li>\r\n                                <a href=\"#!\">Administrative Change</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Dollar Change</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Spend Plan Reductions</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Additional Funds Request</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Staffing Target Change Request</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <span class=\"font-weight-bold\">FY19</span>\r\n                        <ul class=\"list-unstyled\">\r\n                            <li>\r\n                                <a href=\"#!\">Administrative Change</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Dollar Change</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Spend Plan Reductions</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Additional Funds Request</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#!\">Staffing Target Change Request</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-1\"></div> -->\r\n\r\n            <!-- Links -->\r\n            <!-- <h5 class=\"text-uppercase\">Links</h5>\r\n    \r\n                <ul class=\"list-unstyled\">\r\n                  <li>\r\n                    <a href=\"#!\">Link 1</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#!\">Link 2</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#!\">Link 3</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#!\">Link 4</a>\r\n                  </li>\r\n                </ul> -->\r\n\r\n\r\n            <!-- Grid column -->\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-2 mb-md-0 mb-3 pl-5\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <input type=\"text\" placeholder=\"Search\" class=\"border-secondary\" aria-label=\"Search\">\r\n                        <i class=\"fa fa-search fa-lg\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 pt-2\">\r\n                        <span class=\"pr-4\">\r\n                            <i class=\"fa fa-dashboard fa-lg\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span class=\"pr-4\">\r\n                            <i class=\"fa fa-envelope-o fa-lg\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span class=\"pr-4\">\r\n                            <i class=\"fa fa-laptop fa-lg\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 pt-2\">\r\n                            <a class=\"text-white\" href=\"javascript:void(0)\" (click)=\"onClickLogout()\">Logout</a>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright copy-right py-3 pl-5\">© 2020 Food & Drug Administration | CTP Budget & Acquisitions\r\n        System\r\n    </div>\r\n    <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\r\n  <a class=\"navbar-brand\"></a>\r\n  <form class=\"form-inline p-1\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Global Search\" aria-label=\"Global search\"\r\n        aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\">\r\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-group\">\r\n      <ul class=\"list-inline mb-0\">\r\n        <li class=\"list-inline-item px-4\">\r\n          <a href=\"javascript:void(0)\" class=\"text-white\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >Dashboard</a>\r\n        </li>\r\n        <li class=\"list-inline-item px-4\">\r\n          <a href=\"javascript:void(0)\" class=\"text-white\">Acquisitions FY19</a>\r\n        </li>\r\n        <li class=\"list-inline-item px-4\">\r\n          <a href=\"javascript:void(0)\" class=\"text-white\">Acquisitions FY20</a>\r\n        </li>\r\n        <li class=\"list-inline-item px-4\">\r\n          <a class=\"text-white\" href=\"javascript:void(0)\" (click)=\"onClickLogout()\">Logout</a>&nbsp;\r\n          <i class=\"fa fa-user-circle fa-lg\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </form>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/new-header/new-header.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/new-header/new-header.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsNewHeaderNewHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-light bg-light p-0\">\r\n  <a class=\"navbar-brand pl-3\" href=\"javascript:void(0)\">\r\n    <img src=\"../../../../assets/images/fda-logo-reverse-213x45.png\" width=\"250\" height=\"40\"\r\n      class=\"d-inline-block align-top\" alt=\"\">\r\n  </a>\r\n  <ul class=\"list-unstyled d-flex mb-0\" id=\"menu\">\r\n    <li class=\"head-link\" *ngFor=\"let item of menuItems\">\r\n      <a class='prett text-white' href=\"javascript:void(0)\">{{item.title | uppercase}}</a>\r\n\r\n      <ul class=\"menus\">\r\n        <li class='has-submenu' *ngFor=\"let s of item.menu_items\">\r\n          <a [ngClass]=\"{'prett pl-3': s.submenu.length > 0}\" href=\"javascript:void(0)\" routerLink=\"{{s.link}}\">{{s.label}}\r\n            <i class=\"fa fa-chevron-right text-info pull-right\" *ngIf=\"s.submenu.length > 0\"></i>\r\n          </a>\r\n\r\n          <ul class=\"submenu\" *ngIf=\"s.submenu.length > 0\">\r\n            <li class=\"has-sub-submenu\" *ngFor=\"let s1 of s.submenu\">\r\n              <a [ngClass]=\"{'prett': s1.subSubmenu.length > 0}\" href=\"javascript:void(0)\" routerLink=\"{{s1.link}}\">{{s1.label}}\r\n                <i class=\"fa fa-chevron-right text-info pull-right\" *ngIf=\"s1.subSubmenu.length > 0\"></i>\r\n              </a>\r\n\r\n              <ul class=\"sub-submenu\" *ngIf=\"s1.subSubmenu.length > 0\">\r\n                <li class=\"has-s3menu\" *ngFor=\"let s2 of s1.subSubmenu\">\r\n                  <a [ngClass]=\"{'prett': s2.s3menu.length > 0}\" href=\"javascript:void(0)\" routerLink=\"{{s2.link}}\">{{s2.label}}\r\n                    <i class=\"fa fa-chevron-right text-info pull-right\" *ngIf=\"s2.s3menu.length > 0\"></i>\r\n                  </a>\r\n\r\n                  <ul class=\"s3menu\" *ngIf=\"s2.s3menu.length > 0\">\r\n                    <li *ngFor=\"let s3 of s2.s3menu\">\r\n                      <a href=\"javascript:void(0)\" routerLink=\"{{s3.link}}\">{{s3.label}}</a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n\r\n    <li class=\"head-link\" style=\"border-bottom: 0rem !important;\">\r\n      <a class=\"text-white logout\" href=\"javascript:void(0)\" (click)=\"onClickLogout()\">LOGOUT</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"list-unstyled d-flex mb-0\">\r\n    <li *ngFor=\"let item of menu\" class=\"pr-4\">\r\n      <a href=\"javascript:void(0)\" routerLink=\"{{item.link}}\"><i *ngIf=\"(item.icon != null)\" class=\"fa {{item.icon}} fa-lg\"></i></a></li>\r\n  </ul>\r\n</nav>\r\n<div class=\"sub-header\">CTP BUDGET & ACQUISITIONS SYSTEM</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/page-header/page-header.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/page-header/page-header.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPageHeaderPageHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"banner-bar\">\r\n      <h2 [innerHTML]=\"this.route.snapshot.data['page_header']\"></h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sidebar d-none d-sm-block\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"brand\" routerLink=\"/\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <nav class=\"left-nav\" role=\"navigation\" aria-label=\"Primary Nav - Nav Items\">\r\n          <ul>\r\n            <li *ngFor=\"let item of menu; let i = index\" class=\"list-group-item\" [routerLinkActive]=\"['active']\">\r\n              <a [routerLinkActive]=\"['active']\" *ngIf=\"item.link\" routerLink=\"{{item.link}}\" href=\"Javascript:void(0);\">\r\n                <i *ngIf=\"(item.icon != null)\" class=\"fa {{item.icon}}\"></i>\r\n                <span class=\"pl-2\">{{item.title}}</span>\r\n              </a>\r\n              <a href=\"Javascript:void(0);\" *ngIf=\"!item.link\">\r\n                <i *ngIf=\"(item.icon != null)\" class=\"fa {{item.icon}}\"></i>\r\n                <span class=\"pl-2\">{{item.title}}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n    <div class=\"user-menu\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <nav class=\"left-nav\" role=\"navigation\" aria-label=\"User Nav\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item\">\r\n                <a routerLink=\"/user\" href=\"Javascript: void(0);\">\r\n                  <i class=\"fa fa-user-circle-o\"></i>\r\n                  <span class=\"pl-2\">Users</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"topbar d-block d-sm-none\">\r\n    <a href=\"Javascript: void(0);\" id=\"topbar-toggle\" class=\"topbar-toggle\" title=\"Toggle Main Menu\">\r\n      <i class=\"fa fa-bars\">\r\n        <span class=\"sr-only sr-focusable\">Toggle Mobile Menu</span>\r\n      </i>\r\n    </a>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"brand\" routerLink=\"/\"></div>\r\n        <nav class=\"top-nav\" id=\"top-nav\" role=\"navigation\" aria-label=\"Mobile Menu\">\r\n          <ul *ngFor=\"let item of menu; let i = index\">\r\n            <li>\r\n              <a [routerLinkActive]=\"['active']\" routerLink=\"{{item.link}}\" href=\"Javascript: void(0);\">\r\n                <i class=\"fa {{item.icon}}\"></i>\r\n                <span>{{item.label}}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsTextInputTextInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\" [ngClass]=\"{'has-danger':errors.length > 0}\">\r\n    <label [for]=\"id\" *ngIf=\"label !== null\">\r\n        {{label}}\r\n        <!--<span *ngIf=\"!isRequired\" class=\"optional\">(optional)</span>-->\r\n        <span *ngIf=\"showRemainingCharacters\" class=\"optional\">Max {{maxLength}} characters. Remaining {{remainingChars}}</span>\r\n        <span *ngIf=\"isRequired\" class=\"required\">*</span>\r\n    </label>\r\n  <input [type]=\"type\" class=\"form-control\" #focusElement [ngModel]=\"text\" (keydown)=\"onKeyDown($event)\"\r\n     [readonly]=\"disabled\" (ngModelChange)=\"inputChanged($event)\" (blur)=\"onBlur()\" [id]=\"id\"\r\n    [ngClass]=\"{'is-invalid':errors.length > 0}\" [attr.aria-describedby]=\"ariaDesribedById\" [autocomplete]=\"autocomplete\" />\r\n  <div *ngFor=\"let e of errors\" class=\"invalid-feedback\">{{e}}</div>\r\n  <!-- FIXME: The ariaDesribedById ID here is being duplicated for each date field that is being inserted.  This needs to be dynamic. -->\r\n  <small [id]=\"ariaDesribedById\" class=\"form-text text-muted\" *ngIf=\"formatHelp !== null\">{{formatHelp}}</small>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-api-endpoints.config.ts":
  /*!*********************************************!*\
    !*** ./src/app/app-api-endpoints.config.ts ***!
    \*********************************************/

  /*! exports provided: ApiEndpointsConfig */

  /***/
  function srcAppAppApiEndpointsConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiEndpointsConfig", function () {
      return ApiEndpointsConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApiEndpointsConfig = /*#__PURE__*/function () {
      function ApiEndpointsConfig() {
        _classCallCheck(this, ApiEndpointsConfig);
      }

      _createClass(ApiEndpointsConfig, [{
        key: "getLoginUrl",
        value: function getLoginUrl() {
          return this.getBaseUrl + '/api/auth/login';
        }
      }, {
        key: "getUserByEmailUrl",
        value: function getUserByEmailUrl() {
          return this.getBaseUrl + '/api/useradmin';
        }
      }, {
        key: "getBaseUrl",
        get: function get() {
          return 'http://10.180.91.81:8889/cbasservice';
        }
      }]);

      return ApiEndpointsConfig;
    }();

    ApiEndpointsConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ApiEndpointsConfig);
    /***/
  },

  /***/
  "./src/app/app-config.service.ts":
  /*!***************************************!*\
    !*** ./src/app/app-config.service.ts ***!
    \***************************************/

  /*! exports provided: AppConfigService */

  /***/
  function srcAppAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts"); // TODO: remove this and replace with specific operators


    var AppConfigService = /*#__PURE__*/function () {
      function AppConfigService(http) {
        _classCallCheck(this, AppConfigService);

        this.http = http;
        this.config = null;
      }

      _createClass(AppConfigService, [{
        key: "load",
        value: function load() {
          var _this = this;

          var env = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].envName ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].envName : 'production';
          this._env = env;
          var envConfigFilePath = ''; // let window: any;

          var location = window.location;
          var virtualDirec = location.pathname.substr(0, window.location.pathname.lastIndexOf('/'));

          if (virtualDirec !== '' && virtualDirec !== '/') {
            if (!virtualDirec.startsWith('/')) {
              virtualDirec = '/' + virtualDirec;
            }

            if (!virtualDirec.endsWith('/')) {
              virtualDirec = virtualDirec + '/';
            }

            envConfigFilePath = '../..' + virtualDirec + 'assets/configs/' + env + '.config.json';
          } else {
            envConfigFilePath = '../../assets/configs/' + env + '.config.json';
          }

          return this.http.get(envConfigFilePath).pipe( // .map(res => res.json())
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (configData) {
            _this.config = configData;
            return configData;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            if (_this.config.enableDebug) {
              console.error(error);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().error || 'Server error');
          }));
        }
      }, {
        key: "getConfig",
        value: function getConfig() {
          var _this2 = this;

          if (this.config === null) {
            return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (config) {
              if (config.enableDebug) {
                console.log('Web Api         Endpoint:' + config.apiEndpointUrl);
              }

              return config;
            }));
          } else {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
              if (_this2.config.enableDebug) {
                console.log('Web Api Endpoint:' + _this2.config.apiEndpointUrl);
              }

              observer.next(_this2.config);
            });
          }
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    AppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], AppConfigService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _shared_services_login_in_user_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/services/login-in-user-guard.service */
    "./src/app/shared/services/login-in-user-guard.service.ts");
    /* harmony import */


    var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/error-page/error-page.component */
    "./src/app/components/error-page/error-page.component.ts");
    /* harmony import */


    var _components_current_req_reports_current_req_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/current-req-reports/current-req-reports.component */
    "./src/app/components/current-req-reports/current-req-reports.component.ts");
    /* harmony import */


    var _components_acquisitions_fy_twenty_acquisitions_fy_twenty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/acquisitions-fy-twenty/acquisitions-fy-twenty.component */
    "./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.ts");
    /* harmony import */


    var _components_submit_plan_submit_plan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/submit-plan/submit-plan.component */
    "./src/app/components/submit-plan/submit-plan.component.ts");
    /* harmony import */


    var _components_apprve_spnd_plan_apprve_spnd_plan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/apprve-spnd-plan/apprve-spnd-plan.component */
    "./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_shared_services_login_in_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserGuard"]],
      data: {
        page_header: 'Dashboard'
      }
    }, {
      path: 'reports/current-req-report',
      component: _components_current_req_reports_current_req_reports_component__WEBPACK_IMPORTED_MODULE_7__["CurrentReqReportsComponent"],
      canActivate: [_shared_services_login_in_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserGuard"]],
      data: {
        page_header: 'Dashboard'
      }
    }, {
      path: 'submit-plan',
      component: _components_submit_plan_submit_plan_component__WEBPACK_IMPORTED_MODULE_9__["SubmitPlanComponent"]
    }, {
      path: 'approvePlan/approve-submit-plan',
      component: _components_apprve_spnd_plan_apprve_spnd_plan_component__WEBPACK_IMPORTED_MODULE_10__["ApprveSpndPlanComponent"]
    }, {
      path: 'acquistions-fy20',
      component: _components_acquisitions_fy_twenty_acquisitions_fy_twenty_component__WEBPACK_IMPORTED_MODULE_8__["AcquisitionsFyTwentyComponent"],
      canActivate: [_shared_services_login_in_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserGuard"]],
      data: {
        page_header: 'Acquisition FY20'
      }
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      data: {
        page_header: 'Login'
      }
    }, {
      path: '**',
      component: _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
      data: {
        page_header: 'Page Not Found',
        errors: 'The page you are trying to reach was not found. Please check your URL or link and try again.'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid {\n  padding: 30px !important;\n  background-color: #EFEFEF; }\n\n.btn-primary {\n  background-color: #007CBA !important;\n  border-color: #007CBA !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhc2FwYVxcR2l0SHViXFxUZXN0VUlJbnN0YW5jZVxcY2Jhcy1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxvQ0FBc0M7RUFDdEMsZ0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9jYmFzLWJhc2UtY29sb3JzLnNjc3MnO1xyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNreS1ibHVlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkc2t5LWJsdWUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_idle_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-idle/core */
    "./node_modules/@ng-idle/core/fesm2015/ng-idle-core.js");
    /* harmony import */


    var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-idle/keepalive */
    "./node_modules/@ng-idle/keepalive/fesm2015/ng-idle-keepalive.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_services_user_logged_in_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/services/user-logged-in.service */
    "./src/app/shared/services/user-logged-in.service.ts");
    /* harmony import */


    var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ag-grid-enterprise */
    "./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.cjs.js");
    /* harmony import */


    var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_8__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(idle, keepalive, authService, router, modalService, userLoggedInService) {
        var _this3 = this;

        _classCallCheck(this, AppComponent);

        this.idle = idle;
        this.keepalive = keepalive;
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.userLoggedInService = userLoggedInService;
        this.title = 'cbas-demo';
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null; // sets an idle timeout of 5 seconds, for testing purposes.

        idle.setIdle(900); // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.

        idle.setTimeout(180); // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document

        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_INTERRUPTSOURCES"]);
        idle.onIdleEnd.subscribe(function () {
          _this3.idleState = 'No longer idle.'; // console.log(this.idleState);

          _this3.reset();
        });
        idle.onTimeout.subscribe(function () {
          _this3.childModal.hide();

          _this3.idleState = 'Timed out!';
          _this3.timedOut = true; // console.log(this.idleState);

          _this3.authService.jwt_logout();

          _this3.router.navigate(['/login']);
        });
        idle.onIdleStart.subscribe(function () {
          _this3.idleState = 'You\'ve gone idle!'; // console.log(this.idleState);

          _this3.childModal.show();
        });
        idle.onTimeoutWarning.subscribe(function (countdown) {
          var minutes = Math.floor(countdown / 60);
          var str = minutes + ' minutes ' + (countdown - minutes * 60);
          _this3.idleState = 'You will time out in ' + str + ' seconds!'; // console.log(this.idleState);
        }); // sets the ping interval to 15 seconds

        keepalive.interval(15);
        keepalive.onPing.subscribe(function () {
          return _this3.lastPing = new Date();
        });
        this.userLoggedInService.getUserLoggedIn().subscribe(function (userLoggedIn) {
          if (userLoggedIn) {
            idle.watch();
            _this3.timedOut = false;
          } else {
            idle.stop();
          }
        });
        ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_8__["LicenseManager"].setLicenseKey('[TRIAL]_10_August_2019_[v2]_MTU2NTM5NTIwMDAwMA==53f1292ef78d2de19c8266ac2435ead81234'); // this.reset();
      }

      _createClass(AppComponent, [{
        key: "reset",
        value: function reset() {
          this.idle.watch(); // this.idleState = 'Started.';

          this.timedOut = false;
        }
      }, {
        key: "hideChildModal",
        value: function hideChildModal() {
          this.childModal.hide();
        }
      }, {
        key: "stay",
        value: function stay() {
          this.childModal.hide();
          this.reset();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.childModal.hide();
          this.userLoggedInService.setUserLoggedIn(false);
          this.authService.jwt_logout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.authService.currentUser.subscribe(function (x) {
            return _this4.currentUser = x;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_4__["Idle"]
      }, {
        type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_5__["Keepalive"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }, {
        type: _shared_services_user_logged_in_service__WEBPACK_IMPORTED_MODULE_7__["UserLoggedInService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal', {
      "static": false
    })], AppComponent.prototype, "childModal", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: MyBrowserXhr, AppConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyBrowserXhr", function () {
      return MyBrowserXhr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
      return AppConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/app-config.service.ts");
    /*tslint:disable:no-inferrable-types*/
    // @Injectable()
    // class MyCookieXSRFStrategy extends CookieXSRFStrategy {
    //   constructor() {
    //     super(',');
    //   }
    // }


    var MyBrowserXhr = /*#__PURE__*/function () {
      function MyBrowserXhr() {
        _classCallCheck(this, MyBrowserXhr);
      }

      _createClass(MyBrowserXhr, [{
        key: "build",
        value: function build() {
          return new XMLHttpRequest();
        }
      }]);

      return MyBrowserXhr;
    }();

    MyBrowserXhr = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], MyBrowserXhr);

    var AppConfig = /*#__PURE__*/function () {
      function AppConfig() {
        _classCallCheck(this, AppConfig);

        this.configLoaded = false;
      }

      _createClass(AppConfig, [{
        key: "load",
        value: function load() {
          var _this5 = this;

          if (this.configLoaded) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
              observer.complete();
            });
          }

          var injector = _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"].create([{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["XhrFactory"],
            useClass: MyBrowserXhr,
            deps: []
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"],
            useClass: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["XhrFactory"]]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            useClass: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"]]
          }, {
            provide: _app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            useClass: _app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
          }]); // const injector2: any = ReflectiveInjector.resolveAndCreate([
          //   { provide: XhrFactory, useClass: BrowserXhr },
          //   { provide: HttpHandler, useClass: HttpXhrBackend },
          //   HttpClient,
          //   AppConfigService
          // ]);


          var configService = injector.get(_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"]); // const configService = new AppConfigService(new HttpClient(new HttpXhrBackend(new BrowserXhr())));

          return configService.getConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (config) {
            _this5.apiEndpointUrl = config.apiEndpointUrl;
            _this5.configLoaded = true;
            return config;
          }));
        }
      }]);

      return AppConfig;
    }();

    AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], AppConfig);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _shared_services_login_in_user_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/services/login-in-user-guard.service */
    "./src/app/shared/services/login-in-user-guard.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/error-page/error-page.component */
    "./src/app/components/error-page/error-page.component.ts");
    /* harmony import */


    var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/components/page-header/page-header.component */
    "./src/app/shared/components/page-header/page-header.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_services_user_logged_in_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/services/user-logged-in.service */
    "./src/app/shared/services/user-logged-in.service.ts");
    /* harmony import */


    var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-idle/keepalive */
    "./node_modules/@ng-idle/keepalive/fesm2015/ng-idle-keepalive.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/app-config.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./app-api-endpoints.config */
    "./src/app/app-api-endpoints.config.ts");
    /* harmony import */


    var ng_busy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng-busy */
    "./node_modules/ng-busy/fesm2015/ng-busy.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shared/interceptors/jwt.interceptor */
    "./src/app/shared/interceptors/jwt.interceptor.ts");
    /* harmony import */


    var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./shared/interceptors/error.interceptor */
    "./src/app/shared/interceptors/error.interceptor.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_27__);
    /* harmony import */


    var _components_current_req_reports_current_req_reports_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/current-req-reports/current-req-reports.component */
    "./src/app/components/current-req-reports/current-req-reports.component.ts");
    /* harmony import */


    var _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./shared/services/acquisition.service */
    "./src/app/shared/services/acquisition.service.ts");
    /* harmony import */


    var _shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./shared/services/smartListConversion.service */
    "./src/app/shared/services/smartListConversion.service.ts");
    /* harmony import */


    var _components_acquisitions_fy_twenty_acquisitions_fy_twenty_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/acquisitions-fy-twenty/acquisitions-fy-twenty.component */
    "./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _components_apprve_spnd_plan_apprve_spnd_plan_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/apprve-spnd-plan/apprve-spnd-plan.component */
    "./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.ts");
    /* harmony import */


    var _components_submit_plan_submit_plan_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/submit-plan/submit-plan.component */
    "./src/app/components/submit-plan/submit-plan.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _shared_components_new_header_new_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./shared/components/new-header/new-header.component */
    "./src/app/shared/components/new-header/new-header.component.ts");
    /* harmony import */


    var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./shared/components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./shared/components/dropdown/dropdown.component */
    "./src/app/shared/components/dropdown/dropdown.component.ts");
    /* harmony import */


    var _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./shared/components/text-input/text-input.component */
    "./src/app/shared/components/text-input/text-input.component.ts");
    /* harmony import */


    var _shared_components_validation_msg_validation_msg_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./shared/components/validation-msg/validation-msg.component */
    "./src/app/shared/components/validation-msg/validation-msg.component.ts");
    /* harmony import */


    var _shared_components_dropdown_search_filter_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./shared/components/dropdown/search-filter.pipe */
    "./src/app/shared/components/dropdown/search-filter.pipe.ts");
    /* harmony import */


    var angular_gridster2__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! angular-gridster2 */
    "./node_modules/angular-gridster2/fesm2015/angular-gridster2.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var _shared_directives_layout_item_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./shared/directives/layout-item.directive */
    "./src/app/shared/directives/layout-item.directive.ts");
    /* harmony import */


    var _shared_components_cell_history_dialog_cell_history_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./shared/components/cell-history-dialog/cell-history-dialog.component */
    "./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__["ErrorPageComponent"], _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_15__["PageHeaderComponent"], _components_current_req_reports_current_req_reports_component__WEBPACK_IMPORTED_MODULE_28__["CurrentReqReportsComponent"], _components_acquisitions_fy_twenty_acquisitions_fy_twenty_component__WEBPACK_IMPORTED_MODULE_31__["AcquisitionsFyTwentyComponent"], _components_apprve_spnd_plan_apprve_spnd_plan_component__WEBPACK_IMPORTED_MODULE_33__["ApprveSpndPlanComponent"], _components_submit_plan_submit_plan_component__WEBPACK_IMPORTED_MODULE_34__["SubmitPlanComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"], _shared_components_new_header_new_header_component__WEBPACK_IMPORTED_MODULE_36__["NewHeaderComponent"], _shared_directives_layout_item_directive__WEBPACK_IMPORTED_MODULE_44__["LayoutItemDirective"], _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_38__["CBASSelectComponent"], _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_38__["CBASMultiSelectComponent"], _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_39__["TextInputComponent"], _shared_components_validation_msg_validation_msg_component__WEBPACK_IMPORTED_MODULE_40__["ValidationMsg"], _shared_components_dropdown_search_filter_pipe__WEBPACK_IMPORTED_MODULE_41__["MultiSelectSearchFilter"], _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_37__["ConfirmDialogComponent"], _shared_components_cell_history_dialog_cell_history_dialog_component__WEBPACK_IMPORTED_MODULE_45__["CellHistoryDialogComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(), _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_18__["NgIdleKeepaliveModule"].forRoot(), ng_busy__WEBPACK_IMPORTED_MODULE_22__["NgBusyModule"], angular_gridster2__WEBPACK_IMPORTED_MODULE_42__["GridsterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_27__["AgGridModule"].withComponents([]), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_32__["TabsModule"].forRoot() // Jas
      ],
      providers: [_shared_services_login_in_user_guard_service__WEBPACK_IMPORTED_MODULE_9__["LoggedInUserGuard"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _shared_services_user_logged_in_service__WEBPACK_IMPORTED_MODULE_17__["UserLoggedInService"], _app_config_service__WEBPACK_IMPORTED_MODULE_19__["AppConfigService"], _app_config__WEBPACK_IMPORTED_MODULE_20__["AppConfig"], _app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_21__["ApiEndpointsConfig"], _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_24__["AdminService"], _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_29__["AcquisitionService"], _shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_30__["SmartListConversionService"], _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_43__["LayoutService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_37__["ConfirmDialogComponent"], _shared_components_cell_history_dialog_cell_history_dialog_component__WEBPACK_IMPORTED_MODULE_45__["CellHistoryDialogComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAcquisitionsFyTwentyAcquisitionsFyTwentyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .customClass > a {\n  background-color: silver !important;\n  border-bottom: none !important;\n  outline: 0 !important; }\n\ninput[type=\"date\"] {\n  position: relative;\n  padding-right: 0px; }\n\n/* create a new arrow, because we are going to mess up the native one\r\nsee \"List of symbols\" below if you want another, you could also try to add a font-awesome icon.. */\n\ninput[type=\"date\"]:after {\n  font-family: FontAwesome;\n  font-weight: 900;\n  content: \"\\f073\";\n  color: #555;\n  padding: 5px 10px;\n  background-color: #007CBA;\n  color: white;\n  border-radius: 0 0 0.3em;\n  cursor: pointer; }\n\n/* change color of symbol on hover */\n\n/* make the native arrow invisible and stretch it over the whole field so you can click anywhere in the input field to trigger the native datepicker*/\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: auto;\n  color: transparent;\n  background: transparent; }\n\n/* adjust increase/decrease button */\n\ninput[type=\"date\"]::-webkit-inner-spin-button {\n  z-index: 1; }\n\n/* adjust clear button */\n\ninput[type=\"date\"]::-webkit-clear-button {\n  z-index: 1; }\n\n::ng-deep .nav-tabs .nav-link.active {\n  color: #007CBA !important;\n  border-color: white white #007CBA white; }\n\n::ng-deep .nav-tabs .nav-link {\n  color: black !important; }\n\na {\n  color: #4A4A4A !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3F1aXNpdGlvbnMtZnktdHdlbnR5L0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhY3F1aXNpdGlvbnMtZnktdHdlbnR5XFxhY3F1aXNpdGlvbnMtZnktdHdlbnR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjcXVpc2l0aW9ucy1meS10d2VudHkvYWNxdWlzaXRpb25zLWZ5LXR3ZW50eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFrQztFQUNsQyw4QkFBOEI7RUFDOUIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtrR0NGa0c7O0FESWxHO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7O0FBR2pCLG9DQUFBOztBQUtBLHFKQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFHekIsb0NBQUE7O0FBQ0E7RUFDRSxVQUFVLEVBQUE7O0FBR1osd0JBQUE7O0FBQ0E7RUFDRyxVQUFVLEVBQUE7O0FBT2I7RUFDRSx5QkFBeUI7RUFDekIsdUNBQXVDLEVBQUE7O0FBR3pDO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjcXVpc2l0aW9ucy1meS10d2VudHkvYWNxdWlzaXRpb25zLWZ5LXR3ZW50eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY3VzdG9tQ2xhc3MgPiBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6c2lsdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuXHJcbi8vIGRhdGUgcGlja2VyIHN0eWxlcyAtIHN0YXJ0XHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4vKiBjcmVhdGUgYSBuZXcgYXJyb3csIGJlY2F1c2Ugd2UgYXJlIGdvaW5nIHRvIG1lc3MgdXAgdGhlIG5hdGl2ZSBvbmVcclxuc2VlIFwiTGlzdCBvZiBzeW1ib2xzXCIgYmVsb3cgaWYgeW91IHdhbnQgYW5vdGhlciwgeW91IGNvdWxkIGFsc28gdHJ5IHRvIGFkZCBhIGZvbnQtYXdlc29tZSBpY29uLi4gKi9cclxuaW5wdXRbdHlwZT1cImRhdGVcIl06YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBmb250LXdlaWdodDogOTAwOyBcclxuICBjb250ZW50OiBcIlxcZjA3M1wiO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjNlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGNoYW5nZSBjb2xvciBvZiBzeW1ib2wgb24gaG92ZXIgKi9cclxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl06aG92ZXI6YWZ0ZXIge1xyXG4vLyAgIGNvbG9yOiAjYmYxNDAwO1xyXG4vLyB9XHJcblxyXG4vKiBtYWtlIHRoZSBuYXRpdmUgYXJyb3cgaW52aXNpYmxlIGFuZCBzdHJldGNoIGl0IG92ZXIgdGhlIHdob2xlIGZpZWxkIHNvIHlvdSBjYW4gY2xpY2sgYW55d2hlcmUgaW4gdGhlIGlucHV0IGZpZWxkIHRvIHRyaWdnZXIgdGhlIG5hdGl2ZSBkYXRlcGlja2VyKi9cclxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBhZGp1c3QgaW5jcmVhc2UvZGVjcmVhc2UgYnV0dG9uICovXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKiBhZGp1c3QgY2xlYXIgYnV0dG9uICovXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XHJcbiAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8vIGRhdGUgcGlja2VyIHN0eWxlcyAtIGVuZFxyXG5cclxuXHJcbi8vbmV3XHJcbjo6bmctZGVlcCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMDdDQkEgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlIHdoaXRlICMwMDdDQkEgd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM0QTRBNEEgIWltcG9ydGFudDtcclxufSIsIjo6bmctZGVlcCAuY3VzdG9tQ2xhc3MgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50OyB9XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cblxuLyogY3JlYXRlIGEgbmV3IGFycm93LCBiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBtZXNzIHVwIHRoZSBuYXRpdmUgb25lXHJcbnNlZSBcIkxpc3Qgb2Ygc3ltYm9sc1wiIGJlbG93IGlmIHlvdSB3YW50IGFub3RoZXIsIHlvdSBjb3VsZCBhbHNvIHRyeSB0byBhZGQgYSBmb250LWF3ZXNvbWUgaWNvbi4uICovXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29udGVudDogXCJcXGYwNzNcIjtcbiAgY29sb3I6ICM1NTU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjNlbTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi8qIGNoYW5nZSBjb2xvciBvZiBzeW1ib2wgb24gaG92ZXIgKi9cbi8qIG1ha2UgdGhlIG5hdGl2ZSBhcnJvdyBpbnZpc2libGUgYW5kIHN0cmV0Y2ggaXQgb3ZlciB0aGUgd2hvbGUgZmllbGQgc28geW91IGNhbiBjbGljayBhbnl3aGVyZSBpbiB0aGUgaW5wdXQgZmllbGQgdG8gdHJpZ2dlciB0aGUgbmF0aXZlIGRhdGVwaWNrZXIqL1xuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi8qIGFkanVzdCBpbmNyZWFzZS9kZWNyZWFzZSBidXR0b24gKi9cbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgei1pbmRleDogMTsgfVxuXG4vKiBhZGp1c3QgY2xlYXIgYnV0dG9uICovXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICB6LWluZGV4OiAxOyB9XG5cbjo6bmctZGVlcCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3Q0JBICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgd2hpdGUgIzAwN0NCQSB3aGl0ZTsgfVxuXG46Om5nLWRlZXAgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XG5cbmEge1xuICBjb2xvcjogIzRBNEE0QSAhaW1wb3J0YW50OyB9XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AcquisitionsFyTwentyComponent */

  /***/
  function srcAppComponentsAcquisitionsFyTwentyAcquisitionsFyTwentyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcquisitionsFyTwentyComponent", function () {
      return AcquisitionsFyTwentyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/acquisition.service */
    "./src/app/shared/services/acquisition.service.ts");
    /*tslint:disable:no-inferrable-types*/


    var AcquisitionsFyTwentyComponent = /*#__PURE__*/function () {
      function AcquisitionsFyTwentyComponent(fb, authService, acquisitionService) {
        var _this6 = this;

        _classCallCheck(this, AcquisitionsFyTwentyComponent);

        this.fb = fb;
        this.authService = authService;
        this.acquisitionService = acquisitionService;
        this.officeList = [];
        this.saveSuccess = false;
        this.acquisitionData = [];
        this.colDefs = [];
        this.editedData = [];
        this.commitmentData = [];
        this.myDatePickerOptions = {
          dateFormat: 'mm/dd/yyyy',
          firstDayOfWeek: 'su',
          sunHighlight: false,
          satHighlight: true,
          showClearDateBtn: false
        };
        this.acquisitionTypesList = [];
        this.officeLists = [];
        this.projectTitleLists = [];
        this.versionLists = [];
        this.gridOptions = {
          context: {
            componentParent: this
          },
          enableColResize: true,
          defaultColDef: {
            filterParams: {
              newRowsAction: 'keep'
            }
          },
          onCellValueChanged: function onCellValueChanged(params) {
            if (params.oldValue !== params.newValue) {
              var changedData = [params.data]; // params.api.updateRowData({ update: changedData });

              _this6.editedData = changedData;
              console.log(_this6.editedData);
            }
          },
          stopEditingWhenGridLosesFocus: true
        };
        this.sideBar = {
          toolPanels: ['columns', 'filters']
        };
        this.acquisitionDropDown();
      }

      _createClass(AcquisitionsFyTwentyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.acquisitionDropDown();
          this.ChangeForm = this.fb.group({
            office: [null],
            ptitle: [null],
            acquisitionType: [null],
            version: [null]
          });
          this.postComittmentForm = this.fb.group({
            projectTitle: [null],
            detailedDescription: [null],
            fundingAmount: [null],
            changeAmount: [null],
            estimatedRevisedAmount: [null],
            estTotFiscalYearAmount: [null],
            estTotProjectValue: [null],
            anticipatedAwardType: [null],
            plannedPOPStartDate: [null],
            plannedPOPEndDate: [null],
            ctpPlannedAwardDate: [null],
            ctpPlannedCommitmentDate: [null],
            numOfDaysUntAcqPackDue: [null],
            existingGrantNumber: [null],
            fbrNumber: [null],
            grantStatus: [null],
            zeroDollarReq: [null],
            collaborationFlag: [null],
            priorityLevel: [null],
            recurringItem: [null],
            corNameAndTelNum: [null],
            ctpLineItem: [null],
            corCertLevel: [null],
            altCorNameAndTelNum: [null],
            altCorCertLevel: [null],
            aatLiasNameAndTelNum: [null],
            codeCFDANum: [null],
            pubOfScintResearch: [null],
            training: [null],
            confSupport: [null],
            papworkRedAct: [null],
            coiReviewDate: [null],
            soleSource: [null],
            smallBusSetAside: [null],
            smallBusInitiative: [null],
            humanSubjects: [null],
            animalSubjects: [null],
            curRequisitionNumber: [null],
            requisitionNumber2: [null],
            requisitionNumber3: [null],
            requisitionNumber4: [null],
            requisitionNumber5: [null],
            colorcode: [null],
            notes: [null],
            anticipatedActionType: [null],
            oagsCutOffDate: [null],
            slaDueDate: [null]
          });
          this.roleList = this.authService.jwt_getRole();
          console.log('this.rolelist', this.roleList);

          if (this.roleList === 'ROLE_ADMIN') {
            this.postComittmentForm.enable();
          } else {
            this.postComittmentForm.disable();
          }
        } // jaswanthi

      }, {
        key: "acquisitionDropDown",
        value: function acquisitionDropDown() {
          var _this7 = this;

          this.acquisitionService.getAcquisitionPreCommitmentData().subscribe(function (args) {
            if (args !== null) {
              _this7.officeLists = args.officeList;
              _this7.acquisitionTypesList = args.acquisitionTypeList;
              _this7.versionLists = args.versionList;
              _this7.projectTitleLists = args.projectTitleList;
            }
          });
        }
      }, {
        key: "onOfficeChangeEvent",
        value: function onOfficeChangeEvent(event) {
          var _this8 = this;

          this.officeName = event.target.value;
          this.ChangeForm.controls.acquisitionType.setValue(null);
          this.ChangeForm.controls.version.setValue(null);
          this.acquisitionService.getAcquisitionPreCommitmentDataWithOffice(this.officeName.slice(3)).subscribe(function (args) {
            if (args !== null) {
              _this8.acquisitionTypesList = args.acquisitionTypeList;
              _this8.versionLists = args.versionList;
              _this8.projectTitleLists = args.projectTitleList;
            }
          });
        }
      }, {
        key: "onPtitleChangeEvent",
        value: function onPtitleChangeEvent(event) {
          this.ptitle = event.target.value;
        }
      }, {
        key: "onVersionChangeEvent",
        value: function onVersionChangeEvent(event) {
          this.version = event.target.value;
        }
      }, {
        key: "onAcquisitionTypeChangeEvent",
        value: function onAcquisitionTypeChangeEvent(event) {
          var _this9 = this;

          this.acquisitionType = event.target.value;
          this.ChangeForm.controls.version.setValue(null);
          this.acquisitionService.getAcquisitionPreCommitmentDataWithAcquisition(this.officeName.slice(3), this.acquisitionType.slice(3)).subscribe(function (args) {
            if (args !== null) {
              _this9.acquisitionTypesList = args.acquisitionTypeList;
              _this9.versionLists = args.versionList;
              _this9.projectTitleLists = args.projectTitleList;
            }
          });
        }
      }, {
        key: "saveAcquisition",
        value: function saveAcquisition() {
          var _this10 = this;

          var a = this.postComittmentForm.value;

          if (this.postComittmentForm.value) {
            switch (a.grantStatus) {
              case 'Active':
                a.grantStatus = '1.0';
                break;

              case 'Cancelled':
                a.grantStatus = '2.0';
                break;

              case null:
                a.grantStatus = a.grantStatus;
                break;

              default:
                break;
            }

            switch (a.corCertLevel) {
              case 'I':
                a.corCertLevel = '1.0';
                break;

              case 'II':
                a.corCertLevel = '2.0';
                break;

              case 'III':
                a.corCertLevel = '3.0';
                break;

              case null:
                a.corCertLevel = a.corCertLevel;
                break;

              default:
                break;
            }

            switch (a.altCorCertLevel) {
              case 'I':
                a.altCorCertLevel = '1.0';
                break;

              case 'II':
                a.altCorCertLevel = '2.0';
                break;

              case 'III':
                a.altCorCertLevel = '3.0';
                break;

              case null:
                a.altCorCertLevel = a.altCorCertLevel;
                break;

              default:
                break;
            }

            switch (a.anticipatedActionType) {
              case 'IDIQ - Competitive':
                a.anticipatedActionType = '1.0';
                break;

              case 'BPA - Competitive':
                a.anticipatedActionType = '2.0';
                break;

              case 'Stand Alone Contract - Competitive':
                a.anticipatedActionType = '3.0';
                break;

              case 'IDIQ - Non Competitive':
                a.anticipatedActionType = '4.0';
                break;

              case 'BPA - Non Competitive':
                a.anticipatedActionType = '5.0';
                break;

              case 'Stand Alone Contract - Non Competitive':
                a.anticipatedActionType = '6.0';
                break;

              case 'TO/DO - Competitive':
                a.anticipatedActionType = '7.0';
                break;

              case 'TO/DO - Non Competitive':
                a.anticipatedActionType = '8.0';
                break;

              case '8(a) Contracts - Non Competitive':
                a.anticipatedActionType = '9.0';
                break;

              case 'GSA/GWAC Services, NO SOW':
                a.anticipatedActionType = '11.0';
                break;

              case 'GSA/GWAC for Services Requiring a SOW':
                a.anticipatedActionType = '12.0';
                break;

              case 'Simplified Acquisition ($25001 - $250000)':
                a.anticipatedActionType = '13.0';
                break;

              case 'Option Exercise':
                a.anticipatedActionType = '14.0';
                break;

              case 'Bilateral Contract Modification':
                a.anticipatedActionType = '16.0';
                break;

              case 'HHS Strategic Sourcing BPA TO/DO - Non Competitive':
                a.anticipatedActionType = '17.0';
                break;

              case 'Basic Ordering Agreement':
                a.anticipatedActionType = '18.0';
                break;

              case 'Broad Agency Announcement':
                a.anticipatedActionType = '19.0';
                break;

              case 'Simplified Acquisition ($10001 to $25000)':
                a.anticipatedActionType = '20.0';
                break;

              case 'Simplified Acquisition Micropurchase <=10000':
                a.anticipatedActionType = '21.0';
                break;

              case 'Unilateral Modification':
                a.anticipatedActionType = '22.0';
                break;

              case 'Advanced Purchase Card Purchase ($3501 - $25000)':
                a.anticipatedActionType = '23.0';
                break;

              case null:
                a.anticipatedActionType = a.anticipatedActionType;
                break;

              default:
                break;
            }

            switch (a.anticipatedAwardType) {
              case 'New - Type 1':
                a.anticipatedAwardType = '1.0';
                break;

              case 'Supplement (Administrative Increase or Program Expansion) Type 3':
                a.anticipatedAwardType = '2.0';
                break;

              case 'Non-Competing Continuation - Type 5':
                a.anticipatedAwardType = '3.0';
                break;

              case 'Competing Continuation - Type 2':
                a.anticipatedAwardType = '4.0';
                break;

              case null:
                a.anticipatedAwardType = a.anticipatedAwardType;
                break;

              default:
                break;
            }

            switch (a.colorcode) {
              case 'Blue':
                a.colorcode = '3.0';
                break;

              case 'Yellow':
                a.colorcode = '4.0';
                break;

              case 'Red':
                a.colorcode = '5.0';
                break;

              case 'Green':
                a.colorcode = '6.0';
                break;

              case null:
                a.colorcode = a.colorcode;
                break;

              default:
                break;
            }

            switch (a.papworkRedAct) {
              case 'Yes':
                a.papworkRedAct = '1.0';
                break;

              case 'No':
                a.papworkRedAct = '2.0';
                break;

              case null:
                a.papworkRedAct = a.papworkRedAct;
                break;

              default:
                break;
            }

            switch (a.collaborationFlag) {
              case 'Yes':
                a.collaborationFlag = '1.0';
                break;

              case 'No':
                a.collaborationFlag = '2.0';
                break;

              case null:
                a.collaborationFlag = a.collaborationFlag;
                break;

              default:
                break;
            }

            switch (a.confSupport) {
              case 'Yes':
                a.confSupport = '1.0';
                break;

              case 'No':
                a.confSupport = '2.0';
                break;

              case null:
                a.confSupport = a.confSupport;
                break;

              default:
                break;
            }

            switch (a.soleSource) {
              case 'Yes':
                a.soleSource = '1.0';
                break;

              case 'No':
                a.soleSource = '2.0';
                break;

              case null:
                a.soleSource = a.soleSource;
                break;

              default:
                break;
            }

            switch (a.training) {
              case 'Yes':
                a.training = '1.0';
                break;

              case 'No':
                a.training = '2.0';
                break;

              case null:
                a.training = a.training;
                break;

              default:
                break;
            }

            switch (a.recurringItem) {
              case 'Yes':
                a.recurringItem = '1.0';
                break;

              case 'No':
                a.recurringItem = '2.0';
                break;

              case null:
                a.recurringItem = a.recurringItem;
                break;

              default:
                break;
            }

            switch (a.zeroDollarReq) {
              case 'Yes':
                a.zeroDollarReq = '1.0';
                break;

              case 'No':
                a.zeroDollarReq = '2.0';
                break;

              case null:
                a.zeroDollarReq = a.zeroDollarReq;
                break;

              default:
                break;
            }

            switch (a.priorityLevel) {
              case 'Mandatory (Required by Law)':
                a.priorityLevel = '1.0';
                break;

              case 'High':
                a.priorityLevel = '2.0';
                break;

              case 'Medium':
                a.priorityLevel = '3.0';
                break;

              case 'Low':
                a.priorityLevel = '4.0';
                break;

              case null:
                a.priorityLevel = a.priorityLevel;
                break;

              default:
                break;
            }

            this.commitmentData = [];
            this.commitmentData.push(this.postComittmentForm.value);
            this.busyTableSave = this.acquisitionService.postAcquisitionData(this.commitmentData, this.officeName.slice(3), this.acquisitionType.slice(3), this.version.slice(3)).subscribe(function (args) {
              _this10.successMessage = 'Your changes have been saved.';
              _this10.saveSuccess = true;

              if (args !== null) {
                console.log('post args', args);
              }
            }, function (e) {
              window.alert('Not updated, something went wrong...' + e);
            });
          }
        }
      }, {
        key: "getAcquisitionFYTwenty",
        value: function getAcquisitionFYTwenty() {
          var _this11 = this;

          this.acquisitionService.getAcquisitionFYTwentyData(this.officeName.slice(3), this.acquisitionType.slice(3), this.version.slice(3), this.ptitle.slice(3)).subscribe(function (a) {
            if (a != null) {
              _this11.projectheader = _this11.ptitle.slice(3);
              console.log(_this11.acquisitionModel, 'parserrrrrrr');

              switch (a[0].anticipatedAwardType) {
                case '1.0':
                  a[0].anticipatedAwardType = 'New - Type 1';
                  break;

                case '2.0':
                  a[0].anticipatedAwardType = 'Supplement (Administrative Increase or Program Expansion) Type 3';
                  break;

                case '3.0':
                  a[0].anticipatedAwardType = 'Non-Competing Continuation - Type 5';
                  break;

                case '4.0':
                  a[0].anticipatedAwardType = 'Competing Continuation - Type 2';
                  break;

                case null:
                  a[0].anticipatedAwardType = a[0].anticipatedAwardType;
                  break;

                default:
                  break;
              }

              switch (a[0].anticipatedActionType) {
                case '1.0':
                  a[0].anticipatedActionType = 'IDIQ - Competitive';
                  break;

                case '2.0':
                  a[0].anticipatedActionType = 'BPA - Competitive';
                  break;

                case '3.0':
                  a[0].anticipatedActionType = 'Stand Alone Contract - Competitive';
                  break;

                case '4.0':
                  a[0].anticipatedActionType = 'IDIQ - Non Competitive';
                  break;

                case '5.0':
                  a[0].anticipatedActionType = 'BPA - Non Competitive';
                  break;

                case '6.0':
                  a[0].anticipatedActionType = 'Stand Alone Contract - Non Competitive';
                  break;

                case '7.0':
                  a[0].anticipatedActionType = 'TO/DO - Competitive';
                  break;

                case '8.0':
                  a[0].anticipatedActionType = 'TO/DO - Non Competitive';
                  break;

                case '9.0':
                  a[0].anticipatedActionType = '8(a) Contracts - Non Competitive';
                  break;

                case '11.0':
                  a[0].anticipatedActionType = 'GSA/GWAC Services, NO SOW';
                  break;

                case '12.0':
                  a[0].anticipatedActionType = 'GSA/GWAC for Services Requiring a SOW';
                  break;

                case '13.0':
                  a[0].anticipatedActionType = 'Simplified Acquisition ($25001 - $250000)';
                  break;

                case '14.0':
                  a[0].anticipatedActionType = 'Option Exercise';
                  break;

                case '16.0':
                  a[0].anticipatedActionType = 'Bilateral Contract Modification';
                  break;

                case '17.0':
                  a[0].anticipatedActionType = 'HHS Strategic Sourcing BPA TO/DO - Non Competitive';
                  break;

                case '18.0':
                  a[0].anticipatedActionType = 'Basic Ordering Agreement';
                  break;

                case '19.0':
                  a[0].anticipatedActionType = 'Broad Agency Announcement';
                  break;

                case '20.0':
                  a[0].anticipatedActionType = 'Simplified Acquisition ($10001 to $25000)';
                  break;

                case '21.0':
                  a[0].anticipatedActionType = 'Simplified Acquisition Micropurchase <=10000';
                  break;

                case '22.0':
                  a[0].anticipatedActionType = 'Unilateral Modification';
                  break;

                case '23.0':
                  a[0].anticipatedActionType = 'Advanced Purchase Card Purchase ($3501 - $25000)';
                  break;

                case null:
                  a[0].anticipatedActionType = a[0].anticipatedActionType;
                  break;

                default:
                  break;
              }

              switch (a[0].grantStatus) {
                case '1.0':
                  a[0].grantStatus = 'Active';
                  break;

                case '2.0':
                  a[0].grantStatus = 'Cancelled';
                  break;

                case null:
                  a[0].grantStatus = a[0].grantStatus;
                  break;

                default:
                  break;
              }

              switch (a[0].colorcode) {
                case '3.0':
                  a[0].colorcode = 'Blue';
                  break;

                case '4.0':
                  a[0].colorcode = 'Yellow';
                  break;

                case '5.0':
                  a[0].colorcode = 'Red';
                  break;

                case '6.0':
                  a[0].colorcode = 'Green';
                  break;

                case null:
                  a[0].colorcode = a[0].colorcode;
                  break;

                default:
                  break;
              }

              switch (a[0].confSupport) {
                case '1.0':
                  a[0].confSupport = 'Yes';
                  break;

                case '2.0':
                  a[0].confSupport = 'No';
                  break;

                case null:
                  a[0].confSupport = a[0].confSupport;
                  break;

                default:
                  break;
              }

              switch (a[0].papworkRedAct) {
                case '1.0':
                  a[0].papworkRedAct = 'Yes';
                  break;

                case '2.0':
                  a[0].papworkRedAct = 'No';
                  break;

                case null:
                  a[0].papworkRedAct = a[0].papworkRedAct;
                  break;

                default:
                  break;
              }

              switch (a[0].collaborationFlag) {
                case '1.0':
                  a[0].collaborationFlag = 'Yes';
                  break;

                case '2.0':
                  a[0].collaborationFlag = 'No';
                  break;

                case null:
                  a[0].collaborationFlag = a[0].collaborationFlag;
                  break;

                default:
                  break;
              }

              switch (a[0].soleSource) {
                case '1.0':
                  a[0].soleSource = 'Yes';
                  break;

                case '2.0':
                  a[0].soleSource = 'No';
                  break;

                case null:
                  a[0].soleSource = a[0].soleSource;
                  break;

                default:
                  break;
              }

              switch (a[0].training) {
                case '1.0':
                  a[0].training = 'Yes';
                  break;

                case '2.0':
                  a[0].training = 'No';
                  break;

                case null:
                  a[0].training = a[0].training;
                  break;

                default:
                  break;
              }

              switch (a[0].recurringItem) {
                case '1.0':
                  a[0].recurringItem = 'Yes';
                  break;

                case '2.0':
                  a[0].recurringItem = 'No';
                  break;

                case null:
                  a[0].recurringItem = a[0].recurringItem;
                  break;

                default:
                  break;
              }

              switch (a[0].zeroDollarReq) {
                case '1.0':
                  a[0].zeroDollarReq = 'Yes';
                  break;

                case '2.0':
                  a[0].zeroDollarReq = 'No';
                  break;

                case null:
                  a[0].zeroDollarReq = a[0].zeroDollarReq;
                  break;

                default:
                  break;
              }

              switch (a[0].priorityLevel) {
                case '1.0':
                  a[0].priorityLevel = 'Mandatory (Required by Law)';
                  break;

                case '2.0':
                  a[0].priorityLevel = 'High';
                  break;

                case '3.0':
                  a[0].priorityLevel = 'Medium';
                  break;

                case '4.0':
                  a[0].priorityLevel = 'Low';
                  break;

                case null:
                  a[0].priorityLevel = a[0].priorityLevel;
                  break;

                default:
                  break;
              }

              switch (a[0].corCertLevel) {
                case '1.0':
                  a[0].corCertLevel = 'I';
                  break;

                case '2.0':
                  a[0].corCertLevel = 'II';
                  break;

                case '3.0':
                  a[0].corCertLevel = 'III';
                  break;

                case null:
                  a[0].corCertLevel = a[0].corCertLevel;
                  break;

                default:
                  break;
              }

              switch (a[0].altCorCertLevel) {
                case '1.0':
                  a[0].altCorCertLevel = 'I';
                  break;

                case '2.0':
                  a[0].altCorCertLevel = 'II';
                  break;

                case '3.0':
                  a[0].altCorCertLevel = 'III';
                  break;

                case null:
                  a[0].altCorCertLevel = a[0].altCorCertLevel;
                  break;

                default:
                  break;
              }

              _this11.acquisitionModel = a[0]; // this.postComittmentForm.controls.projectTitle.setValue(this.acquisitionModel.projectTitle);
              // this.postComittmentForm

              _this11.postComittmentForm.setValue(_this11.acquisitionModel);
            }
          });
        }
      }]);

      return AcquisitionsFyTwentyComponent;
    }();

    AcquisitionsFyTwentyComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__["AcquisitionService"]
      }];
    };

    AcquisitionsFyTwentyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-acquisitions-fy-twenty',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./acquisitions-fy-twenty.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./acquisitions-fy-twenty.component.scss */
      "./src/app/components/acquisitions-fy-twenty/acquisitions-fy-twenty.component.scss"))["default"]]
    })], AcquisitionsFyTwentyComponent);
    /***/
  },

  /***/
  "./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsApprveSpndPlanApprveSpndPlanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .ag-theme-balham .ag-header-cell {\n  background-color: #007CBA;\n  color: white; }\n\n::ng-deep .ag-theme-balham .ag-ltr .ag-cell {\n  border-right: 1px solid gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHBydmUtc3BuZC1wbGFuL0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBydmUtc3BuZC1wbGFuXFxhcHBydmUtc3BuZC1wbGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQ0YsRUFBQTs7QUFFQTtFQUNFLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHBydmUtc3BuZC1wbGFuL2FwcHJ2ZS1zcG5kLXBsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmFnLXRoZW1lLWJhbGhhbSAuYWctaGVhZGVyLWNlbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuYWctdGhlbWUtYmFsaGFtIC5hZy1sdHIgLmFnLWNlbGwge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ApprveSpndPlanComponent */

  /***/
  function srcAppComponentsApprveSpndPlanApprveSpndPlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApprveSpndPlanComponent", function () {
      return ApprveSpndPlanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/acquisition.service */
    "./src/app/shared/services/acquisition.service.ts");
    /* harmony import */


    var src_app_shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/smartListConversion.service */
    "./src/app/shared/services/smartListConversion.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /*tslint:disable:no-inferrable-types*/


    var ApprveSpndPlanComponent = /*#__PURE__*/function () {
      function ApprveSpndPlanComponent(fb, authService, acquisitionService, smartListService, modalService) {
        var _this12 = this;

        _classCallCheck(this, ApprveSpndPlanComponent);

        this.fb = fb;
        this.authService = authService;
        this.acquisitionService = acquisitionService;
        this.smartListService = smartListService;
        this.modalService = modalService;
        this.isDataPresent = false;
        this.officeList = [];
        this.acquisitionData = [];
        this.colDefs = [];
        this.editedData = [];
        this.saveSuccess = false;
        this.rowsSelected = false;
        this.sideBar = {
          toolPanels: ['columns', 'filters']
        };
        this.gridOptions = {
          context: {
            componentParent: this
          },
          enableColResize: true,
          defaultColDef: {
            resizable: true,
            filterParams: {
              newRowsAction: 'keep'
            }
          },
          onCellValueChanged: function onCellValueChanged(params) {
            if (params.oldValue !== params.newValue) {
              var changedData = [params.data]; // params.api.updateRowData({ update: changedData });

              _this12.editedData = changedData;
              console.log(_this12.editedData);
            }
          },
          stopEditingWhenGridLosesFocus: true
        };
      }

      _createClass(ApprveSpndPlanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.ChangeForm = this.fb.group({
            office: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            search: [null]
          });
          this.changeStatusForm = this.fb.group({
            action: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nextOwner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comments: [null]
          });
          this.roleList = this.authService.jwt_getRole();
          this.acquisitionService.getAcquisitionOfficeData().subscribe(function (args) {
            _this13.officeList = args;
            console.log('argsoffice', args);
          }); // this.acquisition();
        }
      }, {
        key: "onFilterTextBoxChanged",
        value: function onFilterTextBoxChanged() {
          this.gridApi.setQuickFilter(this.ChangeForm.controls.search.value);
        }
      }, {
        key: "openSubmitDialog",
        value: function openSubmitDialog() {
          var initialState = {
            list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
            title: 'Submit Changes',
            approveScreen: true,
            submitScreen: false
          };
          this.bsModalRef = this.modalService.show(src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
          this.bsModalRef.content.submitBtnName = 'Submit';
        }
      }, {
        key: "GetData",
        value: function GetData() {
          if (this.ChangeForm.valid) {
            // to do
            console.log(this.ChangeForm.value);
          }
        }
      }, {
        key: "onOfficeChangeEvent",
        value: function onOfficeChangeEvent(event) {
          this.officeName = event.target.value;
          this.officeCtp = this.officeName.slice(3);
        }
      }, {
        key: "acquisition",
        value: function acquisition() {
          var _this14 = this;

          this.busyTableSave = this.acquisitionService.getAcquisitionCTPDataWithOptional(this.officeCtp, this.roleList).subscribe(function (args) {
            _this14.isDataPresent = true;
            console.log('this.rolelist', _this14.authService.jwt_getRole());

            if (args != null && args.length > 0) {
              _this14.getColDefs();

              _this14.acquisitionData = args;

              _this14.smartListService.getSmartList(_this14.acquisitionData);

              _this14.autoSizeCols(false);
            } else {
              _this14.acquisitionData = [];
            }
          });
        }
      }, {
        key: "autoSizeCols",
        value: function autoSizeCols(skipHeader) {
          var allColumnIds = [];
          this.gridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
          });
          this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
        }
      }, {
        key: "resetState",
        value: function resetState() {
          this.ChangeForm.controls.filter.setValue(null);
          this.gridColumnApi.resetColumnState();
          this.gridColumnApi.resetColumnGroupState();
          this.gridApi.setSortModel(null);
          this.gridApi.setFilterModel(null);
        }
      }, {
        key: "isUserAdmin",
        value: function isUserAdmin() {
          return this.roleList === 'ROLE_ADMIN' ? true : false;
        }
      }, {
        key: "changeStatus",
        value: function changeStatus() {}
      }, {
        key: "submitChangeStatus",
        value: function submitChangeStatus() {
          console.log('this.changeStatusForm.controls.action.value', this.changeStatusForm.controls.action.value);

          if (this.changeStatusForm.controls.action.value === 'Reject') {
            this.changeStatusMessage = 'The following changes have been rejected';
          } else {
            this.saveSuccess = true;
            this.changeStatusMessage = 'The status changes have been saved and submitted';
          }
        }
      }, {
        key: "onActionChange",
        value: function onActionChange(e) {
          console.log('action', e.target.value);
        }
      }, {
        key: "currencyFormatter",
        value: function currencyFormatter(params) {
          return '\x24' + this.formatNumber(params.value);
        }
      }, {
        key: "formatNumber",
        value: function formatNumber(params) {
          return Math.floor(params).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
      }, {
        key: "formatDecimal",
        value: function formatDecimal(params) {
          console.log(params.value, 'number');
          return params.value !== null ? Math.floor(params.value) : '';
        }
      }, {
        key: "bracketsFormatter",
        value: function bracketsFormatter(params) {
          var i = Math.floor(params.value).toString();

          if (i !== null && i[0] === '-') {
            return i[0] !== '-' ? this.formatNumber(i) : '($' + i.substr(1) + ')';
          } else {
            return i === null ? '' : '$' + i;
          }
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.sizeColumnsToFit();
        }
      }, {
        key: "onRowClicked",
        value: function onRowClicked(params) {
          console.log('row', params);
        }
      }, {
        key: "onSelectionChanged",
        value: function onSelectionChanged(params) {
          console.log('row', params);
          this.selectedEntity = this.gridApi.getSelectedRows();

          if (this.selectedEntity.length > 0) {
            console.log(this.selectedEntity);
            this.rowsSelected = true;
          } else {
            this.rowsSelected = false;
          }
        }
      }, {
        key: "getColDefs",
        value: function getColDefs() {
          this.colDefs = [{
            headerName: 'CTP Number',
            field: 'ctpLineItem',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            checkboxSelection: true,
            suppressSizeToFit: true
          }, {
            headerName: 'Project Title',
            field: 'projectTitle',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            suppressSizeToFit: true
          }, {
            headerName: 'FBR Number',
            field: 'fbrNumber',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            suppressSizeToFit: true
          }, // {
          //   headerName: 'Detailed Description',
          //   field: 'detailedDescription',
          //   filter: 'agSetColumnFilter',
          //   editable: this.isUserAdmin()
          // },
          {
            headerName: 'Action Type',
            field: 'anticipatedActionType',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['IDIQ - Competitive', 'BPA - Competitive', 'Stand Alone Contract - Competitive', 'IDIQ - Non Competitive', 'BPA - Non Competitive', 'Stand Alone Contract - Non Competitive', 'TO/DO - Competitive', 'TO/DO - Non Competitive', '8(a) Contracts - Non Competitive', 'GSA/GWAC Services, NO SOW', 'GSA/GWAC for Services Requiring a SOW', 'Simplified Acquisition ($25001 - $250000)', 'Option Exercise', 'Bilateral Contract Modification', 'HHS Strategic Sourcing BPA TO/DO - Non Competitive', 'Basic Ordering Agreement', 'Broad Agency Announcement', 'Simplified Acquisition ($10001 to $25000)', 'Simplified Acquisition Micropurchase <=10000', 'Unilateral Modification', 'Advanced Purchase Card Purchase ($3501 - $25000)']
            },
            suppressSizeToFit: true
          }, {
            headerName: 'CTP Planned Award Date',
            field: 'ctpPlannedAwardDate',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            suppressSizeToFit: true,
            cellStyle: {
              'text-align': 'right'
            }
          }, {
            headerName: 'Zero Dollar Requisition',
            field: 'zeroDollarReq',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            }
          }, {
            headerName: 'Spend Plan',
            field: 'fundingAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            }
          }, {
            headerName: 'Change Amount',
            field: 'changeAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            valueFormatter: this.bracketsFormatter,
            cellStyle: function cellStyle(params) {
              if (params.value !== null) {
                return params.value[0] === '-' ? {
                  color: 'red',
                  'text-align': 'right'
                } : {
                  color: 'black',
                  'text-align': 'right'
                };
              } else {
                return {
                  color: 'black',
                  'text-align': 'right'
                };
              }
            }
          }, {
            headerName: 'Estimated Revised Amount',
            field: 'estimatedRevisedAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            }
          }];
          this.rowSelection = 'multiple';
        }
      }]);

      return ApprveSpndPlanComponent;
    }();

    ApprveSpndPlanComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__["AcquisitionService"]
      }, {
        type: src_app_shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_5__["SmartListConversionService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }];
    };

    ApprveSpndPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apprve-spnd-plan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apprve-spnd-plan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apprve-spnd-plan.component.scss */
      "./src/app/components/apprve-spnd-plan/apprve-spnd-plan.component.scss"))["default"]]
    })], ApprveSpndPlanComponent);
    /***/
  },

  /***/
  "./src/app/components/current-req-reports/current-req-reports.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/current-req-reports/current-req-reports.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCurrentReqReportsCurrentReqReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .ag-theme-balham .ag-header-cell {\n  background-color: #007CBA;\n  color: white; }\n\n::ng-deep .ag-theme-balham .ag-ltr .ag-cell {\n  border-right: 1px solid gray; }\n\n.modal-header {\n  color: #007CBA; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW50LXJlcS1yZXBvcnRzL0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjdXJyZW50LXJlcS1yZXBvcnRzXFxjdXJyZW50LXJlcS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQ0YsRUFBQTs7QUFFQTtFQUNFLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVudC1yZXEtcmVwb3J0cy9jdXJyZW50LXJlcS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5hZy10aGVtZS1iYWxoYW0gLmFnLWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmFnLXRoZW1lLWJhbGhhbSAuYWctbHRyIC5hZy1jZWxsIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjMDA3Q0JBO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/current-req-reports/current-req-reports.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/current-req-reports/current-req-reports.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CurrentReqReportsComponent */

  /***/
  function srcAppComponentsCurrentReqReportsCurrentReqReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentReqReportsComponent", function () {
      return CurrentReqReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/acquisition.service */
    "./src/app/shared/services/acquisition.service.ts");
    /* harmony import */


    var src_app_shared_models_dropdown_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/models/dropdown.model */
    "./src/app/shared/models/dropdown.model.ts");
    /* harmony import */


    var src_app_shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/smartListConversion.service */
    "./src/app/shared/services/smartListConversion.service.ts");
    /* harmony import */


    var src_app_shared_services_grid_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/grid.service */
    "./src/app/shared/services/grid.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");

    var CurrentReqReportsComponent = /*#__PURE__*/function () {
      function CurrentReqReportsComponent(fb, authService, acquisitionService, smartListService, gridService, modalService) {
        var _this15 = this;

        _classCallCheck(this, CurrentReqReportsComponent);

        this.fb = fb;
        this.authService = authService;
        this.acquisitionService = acquisitionService;
        this.smartListService = smartListService;
        this.gridService = gridService;
        this.modalService = modalService;
        this.officeList = [];
        this.acquisitionData = [];
        this.colDefs = [];
        this.editedData = [];
        this.isDataPresent = false;
        this.stateSave = false;
        this.gridOptions = {
          context: {
            componentParent: this
          },
          enableColResize: true,
          defaultColDef: {
            // rowDrag: true,
            resizable: true,
            filterParams: {
              newRowsAction: 'keep'
            }
          },
          onCellValueChanged: function onCellValueChanged(params) {
            if (params.oldValue !== params.newValue) {
              var changedData = params.data; // params.api.updateRowData({ update: changedData });

              _this15.editedData.push(changedData);

              console.log(_this15.editedData);
            }
          },
          stopEditingWhenGridLosesFocus: true,
          enableCharts: true,
          enableRangeSelection: true
        };
        this.sideBar = {
          toolPanels: ['columns', 'filters']
        };
      }

      _createClass(CurrentReqReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filterData();
          this.acquisitionDropDown();
          this.ChangeForm = this.fb.group({
            office: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ptitle: [],
            acquisitionType: [null],
            version: [null],
            search: [null],
            filter: [null]
          });
          this.roleList = this.authService.jwt_getRole();
          this.acquisitionDropDownData = new src_app_shared_models_dropdown_model__WEBPACK_IMPORTED_MODULE_5__["DropDownModel"]();
        }
      }, {
        key: "filterData",
        value: function filterData() {
          var _this16 = this;

          var userId = localStorage.getItem('UserID');
          this.busyTableSave = this.acquisitionService.getAcquisitionGridFilter(userId).subscribe(function (args) {
            if (args) {
              args.forEach(function (el) {
                el.filterJson = JSON.parse(el.filterJson);
              });
              _this16.filterJson = args; // this.filterJson = args.map(m => ({id: m.userFilterId, name: m.filterName, filterJson: m.filterJson}));

              console.log(_this16.filterJson);
            }
          });
        }
      }, {
        key: "ondateRangeEndingChanged",
        value: function ondateRangeEndingChanged(e) {
          console.log('e', e);
        }
      }, {
        key: "acquisitionDropDown",
        value: function acquisitionDropDown() {
          var _this17 = this;

          this.acquisitionService.getAcquisitionPreCommitmentData().subscribe(function (args) {
            _this17.acquisitionDropDownData = args;
            console.log(_this17.acquisitionDropDownData.officeList, 'AAAAAA');
          });
        }
      }, {
        key: "onOfficeChangeEvent",
        value: function onOfficeChangeEvent(event) {
          this.officeName = event.target.value;
        }
      }, {
        key: "onPtitleChangeEvent",
        value: function onPtitleChangeEvent(event) {
          this.ptitle = event.target.value;
        }
      }, {
        key: "onVersionChangeEvent",
        value: function onVersionChangeEvent(event) {
          this.version = event.target.value;
        }
      }, {
        key: "onAcquisitionTypeChangeEvent",
        value: function onAcquisitionTypeChangeEvent(event) {
          this.acquisitionType = event.target.value;
        }
      }, {
        key: "onFilterTextBoxChanged",
        value: function onFilterTextBoxChanged() {
          this.gridApi.setQuickFilter(this.ChangeForm.controls.search.value);
        }
      }, {
        key: "onFilterChangeEvent",
        value: function onFilterChangeEvent(event) {
          var sortModel = null;
          var colModel = null;
          var filterModel = null;
          var groupModel = null;
          this.filterJson.forEach(function (element) {
            if (event === element.filterName) {
              // console.log("element.sort", JSON.parse(element.filterJson));
              // const gridState = JSON.parse(element.filterJson);
              // const gridColumnState = JSON.parse(gridState.colState)
              sortModel = element.filterJson.sortState;
              colModel = element.filterJson.colState;
              filterModel = element.filterJson.filterState;
              groupModel = element.filterJson.groupState; // this.gridColumnApi.setGroupState(element.groupState);
            }
          });
          this.gridApi.setSortModel(sortModel);
          this.gridColumnApi.setColumnState(colModel);
          this.gridApi.setFilterModel(filterModel);
          this.gridColumnApi.setColumnGroupState(groupModel);
        }
      }, {
        key: "resetState",
        value: function resetState() {
          this.ChangeForm.controls.filter.setValue(null);
          this.gridColumnApi.resetColumnState();
          this.gridColumnApi.resetColumnGroupState();
          this.gridApi.setSortModel(null);
          this.gridApi.setFilterModel(null);
        }
      }, {
        key: "saveState",
        value: function saveState() {
          var _this18 = this;

          var initialGridState = {
            filterName: this.gridFilter,
            filterJson: JSON.stringify({
              colState: this.gridColumnApi.getColumnState(),
              groupState: this.gridColumnApi.getColumnGroupState(),
              sortState: this.gridApi.getSortModel(),
              filterState: this.gridApi.getFilterModel()
            }),
            filterCategory: '',
            userId: localStorage.getItem('UserID')
          };
          this.busyTableSave = this.acquisitionService.postAcquisitionGridFilter(JSON.stringify(initialGridState)).subscribe(function (args) {
            console.log(args);
          }, function (e) {
            _this18.stateSave = true;

            _this18.filterData();
          }); // window['colState'] = this.gridColumnApi.getColumnState();
          // window['groupState'] = this.gridColumnApi.getColumnGroupState();
          // window['sortState'] = this.gridApi.getSortModel();
          // window['filterState'] = this.gridApi.getFilterModel();
          // localStorage.setItem('colState1', JSON.stringify(window['colState']));
          // localStorage.setItem('colState1Sort', JSON.stringify(window['sortState']));
          // localStorage.setItem('colState1Filter', JSON.stringify(window['filterState']));
          // console.log("JSON.stringify(window['filterState'])", JSON.stringify(window['filterState']));
          // localStorage.setItem('colState1Group', window['groupState']);
          // console.log("column state saved");
        }
      }, {
        key: "acquisition",
        value: function acquisition() {
          var _this19 = this;

          console.log('this.reports', this.officeName, this.officeName.slice(3));
          this.busyTableSave = this.acquisitionService.getAcquisitionCTPData(this.officeName.slice(3), this.acquisitionType.slice(3), this.version.slice(3), this.roleList).subscribe(function (args) {
            _this19.isDataPresent = true;

            if (args !== null && args.length > 0) {
              _this19.getColDefs();

              _this19.acquisitionData = args;

              _this19.smartListService.getSmartList(_this19.acquisitionData);

              _this19.autoSizeCols(false);
            } else {
              _this19.acquisitionData = [];
            }
          });
        }
      }, {
        key: "autoSizeCols",
        value: function autoSizeCols(skipHeader) {
          var allColumnIds = [];
          this.gridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
          });
          this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
        }
      }, {
        key: "isUserAdmin",
        value: function isUserAdmin() {
          return this.roleList === 'ROLE_ADMIN' ? true : false; // return true;
        }
      }, {
        key: "postAcquisition",
        value: function postAcquisition() {
          var _this20 = this;

          if (this.editedData.length > 0) {
            this.smartListService.smartListToNumbers(this.editedData);
            this.busyTableSave = this.acquisitionService.postAcquisitionData(this.editedData, this.officeName.slice(3), this.acquisitionType.slice(3), this.version.slice(3)).subscribe(function (args) {
              _this20.editedData = [];

              if (args !== null) {
                console.log('post args', args);
              }
            }, function (e) {
              window.alert('Not updated, something went wrong...' + e);
            });
          }
        }
      }, {
        key: "dataConversion",
        value: function dataConversion(a) {
          switch (a) {
            case '1.0':
              a = 'Yes';
              break;

            case '2.0':
              a = 'No';
              break;

            case null:
              a = a;
              break;

            default:
              break;
          }
        }
      }, {
        key: "currencyFormatter",
        value: function currencyFormatter(params) {
          var i = this.formatNumber(params.value);
          return i !== '' ? '\x24' + i : '';
        }
      }, {
        key: "formatNumber",
        value: function formatNumber(params) {
          // (number.value !== null && number.value !== undefined) ? Math.floor(number.value) : ''
          return params !== null && params !== undefined ? Math.floor(params).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : '';
        }
      }, {
        key: "formatDecimal",
        value: function formatDecimal(params) {
          console.log(params.value, 'number');
          return params.value !== null && params.value !== undefined ? Math.floor(params.value) : '';
        }
      }, {
        key: "bracketsFormatter",
        value: function bracketsFormatter(params) {
          if (params.value !== null && params.value[0] === '-') {
            return params.value[0] !== '-' ? this.formatNumber(params.value) : '(' + params.value.substr(1) + ')';
          } else {
            return params.value === null ? '' : '$' + params.value;
          }
        }
      }, {
        key: "getColDefs",
        value: function getColDefs() {
          this.colDefs = [{
            headerName: 'CTP Number',
            field: 'ctpLineItem',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            suppressMenuHide: true
          }, {
            headerName: 'Project Title',
            field: 'projectTitle',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true
          }, {
            headerName: 'Detailed Description',
            field: 'detailedDescription',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true
          }, {
            headerName: 'Funding Amount',
            field: 'fundingAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, // {
          //   headerName: 'Change Amount',
          //   field: 'changeAmount',
          //   filter: 'agSetColumnFilter',
          //   editable: this.isUserAdmin(),
          //   valueFormatter: this.bracketsFormatter,
          //   cellStyle: (params) => {
          //     if (params.value !== null) {
          //       return params.value[0] === '-' ? { color: 'red' } : { color: 'black' }
          //     } else {
          //       return { color: 'black' };
          //     }
          //   }
          // },
          {
            headerName: 'Estimated Revised Amount',
            field: 'estimatedRevisedAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'Estimated Total Fiscal Year Amount',
            field: 'estTotFiscalYearAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'Anticipated Action Type',
            field: 'anticipatedActionType',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['IDIQ - Competitive', 'BPA - Competitive', 'Stand Alone Contract - Competitive', 'IDIQ - Non Competitive', 'BPA - Non Competitive', 'Stand Alone Contract - Non Competitive', 'TO/DO - Competitive', 'TO/DO - Non Competitive', '8(a) Contracts - Non Competitive', 'GSA/GWAC Services, NO SOW', 'GSA/GWAC for Services Requiring a SOW', 'Simplified Acquisition ($25001 - $250000)', 'Option Exercise', 'Bilateral Contract Modification', 'HHS Strategic Sourcing BPA TO/DO - Non Competitive', 'Basic Ordering Agreement', 'Broad Agency Announcement', 'Simplified Acquisition ($10001 to $25000)', 'Simplified Acquisition Micropurchase <=10000', 'Unilateral Modification', 'Advanced Purchase Card Purchase ($3501 - $25000)']
            },
            sortable: true,
            enableRowGroup: true
          }, {
            headerName: 'OAGS Cut-Off Date',
            field: 'oagsCutOffDate',
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'SLA Due Date',
            field: 'slaDueDate',
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'Estimated Total Project Value',
            field: 'estTotProjectValue',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'Grants - Anticipated Award Type',
            field: 'anticipatedAwardType',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['New - Type 1', 'Supplement (Administrative Increase or Program Expansion) Type 3', 'Non-Competing Continuation - Type 5', 'Competing Continuation - Type 2']
            },
            sortable: true
          }, {
            headerName: 'Planned PoP Start Date',
            field: 'plannedPOPStartDate',
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'datePicker',
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'Planned PoP End Date',
            field: 'plannedPOPEndDate',
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'datePicker',
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'CTP Planned Award Date',
            field: 'ctpPlannedAwardDate',
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'datePicker',
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'CTP Planned Commitment Date',
            field: 'ctpPlannedCommitmentDate',
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'datePicker',
            enablePivot: true,
            enableRowGroup: true,
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'Number of Days until Acquisitions Package Due',
            field: 'numOfDaysUntAcqPackDue',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'Existing Grant Number',
            field: 'existingGrantNumber',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'Grant Status',
            field: 'grantStatus',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Active', 'Cancelled']
            },
            sortable: true
          }, {
            headerName: 'Zero Dollar Requisition',
            field: 'zeroDollarReq',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            },
            sortable: true
          }, {
            headerName: 'Collaboration Flag',
            field: 'collaborationFlag',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            },
            sortable: true
          }, {
            headerName: 'Priority Level',
            field: 'priorityLevel',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Mandatory (Required by Law)', 'High', 'Medium', 'Low']
            },
            sortable: true
          }, {
            headerName: 'Recurring Item',
            field: 'recurringItem',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            },
            sortable: true
          }, {
            headerName: 'COR Name and Telephone',
            field: 'altCorNameAndTelNum',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'COR Certification Level',
            field: 'altCorCertLevel',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['I', 'II', 'III']
            },
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'Alternate COR Name and Telephone',
            field: 'aatLiasNameAndTelNum',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'Alternate COR Certification Level',
            field: 'codeCFDANum',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'AAT Liaison Name and Telephone',
            field: 'pubOfScintResearch',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'Training',
            field: 'training',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            },
            sortable: true
          }, {
            headerName: 'Conference Support',
            field: 'confSupport',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            },
            sortable: true
          }, {
            headerName: 'Paperwork Reduction Act',
            field: 'papworkRedAct',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            },
            sortable: true
          }, {
            headerName: 'COI Review Date',
            field: 'coiReviewDate',
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'datePicker',
            cellStyle: {
              'text-align': 'right'
            },
            sortable: true
          }, {
            headerName: 'Sole Source',
            field: 'soleSource',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            },
            sortable: true
          }, {
            headerName: 'Alias Name1',
            field: 'smallBusSetAside',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            hide: true
          }, {
            headerName: 'Alias Name1',
            field: 'smallBusInitiative',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            hide: true
          }, // {
          // headerName: 'Subjects',
          // children: [
          {
            headerName: 'Human Subjects',
            field: 'humanSubjects',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            hide: true
          }, {
            headerName: 'Animal Subjects',
            field: 'animalSubjects',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            hide: true
          }, // ]
          // },
          // {
          //   headerName: 'Requisition Number',
          //   children: [
          {
            headerName: 'Current Requisition Number',
            field: 'curRequisitionNumber',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            enableRowGroup: true,
            enablePivot: true,
            valueFormatter: this.formatDecimal.bind(this),
            sortable: true
          }, {
            headerName: 'Requisition Number 2',
            field: 'requisitionNumber2',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin()
          }, {
            headerName: 'Requisition Number 3',
            field: 'requisitionNumber3',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin()
          }, {
            headerName: 'Requisition Number 4',
            field: 'requisitionNumber4',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin()
          }, {
            headerName: 'Requisition Number 5',
            field: 'requisitionNumber5',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin()
          }, //   ]
          // },
          {
            headerName: 'Color Code',
            field: 'colorcode',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Blue', 'Yello', 'Red', 'Green']
            },
            cellStyle: {
              'text-align': 'center'
            }
          }, {
            headerName: 'Notes',
            field: 'notes',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            valueFormatter: this.formatDecimal.bind(this)
          }];
          this.components = {
            datePicker: this.getDatePicker()
          };
        }
      }, {
        key: "getDatePicker",
        value: function getDatePicker() {
          function Datepicker() {}

          Datepicker.prototype.init = function (params) {
            this.eInput = document.createElement('input');
            this.eInput.value = params.value; // $(this.eInput).datepicker({ dateFormat: 'dd/mm/yy' });
          };

          Datepicker.prototype.getGui = function () {
            return this.eInput;
          };

          Datepicker.prototype.afterGuiAttached = function () {
            this.eInput.focus();
            this.eInput.select();
          };

          Datepicker.prototype.getValue = function () {
            return this.eInput.value;
          };

          Datepicker.prototype.destroy = function () {};

          Datepicker.prototype.isPopup = function () {
            return false;
          };

          return Datepicker;
        } // onGridReady(params) {
        //   this.gridService.onGridReady(params);
        // }

      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.sizeColumnsToFit();
        }
      }, {
        key: "openModalWithComponent",
        value: function openModalWithComponent() {
          var initialState = {
            list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
            title: 'Modal with component'
          };
          this.bsModalRef = this.modalService.show(src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
          this.bsModalRef.content.submitBtnName = 'Submit';
        }
      }]);

      return CurrentReqReportsComponent;
    }();

    CurrentReqReportsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__["AcquisitionService"]
      }, {
        type: src_app_shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_6__["SmartListConversionService"]
      }, {
        type: src_app_shared_services_grid_service__WEBPACK_IMPORTED_MODULE_7__["GridService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
      }];
    };

    CurrentReqReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-current-req-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./current-req-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-req-reports/current-req-reports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./current-req-reports.component.scss */
      "./src/app/components/current-req-reports/current-req-reports.component.scss"))["default"]]
    })], CurrentReqReportsComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .toolbar {\n  height: 100px;\n  display: flex; }\n\n:host gridster {\n  display: flex;\n  height: calc(100vh - 115px);\n  flex-direction: column; }\n\n:host button {\n  height: 30px; }\n\n:host .draggable {\n  padding: 10px;\n  width: 200px;\n  border: solid 2px #000;\n  margin-left: 20px;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxhc2FwYVxcR2l0SHViXFxUZXN0VUlJbnN0YW5jZVxcY2Jhcy1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFKbkI7RUFRTSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQVY1QjtFQWNNLFlBQVksRUFBQTs7QUFkbEI7RUFrQk0sYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5Q0FBeUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAudG9vbGJhciB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBncmlkc3RlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExNXB4KTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5kcmFnZ2FibGUge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMnB4ICMwMDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(layoutService) {
        _classCallCheck(this, DashboardComponent);

        this.layoutService = layoutService;
        this.alertMessage = "You have 4 deadlines that need your attention";
        /*this is for line chart*/

        this.lineChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.chartData = [{
          data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
          label: 'Spend Plan'
        }, {
          data: [200, 3500, 4100],
          label: 'Actuals'
        }];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // for colors

        this.myColors = [{
          backgroundColor: 'rgba(103, 58, 183, .1)',
          borderColor: 'rgb(103, 58, 183)',
          pointBackgroundColor: 'rgb(103, 58, 183)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
        }];
        /*end of line chart*/

        /*this is for second line chart*/

        this.contractchartData = [{
          data: [0, 200, 400, 600, 800, 1000, 1200],
          label: 'contact'
        }];
        this.contractchartLabels = ['FY16', 'FY17', 'FY18', 'FY19', 'FY20'];
        this.pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
        this.pieChartData = [220, 150, 180, 90];
        this.pieChartType = 'pie';
      }
      /*end of line chart*/


      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*this is for grid*/
          this.columnDefs = [{
            headerName: 'Name',
            field: 'make'
          }, {
            headerName: 'Requester',
            field: 'model'
          }, {
            headerName: 'Request Date',
            field: 'price'
          }, {
            headerName: 'Current Status',
            field: 'price'
          }];
          this.rowData = [{
            make: 'Toyota',
            model: 'Celica',
            price: 35000
          }, {
            make: 'Ford',
            model: 'Mondeo',
            price: 32000
          }, {
            make: 'Porsche',
            model: 'Boxter',
            price: 72000
          }];
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.sizeColumnsToFit();
        } // line chart click event

      }, {
        key: "onChartClick",
        value: function onChartClick(event) {
          console.log("chart clicked");
          console.log(event);
        }
      }, {
        key: "onContractChangeEvent",
        value: function onContractChangeEvent(e) {}
      }, {
        key: "contractonChartClick",
        value: function contractonChartClick(e) {}
      }, {
        key: "options",
        get: function get() {
          return this.layoutService.options;
        }
      }, {
        key: "layout",
        get: function get() {
          return this.layoutService.layout;
        }
      }, {
        key: "components",
        get: function get() {
          return this.layoutService.components;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/components/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/error-page/error-page.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/error-page/error-page.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsErrorPageErrorPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/error-page/error-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/error-page/error-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppComponentsErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent(route) {
        _classCallCheck(this, ErrorPageComponent);

        this.route = route;
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error-page/error-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-page.component.scss */
      "./src/app/components/error-page/error-page.component.scss"))["default"]]
    })], ErrorPageComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  color: #007CBA;\n  font-weight: 400 !important; }\n\n.fa {\n  font-size: medium !important; }\n\n.btn-primary {\n  background-color: #007CBA !important;\n  border-color: #007CBA !important; }\n\n.image-container {\n  background-image: url('background.jpg');\n  background-size: cover; }\n\n.login-center {\n  padding: 12em 0 12em 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGFzYXBhXFxHaXRIdWJcXFRlc3RVSUluc3RhbmNlXFxjYmFzLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcY2Jhcy1iYXNlLWNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksY0NIYztFRElkLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLG9DQUFzQztFQUN0QyxnQ0FBa0MsRUFBQTs7QUFHdEM7RUFFSSx1Q0FBOEQ7RUFDaEUsc0JBQXFCLEVBQUE7O0FBR3ZCO0VBQ0ksaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY2Jhcy1iYXNlLWNvbG9ycy5zY3NzJztcclxuaDF7XHJcbiAgICAvLyBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICRza3ktYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRza3ktYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkc2t5LWJsdWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lcntcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9DQkFTLW5vLWJnLnBuZycpIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBcclxufVxyXG5cclxuLmxvZ2luLWNlbnRlcntcclxuICAgIHBhZGRpbmc6IDEyZW0gMCAxMmVtIDAgIWltcG9ydGFudDtcclxufSIsIiRza3ktYmx1ZTogIzAwN0NCQTtcclxuJHZlcnktZGFyay1ibHVlOiAjMjIyQzY3O1xyXG4kZGFyay1ibHVlOiAjMTE0MTgxO1xyXG5cclxuJGxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcblxyXG4kbGlnaHQteWVsbG93OiAjRkZGMkFBO1xyXG4kZGFyay15ZWxsb3c6ICNGRkRFNkY7XHJcblxyXG4kd2hpdGU6IHdoaXRlOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_user_logged_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/user-logged-in.service */
    "./src/app/shared/services/user-logged-in.service.ts");
    /* harmony import */


    var src_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /*tslint:disable:no-inferrable-types*/


    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route, router, authService, userLoggedInService, adminService) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userLoggedInService = userLoggedInService;
        this.adminService = adminService;
        this.appTitle = 'CBASDemo';
        this.currentYear = new Date().getFullYear().toString();
        this.errorFlag = {
          flag: false,
          message: ''
        };
        this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('rohit@test.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Password.01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          // get return url from route parameters or default to '/'

          /* tslint:disable:no-string-literal */
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          /* tslint:enable:no-string-literal */

          this.LoginForm.valueChanges.subscribe(function (p) {
            if (p !== null) {
              _this21.errorFlag.flag = false;
              _this21.errorFlag.message = '';
            }
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this22 = this;

          if (this.LoginForm.valid) {
            console.log('valid');
            this.busy = this.authService.jwt_login(this.LoginForm.value).subscribe(function (args) {
              if (args) {
                _this22.errorFlag.flag = false;
                _this22.errorFlag.message = '';
                console.log('login successful', args);
                localStorage.setItem('currentUser', JSON.stringify(args));

                _this22.authService.publishChanges(args);

                _this22.userLoggedInService.setUserLoggedIn(true);

                _this22.authService.jwt_setAccessToken(args.accesstoken);

                _this22.authService.jwt_setRefreshToken(args.refreshtoken);

                _this22.authService.jwt_setRole(args.rolelist);

                _this22.proceedtoLandingPage();
              }
            }, function (err) {
              if (typeof err === 'string') {
                _this22.errorFlag.flag = true;
                _this22.errorFlag.message = err;
              } else {
                if (err.hasOwnProperty('error')) {
                  _this22.errorFlag.flag = true;
                  _this22.errorFlag.message = err.error.message;
                } else {
                  _this22.errorFlag.flag = true;
                  _this22.errorFlag.message = 'Something went wrong, please contact admin';
                }
              }

              console.log('login not successful', err);
            });
          }
        }
      }, {
        key: "proceedtoLandingPage",
        value: function proceedtoLandingPage() {
          var _this23 = this;

          this.busy = this.adminService.getUserByEmail(this.LoginForm.value.username).subscribe(function (data) {
            if (data) {
              _this23.currentUser = data;
              localStorage.setItem('UserID', _this23.currentUser.userId.toString());
              var loggedUserName = _this23.currentUser.firstName + ' ' + _this23.currentUser.lastName;
              localStorage.setItem('LoggedUser', loggedUserName); // this.shareDataService.loggedUser = loggedUserName;

              if (_this23.authService.jwt_hasRole('ROLE_USER')) {
                // this.router.navigate(['app/timesheet/resplan']);
                _this23.router.navigate(['/reports/current-req-report']);
              } else {
                // this.router.navigate(['app/tdl/search']);
                _this23.router.navigate(['/reports/current-req-report']);
              }
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_shared_services_user_logged_in_service__WEBPACK_IMPORTED_MODULE_5__["UserLoggedInService"]
      }, {
        type: src_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/submit-plan/submit-plan.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/submit-plan/submit-plan.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SubmitPlanComponent */

  /***/
  function srcAppComponentsSubmitPlanSubmitPlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPlanComponent", function () {
      return SubmitPlanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/acquisition.service */
    "./src/app/shared/services/acquisition.service.ts");
    /* harmony import */


    var src_app_shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/smartListConversion.service */
    "./src/app/shared/services/smartListConversion.service.ts");
    /* harmony import */


    var src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /*tslint:disable:no-inferrable-types*/


    var SubmitPlanComponent = /*#__PURE__*/function () {
      function SubmitPlanComponent(fb, authService, _acquisitionService, smartListService, modalService) {
        var _this24 = this;

        _classCallCheck(this, SubmitPlanComponent);

        this.fb = fb;
        this.authService = authService;
        this._acquisitionService = _acquisitionService;
        this.smartListService = smartListService;
        this.modalService = modalService;
        this.isDataPresent = false;
        this.officeList = [];
        this.acquisitionList = [];
        this.colDefs = [];
        this.editedData = [];
        this.saveSuccess = false;
        this.sideBar = {
          toolPanels: ['columns', 'filters']
        };
        this.gridOptions = {
          context: {
            componentParent: this
          },
          enableColResize: true,
          defaultColDef: {
            filterParams: {
              newRowsAction: 'keep'
            }
          },
          onCellValueChanged: function onCellValueChanged(params) {
            if (params.oldValue !== params.newValue) {
              var changedData = params.data; // params.api.updateRowData({ update: changedData });

              _this24.editedData.push(changedData);
            }
          },
          stopEditingWhenGridLosesFocus: true
        };
      }

      _createClass(SubmitPlanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.ChangeForm = this.fb.group({
            office: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            search: [null]
          });
          this.roleList = this.authService.jwt_getRole();

          this._acquisitionService.getAcquisitionOfficeData().subscribe(function (args) {
            _this25.officeList = args;
          });
        } // onGridReady(params) {
        //   this.gridApi = params.api;
        //   this.gridColumnApi = params.columnApi;
        //   document.querySelector('#athlete').checked = true;
        //   document.querySelector('#sport').checked = true;
        //   document.querySelector('#age').checked = true;
        //   document.querySelector('#year').checked = true;
        //   document.querySelector('#date').checked = true;
        // }

      }, {
        key: "openModalWithComponent",
        value: function openModalWithComponent() {
          var initialState = {
            list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
            title: 'Modal with component'
          };
          this.bsModalRef = this.modalService.show(src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
          this.bsModalRef.content.submitBtnName = 'Submit';
          this.bsModalRef.content.submitEvent.subscribe(function (data) {
            console.log(data, "data");
          });
        }
      }, {
        key: "onFilterTextBoxChanged",
        value: function onFilterTextBoxChanged() {
          this.gridApi.setQuickFilter(this.ChangeForm.controls.search.value);
        }
      }, {
        key: "autoSizeCols",
        value: function autoSizeCols(skipHeader) {
          var allColumnIds = [];
          this.gridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
          });
          this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
        }
      }, {
        key: "resetState",
        value: function resetState() {
          this.ChangeForm.controls.filter.setValue(null);
          this.gridColumnApi.resetColumnState();
          this.gridColumnApi.resetColumnGroupState();
          this.gridApi.setSortModel(null);
          this.gridApi.setFilterModel(null);
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.sizeColumnsToFit();
        }
      }, {
        key: "openSubmitDialog",
        value: function openSubmitDialog() {
          var initialState = {
            list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
            title: 'Submit Changes',
            approveScreen: false,
            submitScreen: true
          };
          this.bsModalRef = this.modalService.show(src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
          this.bsModalRef.content.submitBtnName = 'Submit';
        }
      }, {
        key: "onOfficeChangeEvent",
        value: function onOfficeChangeEvent(event) {
          this.officeName = event.target.value;
          this.officeCtp = this.officeName.slice(3);
        }
      }, {
        key: "acquisition",
        value: function acquisition() {
          var _this26 = this;

          this.busyTableSave = this._acquisitionService.getAcquisitionCTPDataWithOptional(this.officeCtp, this.roleList).subscribe(function (args) {
            _this26.isDataPresent = true;

            if (args != null && args.length > 0) {
              _this26.getColDefs();

              _this26.acquisitionList = args;

              _this26.smartListService.getSmartList(_this26.acquisitionList);
            } else {
              _this26.acquisitionList = [];
            }
          });
        }
      }, {
        key: "isUserAdmin",
        value: function isUserAdmin() {
          return this.roleList === 'ROLE_ADMIN' ? true : false;
        }
      }, {
        key: "saveAcquisition",
        value: function saveAcquisition() {
          var _this27 = this;

          if (this.editedData.length > 0) {
            this.smartListService.smartListToNumbers(this.editedData);
            this.busyTableSave = this._acquisitionService.postAcquisitionDataOptional(this.editedData, this.officeCtp).subscribe(function (args) {
              _this27.editedData = [];
              _this27.successMessage = 'Your changes have been saved.';
              _this27.saveSuccess = true;
              var alloc = 'ALLOC1';

              _this27._acquisitionService.getAcquisitionRunCalc(alloc).subscribe(function (args) {
                _this27.acquisition();
              });

              if (args !== null) {
                _this27.successMessage = 'Your changes have been saved.';
              }
            }, function (e) {
              window.alert('Not updated, something went wrong...' + e);
            });
          }
        }
      }, {
        key: "currencyFormatter",
        value: function currencyFormatter(params) {
          return '\x24' + this.formatNumber(params.value);
        }
      }, {
        key: "formatNumber",
        value: function formatNumber(params) {
          return Math.floor(params).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
      }, {
        key: "formatDecimal",
        value: function formatDecimal(params) {
          var i = params.value;

          if (i !== null && i !== undefined) {
            return Math.floor(i);
          } else if (i === null) {
            return '';
          } // return number.value !== null ? Math.floor(number.value) : '';

        }
      }, {
        key: "bracketsFormatter",
        value: function bracketsFormatter(params) {
          var i = Math.floor(params.value).toString();

          if (i !== null && i[0] === '-') {
            return i[0] !== '-' ? this.formatNumber(i) : '($' + i.substr(1) + ')';
          } else {
            return i === null ? '' : '$' + i;
          }
        }
      }, {
        key: "getColDefs",
        value: function getColDefs() {
          this.colDefs = [{
            headerName: 'CTP Number',
            field: 'ctpLineItem',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true
          }, {
            headerName: 'Project Title',
            field: 'projectTitle',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true
          }, {
            headerName: 'FBR Number',
            field: 'fbrNumber',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true
          }, {
            headerName: 'Action Type',
            field: 'anticipatedActionType',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['IDIQ - Competitive', 'BPA - Competitive', 'Stand Alone Contract - Competitive', 'IDIQ - Non Competitive', 'BPA - Non Competitive', 'Stand Alone Contract - Non Competitive', 'TO/DO - Competitive', 'TO/DO - Non Competitive', '8(a) Contracts - Non Competitive', 'GSA/GWAC Services, NO SOW', 'GSA/GWAC for Services Requiring a SOW', 'Simplified Acquisition ($25001 - $250000)', 'Option Exercise', 'Bilateral Contract Modification', 'HHS Strategic Sourcing BPA TO/DO - Non Competitive', 'Basic Ordering Agreement', 'Broad Agency Announcement', 'Simplified Acquisition ($10001 to $25000)', 'Simplified Acquisition Micropurchase <=10000', 'Unilateral Modification', 'Advanced Purchase Card Purchase ($3501 - $25000)']
            }
          }, {
            headerName: 'CTP Planned Award Date',
            headerClass: 'headerStyle',
            field: 'ctpPlannedAwardDate',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            cellRenderer: function cellRenderer(data) {
              return data.value ? new Date(data.value).toLocaleDateString('en-US', {
                timeZone: 'UTC'
              }) : '';
            },
            cellStyle: {
              'text-align': 'right'
            }
          }, {
            headerName: 'Zero Dollar Requisition',
            field: 'zeroDollarReq',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            cellEditor: 'richSelect',
            cellEditorParams: {
              values: ['Yes', 'No']
            },
            cellStyle: {
              'text-align': 'center'
            }
          }, {
            headerName: 'Spend Plan',
            field: 'fundingAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            }
          }, {
            headerName: 'Change Amount',
            field: 'changeAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            valueFormatter: this.bracketsFormatter,
            cellStyle: function cellStyle(params) {
              if (params.value !== null) {
                return params.value[0] === '-' ? {
                  color: 'red',
                  'text-align': 'right'
                } : {
                  color: 'black',
                  'text-align': 'right'
                };
              } else {
                return {
                  color: 'black',
                  'text-align': 'right'
                };
              }
            }
          }, {
            headerName: 'Estimated Revised Amount',
            field: 'estimatedRevisedAmount',
            filter: 'agSetColumnFilter',
            editable: this.isUserAdmin(),
            sortable: true,
            valueFormatter: this.currencyFormatter.bind(this),
            cellStyle: {
              'text-align': 'right'
            }
          }];
        }
      }]);

      return SubmitPlanComponent;
    }();

    SubmitPlanComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _shared_services_acquisition_service__WEBPACK_IMPORTED_MODULE_4__["AcquisitionService"]
      }, {
        type: src_app_shared_services_smartListConversion_service__WEBPACK_IMPORTED_MODULE_5__["SmartListConversionService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
      }];
    };

    SubmitPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-submit-plan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./submit-plan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/submit-plan/submit-plan.component.html"))["default"]
    })], SubmitPlanComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsCellHistoryDialogCellHistoryDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NlbGwtaGlzdG9yeS1kaWFsb2cvY2VsbC1oaXN0b3J5LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CellHistoryDialogComponent */

  /***/
  function srcAppSharedComponentsCellHistoryDialogCellHistoryDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellHistoryDialogComponent", function () {
      return CellHistoryDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CellHistoryDialogComponent = /*#__PURE__*/function () {
      function CellHistoryDialogComponent() {
        _classCallCheck(this, CellHistoryDialogComponent);
      }

      _createClass(CellHistoryDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.columnDefs = [{
            headerName: 'User',
            field: 'user'
          }, {
            headerName: 'Date',
            field: 'date'
          }, {
            headerName: 'Old Value',
            field: 'oldValue'
          }, {
            headerName: 'New Value',
            field: 'newValue'
          }];
          this.rowData = [{
            user: 'Rohit',
            date: '04/21/2019',
            oldValue: 35000,
            newValue: 234456
          }, {
            user: 'Ford',
            date: '05/06/2019',
            oldValue: 32000,
            newValue: 23465
          }, {
            user: 'Porsche',
            date: '06/06/2019',
            oldValue: 72000,
            newValue: 23427
          }];
        }
      }]);

      return CellHistoryDialogComponent;
    }();

    CellHistoryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cell-history-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cell-history-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cell-history-dialog.component.scss */
      "./src/app/shared/components/cell-history-dialog/cell-history-dialog.component.scss"))["default"]]
    })], CellHistoryDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsConfirmDialogConfirmDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress {\n  overflow: visible;\n  margin-bottom: 26px;\n  height: 4px; }\n  .progress .progress-bar {\n    background-color: #007CBA;\n    position: relative;\n    border-radius: 4px; }\n  .progress .progress-bar span {\n      background-color: #007CBA;\n      position: absolute;\n      bottom: -20px;\n      font-size: 10px;\n      line-height: 10px;\n      padding: 2px 3px 2px 4px;\n      right: -1.4em;\n      border-radius: 2px; }\n  .progress .progress-bar span:after {\n      bottom: 100%;\n      left: 50%;\n      border: solid transparent;\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #007CBA;\n      border-width: 5px;\n      margin-left: -5px; }\n  .modal-footer {\n  background-color: #efefef; }\n  .modal-header {\n  color: #007cba; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvQzpcXFVzZXJzXFxhc2FwYVxcR2l0SHViXFxUZXN0VUlJbnN0YW5jZVxcY2Jhcy1hcHAvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY29uZmlybS1kaWFsb2dcXGNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7RUFIYjtJQUtJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFQdEI7TUFTTSx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixhQUFhO01BQ2Isa0JBQWtCLEVBQUE7RUFoQnhCO01BbUJNLFlBQVk7TUFDWixTQUFTO01BQ1QseUJBQXlCO01BQ3pCLFNBQVM7TUFDVCxRQUFRO01BQ1Isa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQixvQ0FBb0M7TUFDcEMsNEJBQTRCO01BQzVCLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTtFQUt2QjtFQUNFLHlCQUF5QixFQUFBO0VBRzNCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgLnByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgcGFkZGluZzogMnB4IDNweCAycHggNHB4O1xyXG4gICAgICByaWdodDogLTEuNGVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgICBzcGFuOmFmdGVyIHtcclxuICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwN0NCQTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgY29sb3I6ICMwMDdjYmE7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppSharedComponentsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(fb, bsModalRef) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.fb = fb;
        this.bsModalRef = bsModalRef;
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formSubmitted = false;
        this.formRejected = false;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SubmitChangeForm = this.fb.group({
            action: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nextOwner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comments: [null]
          });
          console.log('modal inputs', this.closeBtnName, this.submitBtnName);
        }
      }, {
        key: "submitAction",
        value: function submitAction() {
          this.result.next(true);

          if (this.SubmitChangeForm.controls.action.value === 'Promote') {
            this.formSubmitted = true;
            this.submitChangesMessage = 'Your Change Request have been submitted for approval';
          } else {
            this.formRejected = true;
            this.submitChangesMessage = 'Your Change Request have been dismissed';
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "closeBtnName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "submitBtnName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "approveScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "submitScreen", void 0);
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirm-dialog.component.scss */
      "./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss"))["default"]]
    })], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/dropdown/dropdown.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/shared/components/dropdown/dropdown.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsDropdownDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  outline: none !important; }\n\n.dropdown-inline {\n  display: inline-block; }\n\n.dropdown {\n  width: 100%; }\n\nbutton {\n  width: 100%;\n  text-align: left; }\n\nbutton .caret {\n    top: 40%;\n    right: 10px;\n    position: absolute; }\n\n.dropdown-menu {\n  border-radius: 0px !important;\n  width: 100%; }\n\n.btn {\n  margin: 0px !important; }\n\n.form-control[type='button'] {\n  border: 0.8px solid #4A4A4A !important;\n  font-size: 1rem !important; }\n\n.caret {\n  color: #4A4A4A;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 9px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 5px solid transparent; }\n\n.clear-selection {\n  margin-right: 0.3125rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXFVzZXJzXFxhc2FwYVxcR2l0SHViXFxUZXN0VUlJbnN0YW5jZVxcY2Jhcy1hcHAvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZHJvcGRvd25cXGRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsV0FBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUZsQjtJQUlJLFFBQU87SUFDUCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsNkJBQTRCO0VBQzVCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHNCQUFxQixFQUFBOztBQUd2QjtFQUNFLHNDQUFzQztFQUN0QywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24taW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bntcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAuY2FyZXR7XHJcbiAgICB0b3A6NDAlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICBib3JkZXItcmFkaXVzOjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbjowcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbFt0eXBlPSdidXR0b24nXXtcclxuICBib3JkZXI6IDAuOHB4IHNvbGlkICM0QTRBNEEgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmV0e1xyXG4gIGNvbG9yOiAjNEE0QTRBO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlci10b3A6IDlweCBkYXNoZWQ7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIFxcOTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2xlYXItc2VsZWN0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/dropdown/dropdown.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
    \******************************************************************/

  /*! exports provided: CBASMultiSelectComponent, CBASSelectComponent */

  /***/
  function srcAppSharedComponentsDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CBASMultiSelectComponent", function () {
      return CBASMultiSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CBASSelectComponent", function () {
      return CBASSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-filter.pipe */
    "./src/app/shared/components/dropdown/search-filter.pipe.ts");
    /* harmony import */


    var _validation_msg_validation_msg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../validation-msg/validation-msg.component */
    "./src/app/shared/components/validation-msg/validation-msg.component.ts");
    /* harmony import */


    var _utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../utilities */
    "./src/app/shared/utilities.ts"); // import { ExtendedComponent } from '../../Decorators/extended-component.decorator';

    /*
     * Angular 2 Dropdown Multiselect for Bootstrap
     *
     */


    var MULTISELECT_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
        return CBASMultiSelectComponent;
      }),
      multi: true
    };
    var nextUniqueId = 0;

    var CBASMultiSelectComponent = /*#__PURE__*/function () {
      function CBASMultiSelectComponent(element, fb, searchFilter, differs, ngControl, _parentForm) {
        _classCallCheck(this, CBASMultiSelectComponent);

        this.element = element;
        this.fb = fb;
        this.searchFilter = searchFilter;
        this.ngControl = ngControl;
        this._parentForm = _parentForm;
        this._uid = "mat-select-".concat(nextUniqueId++);
        this.errors = [];
        this.filterControl = this.fb.control('');
        this.disabled = false;
        this.disabledSelection = false;
        this.enableSearch = false;
        this.placeholder = undefined;
        this.isRequired = false;
        this.selectionLimitReached = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dropdownClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dropdownOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onFilter = this.filterControl.valueChanges;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.filteredOptions = [];
        this.renderFilteredOptions = [];
        this.model = [];
        this.numSelected = 0;
        this.renderItems = true;
        this.checkAllSearchRegister = new Set();
        this.checkAllStatus = false;
        this.loadedValueIds = [];
        this.defaultSettings = {
          closeOnClickOutside: true,
          pullRight: false,
          enableSearch: false,
          searchRenderLimit: 0,
          searchRenderAfter: 1,
          searchMaxLimit: 0,
          searchMaxRenderedItems: 0,
          checkedStyle: 'checkboxes',
          buttonClasses: 'btn btn-default btn-secondary',
          containerClasses: 'dropdown',
          selectionLimit: 0,
          minSelectionLimit: 0,
          closeOnSelect: false,
          autoUnselect: false,
          showCheckAll: false,
          showUncheckAll: false,
          fixedTitle: false,
          dynamicTitleMaxItems: 1,
          maxHeight: '300px',
          isLazyLoad: false,
          stopScrollPropagation: false,
          loadViewDistance: 1,
          selectAddedValues: false
        };
        this.defaultTexts = {
          checkAll: 'Check All',
          uncheckAll: 'Uncheck All',
          checked: 'checked',
          checkedPlural: 'checked',
          searchPlaceholder: 'Search...',
          searchEmptyResult: 'Nothing Found...',
          searchNoRenderText: 'Type in search box to see results.',
          defaultTitle: 'Select One',
          allSelected: 'All Items Selected'
        };
        this._isVisible = false;
        this._workerDocClicked = false;

        this.onTouchedCallback = function () {};

        this.onModelChange = function (_) {};

        this.onModelTouched = function () {};

        if (this.ngControl) {
          // Note: we provide the value accessor through here, instead of
          // the `providers` to avoid running into a circular import.
          this.ngControl.valueAccessor = this;
        }

        this.differ = differs.find([]).create(null);
        this.settings = this.defaultSettings;
        this.texts = this.defaultTexts; // Force setter to be called in case id was not specified.

        this.id = this.id;
      }

      _createClass(CBASMultiSelectComponent, [{
        key: "onClick",
        value: function onClick(target) {
          if (!this.isVisible || !this.settings.closeOnClickOutside) {
            return;
          }

          var parentFound = false;

          while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
              parentFound = true;
            }

            target = target.parentElement;
          }

          if (!parentFound) {
            this.isVisible = false;
            this.dropdownClosed.emit();
          }
        }
      }, {
        key: "validateDropDown",
        value: function validateDropDown() {
          var _this28 = this;

          this.errors = [];
          this.errors = [];

          if (this.ngControl.touched && !this.ngControl.valid && this.ngControl.errors != null) {
            var _loop = function _loop(d) {
              var valMsg = _this28.validationMessages.find(function (msg) {
                return msg.validator === d;
              });

              if (valMsg != null) {
                _this28.errors.push(valMsg.msg);
              } else {
                _this28.errors.push(Object(_utilities__WEBPACK_IMPORTED_MODULE_7__["getErrorTextFromValidationResult"])(d, _this28.ngControl.errors[d]));
              }
            };

            // tslint:disable-next-line:forin
            for (var d in this.ngControl.errors) {
              _loop(d);
            }
          }
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.onModelTouched(); // this.onTouchedCallback();

          this.validateDropDown();
        }
      }, {
        key: "getItemStyle",
        value: function getItemStyle(option) {
          if (!option.isLabel) {
            return {
              cursor: 'pointer'
            };
          }
        }
      }, {
        key: "getItemStyleSelectionDisabled",
        value: function getItemStyleSelectionDisabled() {
          if (this.disabledSelection) {
            return {
              cursor: 'default'
            };
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.isRequired = this.isRequired || Object(_utilities__WEBPACK_IMPORTED_MODULE_7__["hasRequiredValidator"])(this.ngControl);
          this.settings = Object.assign(this.defaultSettings, this.settings);

          if (this.texts.defaultTitle === this.defaultTexts.defaultTitle && this.placeholder) {
            this.texts.defaultTitle = this.placeholder;
          }

          this.texts = Object.assign(this.defaultTexts, this.texts);
          this.title = this.texts.defaultTitle || '';
          this.settings.enableSearch = this.enableSearch;
          this.filterControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroyed$)).subscribe(function () {
            this.updateRenderItems();

            if (this.settings.isLazyLoad) {
              this.load();
            }
          }.bind(this));

          if (this.ngControl) {
            this.ngControl.statusChanges.subscribe(function (x) {
              _this29.validateDropDown();
            });
          }

          if (this.removeOptional === true) {
            this.isRequired = true;
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this30 = this;

          if (changes['options']) {
            var prevModel = this.model.slice();
            this.options = this.options || [];
            this.parents = this.options.filter(function (option) {
              return typeof option.parentId === 'number';
            }).map(function (option) {
              return option.parentId;
            });
            this.updateRenderItems();

            if (this.settings.selectAddedValues && this.loadedValueIds.length === 0) {
              this.loadedValueIds = this.loadedValueIds.concat(changes.options.currentValue.map(function (value) {
                return value.id;
              }));
            }

            if (this.settings.selectAddedValues && changes.options.previousValue) {
              var addedValues = changes.options.currentValue.filter(function (value) {
                return _this30.loadedValueIds.indexOf(value.id) === -1;
              });
              this.loadedValueIds.concat(addedValues.map(function (value) {
                return value.id;
              }));

              if (this.checkAllStatus) {
                this.addChecks(addedValues);
              } else if (this.checkAllSearchRegister.size > 0) {
                this.checkAllSearchRegister.forEach(function (searchValue) {
                  return _this30.addChecks(_this30.applyFilters(addedValues, searchValue));
                });
              }
            }

            if (this.texts) {
              this.updateTitle();
            }

            if (prevModel.length !== this.model.length || prevModel.some(function (id) {
              return _this30.model.indexOf(id) === -1;
            })) {
              this.onModelChange(this.model);
              this.onModelTouched();
            }
          }

          if (changes['texts'] && !changes['texts'].isFirstChange()) {
            this.updateTitle();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next();
        }
      }, {
        key: "updateRenderItems",
        value: function updateRenderItems() {
          this.renderItems = !this.searchLimitApplied || this.filterControl.value.length >= this.searchRenderAfter;
          this.filteredOptions = this.applyFilters(this.options, this.settings.isLazyLoad ? '' : this.filterControl.value);
          this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
        }
      }, {
        key: "applyFilters",
        value: function applyFilters(options, value) {
          return this.searchFilter.transform(options, value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems);
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value !== undefined && value != null) {
            this.model = Array.isArray(value) ? value : [value];
          } else {
            this.model = [];
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var changes = this.differ.diff(this.model);

          if (changes) {
            this.updateNumSelected();
            this.updateTitle();
          }
        }
      }, {
        key: "validate",
        value: function validate(_c) {
          return this.model && this.model.length ? null : {
            required: {
              valid: false
            }
          };
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(_fn) {
          throw new Error('Method not implemented.');
        }
      }, {
        key: "clearSearch",
        value: function clearSearch(event) {
          if (event.stopPropagation) {
            event.stopPropagation();
          }

          this.filterControl.setValue('');
        }
      }, {
        key: "toggleDropdown",
        value: function toggleDropdown() {
          this.isVisible = !this.isVisible;
          this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
        }
      }, {
        key: "isSelected",
        value: function isSelected(option) {
          return this.model && this.model.indexOf(option.id) > -1;
        }
      }, {
        key: "setSelected",
        value: function setSelected(_event, option) {
          var _this31 = this;

          if (option.isLabel) {
            return;
          }

          if (!this.disabledSelection) {
            if (_event.stopPropagation) {
              _event.stopPropagation();
            }

            var index = this.model.indexOf(option.id);
            var isAtSelectionLimit = this.settings.selectionLimit > 0 && this.model.length >= this.settings.selectionLimit;

            if (index > -1) {
              var removeItem = function removeItem(idx, id) {
                _this31.model.splice(idx, 1);

                _this31.onRemoved.emit(id);
              };

              if (this.settings.minSelectionLimit === undefined || this.numSelected > this.settings.minSelectionLimit) {
                removeItem(index, option.id);
              }

              var parentIndex = option.parentId && this.model.indexOf(option.parentId);

              if (parentIndex > -1) {
                removeItem(parentIndex, option.parentId);
              } else if (this.parents.indexOf(option.id) > -1) {
                this.options.filter(function (child) {
                  return _this31.model.indexOf(child.id) > -1 && child.parentId === option.id;
                }).forEach(function (child) {
                  return removeItem(_this31.model.indexOf(child.id), child.id);
                });
              }
            } else if (isAtSelectionLimit && !this.settings.autoUnselect) {
              this.selectionLimitReached.emit(this.model.length);
              return;
            } else {
              var addItem = function addItem(id) {
                _this31.model.push(id);

                _this31.onAdded.emit(id);
              };

              addItem(option.id);

              if (!isAtSelectionLimit) {
                if (option.parentId) {
                  var children = this.options.filter(function (child) {
                    return child.id !== option.id && child.parentId === option.parentId;
                  });

                  if (children.every(function (child) {
                    return _this31.model.indexOf(child.id) > -1;
                  })) {
                    addItem(option.parentId);
                  }
                } else if (this.parents.indexOf(option.id) > -1) {
                  var _children = this.options.filter(function (child) {
                    return _this31.model.indexOf(child.id) < 0 && child.parentId === option.id;
                  });

                  _children.forEach(function (child) {
                    return addItem(child.id);
                  });
                }
              } else {
                var removedOption = this.model.shift();
                this.onRemoved.emit(removedOption);
              }
            }

            if (this.settings.closeOnSelect) {
              this.toggleDropdown();
            }

            this.model = this.model.slice();
            this.onModelChange(this.model);
            this.onModelTouched();
            this.validateDropDown();
          }
        }
      }, {
        key: "updateNumSelected",
        value: function updateNumSelected() {
          var _this32 = this;

          this.numSelected = this.model.filter(function (id) {
            return _this32.parents.indexOf(id) < 0;
          }).length || 0;
        }
      }, {
        key: "updateTitle",
        value: function updateTitle() {
          var _this33 = this;

          if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = this.texts ? this.texts.defaultTitle : '';
          } else if (this.settings.displayAllSelectedText && this.model.length === this.options.length) {
            this.title = this.texts ? this.texts.allSelected : '';
          } else if (this.settings.dynamicTitleMaxItems && this.settings.dynamicTitleMaxItems >= this.numSelected) {
            this.title = this.options.filter(function (option) {
              return _this33.model.indexOf(option.id) > -1;
            }).map(function (option) {
              return option.name;
            }).join(', ');
          } else {
            this.title = this.numSelected + ' ' + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
          }
        }
      }, {
        key: "searchFilterApplied",
        value: function searchFilterApplied() {
          return this.settings.enableSearch && this.filterControl.value && this.filterControl.value.length > 0;
        }
      }, {
        key: "addChecks",
        value: function addChecks(options) {
          var checkedOptions = options.filter(function (option) {
            if (this.model.indexOf(option.id) === -1) {
              this.onAdded.emit(option.id);
              return true;
            }

            return false;
          }.bind(this)).map(function (option) {
            return option.id;
          });
          this.model = this.model.concat(checkedOptions);
        }
      }, {
        key: "checkAll",
        value: function checkAll() {
          if (!this.disabledSelection) {
            this.addChecks(!this.searchFilterApplied() ? this.options : this.filteredOptions);

            if (this.settings.selectAddedValues) {
              if (this.searchFilterApplied() && !this.checkAllStatus) {
                this.checkAllSearchRegister.add(this.filterControl.value);
              } else {
                this.checkAllSearchRegister.clear();
                this.checkAllStatus = true;
              }

              this.load();
            }

            this.onModelChange(this.model);
            this.onModelTouched();
          }
        }
      }, {
        key: "uncheckAll",
        value: function uncheckAll() {
          var _this34 = this;

          if (!this.disabledSelection) {
            var checkedOptions = this.model;
            var unCheckedOptions = !this.searchFilterApplied() ? this.model : this.filteredOptions.map(function (option) {
              return option.id;
            }); // set unchecked options only to the ones that were checked

            unCheckedOptions = checkedOptions.filter(function (item) {
              return _this34.model.includes(item);
            });
            this.model = this.model.filter(function (id) {
              if (unCheckedOptions.indexOf(id) < 0 && _this34.settings.minSelectionLimit === undefined || unCheckedOptions.indexOf(id) < _this34.settings.minSelectionLimit) {
                return true;
              } else {
                _this34.onRemoved.emit(id);

                return false;
              }
            });

            if (this.settings.selectAddedValues) {
              if (this.searchFilterApplied()) {
                if (this.checkAllSearchRegister.has(this.filterControl.value)) {
                  this.checkAllSearchRegister["delete"](this.filterControl.value);
                  this.checkAllSearchRegister.forEach(function (searchTerm) {
                    var filterOptions = this.applyFilters(this.options.filter(function (option) {
                      return unCheckedOptions.includes(option.name);
                    }), searchTerm);
                    this.addChecks(filterOptions);
                  }.bind(this));
                }
              } else {
                this.checkAllSearchRegister.clear();
                this.checkAllStatus = false;
              }

              this.load();
            }

            this.onModelChange(this.model);
            this.onModelTouched();
          }
        }
      }, {
        key: "preventCheckboxCheck",
        value: function preventCheckboxCheck(event, option) {
          if (this.settings.selectionLimit && !this.settings.autoUnselect && this.model.length >= this.settings.selectionLimit && this.model.indexOf(option.id) === -1 && event.preventDefault) {
            event.preventDefault();
          }
        }
      }, {
        key: "isCheckboxDisabled",
        value: function isCheckboxDisabled() {
          return this.disabledSelection;
        }
      }, {
        key: "checkScrollPosition",
        value: function checkScrollPosition(ev) {
          var scrollTop = ev.target.scrollTop;
          var scrollHeight = ev.target.scrollHeight;
          var scrollElementHeight = ev.target.clientHeight;
          var roundingPixel = 1;
          var gutterPixel = 1;

          if (scrollTop >= scrollHeight - (1 + this.settings.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel) {
            this.load();
          }
        }
      }, {
        key: "checkScrollPropagation",
        value: function checkScrollPropagation(ev, element) {
          var scrollTop = element.scrollTop;
          var scrollHeight = element.scrollHeight;
          var scrollElementHeight = element.clientHeight;

          if (ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight || ev.deltaY < 0 && scrollTop <= 0) {
            ev = ev || window.event;

            if (ev.preventDefault) {
              ev.preventDefault();
            }

            ev.returnValue = false;
          }
        }
      }, {
        key: "load",
        value: function load() {
          this.onLazyLoad.emit({
            length: this.options.length,
            filter: this.filterControl.value,
            checkAllSearches: this.checkAllSearchRegister,
            checkAllStatus: this.checkAllStatus
          });
        }
      }, {
        key: "clearSelectionButtonVisible",
        value: function clearSelectionButtonVisible(option) {
          return false;
        }
      }, {
        key: "clearSelection",
        value: function clearSelection(event) {
          throw Error('Not applicable for multi select');
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(value) {
          this._id = value || this._uid;
        }
      }, {
        key: "isVisible",
        set: function set(val) {
          this._isVisible = val;
          this._workerDocClicked = val ? false : this._workerDocClicked;
        },
        get: function get() {
          return this._isVisible;
        }
      }, {
        key: "searchLimit",
        get: function get() {
          return this.settings.searchRenderLimit;
        }
      }, {
        key: "searchRenderAfter",
        get: function get() {
          return this.settings.searchRenderAfter;
        }
      }, {
        key: "searchLimitApplied",
        get: function get() {
          return this.searchLimit > 0 && this.options.length > this.searchLimit;
        }
      }]);

      return CBASMultiSelectComponent;
    }();

    CBASMultiSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["MultiSelectSearchFilter"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "texts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "disabledSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "enableSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "isRequired", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CBASMultiSelectComponent.prototype, "selectionLimitReached", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CBASMultiSelectComponent.prototype, "dropdownClosed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CBASMultiSelectComponent.prototype, "dropdownOpened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CBASMultiSelectComponent.prototype, "onAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CBASMultiSelectComponent.prototype, "onRemoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CBASMultiSelectComponent.prototype, "onLazyLoad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CBASMultiSelectComponent.prototype, "onFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "removeOptional", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CBASMultiSelectComponent.prototype, "id", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(_validation_msg_validation_msg_component__WEBPACK_IMPORTED_MODULE_6__["ValidationMsg"], {
      descendants: true
    })], CBASMultiSelectComponent.prototype, "validationMessages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document: click', ['$event.target'])], CBASMultiSelectComponent.prototype, "onClick", null);
    CBASMultiSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-multiselect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html"))["default"],
      providers: [_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["MultiSelectSearchFilter"]] // MULTISELECT_VALUE_ACCESSOR
      ,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown.component.scss */
      "./src/app/shared/components/dropdown/dropdown.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])())], CBASMultiSelectComponent);
    var SELECT_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
        return CBASSelectComponent;
      }),
      multi: true
    };

    var CBASSelectComponent = /*#__PURE__*/function (_CBASMultiSelectCompo) {
      _inherits(CBASSelectComponent, _CBASMultiSelectCompo);

      var _super = _createSuper(CBASSelectComponent);

      /**
       *
       */
      function CBASSelectComponent(element, fb, searchFilter, differs, ngControl, _parentForm) {
        var _this35;

        _classCallCheck(this, CBASSelectComponent);

        _this35 = _super.call(this, element, fb, searchFilter, differs, ngControl, _parentForm);
        _this35.element = element;
        _this35.fb = fb;
        _this35.searchFilter = searchFilter;
        _this35.ngControl = ngControl;

        _this35.onChangeCallback = function (_) {};

        _this35.defaultSettings.autoUnselect = true;
        _this35.defaultSettings.selectionLimit = 1;
        _this35.defaultSettings.closeOnSelect = true;
        _this35.defaultSettings.dynamicTitleMaxItems = 1;
        return _this35;
      }

      _createClass(CBASSelectComponent, [{
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this36 = this;

          this.onChangeCallback = fn;

          this.onModelChange = function (changed) {
            if (changed && changed.length > 0) {
              _this36.onChangeCallback(changed[0]);
            } else {
              // console.log('cahanged call back with null');
              _this36.onChangeCallback(null);
            }
          };
        }
      }, {
        key: "clearSelectionButtonVisible",
        value: function clearSelectionButtonVisible(option) {
          return this.model != null && this.model.length > 0 && this.model[0] === option.id;
        }
      }, {
        key: "clearSelection",
        value: function clearSelection(event) {
          // console.log('in clear selection');
          this.model = [];
          this.onModelChange([]);
          event.stopPropagation();

          if (this.settings.closeOnSelect) {
            this.toggleDropdown();
          }

          this.onModelTouched();
          this.validateDropDown();
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event, option) {
          if (event.keyCode === 13) {
            this.setSelected(event, option);
          }
        }
      }]);

      return CBASSelectComponent;
    }(CBASMultiSelectComponent);

    CBASSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["MultiSelectSearchFilter"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }];
    };

    CBASSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html"))["default"],
      providers: [_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["MultiSelectSearchFilter"]] // SELECT_VALUE_ACCESSOR
      ,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown.component.scss */
      "./src/app/shared/components/dropdown/dropdown.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])())], CBASSelectComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/dropdown/search-filter.pipe.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/dropdown/search-filter.pipe.ts ***!
    \******************************************************************/

  /*! exports provided: MultiSelectSearchFilter */

  /***/
  function srcAppSharedComponentsDropdownSearchFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectSearchFilter", function () {
      return MultiSelectSearchFilter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MultiSelectSearchFilter = /*#__PURE__*/function () {
      function MultiSelectSearchFilter() {
        _classCallCheck(this, MultiSelectSearchFilter);

        this._searchCache = {};
        this._searchCacheInclusive = {};
      }

      _createClass(MultiSelectSearchFilter, [{
        key: "transform",
        value: function transform(options, str) {
          var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var renderLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          str = (str || '').toLowerCase(); // Drop cache because options were updated

          if (options !== this._lastOptions) {
            this._lastOptions = options;
            this._searchCache = {};
            this._searchCacheInclusive = {};
          }

          var isUnderLimit = options.length <= limit;

          if (this._searchCache[str]) {
            return isUnderLimit ? this._searchCache[str] : this._limitRenderedItems(this._searchCache[str], renderLimit);
          }

          var prevStr = str.slice(0, -1);
          var prevResults = this._searchCache[prevStr];

          if (prevResults) {
            var prevInclusiveOrIdx = this._searchCacheInclusive[prevStr];

            if (prevInclusiveOrIdx === true) {
              // If have previous results and it was inclusive, do only subsearch
              options = prevResults;
            } else if (typeof prevInclusiveOrIdx === 'number') {
              // Or reuse prev results with unchecked ones
              options = [].concat(_toConsumableArray(prevResults), _toConsumableArray(options.slice(prevInclusiveOrIdx)));
            }
          }

          var optsLength = options.length;
          var maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
          var filteredOpts = [];
          var regexp = new RegExp(this._escapeRegExp(str), 'i');

          var matchPredicate = function matchPredicate(option) {
            return regexp.test(option.name);
          },
              getChildren = function getChildren(option) {
            return options.filter(function (child) {
              return child.parentId === option.id;
            });
          },
              getParent = function getParent(option) {
            return options.find(function (parent) {
              return option.parentId === parent.id;
            });
          };

          var i = 0,
              founded = 0;

          for (; i < optsLength && founded < maxFound; ++i) {
            var option = options[i];
            var directMatch = regexp.test(option.name);

            if (directMatch) {
              filteredOpts.push(option);
              founded++;
              continue;
            }

            if (typeof option.parentId === 'undefined') {
              var childrenMatch = getChildren(option).some(matchPredicate);

              if (childrenMatch) {
                filteredOpts.push(option);
                founded++;
                continue;
              }
            }

            if (typeof option.parentId !== 'undefined') {
              var parentMatch = matchPredicate(getParent(option));

              if (parentMatch) {
                filteredOpts.push(option);
                founded++;
                continue;
              }
            }
          }

          this._searchCache[str] = filteredOpts;
          this._searchCacheInclusive[str] = i === optsLength || i + 1;
          return isUnderLimit ? filteredOpts : this._limitRenderedItems(filteredOpts, renderLimit);
        }
      }, {
        key: "_limitRenderedItems",
        value: function _limitRenderedItems(items, limit) {
          return items.length > limit && limit > 0 ? items.slice(0, limit) : items;
        }
      }, {
        key: "_escapeRegExp",
        value: function _escapeRegExp(str) {
          return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        }
      }]);

      return MultiSelectSearchFilter;
    }();

    MultiSelectSearchFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchFilter'
    })], MultiSelectSearchFilter);
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".copy-right {\n  color: white;\n  background-color: #007CBA !important;\n  padding-left: 50px; }\n\n.footer-links {\n  background-color: #D5D5D5; }\n\n.footer-header {\n  color: #2E2925;\n  font-size: 14pt;\n  text-align: center; }\n\na {\n  color: #4A4A4A !important; }\n\ninput {\n  outline: 0;\n  border-width: 0 0 2px;\n  background-color: #D5D5D5; }\n\ninput:focus {\n  border-color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxhc2FwYVxcR2l0SHViXFxUZXN0VUlJbnN0YW5jZVxcY2Jhcy1hcHAvc3JjXFxjYmFzLWJhc2UtY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFZO0VBQ1osb0NBQXNDO0VBQ3RDLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLHlCQ05nQixFQUFBOztBRFNwQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBR2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQjtFQUNyQix5QkN4QmdCLEVBQUE7O0FEMEJsQjtFQUNFLG1CQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vY2Jhcy1iYXNlLWNvbG9ycy5zY3NzJztcclxuXHJcbi5jb3B5LXJpZ2h0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRza3ktYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cclxufVxyXG5cclxuLmZvb3Rlci1saW5rcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxufVxyXG5cclxuLmZvb3Rlci1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMyRTI5MjU7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAjNEE0QTRBO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM0QTRBNEEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuXHJcbiAgfSIsIiRza3ktYmx1ZTogIzAwN0NCQTtcclxuJHZlcnktZGFyay1ibHVlOiAjMjIyQzY3O1xyXG4kZGFyay1ibHVlOiAjMTE0MTgxO1xyXG5cclxuJGxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcblxyXG4kbGlnaHQteWVsbG93OiAjRkZGMkFBO1xyXG4kZGFyay15ZWxsb3c6ICNGRkRFNkY7XHJcblxyXG4kd2hpdGU6IHdoaXRlOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(authService) {
        _classCallCheck(this, FooterComponent);

        this.authService = authService;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickLogout",
        value: function onClickLogout() {
          localStorage.removeItem('currentUser');
          this.authService.jwt_logout();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  background-color: #007CBA !important;\n  margin-left: 223px; }\n\n.fa {\n  color: white; }\n\nspan#basic-addon2 {\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  background-color: #FFDE6F !important; }\n\n#basic-addon2 .fa {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQW9DO0VBQ3BDLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkEgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjNweDtcclxufVxyXG5cclxuLmZhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zcGFuI2Jhc2ljLWFkZG9uMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRFNkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Jhc2ljLWFkZG9uMiAuZmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickLogout",
        value: function onClickLogout() {
          localStorage.removeItem('currentUser');
          this.authService.jwt_logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/new-header/new-header.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/new-header/new-header.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsNewHeaderNewHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  background-color: #007CBA !important;\n  color: white; }\n\n.fa {\n  color: white; }\n\na {\n  color: #007CBA; }\n\n.sub-header {\n  background-color: #222C67;\n  color: white;\n  padding-left: 30px;\n  font-size: 11pt; }\n\n.fa.pull-right {\n  margin-top: 0.9em !important; }\n\n.border-bottom {\n  border-bottom: 0.1em solid #007CBA !important; }\n\n#menu li:last-child {\n  border-bottom: 0.2em solid #007CBA !important; }\n\n#menu ul,\n#menu li {\n  margin: 0 0;\n  padding: 0 0;\n  list-style: none; }\n\n#menu ul {\n  height: 35px; }\n\n#menu li {\n  float: left;\n  display: inline;\n  position: relative; }\n\n#menu li:first-child {\n  border-left: none; }\n\n#menu a {\n  display: block;\n  line-height: 35px;\n  padding: 0 14px;\n  text-decoration: none; }\n\n#menu li:hover > a,\n#menu li a:hover {\n  background: white;\n  color: #007CBA !important; }\n\n#menu input {\n  display: none;\n  margin: 0 0;\n  padding: 0 0;\n  width: 80px;\n  height: 35px;\n  opacity: 0;\n  cursor: pointer; }\n\n#menu label {\n  font: bold 30px Arial;\n  display: none;\n  width: 35px;\n  height: 36px;\n  line-height: 36px;\n  text-align: center; }\n\n#menu label span {\n  font-size: 12px;\n  position: absolute;\n  left: 35px; }\n\n#menu ul.menus {\n  height: auto;\n  width: 180px;\n  background: #d4e9f4;\n  position: absolute;\n  z-index: 99;\n  display: none;\n  border: 0;\n  color: #007CBA; }\n\n#menu ul.menus li {\n  display: block;\n  width: 100%;\n  font: 12px Arial;\n  text-transform: none; }\n\n#menu li:hover ul.menus {\n  display: block; }\n\n#menu a.home {\n  background: #c00; }\n\na.list-item-padding {\n  padding: 0 27px 0 14px !important; }\n\n.head-link > a.prett {\n  padding: 8px 27px 7px 14px !important; }\n\n.head-link > a.prett::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-width: 6px 5px;\n  border-style: solid;\n  border-color: #eee transparent transparent transparent;\n  position: absolute;\n  top: 21px !important;\n  right: 9px; }\n\n#menu a.prett::after {\n  width: 0;\n  height: 0;\n  border-width: 6px 5px;\n  border-style: solid;\n  border-color: #eee transparent transparent transparent;\n  position: absolute;\n  top: 15px;\n  right: 9px; }\n\n#menu a.prett:hover::after {\n  width: 0;\n  height: 0;\n  border-width: 6px 5px;\n  border-style: solid;\n  border-color: #007CBA transparent transparent transparent;\n  position: absolute;\n  top: 15px;\n  right: 9px; }\n\n#menu ul.menus a:hover {\n  background: #f7f8f8;\n  color: black !important; }\n\n#menu ul.menus .submenu {\n  display: none;\n  position: absolute;\n  left: 180px;\n  background: white;\n  color: #007CBA;\n  top: 0;\n  width: 180px; }\n\n#menu ul.menus .submenu .sub-submenu {\n  display: none;\n  position: absolute;\n  left: 180px;\n  background: white;\n  color: #007CBA;\n  top: 0;\n  width: 180px; }\n\n#menu ul.menus .submenu .sub-submenu .s3menu {\n  display: none;\n  position: absolute;\n  left: 180px;\n  background: white;\n  color: #007CBA;\n  top: 0;\n  width: 180px; }\n\n#menu ul.menus .submenu li {\n  background: white;\n  color: #007CBA; }\n\n#menu ul.menus .submenu .sub-submenu li {\n  background: white;\n  color: #007CBA; }\n\n#menu ul.menus .submenu .sub-submenu .s3menu li {\n  background: white;\n  color: #007CBA; }\n\n#menu ul.menus .has-submenu:hover .submenu {\n  display: block; }\n\n#menu ul.menus .has-submenu:hover .submenu .has-sub-submenu:hover .sub-submenu {\n  display: block; }\n\n#menu ul.menus .has-submenu:hover .submenu .has-sub-submenu:hover .sub-submenu .has-s3menu:hover .s3menu {\n  display: block; }\n\n.head-link > a.logout {\n  padding: 8px 14px 7px 14px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmV3LWhlYWRlci9DOlxcVXNlcnNcXGFzYXBhXFxHaXRIdWJcXFRlc3RVSUluc3RhbmNlXFxjYmFzLWFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuZXctaGVhZGVyXFxuZXctaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXctaGVhZGVyL0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcY2Jhcy1iYXNlLWNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0NBQXNDO0VBQ3RDLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNDWmdCLEVBQUE7O0FEZWxCO0VBQ0UseUJDZnNCO0VEZ0J0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2Q0FBK0MsRUFBQTs7QUFHakQ7RUFDRSw2Q0FBK0MsRUFBQTs7QUFHakQ7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUd2Qjs7RUFFRSxpQkFBaUI7RUFDakIseUJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0VBQ1QsY0NyR2dCLEVBQUE7O0FEd0dsQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzREFBc0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIseURBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQzNLZ0I7RUQ0S2hCLE1BQU07RUFDTixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0NyTGdCO0VEc0xoQixNQUFNO0VBQ04sWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNDL0xnQjtFRGdNaEIsTUFBTTtFQUNOLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixjQ3RNZ0IsRUFBQTs7QUR5TWxCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNDM01nQixFQUFBOztBRDhNbEI7RUFDRSxpQkFBaUI7RUFDakIsY0NoTmdCLEVBQUE7O0FEbU5sQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmV3LWhlYWRlci9uZXctaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2NiYXMtYmFzZS1jb2xvcnMuc2Nzc1wiO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNreS1ibHVlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICRza3ktYmx1ZTtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR2ZXJ5LWRhcmstYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuLmZhLnB1bGwtcmlnaHR7XHJcbiAgbWFyZ2luLXRvcDogMC45ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkICRza3ktYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbWVudSBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiAwLjJlbSBzb2xpZCAkc2t5LWJsdWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuI21lbnUgdWwsXHJcbiNtZW51IGxpIHtcclxuICBtYXJnaW46IDAgMDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuI21lbnUgdWwge1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuI21lbnUgbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNtZW51IGxpOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG5cclxuI21lbnUgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI21lbnUgbGk6aG92ZXIgPiBhLFxyXG4jbWVudSBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogJHNreS1ibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNtZW51IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1hcmdpbjogMCAwO1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNtZW51IGxhYmVsIHtcclxuICBmb250OiBib2xkIDMwcHggQXJpYWw7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbWVudSBsYWJlbCBzcGFuIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbiNtZW51IHVsLm1lbnVzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkNGU5ZjQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAkc2t5LWJsdWU7XHJcbn1cclxuXHJcbiNtZW51IHVsLm1lbnVzIGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250OiAxMnB4IEFyaWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4jbWVudSBsaTpob3ZlciB1bC5tZW51cyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNtZW51IGEuaG9tZSB7XHJcbiAgYmFja2dyb3VuZDogI2MwMDtcclxufVxyXG5cclxuYS5saXN0LWl0ZW0tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCAyN3B4IDAgMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZC1saW5rID4gYS5wcmV0dCB7XHJcbiAgcGFkZGluZzogOHB4IDI3cHggN3B4IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWQtbGluayA+IGEucHJldHQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItd2lkdGg6IDZweCA1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjFweCAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiA5cHg7XHJcbn1cclxuXHJcbiNtZW51IGEucHJldHQ6OmFmdGVyIHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXdpZHRoOiA2cHggNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDlweDtcclxufVxyXG5cclxuI21lbnUgYS5wcmV0dDpob3Zlcjo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItd2lkdGg6IDZweCA1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICRza3ktYmx1ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiA5cHg7XHJcbn1cclxuXHJcbiNtZW51IHVsLm1lbnVzIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNtZW51IHVsLm1lbnVzIC5zdWJtZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogJHNreS1ibHVlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbiNtZW51IHVsLm1lbnVzIC5zdWJtZW51IC5zdWItc3VibWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICRza3ktYmx1ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG4jbWVudSB1bC5tZW51cyAuc3VibWVudSAuc3ViLXN1Ym1lbnUgLnMzbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICRza3ktYmx1ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG4jbWVudSB1bC5tZW51cyAuc3VibWVudSBsaSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICRza3ktYmx1ZTtcclxufVxyXG5cclxuI21lbnUgdWwubWVudXMgLnN1Ym1lbnUgLnN1Yi1zdWJtZW51IGxpIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogJHNreS1ibHVlO1xyXG59XHJcblxyXG4jbWVudSB1bC5tZW51cyAuc3VibWVudSAuc3ViLXN1Ym1lbnUgLnMzbWVudSBsaSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICRza3ktYmx1ZTtcclxufVxyXG5cclxuI21lbnUgdWwubWVudXMgLmhhcy1zdWJtZW51OmhvdmVyIC5zdWJtZW51IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI21lbnUgdWwubWVudXMgLmhhcy1zdWJtZW51OmhvdmVyIC5zdWJtZW51IC5oYXMtc3ViLXN1Ym1lbnU6aG92ZXIgLnN1Yi1zdWJtZW51IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI21lbnUgdWwubWVudXMgLmhhcy1zdWJtZW51OmhvdmVyIC5zdWJtZW51IC5oYXMtc3ViLXN1Ym1lbnU6aG92ZXIgLnN1Yi1zdWJtZW51IC5oYXMtczNtZW51OmhvdmVyIC5zM21lbnUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVhZC1saW5rID4gYS5sb2dvdXR7XHJcbiAgcGFkZGluZzogOHB4IDE0cHggN3B4IDE0cHggIWltcG9ydGFudDtcclxufSIsIiRza3ktYmx1ZTogIzAwN0NCQTtcclxuJHZlcnktZGFyay1ibHVlOiAjMjIyQzY3O1xyXG4kZGFyay1ibHVlOiAjMTE0MTgxO1xyXG5cclxuJGxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcblxyXG4kbGlnaHQteWVsbG93OiAjRkZGMkFBO1xyXG4kZGFyay15ZWxsb3c6ICNGRkRFNkY7XHJcblxyXG4kd2hpdGU6IHdoaXRlOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/new-header/new-header.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/new-header/new-header.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NewHeaderComponent */

  /***/
  function srcAppSharedComponentsNewHeaderNewHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewHeaderComponent", function () {
      return NewHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _new_header_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./new-header.enum */
    "./src/app/shared/components/new-header/new-header.enum.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var NewHeaderComponent = /*#__PURE__*/function () {
      function NewHeaderComponent(authService) {
        _classCallCheck(this, NewHeaderComponent);

        this.authService = authService;
      }

      _createClass(NewHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu = _new_header_enum__WEBPACK_IMPORTED_MODULE_2__["HeaderMenu"].getItems;
          this.menuItems = _new_header_enum__WEBPACK_IMPORTED_MODULE_2__["HeaderMenuItems"].getMenuItems;
        } // ngAfterViewInit() {
        //   $('ul.nav li.dropdown').hover(function() {
        //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        //   }, function() {
        //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        //   });
        // }

      }, {
        key: "onClickLogout",
        value: function onClickLogout() {
          localStorage.removeItem('currentUser');
          this.authService.jwt_logout();
        }
      }]);

      return NewHeaderComponent;
    }();

    NewHeaderComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    NewHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/new-header/new-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-header.component.scss */
      "./src/app/shared/components/new-header/new-header.component.scss"))["default"]]
    })], NewHeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/new-header/new-header.enum.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/components/new-header/new-header.enum.ts ***!
    \*****************************************************************/

  /*! exports provided: HeaderMenu, HeaderMenuItems */

  /***/
  function srcAppSharedComponentsNewHeaderNewHeaderEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderMenu", function () {
      return HeaderMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderMenuItems", function () {
      return HeaderMenuItems;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var HeaderMenu = function HeaderMenu() {
      _classCallCheck(this, HeaderMenu);
    };

    HeaderMenu.getItems = [{
      title: 'Dashboard',
      link: '/dashboard',
      icon: 'fa-tachometer'
    }, {
      title: 'Dashboard',
      link: '',
      icon: 'fa-laptop'
    }, {
      title: 'Email',
      link: '',
      icon: 'fa-envelope'
    }, {
      title: 'User',
      link: '',
      icon: 'fa-user-circle'
    }, {
      title: 'Search',
      link: '',
      icon: 'fa-search'
    }];

    var HeaderMenuItems = function HeaderMenuItems() {
      _classCallCheck(this, HeaderMenuItems);
    };

    HeaderMenuItems.getMenuItems = [{
      title: 'Acquisitions',
      icon: 'fa-money',
      link: '',
      isActive: false,
      subMenu: true,
      menu_items: [{
        label: 'FY 20',
        icon: '',
        link: '',
        isActive: false,
        submenu: [{
          label: 'Pre - Commitment',
          icon: '',
          link: '/acquistions-fy20',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'Post - Commitment',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'Award',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'Analysis View',
          icon: '',
          link: '/reports/current-req-report',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'SLA Days and OAGS Cut-off Dates',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: []
        }]
      }, {
        label: 'FY 19',
        icon: '',
        link: '',
        isActive: false,
        submenu: []
      }]
    }, {
      title: 'Submit SPC',
      icon: 'fa-money',
      link: '',
      isActive: false,
      subMenu: true,
      menu_items: [{
        label: 'FY 20',
        icon: '',
        link: '',
        isActive: false,
        submenu: [{
          label: 'Administrative Change',
          icon: '',
          link: '/submit-plan',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'Dollar Change',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'Spend Plan Reductions',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'Additional Funds Request',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'Staffing Target Change Request',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: []
        }]
      }]
    }, {
      title: 'Budget Formulation',
      icon: 'fa-money',
      link: '/acquistions-fy20',
      isActive: false,
      subMenu: true,
      menu_items: [{
        label: 'Prep Budget Request',
        icon: '',
        link: '',
        isActive: false,
        submenu: [{
          label: 'FY 201',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: [{
            label: 'FY 2012',
            icon: '',
            link: '',
            isActive: false,
            s3menu: []
          }]
        }, {
          label: 'Plan Budget Request',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: [{
            label: 'Plan Revised Budget FY20',
            icon: '',
            link: '',
            isActive: false,
            s3menu: [{
              label: 'Plan Revised Payroll',
              icon: '',
              link: '',
              isActive: false
            }, {
              label: 'Plan Revised Acquisitions & Operations',
              icon: '',
              link: '',
              isActive: false
            }, {
              label: 'Review',
              icon: '',
              link: '',
              isActive: false
            }]
          }]
        }]
      }, {
        label: 'Plan Budget Request',
        icon: '',
        link: '',
        isActive: false,
        submenu: []
      }, {
        label: 'Plan ORA FTEs',
        icon: '',
        link: '',
        isActive: false,
        submenu: []
      }, {
        label: 'Plan Recommendation Budget',
        icon: '',
        link: '',
        isActive: false,
        submenu: []
      }, {
        label: 'Update and Review Budget by Key Activity',
        icon: '',
        link: '',
        isActive: false,
        submenu: []
      }, {
        label: 'Review Budget Request by Topic',
        icon: '',
        link: '',
        isActive: false,
        submenu: []
      }, {
        label: 'Finalize Budget Request',
        icon: '',
        link: '',
        isActive: false,
        submenu: []
      }]
    }, {
      title: 'Spend PLan',
      icon: 'fa-money',
      link: '/approvePlan/approve-submit-plan',
      isActive: false,
      subMenu: true,
      menu_items: [{
        label: 'Review F20 SPC',
        icon: '',
        link: '',
        isActive: false,
        submenu: [{
          label: 'Administrative Change',
          icon: '',
          link: '/approvePlan/approve-submit-plan',
          isActive: false,
          subSubmenu: []
        }, {
          label: 'FY 202',
          icon: '',
          link: '',
          isActive: false,
          subSubmenu: [{
            label: 'FY 2012',
            icon: '',
            link: '',
            isActive: false,
            s3menu: []
          }]
        }]
      }]
    }];
    /***/
  },

  /***/
  "./src/app/shared/components/page-header/page-header.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/page-header/page-header.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsPageHeaderPageHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/page-header/page-header.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
    \************************************************************************/

  /*! exports provided: PageHeaderComponent */

  /***/
  function srcAppSharedComponentsPageHeaderPageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
      return PageHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PageHeaderComponent = /*#__PURE__*/function () {
      function PageHeaderComponent(route) {
        _classCallCheck(this, PageHeaderComponent);

        this.route = route;
      }

      _createClass(PageHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageHeaderComponent;
    }();

    PageHeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/page-header/page-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-header.component.scss */
      "./src/app/shared/components/page-header/page-header.component.scss"))["default"]]
    })], PageHeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidebar .brand {\n  height: 12rem !important;\n  cursor: pointer;\n  outline: none; }\n\n.sidebar {\n  position: fixed;\n  z-index: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 224px;\n  background-color: #007CBA;\n  color: #fff; }\n\n.sidebar-nav,\n.sidebar {\n  padding: 0.75rem 0; }\n\n.sidebar-logoexpand {\n  display: block;\n  width: 180px;\n  margin: 10px 10px 0px 10px; }\n\n.sidebar-logocollapse {\n  display: block;\n  width: 60px;\n  margin: 10px 10px 0px 10px; }\n\n.sidebarexpand {\n  color: white; }\n\n.sidebarcollapse {\n  color: yellow; }\n\n.border-top-white {\n  border-top: 0.1rem solid white !important; }\n\n.border-li-white {\n  border-top: 0.1rem solid white !important;\n  border-bottom: 0.1rem solid white !important; }\n\n.border-left-yellow {\n  border-left: 0.2rem solid #fff2aa !important;\n  color: #fff2aa !important; }\n\n.border-left-yellow span.pl-2 {\n  color: #fff2aa !important; }\n\n.brand {\n  height: 12rem !important;\n  width: 100% !important;\n  background: url('CBAS-no-bg.png') no-repeat !important; }\n\n.sidebar.sidebar-collapsed .brand {\n  height: 2.8rem;\n  margin-left: 0.8rem; }\n\n@media (max-width: 768px) {\n  .sidebar .brand {\n    height: 2.8rem;\n    margin-left: 0.8rem; } }\n\n.user-menu {\n  bottom: 0.0625rem;\n  position: absolute;\n  width: 100%; }\n\n.sidebar ul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.list-group-item {\n  background-color: #007CBA !important;\n  border-bottom: 0.001em solid white !important; }\n\n.list-group-item a {\n  color: white !important; }\n\n.list-group-item:first-child {\n  border-top: 0.001em solid white !important;\n  border-top-left-radius: 0em !important;\n  border-top-right-radius: 0em !important; }\n\n.list-group-item:last-child {\n  border-bottom-right-radius: 0rem !important;\n  border-bottom-left-radius: 0rem !important; }\n\n.sidebar li.list-group-item.active {\n  border-left: 0.2em solid #FFF2AA !important;\n  border-top: 0.1em solid #FFF2AA !important;\n  border-bottom: 0.1em solid #FFF2AA !important;\n  background-color: rgba(255, 255, 255, 0.1) !important; }\n\n.sidebar li.list-group-item a.active {\n  color: #FFF2AA !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXGFzYXBhXFxHaXRIdWJcXFRlc3RVSUluc3RhbmNlXFxjYmFzLWFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcYXNhcGFcXEdpdEh1YlxcVGVzdFVJSW5zdGFuY2VcXGNiYXMtYXBwL3NyY1xcY2Jhcy1iYXNlLWNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBSWpCO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJDbEJnQjtFRG1CaEIsV0FBVyxFQUFBOztBQUdiOztFQUVFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSx5Q0FBeUM7RUFDekMsNENBQTRDLEVBQUE7O0FBRzlDO0VBQ0UsNENBQTRDO0VBQzVDLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsc0RBQWdGLEVBQUE7O0FBSWxGO0VBR00sY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUd2QjtFQVBGO0lBU00sY0FBYztJQUNkLG1CQUFtQixFQUFBLEVBQ3BCOztBQUlMO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLG9DQUFzQztFQUN0Qyw2Q0FBNkMsRUFBQTs7QUFHL0M7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSwwQ0FBMEM7RUFDMUMsc0NBQXNDO0VBQ3RDLHVDQUF1QyxFQUFBOztBQUd6QztFQUNFLDJDQUEyQztFQUMzQywwQ0FBMEMsRUFBQTs7QUFHNUM7RUFFSSwyQ0FBaUQ7RUFDakQsMENBQWdEO0VBQ2hELDZDQUFtRDtFQUNuRCxxREFBcUQsRUFBQTs7QUFMekQ7RUFRSSx5QkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jYmFzLWJhc2UtY29sb3JzLnNjc3NcIjtcclxuXHJcbi8vIGFkanVzdG1lbnQgZm9yIHRoZSBzaXplIG9mIHRoaXMgcHJvamVjdCdzIGxvZ28uXHJcbi5zaWRlYmFyIHtcclxuICAuYnJhbmQge1xyXG4gICAgaGVpZ2h0OiAxMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDIyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRza3ktYmx1ZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpZGViYXItbmF2LFxyXG4uc2lkZWJhciB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvZXhwYW5kIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ29jb2xsYXBzZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyZXhwYW5kIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaWRlYmFyY29sbGFwc2Uge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5ib3JkZXItdG9wLXdoaXRlIHtcclxuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1saS13aGl0ZSB7XHJcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItbGVmdC15ZWxsb3cge1xyXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgI2ZmZjJhYSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmMmFhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItbGVmdC15ZWxsb3cgc3Bhbi5wbC0yIHtcclxuICBjb2xvcjogI2ZmZjJhYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJhbmQge1xyXG4gIGhlaWdodDogMTJyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ0JBUy1uby1iZy5wbmdcIikgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGFkanVzdGluZyB0aGUgbG9nbyBmb3IgdGhlIGNvbGxhcHNlZCB2ZXJzaW9uIG9mIHRoZSBzaWRlYmFyLlxyXG4uc2lkZWJhciB7XHJcbiAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XHJcbiAgICAuYnJhbmQge1xyXG4gICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYnJhbmQge1xyXG4gICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51c2VyLW1lbnUge1xyXG4gIGJvdHRvbTogMC4wNjI1cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2lkZWJhciB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNreS1ibHVlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wMDFlbSBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIGEge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wOiAwLjAwMWVtIHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMGVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgbGkubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItbGVmdDogMC4yZW0gc29saWQgJGxpZ2h0LXllbGxvdyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMC4xZW0gc29saWQgJGxpZ2h0LXllbGxvdyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgJGxpZ2h0LXllbGxvdyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGxpLmxpc3QtZ3JvdXAtaXRlbSBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGxpZ2h0LXllbGxvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIkc2t5LWJsdWU6ICMwMDdDQkE7XHJcbiR2ZXJ5LWRhcmstYmx1ZTogIzIyMkM2NztcclxuJGRhcmstYmx1ZTogIzExNDE4MTtcclxuXHJcbiRsaWdodC1ncmV5OiAjRDVENUQ1O1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG5cclxuJGxpZ2h0LXllbGxvdzogI0ZGRjJBQTtcclxuJGRhcmsteWVsbG93OiAjRkZERTZGO1xyXG5cclxuJHdoaXRlOiB3aGl0ZTsiXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sidebar_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar.enum */
    "./src/app/shared/components/sidebar/sidebar.enum.ts");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);

        this.menu = _sidebar_enum__WEBPACK_IMPORTED_MODULE_2__["SidebarItems"].getItems;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/shared/components/sidebar/sidebar.component.scss"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.enum.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.enum.ts ***!
    \***********************************************************/

  /*! exports provided: SidebarItems */

  /***/
  function srcAppSharedComponentsSidebarSidebarEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarItems", function () {
      return SidebarItems;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SidebarItems = function SidebarItems() {
      _classCallCheck(this, SidebarItems);
    };

    SidebarItems.getItems = [{
      title: 'Dashboard',
      icon: 'fa-tachometer',
      link: '/dashboard',
      isActive: false,
      subMenu: []
    }, {
      title: 'Acquisitions FY19',
      icon: 'fa-money',
      link: '',
      isActive: false,
      subMenu: []
    }, {
      title: 'Acquisitions FY20',
      icon: 'fa-money',
      link: '/acquistions-fy20',
      isActive: false,
      subMenu: true,
      subMenuContent: [{
        menu_items: [{
          label: 'Pre - Commitment Project Details',
          icon: '',
          link: '',
          isActive: false,
          subMenu: []
        }, {
          label: 'Post - Commitment Project Details',
          icon: '',
          link: '',
          isActive: false,
          subMenu: []
        }]
      }]
    }, {
      title: 'Post - Commitment Project Details',
      icon: 'fa-money',
      link: '/reports/current-request-reports',
      isActive: false,
      subMenu: []
    }, {
      title: 'Reports',
      icon: 'fa-file-text-o',
      link: '/reports/current-req-report',
      isActive: false,
      subMenu: true,
      subMenuContent: [{
        menu_items: [{
          label: 'Current Req Report',
          icon: '',
          link: '',
          isActive: false,
          subMenu: []
        }, {
          label: 'All Awards Report',
          icon: '',
          link: '',
          isActive: false,
          subMenu: []
        }]
      }]
    }, {
      title: 'Submit FY20 Spend Plan Change Request',
      icon: 'fa-upload',
      link: '/submit-plan',
      isActive: false,
      subMenu: true,
      subMenuContent: [{
        menu_items: [{
          label: 'Administrative Change',
          icon: '',
          link: '',
          isActive: false,
          subMenu: []
        }, {
          label: 'Submit Change',
          icon: '',
          link: '',
          isActive: false,
          subMenu: []
        }]
      }]
    }, {
      title: 'Approve FY20 Spend Plan Change Request',
      icon: 'fa-thumbs-o-up',
      link: '/approvePlan/approve-submit-plan',
      isActive: false,
      subMenu: []
    }, {
      title: 'Review SLA Days and Cut-Off Dates',
      icon: 'fa-calendar-o',
      link: '',
      isActive: false,
      subMenu: []
    }, {
      title: 'Email CBAS Admin',
      icon: 'fa-envelope-o',
      link: '',
      isActive: false,
      subMenu: []
    }];
    /***/
  },

  /***/
  "./src/app/shared/components/text-input/text-input.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/text-input/text-input.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsTextInputTextInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".red-input:focus {\n  background: yellow;\n  color: red; }\n\n.blue-input:focus {\n  background: yellow;\n  color: blue; }\n\n.local-span {\n  background: yellow;\n  color: black; }\n\n.required {\n  font-weight: bold;\n  color: #E64C3C;\n  margin-left: 0;\n  font-size: 1.2em;\n  position: relative;\n  top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC9DOlxcVXNlcnNcXGFzYXBhXFxHaXRIdWJcXFRlc3RVSUluc3RhbmNlXFxjYmFzLWFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx0ZXh0LWlucHV0XFx0ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZC1pbnB1dDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYmx1ZS1pbnB1dDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmxvY2FsLXNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0U2NEMzQztcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/text-input/text-input.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/text-input/text-input.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TEXT_INPUT_CONTROL_VALUE_ACCESSOR, TextInputComponent */

  /***/
  function srcAppSharedComponentsTextInputTextInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEXT_INPUT_CONTROL_VALUE_ACCESSOR", function () {
      return TEXT_INPUT_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
      return TextInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _validation_msg_validation_msg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../validation-msg/validation-msg.component */
    "./src/app/shared/components/validation-msg/validation-msg.component.ts");
    /* harmony import */


    var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../utilities */
    "./src/app/shared/utilities.ts"); // import { NgbTooltip } from '@ng-bootstrap';


    var TEXT_INPUT_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return TextInputComponent;
      }),
      multi: true
    };
    var nextUniqueId = 0;
    var nextAriaDescribedById = 0;

    var TextInputComponent = /*#__PURE__*/function () {
      function TextInputComponent(_parentForm, ngControl, tabIndex) {
        _classCallCheck(this, TextInputComponent);

        this._parentForm = _parentForm;
        this.ngControl = ngControl;
        this._uid = "app-input-".concat(nextUniqueId++);
        this._ariadesribedById = "ai-aria-text-input-".concat(nextAriaDescribedById++);
        this.type = 'text';
        this.disabled = false;
        this.focusOnValidate = false;
        this.focusOnLoad = false;
        this.errors = [];
        this.isRequired = false;
        this.showRemainingCharacters = false;

        this.onTouchedCallback = function () {};

        this.onChangeCallback = function (t) {};

        if (this.ngControl) {
          // Note: we provide the value accessor through here, instead of
          // the `providers` to avoid running into a circular import.
          this.ngControl.valueAccessor = this;
        }

        this.id = this.id;
        this.tabIndex = parseInt(tabIndex, 10) || 0;
      }

      _createClass(TextInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.isRequired = this.isRequired || Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["hasRequiredValidator"])(this.ngControl);

          if (this.ngControl) {
            // this._parentForm.statusChanges.subscribe(x => x.validate());
            this.ngControl.statusChanges.subscribe(function (x) {
              return _this37.validate();
            });
          }

          if (this.removeOptional === true) {
            this.isRequired = true;
          }
        }
      }, {
        key: "validate",
        value: function validate() {
          var _this38 = this;

          this.errors = [];

          if (this.ngControl.touched && !this.ngControl.valid && this.ngControl.errors != null) {
            var _loop2 = function _loop2(d) {
              var valMsg = _this38.validationMessages.find(function (msg) {
                return msg.validator === d;
              });

              if (valMsg != null) {
                _this38.errors.push(valMsg.msg);
              } else {
                _this38.errors.push(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["getErrorTextFromValidationResult"])(d, _this38.ngControl.errors[d]));
              }
            };

            // tslint:disable-next-line:forin
            for (var d in this.ngControl.errors) {
              _loop2(d);
            }

            if (this.focusOnValidate) {
              this.focusElement.nativeElement.focus();
            }
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown($event) {
          if ($event.code === 'ArrowLeft' || $event.key === 'ArrowRight' || $event.key === 'Delete' || $event.key === 'Backspace' || $event.code === 'Shift' || $event.code === 'Tab' || $event.ctrlKey) {
            return;
          }

          if (this.maxLength) {
            if (this.text && this.text.length >= this.maxLength) {
              $event.preventDefault();
              $event.stopPropagation();
              $event.cancelBubble = true;
            }
          }
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {}
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.onTouchedCallback();
        }
      }, {
        key: "writeValue",
        value: function writeValue(obj) {
          this.text = obj;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "inputChanged",
        value: function inputChanged(t) {
          this.text = t;
          this.onChangeCallback(this.text);
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(value) {
          this._id = value || this._uid;
        }
      }, {
        key: "ariaDesribedById",
        get: function get() {
          return this._ariadesribedById;
        }
      }, {
        key: "remainingChars",
        get: function get() {
          return this.text != null ? this.maxLength - this.text.length : this.maxLength;
        }
      }]);

      return TextInputComponent;
    }();

    TextInputComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('focusElement', {
      "static": false
    })], TextInputComponent.prototype, "focusElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "focusOnValidate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "mask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "formatHelp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "tabIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "maxLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "id", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "focusOnLoad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_validation_msg_validation_msg_component__WEBPACK_IMPORTED_MODULE_3__["ValidationMsg"], {
      descendants: true
    })], TextInputComponent.prototype, "validationMessages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "isRequired", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "showRemainingCharacters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "removeOptional", void 0);
    TextInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text-input.component.scss */
      "./src/app/shared/components/text-input/text-input.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('tabindex'))], TextInputComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/validation-msg/validation-msg.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/validation-msg/validation-msg.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ValidationMsg */

  /***/
  function srcAppSharedComponentsValidationMsgValidationMsgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationMsg", function () {
      return ValidationMsg;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValidationMsg =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function ValidationMsg() {
        _classCallCheck(this, ValidationMsg);
      }

      _createClass(ValidationMsg, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ValidationMsg;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ValidationMsg.prototype, "validator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ValidationMsg.prototype, "msg", void 0);
    ValidationMsg = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-val-msg',
      template: ''
    }) // tslint:disable-next-line:component-class-suffix
    ], ValidationMsg);
    /***/
  },

  /***/
  "./src/app/shared/directives/layout-item.directive.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/directives/layout-item.directive.ts ***!
    \************************************************************/

  /*! exports provided: LayoutItemDirective */

  /***/
  function srcAppSharedDirectivesLayoutItemDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutItemDirective", function () {
      return LayoutItemDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var components = {};

    var LayoutItemDirective = /*#__PURE__*/function () {
      function LayoutItemDirective(container, resolver) {
        _classCallCheck(this, LayoutItemDirective);

        this.container = container;
        this.resolver = resolver;
      }

      _createClass(LayoutItemDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var component = components[this.componentRef];

          if (component) {
            var factory = this.resolver.resolveComponentFactory(component);
            this.component = this.container.createComponent(factory);
          }
        }
      }]);

      return LayoutItemDirective;
    }();

    LayoutItemDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayoutItemDirective.prototype, "componentRef", void 0);
    LayoutItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appLayoutItem]'
    })], LayoutItemDirective);
    /***/
  },

  /***/
  "./src/app/shared/interceptors/error.interceptor.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
    \**********************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppSharedInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts"); // import { AuthenticationService } from '../_services';


    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(auth) {
        _classCallCheck(this, ErrorInterceptor);

        this.auth = auth;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this39 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this39.auth.jwt_logout(); // location.reload(true);

            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/interceptors/jwt.interceptor.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/interceptors/jwt.interceptor.ts ***!
    \********************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppSharedInterceptorsJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /*tslint:disable:indent*/


    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(auth) {
        _classCallCheck(this, JwtInterceptor);

        this.auth = auth;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (request.url.includes('api/auth/token')) {
            this.sessionToken = this.auth.jwt_getRefreshToken();
          } else {
            this.sessionToken = this.auth.jwt_getAccessToken();
          }

          var headers = request.headers.set('Content-Type', 'application/json').set('Cache-control', 'no-cache').set('Cache-control', 'no-store').set('Pragma', 'no-cache').set('Expires', '0');

          if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.sessionToken)) {
            headers = headers.set('X-Authorization', "Bearer ".concat(this.sessionToken)).set('X-Requested-With', 'XMLHttpRequest');
          }

          request = request.clone({
            headers: headers
          });
          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/models/dropdown.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/models/dropdown.model.ts ***!
    \*************************************************/

  /*! exports provided: DropDownModel */

  /***/
  function srcAppSharedModelsDropdownModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownModel", function () {
      return DropDownModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DropDownModel = function DropDownModel() {
      _classCallCheck(this, DropDownModel);

      this.officeList = [];
      this.acquisitionTypeList = [];
      this.versionList = [];
      this.projectTitleList = [];
    };
    /***/

  },

  /***/
  "./src/app/shared/services/acquisition.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/acquisition.service.ts ***!
    \********************************************************/

  /*! exports provided: AcquisitionService */

  /***/
  function srcAppSharedServicesAcquisitionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcquisitionService", function () {
      return AcquisitionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-api-endpoints.config */
    "./src/app/app-api-endpoints.config.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AcquisitionService = /*#__PURE__*/function () {
      function AcquisitionService(http, appEndPoints) {
        _classCallCheck(this, AcquisitionService);

        this.http = http;
        this.appEndPoints = appEndPoints;
        this.getAcquisitionurl = this.appEndPoints.getBaseUrl + '/api/v1/acquisition/essacquisition/';
        this.getAcquisitionOfficeurl = this.appEndPoints.getBaseUrl + '/api/v1/acquisition/essacquisition/office/';
        this.getAcquistionPrecommitmenturl = this.appEndPoints.getBaseUrl + '/api/v1/acquisition/essacquisition/precommitmentlist/';
        this.getAcquisitionfy20 = this.appEndPoints.getBaseUrl + '/api/v1/acquisition/essacquisition/precommitmentdetails/';
        this.getReportStateUrl = this.appEndPoints.getBaseUrl + '/api/useradmin/';
      }

      _createClass(AcquisitionService, [{
        key: "getAcquisitionData",
        value: function getAcquisitionData() {
          return this.http.get(this.getAcquisitionurl, httpOptions);
        }
      }, {
        key: "postAcquisitionData",
        value: function postAcquisitionData(payload, office1, acquisitionType1, version1) {
          var url = this.getAcquisitionurl + "updatewithctp/?office=".concat(office1, "&acquisitonType=").concat(acquisitionType1, "&version=").concat(version1);
          return this.http.post(url, payload, httpOptions);
        }
      }, {
        key: "getAcquisitionGridFilter",
        value: function getAcquisitionGridFilter(userId) {
          return this.http.get(this.getReportStateUrl + 'filter/list/?userid=' + userId, httpOptions);
        }
      }, {
        key: "postAcquisitionGridFilter",
        value: function postAcquisitionGridFilter(payload) {
          return this.http.post(this.getReportStateUrl + 'savefilter/', payload, httpOptions);
        }
      }, {
        key: "postAcquisitionDataOptional",
        value: function postAcquisitionDataOptional(payload, office1) {
          return this.http.post(this.getAcquisitionurl + 'updatewithctp/?office=' + office1, payload, httpOptions);
        }
      }, {
        key: "getAcquisitionOfficeData",
        value: function getAcquisitionOfficeData() {
          return this.http.get(this.getAcquisitionOfficeurl, httpOptions);
        }
      }, {
        key: "getAcquisitionPreCommitmentData",
        value: function getAcquisitionPreCommitmentData() {
          return this.http.get(this.getAcquistionPrecommitmenturl, httpOptions);
        }
      }, {
        key: "getAcquisitionPreCommitmentDataWithOffice",
        value: function getAcquisitionPreCommitmentDataWithOffice(office) {
          return this.http.get(this.getAcquistionPrecommitmenturl + '?office=' + office, httpOptions);
        }
      }, {
        key: "getAcquisitionPreCommitmentDataWithAcquisition",
        value: function getAcquisitionPreCommitmentDataWithAcquisition(office, acquisitonType) {
          var url = this.getAcquistionPrecommitmenturl + '?office=' + office + '&acquisitonType=' + acquisitonType;
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "getAcquisitionFYTwentyData",
        value: function getAcquisitionFYTwentyData(office, acquisitionType, version, lineItem) {
          var url = this.getAcquisitionfy20 + "?office=".concat(office, "&acquisitonType=").concat(acquisitionType, "&version=").concat(version, "&lineItem=").concat(lineItem);
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "getAcquisitionCTPData",
        value: function getAcquisitionCTPData(office1, acquisitionType1, version1, role) {
          var url = this.getAcquisitionurl + "ctp/?office=".concat(office1, "&acquisitonType=").concat(acquisitionType1, "&version=").concat(version1, "&role=").concat(role);
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "getAcquisitionCTPDataWithOptional",
        value: function getAcquisitionCTPDataWithOptional(office1, role) {
          return this.http.get(this.getAcquisitionurl + 'ctp/?office=' + office1 + '&role=' + role, httpOptions);
        }
      }, {
        key: "getAcquisitionRunCalc",
        value: function getAcquisitionRunCalc(ALLOC1) {
          return this.http.get(this.getAcquisitionurl + 'runcalc/?runcCalcValue=ALLOC1', httpOptions);
        }
      }, {
        key: "getAcquisitionRunCalcRevisdAmt",
        value: function getAcquisitionRunCalcRevisdAmt() {
          return this.http.get(this.getAcquisitionurl + 'runcalc/?runcCalcValue=AGGSPC', httpOptions);
        }
      }]);

      return AcquisitionService;
    }();

    AcquisitionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndpointsConfig"]
      }];
    };

    AcquisitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AcquisitionService);
    /***/
  },

  /***/
  "./src/app/shared/services/admin.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/admin.service.ts ***!
    \**************************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppSharedServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app-api-endpoints.config */
    "./src/app/app-api-endpoints.config.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AdminService = /*#__PURE__*/function () {
      function AdminService(http, apiEndpoints) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.apiEndpoints = apiEndpoints;
      }

      _createClass(AdminService, [{
        key: "getUserByEmail",
        value: function getUserByEmail(email) {
          var url = this.apiEndpoints.getUserByEmailUrl() + '/retrieve';
          return this.http.post(url, email, httpOptions);
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_3__["ApiEndpointsConfig"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/app-api-endpoints.config */
    "./src/app/app-api-endpoints.config.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router, appEndPoints) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.appEndPoints = appEndPoints;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "publishChanges",
        value: function publishChanges(user) {
          this.currentUserSubject.next(user);
        }
      }, {
        key: "jwt_login",
        value: function jwt_login(credentials) {
          var url = this.appEndPoints.getLoginUrl();
          return this.http.post(url, credentials, httpOptions);
        }
      }, {
        key: "jwt_setAccessToken",
        value: function jwt_setAccessToken(accesstoken) {
          localStorage.setItem('access_token_id', accesstoken);
        }
      }, {
        key: "jwt_getAccessToken",
        value: function jwt_getAccessToken() {
          return localStorage.getItem('access_token_id');
        }
      }, {
        key: "jwt_removeAccessToken",
        value: function jwt_removeAccessToken() {
          localStorage.removeItem('access_token_id');
        }
      }, {
        key: "jwt_setRefreshToken",
        value: function jwt_setRefreshToken(refreshtoken) {
          localStorage.setItem('refresh_token_id', refreshtoken);
        }
      }, {
        key: "jwt_getRefreshToken",
        value: function jwt_getRefreshToken() {
          return localStorage.getItem('refresh_token_id');
        }
      }, {
        key: "jwt_hasRole",
        value: function jwt_hasRole(roleName) {
          var scopes = this.jwt_getScopes();

          for (var i in scopes) {
            if (scopes[i] === roleName) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "jwt_getScopes",
        value: function jwt_getScopes() {
          var token = localStorage.getItem('access_token_id');
          var scopes = this.jwtHelper.decodeToken(token).scopes;
          return scopes;
        }
      }, {
        key: "jwt_removeRefreshToken",
        value: function jwt_removeRefreshToken() {
          localStorage.removeItem('refresh_token_id');
        }
      }, {
        key: "jwt_logout",
        value: function jwt_logout() {
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
          this.jwt_removeAccessToken();
          this.jwt_removeRefreshToken();
          this.router.navigate(['/login']);
        }
      }, {
        key: "jwt_getRole",
        value: function jwt_getRole() {
          return localStorage.getItem('role_list');
        }
      }, {
        key: "jwt_setRole",
        value: function jwt_setRole(rolelist) {
          localStorage.setItem('role_list', rolelist);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_app_api_endpoints_config__WEBPACK_IMPORTED_MODULE_6__["ApiEndpointsConfig"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/services/grid.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/grid.service.ts ***!
    \*************************************************/

  /*! exports provided: GridService */

  /***/
  function srcAppSharedServicesGridServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridService", function () {
      return GridService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GridService = /*#__PURE__*/function () {
      function GridService() {
        _classCallCheck(this, GridService);
      }

      _createClass(GridService, [{
        key: "autoSizeCols",
        value: function autoSizeCols(skipHeader) {
          var allColumnIds = [];
          this.gridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
          });
          this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.sizeColumnsToFit();
        }
      }]);

      return GridService;
    }();

    GridService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GridService);
    /***/
  },

  /***/
  "./src/app/shared/services/layout.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/layout.service.ts ***!
    \***************************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppSharedServicesLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutService = /*#__PURE__*/function () {
      function LayoutService() {
        _classCallCheck(this, LayoutService);

        this.options = {
          compactType: 'compactUp&Left',
          resizable: {
            enabled: true
          },
          floating: true,
          pushing: true,
          swapping: true,
          isMobile: true,
          mobileBreakPoint: 768,
          columns: this.getColumns(),
          dynamicColumns: true,
          minWidthToAddANewColumn: 255,
          rowHeight: 400,
          draggable: {
            enabled: true
          }
        };
        this.layout = [];
        this.components = [];
      }

      _createClass(LayoutService, [{
        key: "getColumns",
        value: function getColumns() {
          var browserWidth = window.innerWidth;

          if (browserWidth < 1300) {
            return 3;
          } else if (browserWidth < 1500) {
            return 4;
          } else if (browserWidth < 1700) {
            return 5;
          }

          return 6;
        }
      }, {
        key: "deleteItem",
        // addItem(): void {
        //   this.layout.push({
        //     cols: 5,
        //     id: UUID.UUID(),
        //     rows: 5,
        //     x: 0,
        //     y: 0
        //   });
        // }
        value: function deleteItem(id) {
          var item = this.layout.find(function (d) {
            return d.id === id;
          });
          this.layout.splice(this.layout.indexOf(item), 1);
          var comp = this.components.find(function (c) {
            return c.id === id;
          });
          this.components.splice(this.components.indexOf(comp), 1);
        }
      }, {
        key: "setDropId",
        value: function setDropId(dropId) {
          this.dropId = dropId;
        }
      }, {
        key: "dropItem",
        value: function dropItem(dragId) {
          var _this40 = this;

          var components = this.components;
          var comp = components.find(function (c) {
            return c.id === _this40.dropId;
          });
          var updateIdx = comp ? components.indexOf(comp) : components.length;
          var componentItem = {
            id: this.dropId,
            componentRef: dragId
          };
          this.components = Object.assign([], this.components, _defineProperty({}, updateIdx, componentItem));
        }
      }, {
        key: "getComponentRef",
        value: function getComponentRef(id) {
          var comp = this.components.find(function (c) {
            return c.id === id;
          });
          return comp ? comp.componentRef : null;
        }
      }]);

      return LayoutService;
    }();

    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LayoutService);
    /***/
  },

  /***/
  "./src/app/shared/services/login-in-user-guard.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/services/login-in-user-guard.service.ts ***!
    \****************************************************************/

  /*! exports provided: LoggedInUserGuard */

  /***/
  function srcAppSharedServicesLoginInUserGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedInUserGuard", function () {
      return LoggedInUserGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/auth.service.ts");

    var LoggedInUserGuard = /*#__PURE__*/function () {
      function LoggedInUserGuard(router, authService) {
        _classCallCheck(this, LoggedInUserGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(LoggedInUserGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isLoggedIn = this.authService.currentUserValue;

          if (isLoggedIn) {
            return true;
          }

          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return LoggedInUserGuard;
    }();

    LoggedInUserGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoggedInUserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoggedInUserGuard);
    /***/
  },

  /***/
  "./src/app/shared/services/smartListConversion.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/services/smartListConversion.service.ts ***!
    \****************************************************************/

  /*! exports provided: SmartListConversionService */

  /***/
  function srcAppSharedServicesSmartListConversionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmartListConversionService", function () {
      return SmartListConversionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SmartListConversionService = /*#__PURE__*/function () {
      function SmartListConversionService() {
        _classCallCheck(this, SmartListConversionService);
      }

      _createClass(SmartListConversionService, [{
        key: "getSmartList",
        value: function getSmartList(acquisitionData) {
          console.log('log smart list', acquisitionData);
          acquisitionData.forEach(function (a) {
            switch (a.fbrNumber) {
              case '1.0':
                a.fbrNumber = 'New FBR Line Item';
                break;

              case '2.0':
                a.fbrNumber = 'S&E Line Item';
                break;

              case '3.0':
                a.fbrNumber = 'FBR-NEITCT';
                break;

              case '4.0':
                a.fbrNumber = 'FBR-000002';
                break;

              case '5.0':
                a.fbrNumber = 'FBR-000003';
                break;

              case '6.0':
                a.fbrNumber = 'FBR-000004';
                break;

              case '7.0':
                a.fbrNumber = 'FBR-000005';
                break;

              case '8.0':
                a.fbrNumber = 'FBR-000006';
                break;

              case '9.0':
                a.fbrNumber = 'FBR-000007';
                break;

              case '10.0':
                a.fbrNumber = 'FBR-000008';
                break;

              case '11.0':
                a.fbrNumber = 'FBR-000011';
                break;

              case '12.0':
                a.fbrNumber = 'FBR-0000013';
                break;

              case '13.0':
                a.fbrNumber = 'FBR-000332';
                break;

              case '14.0':
                a.fbrNumber = 'FBR-000917';
                break;

              case '15.0':
                a.fbrNumber = 'FBR-000961';
                break;

              case '16.0':
                a.fbrNumber = 'FBR-000981';
                break;

              case '17.0':
                a.fbrNumber = 'FBR-000984';
                break;

              case '18.0':
                a.fbrNumber = 'FBR-000999';
                break;

              case '19.0':
                a.fbrNumber = 'FBR-001006';
                break;

              case '20.0':
                a.fbrNumber = 'FBR-000015';
                break;

              case '21.0':
                a.fbrNumber = 'FBR-000016';
                break;

              case '22.0':
                a.fbrNumber = 'FBR-000017';
                break;

              case '23.0':
                a.fbrNumber = 'FBR-000020';
                break;

              case '24.0':
                a.fbrNumber = 'FBR-000021';
                break;

              case '25.0':
                a.fbrNumber = 'FBR-000026';
                break;

              case '26.0':
                a.fbrNumber = 'FBR-000027';
                break;

              case '27.0':
                a.fbrNumber = 'FBR-000028';
                break;

              case '28.0':
                a.fbrNumber = 'FBR-000029';
                break;

              case '29.0':
                a.fbrNumber = 'FBR-000030';
                break;

              case '30.0':
                a.fbrNumber = 'FBR-000031';
                break;

              case '31.0':
                a.fbrNumber = 'FBR-000032';
                break;

              case '32.0':
                a.fbrNumber = 'FBR-000035';
                break;

              case '33.0':
                a.fbrNumber = 'FBR-000036';
                break;

              case '34.0':
                a.fbrNumber = 'FBR-000040';
                break;

              case '35.0':
                a.fbrNumber = 'FBR-000043';
                break;

              case '36.0':
                a.fbrNumber = 'FBR-000047';
                break;

              case '37.0':
                a.fbrNumber = 'FBR-000048';
                break;

              case '38.0':
                a.fbrNumber = 'FBR-000049';
                break;

              case '39.0':
                a.fbrNumber = 'FBR-000050';
                break;

              case '40.0':
                a.fbrNumber = 'FBR-000051';
                break;

              case '41.0':
                a.fbrNumber = 'FBR-000052';
                break;

              case '42.0':
                a.fbrNumber = 'FBR-000053';
                break;

              case '43.0':
                a.fbrNumber = 'FBR-000054';
                break;

              case '44.0':
                a.fbrNumber = 'FBR-000056';
                break;

              case '45.0':
                a.fbrNumber = 'FBR-000057';
                break;

              case '46.0':
                a.fbrNumber = 'FBR-000058';
                break;

              case '47.0':
                a.fbrNumber = 'FBR-000059';
                break;

              case '48.0':
                a.fbrNumber = 'FBR-000060';
                break;

              case '49.0':
                a.fbrNumber = 'FBR-000061';
                break;

              case '50.0':
                a.fbrNumber = 'FBR-000062';
                break;

              case '51.0':
                a.fbrNumber = 'FBR-000063';
                break;

              case '52.0':
                a.fbrNumber = 'FBR-000064';
                break;

              case '53.0':
                a.fbrNumber = 'FBR-000065';
                break;

              case '54.0':
                a.fbrNumber = 'FBR-000066';
                break;

              case '55.0':
                a.fbrNumber = 'FBR-000072';
                break;

              case '56.0':
                a.fbrNumber = 'FBR-000076';
                break;

              case '57.0':
                a.fbrNumber = 'FBR-000078';
                break;

              case '58.0':
                a.fbrNumber = 'FBR-000079';
                break;

              case '59.0':
                a.fbrNumber = 'FBR-000080';
                break;

              case '60.0':
                a.fbrNumber = 'FBR-000081';
                break;

              case '61.0':
                a.fbrNumber = 'FBR-000082';
                break;

              case '62.0':
                a.fbrNumber = 'FBR-000084';
                break;

              case '63.0':
                a.fbrNumber = 'FBR-000085';
                break;

              case '64.0':
                a.fbrNumber = 'FBR-000086';
                break;

              case '65.0':
                a.fbrNumber = 'FBR-000087';
                break;

              case '66.0':
                a.fbrNumber = 'FBR-000088';
                break;

              case '67.0':
                a.fbrNumber = 'FBR-000089';
                break;

              case '68.0':
                a.fbrNumber = 'FBR-000090';
                break;

              case '69.0':
                a.fbrNumber = 'FBR-000092';
                break;

              case '70.0':
                a.fbrNumber = 'FBR-000093';
                break;

              case '71.0':
                a.fbrNumber = 'FBR-000094';
                break;

              case '72.0':
                a.fbrNumber = 'FBR-000144';
                break;

              case '74.0':
                a.fbrNumber = 'FBR-000604';
                break;

              case '75.0':
                a.fbrNumber = 'FBR-000605';
                break;

              case '76.0':
                a.fbrNumber = 'FBR-000620';
                break;

              case '77.0':
                a.fbrNumber = 'FBR-000621';
                break;

              case '78.0':
                a.fbrNumber = 'FBR-000622';
                break;

              case '79.0':
                a.fbrNumber = 'FBR-000623';
                break;

              case '80.0':
                a.fbrNumber = 'FBR-000624';
                break;

              case '81.0':
                a.fbrNumber = 'FBR-000625';
                break;

              case '82.0':
                a.fbrNumber = 'FBR-000626';
                break;

              case '83.0':
                a.fbrNumber = 'FBR-000627';
                break;

              case '84.0':
                a.fbrNumber = 'FBR-000628';
                break;

              case '85.0':
                a.fbrNumber = 'FBR-000630';
                break;

              case '86.0':
                a.fbrNumber = 'FBR-000631';
                break;

              case '87.0':
                a.fbrNumber = 'FBR-000632';
                break;

              case '88.0':
                a.fbrNumber = 'FBR-000633';
                break;

              case '89.0':
                a.fbrNumber = 'FBR-000634';
                break;

              case '90.0':
                a.fbrNumber = 'FBR-000635';
                break;

              case '91.0':
                a.fbrNumber = 'FBR-000636';
                break;

              case '92.0':
                a.fbrNumber = 'FBR-000637';
                break;

              case '93.0':
                a.fbrNumber = 'FBR-000638';
                break;

              case '94.0':
                a.fbrNumber = 'FBR-000639';
                break;

              case '95.0':
                a.fbrNumber = 'FBR-000640';
                break;

              case '96.0':
                a.fbrNumber = 'FBR-000641';
                break;

              case '97.0':
                a.fbrNumber = 'FBR-000642';
                break;

              case '98.0':
                a.fbrNumber = 'FBR-000643';
                break;

              case '99.0':
                a.fbrNumber = 'FBR-000644';
                break;

              case '100.0':
                a.fbrNumber = 'FBR-000645';
                break;

              case '101.0':
                a.fbrNumber = 'FBR-000646';
                break;

              case '102.0':
                a.fbrNumber = 'FBR-000647';
                break;

              case '103.0':
                a.fbrNumber = 'FBR-000648';
                break;

              case '104.0':
                a.fbrNumber = 'FBR-000649';
                break;

              case '105.0':
                a.fbrNumber = 'FBR-000651';
                break;

              case '106.0':
                a.fbrNumber = 'FBR-000652';
                break;

              case '107.0':
                a.fbrNumber = 'FBR-000653';
                break;

              case '108.0':
                a.fbrNumber = 'FBR-000654';
                break;

              case '109.0':
                a.fbrNumber = 'FBR-000655';
                break;

              case '110.0':
                a.fbrNumber = 'FBR-000656';
                break;

              case '110.0':
                a.fbrNumber = 'FBR-000656';
                break;

              case '111.0':
                a.fbrNumber = 'FBR-000657';
                break;

              case '112.0':
                a.fbrNumber = 'FBR-000658';
                break;

              case '113.0':
                a.fbrNumber = 'FBR-000659';
                break;

              case '114.0':
                a.fbrNumber = 'FBR-000660';
                break;

              case '115.0':
                a.fbrNumber = 'FBR-000661';
                break;

              case '116.0':
                a.fbrNumber = 'FBR-000662';
                break;

              case '117.0':
                a.fbrNumber = 'FBR-000663';
                break;

              case '118.0':
                a.fbrNumber = 'FBR-000664';
                break;

              case '119.0':
                a.fbrNumber = 'FBR-000665';
                break;

              case '120.0':
                a.fbrNumber = 'FBR-000666';
                break;

              case '121.0':
                a.fbrNumber = 'FBR-000667';
                break;

              case '122.0':
                a.fbrNumber = 'FBR-000668';
                break;

              case '123.0':
                a.fbrNumber = 'FBR-000669';
                break;

              case '124.0':
                a.fbrNumber = 'FBR-000670';
                break;

              case '125.0':
                a.fbrNumber = 'FBR-000672';
                break;

              case '126.0':
                a.fbrNumber = 'FBR-000673';
                break;

              case '127.0':
                a.fbrNumber = 'FBR-000674';
                break;

              case '128.0':
                a.fbrNumber = 'FBR-000675';
                break;

              case '129.0':
                a.fbrNumber = 'FBR-000676';
                break;

              case '130.0':
                a.fbrNumber = 'FBR-000677';
                break;

              case '131.0':
                a.fbrNumber = 'FBR-000918';
                break;

              case '132.0':
                a.fbrNumber = 'FBR-000650';
                break;

              case '133.0':
                a.fbrNumber = 'FBR-001003';
                break;

              case '134.0':
                a.fbrNumber = 'FBR-001007';
                break;

              case '135.0':
                a.fbrNumber = 'FBR-001023';
                break;

              case '136.0':
                a.fbrNumber = 'FBR-001024';
                break;

              case '137.0':
                a.fbrNumber = 'FBR-001046';
                break;

              case '138.0':
                a.fbrNumber = 'FBR-001047';
                break;

              case '139.0':
                a.fbrNumber = 'FBR-001080';
                break;

              case '140.0':
                a.fbrNumber = 'FBR-001083';
                break;

              case '141.0':
                a.fbrNumber = 'FBR-001084';
                break;

              case '142.0':
                a.fbrNumber = 'FBR-000097';
                break;

              case '143.0':
                a.fbrNumber = 'FBR-000102';
                break;

              case '144.0':
                a.fbrNumber = 'FBR-000105';
                break;

              case '145.0':
                a.fbrNumber = 'FBR-000107';
                break;

              case '146.0':
                a.fbrNumber = 'FBR-000108';
                break;

              case '147.0':
                a.fbrNumber = 'FBR-000109';
                break;

              case '148.0':
                a.fbrNumber = 'FBR-000111';
                break;

              case '149.0':
                a.fbrNumber = 'FBR-000113';
                break;

              case '150.0':
                a.fbrNumber = 'FBR-000114';
                break;

              case '151.0':
                a.fbrNumber = 'FBR-000115';
                break;

              case '152.0':
                a.fbrNumber = 'FBR-000116';
                break;

              case '153.0':
                a.fbrNumber = 'FBR-000125';
                break;

              case '154.0':
                a.fbrNumber = 'FBR-000126';
                break;

              case '155.0':
                a.fbrNumber = 'FBR-000131';
                break;

              case '157.0':
                a.fbrNumber = 'FBR-000606';
                break;

              case '158.0':
                a.fbrNumber = 'FBR-000607';
                break;

              case '159.0':
                a.fbrNumber = 'FBR-000948';
                break;

              case '160.0':
                a.fbrNumber = 'FBR-000979';
                break;

              case '161.0':
                a.fbrNumber = 'FBR-000980';
                break;

              case '162.0':
                a.fbrNumber = 'FBR-000101';
                break;

              case '163.0':
                a.fbrNumber = 'FBR-001020';
                break;

              case '164.0':
                a.fbrNumber = 'FBR-001035';
                break;

              case '165.0':
                a.fbrNumber = 'FBR-001036';
                break;

              case '166.0':
                a.fbrNumber = 'FBR-001044';
                break;

              case '167.0':
                a.fbrNumber = 'FBR-001045';
                break;

              case '168.0':
                a.fbrNumber = 'FBR-001057';
                break;

              case '169.0':
                a.fbrNumber = 'FBR-001058';
                break;

              case '170.0':
                a.fbrNumber = 'FBR-001082';
                break;

              case '171.0':
                a.fbrNumber = 'FBR-001087';
                break;

              case '172.0':
                a.fbrNumber = 'FBR-001088';
                break;

              case '173.0':
                a.fbrNumber = 'FBR-001089';
                break;

              case '174.0':
                a.fbrNumber = 'FBR-000157';
                break;

              case '175.0':
                a.fbrNumber = 'FBR-000160';
                break;

              case '176.0':
                a.fbrNumber = 'FBR-000162';
                break;

              case '177.0':
                a.fbrNumber = 'FBR-000164';
                break;

              case '178.0':
                a.fbrNumber = 'FBR-000165';
                break;

              case '179.0':
                a.fbrNumber = 'FBR-000167';
                break;

              case '180.0':
                a.fbrNumber = 'FBR-000168';
                break;

              case '181.0':
                a.fbrNumber = 'FBR-000171';
                break;

              case '183.0':
                a.fbrNumber = 'FBR-000448';
                break;

              case '184.0':
                a.fbrNumber = 'FBR-000969';
                break;

              case '185.0':
                a.fbrNumber = 'FBR-000973';
                break;

              case '186.0':
                a.fbrNumber = 'FBR-000975';
                break;

              case '187.0':
                a.fbrNumber = 'FBR-000176';
                break;

              case '188.0':
                a.fbrNumber = 'FBR-000177';
                break;

              case '189.0':
                a.fbrNumber = 'FBR-000180';
                break;

              case '191.0':
                a.fbrNumber = 'FBR-000184';
                break;

              case '192.0':
                a.fbrNumber = 'FBR-000185';
                break;

              case '193.0':
                a.fbrNumber = 'FBR-000186';
                break;

              case '194.0':
                a.fbrNumber = 'FBR-000189';
                break;

              case '195.0':
                a.fbrNumber = 'FBR-000191';
                break;

              case '196.0':
                a.fbrNumber = 'FBR-000194';
                break;

              case '197.0':
                a.fbrNumber = 'FBR-000196';
                break;

              case '198.0':
                a.fbrNumber = 'FBR-000197';
                break;

              case '199.0':
                a.fbrNumber = 'FBR-000198';
                break;

              case '200.0':
                a.fbrNumber = 'FBR-000202';
                break;

              case '201.0':
                a.fbrNumber = 'FBR-000203';
                break;

              case '202.0':
                a.fbrNumber = 'FBR-000205';
                break;

              case '203.0':
                a.fbrNumber = 'FBR-000206';
                break;

              case '204.0':
                a.fbrNumber = 'FBR-000211';
                break;

              case '205.0':
                a.fbrNumber = 'FBR-000221';
                break;

              case '206.0':
                a.fbrNumber = 'FBR-000226';
                break;

              case '207.0':
                a.fbrNumber = 'FBR-000231';
                break;

              case '208.0':
                a.fbrNumber = 'FBR-000232';
                break;

              case '209.0':
                a.fbrNumber = 'FBR-000241';
                break;

              case '210.0':
                a.fbrNumber = 'FBR-000245';
                break;

              case '211.0':
                a.fbrNumber = 'FBR-000248';
                break;

              case '212.0':
                a.fbrNumber = 'FBR-000249';
                break;

              case '213.0':
                a.fbrNumber = 'FBR-000255';
                break;

              case '214.0':
                a.fbrNumber = 'FBR-000256';
                break;

              case '215.0':
                a.fbrNumber = 'FBR-000257';
                break;

              case '216.0':
                a.fbrNumber = 'FBR-000258';
                break;

              case '217.0':
                a.fbrNumber = 'FBR-000259';
                break;

              case '218.0':
                a.fbrNumber = 'FBR-000260';
                break;

              case '219.0':
                a.fbrNumber = 'FBR-000261';
                break;

              case '220.0':
                a.fbrNumber = 'FBR-000263';
                break;

              case '221.0':
                a.fbrNumber = 'FBR-000264';
                break;

              case '222.0':
                a.fbrNumber = 'FBR-000265';
                break;

              case '223.0':
                a.fbrNumber = 'FBR-000266';
                break;

              case '224.0':
                a.fbrNumber = 'FBR-000267';
                break;

              case '225.0':
                a.fbrNumber = 'FBR-000270';
                break;

              case '226.0':
                a.fbrNumber = 'FBR-000275';
                break;

              case '227.0':
                a.fbrNumber = 'FBR-000276';
                break;

              case '228.0':
                a.fbrNumber = 'FBR-000278';
                break;

              case '229.0':
                a.fbrNumber = 'FBR-000279';
                break;

              case '230.0':
                a.fbrNumber = 'FBR-000281';
                break;

              case '231.0':
                a.fbrNumber = 'FBR-000283';
                break;

              case '232.0':
                a.fbrNumber = 'FBR-000285';
                break;

              case '233.0':
                a.fbrNumber = 'FBR-000287';
                break;

              case '234.0':
                a.fbrNumber = 'FBR-000292';
                break;

              case '235.0':
                a.fbrNumber = 'FBR-000293';
                break;

              case '236.0':
                a.fbrNumber = 'FBR-000302';
                break;

              case '237.0':
                a.fbrNumber = 'FBR-000305';
                break;

              case '238.0':
                a.fbrNumber = 'FBR-000307';
                break;

              case '239.0':
                a.fbrNumber = 'FBR-000310';
                break;

              case '240.0':
                a.fbrNumber = 'FBR-000316';
                break;

              case '241.0':
                a.fbrNumber = 'FBR-000317';
                break;

              case '242.0':
                a.fbrNumber = 'FBR-000318';
                break;

              case '243.0':
                a.fbrNumber = 'FBR-000323';
                break;

              case '244.0':
                a.fbrNumber = 'FBR-000325';
                break;

              case '245.0':
                a.fbrNumber = 'FBR-000326';
                break;

              case '246.0':
                a.fbrNumber = 'FBR-000328';
                break;

              case '247.0':
                a.fbrNumber = 'FBR-000329';
                break;

              case '249.0':
                a.fbrNumber = 'FBR-000333';
                break;

              case '250.0':
                a.fbrNumber = 'FBR-000337';
                break;

              case '251.0':
                a.fbrNumber = 'FBR-0003338';
                break;

              case '6502.0':
                a.fbrNumber = 'To Be Changed';
                break;

              case null:
                a.fbrNumber = a.fbrNumber;
                break;

              default:
                break;
            }

            switch (a.anticipatedAwardType) {
              case '1.0':
                a.anticipatedAwardType = 'New - Type 1';
                break;

              case '2.0':
                a.anticipatedAwardType = 'Supplement (Administrative Increase or Program Expansion) Type 3';
                break;

              case '3.0':
                a.anticipatedAwardType = 'Non-Competing Continuation - Type 5';
                break;

              case '4.0':
                a.anticipatedAwardType = 'Competing Continuation - Type 2';
                break;

              case null:
                a.anticipatedAwardType = a.anticipatedAwardType;
                break;

              default:
                break;
            }

            switch (a.anticipatedActionType) {
              case '1.0':
                a.anticipatedActionType = 'IDIQ - Competitive';
                break;

              case '2.0':
                a.anticipatedActionType = 'BPA - Competitive';
                break;

              case '3.0':
                a.anticipatedActionType = 'Stand Alone Contract - Competitive';
                break;

              case '4.0':
                a.anticipatedActionType = 'IDIQ - Non Competitive';
                break;

              case '5.0':
                a.anticipatedActionType = 'BPA - Non Competitive';
                break;

              case '6.0':
                a.anticipatedActionType = 'Stand Alone Contract - Non Competitive';
                break;

              case '7.0':
                a.anticipatedActionType = 'TO/DO - Competitive';
                break;

              case '8.0':
                a.anticipatedActionType = 'TO/DO - Non Competitive';
                break;

              case '9.0':
                a.anticipatedActionType = '8(a) Contracts - Non Competitive';
                break;

              case '11.0':
                a.anticipatedActionType = 'GSA/GWAC Services, NO SOW';
                break;

              case '12.0':
                a.anticipatedActionType = 'GSA/GWAC for Services Requiring a SOW';
                break;

              case '13.0':
                a.anticipatedActionType = 'Simplified Acquisition ($25001 - $250000)';
                break;

              case '14.0':
                a.anticipatedActionType = 'Option Exercise';
                break;

              case '16.0':
                a.anticipatedActionType = 'Bilateral Contract Modification';
                break;

              case '17.0':
                a.anticipatedActionType = 'HHS Strategic Sourcing BPA TO/DO - Non Competitive';
                break;

              case '18.0':
                a.anticipatedActionType = 'Basic Ordering Agreement';
                break;

              case '19.0':
                a.anticipatedActionType = 'Broad Agency Announcement';
                break;

              case '20.0':
                a.anticipatedActionType = 'Simplified Acquisition ($10001 to $25000)';
                break;

              case '21.0':
                a.anticipatedActionType = 'Simplified Acquisition Micropurchase <=10000';
                break;

              case '22.0':
                a.anticipatedActionType = 'Unilateral Modification';
                break;

              case '23.0':
                a.anticipatedActionType = 'Advanced Purchase Card Purchase ($3501 - $25000)';
                break;

              case null:
                a.anticipatedActionType = a.anticipatedActionType;
                break;

              default:
                break;
            }

            switch (a.grantStatus) {
              case '1.0':
                a.grantStatus = 'Active';
                break;

              case '2.0':
                a.grantStatus = 'Cancelled';
                break;

              case null:
                a.grantStatus = a.grantStatus;
                break;

              default:
                break;
            }

            switch (a.colorcode) {
              case '3.0':
                a.colorcode = 'Blue';
                break;

              case '4.0':
                a.colorcode = 'Yellow';
                break;

              case '5.0':
                a.colorcode = 'Red';
                break;

              case '6.0':
                a.colorcode = 'Green';
                break;

              case null:
                a.colorcode = a.colorcode;
                break;

              default:
                break;
            }

            switch (a.confSupport) {
              case '1.0':
                a.confSupport = 'Yes';
                break;

              case '2.0':
                a.confSupport = 'No';
                break;

              case null:
                a.confSupport = a.confSupport;
                break;

              default:
                break;
            }

            switch (a.papworkRedAct) {
              case '1.0':
                a.papworkRedAct = 'Yes';
                break;

              case '2.0':
                a.papworkRedAct = 'No';
                break;

              case null:
                a.papworkRedAct = a.papworkRedAct;
                break;

              default:
                break;
            }

            switch (a.collaborationFlag) {
              case '1.0':
                a.collaborationFlag = 'Yes';
                break;

              case '2.0':
                a.collaborationFlag = 'No';
                break;

              case null:
                a.collaborationFlag = a.collaborationFlag;
                break;

              default:
                break;
            }

            switch (a.soleSource) {
              case '1.0':
                a.soleSource = 'Yes';
                break;

              case '2.0':
                a.soleSource = 'No';
                break;

              case null:
                a.soleSource = a.soleSource;
                break;

              default:
                break;
            }

            switch (a.training) {
              case '1.0':
                a.training = 'Yes';
                break;

              case '2.0':
                a.training = 'No';
                break;

              case null:
                a.training = a.training;
                break;

              default:
                break;
            }

            switch (a.recurringItem) {
              case '1.0':
                a.recurringItem = 'Yes';
                break;

              case '2.0':
                a.recurringItem = 'No';
                break;

              case null:
                a.recurringItem = a.recurringItem;
                break;

              default:
                break;
            }

            switch (a.zeroDollarReq) {
              case '1.0':
                a.zeroDollarReq = 'Yes';
                break;

              case '2.0':
                a.zeroDollarReq = 'No';
                break;

              case null:
                a.zeroDollarReq = a.zeroDollarReq;
                break;

              default:
                break;
            }

            switch (a.priorityLevel) {
              case '1.0':
                a.priorityLevel = 'Mandatory (Required by Law)';
                break;

              case '2.0':
                a.priorityLevel = 'High';
                break;

              case '3.0':
                a.priorityLevel = 'Medium';
                break;

              case '4.0':
                a.priorityLevel = 'Low';
                break;

              case null:
                a.priorityLevel = a.priorityLevel;
                break;

              default:
                break;
            }
          });
        }
      }, {
        key: "smartListToNumbers",
        value: function smartListToNumbers(smartText) {
          smartText.forEach(function (a) {
            switch (a.anticipatedAwardType) {
              case 'New - Type 1':
                a.anticipatedAwardType = '1.0';
                break;

              case 'Supplement (Administrative Increase or Program Expansion) Type 3':
                a.anticipatedAwardType = '2.0';
                break;

              case 'Non-Competing Continuation - Type 5':
                a.anticipatedAwardType = '3.0';
                break;

              case 'Competing Continuation - Type 2':
                a.anticipatedAwardType = '4.0';
                break;

              case null:
                a.anticipatedAwardType = a.anticipatedAwardType;
                break;

              default:
                break;
            }

            switch (a.anticipatedActionType) {
              case 'IDIQ - Competitive':
                a.anticipatedActionType = '1.0';
                break;

              case 'BPA - Competitive':
                a.anticipatedActionType = '2.0';
                break;

              case 'Stand Alone Contract - Competitive':
                a.anticipatedActionType = '3.0';
                break;

              case 'IDIQ - Non Competitive':
                a.anticipatedActionType = '4.0';
                break;

              case 'BPA - Non Competitive':
                a.anticipatedActionType = '5.0';
                break;

              case 'Stand Alone Contract - Non Competitive':
                a.anticipatedActionType = '6.0';
                break;

              case 'TO/DO - Competitive':
                a.anticipatedActionType = '7.0';
                break;

              case 'TO/DO - Non Competitive':
                a.anticipatedActionType = '8.0';
                break;

              case '8(a) Contracts - Non Competitive':
                a.anticipatedActionType = '9.0';
                break;

              case 'GSA/GWAC Services, NO SOW':
                a.anticipatedActionType = '11.0';
                break;

              case 'GSA/GWAC for Services Requiring a SOW':
                a.anticipatedActionType = '12.0';
                break;

              case 'Simplified Acquisition ($25001 - $250000)':
                a.anticipatedActionType = '13.0';
                break;

              case 'Option Exercise':
                a.anticipatedActionType = '14.0';
                break;

              case 'Bilateral Contract Modification':
                a.anticipatedActionType = '16.0';
                break;

              case 'HHS Strategic Sourcing BPA TO/DO - Non Competitive':
                a.anticipatedActionType = '17.0';
                break;

              case 'Basic Ordering Agreement':
                a.anticipatedActionType = '18.0';
                break;

              case 'Broad Agency Announcement':
                a.anticipatedActionType = '19.0';
                break;

              case 'Simplified Acquisition ($10001 to $25000)':
                a.anticipatedActionType = '20.0';
                break;

              case 'Simplified Acquisition Micropurchase <=10000':
                a.anticipatedActionType = '21.0';
                break;

              case 'Unilateral Modification':
                a.anticipatedActionType = '22.0';
                break;

              case 'Advanced Purchase Card Purchase ($3501 - $25000)':
                a.anticipatedActionType = '23.0';
                break;

              case null:
                a.anticipatedActionType = a.anticipatedActionType;
                break;

              default:
                break;
            }

            switch (a.grantStatus) {
              case 'Active':
                a.grantStatus = '1.0';
                break;

              case 'Cancelled':
                a.grantStatus = '2.0';
                break;

              case null:
                a.grantStatus = a.grantStatus;
                break;

              default:
                break;
            }

            switch (a.colorcode) {
              case 'Blue':
                a.colorcode = '3.0';
                break;

              case 'Yellow':
                a.colorcode = '4.0';
                break;

              case 'Red':
                a.colorcode = '5.0';
                break;

              case 'Green':
                a.colorcode = '6.0';
                break;

              case null:
                a.colorcode = a.colorcode;
                break;

              default:
                break;
            }

            switch (a.papworkRedAct) {
              case 'Yes':
                a.papworkRedAct = '1.0';
                break;

              case 'No':
                a.papworkRedAct = '2.0';
                break;

              case null:
                a.papworkRedAct = a.papworkRedAct;
                break;

              default:
                break;
            }

            switch (a.collaborationFlag) {
              case 'Yes':
                a.collaborationFlag = '1.0';
                break;

              case 'No':
                a.collaborationFlag = '2.0';
                break;

              case null:
                a.collaborationFlag = a.collaborationFlag;
                break;

              default:
                break;
            }

            switch (a.confSupport) {
              case 'Yes':
                a.confSupport = '1.0';
                break;

              case 'No':
                a.confSupport = '2.0';
                break;

              case null:
                a.confSupport = a.confSupport;
                break;

              default:
                break;
            }

            switch (a.soleSource) {
              case 'Yes':
                a.soleSource = '1.0';
                break;

              case 'No':
                a.soleSource = '2.0';
                break;

              case null:
                a.soleSource = a.soleSource;
                break;

              default:
                break;
            }

            switch (a.training) {
              case 'Yes':
                a.training = '1.0';
                break;

              case 'No':
                a.training = '2.0';
                break;

              case null:
                a.training = a.training;
                break;

              default:
                break;
            }

            switch (a.recurringItem) {
              case 'Yes':
                a.recurringItem = '1.0';
                break;

              case 'No':
                a.recurringItem = '2.0';
                break;

              case null:
                a.recurringItem = a.recurringItem;
                break;

              default:
                break;
            }

            switch (a.zeroDollarReq) {
              case 'Yes':
                a.zeroDollarReq = '1.0';
                break;

              case 'No':
                a.zeroDollarReq = '2.0';
                break;

              case null:
                a.zeroDollarReq = a.zeroDollarReq;
                break;

              default:
                break;
            }

            switch (a.priorityLevel) {
              case 'Mandatory (Required by Law)':
                a.priorityLevel = '1.0';
                break;

              case 'High':
                a.priorityLevel = '2.0';
                break;

              case 'Medium':
                a.priorityLevel = '3.0';
                break;

              case 'Low':
                a.priorityLevel = '4.0';
                break;

              case null:
                a.priorityLevel = a.priorityLevel;
                break;

              default:
                break;
            }

            switch (a.fbrNumber) {
              case 'New FBR Line Item':
                a.fbrNumber = '1.0';
                break;

              case 'S&E Line Item':
                a.fbrNumber = '2.0';
                break;

              case 'FBR-NEITCT':
                a.fbrNumber = '3.0';
                break;

              case 'FBR-000002':
                a.fbrNumber = '4.0';
                break;

              case 'FBR-000003':
                a.fbrNumber = '5.0';
                break;

              case 'FBR-000004':
                a.fbrNumber = '6.0';
                break;

              case 'FBR-000005':
                a.fbrNumber = '7.0';
                break;

              case 'FBR-000006':
                a.fbrNumber = '8.0';
                break;

              case 'FBR-000007':
                a.fbrNumber = '9.0';
                break;

              case 'FBR-000008':
                a.fbrNumber = '10.0';
                break;

              case 'FBR-000011':
                a.fbrNumber = '11.0';
                break;

              case 'FBR-0000013':
                a.fbrNumber = '12.0';
                break;

              case 'FBR-000332':
                a.fbrNumber = '13.0';
                break;

              case 'FBR-000917':
                a.fbrNumber = '14.0';
                break;

              case 'FBR-000961':
                a.fbrNumber = '15.0';
                break;

              case 'FBR-000981':
                a.fbrNumber = '16.0';
                break;

              case 'FBR-000984':
                a.fbrNumber = '17.0';
                break;

              case 'FBR-000999':
                a.fbrNumber = '18.0';
                break;

              case 'FBR-001006':
                a.fbrNumber = '19.0';
                break;

              case 'FBR-000015':
                a.fbrNumber = '20.0';
                break;

              case 'FBR-000016':
                a.fbrNumber = '21.0';
                break;

              case 'FBR-000017':
                a.fbrNumber = '22.0';
                break;

              case 'FBR-000020':
                a.fbrNumber = '23.0';
                break;

              case 'FBR-000021':
                a.fbrNumber = '24.0';
                break;

              case 'FBR-000026':
                a.fbrNumber = '25.0';
                break;

              case 'FBR-000027':
                a.fbrNumber = '26.0';
                break;

              case 'FBR-000028':
                a.fbrNumber = '27.0';
                break;

              case 'FBR-000029':
                a.fbrNumber = '28.0';
                break;

              case 'FBR-000030':
                a.fbrNumber = '29.0';
                break;

              case 'FBR-000031':
                a.fbrNumber = '30.0';
                break;

              case 'FBR-000032':
                a.fbrNumber = '31.0';
                break;

              case 'FBR-000035':
                a.fbrNumber = '32.0';
                break;

              case 'FBR-000036':
                a.fbrNumber = '33.0';
                break;

              case 'FBR-000040':
                a.fbrNumber = '34.0';
                break;

              case 'FBR-000043':
                a.fbrNumber = '35.0';
                break;

              case 'FBR-000047':
                a.fbrNumber = '36.0';
                break;

              case 'FBR-000048':
                a.fbrNumber = '37.0';
                break;

              case 'FBR-000049':
                a.fbrNumber = '38.0';
                break;

              case 'FBR-000050':
                a.fbrNumber = '39.0';
                break;

              case 'FBR-000051':
                a.fbrNumber = '40.0';
                break;

              case 'FBR-000052':
                a.fbrNumber = '41.0';
                break;

              case 'FBR-000053':
                a.fbrNumber = '42.0';
                break;

              case 'FBR-000054':
                a.fbrNumber = '43.0';
                break;

              case 'FBR-000056':
                a.fbrNumber = '44.0';
                break;

              case 'FBR-000057':
                a.fbrNumber = '45.0';
                break;

              case 'FBR-000058':
                a.fbrNumber = '46.0';
                break;

              case 'FBR-000059':
                a.fbrNumber = '47.0';
                break;

              case 'FBR-000060':
                a.fbrNumber = '48.0';
                break;

              case 'FBR-000061':
                a.fbrNumber = '49.0';
                break;

              case 'FBR-000062':
                a.fbrNumber = '50.0';
                break;

              case 'FBR-000063':
                a.fbrNumber = '51.0';
                break;

              case 'FBR-000064':
                a.fbrNumber = '52.0';
                break;

              case 'FBR-000064':
                a.fbrNumber = '53.0';
                break;

              case 'FBR-000066':
                a.fbrNumber = '54.0';
                break;

              case 'FBR-000072':
                a.fbrNumber = '55.0';
                break;

              case 'FBR-000076':
                a.fbrNumber = '56.0';
                break;

              case 'FBR-000078':
                a.fbrNumber = '57.0';
                break;

              case 'FBR-000079':
                a.fbrNumber = '58.0';
                break;

              case 'FBR-000080':
                a.fbrNumber = '59.0';
                break;

              case 'FBR-000081':
                a.fbrNumber = '60.0';
                break;

              case 'FBR-000082':
                a.fbrNumber = '61.0';
                break;

              case 'FBR-000084':
                a.fbrNumber = '62.0';
                break;

              case 'FBR-000085':
                a.fbrNumber = '63.0';
                break;

              case 'FBR-000086':
                a.fbrNumber = '64.0';
                break;

              case 'FBR-000087':
                a.fbrNumber = '65.0';
                break;

              case 'FBR-000088':
                a.fbrNumber = '66.0';
                break;

              case 'FBR-000089':
                a.fbrNumber = '67.0';
                break;

              case 'FBR-000090':
                a.fbrNumber = '68.0';
                break;

              case 'FBR-000092':
                a.fbrNumber = '69.0';
                break;

              case 'FBR-000093':
                a.fbrNumber = '70.0';
                break;

              case 'FBR-000094':
                a.fbrNumber = '71.0';
                break;

              case 'FBR-000144':
                a.fbrNumber = '72.0';
                break;

              case 'FBR-000604':
                a.fbrNumber = '74.0';
                break;

              case 'FBR-000605':
                a.fbrNumber = '75.0';
                break;

              case 'FBR-000620':
                a.fbrNumber = '76.0';
                break;

              case 'FBR-000621':
                a.fbrNumber = '77.0';
                break;

              case 'FBR-000622':
                a.fbrNumber = '78.0';
                break;

              case 'FBR-000623':
                a.fbrNumber = '79.0';
                break;

              case 'FBR-000624':
                a.fbrNumber = '80.0';
                break;

              case 'FBR-000625':
                a.fbrNumber = '81.0';
                break;

              case 'FBR-000626':
                a.fbrNumber = '82.0';
                break;

              case 'FBR-000627':
                a.fbrNumber = '83.0';
                break;

              case 'FBR-000628':
                a.fbrNumber = '84.0';
                break;

              case 'FBR-000630':
                a.fbrNumber = '85.0';
                break;

              case 'FBR-000631':
                a.fbrNumber = '86.0';
                break;

              case 'FBR-000632':
                a.fbrNumber = '87.0';
                break;

              case 'FBR-000633':
                a.fbrNumber = '88.0';
                break;

              case 'FBR-000634':
                a.fbrNumber = '89.0';
                break;

              case 'FBR-000635':
                a.fbrNumber = '90.0';
                break;

              case 'FBR-000636':
                a.fbrNumber = '91.0';
                break;

              case 'FBR-000637':
                a.fbrNumber = '92.0';
                break;

              case 'FBR-000638':
                a.fbrNumber = '93.0';
                break;

              case 'FBR-000639':
                a.fbrNumber = '94.0';
                break;

              case 'FBR-000640':
                a.fbrNumber = '95.0';
                break;

              case 'FBR-000641':
                a.fbrNumber = '96.0';
                break;

              case 'FBR-000642':
                a.fbrNumber = '97.0';
                break;

              case 'FBR-000643':
                a.fbrNumber = '98.0';
                break;

              case 'FBR-000644':
                a.fbrNumber = '99.0';
                break;

              case 'FBR-000645':
                a.fbrNumber = '100.0';
                break;

              case 'FBR-000646':
                a.fbrNumber = '101.0';
                break;

              case 'FBR-000647':
                a.fbrNumber = '102.0';
                break;

              case 'FBR-000648':
                a.fbrNumber = '103.0';
                break;

              case 'FBR-000649':
                a.fbrNumber = '104.0';
                break;

              case 'FBR-000651':
                a.fbrNumber = '105.0';
                break;

              case 'FBR-000652':
                a.fbrNumber = '106.0';
                break;

              case 'FBR-000653':
                a.fbrNumber = '107.0';
                break;

              case 'FBR-000654':
                a.fbrNumber = '108.0';
                break;

              case 'FBR-000655':
                a.fbrNumber = '109.0';
                break;

              case 'FBR-000656':
                a.fbrNumber = '110.0';
                break;

              case 'FBR-000657':
                a.fbrNumber = '111.0';
                break;

              case 'FBR-000658':
                a.fbrNumber = '112.0';
                break;

              case 'FBR-000659':
                a.fbrNumber = '113.0';
                break;

              case 'FBR-000660':
                a.fbrNumber = '114.0';
                break;

              case 'FBR-000661':
                a.fbrNumber = '115.0';
                break;

              case 'FBR-000662':
                a.fbrNumber = '116.0';
                break;

              case 'FBR-000663':
                a.fbrNumber = '117.0';
                break;

              case 'FBR-000664':
                a.fbrNumber = '118.0';
                break;

              case 'FBR-000665':
                a.fbrNumber = '119.0';
                break;

              case 'FBR-000666':
                a.fbrNumber = '120.0';
                break;

              case 'FBR-000667':
                a.fbrNumber = '121.0';
                break;

              case 'FBR-000668':
                a.fbrNumber = '122.0';
                break;

              case 'FBR-000669':
                a.fbrNumber = '123.0';
                break;

              case 'FBR-000670':
                a.fbrNumber = '124.0';
                break;

              case 'FBR-000672':
                a.fbrNumber = '125.0';
                break;

              case 'FBR-000673':
                a.fbrNumber = '126.0';
                break;

              case 'FBR-000674':
                a.fbrNumber = '127.0';
                break;

              case 'FBR-000675':
                a.fbrNumber = '128.0';
                break;

              case 'FBR-000676':
                a.fbrNumber = '129.0';
                break;

              case 'FBR-000677':
                a.fbrNumber = '130.0';
                break;

              case 'FBR-000918':
                a.fbrNumber = '131.0';
                break;

              case 'FBR-000650':
                a.fbrNumber = '132.0';
                break;

              case 'FBR-001003':
                a.fbrNumber = '133.0';
                break;

              case 'FBR-001007':
                a.fbrNumber = '134.0';
                break;

              case 'FBR-001023':
                a.fbrNumber = '135.0';
                break;

              case 'FBR-001024':
                a.fbrNumber = '136.0';
                break;

              case 'FBR-001046':
                a.fbrNumber = '137.0';
                break;

              case 'FBR-001047':
                a.fbrNumber = '138.0';
                break;

              case 'FBR-001080':
                a.fbrNumber = '139.0';
                break;

              case 'FBR-001083':
                a.fbrNumber = '140.0';
                break;

              case 'FBR-001084':
                a.fbrNumber = '141.0';
                break;

              case 'FBR-000097':
                a.fbrNumber = '142.0';
                break;

              case 'FBR-000102':
                a.fbrNumber = '143.0';
                break;

              case 'FBR-000105':
                a.fbrNumber = '144.0';
                break;

              case 'FBR-000107':
                a.fbrNumber = '145.0';
                break;

              case 'FBR-000108':
                a.fbrNumber = '146.0';
                break;

              case 'FBR-000109':
                a.fbrNumber = '147.0';
                break;

              case 'FBR-000111':
                a.fbrNumber = '148.0';
                break;

              case 'FBR-000113':
                a.fbrNumber = '149.0';
                break;

              case 'FBR-000114':
                a.fbrNumber = '150.0';
                break;

              case 'FBR-000115':
                a.fbrNumber = '151.0';
                break;

              case 'FBR-000116':
                a.fbrNumber = '152.0';
                break;

              case 'FBR-000125':
                a.fbrNumber = '153.0';
                break;

              case 'FBR-000126':
                a.fbrNumber = '154.0';
                break;

              case 'FBR-000131':
                a.fbrNumber = '155.0';
                break;

              case 'FBR-000606':
                a.fbrNumber = '157.0';
                break;

              case 'FBR-000607':
                a.fbrNumber = '158.0';
                break;

              case 'FBR-000948':
                a.fbrNumber = '159.0';
                break;

              case 'FBR-000979':
                a.fbrNumber = '160.0';
                break;

              case 'FBR-000980':
                a.fbrNumber = '161.0';
                break;

              case 'FBR-000101':
                a.fbrNumber = '162.0';
                break;

              case 'FBR-001020':
                a.fbrNumber = '163.0';
                break;

              case 'FBR-001035':
                a.fbrNumber = '164.0';
                break;

              case 'FBR-001036':
                a.fbrNumber = '165.0';
                break;

              case 'FBR-001044':
                a.fbrNumber = '166.0';
                break;

              case 'FBR-001045':
                a.fbrNumber = '167.0';
                break;

              case 'FBR-001057':
                a.fbrNumber = '168.0';
                break;

              case 'FBR-001058':
                a.fbrNumber = '169.0';
                break;

              case 'FBR-001082':
                a.fbrNumber = '170.0';
                break;

              case 'FBR-001087':
                a.fbrNumber = '171.0';
                break;

              case 'FBR-001088':
                a.fbrNumber = '172.0';
                break;

              case 'FBR-001089':
                a.fbrNumber = '173.0';
                break;

              case 'FBR-000157':
                a.fbrNumber = '174.0';
                break;

              case 'FBR-000160':
                a.fbrNumber = '175.0';
                break;

              case 'FBR-000162':
                a.fbrNumber = '176.0';
                break;

              case 'FBR-000164':
                a.fbrNumber = '177.0';
                break;

              case 'FBR-000165':
                a.fbrNumber = '178.0';
                break;

              case 'FBR-000167':
                a.fbrNumber = '179.0';
                break;

              case 'FBR-000168':
                a.fbrNumber = '180.0';
                break;

              case 'FBR-000171':
                a.fbrNumber = '181.0';
                break;

              case 'FBR-000448':
                a.fbrNumber = '183.0';
                break;

              case 'FBR-000969':
                a.fbrNumber = '184.0';
                break;

              case 'FBR-000973':
                a.fbrNumber = '185.0';
                break;

              case 'FBR-000975':
                a.fbrNumber = '186.0';
                break;

              case 'FBR-000176':
                a.fbrNumber = '187.0';
                break;

              case 'FBR-000177':
                a.fbrNumber = '188.0';
                break;

              case 'FBR-000180':
                a.fbrNumber = '189.0';
                break;

              case 'FBR-000184':
                a.fbrNumber = '191.0';
                break;

              case 'FBR-000185':
                a.fbrNumber = '192.0';
                break;

              case 'FBR-000186':
                a.fbrNumber = '193.0';
                break;

              case 'FBR-000189':
                a.fbrNumber = '194.0';
                break;

              case 'FBR-000191':
                a.fbrNumber = '195.0';
                break;

              case 'FBR-000194':
                a.fbrNumber = '196.0';
                break;

              case 'FBR-000196':
                a.fbrNumber = '197.0';
                break;

              case 'FBR-000197':
                a.fbrNumber = '198.0';
                break;

              case 'FBR-000198':
                a.fbrNumber = '199.0';
                break;

              case 'FBR-000202':
                a.fbrNumber = '200.0';
                break;

              case 'FBR-000203':
                a.fbrNumber = '201.0';
                break;

              case 'FBR-000205':
                a.fbrNumber = '202.0';
                break;

              case 'FBR-000206':
                a.fbrNumber = '203.0';
                break;

              case 'FBR-000211':
                a.fbrNumber = '204.0';
                break;

              case 'FBR-000221':
                a.fbrNumber = '205.0';
                break;

              case 'FBR-000226':
                a.fbrNumber = '206.0';
                break;

              case 'FBR-000231':
                a.fbrNumber = '207.0';
                break;

              case 'FBR-000232':
                a.fbrNumber = '208.0';
                break;

              case 'FBR-000241':
                a.fbrNumber = '209.0';
                break;

              case 'FBR-000245':
                a.fbrNumber = '210.0';
                break;

              case 'FBR-000248':
                a.fbrNumber = '211.0';
                break;

              case 'FBR-000249':
                a.fbrNumber = '212.0';
                break;

              case 'FBR-000255':
                a.fbrNumber = '213.0';
                break;

              case 'FBR-000256':
                a.fbrNumber = '214.0';
                break;

              case 'FBR-000257':
                a.fbrNumber = '215.0';
                break;

              case 'FBR-000258':
                a.fbrNumber = '216.0';
                break;

              case 'FBR-000259':
                a.fbrNumber = '217.0';
                break;

              case 'FBR-000260':
                a.fbrNumber = '218.0';
                break;

              case 'FBR-000261':
                a.fbrNumber = '219.0';
                break;

              case 'FBR-000263':
                a.fbrNumber = '220.0';
                break;

              case 'FBR-000264':
                a.fbrNumber = '221.0';
                break;

              case 'FBR-000265':
                a.fbrNumber = '222.0';
                break;

              case 'FBR-000266':
                a.fbrNumber = '223.0';
                break;

              case 'FBR-000267':
                a.fbrNumber = '224.0';
                break;

              case 'FBR-000270':
                a.fbrNumber = '225.0';
                break;

              case 'FBR-000275':
                a.fbrNumber = '226.0';
                break;

              case 'FBR-000276':
                a.fbrNumber = '227.0';
                break;

              case 'FBR-000278':
                a.fbrNumber = '228.0';
                break;

              case 'FBR-000279':
                a.fbrNumber = '229.0';
                break;

              case 'FBR-000281':
                a.fbrNumber = '230.0';
                break;

              case 'FBR-000283':
                a.fbrNumber = '231.0';
                break;

              case 'FBR-000285':
                a.fbrNumber = '232.0';
                break;

              case 'FBR-000287':
                a.fbrNumber = '233.0';
                break;

              case 'FBR-000292':
                a.fbrNumber = '234.0';
                break;

              case 'FBR-000293':
                a.fbrNumber = '235.0';
                break;

              case 'FBR-000302':
                a.fbrNumber = '236.0';
                break;

              case 'FBR-000305':
                a.fbrNumber = '237.0';
                break;

              case 'FBR-000307':
                a.fbrNumber = '238.0';
                break;

              case 'FBR-000310':
                a.fbrNumber = '239.0';
                break;

              case 'FBR-000316':
                a.fbrNumber = '240.0';
                break;

              case 'FBR-000317':
                a.fbrNumber = '241.0';
                break;

              case 'FBR-000318':
                a.fbrNumber = '242.0';
                break;

              case 'FBR-000323':
                a.fbrNumber = '243.0';
                break;

              case 'FBR-000325':
                a.fbrNumber = '244.0';
                break;

              case 'FBR-000326':
                a.fbrNumber = '245.0';
                break;

              case 'FBR-000328':
                a.fbrNumber = '246.0';
                break;

              case 'FBR-000329':
                a.fbrNumber = '247.0';
                break;

              case 'FBR-000333':
                a.fbrNumber = '249.0';
                break;

              case 'FBR-000337':
                a.fbrNumber = '250.0';
                break;

              case 'FBR-0003338':
                a.fbrNumber = '251.0';
                break;

              case 'To Be Changed':
                a.fbrNumber = '6502.0';
                break;

              case null:
                a.fbrNumber = a.fbrNumber;
                break;

              default:
                break;
            }
          });
        }
      }]);

      return SmartListConversionService;
    }();

    SmartListConversionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SmartListConversionService);
    /***/
  },

  /***/
  "./src/app/shared/services/user-logged-in.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/user-logged-in.service.ts ***!
    \***********************************************************/

  /*! exports provided: UserLoggedInService */

  /***/
  function srcAppSharedServicesUserLoggedInServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoggedInService", function () {
      return UserLoggedInService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserLoggedInService = /*#__PURE__*/function () {
      function UserLoggedInService() {
        _classCallCheck(this, UserLoggedInService);

        this.userLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userLoggedIn.next(false);
      }

      _createClass(UserLoggedInService, [{
        key: "setUserLoggedIn",
        value: function setUserLoggedIn(userLoggedIn) {
          this.userLoggedIn.next(userLoggedIn);
        }
      }, {
        key: "getUserLoggedIn",
        value: function getUserLoggedIn() {
          return this.userLoggedIn.asObservable();
        }
      }]);

      return UserLoggedInService;
    }();

    UserLoggedInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserLoggedInService);
    /***/
  },

  /***/
  "./src/app/shared/utilities.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/utilities.ts ***!
    \*************************************/

  /*! exports provided: hasRequiredValidator, hasRequiredField, triggerValidations, upperCaseFirstChar, getErrorTextFromValidationResult */

  /***/
  function srcAppSharedUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasRequiredValidator", function () {
      return hasRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasRequiredField", function () {
      return hasRequiredField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "triggerValidations", function () {
      return triggerValidations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upperCaseFirstChar", function () {
      return upperCaseFirstChar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getErrorTextFromValidationResult", function () {
      return getErrorTextFromValidationResult;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var hasRequiredValidator = function hasRequiredValidator(abstractControl) {
      if (abstractControl == null) {
        return false;
      }

      if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["AbstractControlDirective"]) {
        abstractControl = abstractControl.control;
      }

      if (abstractControl == null) {
        return false;
      }

      if (abstractControl.validator) {
        var validator = abstractControl.validator({});

        if (validator && validator.required) {
          return true;
        }
      }

      return false;
    }; // Need to do more reasearhc to make this work
    // export const hasMaxLengthValidator = (
    //   abstractControl: AbstractControl | AbstractControlDirective
    // ): boolean => {
    //   if (abstractControl == null) {
    //     return false;
    //   }
    //   if (abstractControl instanceof AbstractControlDirective) {
    //     abstractControl = abstractControl.control;
    //   }
    //   if (abstractControl == null) {
    //     return false;
    //   }
    //   if (abstractControl.validator) {
    //     const validator = abstractControl.validator({} as AbstractControl);
    //     if (validator && validator.maxLength) {
    //       return true;
    //     }
    //   }
    //   return false;
    // };


    var hasRequiredField = function hasRequiredField(abstractControl) {
      if (abstractControl == null) {
        return false;
      }

      if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["AbstractControlDirective"]) {
        abstractControl = abstractControl.control;
      }

      if (abstractControl == null) {
        return false;
      }

      if (abstractControl.validator) {
        var validator = abstractControl.validator({});

        if (validator && validator.required) {
          return true;
        }
      }

      if (abstractControl['controls']) {
        for (var controlName in abstractControl['controls']) {
          if (abstractControl['controls'][controlName]) {
            if (hasRequiredField(abstractControl['controls'][controlName])) {
              return true;
            }
          }
        }
      }

      return false;
    };

    var triggerValidations = function triggerValidations(formGroup) {
      var onlySelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (onlySelf) {
        formGroup.updateValueAndValidity();
        formGroup.markAsTouched();
        return;
      }

      if (formGroup.controls != null) {
        Object.keys(formGroup.controls).forEach(function (field) {
          var control = formGroup.get(field);

          if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
            triggerValidations(control, onlySelf);
          } else {
            control.markAsTouched();
            control.updateValueAndValidity();
          }
        });
        setTimeout(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_2__('.is-invalid')[0]) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.is-invalid')[0].focus();
          }
        }, 100); // TODO: Replace with Angular version.
      }
    };

    var upperCaseFirstChar = function upperCaseFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    var getErrorTextFromValidationResult = function getErrorTextFromValidationResult(errorKey, error) {
      if (typeof error === 'string') {
        return error;
      } else if (errorKey === 'maxlength') {
        return "Input exceeds max length of ".concat(error.requiredLength);
      } else if (errorKey === 'minlength') {
        return "Input is less than min required length ".concat(error.requiredLength);
      } else if (errorKey === 'max') {
        return "Input must be max ".concat(error.max);
      } else if (errorKey === 'min') {
        return "Input must be min ".concat(error.min);
      } else {
        return upperCaseFirstChar(errorKey);
      }
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      envName: 'development'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\asapa\GitHub\TestUIInstance\cbas-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map