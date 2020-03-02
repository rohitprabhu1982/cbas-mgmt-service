(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~resource-resource-module~tdl-components-tdl-module~timesheet-components-timesheet-module"],{

/***/ "./node_modules/ng2-charts/ng2-charts.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-charts/ng2-charts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-charts/index.js"));


/***/ }),

/***/ "./node_modules/ngx-cacheable/cache-buster.decorator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-cacheable/cache-buster.decorator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
function CacheBuster(cacheBusterConfig) {
    return function (_target, _propertyKey, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    parameters[_i] = arguments[_i];
                }
                return oldMethod.call.apply(oldMethod, [this].concat(parameters)).pipe(operators_1.tap(function () {
                    if (cacheBusterConfig.cacheBusterNotifier) {
                        cacheBusterConfig.cacheBusterNotifier.next();
                    }
                }));
            };
        }
        ;
        return propertyDescriptor;
    };
}
exports.CacheBuster = CacheBuster;
;
//# sourceMappingURL=cache-buster.decorator.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/cacheable.decorator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-cacheable/cacheable.decorator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ngx-cacheable/common/index.js");
exports.globalCacheBusterNotifier = new rxjs_1.Subject();
function Cacheable(cacheConfig) {
    if (cacheConfig === void 0) { cacheConfig = {}; }
    return function (_target, _propertyKey, propertyDescriptor) {
        var cacheKey = cacheConfig.cacheKey || _target.constructor.name + '#' + _propertyKey;
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            var storageStrategy_1 = !cacheConfig.storageStrategy
                ? new common_1.GlobalCacheConfig.storageStrategy()
                : new cacheConfig.storageStrategy();
            var pendingCachePairs_1 = [];
            /**
             * subscribe to the globalCacheBuster
             * if a custom cacheBusterObserver is passed, subscribe to it as well
             * subscribe to the cacheBusterObserver and upon emission, clear all caches
             */
            rxjs_1.merge(exports.globalCacheBusterNotifier.asObservable(), cacheConfig.cacheBusterObserver
                ? cacheConfig.cacheBusterObserver
                : rxjs_1.empty()).subscribe(function (_) {
                storageStrategy_1.removeAll(cacheKey);
                pendingCachePairs_1.length = 0;
            });
            cacheConfig.cacheResolver = cacheConfig.cacheResolver
                ? cacheConfig.cacheResolver
                : common_1.DEFAULT_CACHE_RESOLVER;
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var _parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _parameters[_i] = arguments[_i];
                }
                var cachePairs = storageStrategy_1.getAll(cacheKey);
                var parameters = _parameters.map(function (param) { return param !== undefined ? JSON.parse(JSON.stringify(param)) : param; });
                var _foundCachePair = cachePairs.find(function (cp) {
                    return cacheConfig.cacheResolver(cp.parameters, parameters);
                });
                var _foundPendingCachePair = pendingCachePairs_1.find(function (cp) {
                    return cacheConfig.cacheResolver(cp.parameters, parameters);
                });
                /**
                 * check if maxAge is passed and cache has actually expired
                 */
                if (cacheConfig.maxAge && _foundCachePair && _foundCachePair.created) {
                    if (new Date().getTime() - new Date(_foundCachePair.created).getTime() >
                        cacheConfig.maxAge) {
                        /**
                         * cache duration has expired - remove it from the cachePairs array
                         */
                        storageStrategy_1.removeAtIndex(cachePairs.indexOf(_foundCachePair), cacheKey);
                        _foundCachePair = null;
                    }
                    else if (cacheConfig.slidingExpiration) {
                        /**
                         * renew cache duration
                         */
                        _foundCachePair.created = new Date();
                        storageStrategy_1.updateAtIndex(cachePairs.indexOf(_foundCachePair), _foundCachePair, cacheKey);
                    }
                }
                if (_foundCachePair) {
                    var cached$ = rxjs_1.of(_foundCachePair.response);
                    return cacheConfig.async ? cached$.pipe(operators_1.delay(0)) : cached$;
                }
                else if (_foundPendingCachePair) {
                    return _foundPendingCachePair.response;
                }
                else {
                    var response$ = oldMethod.call.apply(oldMethod, [this].concat(parameters)).pipe(operators_1.finalize(function () {
                        /**
                         * if there has been an observable cache pair for these parameters, when it completes or errors, remove it
                         */
                        var _pendingCachePairToRemove = pendingCachePairs_1.find(function (cp) {
                            return cacheConfig.cacheResolver(cp.parameters, parameters);
                        });
                        pendingCachePairs_1.splice(pendingCachePairs_1.indexOf(_pendingCachePairToRemove), 1);
                    }), operators_1.tap(function (response) {
                        /**
                         * if maxCacheCount has not been passed, just shift the cachePair to make room for the new one
                         * if maxCacheCount has been passed, respect that and only shift the cachePairs if the new cachePair will make them exceed the count
                         */
                        if (!cacheConfig.shouldCacheDecider ||
                            cacheConfig.shouldCacheDecider(response)) {
                            if (!cacheConfig.maxCacheCount ||
                                cacheConfig.maxCacheCount === 1 ||
                                (cacheConfig.maxCacheCount &&
                                    cacheConfig.maxCacheCount < cachePairs.length + 1)) {
                                storageStrategy_1.removeAtIndex(0, cacheKey);
                            }
                            storageStrategy_1.add({
                                parameters: parameters,
                                response: response,
                                created: cacheConfig.maxAge ? new Date() : null
                            }, cacheKey);
                        }
                    }), 
                    /**
                     * replay cached observable, so we don't enter finalize and tap for every cached observable subscription
                     */
                    operators_1.shareReplay());
                    /**
                     * cache the stream
                     */
                    pendingCachePairs_1.push({
                        parameters: parameters,
                        response: response$,
                        created: new Date()
                    });
                    return response$;
                }
            };
        }
        return propertyDescriptor;
    };
}
exports.Cacheable = Cacheable;
;
//# sourceMappingURL=cacheable.decorator.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/common/IStorageStrategy.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-cacheable/common/IStorageStrategy.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IStorageStrategy = /** @class */ (function () {
    function IStorageStrategy() {
    }
    return IStorageStrategy;
}());
exports.IStorageStrategy = IStorageStrategy;
//# sourceMappingURL=IStorageStrategy.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IStorageStrategy_1 = __webpack_require__(/*! ./IStorageStrategy */ "./node_modules/ngx-cacheable/common/IStorageStrategy.js");
var InMemoryStorageStrategy = /** @class */ (function (_super) {
    __extends(InMemoryStorageStrategy, _super);
    function InMemoryStorageStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cachePairs = [];
        return _this;
    }
    InMemoryStorageStrategy.prototype.add = function (cachePair) {
        this.cachePairs.push(cachePair);
    };
    ;
    InMemoryStorageStrategy.prototype.updateAtIndex = function (index, entity) {
        var updatee = this.cachePairs[index];
        Object.assign(updatee, entity);
    };
    InMemoryStorageStrategy.prototype.getAll = function () {
        return this.cachePairs;
    };
    ;
    InMemoryStorageStrategy.prototype.removeAtIndex = function (index) {
        this.cachePairs.splice(index, 1);
    };
    InMemoryStorageStrategy.prototype.removeAll = function () {
        this.cachePairs.length = 0;
    };
    return InMemoryStorageStrategy;
}(IStorageStrategy_1.IStorageStrategy));
exports.InMemoryStorageStrategy = InMemoryStorageStrategy;
//# sourceMappingURL=InMemoryStorageStrategy.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/common/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ngx-cacheable/common/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IStorageStrategy_1 = __webpack_require__(/*! ./IStorageStrategy */ "./node_modules/ngx-cacheable/common/IStorageStrategy.js");
exports.IStorageStrategy = IStorageStrategy_1.IStorageStrategy;
var InMemoryStorageStrategy_1 = __webpack_require__(/*! ./InMemoryStorageStrategy */ "./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js");
exports.DEFAULT_CACHE_RESOLVER = function (oldParams, newParams) {
    return JSON.stringify(oldParams) === JSON.stringify(newParams);
};
exports.GlobalCacheConfig = {
    storageStrategy: InMemoryStorageStrategy_1.InMemoryStorageStrategy,
    globalCacheKey: 'CACHE_STORAGE',
    promiseImplementation: Promise
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ngx-cacheable/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cache-buster.decorator */ "./node_modules/ngx-cacheable/cache-buster.decorator.js"));
__export(__webpack_require__(/*! ./cacheable.decorator */ "./node_modules/ngx-cacheable/cacheable.decorator.js"));
__export(__webpack_require__(/*! ./promise.cache-buster.decorator */ "./node_modules/ngx-cacheable/promise.cache-buster.decorator.js"));
__export(__webpack_require__(/*! ./promise.cacheable.decorator */ "./node_modules/ngx-cacheable/promise.cacheable.decorator.js"));
__export(__webpack_require__(/*! ./common */ "./node_modules/ngx-cacheable/common/index.js"));
__export(__webpack_require__(/*! ./common/InMemoryStorageStrategy */ "./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/promise.cache-buster.decorator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-cacheable/promise.cache-buster.decorator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function PCacheBuster(cacheBusterConfig) {
    return function (_target, _propertyKey, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    parameters[_i] = arguments[_i];
                }
                return oldMethod.call.apply(oldMethod, [this].concat(parameters)).then(function (response) {
                    if (cacheBusterConfig.cacheBusterNotifier) {
                        cacheBusterConfig.cacheBusterNotifier.next();
                    }
                    return response;
                });
            };
        }
        ;
        return propertyDescriptor;
    };
}
exports.PCacheBuster = PCacheBuster;
;
//# sourceMappingURL=promise.cache-buster.decorator.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/promise.cacheable.decorator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-cacheable/promise.cacheable.decorator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ngx-cacheable/common/index.js");
exports.promiseGlobalCacheBusterNotifier = new rxjs_1.Subject();
var removeCachePair = function (cachePairs, parameters, cacheConfig) {
    /**
     * if there has been an pending cache pair for these parameters, when it completes or errors, remove it
     */
    var _pendingCachePairToRemove = cachePairs.find(function (cp) {
        return cacheConfig.cacheResolver(cp.parameters, parameters);
    });
    cachePairs.splice(cachePairs.indexOf(_pendingCachePairToRemove), 1);
};
function PCacheable(cacheConfig) {
    if (cacheConfig === void 0) { cacheConfig = {}; }
    return function (_target, _propertyKey, propertyDescriptor) {
        var cacheKey = cacheConfig.cacheKey || _target.constructor.name + '#' + _propertyKey;
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            var storageStrategy_1 = !cacheConfig.storageStrategy
                ? new common_1.GlobalCacheConfig.storageStrategy()
                : new cacheConfig.storageStrategy();
            var pendingCachePairs_1 = [];
            /**
             * subscribe to the promiseGlobalCacheBusterNotifier
             * if a custom cacheBusterObserver is passed, subscribe to it as well
             * subscribe to the cacheBusterObserver and upon emission, clear all caches
             */
            rxjs_1.merge(exports.promiseGlobalCacheBusterNotifier.asObservable(), cacheConfig.cacheBusterObserver
                ? cacheConfig.cacheBusterObserver
                : rxjs_1.empty()).subscribe(function (_) {
                storageStrategy_1.removeAll(cacheKey);
                pendingCachePairs_1.length = 0;
            });
            cacheConfig.cacheResolver = cacheConfig.cacheResolver
                ? cacheConfig.cacheResolver
                : common_1.DEFAULT_CACHE_RESOLVER;
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var _this = this;
                var _parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _parameters[_i] = arguments[_i];
                }
                var promiseImplementation = typeof common_1.GlobalCacheConfig.promiseImplementation === 'function' && (common_1.GlobalCacheConfig.promiseImplementation !== Promise) ?
                    common_1.GlobalCacheConfig.promiseImplementation.call(this)
                    : common_1.GlobalCacheConfig.promiseImplementation;
                var cachePairs = storageStrategy_1.getAll(cacheKey);
                if (!(cachePairs instanceof promiseImplementation)) {
                    cachePairs = promiseImplementation.resolve(cachePairs);
                }
                return cachePairs.then(function (cachePairs) {
                    var parameters = _parameters.map(function (param) { return param !== undefined ? JSON.parse(JSON.stringify(param)) : param; });
                    var _foundCachePair = cachePairs.find(function (cp) {
                        return cacheConfig.cacheResolver(cp.parameters, parameters);
                    });
                    var _foundPendingCachePair = pendingCachePairs_1.find(function (cp) {
                        return cacheConfig.cacheResolver(cp.parameters, parameters);
                    });
                    /**
                     * check if maxAge is passed and cache has actually expired
                     */
                    if (cacheConfig.maxAge && _foundCachePair && _foundCachePair.created) {
                        if (new Date().getTime() - new Date(_foundCachePair.created).getTime() >
                            cacheConfig.maxAge) {
                            /**
                             * cache duration has expired - remove it from the cachePairs array
                             */
                            storageStrategy_1.removeAtIndex(cachePairs.indexOf(_foundCachePair), cacheKey);
                            _foundCachePair = null;
                        }
                        else if (cacheConfig.slidingExpiration) {
                            /**
                             * renew cache duration
                             */
                            _foundCachePair.created = new Date();
                            storageStrategy_1.updateAtIndex(cachePairs.indexOf(_foundCachePair), _foundCachePair, cacheKey);
                        }
                    }
                    if (_foundCachePair) {
                        return promiseImplementation.resolve(_foundCachePair.response);
                    }
                    else if (_foundPendingCachePair) {
                        return _foundPendingCachePair.response;
                    }
                    else {
                        var response$ = oldMethod.call.apply(oldMethod, [_this].concat(parameters))
                            .then(function (response) {
                            removeCachePair(pendingCachePairs_1, parameters, cacheConfig);
                            /**
                             * if no maxCacheCount has been passed
                             * if maxCacheCount has not been passed, just shift the cachePair to make room for the new one
                             * if maxCacheCount has been passed, respect that and only shift the cachePairs if the new cachePair will make them exceed the count
                             */
                            if (!cacheConfig.shouldCacheDecider ||
                                cacheConfig.shouldCacheDecider(response)) {
                                if (!cacheConfig.maxCacheCount ||
                                    cacheConfig.maxCacheCount === 1 ||
                                    (cacheConfig.maxCacheCount &&
                                        cacheConfig.maxCacheCount < cachePairs.length + 1)) {
                                    storageStrategy_1.removeAtIndex(0, cacheKey);
                                }
                                storageStrategy_1.add({
                                    parameters: parameters,
                                    response: response,
                                    created: cacheConfig.maxAge ? new Date() : null
                                }, cacheKey);
                            }
                            return response;
                        })
                            .catch(function (error) {
                            removeCachePair(pendingCachePairs_1, parameters, cacheConfig);
                            return Promise.reject(error);
                        });
                        /**
                         * cache the stream
                         */
                        pendingCachePairs_1.push({
                            parameters: parameters,
                            response: response$,
                            created: new Date()
                        });
                        return response$;
                    }
                });
            };
        }
        return propertyDescriptor;
    };
}
exports.PCacheable = PCacheable;
;
//# sourceMappingURL=promise.cacheable.decorator.js.map

