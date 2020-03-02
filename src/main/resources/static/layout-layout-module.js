(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/jquery-slimscroll/jquery.slimscroll.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery-slimscroll/jquery.slimscroll.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(config, el, router, renderer, ngZone) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.chatOpened = false;
        this.appClass = true;
        this.el = el;
        this.config = config.getConfig();
        this.configFn = config;
        this.router = router;
    }
    LayoutComponent.prototype.toggleSidebarListener = function (state) {
        var toggleNavigation = state === 'static'
            ? this.toggleNavigationState
            : this.toggleNavigationCollapseState;
        toggleNavigation.apply(this);
        localStorage.setItem('nav-static', JSON.stringify(this.navStatic));
    };
    LayoutComponent.prototype.toggleChatListener = function () {
        jQuery(this.el.nativeElement).find('.chat-notification-sing').remove();
        this.chatOpened = !this.chatOpened;
        setTimeout(function () {
            // demo: add class & badge to indicate incoming messages from contact
            // .js-notification-added ensures notification added only once
            jQuery('.chat-sidebar-user-group:first-of-type ' +
                '.list-group-item:first-child:not(.js-notification-added)')
                .addClass('active js-notification-added')
                .find('.fa-circle')
                .before('<span class="badge badge-danger badge-pill ' +
                'float-right animated bounceInDown">3</span>');
        }, 1000);
    };
    LayoutComponent.prototype.toggleNavigationState = function () {
        this.navStatic = !this.navStatic;
        if (!this.navStatic) {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype.expandNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('app-layout').removeClass('nav-collapsed');
        this.$sidebar.find('.active .active').closest('.collapse').collapse('show')
            .siblings('[data-toggle=collapse]').removeClass('collapsed');
    };
    LayoutComponent.prototype.collapseNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('app-layout').addClass('nav-collapsed');
        this.$sidebar.find('.collapse.in').collapse('hide')
            .siblings('[data-toggle=collapse]').addClass('collapsed');
    };
    /**
     * Check and set navigation collapse according to screen size and navigation state
     */
    LayoutComponent.prototype.checkNavigationState = function () {
        var _this = this;
        if (this.isNavigationStatic()) {
            if (this.configFn.isScreen('sm')
                || this.configFn.isScreen('xs') || this.configFn.isScreen('md')) {
                this.collapseNavigation();
            }
        }
        else {
            if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
                setTimeout(function () {
                    _this.collapseNavigation();
                }, this.config.settings.navCollapseTimeout);
            }
            else {
                this.collapseNavigation();
            }
        }
    };
    LayoutComponent.prototype.isNavigationStatic = function () {
        return this.navStatic === true;
    };
    LayoutComponent.prototype.toggleNavigationCollapseState = function () {
        if (jQuery('app-layout').is('.nav-collapsed')) {
            this.expandNavigation();
        }
        else {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype._sidebarMouseEnter = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.expandNavigation();
        }
    };
    LayoutComponent.prototype._sidebarMouseLeave = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype.enableSwipeCollapsing = function () {
        var swipe = new Hammer(document.getElementById('content-wrap'));
        var d = this;
        swipe.on('swipeleft', function () {
            setTimeout(function () {
                if (d.configFn.isScreen('md')) {
                    return;
                }
                if (!jQuery('app-layout').is('.nav-collapsed')) {
                    d.collapseNavigation();
                }
            });
        });
        swipe.on('swiperight', function () {
            if (d.configFn.isScreen('md')) {
                return;
            }
            if (jQuery('app-layout').is('.chat-sidebar-opened')) {
                return;
            }
            if (jQuery('app-layout').is('.nav-collapsed')) {
                d.expandNavigation();
            }
        });
    };
    LayoutComponent.prototype.collapseNavIfSmallScreen = function () {
        if (this.configFn.isScreen('xs')
            || this.configFn.isScreen('sm') || this.configFn.isScreen('md')) {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('nav-static') === 'true') {
        //   this.navStatic = true;
        // }
        // const $el = jQuery(this.el.nativeElement);
        // this.$sidebar = $el.find('app-sidebar');
        // $el.find('a[href="#"]').on('click', (e) => {
        //   e.preventDefault();
        // });
        // this.$sidebar.on('mouseenter', this._sidebarMouseEnter.bind(this));
        // this.$sidebar.on('mouseleave', this._sidebarMouseLeave.bind(this));
        // this.checkNavigationState();
        // this.$sidebar.on('click', () => {
        //   if (jQuery('app-layout').is('.nav-collapsed')) {
        //     this.expandNavigation();
        //   }
        // });
        // this.router.events.subscribe((event) => {
        //   this._navigationInterceptor(event);
        //   this.collapseNavIfSmallScreen();
        //   window.scrollTo(0, 0);
        // });
        // if ('ontouchstart' in window) {
        //   this.enableSwipeCollapsing();
        // }
        // this.$sidebar.find('.collapse').on('show.bs.collapse', function(e): void {
        //   // execute only if we're actually the .collapse element initiated event
        //   // return for bubbled events
        //   if (e.target !== e.currentTarget) { return; }
        //   const $triggerLink = jQuery(this).prev('[data-toggle=collapse]');
        //   jQuery($triggerLink.data('parent'))
        //     .find('.collapse.show').not(jQuery(this)).collapse('hide');
        // })
        // /* adding additional classes to navigation link li-parent
        //  for several purposes. see navigation styles */
        //   .on('show.bs.collapse', function(e): void {
        //     // execute only if we're actually the .collapse element initiated event
        //     // return for bubbled events
        //     if (e.target !== e.currentTarget) { return; }
        //     jQuery(this).closest('li').addClass('open');
        //   }).on('hide.bs.collapse', function(e): void {
        //   // execute only if we're actually the .collapse element initiated event
        //   // return for bubbled events
        //   if (e.target !== e.currentTarget) { return; }
        //   jQuery(this).closest('li').removeClass('open');
        // });
    };
    LayoutComponent.prototype._navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            // We wanna run this function outside of Angular's zone to
            // bypass change detection
            this.ngZone.runOutsideAngular(function () {
                // For simplicity we are going to turn opacity on / off
                // you could add/remove a class for more advanced styling
                // and enter/leave animation of the spinner
                _this.renderer.setStyle(_this.spinnerElement.nativeElement, 'opacity', '1');
                _this.renderer.setStyle(_this.routerComponent.nativeElement, 'opacity', '0');
            });
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this._hideSpinner();
        }
        // Set loading state to false in both of the below events to
        // hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this._hideSpinner();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this._hideSpinner();
        }
    };
    LayoutComponent.prototype._hideSpinner = function () {
        var _this = this;
        // We wanna run this function outside of Angular's zone to
        // bypass change detection,
        this.ngZone.runOutsideAngular(function () {
            // For simplicity we are going to turn opacity on / off
            // you could add/remove a class for more advanced styling
            // and enter/leave animation of the spinner
            _this.renderer.setStyle(_this.spinnerElement.nativeElement, 'opacity', '0');
            _this.renderer.setStyle(_this.routerComponent.nativeElement, 'opacity', '1');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.nav-static'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "navStatic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.chat-sidebar-opened'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "chatOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.app'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "appClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('spinnerElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayoutComponent.prototype, "spinnerElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('routerComponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayoutComponent.prototype, "routerComponent", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./layout.template.html */ "./src/app/layout/layout.template.html"),
        }),
        __metadata("design:paramtypes", [_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-slimscroll */ "./node_modules/jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_slimscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.routes */ "./src/app/layout/layout.routes.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/layout/pipes/search.pipe.ts");
/* harmony import */ var _notifications_notifications_load_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notifications/notifications-load.directive */ "./src/app/layout/notifications/notifications-load.directive.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/layout/notifications/notifications.component.ts");
/* harmony import */ var _session_expired_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./session-expired.component */ "./src/app/layout/session-expired.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                _layout_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"],
                _notifications_notifications_load_directive__WEBPACK_IMPORTED_MODULE_10__["NotificationsLoadDirective"],
                _session_expired_component__WEBPACK_IMPORTED_MODULE_12__["SessionExpiredComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.routes.ts ***!
  \*****************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");


var routes = [
    {
        path: "",
        component: _layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [
            {
                path: "dashboard",
                loadChildren: "../dashboard/dashboard.module#DashboardModule"
            },
            {
                path: "resource",
                loadChildren: "../resource/resource.module#ResourceModule"
            },
            {
                path: 'tdl',
                loadChildren: '../tdl/components/tdl.module#TDLModule'
            },
            {
                path: 'timesheet',
                loadChildren: '../timesheet/components/timesheet.module#TimeSheetModule'
            },
            {
                path: "admin",
                loadChildren: "../admin/components/admin.module#AdminModule"
            }
        ]
    }
];
var ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/layout/layout.template.html":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.template.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"content\" class=\"container mdtax-container px-0\" role=\"main\">\r\n  <!-- <app-navbar></app-navbar> -->\r\n  <div class=\"router-component\" #routerComponent>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</main>\r\n<div session-expired-modal></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _login_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../login/services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(el, router, config, auth, http) {
        this.router = router;
        this.auth = auth;
        this.http = http;
        this.mgturl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + "/api/v1/mgmt";
        this.deadlinesFileName = "Transfer Deadlines.xlsx";
        this.transferStatusFileName = "Transfer Status.xlsx";
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        jQuery(".navbar .nav-item .nav-link").on("click", function () {
            jQuery(".navbar")
                .find(".active")
                .removeClass("active");
            jQuery(this).addClass("active");
        });
    };
    NavbarComponent.prototype.logout = function () {
        // this.auth.amp_signOut();
        this.router.navigate(["/login"]);
    };
    NavbarComponent.prototype.setNavItemActive = function (elemID) {
        console.log(elemID);
    };
    NavbarComponent.prototype.downloadDeadlines = function () {
        var _this = this;
        this.exportDeadlineData().subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, _this.deadlinesFileName);
        });
    };
    NavbarComponent.prototype.downloadTransferStatus = function () {
        var _this = this;
        this.exportTransferStatusData().subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, _this.transferStatusFileName);
        });
    };
    NavbarComponent.prototype.exportDeadlineData = function () {
        return this.http
            .get(this.mgturl + "/view/transferdeadlines", { responseType: 'blob' })
            .pipe(function (res) { return res; });
    };
    NavbarComponent.prototype.exportTransferStatusData = function () {
        return this.http
            .get(this.mgturl + "/view/transferstatuses", { responseType: 'blob' })
            .pipe(function (res) { return res; });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.template.html */ "./src/app/layout/navbar/navbar.template.html"),
            styles: [__webpack_require__(/*! ./navbar.style.scss */ "./src/app/layout/navbar/navbar.style.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"],
            _login_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.style.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/navbar/navbar.style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Custom translucent site header*/\n/*\r\n\r\n * Typography\r\n * ======================================================================== */\n.site-header {\n  background-color: rgba(0, 0, 0, 0.85);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px); }\n.site-header a {\n  color: #999;\n  -webkit-transition: ease-in-out color .15s;\n  transition: ease-in-out color .15s; }\n.site-header a:hover {\n  color: #fff;\n  text-decoration: none; }\n.active-link {\n  color: #fff;\n  text-decoration: none; }\n.txt-gap {\n  margin-left: 10px; }\n.navbar-nav .nav-item .dropdown-menu {\n  margin-top: -2px;\n  margin-left: -2px; }\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #5d8fc2; }\n.dropdown-item {\n  padding-left: 0.5rem; }\n.white {\n  color: white; }\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: .255em;\n  vertical-align: .255em;\n  content: \"\";\n  border-top: .3em solid;\n  border-right: .3em solid transparent;\n  border-bottom: 0;\n  border-left: .3em solid transparent; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9DOlxcVXNlcnNcXGFzYXBhXFxEb2N1bWVudHNcXENiYXNzXFxjYmFzcmVwb1xcY2Jhcy11aS9zcmNcXGFwcFxcbGF5b3V0XFxuYXZiYXJcXG5hdmJhci5zdHlsZS5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbmF2YmFyL0M6XFxVc2Vyc1xcYXNhcGFcXERvY3VtZW50c1xcQ2Jhc3NcXGNiYXNyZXBvXFxjYmFzLXVpL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQ2FwQzs7OzhFQUc4RTtBRGQ5RTtFQUNDLHNDQUFvQztFQUNwQyxtREFBa0Q7RUFDbEQsMkNBQTBDLEVBQzFDO0FBQ0Q7RUFDQyxZQUFXO0VBQ1gsMkNBQWtDO0VBQWxDLG1DQUFrQyxFQUNsQztBQUNEO0VBQ0MsWUFBVztFQUNYLHNCQUFxQixFQUNyQjtBQUNEO0VBQ0MsWUFBVztFQUNYLHNCQUFxQixFQUNyQjtBQUNEO0VBQ0Msa0JBQWlCLEVBQ2pCO0FBQ0Q7RUFDQyxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2pCO0FBQ0Q7RUFDQyxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLDBCQUF5QixFQUN6QjtBQUNEO0VBQ0MscUJBQW9CLEVBQ3BCO0FBQ0Q7RUFDQyxhQUFXLEVBQ1g7QUFFRDtFQUNDLHNCQUFxQjtFQUNyQixTQUFRO0VBQ1IsVUFBUztFQUNULG9CQUFtQjtFQUNuQix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLHVCQUFzQjtFQUN0QixxQ0FBb0M7RUFDcEMsaUJBQWdCO0VBQ2hCLG9DQUFtQyxFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ3VzdG9tIHRyYW5zbHVjZW50IHNpdGUgaGVhZGVyKi9cclxuQGltcG9ydCBcImhlbHBlcnNcIjtcclxuLnNpdGUtaGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcblx0LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcblx0YmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG59XHJcbi5zaXRlLWhlYWRlciBhIHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHR0cmFuc2l0aW9uOiBlYXNlLWluLW91dCBjb2xvciAuMTVzO1xyXG59XHJcbi5zaXRlLWhlYWRlciBhOmhvdmVyIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmFjdGl2ZS1saW5rIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnR4dC1nYXAge1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XHJcblx0bWFyZ2luLXRvcDogLTJweDtcclxuXHRtYXJnaW4tbGVmdDogLTJweDtcclxufVxyXG4uZHJvcGRvd24taXRlbTpob3ZlciwuZHJvcGRvd24taXRlbTpmb2N1cyB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1ZDhmYzI7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG5cdHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG59XHJcbi53aGl0ZXtcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IC4yNTVlbTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogLjI1NWVtO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0Ym9yZGVyLXRvcDogLjNlbSBzb2xpZDtcclxuXHRib3JkZXItcmlnaHQ6IC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWJvdHRvbTogMDtcclxuXHRib3JkZXItbGVmdDogLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiIsIi8vIFNpbmcgdmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuJGdseXBoaWNvbnMtaGFsZmxpbmdzLWluY2x1ZGUtYm9udXM6IGZhbHNlICFkZWZhdWx0O1xyXG4kZ2x5cGhpY29ucy1oYWxmbGluZ3MtY2xhc3MtcHJlZml4OiBnbHlwaGljb24gIWRlZmF1bHQ7XHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LWJhc2Utc2l6ZTogMTRweCAhZGVmYXVsdDtcclxuXHJcbiRnbHlwaGljb25zLWhhbGZsaW5ncy1mb250LXBhdGg6ICd+L2ZvbnRzL2dseXBoaWNvbnMnICFkZWZhdWx0O1xyXG4kZmEtZm9udC1wYXRoOiAnfi9mb250LWF3ZXNvbWUvZm9udHMnICFkZWZhdWx0O1xyXG5cclxuLypcclxuXHJcbiAqIFR5cG9ncmFwaHlcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiRmb250LXNpemUtaW5pdGlhbDogMTRweDsgLy8gcmVzZXQgZGVmYXVsdCBicm93c2VyIHZhbHVlIGZyb20gMTZweCB0byAxM3B4XHJcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGFyZ2VyOiAxLjFyZW07XHJcbiRmb250LXNpemUtbWluaTogMC45cmVtO1xyXG4kZm9udC1zaXplLWluZGV4OiAwLjdyZW07XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ29wZW4nLFxyXG5zYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcbi8vXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAjZWVlZWVlICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICM4NjhlOTYgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogIzU1NSAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktbGlnaHQ6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGJsdWU6ICM1ZDhmYzIgIWRlZmF1bHQ7XHJcbiRyZWQ6ICNkZDU4MjYgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICNmMGI1MTggIWRlZmF1bHQ7XHJcbiRncmVlbjogIzY0YmQ2MyAhZGVmYXVsdDtcclxuJGN5YW46ICM1ZGM0YmYgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAocHJpbWFyeTogJGJsdWUsXHJcbnNlY29uZGFyeTogJGdyYXktNjAwLFxyXG5zdWNjZXNzOiAkZ3JlZW4sXHJcbnByaW1hcnktbGlnaHQ6ICNkZWU0ZWUsXHJcbnN1Y2Nlc3MtbGlnaHQ6ICNlY2ZhZWMsXHJcbmluZm8tbGlnaHQ6ICNmMmZhZmEsXHJcbndhcm5pbmctbGlnaHQ6ICNmZGY3ZTYsXHJcbmRhbmdlci1saWdodDogI2ZmZjJlZixcclxuaW5mbzogJGN5YW4sXHJcbndhcm5pbmc6ICR5ZWxsb3csXHJcbmRhbmdlcjogJHJlZCxcclxuZGFyazogJGdyYXktODAwLFxyXG5pbnZlcnNlOiAkZ3JheS03MDAsXHJcbmdyYXk6ICRncmF5LTMwMCxcclxuZGVmYXVsdDogI2Y4ZjhmOCk7XHJcblxyXG4kbGluay1jb2xvcjogIzIxOGJjMztcclxuXHJcbiR0ZXh0LWNvbG9yOiAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LXRoaW46IDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLXNtYWxsZXI6IDg1JSAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGFkZGl0aW9uLWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG5cclxuJGJvZHktYmc6IGxpZ2h0Z3JheSAhZGVmYXVsdDsgLy8gI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJGJvZHktYmctbGlnaHQ6IGxpZ2h0ZW4oJGJvZHktYmcsIDMlKTtcclxuXHJcbi8vPT0gQ29tcG9uZW50c1xyXG4vL1xyXG5cclxuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAwLjI1cmVtICFkZWZhdWx0O1xyXG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRtYXJnaW4tYmFzZS1ob3Jpem9udGFsOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1sYXJnZS12ZXJ0aWNhbDogMC43NXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1sYXJnZS1ob3Jpem9udGFsOiAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1hcmdpbi1zbWFsbC12ZXJ0aWNhbDogMC4yNXJlbSAhZGVmYXVsdDtcclxuJG1hcmdpbi1zbWFsbC1ob3Jpem9udGFsOiAwLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IC4zcmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmc6IDE0cHg7XHJcblxyXG4vLz09IFNpZGViYXJcclxuLy9cclxuJHNpZGViYXItcGFkZGluZy1ob3Jpem9udGFsOiAxMXB4O1xyXG4kc2lkZWJhci13aWR0aC1vcGVuOiAyMjBweDtcclxuJHNpZGViYXItd2lkdGgtY2xvc2VkOiA1MHB4O1xyXG4kc2lkZWJhci10cmFuc2l0aW9uLXRpbWU6IDAuM3MgIWRlZmF1bHQ7XHJcbiRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoOiA0cHg7XHJcbiRzaWRlYmFyLXdpZHRoOiAkc2lkZWJhci13aWR0aC1vcGVuKyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJHNpZGViYXItYmctY29sb3I6ICMxNzUyOUY7XHJcbiRzaWRlYmFyLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kc2lkZWJhci1pdGVtLWJvcmRlci1jb2xvcjogIzJkMmQyZDtcclxuJHNpZGViYXItaXRlbS1hY3RpdmUtY29sb3I6ICNmMmJlMzU7XHJcbiRzaWRlYmFyLWl0ZW0taG92ZXItYmctY29sb3I6ICMxMTE7XHJcblxyXG4kY2hhdC1zaWRlYmFyLWJnLWNvbG9yOiAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiRjaGF0LXNpZGViYXItd2lkdGg6IDI1MHB4KyRzaWRlYmFyLXNsaW0tc2Nyb2xsLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItZGl2aWRlcjogJyc7XHJcbiRicmVhZGNydW1iLXBhZGRpbmcteTogMDtcclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50O1xyXG5cclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4kd2lkZ2V0LWJnOiAjZmZmO1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAjNDQ0O1xyXG4kd2lkZ2V0LXNoYWRvdzogMCAwIDEwcHggZGFya2VuKCRib2R5LWJnLCA1JSk7XHJcblxyXG5cclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogMS41O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNHJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDAuOHJlbTtcclxuXHJcbiRpbnB1dC1oZWlnaHQtc21hbGw6IDMwcHg7XHJcblxyXG4vLz09IE5hdmJhclxyXG4vL1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDUwcHggIWRlZmF1bHQ7XHJcbiRuYXZiYXItcGFkZGluZy15OiAwICFkZWZhdWx0O1xyXG4kbmF2YmFyLXBhZGRpbmcteDogMCAhZGVmYXVsdDtcclxuXHJcbiRuYXZiYXItZGFzaGJvYXJkLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWNvbG9yOiAjNzc3ICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1ib3JkZXI6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1iZywgNi41JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXZiYXIgbGlua3NcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvcjogIzY2NiAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBsaW5rc1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWNvbG9yOiAjMzMzICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWhvdmVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtbGluay1hY3RpdmUtY29sb3I6ICM1NTUgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLWxpbmstYWN0aXZlLWJnOiBkYXJrZW4oJG5hdmJhci1kYXNoYm9hcmQtYmcsIDYuNSUpICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWNvbG9yOiAjY2NjICFkZWZhdWx0O1xyXG4kbmF2YmFyLWRhc2hib2FyZC1saW5rLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdmJhciBicmFuZCBsYWJlbFxyXG4kbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvcjogJG5hdmJhci1kYXNoYm9hcmQtbGluay1jb2xvciAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItY29sb3I6IGRhcmtlbigkbmF2YmFyLWRhc2hib2FyZC1icmFuZC1jb2xvciwgMTAlKSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtYnJhbmQtaG92ZXItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2YmFyIHRvZ2dsZVxyXG4kbmF2YmFyLWRhc2hib2FyZC10b2dnbGUtaG92ZXItYmc6ICNkZGQgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFzaGJvYXJkLXRvZ2dsZS1pY29uLWJhci1iZzogIzg4OCAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXNoYm9hcmQtdG9nZ2xlLWJvcmRlci1jb2xvcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBDb250ZW50XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRjb250ZW50LXBhZGRpbmc6IDQwcHg7XHJcbiRjb250ZW50LXBhZGRpbmctdG9wOiAkY29udGVudC1wYWRkaW5nKyRuYXZiYXItaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuLy8gU2NyZWVuc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kc2NyZWVuLWxnLWhlaWdodDogNjcwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vXHJcbiRidG4tZGVmYXVsdC1iZzogJGFkZGl0aW9uLWJnICFkZWZhdWx0O1xyXG4kYnRuLWRlZmF1bHQtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkdGV4dC1jb2xvcjtcclxuXHJcbi8vIFdpZGdldHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kd2lkZ2V0LXBhZGRpbmctdmVydGljYWw6IDE1cHggIWRlZmF1bHQ7XHJcbiR3aWRnZXQtcGFkZGluZy1ob3Jpem9udGFsOiAyMHB4ICFkZWZhdWx0O1xyXG4kd2lkZ2V0LWJnLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4vLz09IE5hdnNcclxuLy9cclxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogJGdyYXktNzAwICFkZWZhdWx0O1xyXG5cclxuLy89PSBGb3Jtc1xyXG4vL1xyXG4kaW5wdXQtYm9yZGVyLWZvY3VzOiAjNGQ5MGZlICFkZWZhdWx0OyAvL3dlYmtpdCBmb2N1cyBjb2xvclxyXG4kbGVnZW5kLWNvbG9yOiBsaWdodGVuKCR0ZXh0LWNvbG9yLCAxNSUpICFkZWZhdWx0O1xyXG5cclxuJHByZS1iZzogI2Y1ZjVmNSAhZGVmYXVsdDtcclxuXHJcbiRjdXJzb3ItZGlzYWJsZWQ6IG5vdC1hbGxvd2VkICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybSBzdGF0ZXMgYW5kIGFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29sb3JzIGZvciBmb3JtIGZlZWRiYWNrIHN0YXRlcyBhbmQsIGJ5IGRlZmF1bHQsIGFsZXJ0cy5cclxuXHJcbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICMzYzc2M2QgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1zdWNjZXNzLWJnOiAjZGZmMGQ4ICFkZWZhdWx0O1xyXG4kc3RhdGUtc3VjY2Vzcy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtc3VjY2Vzcy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWluZm8tdGV4dDogIzMxNzA4ZiAhZGVmYXVsdDtcclxuJHN0YXRlLWluZm8tYmc6ICNkOWVkZjcgIWRlZmF1bHQ7XHJcbiRzdGF0ZS1pbmZvLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1pbmZvLWJnLCA3JSkgIWRlZmF1bHQ7XHJcblxyXG4kc3RhdGUtd2FybmluZy10ZXh0OiAjOGE2ZDNiICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1iZzogI2ZjZjhlMyAhZGVmYXVsdDtcclxuJG1hcmstYmc6ICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xyXG4kc3RhdGUtd2FybmluZy1ib3JkZXI6IGRhcmtlbigkc3RhdGUtd2FybmluZy1iZywgNSUpICFkZWZhdWx0O1xyXG5cclxuJHN0YXRlLWRhbmdlci10ZXh0OiAjYTk0NDQyICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJnOiAjZjJkZWRlICFkZWZhdWx0O1xyXG4kc3RhdGUtZGFuZ2VyLWJvcmRlcjogZGFya2VuKCRzdGF0ZS1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcclxuXHJcbi8vKiAgUG9wb3ZlciAgKi9cclxuJHBvcG92ZXItYmc6ICNlYmVmZjEgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICRwb3BvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuJGJyYW5kLXByaW1hcnk6IGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyOiAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhbmVsLWJnOiAjZmZmICFkZWZhdWx0O1xyXG4kcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnOiAjZjVmNWY1ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMDAwICFkZWZhdWx0O1xyXG4kZ3JheS1kYXJrZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXHJcbiRncmF5LWRhcms6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzM1xyXG4kZ3JheTogbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcclxuJGdyYXktbGlnaHQ6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XHJcbiRncmF5LWxpZ2h0ZXI6IGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXHJcbiRncmF5LXNlbWktbGlnaHRlcjogJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40Mjg1NzE0MjkgIWRlZmF1bHQ7IC8vIDIwLzE0XHJcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXHJcbiRsaW5lLWhlaWdodC1jb21wdXRlZDogZmxvb3IoKCRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlKSkgIWRlZmF1bHQ7IC8vIH4yMHB4XHJcblxyXG4kYnJhbmQtcHJpbWFyeTogZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XHJcbiRicmFuZC1zdWNjZXNzOiAjNWNiODVjICFkZWZhdWx0O1xyXG4kYnJhbmQtaW5mbzogIzViYzBkZSAhZGVmYXVsdDtcclxuJGJyYW5kLXdhcm5pbmc6ICNmMGFkNGUgIWRlZmF1bHQ7XHJcbiRicmFuZC1kYW5nZXI6ICNkOTUzNGYgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ib3JkZXI6ICNkZGQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcbiRzcGFjZXIteTogMSBlbSAhZGVmYXVsdDsiXX0= */"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.template.html":
/*!****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.template.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"collapse navbar-collapse\" id=\"app-nav-bar\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item dropdown \">\r\n        <a class=\"nav-link\" [routerLink]=\"['/app/tdl/search']\" id=\"mnu-nav-home\" role=\"button\">\r\n            <i class=\"fa fa-home txt-gap\"></i>Projects\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item dropdown \">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"mnu-settings\" role=\"button\" data-toggle=\"dropdown\" (aClick)=\"setNavItemActive('mnu-settings')\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-fw fa-clipboard txt-gap\" aria-hidden=\"true\"></i>\r\n          Reports\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"mnu-settings\">\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['resource/analyze']\"><i class=\"glyphicon glyphicon-time txt-gap\"></i>Pipeline Analysis</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['resource/pareport']\"><i class=\"glyphicon glyphicon-time txt-gap\"></i>Period Report</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown \">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"mnu-settings\" role=\"button\" data-toggle=\"dropdown\" (aClick)=\"setNavItemActive('mnu-settings')\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"glyphicon glyphicon-cog txt-gap\" aria-hidden=\"true\"></i>\r\n          Settings\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"mnu-settings\">\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['admin/users']\"><i class=\"fa fa-fw fa-user txt-gap\"></i>Users</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['admin/resources']\"><i class=\"fa fa-fw fa-user txt-gap\"></i>Resources</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['admin/clients']\"><i class=\"fa fa-fw fa-user txt-gap\"></i>Clients</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['admin/accounts']\"><i class=\"fa fa-fw fa-user txt-gap\"></i>Accounts</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['admin/lookup']\"><i class=\"glyphicon glyphicon-adjust  txt-gap\"></i>Lookups</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['admin/laborcat']\"><i class=\"glyphicon glyphicon-adjust  txt-gap\"></i>LCATs</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\" ['admin/lcatgroup']\"><i class=\"glyphicon glyphicon-adjust  txt-gap\"></i>LCAT Groups</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/notifications/notifications-load.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/notifications/notifications-load.directive.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationsLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsLoadDirective", function() { return NotificationsLoadDirective; });
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

var NotificationsLoadDirective = /** @class */ (function () {
    function NotificationsLoadDirective(el) {
        this.resetData = null;
        this.$el = jQuery(el.nativeElement);
    }
    NotificationsLoadDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.$el.on('click change', function (e) {
            var $this = jQuery(this), $target = jQuery($this.data('ajax-target'));
            if ($target.length > 0) {
                e = jQuery.Event('ajax-load:start', { originalEvent: e });
                $this.trigger(e);
                if (!e.isDefaultPrevented()) {
                    $target.load($this.data('ajax-load'), function () {
                        $this.trigger('ajax-load:end');
                    });
                }
            }
            return false;
        });
        jQuery(window.document).on('click', '[data-toggle^=button]', function (e) {
            e.preventDefault();
            return jQuery(e.target).find('input').data('ajax-trigger') !== 'change';
        });
        if (this.$el.data('loading-text')) {
            this.$el.on('ajax-load:start', function () {
                _this.resetData = _this.$el.html();
                _this.$el.empty().append(_this.$el.data('loading-text')).attr('disabled', true);
            });
            this.$el.on('ajax-load:end', function () {
                _this.$el.empty().append(_this.resetData).attr('disabled', false);
            });
        }
        jQuery(document).on('ajax-load:end', '#load-notifications-btn', function () {
            setTimeout(function () {
                jQuery('#notifications-list').find('.bg-attention').removeClass('bg-attention');
            }, 10000);
        });
    };
    NotificationsLoadDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNotificationsLoad]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NotificationsLoadDirective);
    return NotificationsLoadDirective;
}());



