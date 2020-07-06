webpackHotUpdate("static\\development\\pages\\[movie].js",{

/***/ "./components/Ticket.js":
/*!******************************!*\
  !*** ./components/Ticket.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");





var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Ticket.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Cast = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Cast, _Component);

  var _super = _createSuper(Cast);

  function Cast(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cast);

    _this = _super.call(this, props);
    props.ticketDetails.watchDate = new Date(props.ticketDetails.watchDate).toDateString();
    if (!_this.props.ticketDetails.ticketImage.startsWith("https://api.popcorntales.com/image?object=")) _this.props.ticketDetails.ticketImage = "https://api.popcorntales.com/image?object=" + _this.props.ticketDetails.ticketImage;
    _this.state = {
      ticketDetails: _this.props.ticketDetails
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cast, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "ticket-component",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 12
        }
      }, __jsx("h5", {
        className: "Ticket",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, "Date Watched : ", this.state.ticketDetails.watchDate), __jsx("h5", {
        className: "Ticket",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 8
        }
      }, "Place Watched : ", this.state.ticketDetails.placeWatched), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        container: true,
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 8
        }
      }, __jsx("div", {
        id: "ticket-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 8
        }
      }, __jsx("img", {
        src: this.state.ticketDetails.ticketImage,
        className: "ticketImage",
        alt: "Ticket image of the movie",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 8
        }
      }))));
    }
  }]);

  return Cast;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cast);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpY2tldC5qcyJdLCJuYW1lcyI6WyJDYXN0IiwicHJvcHMiLCJ0aWNrZXREZXRhaWxzIiwid2F0Y2hEYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInRpY2tldEltYWdlIiwic3RhcnRzV2l0aCIsInN0YXRlIiwicGxhY2VXYXRjaGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0FBLFNBQUssQ0FBQ0MsYUFBTixDQUFvQkMsU0FBcEIsR0FBOEIsSUFBSUMsSUFBSixDQUFTSCxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDLFNBQTdCLEVBQXdDRSxZQUF4QyxFQUE5QjtBQUNBLFFBQUcsQ0FBQyxNQUFLSixLQUFMLENBQVdDLGFBQVgsQ0FBeUJJLFdBQXpCLENBQXFDQyxVQUFyQyxDQUFnRCw0Q0FBaEQsQ0FBSixFQUNFLE1BQUtOLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkksV0FBekIsR0FBdUMsK0NBQTZDLE1BQUtMLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkksV0FBN0c7QUFDRixVQUFLRSxLQUFMLEdBQVc7QUFDUE4sbUJBQWEsRUFBQyxNQUFLRCxLQUFMLENBQVdDO0FBRGxCLEtBQVg7QUFMZTtBQVFoQjs7Ozs2QkFDSTtBQUVQLGFBQU87QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTDtBQUFJLGlCQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUF1QyxLQUFLTSxLQUFMLENBQVdOLGFBQVgsQ0FBeUJDLFNBQWhFLENBREssRUFFSjtBQUFJLGlCQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF3QyxLQUFLSyxLQUFMLENBQVdOLGFBQVgsQ0FBeUJPLFlBQWpFLENBRkksRUFHSixNQUFDLDhEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUcsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssVUFBRSxFQUFDLGtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLFdBQUcsRUFBRSxLQUFLRCxLQUFMLENBQVdOLGFBQVgsQ0FBeUJJLFdBQW5DO0FBQWdELGlCQUFTLEVBQUMsYUFBMUQ7QUFBd0UsV0FBRyxFQUFFLDJCQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREEsQ0FEQSxDQUhJLENBQVA7QUFTRDs7OztFQXJCZ0JJLCtDOztBQXdCSlYsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFttb3ZpZV0uanMuYTA5Zjk3MmJlMDgzODNkNmE2MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgTGF6eUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0xhenlJbWFnZVwiO1xyXG5jbGFzcyBDYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHByb3BzLnRpY2tldERldGFpbHMud2F0Y2hEYXRlPW5ldyBEYXRlKHByb3BzLnRpY2tldERldGFpbHMud2F0Y2hEYXRlKS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy50aWNrZXREZXRhaWxzLnRpY2tldEltYWdlLnN0YXJ0c1dpdGgoXCJodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL2ltYWdlP29iamVjdD1cIikpXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRpY2tldERldGFpbHMudGlja2V0SW1hZ2UgPSBcImh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vaW1hZ2U/b2JqZWN0PVwiK3RoaXMucHJvcHMudGlja2V0RGV0YWlscy50aWNrZXRJbWFnZTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgdGlja2V0RGV0YWlsczp0aGlzLnByb3BzLnRpY2tldERldGFpbHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldC1jb21wb25lbnRcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cIlRpY2tldFwiPkRhdGUgV2F0Y2hlZCA6IHt0aGlzLnN0YXRlLnRpY2tldERldGFpbHMud2F0Y2hEYXRlfTwvaDU+XHJcbiAgICAgICA8aDUgY2xhc3NOYW1lPVwiVGlja2V0XCI+UGxhY2UgV2F0Y2hlZCA6IHt0aGlzLnN0YXRlLnRpY2tldERldGFpbHMucGxhY2VXYXRjaGVkfTwvaDU+XHJcbiAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCI+XHJcbiAgICAgICA8ZGl2IGlkPVwidGlja2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUudGlja2V0RGV0YWlscy50aWNrZXRJbWFnZX0gY2xhc3NOYW1lPVwidGlja2V0SW1hZ2VcIiBhbHQ9e1wiVGlja2V0IGltYWdlIG9mIHRoZSBtb3ZpZVwifT48L2ltZz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9