/***/ }),

/***/ "./src/app/tdl/services/tdl.service.ts":
/*!*********************************************!*\
  !*** ./src/app/tdl/services/tdl.service.ts ***!
  \*********************************************/
/*! exports provided: TDLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDLService", function() { return TDLService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cacheable */ "./node_modules/ngx-cacheable/index.js");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__);
/*
@author : Deloitte
Service class to perform tdl related operations.
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
/**
 *
 *
 * @export
 * @class TDLService
 */
var TDLService = /** @class */ (function () {
    function TDLService(http) {
        this.http = http;
        this.tdlurl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + '/api/v1/tdl';
    }
    /**
     *
     *
     * @param {TDL} tdl
     * @returns {Observable<TDL>}
     *
     * @memberOf TDLService
     */
    TDLService.prototype.createTDL = function (tdl) {
        var _this = this;
        return this.http.post(this.tdlurl, tdl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    /**
     *
     *
     * @param {TDL} tdl
     * @returns {Observable<TDL>}
     *
     * @memberOf TDLService
     */
    TDLService.prototype.updateTDL = function (tdl) {
        var _this = this;
        return this.http.put(this.tdlurl, tdl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    /**
     *
     *
     * @param {TDL} tdl
     * @returns {Observable<TDL>}
     *
     * @memberOf TDLService
     */
    TDLService.prototype.updateTDLWithDates = function (tdls) {
        var _this = this;
        return this.http.put(this.tdlurl + '/plan', tdls, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    /**
     *
     *
     * @param {any} id
     * @returns
     *
     * @memberOf TDLService
     */
    TDLService.prototype.getTDL = function (id) {
        var _this = this;
        return this.http.get(this.tdlurl + '/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    /**
     *
     *
     * @param {any} id
     * @returns
     *
     * @memberOf TDLService
     */
    TDLService.prototype.getTDLView = function (id) {
        var _this = this;
        return this.http.get(this.tdlurl + '/view/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    TDLService.prototype.deleteTDLById = function (id) {
        var _this = this;
        return this.http.delete(this.tdlurl + '/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    /**
     *
     *
     * @param {TDLSearchCriteria} tdlSearchCriteria
     * @returns
     *
     * @memberOf TDLService
     */
    TDLService.prototype.getTDLBySearchCriteria = function (tdlSearchCriteria) {
        var _this = this;
        return this.http.post(this.tdlurl + '/search', tdlSearchCriteria, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    TDLService.prototype.getTDLByUserFilterQuery = function (ufq) {
        var _this = this;
        return this.http.post(this.tdlurl + '/search/userfilter', ufq, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    TDLService.prototype.getTDLBySearchCriteriaAsGanttTasks = function (tdlSearchCriteria) {
        var _this = this;
        return this.http.post(this.tdlurl + '/search/gantt', tdlSearchCriteria, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    TDLService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(this.tdlurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveSkills"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveSkills")));
    };
    TDLService.prototype.getTDLResources = function (tdlId) {
        var _this = this;
        return this.http.get(this.tdlurl + '/resource/' + tdlId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLResources"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLResources")));
    };
    TDLService.prototype.recalcPlanAndActualHoursAndCost = function (tdlId) {
        var _this = this;
        return this.http.get(this.tdlurl + '/recalc/' + tdlId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("recalcPlanAndActualHoursAndCost"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("recalcPlanAndActualHoursAndCost")));
    };
    TDLService.prototype.getTDLBurndownHoursByWeeks = function (tdlId) {
        var _this = this;
        return this.http.get(this.tdlurl + '/burndown/' + tdlId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLBurndownHoursByWeeks"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLBurndownHoursByWeeks")));
    };
    TDLService.prototype.getTDLResourceBurndownHoursByWeeks = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/resburn', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLResourceBurndownHoursByWeeks"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLResourceBurndownHoursByWeeks")));
    };
    TDLService.prototype.getTDLStatuses = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/status/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLStatuses"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLStatuses")));
    };
    TDLService.prototype.getTDLTypes = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/type/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLTypes"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLTypes")));
    };
    TDLService.prototype.getCLINs = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/clin/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getCLINs"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCLINs")));
    };
    TDLService.prototype.getTDLCategories = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/cat/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLCategories"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLCategories")));
    };
    TDLService.prototype.getListOfOfferingsForOP = function (opId) {
        var _this = this;
        return this.http.get(this.tdlurl + '/offering/list/' + opId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getListOfOfferingsForOP"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getListOfOfferingsForOP")));
    };
    TDLService.prototype.getOPs = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/op/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getOPs"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getOPs")));
    };
    TDLService.prototype.getListOfIndustries = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/industry/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getListOfIndustries"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getListOfIndustries")));
    };
    TDLService.prototype.getListOfSectors = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/sector/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getListOfSectors"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getListOfSectors")));
    };
    TDLService.prototype.getPoPs = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/pop/list', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getPoPs"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPoPs")));
    };
    TDLService.prototype.getLaborRatePeriodList = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/lcatrate/periods', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getLaborRatePeriodList"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getLaborRatePeriodList")));
    };
    TDLService.prototype.getTDLForecastMatrixFromDate = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + "/forecast", query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLForecastMatrixFromDate"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLForecastMatrixFromDate")));
    };
    TDLService.prototype.getTDLReviewMatrixFromDate = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + "/review", query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLReviewMatrixFromDate"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLReviewMatrixFromDate")));
    };
    TDLService.prototype.getTDLVarianceMonthlyMatrix = function () {
        var _this = this;
        return this.http.get(this.tdlurl + "/variance", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLVarianceMonthlyMatrix"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLVarianceMonthlyMatrix")));
    };
    TDLService.prototype.getTDLVarianceMatrixFromDate = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + "/variance", query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLVarianceMatrixFromDate"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLVarianceMatrixFromDate")));
    };
    TDLService.prototype.getTDLVarianceMonthlyMatrixFromDate = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + "/monthvar", query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLVarianceMonthlyMatrixFromDate"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLVarianceMonthlyMatrixFromDate")));
    };
    TDLService.prototype.getLaborCategoryGroups = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/lcatgroups', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getLaborCategoryGroups"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getLaborCategoryGroups")));
    };
    TDLService.prototype.getListOfActiveClients = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/client/list/active', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getListOfActiveClients"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getListOfActiveClients")));
    };
    TDLService.prototype.getDropDownListOfClients = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/client/list/dropdown', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getDropDownListOfClients"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getDropDownListOfClients")));
    };
    TDLService.prototype.getListOfActiveAccounts = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/account/list/active', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getListOfActiveAccounts"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getListOfActiveAccounts")));
    };
    TDLService.prototype.getDropDownListOfAccounts = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/account/list/dropdown', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getDropDownListOfAccounts"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getDropDownListOfAccounts")));
    };
    TDLService.prototype.reCalcHeadCount = function (tdlId) {
        var _this = this;
        return this.http.get(this.tdlurl + '/headcount/' + tdlId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("reCalcHeadCount"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("reCalcHeadCount")));
    };
    TDLService.prototype.getTDLComments = function (tdlId) {
        var _this = this;
        return this.http.get(this.tdlurl + '/comment/' + tdlId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLComments"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLComments")));
    };
    TDLService.prototype.getTDLNewsFeed = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/newsfeed', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLNewsFeed"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLNewsFeed")));
    };
    TDLService.prototype.adjustHoursForProjectDateChange = function (pdc) {
        var _this = this;
        return this.http.post(this.tdlurl + '/dateadjust', pdc, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("adjustHoursForProjectDateChange"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("adjustHoursForProjectDateChange")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TDLService.prototype.handleError = function (operation, result) {
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
    /** Log a Attribute Service message with the MessageService */
    TDLService.prototype.log = function (message) {
        //this.messageService.add("Profile Service: ${message}");
    };
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getTDLTypes", null);
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getCLINs", null);
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getTDLCategories", null);
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getListOfOfferingsForOP", null);
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getOPs", null);
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getListOfIndustries", null);
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getListOfSectors", null);
    __decorate([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TDLService.prototype, "getPoPs", null);
    TDLService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TDLService);
    return TDLService;
}());



/***/ }),