/***/ }),

/***/ "./src/app/layout/notifications/notifications.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/notifications/notifications.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(el, config) {
        this.$el = jQuery(el.nativeElement);
        this.config = config;
    }
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.template.html */ "./src/app/layout/notifications/notifications.template.html"),
            styles: [__webpack_require__(/*! ./notifications.style.scss */ "./src/app/layout/notifications/notifications.style.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/layout/notifications/notifications.style.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/notifications/notifications.style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc3R5bGUuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/notifications/notifications.template.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/notifications/notifications.template.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card notifications\">\r\n  <header class=\"card-header\">\r\n    <div class=\"text-center mb-sm\">\r\n      <strong>You have 13 notifications</strong>\r\n    </div>\r\n    <div class=\"btn-group btn-group-sm\" id=\"notifications-toggle\" data-toggle=\"buttons\">\r\n      <label class=\"btn btn-default active\">\r\n        <!-- ajax-load plugin in action. setting data-ajax-load & data-ajax-target is the\r\n             only requirement for async reloading -->\r\n        <input type=\"radio\"\r\n               notification-load\r\n               data-ajax-trigger=\"change\"\r\n               data-ajax-load=\"assets/demo/notifications/notifications.html\"\r\n               data-ajax-target=\"#notifications-list\"> Notifications\r\n      </label>\r\n      <label class=\"btn btn-default\">\r\n        <input type=\"radio\"\r\n               notification-load\r\n               data-ajax-trigger=\"change\"\r\n               data-ajax-load=\"assets/demo/notifications/messages.html\"\r\n               data-ajax-target=\"#notifications-list\"> Messages\r\n      </label>\r\n      <label class=\"btn btn-default\">\r\n        <input type=\"radio\"\r\n               notification-load\r\n               data-ajax-trigger=\"change\"\r\n               data-ajax-load=\"assets/demo/notifications/progress.html\"\r\n               data-ajax-target=\"#notifications-list\"> Progress\r\n      </label>\r\n    </div>\r\n  </header>\r\n  <!-- notification list with .thin-scroll which styles scrollbar for webkit -->\r\n  <div id=\"notifications-list\" class=\"list-group thin-scroll\">\r\n    <div class=\"list-group-item\">\r\n      <span class=\"thumb-sm float-left mr clearfix\">\r\n        <img class=\"rounded-circle\" src=\"assets/img/people/a3.jpg\" alt=\"...\">\r\n      </span>\r\n      <p class=\"m-0 overflow-hidden\">\r\n        1 new user just signed up! Check out\r\n        <a href=\"#\">Monica Smith</a>'s account.\r\n        <time class=\"help-block m-0\">\r\n          2 mins ago\r\n        </time>\r\n      </p>\r\n    </div>\r\n    <a class=\"list-group-item\" href=\"#\">\r\n      <span class=\"thumb-sm float-left mr\">\r\n        <i class=\"glyphicon glyphicon-upload fa-lg\"></i>\r\n      </span>\r\n      <p class=\"text-ellipsis m-0\">\r\n        2.1.0-pre-alpha just released. </p>\r\n      <time class=\"help-block m-0\">\r\n        5h ago\r\n      </time>\r\n    </a>\r\n    <a class=\"list-group-item\" href=\"#\">\r\n      <span class=\"thumb-sm float-left mr\">\r\n        <i class=\"fa fa-bolt fa-lg\"></i>\r\n      </span>\r\n      <p class=\"text-ellipsis m-0\">\r\n        Server load limited. </p>\r\n      <time class=\"help-block m-0\">\r\n        7h ago\r\n      </time>\r\n    </a>\r\n    <div class=\"list-group-item\">\r\n      <span class=\"thumb-sm float-left mr clearfix\">\r\n        <img class=\"rounded-circle\" src=\"assets/img/people/a5.jpg\" alt=\"...\">\r\n      </span>\r\n      <p class=\"m-0 overflow-hidden\">\r\n        User <a href=\"#\">Jeff</a> registered\r\n        &nbsp;&nbsp;\r\n        <button class=\"btn btn-xs btn-success\">Allow</button>\r\n        <button class=\"btn btn-xs btn-danger\">Deny</button>\r\n        <time class=\"help-block m-0\">\r\n          12:18 AM\r\n        </time>\r\n      </p>\r\n    </div>\r\n    <div class=\"list-group-item\">\r\n      <span class=\"thumb-sm float-left mr\">\r\n        <i class=\"fa fa-shield fa-lg\"></i>\r\n      </span>\r\n      <p class=\"m-0 overflow-hidden\">\r\n        Instructions for changing your Envato Account password. Please\r\n        check your account <a href=\"#\">security page</a>.\r\n        <time class=\"help-block m-0\">\r\n          12:18 AM\r\n        </time>\r\n      </p>\r\n    </div>\r\n    <a class=\"list-group-item\" href=\"#\">\r\n      <span class=\"thumb-sm float-left mr\">\r\n        <span class=\"rounded bg-primary rounded-lg\">\r\n          <i class=\"fa fa-facebook text-white\"></i>\r\n        </span>\r\n      </span>\r\n      <p class=\"text-ellipsis m-0\">\r\n        New <strong>76</strong> facebook likes received.</p>\r\n      <time class=\"help-block m-0\">\r\n        15 Apr 2014\r\n      </time>\r\n    </a>\r\n    <a class=\"list-group-item\" href=\"#\">\r\n      <span class=\"thumb-sm float-left mr\">\r\n        <span class=\"circle circle-lg bg-gray-dark\">\r\n          <i class=\"fa fa-circle-o text-white\"></i>\r\n        </span>\r\n      </span>\r\n      <p class=\"text-ellipsis m-0\">\r\n        Dark matter detected.</p>\r\n      <time class=\"help-block m-0\">\r\n        15 Apr 2014\r\n      </time>\r\n    </a>\r\n  </div>\r\n  <footer class=\"card-footer text-sm\">\r\n    <!-- ajax-load button. loads assets/demo/notifications/notifications.php to #notifications-list\r\n         when clicked -->\r\n    <button class=\"btn btn-xs btn-link float-right btn-notifications-reload\"\r\n            id=\"load-notifications-btn\"\r\n            appNotificationsLoad\r\n            data-ajax-load=\"assets/demo/notifications/notifications.php\"\r\n            data-ajax-target=\"#notifications-list\"\r\n            data-loading-text=\"<i class='fa fa-refresh fa-spin mr-xs'></i> Loading...\">\r\n      <i class=\"fa fa-refresh\"></i>\r\n    </button>\r\n    <span class=\"fs-mini\">Synced at: 21 Apr 2014 18:36</span>\r\n  </footer>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (conversation) {
                if (conversation.name) {
                    return conversation.name.search(searchText) !== -1 ||
                        conversation.lastMessage.search(searchText) !== -1;
                }
                else {
                    if (conversation.text) {
                        return conversation.text.search(searchText) !== -1;
                    }
                }
            });
        }
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'SearchPipe',
            pure: false
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/layout/session-expired.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/session-expired.component.ts ***!
  \*****************************************************/
