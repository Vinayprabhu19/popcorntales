module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CardLayout.js":
/*!**********************************!*\
  !*** ./components/CardLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\CardLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const StyledRating = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_2___default.a);

class CardLayout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "stars", starCount => {
      if (starCount === undefined) return;
      const value = starCount;
      return (// <Rating name="disabled" value={value} precision={0.25}  size="large"/>
        __jsx(StyledRating, {
          name: "customized-color",
          defaultValue: value,
          precision: 0.25,
          icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default.a, {
            fontSize: "inherit",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }
        })
      );
    });
  }

  render() {
    const stars = this.stars(this.props.review.rating);
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, this.props.review.title), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "card-img",
      alt: "Popcorn Tales - " + this.props.review.title,
      unloadedSrc: this.props.review.titleImage,
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

}

/* harmony default export */ __webpack_exports__["default"] = (CardLayout);

/***/ }),

/***/ "./components/Filter.js":
/*!******************************!*\
  !*** ./components/Filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\Filter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class Sort extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    var year = props.data.year;
    var language = props.data.language;
    var rating = props.data.rating;
    var filter = {
      "year": year,
      "language": language,
      "rating": rating
    };
    this.state = {
      filter: filter,
      filterData: props.filterData
    };
    this.onCancel = this.onCancel.bind(this);
    this.onOK = this.onOK.bind(this);
  }

  onCancel() {
    debugger;
    this.props.close(null);
  }

  onOK() {
    this.props.close(this.state);
  }

  render() {
    return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
      maxWidth: 'sm',
      fullWidth: true,
      onClose: data => this.props.close(data),
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      "aria-labelledby": "simple-dialog-title",
      open: this.props.open,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "simple-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }, "Filter"), __jsx("div", {
      className: "filtercontainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }
    }, __jsx("h4", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }
    }, "Language"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "item",
      variant: "outlined",
      value: this.state.filter.language,
      onChange: e => {
        var filter = this.state.filter;
        filter.language = e.target.value;
        this.setState({
          filter: filter
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }
    }, this.state.filterData.languages.map(language => {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
        value: language,
        key: language,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 20
        }
      }, language);
    })), __jsx("h4", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }
    }, "Year"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "item",
      variant: "outlined",
      value: this.state.filter.year,
      onChange: e => {
        var filter = this.state.filter;
        filter.year = e.target.value;
        this.setState({
          filter: filter
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }
    }, this.state.filterData.years.map(year => {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
        value: year,
        key: year,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 20
        }
      }, year);
    })), __jsx("h4", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }
    }, "Rating"), __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "item",
      value: this.state.filter.rating,
      "aria-labelledby": "discrete-slider-small-steps",
      step: 0.25,
      min: 0.00,
      max: 5.00,
      onChange: (e, v) => {
        var filter = this.state.filter;
        filter.rating = v;
        this.setState({
          filter: filter
        });
      },
      valueLabelDisplay: "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      justify: "center",
      id: "starPhoto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "text",
      className: "buttonGroup",
      color: "primary",
      "aria-label": "text primary button group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onClick: this.onOK,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, "OK"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onClick: this.onCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, "Cancel")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ }),

/***/ "./components/LazyImage.js":
/*!*********************************!*\
  !*** ./components/LazyImage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LazyImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\LazyImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class LazyImage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false
    };
  }

  componentDidMount() {
    const img = new Image();

    img.onload = () => {
      this.setState({
        loaded: true
      });
    };

    img.onerror = () => {
      this.setState({
        error: true
      });
    };

    img.src = this.props.src;
  }

  render() {
    if (this.state.error) {
      return __jsx("img", {
        className: this.props.className,
        style: this.props.style,
        src: this.props.unloadedSrc,
        alt: this.props.alt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
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
          lineNumber: 34,
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
        lineNumber: 40,
        columnNumber: 14
      }
    });
  }

}

/***/ }),

/***/ "./components/SocialMenu.js":
/*!**********************************!*\
  !*** ./components/SocialMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/AssistantPhoto */ "@material-ui/icons/AssistantPhoto");
/* harmony import */ var _material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "@material-ui/icons/Instagram");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\SocialMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function SocialMenu() {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    "aria-controls": "social-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary",
    fontSize: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "social-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/popcorntales",
    className: "social-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/popcorntaless",
    className: "social-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })))));
}

/***/ }),

/***/ "./components/Sort.js":
/*!****************************!*\
  !*** ./components/Sort.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\Sort.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












class Sort extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = props.data;
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onOK = this.onOK.bind(this);
  }

  handleFieldChange(evt) {
    this.setState({
      field: evt.target.value
    });
  }

  handleOrderChange(evt) {
    this.setState({
      sortType: evt.target.value
    });
  }

  onCancel() {
    this.props.close(this.props.data);
  }

  onOK() {
    this.props.close(this.state);
  }

  render() {
    return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default.a, {
      onClose: data => this.props.close(data),
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      "aria-labelledby": "simple-dialog-title",
      open: this.props.open,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "simple-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }
    }, "Sort"), __jsx("div", {
      className: "filtercontainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      component: "legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }, "Field"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      "aria-label": "movieAttribute",
      name: "movieAttribute",
      value: this.state.field,
      onChange: this.handleFieldChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "timeStamp",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 54
        }
      }),
      label: "Date Added",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "title",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 50
        }
      }),
      label: "Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "year",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 49
        }
      }),
      label: "Year",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "rating",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 51
        }
      }),
      label: "Rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "language",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 53
        }
      }),
      label: "Language",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      component: "legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }
    }, "Order"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      "aria-label": "order",
      name: "order",
      value: this.state.sortType,
      onChange: this.handleOrderChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "Ascending",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 54
        }
      }),
      label: "Ascending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "Descending",
      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 55
        }
      }),
      label: "Descending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      id: "starPhoto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_9___default.a, {
      variant: "text",
      className: "buttonGroup",
      color: "primary",
      "aria-label": "text primary button group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      onClick: this.onOK,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, "OK"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      onClick: this.onCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, "Cancel")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Sort */ "@material-ui/icons/Sort");
/* harmony import */ var _material_ui_icons_Sort__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Sort__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_CardLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CardLayout */ "./components/CardLayout.js");
/* harmony import */ var _components_Sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Sort */ "./components/Sort.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "@material-ui/lab/Pagination");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Filter */ "./components/Filter.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "@material-ui/icons/BarChart");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SocialMenu */ "./components/SocialMenu.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























async function getServerSideProps(context) {
  const res = await fetch('https://api.popcorntales.com/movie');
  const movies = await res.json();
  var banners = [];

  for (var i = 1; i <= 4; i++) {
    banners.push({
      id: i,
      name: "Movie" + i,
      url: "https://api.popcorntales.com/image?object=Banners/Movie" + i + ".jpg"
    });
  } // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time


  return {
    props: {
      movies,
      banners
    }
  };
}