/***/ "./src/app/tdl/services/tdlresource.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/tdl/services/tdlresource.service.ts ***!
  \*****************************************************/
/*! exports provided: TDLResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDLResourceService", function() { return TDLResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/*
@author : Deloitte
Service class to perform tdlResource related operations.
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
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-Type": "application/json" })
};
/**
 *
 *
 * @export
 * @class TDLResourceService
 */
var TDLResourceService = /** @class */ (function () {
    function TDLResourceService(http) {
        this.http = http;
        this.gettdlresourceurl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + '/api/v1/tdlresource';
    }
    /**
     *
     *
     * @param {TDLResource} tdlResource
     * @returns {Observable<TDLResource>}
     *
     * @memberOf TDLResourceService
     */
    TDLResourceService.prototype.createTDLResource = function (tdlResource) {
        var _this = this;
        return this.http.post(this.gettdlresourceurl, tdlResource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("createTDLResource"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("createTDLResource")));
    };
    /**
     */
    TDLResourceService.prototype.createTBDTDLResource = function (tbdres) {
        var _this = this;
        return this.http.post(this.gettdlresourceurl + '/tbd', tbdres, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("createTBDTDLResource"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("createTBDTDLResource")));
    };
    /**
     *
     * @param swapResource
     */
    TDLResourceService.prototype.swapTDLResource = function (swapTDLResource) {
        var _this = this;
        return this.http.post(this.gettdlresourceurl + '/swap', swapTDLResource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("swapTDLResource"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("swapTDLResource")));
    };
    /**
     *
     *
     * @param {TDLResource} tdlResource
     * @returns {Observable<TDLResource>}
     *
     * @memberOf TDLResourceService
     */
    TDLResourceService.prototype.updateTDLResource = function (tdlResource) {
        var _this = this;
        return this.http.put(this.gettdlresourceurl, tdlResource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("updateTDLResource"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("updateTDLResource")));
    };
    /**
     *
     *
     * @param {any} id
     * @returns
     *
     * @memberOf TDLResourceService
     */
    TDLResourceService.prototype.getTDLResource = function (id) {
        var _this = this;
        return this.http.get(this.gettdlresourceurl + '/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("getTDLResource"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getTDLResource")));
    };
    TDLResourceService.prototype.deleteTDLResourceById = function (id) {
        var _this = this;
        return this.http.delete(this.gettdlresourceurl + '/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("deleteTDLResourceById"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("deleteTDLResourceById")));
    };
    /**
     *
     *
     * @param {resourceId} resourceId
     * @returns
     *
     * @memberOf TDLResourceService
     */
    TDLResourceService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(this.gettdlresourceurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("getAll"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getAll")));
    };
    TDLResourceService.prototype.getResourceTDLPlanViewForGivenWeekEnding = function (query) {
        var _this = this;
        return this.http.post(this.gettdlresourceurl + '/plan/tdl', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("getResourceTDLPlanViewForGivenWeekEnding"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getResourceTDLPlanViewForGivenWeekEnding")));
    };
    TDLResourceService.prototype.getResourceTDLActualViewForGivenWeekEnding = function (query) {
        var _this = this;
        return this.http.post(this.gettdlresourceurl + '/actual/tdl', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("getResourceTDLActualViewForGivenWeekEnding"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getResourceTDLActualViewForGivenWeekEnding")));
    };
    TDLResourceService.prototype.getResourceTDLPlanViewForGivenWeekEndingRange = function (query) {
        var _this = this;
        return this.http.post(this.gettdlresourceurl + '/plan/tdl/range', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("getResourceTDLPlanViewForGivenWeekEndingRange"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getResourceTDLPlanViewForGivenWeekEndingRange")));
    };
    TDLResourceService.prototype.getResourceTDLActualViewForGivenWeekEndingRange = function (query) {
        var _this = this;
        return this.http.post(this.gettdlresourceurl + '/actual/tdl/range', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("getResourceTDLActualViewForGivenWeekEndingRange"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getResourceTDLActualViewForGivenWeekEndingRange")));
    };
    TDLResourceService.prototype.getResourceTDLs = function (resourceId) {
        var _this = this;
        return this.http.get(this.gettdlresourceurl + '/tdl/' + resourceId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("getResourceTDLs"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getResourceTDLs")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TDLResourceService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log("${operation} failed: ${error.message}");
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    /** Log a Attribute Service message with the MessageService */
    TDLResourceService.prototype.log = function (message) {
        //this.messageService.add("Profile Service: ${message}");
    };
    TDLResourceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TDLResourceService);
    return TDLResourceService;
}());



/***/ }),

/***/ "./src/app/timesheet/models/acthours.model.ts":
/*!****************************************************!*\
  !*** ./src/app/timesheet/models/acthours.model.ts ***!
  \****************************************************/
/*! exports provided: ActualHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualHours", function() { return ActualHours; });
var ActualHours = /** @class */ (function () {
    function ActualHours() {
    }
    return ActualHours;
}());



/***/ }),

/***/ "./src/app/timesheet/models/period-tdlplanhours.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/timesheet/models/period-tdlplanhours.model.ts ***!
  \***************************************************************/
/*! exports provided: PeriodTDLPlanHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodTDLPlanHours", function() { return PeriodTDLPlanHours; });
var PeriodTDLPlanHours = /** @class */ (function () {
    function PeriodTDLPlanHours() {
    }
    return PeriodTDLPlanHours;
}());



/***/ }),

/***/ "./src/app/timesheet/models/planhours.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/timesheet/models/planhours.model.ts ***!
  \*****************************************************/
/*! exports provided: PlanHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanHours", function() { return PlanHours; });
var PlanHours = /** @class */ (function () {
    function PlanHours() {
    }
    return PlanHours;
}());



/***/ }),

/***/ "./src/app/timesheet/models/planhr-query.model.ts":
/*!********************************************************!*\
  !*** ./src/app/timesheet/models/planhr-query.model.ts ***!
  \********************************************************/
/*! exports provided: TDLPlanHoursQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDLPlanHoursQuery", function() { return TDLPlanHoursQuery; });
var TDLPlanHoursQuery = /** @class */ (function () {
    function TDLPlanHoursQuery() {
    }
    return TDLPlanHoursQuery;
}());



/***/ }),

/***/ "./src/app/timesheet/models/wkly-resplanhours.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/timesheet/models/wkly-resplanhours.model.ts ***!
  \*************************************************************/
/*! exports provided: WeeklyResourcePlanHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyResourcePlanHours", function() { return WeeklyResourcePlanHours; });
var WeeklyResourcePlanHours = /** @class */ (function () {
    function WeeklyResourcePlanHours() {
    }
    return WeeklyResourcePlanHours;
}());



/***/ }),

/***/ "./src/app/timesheet/models/wkly-tdlplanhours.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/timesheet/models/wkly-tdlplanhours.model.ts ***!
  \*************************************************************/
/*! exports provided: WeeklyTDLPlanHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyTDLPlanHours", function() { return WeeklyTDLPlanHours; });
var WeeklyTDLPlanHours = /** @class */ (function () {
    function WeeklyTDLPlanHours() {
    }
    return WeeklyTDLPlanHours;
}());



/***/ }),