/*! exports provided: SessionExpiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpiredComponent", function() { return SessionExpiredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _login_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/services/auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SessionExpiredComponent = /** @class */ (function () {
    function SessionExpiredComponent(authService, router, logger) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.logger = logger;
        this.period = 10;
        this.keepSignedIn = false;
        this.subscriptions = [];
        this.UOM_MINUTE = "minutes";
        this.UOM_SECOND = "seconds";
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })).subscribe(function (e) {
            if (e.url.includes("login"))
                return;
            if (_this.authService.jwt_loggedIn())
                _this.refreshSession();
            _this.logger.trace("Navigating to ", e.url);
        });
        this.timeBeforeExp = this.authService.jwt_getTokenExpWarnTime();
        console.log(this.timeBeforeExp);
        this.createSessionExpirationTimer();
    }
    SessionExpiredComponent.prototype.ngOnInit = function () { };
    SessionExpiredComponent.prototype.ngOnDestroy = function () {
        for (var i in this.subscriptions) {
            this.subscriptions[i].unsubscribe();
        }
        if (this.routerSubscription)
            this.routerSubscription.unsubscribe();
    };
    SessionExpiredComponent.prototype.showModal = function () {
        var modal = jQuery("#session-expired-modal");
        if (!modal.is(':visible')) {
            modal.modal({
                toggle: 'show',
                backdrop: 'static',
                keyboard: false
            });
        }
    };
    SessionExpiredComponent.prototype.hideModal = function () {
        var modal = jQuery("#session-expired-modal");
        if (modal.is(':visible'))
            modal.modal("hide");
    };
    SessionExpiredComponent.prototype.keepSessionAlive = function () {
        this.keepSignedIn = true;
        this.refreshSession();
    };
    SessionExpiredComponent.prototype.refreshSession = function () {
        var _this = this;
        this.cleanupSessionExpiration();
        var that = this;
        this.authService.jwt_refreshToken().subscribe(function (data) {
            var body = data;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_5__["isNil"])(body.token)) {
                that.authService.jwt_setAccessToken(body.token);
                that.createSessionExpirationTimer();
                that.keepSignedIn = false;
            }
            else {
                that.authService.jwt_removeAccessToken();
                that.router.navigate(['./login']);
            }
        }, function (error) {
            _this.logger.error("session-expired.component", "Error Refreshing Session Token");
            that.authService.jwt_removeAccessToken();
            that.router.navigate(['./login']);
        });
    };
    SessionExpiredComponent.prototype.logout = function () {
        this.cleanupSessionExpiration();
        this.authService.jwt_logout();
    };
    SessionExpiredComponent.prototype.cleanupSessionExpiration = function () {
        this.logger.trace("session-expired.component", "CleanupSessionExpiration called - should hide modal window");
        this.hideModal();
        for (var i in this.subscriptions) {
            this.subscriptions[i].unsubscribe();
        }
    };
    SessionExpiredComponent.prototype.createSessionExpirationTimer = function () {
        var _this = this;
        this.logger.trace("session-expired.component", "createSessionExpirationTimer called");
        var that = this;
        var expirationTime = this.authService.jwt_getTokenExpirationTime();
        this.timeToCntDwnSeq = expirationTime - this.timeBeforeExp;
        this.countDownSeqGenerator = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.timeToCntDwnSeq, this.period);
        this.sessionExpSubscription = this.countDownSeqGenerator.subscribe(function (cnt) {
            _this.logger.trace("session-expired.component", "countDownSeqGenerator subscription handled");
            var timeToExp = (that.timeBeforeExp / 1000) - cnt;
            if ((timeToExp / 60) > 1) {
                var secondsPart = String(timeToExp % 60);
                if (secondsPart.length === 1)
                    secondsPart = "0" + secondsPart;
                that.timeToExpire = Math.floor(timeToExp / 60) + ":" + secondsPart;
                that.timeToExpireUOM = that.UOM_MINUTE;
            }
            else if (timeToExp >= 0) {
                that.timeToExpire = timeToExp.toString();
                that.timeToExpireUOM = that.UOM_SECOND;
            }
            if (timeToExp < 0) {
                _this.logger.trace("session-expired.component", "Time out exceeded: timeexp is < 0; Logging out automatically");
                that.cleanupSessionExpiration();
                that.logout();
            }
            else {
                if (that.keepSignedIn === true) {
                    _this.logger.trace("session-expired.component", "insde counter timer:keepsignedtrue calling cleanupsession");
                    that.cleanupSessionExpiration();
                }
                else {
                    _this.logger.trace("session-expired.component", "Show Session Expiration Window called");
                    that.showModal();
                }
            }
        });
        this.logger.trace("session-expired.component", "subscription counter is", this.subscriptions.length.toString());
        this.subscriptions.push(this.sessionExpSubscription);
    };
    SessionExpiredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[session-expired-modal]',
            template: __webpack_require__(/*! ./session-expired.modal.html */ "./src/app/layout/session-expired.modal.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_login_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"]])
    ], SessionExpiredComponent);
    return SessionExpiredComponent;
}());



