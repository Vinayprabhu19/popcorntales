webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CardLayout.js":
/*!**********************************!*\
  !*** ./components/CardLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");







var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\CardLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var StyledRating = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_9__["default"]);

var CardLayout = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CardLayout, _Component);

  var _super = _createSuper(CardLayout);

  function CardLayout() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "stars", function (starCount) {
      if (starCount === undefined) return;
      var value = starCount;
      return (// <Rating name="disabled" value={value} precision={0.25}  size="large"/>
        __jsx(StyledRating, {
          name: "customized-color",
          defaultValue: value,
          precision: 0.25,
          icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
            fontSize: "inherit",
            __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }
          }),
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }
        })
      );
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CardLayout, [{
    key: "render",
    value: function render() {
      var stars = this.stars(this.props.review.rating);
      return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "card-container",
        elevation: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 12
        }
      }, __jsx("h4", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }
      }, this.props.review.title), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        elevation: 0,
        className: "card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, __jsx("a", {
        href: this.props.review.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, __jsx("figure", {
        id: "card-figure",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "card-img",
        alt: "Popcorn Tales - " + this.props.review.title,
        src: this.props.review.titleImage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "detail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, __jsx("h3", {
        className: "language",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }, this.props.review.language), __jsx("h4", {
        className: "rating",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, this.props.review.rating, "/5")));
    }
  }]);

  return CardLayout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CardLayout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRMYXlvdXQuanMiXSwibmFtZXMiOlsiU3R5bGVkUmF0aW5nIiwid2l0aFN0eWxlcyIsImljb25GaWxsZWQiLCJjb2xvciIsImljb25Ib3ZlciIsIlJhdGluZyIsIkNhcmRMYXlvdXQiLCJzdGFyQ291bnQiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsInN0YXJzIiwicHJvcHMiLCJyZXZpZXciLCJyYXRpbmciLCJ0aXRsZSIsInRpdGxlSW1hZ2UiLCJsYW5ndWFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBR0MsNEVBQVUsQ0FBQztBQUM5QkMsWUFBVSxFQUFFO0FBQ1ZDLFNBQUssRUFBRTtBQURHLEdBRGtCO0FBSTlCQyxXQUFTLEVBQUU7QUFDVEQsU0FBSyxFQUFFO0FBREU7QUFKbUIsQ0FBRCxDQUFWLENBT2xCRSwrREFQa0IsQ0FBckI7O0lBUU1DLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BRUksVUFBQ0MsU0FBRCxFQUFlO0FBQ3JCLFVBQUdBLFNBQVMsS0FBS0MsU0FBakIsRUFDRTtBQUNGLFVBQU1DLEtBQUssR0FBR0YsU0FBZDtBQUNBLGFBQ0U7QUFFSSxjQUFDLFlBQUQ7QUFBYyxjQUFJLEVBQUMsa0JBQW5CO0FBQXNDLHNCQUFZLEVBQUVFLEtBQXBEO0FBQTJELG1CQUFTLEVBQUUsSUFBdEU7QUFDWSxjQUFJLEVBQUUsTUFBQyxtRUFBRDtBQUFjLG9CQUFRLEVBQUMsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSE47QUFNRCxLOzs7Ozs7OzZCQUNRO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsQ0FBVyxLQUFLQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLE1BQTdCLENBQWQ7QUFDQSxhQUFPLE1BQUMsK0RBQUQ7QUFBTyxpQkFBUyxFQUFDLGdCQUFqQjtBQUFrQyxpQkFBUyxFQUFFLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTDtBQUFJLGlCQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCLEtBQUtGLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkUsS0FBekMsQ0FESyxFQUVMLE1BQUMsK0RBQUQ7QUFBTyxpQkFBUyxFQUFFLENBQWxCO0FBQXFCLGlCQUFTLEVBQUMsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsWUFBSSxFQUFFLEtBQUtILEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkUsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQVEsVUFBRSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsOERBQUQ7QUFBVyxpQkFBUyxFQUFDLFVBQXJCO0FBQWdDLFdBQUcsRUFBRSxxQkFBcUIsS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCRSxLQUE1RTtBQUFvRixXQUFHLEVBQUUsS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCRyxVQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FESixDQURKLENBRkssRUFTTDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxpQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQixLQUFLSixLQUFMLENBQVdDLE1BQVgsQ0FBa0JJLFFBQTVDLENBREosRUFFSTtBQUFJLGlCQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXdCLEtBQUtMLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsTUFBMUMsT0FGSixDQVRLLENBQVA7QUFjRDs7OztFQTdCc0JJLCtDOztBQWdDVlgseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU0MmM2OTczM2Y5Njc1OWE2MDAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcclxuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXp5SW1hZ2VcIjtcclxuY29uc3QgU3R5bGVkUmF0aW5nID0gd2l0aFN0eWxlcyh7XHJcbiAgaWNvbkZpbGxlZDoge1xyXG4gICAgY29sb3I6ICcjZmY2ZDc1J1xyXG4gIH0sXHJcbiAgaWNvbkhvdmVyOiB7XHJcbiAgICBjb2xvcjogJyNmZjNkNDcnLFxyXG4gIH0sXHJcbn0pKFJhdGluZyk7XHJcbmNsYXNzIENhcmRMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIFxyXG4gIHN0YXJzID0gKHN0YXJDb3VudCkgPT4ge1xyXG4gICAgaWYoc3RhckNvdW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHZhbHVlID0gc3RhckNvdW50O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPFJhdGluZyBuYW1lPVwiZGlzYWJsZWRcIiB2YWx1ZT17dmFsdWV9IHByZWNpc2lvbj17MC4yNX0gIHNpemU9XCJsYXJnZVwiLz5cclxuICBcclxuICAgICAgICAgIDxTdHlsZWRSYXRpbmcgbmFtZT1cImN1c3RvbWl6ZWQtY29sb3JcIiBkZWZhdWx0VmFsdWU9e3ZhbHVlfSBwcmVjaXNpb249ezAuMjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8RmF2b3JpdGVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+fS8+XHJcbiAgICApO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdGFycyA9IHRoaXMuc3RhcnModGhpcy5wcm9wcy5yZXZpZXcucmF0aW5nKTtcclxuICAgIHJldHVybiA8UGFwZXIgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIiBlbGV2YXRpb249ezh9PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5yZXZpZXcudGl0bGV9PC9oND5cclxuICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPVwiY2FyZFwiICA+XHJcbiAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLnJldmlldy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgPGZpZ3VyZSBpZD1cImNhcmQtZmlndXJlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGF6eUltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgYWx0PXtcIlBvcGNvcm4gVGFsZXMgLSBcIiArIHRoaXMucHJvcHMucmV2aWV3LnRpdGxlIH0gc3JjPXt0aGlzLnByb3BzLnJldmlldy50aXRsZUltYWdlfS8+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj57dGhpcy5wcm9wcy5yZXZpZXcubGFuZ3VhZ2V9PC9oMz5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJyYXRpbmdcIj57dGhpcy5wcm9wcy5yZXZpZXcucmF0aW5nfS81PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9QYXBlcj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=