/***/ "./src/app/timesheet/services/act-sheet.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/timesheet/services/act-sheet.service.ts ***!
  \*********************************************************/
/*! exports provided: ActualSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSheetService", function() { return ActualSheetService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_acthours_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/acthours.model */ "./src/app/timesheet/models/acthours.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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
var ActualSheetService = /** @class */ (function () {
    function ActualSheetService(http) {
        this.http = http;
        this.tdlurl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + '/api/v1/acthrs';
    }
    ActualSheetService.prototype.saveActualHours = function (timesheet, resourceID) {
        var _this = this;
        var actHours = [];
        for (var _i = 0, _a = timesheet.ptsprojects; _i < _a.length; _i++) {
            var ptsr = _a[_i];
            var ah = new _models_acthours_model__WEBPACK_IMPORTED_MODULE_4__["ActualHours"]();
            ah.weekEnding = timesheet.weekEnding;
            ah.actualHoursID = ptsr.actualHoursID;
            ah.tdlResourceID = ptsr.tdlResourceID;
            ah.resourceID = resourceID;
            ah.tdlID = ptsr.tdlID;
            ah.sunHrs = ptsr.hours[0];
            ah.monHrs = ptsr.hours[1];
            ah.tueHrs = ptsr.hours[2];
            ah.wedHrs = ptsr.hours[3];
            ah.thuHrs = ptsr.hours[4];
            ah.friHrs = ptsr.hours[5];
            ah.satHrs = ptsr.hours[6];
            ah.rate = ptsr.weekRate;
            actHours.push(ah);
        }
        return this.http.post(this.tdlurl, actHours, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveActualHours"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveActualHours")));
    };
    ActualSheetService.prototype.getActualResourceHoursForWeekEnding = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/wkres', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getActualResourceHoursForWeekEnding"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getActualResourceHoursForWeekEnding")));
    };
    ActualSheetService.prototype.getResourceVarianceHoursForWeekEnding = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/wkresvar', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getResourceVarianceHoursForWeekEnding"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getResourceVarianceHoursForWeekEnding")));
    };
    ActualSheetService.prototype.getTotalActualHoursForTDL = function (tdlID) {
        var _this = this;
        return this.http.get(this.tdlurl + '/tdl/hrs/' + tdlID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTotalActualHoursForTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTotalActualHoursForTDL")));
    };
    /**
     *
     * @param query
     */
    ActualSheetService.prototype.getCLINReport = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/clin', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getCLINReport"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCLINReport")));
    };
    ActualSheetService.prototype.getCLINPlotInfo = function (dsc) {
        var _this = this;
        return this.http.post(this.tdlurl + '/clinplot', dsc, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getCLINPlotInfo"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCLINPlotInfo")));
    };
    ActualSheetService.prototype.getTaskAreaPlotInfo = function (dsc) {
        var _this = this;
        return this.http.post(this.tdlurl + '/taskareaplot', dsc, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTaskAreaPlotInfo"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTaskAreaPlotInfo")));
    };
    // public ingestFile(formData: FormData): Promise<any> {
    //   return this.http.makeFileRequest("Post", this.tdlurl + '/ingestFile', formData);
    // }
    ActualSheetService.prototype.sendTimeSheetEmail = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/email/timesheet', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("sendTimeSheetEmail"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("sendTimeSheetEmail")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ActualSheetService.prototype.handleError = function (operation, result) {
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
    /** Log a Attribute Service message with the MessageService */
    ActualSheetService.prototype.log = function (message) {
        //this.messageService.add("Profile Service: ${message}");
    };
    ActualSheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ActualSheetService);
    return ActualSheetService;
}());



