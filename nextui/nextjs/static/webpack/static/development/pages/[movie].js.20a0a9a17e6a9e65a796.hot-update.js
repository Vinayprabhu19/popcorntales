webpackHotUpdate("static\\development\\pages\\[movie].js",{

/***/ "./components/Review.js":
/*!******************************!*\
  !*** ./components/Review.js ***!
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
/* harmony import */ var _material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Beenhere */ "./node_modules/@material-ui/icons/Beenhere.js");
/* harmony import */ var _material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");





var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Review.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Review = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Review, _Component);

  var _super = _createSuper(Review);

  function Review(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Review);

    _this = _super.call(this, props);
    _this.state = {
      pros: props.review.pros,
      cons: props.review.cons,
      url: "https://api.popcorntales.com/image?object=Graph/" + props.title + ".png&width=500&height=500"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Review, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "review-component",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 12
        }
      }, __jsx("h4", {
        className: "subsection",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }
      }, "What worked well?"), this.state.pros.map(function (pro) {
        return __jsx("div", {
          className: "flexbox-container",
          key: pro,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }
        }, __jsx(_material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: "checkIcon",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 26
          }
        })), __jsx("p", {
          className: "pointerText",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }
        }, pro));
      }), __jsx("h4", {
        className: "subsection",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, "What didn't work well?"), this.state.cons.map(function (con) {
        return __jsx("div", {
          className: "flexbox-container",
          key: con,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }
        }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7___default.a, {
          className: "cancelIcon",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 26
          }
        })), __jsx("p", {
          className: "pointerText",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }
        }, con));
      }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
        container: true,
        justify: "center",
        className: "graphContainer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        elevation: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: this.state.url,
        className: "graphImage",
        alt: "Popcorn Tales " + this.props.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }))));
    }
  }]);

  return Review;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Review);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlldy5qcyJdLCJuYW1lcyI6WyJSZXZpZXciLCJwcm9wcyIsInN0YXRlIiwicHJvcyIsInJldmlldyIsImNvbnMiLCJ1cmwiLCJ0aXRsZSIsIm1hcCIsInBybyIsImNvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsTTs7Ozs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1BDLFVBQUksRUFBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFELElBRGI7QUFFUEUsVUFBSSxFQUFHSixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsSUFGYjtBQUdQQyxTQUFHLEVBQUcscURBQW1ETCxLQUFLLENBQUNNLEtBQXpELEdBQStEO0FBSDlELEtBQVg7QUFGZTtBQU9oQjs7Ozs2QkFDSTtBQUFBOztBQUNQLGFBQU87QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSDtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURHLEVBR0MsS0FBS0wsS0FBTCxDQUFXQyxJQUFYLENBQWdCSyxHQUFoQixDQUFvQixVQUFBQyxHQUFHO0FBQUEsZUFDbkI7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQW1DLGFBQUcsRUFBRUEsR0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSyxNQUFDLGtFQUFEO0FBQWMsbUJBQVMsRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUwsQ0FESixFQUVJO0FBQUcsbUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNEJBLEdBQTVCLENBRkosQ0FEbUI7QUFBQSxPQUF2QixDQUhELEVBVUg7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FWRyxFQVlDLEtBQUtQLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkcsR0FBaEIsQ0FBb0IsVUFBQUUsR0FBRztBQUFBLGVBQ25CO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFtQyxhQUFHLEVBQUVBLEdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUssTUFBQyxnRUFBRDtBQUFZLG1CQUFTLEVBQUMsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFMLENBREosRUFFSTtBQUFHLG1CQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCQSxHQUE1QixDQUZKLENBRG1CO0FBQUEsT0FBdkIsQ0FaRCxFQW1CSCxNQUFDLDhEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUcsUUFBMUI7QUFBbUMsaUJBQVMsRUFBQyxnQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsK0RBQUQ7QUFBTyxpQkFBUyxFQUFFLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLDhEQUFEO0FBQVcsV0FBRyxFQUFFLEtBQUtSLEtBQUwsQ0FBV0ksR0FBM0I7QUFBZ0MsaUJBQVMsRUFBQyxZQUExQztBQUF1RCxXQUFHLEVBQUUsbUJBQW1CLEtBQUtMLEtBQUwsQ0FBV00sS0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLENBREEsQ0FuQkcsQ0FBUDtBQXlCRDs7OztFQW5Da0JJLCtDOztBQXNDTlgscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFttb3ZpZV0uanMuMjBhMGE5YTE3ZTZhOWU2NWE3OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCZWVuaGVyZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JlZW5oZXJlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NhbmNlbCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgTGF6eUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0xhenlJbWFnZVwiO1xyXG5jbGFzcyBSZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHByb3MgOiBwcm9wcy5yZXZpZXcucHJvcyxcclxuICAgICAgICAgICAgY29ucyA6IHByb3BzLnJldmlldy5jb25zLFxyXG4gICAgICAgICAgICB1cmwgOiBcImh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vaW1hZ2U/b2JqZWN0PUdyYXBoL1wiK3Byb3BzLnRpdGxlK1wiLnBuZyZ3aWR0aD01MDAmaGVpZ2h0PTUwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNvbXBvbmVudFwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJzZWN0aW9uXCI+V2hhdCB3b3JrZWQgd2VsbD88L2g0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9zLm1hcChwcm89PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGJveC1jb250YWluZXJcIiBrZXk9e3Byb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48QmVlbmhlcmVJY29uIGNsYXNzTmFtZT1cImNoZWNrSWNvblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlclRleHRcIj57cHJvfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3Vic2VjdGlvblwiPldoYXQgZGlkbid0IHdvcmsgd2VsbD88L2g0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb25zLm1hcChjb249PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGJveC1jb250YWluZXJcIiBrZXk9e2Nvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48Q2FuY2VsSWNvbiBjbGFzc05hbWU9XCJjYW5jZWxJY29uXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyVGV4dFwiPntjb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIiBjbGFzc05hbWU9XCJncmFwaENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxQYXBlciBlbGV2YXRpb249ezEwfT5cclxuICAgICAgICA8TGF6eUltYWdlIHNyYz17dGhpcy5zdGF0ZS51cmx9IGNsYXNzTmFtZT1cImdyYXBoSW1hZ2VcIiBhbHQ9e1wiUG9wY29ybiBUYWxlcyBcIiArIHRoaXMucHJvcHMudGl0bGV9Lz5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9