/***/ }),

/***/ "./src/app/layout/session-expired.modal.html":
/*!***************************************************!*\
  !*** ./src/app/layout/session-expired.modal.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal modal-child fade\" id=\"session-expired-modal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"session-timeout-title\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h1 class=\"h4 modal-title text-xs-center fw-bold mt\" id=\"session-timeout-title\">Session Timeout</h1>\r\n            </div>\r\n            <!--Modal Body-->\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-1 col-xs-1\"></div>\r\n                    <div class=\"col-lg-2 col-xs-2\">\r\n                        <div style=\"font-size: 80px;color:red\">\r\n                            <i aria-hidden=\"true\" class=\"fa fa-exclamation-triangle\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8 col-xs-8\" style=\"margin-top:20px;\">\r\n                        <h2 class=\"h4 fw-bold\"><span>Your session is about to expire!</span></h2>\r\n                        <h2 class=\"h4 fw-bold\"><span>Do you want to continue working?</span></h2>\r\n                        <h3><span class=\"h5\">You will be logged out in {{timeToExpire}} {{timeToExpireUOM}}</span></h3>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--Modal Footer-->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" id=\"\" class=\"btn btn-primary\" (click)=\"keepSessionAlive()\">Yes, Keep me signed\r\n                    in</button>\r\n                <button type=\"button\" class=\"btn btn-gray\" id=\"\" (click)=\"logout()\">No, Sign me out</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
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





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(storage, config, el, router, location) {
        this.storage = storage;
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
        this.configFn = config;
        this.router = router;
        this.location = location;
    }
    SidebarComponent.prototype.initSidebarScroll = function () {
        var $sidebarContent = this.$el.find('.js-sidebar-content');
        if (this.$el.find('.slimScrollDiv').length !== 0) {
            $sidebarContent.slimscroll({
                destroy: true
            });
        }
        $sidebarContent.slimscroll({
            height: window.innerHeight,
            size: '4px'
        });
    };
    SidebarComponent.prototype.changeActiveNavigationItem = function (location) {
        var $newActiveLink = this.$el.find('a[href="#' + location.path().split('?')[0] + '"]');
        // collapse .collapse only if new and old active links belong to different .collapse
        if (!$newActiveLink.is('.active > .collapse > li > a')) {
            this.$el.find('.active .active').closest('.collapse').collapse('hide');
        }
        this.$el.find('.sidebar-nav .active').removeClass('active');
        $newActiveLink.closest('li').addClass('active')
            .parents('li').addClass('active');
        // uncollapse parent
        $newActiveLink.closest('.collapse').addClass('in').css('height', '')
            .siblings('a[data-toggle=collapse]').removeClass('collapsed');
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.changeActiveNavigationItem(this.location);
    };
    SidebarComponent.prototype.toggleSidebarOverflow = function ($event) {
        jQuery('#sidebar').css('z-index', $event ? '2' : '0');
        jQuery('.js-sidebar-content, .slimScrollDiv').css('overflow', $event ? 'visible' : 'hidden');
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(window).on('sn:resize', this.initSidebarScroll.bind(this));
        this.initSidebarScroll();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.changeActiveNavigationItem(_this.location);
            }
        });
    };
    SidebarComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    SidebarComponent.prototype.gotoSearchResource = function () {
        // Clear all Search Criteria items from the local Storage
        this.storage.clear('SearchCompany');
        this.storage.clear('SearchReport');
        this.storage.clear('ReportStatusFilter');
        this.storage.clear('ReportMonthFilter');
        this.storage.clear('ReportYearFilter');
        // Since the Search Criteria default should be Report - we will save the default in the
        // local Storage
        this.storage.store('SearchType', "APPLICATION");
    };
    SidebarComponent.prototype.gotoCreateRTCForm = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.template.html */ "./src/app/layout/sidebar/sidebar.template.html"),
            providers: [ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.template.html":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.template.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"js-sidebar-content\">\r\n  <header class=\"logo d-none d-md-block\">\r\n    <a href=\"index.html\">{{config.name}}</a>\r\n  </header>\r\n  <div class=\"sidebar-status d-md-none dropdown\" dropdown [autoClose]=\"false\" (isOpenChange)=\"toggleSidebarOverflow($event)\" placement=\"bottom left\">\r\n    <a [routerLink]=\"\" class=\"dropdown-toggle\" dropdownToggle>\r\n              <span class=\"thumb-sm avatar float-right\">\r\n        <img class=\"rounded-circle\" src=\"assets/img/people/a5.jpg\" alt=\"...\">\r\n              </span>\r\n      <!-- .circle is a pretty cool way to add a bit of beauty to raw data.\r\n           should be used with bg-* and text-* classes for colors -->\r\n              <span class=\"circle bg-warning fw-bold text-gray-dark\">\r\n                  13\r\n              </span>\r\n      &nbsp;\r\n      Philip <strong>Smith</strong>\r\n      <b class=\"caret\"></b>\r\n    </a>\r\n    <app-notifications *dropdownMenu class=\"dropdown-menu dropdown-menu-left animated animated-fast fadeInUp\"></app-notifications>\r\n  </div>\r\n  <!-- main notification links are placed inside of .sidebar-nav -->\r\n  <ul class=\"sidebar-nav\">\r\n\t\t<!-- 2nd nav slot : Daily Ops -->\r\n    <li>\r\n\t\t\t\t<a [routerLink]=\"['/app/applicant/search', { q:'new'}]\" id=\"daily_operations\" title=\"Daily Operations\" (click)=\"gotoSearchResource()\">\r\n\t\t\t\t\t<span class=\"icon\">\r\n\t\t\t\t\t\t<i class=\"fa fa-clipboard\"></i>\r\n\t\t\t\t\t</span> View Applications\r\n\t\t\t\t</a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/app/forms/create']\" id=\"create-rtc\" title=\"Create RTC\" (click)=\"gotoCreateRTCForm()\">\r\n        <span class=\"icon\">\r\n          <i class=\"fa fa-clipboard\"></i>\r\n        </span> Create RTC Form\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a  title=\"Admin\" data-target=\"#sidebar-admin\" data-toggle=\"collapse\" data-parent=\"#sidebar\" focusOut>\r\n        <span class=\"icon\">\r\n          <i class=\"glyphicon glyphicon-off\"></i>\r\n          </span>Administration\r\n      </a>\r\n      <ul id=\"sidebar-admin\" class=\"collapse\">\r\n          <li><a [routerLink]=\" ['admin/users'] \">Users</a></li>\r\n          <li><a [routerLink]=\" ['attrib/list'] \">Attributes</a></li>\r\n      </ul>\r\n    </li>\r\n\r\n\t\t<!-- 4th nav slot : Logout -->\r\n\t\t<li>\r\n\t\t\t\t<a  [routerLink]=\"['./../login']\" title=\"Logout\" >\r\n\t\t\t\t\t<span class=\"icon\">\r\n\t\t\t\t\t\t<i class=\"glyphicon glyphicon-user\"></i>\r\n\t\t\t\t\t</span>Logout\r\n\t\t\t\t</a>\r\n    </li>\r\n\r\n    <li *ngIf=\"configFn.isScreen('xs') || configFn.isScreen('sm')\">\r\n      <a (click)=\"logout()\">\r\n        <span class=\"icon\">\r\n          <i class=\"fa fa-sign-out\"></i>\r\n        </span>\r\n        Logout\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map