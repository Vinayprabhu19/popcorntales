webpackHotUpdate("static\\development\\pages\\[movie].js",{

/***/ "./components/LazyImage.js":
/*!*********************************!*\
  !*** ./components/LazyImage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LazyImage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\LazyImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var LazyImage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LazyImage, _React$Component);

  var _super = _createSuper(LazyImage);

  function LazyImage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LazyImage);

    _this = _super.call(this, props);
    _this.state = {
      loaded: false,
      error: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LazyImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var img = new Image();

      img.onload = function () {
        _this2.setState({
          loaded: true
        });
      };

      img.onerror = function () {
        _this2.setState({
          error: true
        });
      };

      if (this.props.src == undefined) image.src = "";else img.src = this.props.src;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return __jsx("img", {
          className: this.props.className,
          style: this.props.style,
          src: this.props.unloadedSrc,
          alt: this.props.alt,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 16
          }
        });
      } else if (!this.state.loaded) {
        return __jsx("img", {
          className: this.props.className,
          style: this.props.style,
          src: this.props.unloadedSrc,
          alt: this.props.alt,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 16
          }
        });
      }

      return __jsx("img", {
        className: this.props.className,
        style: this.props.style,
        src: this.props.src,
        alt: this.props.alt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 14
        }
      });
    }
  }]);

  return LazyImage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhenlJbWFnZS5qcyJdLCJuYW1lcyI6WyJMYXp5SW1hZ2UiLCJwcm9wcyIsInN0YXRlIiwibG9hZGVkIiwiZXJyb3IiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsInNldFN0YXRlIiwib25lcnJvciIsInNyYyIsInVuZGVmaW5lZCIsImltYWdlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ1bmxvYWRlZFNyYyIsImFsdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ3FCQSxTOzs7OztBQUNqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsS0FERztBQUVYQyxXQUFLLEVBQUU7QUFGSSxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixVQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaOztBQUNBRCxTQUFHLENBQUNFLE1BQUosR0FBYSxZQUFNO0FBQ2pCLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1pMLGdCQUFNLEVBQUU7QUFESSxTQUFkO0FBR0QsT0FKRDs7QUFLQUUsU0FBRyxDQUFDSSxPQUFKLEdBQWMsWUFBTTtBQUNsQixjQUFJLENBQUNELFFBQUwsQ0FBYztBQUNaSixlQUFLLEVBQUU7QUFESyxTQUFkO0FBR0QsT0FKRDs7QUFLQSxVQUFHLEtBQUtILEtBQUwsQ0FBV1MsR0FBWCxJQUFpQkMsU0FBcEIsRUFDRUMsS0FBSyxDQUFDRixHQUFOLEdBQVksRUFBWixDQURGLEtBR0VMLEdBQUcsQ0FBQ0ssR0FBSixHQUFVLEtBQUtULEtBQUwsQ0FBV1MsR0FBckI7QUFDSDs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLUixLQUFMLENBQVdFLEtBQWYsRUFBc0I7QUFDcEIsZUFBTztBQUNMLG1CQUFTLEVBQUUsS0FBS0gsS0FBTCxDQUFXWSxTQURqQjtBQUVMLGVBQUssRUFBRSxLQUFLWixLQUFMLENBQVdhLEtBRmI7QUFHTCxhQUFHLEVBQUUsS0FBS2IsS0FBTCxDQUFXYyxXQUhYO0FBSUwsYUFBRyxFQUFFLEtBQUtkLEtBQUwsQ0FBV2UsR0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLRCxPQU5ELE1BTU8sSUFBSSxDQUFDLEtBQUtkLEtBQUwsQ0FBV0MsTUFBaEIsRUFBd0I7QUFDN0IsZUFBTztBQUNMLG1CQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXWSxTQURqQjtBQUVMLGVBQUssRUFBRSxLQUFLWixLQUFMLENBQVdhLEtBRmI7QUFHTCxhQUFHLEVBQUUsS0FBS2IsS0FBTCxDQUFXYyxXQUhYO0FBSUwsYUFBRyxFQUFFLEtBQUtkLEtBQUwsQ0FBV2UsR0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLRDs7QUFDRCxhQUFPO0FBQ0wsaUJBQVMsRUFBRSxLQUFLZixLQUFMLENBQVdZLFNBRGpCO0FBRUwsYUFBSyxFQUFFLEtBQUtaLEtBQUwsQ0FBV2EsS0FGYjtBQUdMLFdBQUcsRUFBRSxLQUFLYixLQUFMLENBQVdTLEdBSFg7QUFJTCxXQUFHLEVBQUUsS0FBS1QsS0FBTCxDQUFXZSxHQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUtEOzs7O0VBOUNrQ0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcW21vdmllXS5qcy4xMWY2YzkyNmE4YjdmZWNlZTY5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZXJyb3I6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgaWYodGhpcy5wcm9wcy5zcmMgPT11bmRlZmluZWQpXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCJcIjtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGltZy5zcmMgPSB0aGlzLnByb3BzLnNyYztcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxyXG4gICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnVubG9hZGVkU3JjfVxyXG4gICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdH0gLz5cclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5sb2FkZWQpIHtcclxuICAgICAgICByZXR1cm4gPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxyXG4gICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnVubG9hZGVkU3JjfVxyXG4gICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdH0gLz5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cclxuICAgICAgICBhbHQ9e3RoaXMucHJvcHMuYWx0fSAvPlxyXG4gICAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9