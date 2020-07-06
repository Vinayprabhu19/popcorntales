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
      }, __jsx(Suspense, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        elevation: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: this.state.url,
        className: "graphImage",
        alt: "Popcorn Tales " + this.props.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlldy5qcyJdLCJuYW1lcyI6WyJSZXZpZXciLCJwcm9wcyIsInN0YXRlIiwicHJvcyIsInJldmlldyIsImNvbnMiLCJ1cmwiLCJ0aXRsZSIsIm1hcCIsInBybyIsImNvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsTTs7Ozs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1BDLFVBQUksRUFBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFELElBRGI7QUFFUEUsVUFBSSxFQUFHSixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsSUFGYjtBQUdQQyxTQUFHLEVBQUcscURBQW1ETCxLQUFLLENBQUNNLEtBQXpELEdBQStEO0FBSDlELEtBQVg7QUFGZTtBQU9oQjs7Ozs2QkFDSTtBQUFBOztBQUNQLGFBQU87QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSDtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURHLEVBR0MsS0FBS0wsS0FBTCxDQUFXQyxJQUFYLENBQWdCSyxHQUFoQixDQUFvQixVQUFBQyxHQUFHO0FBQUEsZUFDbkI7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQW1DLGFBQUcsRUFBRUEsR0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSyxNQUFDLGtFQUFEO0FBQWMsbUJBQVMsRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUwsQ0FESixFQUVJO0FBQUcsbUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNEJBLEdBQTVCLENBRkosQ0FEbUI7QUFBQSxPQUF2QixDQUhELEVBVUg7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FWRyxFQVlDLEtBQUtQLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkcsR0FBaEIsQ0FBb0IsVUFBQUUsR0FBRztBQUFBLGVBQ25CO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFtQyxhQUFHLEVBQUVBLEdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUssTUFBQyxnRUFBRDtBQUFZLG1CQUFTLEVBQUMsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFMLENBREosRUFFSTtBQUFHLG1CQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCQSxHQUE1QixDQUZKLENBRG1CO0FBQUEsT0FBdkIsQ0FaRCxFQW1CSCxNQUFDLDhEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUcsUUFBMUI7QUFBbUMsaUJBQVMsRUFBQyxnQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0osTUFBQywrREFBRDtBQUFPLGlCQUFTLEVBQUUsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsOERBQUQ7QUFBVyxXQUFHLEVBQUUsS0FBS1IsS0FBTCxDQUFXSSxHQUEzQjtBQUFnQyxpQkFBUyxFQUFDLFlBQTFDO0FBQXVELFdBQUcsRUFBRSxtQkFBbUIsS0FBS0wsS0FBTCxDQUFXTSxLQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREEsQ0FESSxDQURKLENBbkJHLENBQVA7QUEyQkQ7Ozs7RUFyQ2tCSSwrQzs7QUF3Q05YLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxbbW92aWVdLmpzLjhjNGQ2OWZmOWQ0ZDE3Nzc4ZThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmVlbmhlcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CZWVuaGVyZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYW5jZWwnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXp5SW1hZ2VcIjtcclxuY2xhc3MgUmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBwcm9zIDogcHJvcHMucmV2aWV3LnByb3MsXHJcbiAgICAgICAgICAgIGNvbnMgOiBwcm9wcy5yZXZpZXcuY29ucyxcclxuICAgICAgICAgICAgdXJsIDogXCJodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL2ltYWdlP29iamVjdD1HcmFwaC9cIitwcm9wcy50aXRsZStcIi5wbmcmd2lkdGg9NTAwJmhlaWdodD01MDBcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jb21wb25lbnRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3Vic2VjdGlvblwiPldoYXQgd29ya2VkIHdlbGw/PC9oND5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcy5tYXAocHJvPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhib3gtY29udGFpbmVyXCIga2V5PXtwcm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PEJlZW5oZXJlSWNvbiBjbGFzc05hbWU9XCJjaGVja0ljb25cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvaW50ZXJUZXh0XCI+e3Byb308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1YnNlY3Rpb25cIj5XaGF0IGRpZG4ndCB3b3JrIHdlbGw/PC9oND5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY29ucy5tYXAoY29uPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhib3gtY29udGFpbmVyXCIga2V5PXtjb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PENhbmNlbEljb24gY2xhc3NOYW1lPVwiY2FuY2VsSWNvblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlclRleHRcIj57Y29ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgY2xhc3NOYW1lPVwiZ3JhcGhDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFN1c3BlbnNlID5cclxuICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsxMH0+XHJcbiAgICAgICAgPExhenlJbWFnZSBzcmM9e3RoaXMuc3RhdGUudXJsfSBjbGFzc05hbWU9XCJncmFwaEltYWdlXCIgYWx0PXtcIlBvcGNvcm4gVGFsZXMgXCIgKyB0aGlzLnByb3BzLnRpdGxlfS8+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9