class Home extends react__WEBPACK_IMPORTED_MODULE_10__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSelect", (selectedIndex, e) => {
      this.carouselIndex = selectedIndex;
    });

    var result = props.movies;
    var filter = this.getFilteredData(result);
    var banners = props.banners;
    result.sort(function (a, b) {
      return new Date(b.timeStamp) - new Date(a.timeStamp);
    });
    const rvs = result.map(item => {
      return item;
    });
    var currentPages = [];
    var len = rvs.length > 8 ? 8 : rvs.length;

    for (var i = 0; i < len; i++) {
      currentPages.push(rvs[i]);
    } // Don't call this.setState() here!


    this.state = {
      reviews: [],
      currentList: [],
      banners: banners,
      loading: true,
      sortOpen: false,
      filterOpen: false,
      searchText: "",
      activePage: 1,
      totalPages: rvs.length,
      allReviews: rvs,
      reviews: rvs,
      currentList: currentPages,
      loading: false,
      filter: {
        "language": "All",
        "year": "All",
        "rating": [0.0, 5.0]
      },
      sorter: {
        "field": "timeStamp",
        "sortType": "Descending"
      },
      filterData: filter
    };
    this.carouselIndex = 0;
    this.onPageChanged = this.onPageChanged.bind(this);
    this.openSort = this.openSort.bind(this);
    this.handleSortClose = this.handleSortClose.bind(this);
    this.openFilter = this.openFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onPageChanged(e) {
    var targetPage = parseInt(e.target.innerText);
    var currentPages = [];
    var start = 8 * (targetPage - 1);
    var len = this.state.reviews.length > 8 * targetPage ? 8 * targetPage : this.state.reviews.length;

    for (var i = start; i < len; i++) {
      currentPages.push(this.state.reviews[i]);
    }

    this.setState({
      currentList: currentPages,
      activePage: targetPage
    });
  }

  onSearch(e) {
    var text = e.target.value;
    var reviews = [];

    for (var i = 0; i < this.state.allReviews.length; i++) {
      reviews.push(this.state.allReviews[i]);
    }

    reviews = reviews.filter(function (r) {
      return r.title.toLocaleLowerCase().includes(text.toLowerCase());
    });
    var currentPages = [];
    var len = reviews.length > 8 ? 8 : reviews.length;

    for (var i = 0; i < len; i++) {
      currentPages.push(reviews[i]);
    }

    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews: reviews,
      currentList: currentPages,
      loading: false,
      filter: {
        "language": "All",
        "year": "All",
        "rating": [0.0, 5.0]
      },
      searchText: text
    });
  }

  onCardClick(image) {
    this.props.history.push('/review/' + image.title);
  }

  openSort() {
    this.setState({
      sortOpen: true
    });
  }

  openFilter() {
    this.setState({
      filterOpen: true
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 5
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }
    }, "Popcorn Tales"), __jsx("meta", {
      name: "description",
      content: "Popcorn Tales is an Indian movie review website reviewing movies from Kannada,Hindi,English,Tamil,Telugu,Malayalam and other languages. Find latest movie review here.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }
    }), __jsx("link", {
      async: true,
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    }), __jsx("link", {
      async: true,
      rel: "canonical",
      href: "https://www.Popcorntales.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://unpkg.com/prop-types/prop-types.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }), __jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
              var firebaseConfig = {
                apiKey: "AIzaSyAXuIINLnRmwacxjys3I6ziuSTq8lJ0iw8",
                authDomain: "popcorntales-40767.firebaseapp.com",
                databaseURL: "https://popcorntales-40767.firebaseio.com",
                projectId: "popcorntales-40767",
                storageBucket: "popcorntales-40767.appspot.com",
                messagingSenderId: "512137794051",
                appId: "1:512137794051:web:be612f2d6aa7c368d4b436",
                measurementId: "G-LK5DBSBMTR"
              };
              firebase.initializeApp(firebaseConfig);
              firebase.analytics();
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-170786754-1');
                  `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }), __jsx("script", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 11
      }
    }), __jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-170786754-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_1___default.a, {
      open: this.state.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: this.state.loading ? 'hidden' : 'App',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "appBar",
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Analytics",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "/analytics",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 38
      }
    }, __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20___default.a, {
      fontSize: "large",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 59
      }
    }))), __jsx("h1", {
      id: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }
    }, "Popcorn Tales"), __jsx("section", {
      className: "rightToolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 11
      }
    }, __jsx(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }
    })))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "banner-container",
      elevation: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 7
      }
    }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__["Carousel"], {
      showThumbs: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }
    }, this.state.banners.map(banner => {
      return __jsx("div", {
        key: banner.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 24
        }
      }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "movie-img",
        unloadedSrc: banner.url,
        key: banner.id,
        alt: "Movie Banner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }
      }));
    }))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
      elevation: 12,
      id: "filterGrid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
      container: true,
      justify: "center",
      className: "filter-sort",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "text",
      id: "searchField",
      value: this.state.searchText,
      onChange: this.onSearch,
      placeholder: "Movie Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Sort",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_Sort__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "large",
      style: {
        fill: "purple"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 64
      }
    }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Filter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13___default.a, {
      fontSize: "large",
      style: {
        fill: "purple"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 66
      }
    }), " "))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
      mdUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Sort",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_Sort__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "default",
      style: {
        fill: "purple"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 64
      }
    }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Filter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_13___default.a, {
      fontSize: "default",
      style: {
        fill: "purple"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 65
      }
    }), " "))), __jsx(_components_Sort__WEBPACK_IMPORTED_MODULE_15__["default"], {
      open: this.state.sortOpen,
      close: data => this.handleSortClose(data),
      data: this.state.sorter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }
    }), __jsx(_components_Filter__WEBPACK_IMPORTED_MODULE_17__["default"], {
      open: this.state.filterOpen,
      close: data => this.handleFilterClose(data),
      data: this.state.filter,
      filterData: this.state.filterData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }
    }))), __jsx("div", {
      className: "App-Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "cardGridList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }
    }, this.state.currentList.map(image => __jsx(_components_CardLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: image.title,
      review: image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 27
      }
    })))), __jsx("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 7
      }
    }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_16___default.a, {
      count: this.state.totalPages % 8,
      page: this.state.activePage,
      onChange: this.onPageChanged,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
      container: true,
      justify: "center",
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 11
      }
    }, __jsx("h4", {
      id: "feedbackText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 15
      }
    }, "Need your feedback to improve  "), __jsx("a", {
      href: "mailto:popcorntales19@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 15
      }
    }, " ", __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 58
      }
    })))))));
  }

  getFilteredData(result) {
    var languages = ["All"];
    var years = ["All"];

    for (var i = 0; i < result.length; i++) {
      if (languages.includes(result[i].language)) continue;
      languages.push(result[i].language);
    }

    for (var i = 0; i < result.length; i++) {
      if (years.includes(result[i].year)) continue;
      years.push(result[i].year);
    }

    years.sort();
    return {
      languages: languages,
      years: years,
      rating: [0.0, 5.0]
    };
  }

  handleFilterClose(data) {
    if (data == null) {
      this.setState({
        filterOpen: false
      });
      return;
    }

    var reviews = [];

    for (var i = 0; i < this.state.allReviews.length; i++) {
      reviews.push(this.state.allReviews[i]);
    }

    if (data.filter.language != "All") {
      reviews = reviews.filter(function (r) {
        return r.language == data.filter.language;
      });
    }

    if (data.filter.year != "All") {
      reviews = reviews.filter(function (r) {
        return r.year == data.filter.year;
      });
    }

    reviews = reviews.filter(function (r) {
      return r.rating >= data.filter.rating[0] && r.rating <= data.filter.rating[1];
    });
    var currentPages = [];
    var len = reviews.length > 8 ? 8 : reviews.length;

    for (var i = 0; i < len; i++) {
      currentPages.push(reviews[i]);
    }

    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews: reviews,
      currentList: currentPages,
      loading: false,
      sortOpen: false,
      filterOpen: false,
      filter: data.filter,
      searchText: ""
    });
  }

  handleSortClose(data) {
    // result.sort(function(a,b){return new Date(b.timeStamp)- new Date(a.timeStamp)});
    // sorter:{
    //   "field":"timeStamp",
    //   "sortType":"Ascending"
    // }
    if (data.field === this.state.sorter.field && data.sortType === this.state.sorter.sortType) {
      this.setState({
        sortOpen: false
      });
      return;
    }

    var reviews;

    if (this.field === "timeStamp") {
      if (data.sortType === "Descending") reviews = this.state.reviews.sort(function (a, b) {
        return new Date(b.timeStamp) - new Date(a.timeStamp);
      });else reviews = this.state.reviews.sort(function (a, b) {
        return new Date(a.timeStamp) - new Date(b.timeStamp);
      });
    } else {
      if (data.sortType === "Descending") reviews = this.state.reviews.sort(function (a, b) {
        if (a[data.field] > b[data.field]) {
          return -1;
        }

        if (a[data.field] < b[data.field]) {
          return 1;
        }

        return 0;
      });else reviews = this.state.reviews.sort(function (a, b) {
        if (a[data.field] < b[data.field]) {
          return -1;
        }

        if (a[data.field] > b[data.field]) {
          return 1;
        }

        return 0;
      });
    }

    var currentPages = [];
    var len = reviews.length > 8 ? 8 : reviews.length;

    for (var i = 0; i < len; i++) {
      currentPages.push(reviews[i]);
    }

    this.setState({
      activePage: 1,
      totalPages: reviews.length,
      reviews: reviews,
      currentList: currentPages,
      loading: false,
      sortOpen: false,
      sorter: data
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vinay\Desktop\projects\ui\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonGroup":
/*!************************************************!*\
  !*** external "@material-ui/core/ButtonGroup" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonGroup");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/GridList":
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AssistantPhoto":
/*!****************************************************!*\
  !*** external "@material-ui/icons/AssistantPhoto" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AssistantPhoto");

/***/ }),

/***/ "@material-ui/icons/BarChart":
/*!**********************************************!*\
  !*** external "@material-ui/icons/BarChart" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BarChart");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FilterList":
/*!************************************************!*\
  !*** external "@material-ui/icons/FilterList" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Sort":
/*!******************************************!*\
  !*** external "@material-ui/icons/Sort" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Sort");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "@material-ui/lab/Pagination":
/*!**********************************************!*\
  !*** external "@material-ui/lab/Pagination" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Pagination");

/***/ }),

/***/ "@material-ui/lab/Rating":
/*!******************************************!*\
  !*** external "@material-ui/lab/Rating" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF6eUltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmFyQ2hhcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmlsdGVyTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Tb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiIl0sIm5hbWVzIjpbIlN0eWxlZFJhdGluZyIsIndpdGhTdHlsZXMiLCJpY29uRmlsbGVkIiwiY29sb3IiLCJpY29uSG92ZXIiLCJSYXRpbmciLCJDYXJkTGF5b3V0IiwiQ29tcG9uZW50Iiwic3RhckNvdW50IiwidW5kZWZpbmVkIiwidmFsdWUiLCJyZW5kZXIiLCJzdGFycyIsInByb3BzIiwicmV2aWV3IiwicmF0aW5nIiwidGl0bGUiLCJ0aXRsZUltYWdlIiwibGFuZ3VhZ2UiLCJTb3J0IiwiY29uc3RydWN0b3IiLCJ5ZWFyIiwiZGF0YSIsImZpbHRlciIsInN0YXRlIiwiZmlsdGVyRGF0YSIsIm9uQ2FuY2VsIiwiYmluZCIsIm9uT0siLCJjbG9zZSIsIm9wZW4iLCJlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJsYW5ndWFnZXMiLCJtYXAiLCJ5ZWFycyIsInYiLCJMYXp5SW1hZ2UiLCJSZWFjdCIsImxvYWRlZCIsImVycm9yIiwiY29tcG9uZW50RGlkTW91bnQiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJjbGFzc05hbWUiLCJzdHlsZSIsInVubG9hZGVkU3JjIiwiYWx0IiwiU29jaWFsTWVudSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJCb29sZWFuIiwiaGFuZGxlRmllbGRDaGFuZ2UiLCJoYW5kbGVPcmRlckNoYW5nZSIsImV2dCIsImZpZWxkIiwic29ydFR5cGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJtb3ZpZXMiLCJqc29uIiwiYmFubmVycyIsImkiLCJwdXNoIiwiaWQiLCJuYW1lIiwidXJsIiwiSG9tZSIsInNlbGVjdGVkSW5kZXgiLCJjYXJvdXNlbEluZGV4IiwicmVzdWx0IiwiZ2V0RmlsdGVyZWREYXRhIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInRpbWVTdGFtcCIsInJ2cyIsIml0ZW0iLCJjdXJyZW50UGFnZXMiLCJsZW4iLCJsZW5ndGgiLCJyZXZpZXdzIiwiY3VycmVudExpc3QiLCJsb2FkaW5nIiwic29ydE9wZW4iLCJmaWx0ZXJPcGVuIiwic2VhcmNoVGV4dCIsImFjdGl2ZVBhZ2UiLCJ0b3RhbFBhZ2VzIiwiYWxsUmV2aWV3cyIsInNvcnRlciIsIm9uUGFnZUNoYW5nZWQiLCJvcGVuU29ydCIsImhhbmRsZVNvcnRDbG9zZSIsIm9wZW5GaWx0ZXIiLCJvblNlYXJjaCIsInRhcmdldFBhZ2UiLCJwYXJzZUludCIsImlubmVyVGV4dCIsInN0YXJ0IiwidGV4dCIsInIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJvbkNhcmRDbGljayIsImltYWdlIiwiaGlzdG9yeSIsIl9faHRtbCIsImJhbm5lciIsImZpbGwiLCJoYW5kbGVGaWx0ZXJDbG9zZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QXFVZHdELG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalhBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmcnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgTGF6eUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0xhenlJbWFnZVwiO1xyXG5jb25zdCBTdHlsZWRSYXRpbmcgPSB3aXRoU3R5bGVzKHtcclxuICBpY29uRmlsbGVkOiB7XHJcbiAgICBjb2xvcjogJyNmZjZkNzUnXHJcbiAgfSxcclxuICBpY29uSG92ZXI6IHtcclxuICAgIGNvbG9yOiAnI2ZmM2Q0NycsXHJcbiAgfSxcclxufSkoUmF0aW5nKTtcclxuY2xhc3MgQ2FyZExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgc3RhcnMgPSAoc3RhckNvdW50KSA9PiB7XHJcbiAgICBpZihzdGFyQ291bnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdGFyQ291bnQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyA8UmF0aW5nIG5hbWU9XCJkaXNhYmxlZFwiIHZhbHVlPXt2YWx1ZX0gcHJlY2lzaW9uPXswLjI1fSAgc2l6ZT1cImxhcmdlXCIvPlxyXG4gIFxyXG4gICAgICAgICAgPFN0eWxlZFJhdGluZyBuYW1lPVwiY3VzdG9taXplZC1jb2xvclwiIGRlZmF1bHRWYWx1ZT17dmFsdWV9IHByZWNpc2lvbj17MC4yNX1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxGYXZvcml0ZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz59Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHN0YXJzID0gdGhpcy5zdGFycyh0aGlzLnByb3BzLnJldmlldy5yYXRpbmcpO1xyXG4gICAgcmV0dXJuIDxQYXBlciBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiIGVsZXZhdGlvbj17OH0+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLnJldmlldy50aXRsZX08L2g0PlxyXG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXswfSBjbGFzc05hbWU9XCJjYXJkXCIgID5cclxuICAgICAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMucmV2aWV3LnRpdGxlfT5cclxuICAgICAgICAgICAgICA8ZmlndXJlIGlkPVwiY2FyZC1maWd1cmVcIj5cclxuICAgICAgICAgICAgICAgIDxMYXp5SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIiBhbHQ9e1wiUG9wY29ybiBUYWxlcyAtIFwiICsgdGhpcy5wcm9wcy5yZXZpZXcudGl0bGUgfSB1bmxvYWRlZFNyYz17dGhpcy5wcm9wcy5yZXZpZXcudGl0bGVJbWFnZX0vPlxyXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3RoaXMucHJvcHMucmV2aWV3Lmxhbmd1YWdlfTwvaDM+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmF0aW5nXCI+e3RoaXMucHJvcHMucmV2aWV3LnJhdGluZ30vNTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvUGFwZXI+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5jbGFzcyBTb3J0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gcHJvcHMuZGF0YS55ZWFyO1xyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHByb3BzLmRhdGEubGFuZ3VhZ2U7XHJcbiAgICAgICAgdmFyIHJhdGluZyA9cHJvcHMuZGF0YS5yYXRpbmc7XHJcbiAgICAgICAgdmFyIGZpbHRlcj17XHJcbiAgICAgICAgICBcInllYXJcIjp5ZWFyLFxyXG4gICAgICAgICAgXCJsYW5ndWFnZVwiOmxhbmd1YWdlLFxyXG4gICAgICAgICAgXCJyYXRpbmdcIjpyYXRpbmdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZmlsdGVyOmZpbHRlcixmaWx0ZXJEYXRhOnByb3BzLmZpbHRlckRhdGF9O1xyXG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbk9LID0gdGhpcy5vbk9LLmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgb25DYW5jZWwoKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIG9uT0soKXtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICA8RGlhbG9nIG1heFdpZHRoPXsnc20nfSBmdWxsV2lkdGg9e3RydWV9IG9uQ2xvc2U9eyhkYXRhKT0+dGhpcy5wcm9wcy5jbG9zZShkYXRhKX0gZGlzYWJsZUJhY2tkcm9wQ2xpY2s9e3RydWV9IGRpc2FibGVFc2NhcGVLZXlEb3duPXt0cnVlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3Blbj17dGhpcy5wcm9wcy5vcGVufT5cclxuICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj5GaWx0ZXI8L0RpYWxvZ1RpdGxlPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJjb250YWluZXJcIj5cclxuICAgIDxoNCBjbGFzc05hbWU9XCJpdGVtXCI+TGFuZ3VhZ2U8L2g0PlxyXG4gICAgPFNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyLmxhbmd1YWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2U9PntcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc3RhdGUuZmlsdGVyO1xyXG4gICAgICAgICAgICBmaWx0ZXIubGFuZ3VhZ2UgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyIDogZmlsdGVyfSl9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJEYXRhLmxhbmd1YWdlcy5tYXAobGFuZ3VhZ2U9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSB2YWx1ZT17bGFuZ3VhZ2V9IGtleT17bGFuZ3VhZ2V9PntsYW5ndWFnZX08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPGg0IGNsYXNzTmFtZT1cIml0ZW1cIj5ZZWFyPC9oND5cclxuICAgIDxTZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlci55ZWFyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2U9PntcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc3RhdGUuZmlsdGVyO1xyXG4gICAgICAgICAgICBmaWx0ZXIueWVhciA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXIgOiBmaWx0ZXJ9KX19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlckRhdGEueWVhcnMubWFwKHllYXI9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSB2YWx1ZT17eWVhcn0ga2V5PXt5ZWFyfT57eWVhcn08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgPC9TZWxlY3Q+XHJcbiAgICA8aDQgY2xhc3NOYW1lPVwiaXRlbVwiPlJhdGluZzwvaDQ+XHJcbiAgICA8U2xpZGVyXHJcbiAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXIucmF0aW5nfVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkaXNjcmV0ZS1zbGlkZXItc21hbGwtc3RlcHNcIlxyXG4gICAgICBzdGVwPXswLjI1fVxyXG4gICAgICBtaW49ezAuMDB9XHJcbiAgICAgIG1heD17NS4wMH1cclxuICAgICAgb25DaGFuZ2U9eyhlLHYpPT57XHJcbiAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc3RhdGUuZmlsdGVyO1xyXG4gICAgICAgIGZpbHRlci5yYXRpbmcgPSB2O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlciA6IGZpbHRlcn0pXHJcbiAgICAgIH19XHJcbiAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PVwiYXV0b1wiXHJcbiAgICAvPlxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiIGlkPVwic3RhclBob3RvXCI+XHJcbiAgICA8QnV0dG9uR3JvdXAgdmFyaWFudD1cInRleHRcIiBjbGFzc05hbWU9XCJidXR0b25Hcm91cFwiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJ0ZXh0IHByaW1hcnkgYnV0dG9uIGdyb3VwXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uT0t9Pk9LPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgIDwvR3JpZD5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4gIDwvRGlhbG9nPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZXJyb3I6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgaW1nLnNyYyA9IHRoaXMucHJvcHMuc3JjO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICBzcmM9e3RoaXMucHJvcHMudW5sb2FkZWRTcmN9XHJcbiAgICAgICAgICBhbHQ9e3RoaXMucHJvcHMuYWx0fSAvPlxyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmxvYWRlZCkge1xyXG4gICAgICAgIHJldHVybiA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICBzcmM9e3RoaXMucHJvcHMudW5sb2FkZWRTcmN9XHJcbiAgICAgICAgICBhbHQ9e3RoaXMucHJvcHMuYWx0fSAvPlxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxyXG4gICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHR9IC8+XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBBc3Npc3RhbnRQaG90b0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lzdGFudFBob3RvJztcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbE1lbnUoKSB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCdXR0b24gYXJpYS1jb250cm9scz1cInNvY2lhbC1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgPEFzc2lzdGFudFBob3RvSWNvbiBjb2xvcj17XCJwcmltYXJ5XCJ9IGZvbnRTaXplPXtcImRlZmF1bHRcIn0vPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cInNvY2lhbC1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9Qb3Bjb3JuVGFsZXNzXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cclxuICAgICAgICAgICAgICA8VHdpdHRlckljb24gZm9udFNpemU9e1wiZGVmYXVsdFwifS8+XHJcbiAgICAgICAgICA8L2E+PC9NZW51SXRlbT4gKi99XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BvcGNvcm50YWxlc1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9Lz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcG9wY29ybnRhbGVzc1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPEluc3RhZ3JhbUljb24gZm9udFNpemU9e1wiZGVmYXVsdFwifS8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcblxyXG5jbGFzcyBTb3J0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wcy5kYXRhO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRmllbGRDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpZWxkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPcmRlckNoYW5nZSA9IHRoaXMuaGFuZGxlT3JkZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25PSyA9IHRoaXMub25PSy5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbmRsZUZpZWxkQ2hhbmdlKGV2dCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZpZWxkOmV2dC50YXJnZXQudmFsdWVcclxuICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlT3JkZXJDaGFuZ2UoZXZ0KXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHNvcnRUeXBlOmV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBvbkNhbmNlbCgpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UodGhpcy5wcm9wcy5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBvbk9LKCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAgPERpYWxvZyBvbkNsb3NlPXsoZGF0YSk9PnRoaXMucHJvcHMuY2xvc2UoZGF0YSl9IGRpc2FibGVCYWNrZHJvcENsaWNrPXt0cnVlfSBkaXNhYmxlRXNjYXBlS2V5RG93bj17dHJ1ZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW49e3RoaXMucHJvcHMub3Blbn0+XHJcbiAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCI+U29ydDwvRGlhbG9nVGl0bGU+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmNvbnRhaW5lclwiPlxyXG4gICAgPEZvcm1Db250cm9sID5cclxuICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RmllbGQ8L0Zvcm1MYWJlbD5cclxuICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cIm1vdmllQXR0cmlidXRlXCIgbmFtZT1cIm1vdmllQXR0cmlidXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZmllbGR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpZWxkQ2hhbmdlfT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cInRpbWVTdGFtcFwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJEYXRlIEFkZGVkXCIgLz5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cInRpdGxlXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIlRpdGxlXCIgLz5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cInllYXJcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiWWVhclwiIC8+XHJcbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJyYXRpbmdcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiUmF0aW5nXCIgLz5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImxhbmd1YWdlXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkxhbmd1YWdlXCIgLz5cclxuICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICAgIDxGb3JtQ29udHJvbD5cclxuICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+T3JkZXI8L0Zvcm1MYWJlbD5cclxuICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cIm9yZGVyXCIgbmFtZT1cIm9yZGVyXCIgdmFsdWU9e3RoaXMuc3RhdGUuc29ydFR5cGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9yZGVyQ2hhbmdlfT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIkFzY2VuZGluZ1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJBc2NlbmRpbmdcIiAvPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiRGVzY2VuZGluZ1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJEZXNjZW5kaW5nXCIgLz5cclxuICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIiBpZD1cInN0YXJQaG90b1wiPlxyXG4gICAgPEJ1dHRvbkdyb3VwIHZhcmlhbnQ9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYnV0dG9uR3JvdXBcIiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwidGV4dCBwcmltYXJ5IGJ1dHRvbiBncm91cFwiPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbk9LfT5PSzwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbH0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICA8L0dyaWQ+XHJcbiAgICBcclxuICA8L2Rpdj5cclxuICA8L0RpYWxvZz5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XHJcbiIsImltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCBHcmlkTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xuaW1wb3J0IFNvcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Tb3J0JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXp5SW1hZ2VcIjtcbmltcG9ydCBGaWx0ZXJMaXN0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmlsdGVyTGlzdCc7XG5pbXBvcnQgQ2FyZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkTGF5b3V0XCI7XG5pbXBvcnQgU29ydCBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb3J0XCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb24nO1xuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBCYXJDaGFydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhckNoYXJ0JztcbmltcG9ydCBTb2NpYWxNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvU29jaWFsTWVudSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL21vdmllJyk7XG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHZhciBiYW5uZXJzID1bXTtcbiAgZm9yKHZhciBpPTE7aTw9NDtpKyspe1xuICAgIGJhbm5lcnMucHVzaCh7XG4gICAgICBpZDppLFxuICAgICAgbmFtZTpcIk1vdmllXCIraSxcbiAgICAgIHVybDpcImh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vaW1hZ2U/b2JqZWN0PUJhbm5lcnMvTW92aWVcIitpK1wiLmpwZ1wiXG4gICAgfSlcbiAgfVxuICAvLyBCeSByZXR1cm5pbmcgeyBwcm9wczogcG9zdHMgfSwgdGhlIEJsb2cgY29tcG9uZW50XG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1vdmllcyxcbiAgICAgIGJhbm5lcnNcbiAgICB9LFxuICB9XG4gXG59XG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdmFyIHJlc3VsdCA9IHByb3BzLm1vdmllcztcbiAgICB2YXIgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgICB2YXIgYmFubmVycyA9IHByb3BzLmJhbm5lcnM7XG4gICAgcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IERhdGUoYi50aW1lU3RhbXApLSBuZXcgRGF0ZShhLnRpbWVTdGFtcCl9KTtcbiAgICAgIGNvbnN0IHJ2cyA9IHJlc3VsdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgdmFyIGN1cnJlbnRQYWdlcyA9IFtdO1xuICAgIHZhciBsZW4gPSAocnZzLmxlbmd0aCA+IDgpPzg6cnZzLmxlbmd0aDtcbiAgICBmb3IodmFyIGk9MDtpPCBsZW4gO2krKyl7XG4gICAgICBjdXJyZW50UGFnZXMucHVzaChydnNbaV0pO1xuICAgIH1cbiAgICAvLyBEb24ndCBjYWxsIHRoaXMuc2V0U3RhdGUoKSBoZXJlIVxuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgcmV2aWV3czogW10sXG4gICAgICBjdXJyZW50TGlzdDpbXSxcbiAgICAgIGJhbm5lcnM6YmFubmVycyxcbiAgICAgIGxvYWRpbmc6dHJ1ZSxcbiAgICAgIHNvcnRPcGVuOmZhbHNlLFxuICAgICAgZmlsdGVyT3BlbjpmYWxzZSxcbiAgICAgIHNlYXJjaFRleHQ6XCJcIixcbiAgICAgIGFjdGl2ZVBhZ2U6IDEsXG4gICAgICB0b3RhbFBhZ2VzOiBydnMubGVuZ3RoLFxuICAgICAgYWxsUmV2aWV3czpydnMsXG4gICAgICByZXZpZXdzOiBydnMsXG4gICAgICBjdXJyZW50TGlzdCA6IGN1cnJlbnRQYWdlcyxcbiAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgICBmaWx0ZXI6e1xuICAgICAgICBcImxhbmd1YWdlXCI6XCJBbGxcIixcbiAgICAgICAgXCJ5ZWFyXCI6XCJBbGxcIixcbiAgICAgICAgXCJyYXRpbmdcIjpbMC4wLDUuMF1cbiAgICAgIH0sXG4gICAgICBzb3J0ZXI6e1xuICAgICAgICBcImZpZWxkXCI6XCJ0aW1lU3RhbXBcIixcbiAgICAgICAgXCJzb3J0VHlwZVwiOlwiRGVzY2VuZGluZ1wiXG4gICAgICB9LFxuICAgICAgZmlsdGVyRGF0YTpmaWx0ZXJcbiAgICAgfTtcblxuICAgICB0aGlzLmNhcm91c2VsSW5kZXg9MDtcbiAgICAgdGhpcy5vblBhZ2VDaGFuZ2VkID0gdGhpcy5vblBhZ2VDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgIHRoaXMub3BlblNvcnQgPSB0aGlzLm9wZW5Tb3J0LmJpbmQodGhpcyk7XG4gICAgIHRoaXMuaGFuZGxlU29ydENsb3NlID0gdGhpcy5oYW5kbGVTb3J0Q2xvc2UuYmluZCh0aGlzKTtcbiAgICAgdGhpcy5vcGVuRmlsdGVyPXRoaXMub3BlbkZpbHRlci5iaW5kKHRoaXMpO1xuICAgICB0aGlzLm9uU2VhcmNoID0gdGhpcy5vblNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIFxuICB9XG5cbiAgXG5cbiAgb25QYWdlQ2hhbmdlZChlKXtcbiAgICB2YXIgdGFyZ2V0UGFnZT1wYXJzZUludChlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgdmFyIGN1cnJlbnRQYWdlcyA9IFtdO1xuICAgICAgdmFyIHN0YXJ0ID0gOCoodGFyZ2V0UGFnZS0xKTtcbiAgICAgIHZhciBsZW4gPSAodGhpcy5zdGF0ZS5yZXZpZXdzLmxlbmd0aCA+IDgqKHRhcmdldFBhZ2UpKT84Kih0YXJnZXRQYWdlKTp0aGlzLnN0YXRlLnJldmlld3MubGVuZ3RoO1xuICAgICAgZm9yKHZhciBpPXN0YXJ0O2k8IGxlbiA7aSsrKXtcbiAgICAgICAgY3VycmVudFBhZ2VzLnB1c2godGhpcy5zdGF0ZS5yZXZpZXdzW2ldKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRMaXN0IDogY3VycmVudFBhZ2VzLFxuICAgICAgICBhY3RpdmVQYWdlOnRhcmdldFBhZ2VcbiAgICAgIH0pO1xuICB9XG5cbiAgb25TZWFyY2goZSl7XG4gICAgXG4gICAgdmFyIHRleHQgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIHZhciByZXZpZXdzID0gW107XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLnN0YXRlLmFsbFJldmlld3MubGVuZ3RoO2krKyl7XG4gICAgICByZXZpZXdzLnB1c2godGhpcy5zdGF0ZS5hbGxSZXZpZXdzW2ldKTt9XG5cblxuICAgIHJldmlld3MgPSByZXZpZXdzLmZpbHRlcihmdW5jdGlvbihyKXtyZXR1cm4gci50aXRsZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSk7fSk7XG4gICAgXG4gICAgdmFyIGN1cnJlbnRQYWdlcyA9IFtdO1xuICAgIHZhciBsZW4gPSAocmV2aWV3cy5sZW5ndGggPiA4KT84OnJldmlld3MubGVuZ3RoO1xuICAgIGZvcih2YXIgaT0wO2k8IGxlbiA7aSsrKXtcbiAgICAgIGN1cnJlbnRQYWdlcy5wdXNoKHJldmlld3NbaV0pO1xuICAgIH1cbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgYWN0aXZlUGFnZTogMSxcbiAgICB0b3RhbFBhZ2VzOiByZXZpZXdzLmxlbmd0aCxcbiAgICByZXZpZXdzOiByZXZpZXdzLFxuICAgIGN1cnJlbnRMaXN0IDogY3VycmVudFBhZ2VzLFxuICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgZmlsdGVyOntcbiAgICAgIFwibGFuZ3VhZ2VcIjpcIkFsbFwiLFxuICAgICAgXCJ5ZWFyXCI6XCJBbGxcIixcbiAgICAgIFwicmF0aW5nXCI6WzAuMCw1LjBdXG4gICAgfSxcbiAgICBzZWFyY2hUZXh0OnRleHRcbiAgfSk7XG4gIH1cblxuXG4gIG9uQ2FyZENsaWNrKGltYWdlKXtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3Jldmlldy8nK2ltYWdlLnRpdGxlKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XG4gICAgdGhpcy5jYXJvdXNlbEluZGV4PXNlbGVjdGVkSW5kZXg7XG4gIH07XG4gIG9wZW5Tb3J0KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb3J0T3BlbiA6IHRydWVcbiAgICB9KTtcbiAgfVxuICBcbiAgb3BlbkZpbHRlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsdGVyT3BlbiA6IHRydWVcbiAgICB9KTtcbiAgfVxuICBcblxucmVuZGVyKCl7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcGNvcm4gVGFsZXM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUG9wY29ybiBUYWxlcyBpcyBhbiBJbmRpYW4gbW92aWUgcmV2aWV3IHdlYnNpdGUgcmV2aWV3aW5nIG1vdmllcyBmcm9tIEthbm5hZGEsSGluZGksRW5nbGlzaCxUYW1pbCxUZWx1Z3UsTWFsYXlhbGFtIGFuZCBvdGhlciBsYW5ndWFnZXMuIEZpbmQgbGF0ZXN0IG1vdmllIHJldmlldyBoZXJlLlwiLz5cbiAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiICBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cuUG9wY29ybnRhbGVzLmNvbS9cIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcHJvcC10eXBlcy9wcm9wLXR5cGVzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy83LjE0LjMvZmlyZWJhc2UtYXBwLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzcuMTQuMy9maXJlYmFzZS1hbmFseXRpY3MuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICAgdmFyIGZpcmViYXNlQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lBWHVJSU5MblJtd2FjeGp5czNJNnppdVNUcThsSjBpdzhcIixcbiAgICAgICAgICAgICAgICBhdXRoRG9tYWluOiBcInBvcGNvcm50YWxlcy00MDc2Ny5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3BvcGNvcm50YWxlcy00MDc2Ny5maXJlYmFzZWlvLmNvbVwiLFxuICAgICAgICAgICAgICAgIHByb2plY3RJZDogXCJwb3Bjb3JudGFsZXMtNDA3NjdcIixcbiAgICAgICAgICAgICAgICBzdG9yYWdlQnVja2V0OiBcInBvcGNvcm50YWxlcy00MDc2Ny5hcHBzcG90LmNvbVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUxMjEzNzc5NDA1MVwiLFxuICAgICAgICAgICAgICAgIGFwcElkOiBcIjE6NTEyMTM3Nzk0MDUxOndlYjpiZTYxMmYyZDZhYTdjMzY4ZDRiNDM2XCIsXG4gICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRJZDogXCJHLUxLNURCU0JNVFJcIlxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgICAgICAgICAgICAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XG4gICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ1VBLTE3MDc4Njc1NC0xJyk7XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0xNzA3ODY3NTQtMVwiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgPGRpdj5cbiAgICAgIDxCYWNrZHJvcCBvcGVuPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgIDwvQmFja2Ryb3A+XG4gICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubG9hZGluZyA/ICdoaWRkZW4nIDogJ0FwcCd9PlxuICAgICAgPEFwcEJhciBpZD1cImFwcEJhclwiIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQW5hbHl0aWNzXCI+PGEgaHJlZj1cIi9hbmFseXRpY3NcIj48QmFyQ2hhcnRJY29uIGZvbnRTaXplPXtcImxhcmdlXCJ9IGNvbG9yPXtcInByaW1hcnlcIn0vPjwvYT48L1Rvb2x0aXA+XG4gICAgICAgICAgPGgxIGlkPVwidGl0bGVcIj5Qb3Bjb3JuIFRhbGVzPC9oMT5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodFRvb2xiYXJcIj5cbiAgICAgICAgICAgIDxTb2NpYWxNZW51Lz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPFBhcGVyIGlkPVwiYmFubmVyLWNvbnRhaW5lclwiIGVsZXZhdGlvbj17MTB9PlxuICAgICAgICA8Q2Fyb3VzZWwgc2hvd1RodW1icz17ZmFsc2V9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJhbm5lcnMubWFwKGJhbm5lcj0+e1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17YmFubmVyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExhenlJbWFnZSAgY2xhc3NOYW1lPVwibW92aWUtaW1nXCIgdW5sb2FkZWRTcmM9e2Jhbm5lci51cmx9IGtleT17YmFubmVyLmlkfSBhbHQ9XCJNb3ZpZSBCYW5uZXJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L1BhcGVyID5cbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezEyfSBpZD1cImZpbHRlckdyaWRcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgIGNsYXNzTmFtZT1cImZpbHRlci1zb3J0XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hGaWVsZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9IG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNofSBwbGFjZWhvbGRlcj1cIk1vdmllIFRpdGxlXCIvPlxuICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxuICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTb3J0XCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpY29uQnRuXCIgb25DbGljaz17dGhpcy5vcGVuU29ydH0gPjxTb3J0SWNvbiBmb250U2l6ZT17XCJsYXJnZVwifSBzdHlsZT17e2ZpbGw6IFwicHVycGxlXCJ9fS8+PC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiRmlsdGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpY29uQnRuXCIgb25DbGljaz17dGhpcy5vcGVuRmlsdGVyfSA+PEZpbHRlckxpc3RJY29uIGZvbnRTaXplPXtcImxhcmdlXCJ9IHN0eWxlPXt7ZmlsbDogXCJwdXJwbGVcIn19IC8+IDwvQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICA8SGlkZGVuIG1kVXA+XG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTb3J0XCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpY29uQnRuXCIgb25DbGljaz17dGhpcy5vcGVuU29ydH0gPjxTb3J0SWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9IHN0eWxlPXt7ZmlsbDogXCJwdXJwbGVcIn19Lz48L0J1dHRvbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJGaWx0ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImljb25CdG5cIiBvbkNsaWNrPXt0aGlzLm9wZW5GaWx0ZXJ9PjxGaWx0ZXJMaXN0SWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9IHN0eWxlPXt7ZmlsbDogXCJwdXJwbGVcIn19Lz4gPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICA8U29ydCBvcGVuPXt0aGlzLnN0YXRlLnNvcnRPcGVufSBjbG9zZT17KGRhdGEpPT50aGlzLmhhbmRsZVNvcnRDbG9zZShkYXRhKX0gZGF0YT17dGhpcy5zdGF0ZS5zb3J0ZXJ9Lz5cbiAgICAgICAgPEZpbHRlciBvcGVuPXt0aGlzLnN0YXRlLmZpbHRlck9wZW59IGNsb3NlPXsoZGF0YSk9PnRoaXMuaGFuZGxlRmlsdGVyQ2xvc2UoZGF0YSl9IGRhdGE9e3RoaXMuc3RhdGUuZmlsdGVyfSBmaWx0ZXJEYXRhPXt0aGlzLnN0YXRlLmZpbHRlckRhdGF9Lz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwLUNvbnRlbnRcIj5cbiAgICAgICAgPEdyaWRMaXN0IGNsYXNzTmFtZT1cImNhcmRHcmlkTGlzdFwiICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudExpc3QubWFwKGltYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRMYXlvdXQga2V5PXtpbWFnZS50aXRsZX0gcmV2aWV3PXtpbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICkpfSBcbiAgICAgICAgPC9HcmlkTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8UGFnaW5hdGlvbiAgY291bnQ9e3RoaXMuc3RhdGUudG90YWxQYWdlcyU4fSBwYWdlPXt0aGlzLnN0YXRlLmFjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlZH0vPlxuXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiIGlkPVwiZm9vdGVyVGV4dFwiPlxuICAgICAgICAgICAgICA8aDQgaWQ9XCJmZWVkYmFja1RleHRcIj5OZWVkIHlvdXIgZmVlZGJhY2sgdG8gaW1wcm92ZSAgPC9oND5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpwb3Bjb3JudGFsZXMxOUBnbWFpbC5jb21cIj4gPE1haWxJY29uLz48L2E+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5nZXRGaWx0ZXJlZERhdGEocmVzdWx0KXtcbiAgdmFyIGxhbmd1YWdlcz1bXCJBbGxcIl07XG4gIHZhciB5ZWFycyA9W1wiQWxsXCJdO1xuICBmb3IodmFyIGk9MDtpPHJlc3VsdC5sZW5ndGg7aSsrKXtcbiAgICBpZihsYW5ndWFnZXMuaW5jbHVkZXMocmVzdWx0W2ldLmxhbmd1YWdlKSkgY29udGludWU7XG4gICAgbGFuZ3VhZ2VzLnB1c2gocmVzdWx0W2ldLmxhbmd1YWdlKTt9XG4gIGZvcih2YXIgaT0wO2k8cmVzdWx0Lmxlbmd0aDtpKyspe1xuICAgICAgaWYoeWVhcnMuaW5jbHVkZXMocmVzdWx0W2ldLnllYXIpKSBjb250aW51ZTtcbiAgICAgIHllYXJzLnB1c2gocmVzdWx0W2ldLnllYXIpO31cbiAgeWVhcnMuc29ydCgpO1xuICByZXR1cm4ge1xuICAgIGxhbmd1YWdlczpsYW5ndWFnZXMsXG4gICAgeWVhcnM6eWVhcnMsXG4gICAgcmF0aW5nOlswLjAsNS4wXVxuICB9O1xufVxuXG5oYW5kbGVGaWx0ZXJDbG9zZShkYXRhKXtcbiAgaWYoZGF0YSA9PSBudWxsKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlck9wZW46ZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHJldmlld3MgPSBbXTtcbiAgZm9yKHZhciBpPTA7aTx0aGlzLnN0YXRlLmFsbFJldmlld3MubGVuZ3RoO2krKyl7XG4gICAgcmV2aWV3cy5wdXNoKHRoaXMuc3RhdGUuYWxsUmV2aWV3c1tpXSk7fVxuICBpZihkYXRhLmZpbHRlci5sYW5ndWFnZSE9XCJBbGxcIil7XG4gICAgcmV2aWV3cyA9IHJldmlld3MuZmlsdGVyKGZ1bmN0aW9uKHIpe3JldHVybiByLmxhbmd1YWdlID09IGRhdGEuZmlsdGVyLmxhbmd1YWdlfSk7fVxuICBpZihkYXRhLmZpbHRlci55ZWFyIT1cIkFsbFwiKXtcbiAgICAgIHJldmlld3MgPSByZXZpZXdzLmZpbHRlcihmdW5jdGlvbihyKXtyZXR1cm4gci55ZWFyID09IGRhdGEuZmlsdGVyLnllYXJ9KTt9XG4gIFxuICByZXZpZXdzID0gcmV2aWV3cy5maWx0ZXIoZnVuY3Rpb24ocil7cmV0dXJuIHIucmF0aW5nID49IGRhdGEuZmlsdGVyLnJhdGluZ1swXSAmJiByLnJhdGluZyA8PSBkYXRhLmZpbHRlci5yYXRpbmdbMV19KTtcbiAgICBcbiAgdmFyIGN1cnJlbnRQYWdlcyA9IFtdO1xuICB2YXIgbGVuID0gKHJldmlld3MubGVuZ3RoID4gOCk/ODpyZXZpZXdzLmxlbmd0aDtcbiAgZm9yKHZhciBpPTA7aTwgbGVuIDtpKyspe1xuICAgIGN1cnJlbnRQYWdlcy5wdXNoKHJldmlld3NbaV0pO1xuICB9XG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIGFjdGl2ZVBhZ2U6IDEsXG4gICAgdG90YWxQYWdlczogcmV2aWV3cy5sZW5ndGgsXG4gICAgcmV2aWV3czogcmV2aWV3cyxcbiAgICBjdXJyZW50TGlzdCA6IGN1cnJlbnRQYWdlcyxcbiAgICBsb2FkaW5nOmZhbHNlLFxuICAgIHNvcnRPcGVuOmZhbHNlLFxuICAgIGZpbHRlck9wZW46ZmFsc2UsXG4gICAgZmlsdGVyOmRhdGEuZmlsdGVyLFxuICAgIHNlYXJjaFRleHQ6XCJcIlxuICB9KTtcbn1cbmhhbmRsZVNvcnRDbG9zZShkYXRhKXtcbiAgLy8gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IERhdGUoYi50aW1lU3RhbXApLSBuZXcgRGF0ZShhLnRpbWVTdGFtcCl9KTtcbiAgLy8gc29ydGVyOntcbiAgLy8gICBcImZpZWxkXCI6XCJ0aW1lU3RhbXBcIixcbiAgLy8gICBcInNvcnRUeXBlXCI6XCJBc2NlbmRpbmdcIlxuICAvLyB9XG4gICAgICBpZihkYXRhLmZpZWxkID09PSB0aGlzLnN0YXRlLnNvcnRlci5maWVsZCAmJiBkYXRhLnNvcnRUeXBlID09PSB0aGlzLnN0YXRlLnNvcnRlci5zb3J0VHlwZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvcnRPcGVuOmZhbHNlfSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmlld3M7XG4gICAgICBpZih0aGlzLmZpZWxkID09PSBcInRpbWVTdGFtcFwiKXtcbiAgICAgICAgaWYoZGF0YS5zb3J0VHlwZSA9PT0gXCJEZXNjZW5kaW5nXCIpXG4gICAgICAgICAgcmV2aWV3cyA9IHRoaXMuc3RhdGUucmV2aWV3cy5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBEYXRlKGIudGltZVN0YW1wKS0gbmV3IERhdGUoYS50aW1lU3RhbXApfSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldmlld3MgPSB0aGlzLnN0YXRlLnJldmlld3Muc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRGF0ZShhLnRpbWVTdGFtcCktIG5ldyBEYXRlKGIudGltZVN0YW1wKX0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBpZihkYXRhLnNvcnRUeXBlID09PSBcIkRlc2NlbmRpbmdcIilcbiAgICAgICAgICByZXZpZXdzID0gdGhpcy5zdGF0ZS5yZXZpZXdzLnNvcnQoZnVuY3Rpb24oYSxiKXtpZihhW2RhdGEuZmllbGRdID4gYltkYXRhLmZpZWxkXSkgeyByZXR1cm4gLTE7IH1cbiAgICAgICAgICBpZihhW2RhdGEuZmllbGRdIDwgYltkYXRhLmZpZWxkXSkgeyByZXR1cm4gMTsgfVxuICAgICAgICAgIHJldHVybiAwO30pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXZpZXdzID0gdGhpcy5zdGF0ZS5yZXZpZXdzLnNvcnQoZnVuY3Rpb24oYSxiKXtpZihhW2RhdGEuZmllbGRdIDwgYltkYXRhLmZpZWxkXSkgeyByZXR1cm4gLTE7IH1cbiAgICAgICAgICBpZihhW2RhdGEuZmllbGRdID4gYltkYXRhLmZpZWxkXSkgeyByZXR1cm4gMTsgfVxuICAgICAgICAgIHJldHVybiAwO30pXG4gICAgICB9XG4gICAgICB2YXIgY3VycmVudFBhZ2VzID0gW107XG4gICAgICB2YXIgbGVuID0gKHJldmlld3MubGVuZ3RoID4gOCk/ODpyZXZpZXdzLmxlbmd0aDtcbiAgICAgIGZvcih2YXIgaT0wO2k8IGxlbiA7aSsrKXtcbiAgICAgICAgY3VycmVudFBhZ2VzLnB1c2gocmV2aWV3c1tpXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlUGFnZTogMSxcbiAgICAgICAgdG90YWxQYWdlczogcmV2aWV3cy5sZW5ndGgsXG4gICAgICAgIHJldmlld3M6IHJldmlld3MsXG4gICAgICAgIGN1cnJlbnRMaXN0IDogY3VycmVudFBhZ2VzLFxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICBzb3J0T3BlbjpmYWxzZSxcbiAgICAgICAgc29ydGVyOmRhdGFcbiAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0JhckNoYXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZpbHRlckxpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU29ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==