/***/ }),

/***/ "./src/app/timesheet/services/plan-sheet.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/timesheet/services/plan-sheet.service.ts ***!
  \**********************************************************/
/*! exports provided: PlanSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanSheetService", function() { return PlanSheetService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_period_tdlplanhours_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/period-tdlplanhours.model */ "./src/app/timesheet/models/period-tdlplanhours.model.ts");
/* harmony import */ var _models_planhours_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/planhours.model */ "./src/app/timesheet/models/planhours.model.ts");
/* harmony import */ var _models_planhr_query_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/planhr-query.model */ "./src/app/timesheet/models/planhr-query.model.ts");
/* harmony import */ var _models_wkly_resplanhours_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/wkly-resplanhours.model */ "./src/app/timesheet/models/wkly-resplanhours.model.ts");
/* harmony import */ var _models_wkly_tdlplanhours_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/wkly-tdlplanhours.model */ "./src/app/timesheet/models/wkly-tdlplanhours.model.ts");
/* harmony import */ var _shared_service_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../shared/service/date.service */ "./src/app/shared/service/date.service.ts");
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
/**
 *
 *
 * @export
 * @class PlanSheetService
 */
var PlanSheetService = /** @class */ (function () {
    function PlanSheetService(http) {
        this.http = http;
        this.tdlurl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + '/api/v1/planhrs';
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + '/api/v1/tdl';
    }
    /**
     *
     *
     * @param {TDLPlanTimesheet} timesheet
     * @param {number} tdlID
     * @returns {Observable<PlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.saveTDLPlanHours = function (timesheet, tdlID) {
        var _this = this;
        var planHours = [];
        for (var _i = 0, _a = timesheet.ptsresources; _i < _a.length; _i++) {
            var ptsr = _a[_i];
            var ph = new _models_planhours_model__WEBPACK_IMPORTED_MODULE_6__["PlanHours"]();
            ph.weekEnding = timesheet.weekEnding;
            ph.planHoursID = ptsr.planHoursID;
            ph.tdlID = tdlID;
            ph.tdlResourceID = ptsr.tdlResourceID;
            ph.resourceID = ptsr.resourceID;
            ph.sunHrs = ptsr.hours[0];
            ph.monHrs = ptsr.hours[1];
            ph.tueHrs = ptsr.hours[2];
            ph.wedHrs = ptsr.hours[3];
            ph.thuHrs = ptsr.hours[4];
            ph.friHrs = ptsr.hours[5];
            ph.satHrs = ptsr.hours[6];
            ph.rate = ptsr.weekRate;
            planHours.push(ph);
        }
        return this.http.post(this.tdlurl, planHours, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveTDLPlanHours"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveTDLPlanHours")));
    };
    /**
     *
     *
     * @param {WeeklyTDLPlanTimesheet} timesheet
     * @param {number} tdlID
     * @returns {Observable<WeeklyTDLPlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.saveTDLWeeklyPlanHours = function (timesheet, tdlID) {
        var _this = this;
        var planHours = [];
        for (var _i = 0, _a = timesheet.ptsresources; _i < _a.length; _i++) {
            var ptsr = _a[_i];
            var ph = new _models_wkly_tdlplanhours_model__WEBPACK_IMPORTED_MODULE_9__["WeeklyTDLPlanHours"]();
            ph.tdlID = tdlID;
            ph.weekEnding = timesheet.weekEnding;
            ph.tdlResourceID = ptsr.tdlResourceID;
            ph.resourceID = ptsr.resourceID;
            ph.wk1 = ptsr.weekhours[0];
            ph.wk2 = ptsr.weekhours[1];
            ph.wk3 = ptsr.weekhours[2];
            ph.wk4 = ptsr.weekhours[3];
            ph.wk5 = ptsr.weekhours[4];
            ph.wk6 = ptsr.weekhours[5];
            ph.wk7 = ptsr.weekhours[6];
            ph.wkr1 = ptsr.weekrates[0];
            ph.wkr2 = ptsr.weekrates[1];
            ph.wkr3 = ptsr.weekrates[2];
            ph.wkr4 = ptsr.weekrates[3];
            ph.wkr5 = ptsr.weekrates[4];
            ph.wkr6 = ptsr.weekrates[5];
            ph.wkr7 = ptsr.weekrates[6];
            planHours.push(ph);
        }
        return this.http.post(this.tdlurl + '/week', planHours, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveTDLWeeklyPlanHours"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveTDLWeeklyPlanHours")));
    };
    /**
   *
   *
   * @param {WeeklyTDLPlanTimesheet} timesheet
   * @param {number} tdlID
   * @returns {Observable<WeeklyTDLPlanHours[]>}
   * @memberof PlanSheetService
   */
    PlanSheetService.prototype.saveTDLPeriodPlanHours = function (timesheet, tdlID) {
        var _this = this;
        var planHours = [];
        for (var _i = 0, _a = timesheet.ptsresources; _i < _a.length; _i++) {
            var ptsr = _a[_i];
            var ph = new _models_period_tdlplanhours_model__WEBPACK_IMPORTED_MODULE_5__["PeriodTDLPlanHours"]();
            ph.tdlID = tdlID;
            ph.fiscalYear = timesheet.fiscalYear;
            ph.tdlResourceID = ptsr.tdlResourceID;
            ph.resourceID = ptsr.resourceID;
            ph.pd01 = ptsr.periodhours[0];
            ph.pd02 = ptsr.periodhours[1];
            ph.pd03 = ptsr.periodhours[2];
            ph.pd04 = ptsr.periodhours[3];
            ph.pd05 = ptsr.periodhours[4];
            ph.pd06 = ptsr.periodhours[5];
            ph.pd07 = ptsr.periodhours[6];
            ph.pd08 = ptsr.periodhours[7];
            ph.pd09 = ptsr.periodhours[8];
            ph.pd10 = ptsr.periodhours[9];
            ph.pd11 = ptsr.periodhours[10];
            ph.pd12 = ptsr.periodhours[11];
            ph.pd13 = ptsr.periodhours[12];
            ph.pdr01 = ptsr.periodrates[0];
            ph.pdr02 = ptsr.periodrates[1];
            ph.pdr03 = ptsr.periodrates[2];
            ph.pdr04 = ptsr.periodrates[3];
            ph.pdr05 = ptsr.periodrates[4];
            ph.pdr06 = ptsr.periodrates[5];
            ph.pdr07 = ptsr.periodrates[6];
            ph.pdr08 = ptsr.periodrates[7];
            ph.pdr09 = ptsr.periodrates[8];
            ph.pdr10 = ptsr.periodrates[9];
            ph.pdr11 = ptsr.periodrates[10];
            ph.pdr12 = ptsr.periodrates[11];
            ph.pdr13 = ptsr.periodrates[12];
            planHours.push(ph);
        }
        return this.http.post(this.tdlurl + '/period', planHours, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveTDLPeriodPlanHours"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveTDLPeriodPlanHours")));
    };
    PlanSheetService.prototype.addResourceTDLPlanHours = function (soq) {
        var _this = this;
        return this.http.post(this.tdlurl + '/offset', soq, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("addResourceTDLPlanHours"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addResourceTDLPlanHours")));
    };
    /**
     *
     *
     * @param {ResourcePlanTimesheet} timesheet
     * @param {number} resourceID
     * @returns {Observable<PlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.saveResourcePlanHours = function (timesheet, resourceID) {
        var _this = this;
        var planHours = [];
        for (var _i = 0, _a = timesheet.ptsprojects; _i < _a.length; _i++) {
            var ptsr = _a[_i];
            var ph = new _models_planhours_model__WEBPACK_IMPORTED_MODULE_6__["PlanHours"]();
            ph.weekEnding = timesheet.weekEnding;
            ph.planHoursID = ptsr.planHoursID;
            ph.tdlID = ptsr.tdlID;
            ph.tdlResourceID = ptsr.tdlResourceID;
            ph.resourceID = ptsr.resourceID;
            ph.sunHrs = ptsr.hours[0];
            ph.monHrs = ptsr.hours[1];
            ph.tueHrs = ptsr.hours[2];
            ph.wedHrs = ptsr.hours[3];
            ph.thuHrs = ptsr.hours[4];
            ph.friHrs = ptsr.hours[5];
            ph.satHrs = ptsr.hours[6];
            planHours.push(ph);
        }
        return this.http.post(this.tdlurl, planHours, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveResourcePlanHours"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveResourcePlanHours")));
    };
    /**
     *
     *
     * @param {ResourcePlanTimesheet} timesheet
     * @param {number} resourceID
     * @returns {Observable<WeeklyResourcePlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.saveWeeklyResourcePlanHours = function (timesheet, resourceID) {
        var _this = this;
        var planHours = [];
        for (var _i = 0, _a = timesheet.ptsprojects; _i < _a.length; _i++) {
            var ptsr = _a[_i];
            var ph = new _models_wkly_resplanhours_model__WEBPACK_IMPORTED_MODULE_8__["WeeklyResourcePlanHours"]();
            ph.weekEnding = timesheet.weekEnding;
            ph.tdlID = ptsr.tdlID;
            ph.tdlResourceID = ptsr.tdlResourceID;
            ph.resourceID = ptsr.resourceID;
            ph.wk1 = ptsr.weekhours[0];
            ph.wk2 = ptsr.weekhours[1];
            ph.wk3 = ptsr.weekhours[2];
            ph.wk4 = ptsr.weekhours[3];
            ph.wk5 = ptsr.weekhours[4];
            ph.wk6 = ptsr.weekhours[5];
            ph.wk7 = ptsr.weekhours[6];
            ph.wkr1 = ptsr.weekrates[0];
            ph.wkr2 = ptsr.weekrates[1];
            ph.wkr3 = ptsr.weekrates[2];
            ph.wkr4 = ptsr.weekrates[3];
            ph.wkr5 = ptsr.weekrates[4];
            ph.wkr6 = ptsr.weekrates[5];
            ph.wkr7 = ptsr.weekrates[6];
            planHours.push(ph);
        }
        return this.http.post(this.tdlurl + '/week', planHours, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("saveWeeklyResourcePlanHours"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("saveWeeklyResourcePlanHours")));
    };
    /**
     *
     *
     * @param {number} tdlID
     * @returns {Observable<any>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.getTotalPlanHoursForTDL = function (tdlID) {
        var _this = this;
        return this.http.get(this.tdlurl + '/tdl/hrs/' + tdlID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTotalPlanHoursForTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTotalPlanHoursForTDL")));
    };
    /**
     *
     *
     * @param {number} tdlID
     * @returns {Observable<any>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.getTotalPlanHoursAndCostForTDL = function (tdlID) {
        var _this = this;
        return this.http.get(this.tdlurl + '/tdl/hrscost/' + tdlID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTotalPlanHoursAndCostForTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTotalPlanHoursAndCostForTDL")));
    };
    /**
     * Used in retrieving plan hours for the daily planner
     *
     * @param {TDLPlanHoursQuery} query
     * @returns {Observable<PlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.getPlanHoursForWeekEndingAndTDL = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/wktdl', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getPlanHoursForWeekEndingAndTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPlanHoursForWeekEndingAndTDL")));
    };
    /**
     * Used in retrieving planning hours for the weekly planner
     *
     * @param {TDLPlanHoursQuery} query
     * @returns {Observable<WeeklyPlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.getWeeklyPlanHoursForWeekEndingAndTDL = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/week/wktdl', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getWeeklyPlanHoursForWeekEndingAndTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getWeeklyPlanHoursForWeekEndingAndTDL")));
    };
    /**
   * Used in retrieving planning hours for the period planner
   *
   * @param {TDLPlanHoursQuery} query
   * @returns {Observable<PeriodPlanHours[]>}
   * @memberof PlanSheetService
   */
    PlanSheetService.prototype.getPeriodPlanHoursForFiscalYearAndTDL = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/period/pdtdl', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getPeriodPlanHoursForFiscalYearAndTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPeriodPlanHoursForFiscalYearAndTDL")));
    };
    /**
     *
     *
     * @param {number} id
     * @param {TDLHoursApproveInfo} apprvInfo
     * @returns {Observable<PlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.approvePlanHoursForWeekEndingAndTDL = function (id, apprvInfo) {
        var _this = this;
        return this.http.put(this.tdlurl + '/wktdl/approve/' + id, apprvInfo, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("approvePlanHoursForWeekEndingAndTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("approvePlanHoursForWeekEndingAndTDL")));
    };
    /**
     *
     *
     * @param {TDLPlanHoursQuery} query
     * @returns {Observable<PlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.getPlanResourceHoursForWeekEnding = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/wkres', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getPlanResourceHoursForWeekEnding"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPlanResourceHoursForWeekEnding")));
    };
    /**
     *
     *
     * @param {TDLPlanHoursQuery} query
     * @returns {Observable<PlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.getWeeklyPlanResourceHoursForWeekEnding = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/week/wktdlres', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getWeeklyPlanResourceHoursForWeekEnding"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getWeeklyPlanResourceHoursForWeekEnding")));
    };
    /**
     *
     * @param query
     */
    PlanSheetService.prototype.getCLINReport = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/clin', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getCLINReport"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCLINReport")));
    };
    PlanSheetService.prototype.getCLINPlotInfo = function (dsc) {
        var _this = this;
        return this.http.post(this.tdlurl + '/clinplot', dsc, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getCLINPlotInfo"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCLINPlotInfo")));
    };
    PlanSheetService.prototype.getTaskAreaPlotInfo = function (dsc) {
        var _this = this;
        return this.http.post(this.tdlurl + '/taskareaplot', dsc, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTaskAreaPlotInfo"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTaskAreaPlotInfo")));
    };
    /**
     *
     * @param query
     */
    PlanSheetService.prototype.getResourcePlanTDLHoursForWeekEnding = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/wktdlres', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getResourcePlanTDLHoursForWeekEnding"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getResourcePlanTDLHoursForWeekEnding")));
    };
    /**
     *
     *
     * @param {number} resourceID
     * @param {number} tdlID
     * @returns {Observable<TDLResourceBudgetPlanHours[]>}
     * @memberof PlanSheetService
     */
    PlanSheetService.prototype.getResourcePlannedHoursForTDL = function (resourceID, tdlID) {
        var _this = this;
        var query = new _models_planhr_query_model__WEBPACK_IMPORTED_MODULE_7__["TDLPlanHoursQuery"]();
        query.resourceID = resourceID;
        query.tdlID = tdlID;
        return this.http.post(this.tdlurl + '/tdl/reshrs', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getResourcePlannedHoursForTDL"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getResourcePlannedHoursForTDL")));
    };
    PlanSheetService.prototype.sendChargeAuthorizationEmail = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/email/chargeauth', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("sendChargeAuthorizationEmail"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("sendChargeAuthorizationEmail")));
    };
    PlanSheetService.prototype.getTDLPlanHoursAuditLog = function (tdlId) {
        var _this = this;
        return this.http.get(this.tdlurl + '/tdl/audit/log/' + tdlId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getTDLPlanHoursAuditLog"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTDLPlanHoursAuditLog")));
    };
    PlanSheetService.prototype.getResourcePlanHoursAuditLog = function (resourceId, weekEnding) {
        var _this = this;
        var query = new _models_planhr_query_model__WEBPACK_IMPORTED_MODULE_7__["TDLPlanHoursQuery"]();
        query.resourceID = resourceId;
        query.weekEnding = _shared_service_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"].getFormattedText(weekEnding, 'YYYY-MM-DD');
        return this.http.post(this.tdlurl + '/resource/audit/log', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getResourcePlanHoursAuditLog"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getResourcePlanHoursAuditLog")));
    };
    PlanSheetService.prototype.getPiplineForecastPeriods = function () {
        var _this = this;
        return this.http.get(this.tdlurl + '/fcastperiods', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getPiplineForecastPeriods"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPiplineForecastPeriods")));
    };
    PlanSheetService.prototype.getPeriodLookupsForFiscalYear = function (fiscalYear) {
        var _this = this;
        return this.http.get(this.tdlurl + '/fcastperiods/' + fiscalYear, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getPeriodLookupsForFiscalYear"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPeriodLookupsForFiscalYear")));
    };
    PlanSheetService.prototype.getPipelineAnalysisReport = function (query) {
        var _this = this;
        return this.http.post(this.tdlurl + '/pareport', query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getCLINReport"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCLINReport")));
    };
    // public downloadXLSXTemplateFile(docid: string): any {
    //   let headers = new Headers({
    //       "Content-Type": "application/json"
    //   });
    //   return this.http.getFile(this.baseurl + '/view/xlsx/' + docid);
    // }
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    PlanSheetService.prototype.handleError = function (operation, result) {
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
    /** Log a Attribute Service message with the MessageService */
    PlanSheetService.prototype.log = function (message) {
        //this.messageService.add("Profile Service: ${message}");
    };
    PlanSheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlanSheetService);
    return PlanSheetService;
}());



/***/ })

}]);
//# sourceMappingURL=default~resource-resource-module~tdl-components-tdl-module~timesheet-components-timesheet-module.js.map