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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\CardLayout.js";
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Filter.js";
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\LazyImage.js";
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\SocialMenu.js";
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Sort.js";
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
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_CardLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CardLayout */ "./components/CardLayout.js");
/* harmony import */ var _components_Sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Sort */ "./components/Sort.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "@material-ui/lab/Pagination");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Filter */ "./components/Filter.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "@material-ui/icons/BarChart");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SocialMenu */ "./components/SocialMenu.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\pages\\index.js";
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
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
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
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
                  `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_1___default.a, {
      open: this.state.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: this.state.loading ? 'hidden' : 'App',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "appBar",
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Analytics",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "/analytics",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 38
      }
    }, __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_20___default.a, {
      fontSize: "large",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 59
      }
    }))), __jsx("h1", {
      id: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    }, "Popcorn Tales"), __jsx("section", {
      className: "rightToolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }, __jsx(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    })))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "banner-container",
      elevation: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }
    }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__["Carousel"], {
      showThumbs: false,
      showStatus: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    }, this.state.banners.map(banner => {
      return __jsx("div", {
        key: banner.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 24
        }
      }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "movie-img",
        src: banner.url,
        key: banner.id,
        alt: "Movie Banner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }
      }));
    }))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
      elevation: 12,
      id: "filterGrid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
      container: true,
      justify: "center",
      className: "filter-sort",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
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
        lineNumber: 223,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Sort",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_Sort__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 64
      }
    }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Filter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12___default.a, {
      fontSize: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 66
      }
    }), " "))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
      mdUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Sort",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_Sort__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 64
      }
    }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22___default.a, {
      title: "Filter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "iconBtn",
      onClick: this.openFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_12___default.a, {
      fontSize: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 65
      }
    }), " "))), __jsx(_components_Sort__WEBPACK_IMPORTED_MODULE_14__["default"], {
      open: this.state.sortOpen,
      close: data => this.handleSortClose(data),
      data: this.state.sorter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }
    }), __jsx(_components_Filter__WEBPACK_IMPORTED_MODULE_16__["default"], {
      open: this.state.filterOpen,
      close: data => this.handleFilterClose(data),
      data: this.state.filter,
      filterData: this.state.filterData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }
    }))), __jsx("div", {
      className: "App-Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "cardGridList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }
    }, this.state.currentList.map(image => __jsx(_components_CardLayout__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: image.title,
      review: image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 27
      }
    })))), __jsx("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 7
      }
    }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_15___default.a, {
      count: this.state.totalPages % 8,
      page: this.state.activePage,
      onChange: this.onPageChanged,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
      container: true,
      justify: "center",
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 11
      }
    }, __jsx("h4", {
      id: "feedbackText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 15
      }
    }, "Need your feedback to improve  "), __jsx("a", {
      href: "mailto:popcorntales19@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 15
      }
    }, " ", __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
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

module.exports = __webpack_require__(/*! C:\Users\Vinay\Desktop\popcorntales\nextui\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF6eUltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmFyQ2hhcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmlsdGVyTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Tb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiIl0sIm5hbWVzIjpbIlN0eWxlZFJhdGluZyIsIndpdGhTdHlsZXMiLCJpY29uRmlsbGVkIiwiY29sb3IiLCJpY29uSG92ZXIiLCJSYXRpbmciLCJDYXJkTGF5b3V0IiwiQ29tcG9uZW50Iiwic3RhckNvdW50IiwidW5kZWZpbmVkIiwidmFsdWUiLCJyZW5kZXIiLCJzdGFycyIsInByb3BzIiwicmV2aWV3IiwicmF0aW5nIiwidGl0bGUiLCJ0aXRsZUltYWdlIiwibGFuZ3VhZ2UiLCJTb3J0IiwiY29uc3RydWN0b3IiLCJ5ZWFyIiwiZGF0YSIsImZpbHRlciIsInN0YXRlIiwiZmlsdGVyRGF0YSIsIm9uQ2FuY2VsIiwiYmluZCIsIm9uT0siLCJjbG9zZSIsIm9wZW4iLCJlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJsYW5ndWFnZXMiLCJtYXAiLCJ5ZWFycyIsInYiLCJMYXp5SW1hZ2UiLCJSZWFjdCIsImxvYWRlZCIsImVycm9yIiwiY29tcG9uZW50RGlkTW91bnQiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJjbGFzc05hbWUiLCJzdHlsZSIsInVubG9hZGVkU3JjIiwiYWx0IiwiU29jaWFsTWVudSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJCb29sZWFuIiwiaGFuZGxlRmllbGRDaGFuZ2UiLCJoYW5kbGVPcmRlckNoYW5nZSIsImV2dCIsImZpZWxkIiwic29ydFR5cGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJtb3ZpZXMiLCJqc29uIiwiYmFubmVycyIsImkiLCJwdXNoIiwiaWQiLCJuYW1lIiwidXJsIiwiSG9tZSIsInNlbGVjdGVkSW5kZXgiLCJjYXJvdXNlbEluZGV4IiwicmVzdWx0IiwiZ2V0RmlsdGVyZWREYXRhIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInRpbWVTdGFtcCIsInJ2cyIsIml0ZW0iLCJjdXJyZW50UGFnZXMiLCJsZW4iLCJsZW5ndGgiLCJyZXZpZXdzIiwiY3VycmVudExpc3QiLCJsb2FkaW5nIiwic29ydE9wZW4iLCJmaWx0ZXJPcGVuIiwic2VhcmNoVGV4dCIsImFjdGl2ZVBhZ2UiLCJ0b3RhbFBhZ2VzIiwiYWxsUmV2aWV3cyIsInNvcnRlciIsIm9uUGFnZUNoYW5nZWQiLCJvcGVuU29ydCIsImhhbmRsZVNvcnRDbG9zZSIsIm9wZW5GaWx0ZXIiLCJvblNlYXJjaCIsInRhcmdldFBhZ2UiLCJwYXJzZUludCIsImlubmVyVGV4dCIsInN0YXJ0IiwidGV4dCIsInIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJvbkNhcmRDbGljayIsImltYWdlIiwiaGlzdG9yeSIsIl9faHRtbCIsImJhbm5lciIsImhhbmRsZUZpbHRlckNsb3NlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsWUFBWSxHQUFHQywyRUFBVSxDQUFDO0FBQzlCQyxZQUFVLEVBQUU7QUFDVkMsU0FBSyxFQUFFO0FBREcsR0FEa0I7QUFJOUJDLFdBQVMsRUFBRTtBQUNURCxTQUFLLEVBQUU7QUFERTtBQUptQixDQUFELENBQVYsQ0FPbEJFLDhEQVBrQixDQUFyQjs7QUFRQSxNQUFNQyxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUV4QkMsU0FBRCxJQUFlO0FBQ3JCLFVBQUdBLFNBQVMsS0FBS0MsU0FBakIsRUFDRTtBQUNGLFlBQU1DLEtBQUssR0FBR0YsU0FBZDtBQUNBLGFBQ0U7QUFFSSxjQUFDLFlBQUQ7QUFBYyxjQUFJLEVBQUMsa0JBQW5CO0FBQXNDLHNCQUFZLEVBQUVFLEtBQXBEO0FBQTJELG1CQUFTLEVBQUUsSUFBdEU7QUFDWSxjQUFJLEVBQUUsTUFBQyxrRUFBRDtBQUFjLG9CQUFRLEVBQUMsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSE47QUFNRCxLQVpnQztBQUFBOztBQWFqQ0MsUUFBTSxHQUFHO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsQ0FBVyxLQUFLQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLE1BQTdCLENBQWQ7QUFDQSxXQUFPLE1BQUMsOERBQUQ7QUFBTyxlQUFTLEVBQUMsZ0JBQWpCO0FBQWtDLGVBQVMsRUFBRSxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0w7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCLEtBQUtGLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkUsS0FBekMsQ0FESyxFQUVMLE1BQUMsOERBQUQ7QUFBTyxlQUFTLEVBQUUsQ0FBbEI7QUFBcUIsZUFBUyxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLFVBQUksRUFBRSxLQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JFLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFRLFFBQUUsRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZEQUFEO0FBQVcsZUFBUyxFQUFDLFVBQXJCO0FBQWdDLFNBQUcsRUFBRSxxQkFBcUIsS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCRSxLQUE1RTtBQUFvRixTQUFHLEVBQUUsS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCRyxVQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FESixDQURKLENBRkssRUFTTDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEIsS0FBS0osS0FBTCxDQUFXQyxNQUFYLENBQWtCSSxRQUE1QyxDQURKLEVBRUk7QUFBSSxlQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdCLEtBQUtMLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsTUFBMUMsT0FGSixDQVRLLENBQVA7QUFjRDs7QUE3QmdDOztBQWdDcEJULHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTWEsSUFBTixTQUFtQlosK0NBQW5CLENBQTZCO0FBQ3pCYSxhQUFXLENBQUNQLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFDQSxRQUFJUSxJQUFJLEdBQUdSLEtBQUssQ0FBQ1MsSUFBTixDQUFXRCxJQUF0QjtBQUNBLFFBQUlILFFBQVEsR0FBR0wsS0FBSyxDQUFDUyxJQUFOLENBQVdKLFFBQTFCO0FBQ0EsUUFBSUgsTUFBTSxHQUFFRixLQUFLLENBQUNTLElBQU4sQ0FBV1AsTUFBdkI7QUFDQSxRQUFJUSxNQUFNLEdBQUM7QUFDVCxjQUFPRixJQURFO0FBRVQsa0JBQVdILFFBRkY7QUFHVCxnQkFBU0g7QUFIQSxLQUFYO0FBS0EsU0FBS1MsS0FBTCxHQUFhO0FBQUNELFlBQU0sRUFBQ0EsTUFBUjtBQUFlRSxnQkFBVSxFQUFDWixLQUFLLENBQUNZO0FBQWhDLEtBQWI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVELElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDRDs7QUFDREQsVUFBUSxHQUFFO0FBQ1I7QUFDQSxTQUFLYixLQUFMLENBQVdnQixLQUFYLENBQWlCLElBQWpCO0FBQ0Q7O0FBQ0RELE1BQUksR0FBRTtBQUNKLFNBQUtmLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUIsS0FBS0wsS0FBdEI7QUFDRDs7QUFDTGIsUUFBTSxHQUFHO0FBQ1AsV0FBUSxNQUFDLCtEQUFEO0FBQVEsY0FBUSxFQUFFLElBQWxCO0FBQXdCLGVBQVMsRUFBRSxJQUFuQztBQUF5QyxhQUFPLEVBQUdXLElBQUQsSUFBUSxLQUFLVCxLQUFMLENBQVdnQixLQUFYLENBQWlCUCxJQUFqQixDQUExRDtBQUFrRiwwQkFBb0IsRUFBRSxJQUF4RztBQUE4RywwQkFBb0IsRUFBRSxJQUFwSTtBQUEwSSx5QkFBZ0IscUJBQTFKO0FBQWdMLFVBQUksRUFBRSxLQUFLVCxLQUFMLENBQVdpQixJQUFqTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ1IsTUFBQyxvRUFBRDtBQUFhLFFBQUUsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUSxFQUVSO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsRUFFQSxNQUFDLCtEQUFEO0FBQ00sZUFBUyxFQUFDLE1BRGhCO0FBRU0sYUFBTyxFQUFDLFVBRmQ7QUFHTSxXQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXRCxNQUFYLENBQWtCTCxRQUgvQjtBQUlNLGNBQVEsRUFBRWEsQ0FBQyxJQUFFO0FBQ1gsWUFBSVIsTUFBTSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0QsTUFBeEI7QUFDQUEsY0FBTSxDQUFDTCxRQUFQLEdBQWtCYSxDQUFDLENBQUNDLE1BQUYsQ0FBU3RCLEtBQTNCO0FBQ0EsYUFBS3VCLFFBQUwsQ0FBYztBQUFDVixnQkFBTSxFQUFHQTtBQUFWLFNBQWQ7QUFBaUMsT0FQekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVVRLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQlMsU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DakIsUUFBUSxJQUFFO0FBQzlDLGFBQU8sTUFBQyxpRUFBRDtBQUFVLGFBQUssRUFBRUEsUUFBakI7QUFBMkIsV0FBRyxFQUFFQSxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTJDQSxRQUEzQyxDQUFQO0FBQ0MsS0FGRCxDQVZSLENBRkEsRUFpQkE7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJBLEVBa0JBLE1BQUMsK0RBQUQ7QUFDTSxlQUFTLEVBQUMsTUFEaEI7QUFFTSxhQUFPLEVBQUMsVUFGZDtBQUdNLFdBQUssRUFBRSxLQUFLTSxLQUFMLENBQVdELE1BQVgsQ0FBa0JGLElBSC9CO0FBSU0sY0FBUSxFQUFFVSxDQUFDLElBQUU7QUFDWCxZQUFJUixNQUFNLEdBQUcsS0FBS0MsS0FBTCxDQUFXRCxNQUF4QjtBQUNBQSxjQUFNLENBQUNGLElBQVAsR0FBY1UsQ0FBQyxDQUFDQyxNQUFGLENBQVN0QixLQUF2QjtBQUNBLGFBQUt1QixRQUFMLENBQWM7QUFBQ1YsZ0JBQU0sRUFBR0E7QUFBVixTQUFkO0FBQWlDLE9BUHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FVUSxLQUFLQyxLQUFMLENBQVdDLFVBQVgsQ0FBc0JXLEtBQXRCLENBQTRCRCxHQUE1QixDQUFnQ2QsSUFBSSxJQUFFO0FBQ3RDLGFBQU8sTUFBQyxpRUFBRDtBQUFVLGFBQUssRUFBRUEsSUFBakI7QUFBdUIsV0FBRyxFQUFFQSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1DQSxJQUFuQyxDQUFQO0FBQ0MsS0FGRCxDQVZSLENBbEJBLEVBaUNBO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0EsRUFrQ0EsTUFBQywrREFBRDtBQUNFLGVBQVMsRUFBQyxNQURaO0FBRUUsV0FBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0QsTUFBWCxDQUFrQlIsTUFGM0I7QUFHRSx5QkFBZ0IsNkJBSGxCO0FBSUUsVUFBSSxFQUFFLElBSlI7QUFLRSxTQUFHLEVBQUUsSUFMUDtBQU1FLFNBQUcsRUFBRSxJQU5QO0FBT0UsY0FBUSxFQUFFLENBQUNnQixDQUFELEVBQUdNLENBQUgsS0FBTztBQUNmLFlBQUlkLE1BQU0sR0FBRyxLQUFLQyxLQUFMLENBQVdELE1BQXhCO0FBQ0FBLGNBQU0sQ0FBQ1IsTUFBUCxHQUFnQnNCLENBQWhCO0FBQ0EsYUFBS0osUUFBTCxDQUFjO0FBQUNWLGdCQUFNLEVBQUdBO0FBQVYsU0FBZDtBQUNELE9BWEg7QUFZRSx1QkFBaUIsRUFBQyxNQVpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbENBLEVBZ0RBLE1BQUMsNkRBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFHLFFBQTFCO0FBQW1DLFFBQUUsRUFBQyxXQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyxvRUFBRDtBQUFhLGFBQU8sRUFBQyxNQUFyQjtBQUE0QixlQUFTLEVBQUMsYUFBdEM7QUFBb0QsV0FBSyxFQUFDLFNBQTFEO0FBQW9FLG9CQUFXLDJCQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywrREFBRDtBQUFRLGFBQU8sRUFBRSxLQUFLSyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSSxNQUFDLCtEQUFEO0FBQVEsYUFBTyxFQUFFLEtBQUtGLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FEQSxDQWhEQSxDQUZRLENBQVI7QUEyREQ7O0FBbEYwQjs7QUFxRmRQLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNlLE1BQU1tQixTQUFOLFNBQXdCQyw0Q0FBSyxDQUFDaEMsU0FBOUIsQ0FBd0M7QUFDbkRhLGFBQVcsQ0FBQ1AsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLVyxLQUFMLEdBQWE7QUFDWGdCLFlBQU0sRUFBRSxLQURHO0FBRVhDLFdBQUssRUFBRTtBQUZJLEtBQWI7QUFJRDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDbEIsVUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjs7QUFDQUQsT0FBRyxDQUFDRSxNQUFKLEdBQWEsTUFBTTtBQUNqQixXQUFLWixRQUFMLENBQWM7QUFDWk8sY0FBTSxFQUFFO0FBREksT0FBZDtBQUdELEtBSkQ7O0FBS0FHLE9BQUcsQ0FBQ0csT0FBSixHQUFjLE1BQU07QUFDbEIsV0FBS2IsUUFBTCxDQUFjO0FBQ1pRLGFBQUssRUFBRTtBQURLLE9BQWQ7QUFHRCxLQUpEOztBQUtFRSxPQUFHLENBQUNJLEdBQUosR0FBVSxLQUFLbEMsS0FBTCxDQUFXa0MsR0FBckI7QUFDSDs7QUFFRHBDLFFBQU0sR0FBRztBQUNQLFFBQUksS0FBS2EsS0FBTCxDQUFXaUIsS0FBZixFQUFzQjtBQUNwQixhQUFPO0FBQ0wsaUJBQVMsRUFBRSxLQUFLNUIsS0FBTCxDQUFXbUMsU0FEakI7QUFFTCxhQUFLLEVBQUUsS0FBS25DLEtBQUwsQ0FBV29DLEtBRmI7QUFHTCxXQUFHLEVBQUUsS0FBS3BDLEtBQUwsQ0FBV3FDLFdBSFg7QUFJTCxXQUFHLEVBQUUsS0FBS3JDLEtBQUwsQ0FBV3NDLEdBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBS0QsS0FORCxNQU1PLElBQUksQ0FBQyxLQUFLM0IsS0FBTCxDQUFXZ0IsTUFBaEIsRUFBd0I7QUFDN0IsYUFBTztBQUNMLGlCQUFTLEVBQUUsS0FBSzNCLEtBQUwsQ0FBV21DLFNBRGpCO0FBRUwsYUFBSyxFQUFFLEtBQUtuQyxLQUFMLENBQVdvQyxLQUZiO0FBR0wsV0FBRyxFQUFFLEtBQUtwQyxLQUFMLENBQVdxQyxXQUhYO0FBSUwsV0FBRyxFQUFFLEtBQUtyQyxLQUFMLENBQVdzQyxHQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUtEOztBQUNELFdBQU87QUFDTCxlQUFTLEVBQUUsS0FBS3RDLEtBQUwsQ0FBV21DLFNBRGpCO0FBRUwsV0FBSyxFQUFFLEtBQUtuQyxLQUFMLENBQVdvQyxLQUZiO0FBR0wsU0FBRyxFQUFFLEtBQUtwQyxLQUFMLENBQVdrQyxHQUhYO0FBSUwsU0FBRyxFQUFFLEtBQUtsQyxLQUFMLENBQVdzQyxHQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUtEOztBQTNDa0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLFVBQVQsR0FBc0I7QUFDbkMsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJmLDRDQUFLLENBQUNnQixRQUFOLENBQWUsSUFBZixDQUFoQzs7QUFFQSxRQUFNQyxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUM3QkgsZUFBVyxDQUFDRyxLQUFLLENBQUNDLGFBQVAsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJMLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBUSxxQkFBYyxhQUF0QjtBQUFvQyxxQkFBYyxNQUFsRDtBQUF5RCxXQUFPLEVBQUVFLFdBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQW9CLFNBQUssRUFBRSxTQUEzQjtBQUFzQyxZQUFRLEVBQUUsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLDZEQUFEO0FBQ0UsTUFBRSxFQUFDLGFBREw7QUFFRSxZQUFRLEVBQUVILFFBRlo7QUFHRSxlQUFXLE1BSGI7QUFJRSxRQUFJLEVBQUVPLE9BQU8sQ0FBQ1AsUUFBRCxDQUpmO0FBS0UsV0FBTyxFQUFFTSxXQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLGlFQUFEO0FBQVUsV0FBTyxFQUFFQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxRQUFJLEVBQUMsdUNBQVI7QUFBZ0QsYUFBUyxFQUFDLGFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTSxNQUFDLGtFQUFEO0FBQWMsWUFBUSxFQUFFLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETixDQURBLENBVkYsRUFlRSxNQUFDLGlFQUFEO0FBQVUsV0FBTyxFQUFFQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxRQUFJLEVBQUMseUNBQVI7QUFBa0QsYUFBUyxFQUFDLGFBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTSxNQUFDLG1FQUFEO0FBQWUsWUFBUSxFQUFFLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETixDQURBLENBZkYsQ0FKRixDQURGO0FBNEJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNeEMsSUFBTixTQUFtQlosK0NBQW5CLENBQTZCO0FBQ3pCYSxhQUFXLENBQUNQLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFDQSxTQUFLVyxLQUFMLEdBQWFYLEtBQUssQ0FBQ1MsSUFBbkI7QUFDQSxTQUFLdUMsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJsQyxJQUF2QixDQUE0QixJQUE1QixDQUF6QjtBQUNBLFNBQUttQyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1Qm5DLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVRCxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0Q7O0FBQ0RrQyxtQkFBaUIsQ0FBQ0UsR0FBRCxFQUFLO0FBQ3RCLFNBQUs5QixRQUFMLENBQWM7QUFDWitCLFdBQUssRUFBQ0QsR0FBRyxDQUFDL0IsTUFBSixDQUFXdEI7QUFETCxLQUFkO0FBR0M7O0FBQ0RvRCxtQkFBaUIsQ0FBQ0MsR0FBRCxFQUFLO0FBQ3BCLFNBQUs5QixRQUFMLENBQWM7QUFDWmdDLGNBQVEsRUFBQ0YsR0FBRyxDQUFDL0IsTUFBSixDQUFXdEI7QUFEUixLQUFkO0FBR0Q7O0FBQ0RnQixVQUFRLEdBQUU7QUFDUixTQUFLYixLQUFMLENBQVdnQixLQUFYLENBQWlCLEtBQUtoQixLQUFMLENBQVdTLElBQTVCO0FBQ0Q7O0FBQ0RNLE1BQUksR0FBRTtBQUNKLFNBQUtmLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUIsS0FBS0wsS0FBdEI7QUFDRDs7QUFDTGIsUUFBTSxHQUFHO0FBQ1AsV0FBUSxNQUFDLCtEQUFEO0FBQVEsYUFBTyxFQUFHVyxJQUFELElBQVEsS0FBS1QsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQlAsSUFBakIsQ0FBekI7QUFBaUQsMEJBQW9CLEVBQUUsSUFBdkU7QUFBNkUsMEJBQW9CLEVBQUUsSUFBbkc7QUFBeUcseUJBQWdCLHFCQUF6SDtBQUErSSxVQUFJLEVBQUUsS0FBS1QsS0FBTCxDQUFXaUIsSUFBaEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNSLE1BQUMsb0VBQUQ7QUFBYSxRQUFFLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxFQUVSO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLGtFQUFEO0FBQVcsZUFBUyxFQUFDLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxFQUVFLE1BQUMsbUVBQUQ7QUFBWSxvQkFBVyxnQkFBdkI7QUFBd0MsVUFBSSxFQUFDLGdCQUE3QztBQUE4RCxXQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXd0MsS0FBaEY7QUFBdUYsY0FBUSxFQUFFLEtBQUtILGlCQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5RUFBRDtBQUFrQixXQUFLLEVBQUMsV0FBeEI7QUFBb0MsYUFBTyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE3QztBQUF3RCxXQUFLLEVBQUMsWUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyx5RUFBRDtBQUFrQixXQUFLLEVBQUMsT0FBeEI7QUFBZ0MsYUFBTyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF6QztBQUFvRCxXQUFLLEVBQUMsT0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyx5RUFBRDtBQUFrQixXQUFLLEVBQUMsTUFBeEI7QUFBK0IsYUFBTyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF4QztBQUFtRCxXQUFLLEVBQUMsTUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBSUUsTUFBQyx5RUFBRDtBQUFrQixXQUFLLEVBQUMsUUFBeEI7QUFBaUMsYUFBTyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUExQztBQUFxRCxXQUFLLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBS0UsTUFBQyx5RUFBRDtBQUFrQixXQUFLLEVBQUMsVUFBeEI7QUFBbUMsYUFBTyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE1QztBQUF1RCxXQUFLLEVBQUMsVUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBRkYsQ0FEQSxFQVdBLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsa0VBQUQ7QUFBVyxlQUFTLEVBQUMsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLEVBRUUsTUFBQyxtRUFBRDtBQUFZLG9CQUFXLE9BQXZCO0FBQStCLFVBQUksRUFBQyxPQUFwQztBQUE0QyxXQUFLLEVBQUUsS0FBS3JDLEtBQUwsQ0FBV3lDLFFBQTlEO0FBQXdFLGNBQVEsRUFBRSxLQUFLSCxpQkFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUVBQUQ7QUFBa0IsV0FBSyxFQUFDLFdBQXhCO0FBQW9DLGFBQU8sRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBN0M7QUFBd0QsV0FBSyxFQUFDLFdBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMseUVBQUQ7QUFBa0IsV0FBSyxFQUFDLFlBQXhCO0FBQXFDLGFBQU8sRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUM7QUFBeUQsV0FBSyxFQUFDLFlBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQUZGLENBWEEsRUFrQkEsTUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUcsUUFBMUI7QUFBbUMsUUFBRSxFQUFDLFdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLG9FQUFEO0FBQWEsYUFBTyxFQUFDLE1BQXJCO0FBQTRCLGVBQVMsRUFBQyxhQUF0QztBQUFvRCxXQUFLLEVBQUMsU0FBMUQ7QUFBb0Usb0JBQVcsMkJBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLCtEQUFEO0FBQVEsYUFBTyxFQUFFLEtBQUtsQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSSxNQUFDLCtEQUFEO0FBQVEsYUFBTyxFQUFFLEtBQUtGLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FEQSxDQWxCQSxDQUZRLENBQVI7QUE2QkQ7O0FBdkQwQjs7QUEwRGRQLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZUFBZStDLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEwQztBQUMvQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG9DQUFELENBQXZCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFyQjtBQUNBLE1BQUlDLE9BQU8sR0FBRSxFQUFiOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxJQUFFLENBQWYsRUFBaUJBLENBQUMsRUFBbEIsRUFBcUI7QUFDbkJELFdBQU8sQ0FBQ0UsSUFBUixDQUFhO0FBQ1hDLFFBQUUsRUFBQ0YsQ0FEUTtBQUVYRyxVQUFJLEVBQUMsVUFBUUgsQ0FGRjtBQUdYSSxTQUFHLEVBQUMsNERBQTBESixDQUExRCxHQUE0RDtBQUhyRCxLQUFiO0FBS0QsR0FWOEMsQ0FXL0M7QUFDQTs7O0FBQ0EsU0FBTztBQUNMNUQsU0FBSyxFQUFFO0FBQ0x5RCxZQURLO0FBRUxFO0FBRks7QUFERixHQUFQO0FBT0Q7O0FBQ0QsTUFBTU0sSUFBTixTQUFtQnZFLGdEQUFuQixDQUE2QjtBQUMzQmEsYUFBVyxDQUFDUCxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsMENBdUdKLENBQUNrRSxhQUFELEVBQWdCaEQsQ0FBaEIsS0FBc0I7QUFDbkMsV0FBS2lELGFBQUwsR0FBbUJELGFBQW5CO0FBQ0QsS0F6R2tCOztBQUVqQixRQUFJRSxNQUFNLEdBQUdwRSxLQUFLLENBQUN5RCxNQUFuQjtBQUNBLFFBQUkvQyxNQUFNLEdBQUcsS0FBSzJELGVBQUwsQ0FBcUJELE1BQXJCLENBQWI7QUFDQSxRQUFJVCxPQUFPLEdBQUczRCxLQUFLLENBQUMyRCxPQUFwQjtBQUNBUyxVQUFNLENBQUNFLElBQVAsQ0FBWSxVQUFTQyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGFBQU8sSUFBSUMsSUFBSixDQUFTRCxDQUFDLENBQUNFLFNBQVgsSUFBdUIsSUFBSUQsSUFBSixDQUFTRixDQUFDLENBQUNHLFNBQVgsQ0FBOUI7QUFBb0QsS0FBOUU7QUFDRSxVQUFNQyxHQUFHLEdBQUdQLE1BQU0sQ0FBQzlDLEdBQVAsQ0FBV3NELElBQUksSUFBSTtBQUM3QixhQUFPQSxJQUFQO0FBQ0QsS0FGVyxDQUFaO0FBR0YsUUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsUUFBSUMsR0FBRyxHQUFJSCxHQUFHLENBQUNJLE1BQUosR0FBYSxDQUFkLEdBQWlCLENBQWpCLEdBQW1CSixHQUFHLENBQUNJLE1BQWpDOztBQUNBLFNBQUksSUFBSW5CLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBRWtCLEdBQWYsRUFBb0JsQixDQUFDLEVBQXJCLEVBQXdCO0FBQ3RCaUIsa0JBQVksQ0FBQ2hCLElBQWIsQ0FBa0JjLEdBQUcsQ0FBQ2YsQ0FBRCxDQUFyQjtBQUNELEtBYmdCLENBY2pCOzs7QUFDQSxTQUFLakQsS0FBTCxHQUFhO0FBQ1hxRSxhQUFPLEVBQUUsRUFERTtBQUVYQyxpQkFBVyxFQUFDLEVBRkQ7QUFHWHRCLGFBQU8sRUFBQ0EsT0FIRztBQUlYdUIsYUFBTyxFQUFDLElBSkc7QUFLWEMsY0FBUSxFQUFDLEtBTEU7QUFNWEMsZ0JBQVUsRUFBQyxLQU5BO0FBT1hDLGdCQUFVLEVBQUMsRUFQQTtBQVFYQyxnQkFBVSxFQUFFLENBUkQ7QUFTWEMsZ0JBQVUsRUFBRVosR0FBRyxDQUFDSSxNQVRMO0FBVVhTLGdCQUFVLEVBQUNiLEdBVkE7QUFXWEssYUFBTyxFQUFFTCxHQVhFO0FBWVhNLGlCQUFXLEVBQUdKLFlBWkg7QUFhWEssYUFBTyxFQUFDLEtBYkc7QUFjWHhFLFlBQU0sRUFBQztBQUNMLG9CQUFXLEtBRE47QUFFTCxnQkFBTyxLQUZGO0FBR0wsa0JBQVMsQ0FBQyxHQUFELEVBQUssR0FBTDtBQUhKLE9BZEk7QUFtQlgrRSxZQUFNLEVBQUM7QUFDTCxpQkFBUSxXQURIO0FBRUwsb0JBQVc7QUFGTixPQW5CSTtBQXVCWDdFLGdCQUFVLEVBQUNGO0FBdkJBLEtBQWI7QUEwQkMsU0FBS3lELGFBQUwsR0FBbUIsQ0FBbkI7QUFDQSxTQUFLdUIsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CNUUsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLNkUsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWM3RSxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBSzhFLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQjlFLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsU0FBSytFLFVBQUwsR0FBZ0IsS0FBS0EsVUFBTCxDQUFnQi9FLElBQWhCLENBQXFCLElBQXJCLENBQWhCO0FBQ0EsU0FBS2dGLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjaEYsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUVGOztBQUlENEUsZUFBYSxDQUFDeEUsQ0FBRCxFQUFHO0FBQ2QsUUFBSTZFLFVBQVUsR0FBQ0MsUUFBUSxDQUFDOUUsQ0FBQyxDQUFDQyxNQUFGLENBQVM4RSxTQUFWLENBQXZCO0FBQ0UsUUFBSXBCLFlBQVksR0FBRyxFQUFuQjtBQUNBLFFBQUlxQixLQUFLLEdBQUcsS0FBR0gsVUFBVSxHQUFDLENBQWQsQ0FBWjtBQUNBLFFBQUlqQixHQUFHLEdBQUksS0FBS25FLEtBQUwsQ0FBV3FFLE9BQVgsQ0FBbUJELE1BQW5CLEdBQTRCLElBQUdnQixVQUFoQyxHQUE2QyxJQUFHQSxVQUFoRCxHQUE0RCxLQUFLcEYsS0FBTCxDQUFXcUUsT0FBWCxDQUFtQkQsTUFBekY7O0FBQ0EsU0FBSSxJQUFJbkIsQ0FBQyxHQUFDc0MsS0FBVixFQUFnQnRDLENBQUMsR0FBRWtCLEdBQW5CLEVBQXdCbEIsQ0FBQyxFQUF6QixFQUE0QjtBQUMxQmlCLGtCQUFZLENBQUNoQixJQUFiLENBQWtCLEtBQUtsRCxLQUFMLENBQVdxRSxPQUFYLENBQW1CcEIsQ0FBbkIsQ0FBbEI7QUFDRDs7QUFFRCxTQUFLeEMsUUFBTCxDQUFjO0FBQ1o2RCxpQkFBVyxFQUFHSixZQURGO0FBRVpTLGdCQUFVLEVBQUNTO0FBRkMsS0FBZDtBQUlIOztBQUVERCxVQUFRLENBQUM1RSxDQUFELEVBQUc7QUFFVCxRQUFJaUYsSUFBSSxHQUFHakYsQ0FBQyxDQUFDQyxNQUFGLENBQVN0QixLQUFwQjtBQUVBLFFBQUltRixPQUFPLEdBQUcsRUFBZDs7QUFDQSxTQUFJLElBQUlwQixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS2pELEtBQUwsQ0FBVzZFLFVBQVgsQ0FBc0JULE1BQXBDLEVBQTJDbkIsQ0FBQyxFQUE1QyxFQUErQztBQUM3Q29CLGFBQU8sQ0FBQ25CLElBQVIsQ0FBYSxLQUFLbEQsS0FBTCxDQUFXNkUsVUFBWCxDQUFzQjVCLENBQXRCLENBQWI7QUFBd0M7O0FBRzFDb0IsV0FBTyxHQUFHQSxPQUFPLENBQUN0RSxNQUFSLENBQWUsVUFBUzBGLENBQVQsRUFBVztBQUFDLGFBQU9BLENBQUMsQ0FBQ2pHLEtBQUYsQ0FBUWtHLGlCQUFSLEdBQTRCQyxRQUE1QixDQUFxQ0gsSUFBSSxDQUFDSSxXQUFMLEVBQXJDLENBQVA7QUFBaUUsS0FBNUYsQ0FBVjtBQUVBLFFBQUkxQixZQUFZLEdBQUcsRUFBbkI7QUFDQSxRQUFJQyxHQUFHLEdBQUlFLE9BQU8sQ0FBQ0QsTUFBUixHQUFpQixDQUFsQixHQUFxQixDQUFyQixHQUF1QkMsT0FBTyxDQUFDRCxNQUF6Qzs7QUFDQSxTQUFJLElBQUluQixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUVrQixHQUFmLEVBQW9CbEIsQ0FBQyxFQUFyQixFQUF3QjtBQUN0QmlCLGtCQUFZLENBQUNoQixJQUFiLENBQWtCbUIsT0FBTyxDQUFDcEIsQ0FBRCxDQUF6QjtBQUNEOztBQUNILFNBQUt4QyxRQUFMLENBQWM7QUFDWmtFLGdCQUFVLEVBQUUsQ0FEQTtBQUVaQyxnQkFBVSxFQUFFUCxPQUFPLENBQUNELE1BRlI7QUFHWkMsYUFBTyxFQUFFQSxPQUhHO0FBSVpDLGlCQUFXLEVBQUdKLFlBSkY7QUFLWkssYUFBTyxFQUFDLEtBTEk7QUFNWnhFLFlBQU0sRUFBQztBQUNMLG9CQUFXLEtBRE47QUFFTCxnQkFBTyxLQUZGO0FBR0wsa0JBQVMsQ0FBQyxHQUFELEVBQUssR0FBTDtBQUhKLE9BTks7QUFXWjJFLGdCQUFVLEVBQUNjO0FBWEMsS0FBZDtBQWFDOztBQUdESyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNoQixTQUFLekcsS0FBTCxDQUFXMEcsT0FBWCxDQUFtQjdDLElBQW5CLENBQXdCLGFBQVc0QyxLQUFLLENBQUN0RyxLQUF6QztBQUNEOztBQUtEd0YsVUFBUSxHQUFFO0FBQ1IsU0FBS3ZFLFFBQUwsQ0FBYztBQUNaK0QsY0FBUSxFQUFHO0FBREMsS0FBZDtBQUdEOztBQUVEVSxZQUFVLEdBQUU7QUFDVixTQUFLekUsUUFBTCxDQUFjO0FBQ1pnRSxnQkFBVSxFQUFHO0FBREQsS0FBZDtBQUdEOztBQUdIdEYsUUFBTSxHQUFFO0FBQ04sV0FDRSxvRUFDQSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUk7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUMsd0tBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixFQUdNO0FBQU0sV0FBSyxNQUFYO0FBQVksU0FBRyxFQUFDLE1BQWhCO0FBQXVCLFVBQUksRUFBQyxjQUE1QjtBQUE0QyxVQUFJLEVBQUMsY0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhOLEVBSU07QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKTixFQUtNO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMTixFQU1NO0FBQU0sV0FBSyxNQUFYO0FBQVksU0FBRyxFQUFDLFdBQWhCO0FBQTRCLFVBQUksRUFBQywrQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5OLEVBT007QUFBUSxTQUFHLEVBQUMsMkRBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBOLEVBUU07QUFBUSxTQUFHLEVBQUMsaUVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJOLEVBU007QUFDRSw2QkFBdUIsRUFBRTtBQUN2QjZHLGNBQU0sRUFBRzs7Ozs7Ozs7Ozs7Ozs7QUFEYyxPQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVE4sQ0FEQSxFQTZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUFVLFVBQUksRUFBRSxLQUFLaEcsS0FBTCxDQUFXdUUsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMseUVBQUQ7QUFBa0IsV0FBSyxFQUFDLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURGLEVBSUE7QUFBSyxlQUFTLEVBQUUsS0FBS3ZFLEtBQUwsQ0FBV3VFLE9BQVgsR0FBcUIsUUFBckIsR0FBZ0MsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsK0RBQUQ7QUFBUSxRQUFFLEVBQUMsUUFBWDtBQUFvQixjQUFRLEVBQUMsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFBUyxXQUFLLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCO0FBQUcsVUFBSSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQixNQUFDLG1FQUFEO0FBQWMsY0FBUSxFQUFFLE9BQXhCO0FBQWlDLFdBQUssRUFBRSxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXJCLENBQTNCLENBREYsRUFFRTtBQUFJLFFBQUUsRUFBQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFHRTtBQUFTLGVBQVMsRUFBQyxjQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FIRixDQURGLENBREYsRUFVRSxNQUFDLDhEQUFEO0FBQU8sUUFBRSxFQUFDLGtCQUFWO0FBQTZCLGVBQVMsRUFBRSxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtRUFBRDtBQUFVLGdCQUFVLEVBQUUsS0FBdEI7QUFBNkIsZ0JBQVUsRUFBRSxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRU0sS0FBS3ZFLEtBQUwsQ0FBV2dELE9BQVgsQ0FBbUJyQyxHQUFuQixDQUF1QnNGLE1BQU0sSUFBRTtBQUM3QixhQUFPO0FBQUssV0FBRyxFQUFFQSxNQUFNLENBQUM5QyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0gsTUFBQyw4REFBRDtBQUFZLGlCQUFTLEVBQUMsV0FBdEI7QUFBa0MsV0FBRyxFQUFFOEMsTUFBTSxDQUFDNUMsR0FBOUM7QUFBbUQsV0FBRyxFQUFFNEMsTUFBTSxDQUFDOUMsRUFBL0Q7QUFBbUUsV0FBRyxFQUFDLGNBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERyxDQUFQO0FBR0QsS0FKRCxDQUZOLENBREYsQ0FWRixFQXFCRSxNQUFDLDhEQUFEO0FBQU8sZUFBUyxFQUFFLEVBQWxCO0FBQXNCLFFBQUUsRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUcsUUFBMUI7QUFBb0MsZUFBUyxFQUFDLGFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUUsRUFBQyxhQUF0QjtBQUFvQyxXQUFLLEVBQUUsS0FBS25ELEtBQUwsQ0FBVzBFLFVBQXREO0FBQWtFLGNBQVEsRUFBRSxLQUFLUyxRQUFqRjtBQUEyRixpQkFBVyxFQUFDLGFBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEQSxFQUVBLE1BQUMsK0RBQUQ7QUFBUSxZQUFNLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFBUyxXQUFLLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0YsTUFBQywrREFBRDtBQUFRLGVBQVMsRUFBQyxTQUFsQjtBQUE0QixhQUFPLEVBQUUsS0FBS0gsUUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxRCxNQUFDLDhEQUFEO0FBQVUsY0FBUSxFQUFFLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBckQsQ0FERSxDQURGLEVBSUEsTUFBQyxpRUFBRDtBQUFTLFdBQUssRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLCtEQUFEO0FBQVEsZUFBUyxFQUFDLFNBQWxCO0FBQTRCLGFBQU8sRUFBRSxLQUFLRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVELE1BQUMscUVBQUQ7QUFBZ0IsY0FBUSxFQUFFLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBdkQsTUFEQSxDQUpBLENBRkEsRUFVQSxNQUFDLCtEQUFEO0FBQVEsVUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLGlFQUFEO0FBQVMsV0FBSyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsK0RBQUQ7QUFBUSxlQUFTLEVBQUMsU0FBbEI7QUFBNEIsYUFBTyxFQUFFLEtBQUtGLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUQsTUFBQyw4REFBRDtBQUFVLGNBQVEsRUFBRSxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXJELENBREEsQ0FEQSxFQUlBLE1BQUMsaUVBQUQ7QUFBUyxXQUFLLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQywrREFBRDtBQUFRLGVBQVMsRUFBQyxTQUFsQjtBQUE0QixhQUFPLEVBQUUsS0FBS0UsVUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzRCxNQUFDLHFFQUFEO0FBQWdCLGNBQVEsRUFBRSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXRELE1BREEsQ0FKQSxDQVZBLEVBa0JGLE1BQUMseURBQUQ7QUFBTSxVQUFJLEVBQUUsS0FBS2xGLEtBQUwsQ0FBV3dFLFFBQXZCO0FBQWlDLFdBQUssRUFBRzFFLElBQUQsSUFBUSxLQUFLbUYsZUFBTCxDQUFxQm5GLElBQXJCLENBQWhEO0FBQTRFLFVBQUksRUFBRSxLQUFLRSxLQUFMLENBQVc4RSxNQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJFLEVBbUJGLE1BQUMsMkRBQUQ7QUFBUSxVQUFJLEVBQUUsS0FBSzlFLEtBQUwsQ0FBV3lFLFVBQXpCO0FBQXFDLFdBQUssRUFBRzNFLElBQUQsSUFBUSxLQUFLb0csaUJBQUwsQ0FBdUJwRyxJQUF2QixDQUFwRDtBQUFrRixVQUFJLEVBQUUsS0FBS0UsS0FBTCxDQUFXRCxNQUFuRztBQUEyRyxnQkFBVSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsVUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRSxDQURKLENBckJGLEVBNENFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFBVSxlQUFTLEVBQUMsY0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNlLEtBQUtELEtBQUwsQ0FBV3NFLFdBQVgsQ0FBdUIzRCxHQUF2QixDQUEyQm1GLEtBQUssSUFDN0IsTUFBQywrREFBRDtBQUFZLFNBQUcsRUFBRUEsS0FBSyxDQUFDdEcsS0FBdkI7QUFBOEIsWUFBTSxFQUFFc0csS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURILENBRGYsQ0FERixDQTVDRixFQW1ERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxtRUFBRDtBQUFhLFdBQUssRUFBRSxLQUFLOUYsS0FBTCxDQUFXNEUsVUFBWCxHQUFzQixDQUExQztBQUE2QyxVQUFJLEVBQUUsS0FBSzVFLEtBQUwsQ0FBVzJFLFVBQTlEO0FBQ00sY0FBUSxFQUFFLEtBQUtJLGFBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUlJLE1BQUMsOERBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFHLFFBQTFCO0FBQW1DLFFBQUUsRUFBQyxZQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxRQUFFLEVBQUMsY0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURKLEVBRUk7QUFBRyxVQUFJLEVBQUMsaUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUEyQyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBM0MsQ0FGSixDQUpKLENBbkRGLENBSkEsQ0E3QkEsQ0FERjtBQWtHRDs7QUFDRHJCLGlCQUFlLENBQUNELE1BQUQsRUFBUTtBQUNyQixRQUFJL0MsU0FBUyxHQUFDLENBQUMsS0FBRCxDQUFkO0FBQ0EsUUFBSUUsS0FBSyxHQUFFLENBQUMsS0FBRCxDQUFYOztBQUNBLFNBQUksSUFBSXFDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ1EsTUFBTSxDQUFDVyxNQUFyQixFQUE0Qm5CLENBQUMsRUFBN0IsRUFBZ0M7QUFDOUIsVUFBR3ZDLFNBQVMsQ0FBQ2lGLFFBQVYsQ0FBbUJsQyxNQUFNLENBQUNSLENBQUQsQ0FBTixDQUFVdkQsUUFBN0IsQ0FBSCxFQUEyQztBQUMzQ2dCLGVBQVMsQ0FBQ3dDLElBQVYsQ0FBZU8sTUFBTSxDQUFDUixDQUFELENBQU4sQ0FBVXZELFFBQXpCO0FBQW9DOztBQUN0QyxTQUFJLElBQUl1RCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNRLE1BQU0sQ0FBQ1csTUFBckIsRUFBNEJuQixDQUFDLEVBQTdCLEVBQWdDO0FBQzVCLFVBQUdyQyxLQUFLLENBQUMrRSxRQUFOLENBQWVsQyxNQUFNLENBQUNSLENBQUQsQ0FBTixDQUFVcEQsSUFBekIsQ0FBSCxFQUFtQztBQUNuQ2UsV0FBSyxDQUFDc0MsSUFBTixDQUFXTyxNQUFNLENBQUNSLENBQUQsQ0FBTixDQUFVcEQsSUFBckI7QUFBNEI7O0FBQ2hDZSxTQUFLLENBQUMrQyxJQUFOO0FBQ0EsV0FBTztBQUNMakQsZUFBUyxFQUFDQSxTQURMO0FBRUxFLFdBQUssRUFBQ0EsS0FGRDtBQUdMckIsWUFBTSxFQUFDLENBQUMsR0FBRCxFQUFLLEdBQUw7QUFIRixLQUFQO0FBS0Q7O0FBRUQyRyxtQkFBaUIsQ0FBQ3BHLElBQUQsRUFBTTtBQUNyQixRQUFHQSxJQUFJLElBQUksSUFBWCxFQUFnQjtBQUNkLFdBQUtXLFFBQUwsQ0FBYztBQUNaZ0Usa0JBQVUsRUFBQztBQURDLE9BQWQ7QUFHQTtBQUNEOztBQUNELFFBQUlKLE9BQU8sR0FBRyxFQUFkOztBQUNBLFNBQUksSUFBSXBCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLakQsS0FBTCxDQUFXNkUsVUFBWCxDQUFzQlQsTUFBcEMsRUFBMkNuQixDQUFDLEVBQTVDLEVBQStDO0FBQzdDb0IsYUFBTyxDQUFDbkIsSUFBUixDQUFhLEtBQUtsRCxLQUFMLENBQVc2RSxVQUFYLENBQXNCNUIsQ0FBdEIsQ0FBYjtBQUF3Qzs7QUFDMUMsUUFBR25ELElBQUksQ0FBQ0MsTUFBTCxDQUFZTCxRQUFaLElBQXNCLEtBQXpCLEVBQStCO0FBQzdCMkUsYUFBTyxHQUFHQSxPQUFPLENBQUN0RSxNQUFSLENBQWUsVUFBUzBGLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsQ0FBQy9GLFFBQUYsSUFBY0ksSUFBSSxDQUFDQyxNQUFMLENBQVlMLFFBQWpDO0FBQTBDLE9BQXJFLENBQVY7QUFBa0Y7O0FBQ3BGLFFBQUdJLElBQUksQ0FBQ0MsTUFBTCxDQUFZRixJQUFaLElBQWtCLEtBQXJCLEVBQTJCO0FBQ3ZCd0UsYUFBTyxHQUFHQSxPQUFPLENBQUN0RSxNQUFSLENBQWUsVUFBUzBGLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsQ0FBQzVGLElBQUYsSUFBVUMsSUFBSSxDQUFDQyxNQUFMLENBQVlGLElBQTdCO0FBQWtDLE9BQTdELENBQVY7QUFBMEU7O0FBRTlFd0UsV0FBTyxHQUFHQSxPQUFPLENBQUN0RSxNQUFSLENBQWUsVUFBUzBGLENBQVQsRUFBVztBQUFDLGFBQU9BLENBQUMsQ0FBQ2xHLE1BQUYsSUFBWU8sSUFBSSxDQUFDQyxNQUFMLENBQVlSLE1BQVosQ0FBbUIsQ0FBbkIsQ0FBWixJQUFxQ2tHLENBQUMsQ0FBQ2xHLE1BQUYsSUFBWU8sSUFBSSxDQUFDQyxNQUFMLENBQVlSLE1BQVosQ0FBbUIsQ0FBbkIsQ0FBeEQ7QUFBOEUsS0FBekcsQ0FBVjtBQUVBLFFBQUkyRSxZQUFZLEdBQUcsRUFBbkI7QUFDQSxRQUFJQyxHQUFHLEdBQUlFLE9BQU8sQ0FBQ0QsTUFBUixHQUFpQixDQUFsQixHQUFxQixDQUFyQixHQUF1QkMsT0FBTyxDQUFDRCxNQUF6Qzs7QUFDQSxTQUFJLElBQUluQixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUVrQixHQUFmLEVBQW9CbEIsQ0FBQyxFQUFyQixFQUF3QjtBQUN0QmlCLGtCQUFZLENBQUNoQixJQUFiLENBQWtCbUIsT0FBTyxDQUFDcEIsQ0FBRCxDQUF6QjtBQUNEOztBQUNELFNBQUt4QyxRQUFMLENBQWM7QUFDWmtFLGdCQUFVLEVBQUUsQ0FEQTtBQUVaQyxnQkFBVSxFQUFFUCxPQUFPLENBQUNELE1BRlI7QUFHWkMsYUFBTyxFQUFFQSxPQUhHO0FBSVpDLGlCQUFXLEVBQUdKLFlBSkY7QUFLWkssYUFBTyxFQUFDLEtBTEk7QUFNWkMsY0FBUSxFQUFDLEtBTkc7QUFPWkMsZ0JBQVUsRUFBQyxLQVBDO0FBUVoxRSxZQUFNLEVBQUNELElBQUksQ0FBQ0MsTUFSQTtBQVNaMkUsZ0JBQVUsRUFBQztBQVRDLEtBQWQ7QUFXRDs7QUFDRE8saUJBQWUsQ0FBQ25GLElBQUQsRUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksUUFBR0EsSUFBSSxDQUFDMEMsS0FBTCxLQUFlLEtBQUt4QyxLQUFMLENBQVc4RSxNQUFYLENBQWtCdEMsS0FBakMsSUFBMEMxQyxJQUFJLENBQUMyQyxRQUFMLEtBQWtCLEtBQUt6QyxLQUFMLENBQVc4RSxNQUFYLENBQWtCckMsUUFBakYsRUFBMEY7QUFDeEYsV0FBS2hDLFFBQUwsQ0FBYztBQUFDK0QsZ0JBQVEsRUFBQztBQUFWLE9BQWQ7QUFDQTtBQUNEOztBQUNELFFBQUlILE9BQUo7O0FBQ0EsUUFBRyxLQUFLN0IsS0FBTCxLQUFlLFdBQWxCLEVBQThCO0FBQzVCLFVBQUcxQyxJQUFJLENBQUMyQyxRQUFMLEtBQWtCLFlBQXJCLEVBQ0U0QixPQUFPLEdBQUcsS0FBS3JFLEtBQUwsQ0FBV3FFLE9BQVgsQ0FBbUJWLElBQW5CLENBQXdCLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsZUFBTyxJQUFJQyxJQUFKLENBQVNELENBQUMsQ0FBQ0UsU0FBWCxJQUF1QixJQUFJRCxJQUFKLENBQVNGLENBQUMsQ0FBQ0csU0FBWCxDQUE5QjtBQUFvRCxPQUExRixDQUFWLENBREYsS0FHRU0sT0FBTyxHQUFHLEtBQUtyRSxLQUFMLENBQVdxRSxPQUFYLENBQW1CVixJQUFuQixDQUF3QixVQUFTQyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQU8sSUFBSUMsSUFBSixDQUFTRixDQUFDLENBQUNHLFNBQVgsSUFBdUIsSUFBSUQsSUFBSixDQUFTRCxDQUFDLENBQUNFLFNBQVgsQ0FBOUI7QUFBb0QsT0FBMUYsQ0FBVjtBQUNILEtBTEQsTUFNSTtBQUNGLFVBQUdqRSxJQUFJLENBQUMyQyxRQUFMLEtBQWtCLFlBQXJCLEVBQ0U0QixPQUFPLEdBQUcsS0FBS3JFLEtBQUwsQ0FBV3FFLE9BQVgsQ0FBbUJWLElBQW5CLENBQXdCLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsWUFBR0QsQ0FBQyxDQUFDOUQsSUFBSSxDQUFDMEMsS0FBTixDQUFELEdBQWdCcUIsQ0FBQyxDQUFDL0QsSUFBSSxDQUFDMEMsS0FBTixDQUFwQixFQUFrQztBQUFFLGlCQUFPLENBQUMsQ0FBUjtBQUFZOztBQUNoRyxZQUFHb0IsQ0FBQyxDQUFDOUQsSUFBSSxDQUFDMEMsS0FBTixDQUFELEdBQWdCcUIsQ0FBQyxDQUFDL0QsSUFBSSxDQUFDMEMsS0FBTixDQUFwQixFQUFrQztBQUFFLGlCQUFPLENBQVA7QUFBVzs7QUFDL0MsZUFBTyxDQUFQO0FBQVUsT0FGQSxDQUFWLENBREYsS0FLRTZCLE9BQU8sR0FBRyxLQUFLckUsS0FBTCxDQUFXcUUsT0FBWCxDQUFtQlYsSUFBbkIsQ0FBd0IsVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxZQUFHRCxDQUFDLENBQUM5RCxJQUFJLENBQUMwQyxLQUFOLENBQUQsR0FBZ0JxQixDQUFDLENBQUMvRCxJQUFJLENBQUMwQyxLQUFOLENBQXBCLEVBQWtDO0FBQUUsaUJBQU8sQ0FBQyxDQUFSO0FBQVk7O0FBQ2hHLFlBQUdvQixDQUFDLENBQUM5RCxJQUFJLENBQUMwQyxLQUFOLENBQUQsR0FBZ0JxQixDQUFDLENBQUMvRCxJQUFJLENBQUMwQyxLQUFOLENBQXBCLEVBQWtDO0FBQUUsaUJBQU8sQ0FBUDtBQUFXOztBQUMvQyxlQUFPLENBQVA7QUFBVSxPQUZBLENBQVY7QUFHSDs7QUFDRCxRQUFJMEIsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsUUFBSUMsR0FBRyxHQUFJRSxPQUFPLENBQUNELE1BQVIsR0FBaUIsQ0FBbEIsR0FBcUIsQ0FBckIsR0FBdUJDLE9BQU8sQ0FBQ0QsTUFBekM7O0FBQ0EsU0FBSSxJQUFJbkIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFFa0IsR0FBZixFQUFvQmxCLENBQUMsRUFBckIsRUFBd0I7QUFDdEJpQixrQkFBWSxDQUFDaEIsSUFBYixDQUFrQm1CLE9BQU8sQ0FBQ3BCLENBQUQsQ0FBekI7QUFDRDs7QUFDRCxTQUFLeEMsUUFBTCxDQUFjO0FBQ1prRSxnQkFBVSxFQUFFLENBREE7QUFFWkMsZ0JBQVUsRUFBRVAsT0FBTyxDQUFDRCxNQUZSO0FBR1pDLGFBQU8sRUFBRUEsT0FIRztBQUlaQyxpQkFBVyxFQUFHSixZQUpGO0FBS1pLLGFBQU8sRUFBQyxLQUxJO0FBTVpDLGNBQVEsRUFBQyxLQU5HO0FBT1pNLFlBQU0sRUFBQ2hGO0FBUEssS0FBZDtBQVNEOztBQXhUd0I7O0FBMlRkd0QsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2V0EscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBMYXp5SW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF6eUltYWdlXCI7XHJcbmNvbnN0IFN0eWxlZFJhdGluZyA9IHdpdGhTdHlsZXMoe1xyXG4gIGljb25GaWxsZWQ6IHtcclxuICAgIGNvbG9yOiAnI2ZmNmQ3NSdcclxuICB9LFxyXG4gIGljb25Ib3Zlcjoge1xyXG4gICAgY29sb3I6ICcjZmYzZDQ3JyxcclxuICB9LFxyXG59KShSYXRpbmcpO1xyXG5jbGFzcyBDYXJkTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBcclxuICBzdGFycyA9IChzdGFyQ291bnQpID0+IHtcclxuICAgIGlmKHN0YXJDb3VudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCB2YWx1ZSA9IHN0YXJDb3VudDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIDxSYXRpbmcgbmFtZT1cImRpc2FibGVkXCIgdmFsdWU9e3ZhbHVlfSBwcmVjaXNpb249ezAuMjV9ICBzaXplPVwibGFyZ2VcIi8+XHJcbiAgXHJcbiAgICAgICAgICA8U3R5bGVkUmF0aW5nIG5hbWU9XCJjdXN0b21pemVkLWNvbG9yXCIgZGVmYXVsdFZhbHVlPXt2YWx1ZX0gcHJlY2lzaW9uPXswLjI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZhdm9yaXRlSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPn0vPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc3RhcnMgPSB0aGlzLnN0YXJzKHRoaXMucHJvcHMucmV2aWV3LnJhdGluZyk7XHJcbiAgICByZXR1cm4gPFBhcGVyIGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCIgZWxldmF0aW9uPXs4fT5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMucmV2aWV3LnRpdGxlfTwvaDQ+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT1cImNhcmRcIiAgPlxyXG4gICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5yZXZpZXcudGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxmaWd1cmUgaWQ9XCJjYXJkLWZpZ3VyZVwiPlxyXG4gICAgICAgICAgICAgICAgPExhenlJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIGFsdD17XCJQb3Bjb3JuIFRhbGVzIC0gXCIgKyB0aGlzLnByb3BzLnJldmlldy50aXRsZSB9IHNyYz17dGhpcy5wcm9wcy5yZXZpZXcudGl0bGVJbWFnZX0vPlxyXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3RoaXMucHJvcHMucmV2aWV3Lmxhbmd1YWdlfTwvaDM+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmF0aW5nXCI+e3RoaXMucHJvcHMucmV2aWV3LnJhdGluZ30vNTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvUGFwZXI+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5jbGFzcyBTb3J0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gcHJvcHMuZGF0YS55ZWFyO1xyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHByb3BzLmRhdGEubGFuZ3VhZ2U7XHJcbiAgICAgICAgdmFyIHJhdGluZyA9cHJvcHMuZGF0YS5yYXRpbmc7XHJcbiAgICAgICAgdmFyIGZpbHRlcj17XHJcbiAgICAgICAgICBcInllYXJcIjp5ZWFyLFxyXG4gICAgICAgICAgXCJsYW5ndWFnZVwiOmxhbmd1YWdlLFxyXG4gICAgICAgICAgXCJyYXRpbmdcIjpyYXRpbmdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZmlsdGVyOmZpbHRlcixmaWx0ZXJEYXRhOnByb3BzLmZpbHRlckRhdGF9O1xyXG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbk9LID0gdGhpcy5vbk9LLmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgb25DYW5jZWwoKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIG9uT0soKXtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICA8RGlhbG9nIG1heFdpZHRoPXsnc20nfSBmdWxsV2lkdGg9e3RydWV9IG9uQ2xvc2U9eyhkYXRhKT0+dGhpcy5wcm9wcy5jbG9zZShkYXRhKX0gZGlzYWJsZUJhY2tkcm9wQ2xpY2s9e3RydWV9IGRpc2FibGVFc2NhcGVLZXlEb3duPXt0cnVlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3Blbj17dGhpcy5wcm9wcy5vcGVufT5cclxuICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj5GaWx0ZXI8L0RpYWxvZ1RpdGxlPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJjb250YWluZXJcIj5cclxuICAgIDxoNCBjbGFzc05hbWU9XCJpdGVtXCI+TGFuZ3VhZ2U8L2g0PlxyXG4gICAgPFNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyLmxhbmd1YWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2U9PntcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc3RhdGUuZmlsdGVyO1xyXG4gICAgICAgICAgICBmaWx0ZXIubGFuZ3VhZ2UgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyIDogZmlsdGVyfSl9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJEYXRhLmxhbmd1YWdlcy5tYXAobGFuZ3VhZ2U9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSB2YWx1ZT17bGFuZ3VhZ2V9IGtleT17bGFuZ3VhZ2V9PntsYW5ndWFnZX08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgPGg0IGNsYXNzTmFtZT1cIml0ZW1cIj5ZZWFyPC9oND5cclxuICAgIDxTZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlci55ZWFyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2U9PntcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc3RhdGUuZmlsdGVyO1xyXG4gICAgICAgICAgICBmaWx0ZXIueWVhciA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXIgOiBmaWx0ZXJ9KX19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlckRhdGEueWVhcnMubWFwKHllYXI9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSB2YWx1ZT17eWVhcn0ga2V5PXt5ZWFyfT57eWVhcn08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgPC9TZWxlY3Q+XHJcbiAgICA8aDQgY2xhc3NOYW1lPVwiaXRlbVwiPlJhdGluZzwvaDQ+XHJcbiAgICA8U2xpZGVyXHJcbiAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXIucmF0aW5nfVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkaXNjcmV0ZS1zbGlkZXItc21hbGwtc3RlcHNcIlxyXG4gICAgICBzdGVwPXswLjI1fVxyXG4gICAgICBtaW49ezAuMDB9XHJcbiAgICAgIG1heD17NS4wMH1cclxuICAgICAgb25DaGFuZ2U9eyhlLHYpPT57XHJcbiAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc3RhdGUuZmlsdGVyO1xyXG4gICAgICAgIGZpbHRlci5yYXRpbmcgPSB2O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlciA6IGZpbHRlcn0pXHJcbiAgICAgIH19XHJcbiAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PVwiYXV0b1wiXHJcbiAgICAvPlxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiIGlkPVwic3RhclBob3RvXCI+XHJcbiAgICA8QnV0dG9uR3JvdXAgdmFyaWFudD1cInRleHRcIiBjbGFzc05hbWU9XCJidXR0b25Hcm91cFwiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJ0ZXh0IHByaW1hcnkgYnV0dG9uIGdyb3VwXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uT0t9Pk9LPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgIDwvR3JpZD5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4gIDwvRGlhbG9nPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZXJyb3I6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgICBpbWcuc3JjID0gdGhpcy5wcm9wcy5zcmM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy51bmxvYWRlZFNyY31cclxuICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHR9IC8+XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy51bmxvYWRlZFNyY31cclxuICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHR9IC8+XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxyXG4gICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9XHJcbiAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdH0gLz5cclxuICAgIH1cclxuICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEFzc2lzdGFudFBob3RvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG8nO1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJztcclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29jaWFsTWVudSgpIHtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwic29jaWFsLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICA8QXNzaXN0YW50UGhvdG9JY29uIGNvbG9yPXtcInByaW1hcnlcIn0gZm9udFNpemU9e1wiZGVmYXVsdFwifS8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPVwic29jaWFsLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICB7LyogPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT4gXHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL1BvcGNvcm5UYWxlc3NcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9Lz5cclxuICAgICAgICAgIDwvYT48L01lbnVJdGVtPiAqL31cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcG9wY29ybnRhbGVzXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cclxuICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIGZvbnRTaXplPXtcImRlZmF1bHRcIn0vPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wb3Bjb3JudGFsZXNzXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cclxuICAgICAgICAgICAgICA8SW5zdGFncmFtSWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9Lz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuXHJcbmNsYXNzIFNvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzLmRhdGE7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGaWVsZENoYW5nZSA9IHRoaXMuaGFuZGxlRmllbGRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU9yZGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVPcmRlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbk9LID0gdGhpcy5vbk9LLmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlRmllbGRDaGFuZ2UoZXZ0KXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZmllbGQ6ZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBoYW5kbGVPcmRlckNoYW5nZShldnQpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc29ydFR5cGU6ZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIG9uQ2FuY2VsKCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSh0aGlzLnByb3BzLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIG9uT0soKXtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICA8RGlhbG9nIG9uQ2xvc2U9eyhkYXRhKT0+dGhpcy5wcm9wcy5jbG9zZShkYXRhKX0gZGlzYWJsZUJhY2tkcm9wQ2xpY2s9e3RydWV9IGRpc2FibGVFc2NhcGVLZXlEb3duPXt0cnVlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3Blbj17dGhpcy5wcm9wcy5vcGVufT5cclxuICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj5Tb3J0PC9EaWFsb2dUaXRsZT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyY29udGFpbmVyXCI+XHJcbiAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5GaWVsZDwvRm9ybUxhYmVsPlxyXG4gICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwibW92aWVBdHRyaWJ1dGVcIiBuYW1lPVwibW92aWVBdHRyaWJ1dGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmllbGRDaGFuZ2V9PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwidGltZVN0YW1wXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkRhdGUgQWRkZWRcIiAvPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwidGl0bGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiVGl0bGVcIiAvPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwieWVhclwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJZZWFyXCIgLz5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cInJhdGluZ1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJSYXRpbmdcIiAvPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibGFuZ3VhZ2VcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiTGFuZ3VhZ2VcIiAvPlxyXG4gICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgPEZvcm1Db250cm9sPlxyXG4gICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5PcmRlcjwvRm9ybUxhYmVsPlxyXG4gICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwib3JkZXJcIiBuYW1lPVwib3JkZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0VHlwZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3JkZXJDaGFuZ2V9PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiQXNjZW5kaW5nXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkFzY2VuZGluZ1wiIC8+XHJcbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJEZXNjZW5kaW5nXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkRlc2NlbmRpbmdcIiAvPlxyXG4gICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiIGlkPVwic3RhclBob3RvXCI+XHJcbiAgICA8QnV0dG9uR3JvdXAgdmFyaWFudD1cInRleHRcIiBjbGFzc05hbWU9XCJidXR0b25Hcm91cFwiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJ0ZXh0IHByaW1hcnkgYnV0dG9uIGdyb3VwXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uT0t9Pk9LPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgIDwvR3JpZD5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4gIDwvRGlhbG9nPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydDtcclxuIiwiaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0JztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XG5pbXBvcnQgU29ydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NvcnQnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQgRmlsdGVyTGlzdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpbHRlckxpc3QnO1xuaW1wb3J0IENhcmRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZExheW91dFwiO1xuaW1wb3J0IFNvcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29ydFwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uJztcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlsdGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXp5SW1hZ2VcIjtcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEJhckNoYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmFyQ2hhcnQnO1xuaW1wb3J0IFNvY2lhbE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxNZW51JztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vbW92aWUnKTtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgdmFyIGJhbm5lcnMgPVtdO1xuICBmb3IodmFyIGk9MTtpPD00O2krKyl7XG4gICAgYmFubmVycy5wdXNoKHtcbiAgICAgIGlkOmksXG4gICAgICBuYW1lOlwiTW92aWVcIitpLFxuICAgICAgdXJsOlwiaHR0cHM6Ly9hcGkucG9wY29ybnRhbGVzLmNvbS9pbWFnZT9vYmplY3Q9QmFubmVycy9Nb3ZpZVwiK2krXCIuanBnXCJcbiAgICB9KVxuICB9XG4gIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcbiAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbW92aWVzLFxuICAgICAgYmFubmVyc1xuICAgIH0sXG4gIH1cbiBcbn1cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB2YXIgcmVzdWx0ID0gcHJvcHMubW92aWVzO1xuICAgIHZhciBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICAgIHZhciBiYW5uZXJzID0gcHJvcHMuYmFubmVycztcbiAgICByZXN1bHQuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRGF0ZShiLnRpbWVTdGFtcCktIG5ldyBEYXRlKGEudGltZVN0YW1wKX0pO1xuICAgICAgY29uc3QgcnZzID0gcmVzdWx0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB2YXIgY3VycmVudFBhZ2VzID0gW107XG4gICAgdmFyIGxlbiA9IChydnMubGVuZ3RoID4gOCk/ODpydnMubGVuZ3RoO1xuICAgIGZvcih2YXIgaT0wO2k8IGxlbiA7aSsrKXtcbiAgICAgIGN1cnJlbnRQYWdlcy5wdXNoKHJ2c1tpXSk7XG4gICAgfVxuICAgIC8vIERvbid0IGNhbGwgdGhpcy5zZXRTdGF0ZSgpIGhlcmUhXG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICByZXZpZXdzOiBbXSxcbiAgICAgIGN1cnJlbnRMaXN0OltdLFxuICAgICAgYmFubmVyczpiYW5uZXJzLFxuICAgICAgbG9hZGluZzp0cnVlLFxuICAgICAgc29ydE9wZW46ZmFsc2UsXG4gICAgICBmaWx0ZXJPcGVuOmZhbHNlLFxuICAgICAgc2VhcmNoVGV4dDpcIlwiLFxuICAgICAgYWN0aXZlUGFnZTogMSxcbiAgICAgIHRvdGFsUGFnZXM6IHJ2cy5sZW5ndGgsXG4gICAgICBhbGxSZXZpZXdzOnJ2cyxcbiAgICAgIHJldmlld3M6IHJ2cyxcbiAgICAgIGN1cnJlbnRMaXN0IDogY3VycmVudFBhZ2VzLFxuICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgIGZpbHRlcjp7XG4gICAgICAgIFwibGFuZ3VhZ2VcIjpcIkFsbFwiLFxuICAgICAgICBcInllYXJcIjpcIkFsbFwiLFxuICAgICAgICBcInJhdGluZ1wiOlswLjAsNS4wXVxuICAgICAgfSxcbiAgICAgIHNvcnRlcjp7XG4gICAgICAgIFwiZmllbGRcIjpcInRpbWVTdGFtcFwiLFxuICAgICAgICBcInNvcnRUeXBlXCI6XCJEZXNjZW5kaW5nXCJcbiAgICAgIH0sXG4gICAgICBmaWx0ZXJEYXRhOmZpbHRlclxuICAgICB9O1xuXG4gICAgIHRoaXMuY2Fyb3VzZWxJbmRleD0wO1xuICAgICB0aGlzLm9uUGFnZUNoYW5nZWQgPSB0aGlzLm9uUGFnZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICAgdGhpcy5vcGVuU29ydCA9IHRoaXMub3BlblNvcnQuYmluZCh0aGlzKTtcbiAgICAgdGhpcy5oYW5kbGVTb3J0Q2xvc2UgPSB0aGlzLmhhbmRsZVNvcnRDbG9zZS5iaW5kKHRoaXMpO1xuICAgICB0aGlzLm9wZW5GaWx0ZXI9dGhpcy5vcGVuRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgIHRoaXMub25TZWFyY2ggPSB0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgXG4gIH1cblxuICBcblxuICBvblBhZ2VDaGFuZ2VkKGUpe1xuICAgIHZhciB0YXJnZXRQYWdlPXBhcnNlSW50KGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICB2YXIgY3VycmVudFBhZ2VzID0gW107XG4gICAgICB2YXIgc3RhcnQgPSA4Kih0YXJnZXRQYWdlLTEpO1xuICAgICAgdmFyIGxlbiA9ICh0aGlzLnN0YXRlLnJldmlld3MubGVuZ3RoID4gOCoodGFyZ2V0UGFnZSkpPzgqKHRhcmdldFBhZ2UpOnRoaXMuc3RhdGUucmV2aWV3cy5sZW5ndGg7XG4gICAgICBmb3IodmFyIGk9c3RhcnQ7aTwgbGVuIDtpKyspe1xuICAgICAgICBjdXJyZW50UGFnZXMucHVzaCh0aGlzLnN0YXRlLnJldmlld3NbaV0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudExpc3QgOiBjdXJyZW50UGFnZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6dGFyZ2V0UGFnZVxuICAgICAgfSk7XG4gIH1cblxuICBvblNlYXJjaChlKXtcbiAgICBcbiAgICB2YXIgdGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgdmFyIHJldmlld3MgPSBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMuc3RhdGUuYWxsUmV2aWV3cy5sZW5ndGg7aSsrKXtcbiAgICAgIHJldmlld3MucHVzaCh0aGlzLnN0YXRlLmFsbFJldmlld3NbaV0pO31cblxuXG4gICAgcmV2aWV3cyA9IHJldmlld3MuZmlsdGVyKGZ1bmN0aW9uKHIpe3JldHVybiByLnRpdGxlLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKTt9KTtcbiAgICBcbiAgICB2YXIgY3VycmVudFBhZ2VzID0gW107XG4gICAgdmFyIGxlbiA9IChyZXZpZXdzLmxlbmd0aCA+IDgpPzg6cmV2aWV3cy5sZW5ndGg7XG4gICAgZm9yKHZhciBpPTA7aTwgbGVuIDtpKyspe1xuICAgICAgY3VycmVudFBhZ2VzLnB1c2gocmV2aWV3c1tpXSk7XG4gICAgfVxuICB0aGlzLnNldFN0YXRlKHtcbiAgICBhY3RpdmVQYWdlOiAxLFxuICAgIHRvdGFsUGFnZXM6IHJldmlld3MubGVuZ3RoLFxuICAgIHJldmlld3M6IHJldmlld3MsXG4gICAgY3VycmVudExpc3QgOiBjdXJyZW50UGFnZXMsXG4gICAgbG9hZGluZzpmYWxzZSxcbiAgICBmaWx0ZXI6e1xuICAgICAgXCJsYW5ndWFnZVwiOlwiQWxsXCIsXG4gICAgICBcInllYXJcIjpcIkFsbFwiLFxuICAgICAgXCJyYXRpbmdcIjpbMC4wLDUuMF1cbiAgICB9LFxuICAgIHNlYXJjaFRleHQ6dGV4dFxuICB9KTtcbiAgfVxuXG5cbiAgb25DYXJkQ2xpY2soaW1hZ2Upe1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcmV2aWV3LycraW1hZ2UudGl0bGUpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcbiAgICB0aGlzLmNhcm91c2VsSW5kZXg9c2VsZWN0ZWRJbmRleDtcbiAgfTtcbiAgb3BlblNvcnQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvcnRPcGVuIDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIFxuICBvcGVuRmlsdGVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJPcGVuIDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIFxuXG5yZW5kZXIoKXtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9wY29ybiBUYWxlczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQb3Bjb3JuIFRhbGVzIGlzIGFuIEluZGlhbiBtb3ZpZSByZXZpZXcgd2Vic2l0ZSByZXZpZXdpbmcgbW92aWVzIGZyb20gS2FubmFkYSxIaW5kaSxFbmdsaXNoLFRhbWlsLFRlbHVndSxNYWxheWFsYW0gYW5kIG90aGVyIGxhbmd1YWdlcy4gRmluZCBsYXRlc3QgbW92aWUgcmV2aWV3IGhlcmUuXCIvPlxuICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3d3dy5Qb3Bjb3JudGFsZXMuY29tL1wiIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzcuMTQuMy9maXJlYmFzZS1hcHAuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNy4xNC4zL2ZpcmViYXNlLWFuYWx5dGljcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeUFYdUlJTkxuUm13YWN4anlzM0k2eml1U1RxOGxKMGl3OFwiLFxuICAgICAgICAgICAgICAgIGF1dGhEb21haW46IFwicG9wY29ybnRhbGVzLTQwNzY3LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgICAgICAgICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcG9wY29ybnRhbGVzLTQwNzY3LmZpcmViYXNlaW8uY29tXCIsXG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiBcInBvcGNvcm50YWxlcy00MDc2N1wiLFxuICAgICAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicG9wY29ybnRhbGVzLTQwNzY3LmFwcHNwb3QuY29tXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTEyMTM3Nzk0MDUxXCIsXG4gICAgICAgICAgICAgICAgYXBwSWQ6IFwiMTo1MTIxMzc3OTQwNTE6d2ViOmJlNjEyZjJkNmFhN2MzNjhkNGI0MzZcIixcbiAgICAgICAgICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctTEs1REJTQk1UUlwiXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgICAgICAgICAgICBmaXJlYmFzZS5hbmFseXRpY3MoKTtcbiAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgIDxkaXY+XG4gICAgICA8QmFja2Ryb3Agb3Blbj17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICA8L0JhY2tkcm9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxvYWRpbmcgPyAnaGlkZGVuJyA6ICdBcHAnfT5cbiAgICAgIDxBcHBCYXIgaWQ9XCJhcHBCYXJcIiBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFuYWx5dGljc1wiPjxhIGhyZWY9XCIvYW5hbHl0aWNzXCI+PEJhckNoYXJ0SWNvbiBmb250U2l6ZT17XCJsYXJnZVwifSBjb2xvcj17XCJwcmltYXJ5XCJ9Lz48L2E+PC9Ub29sdGlwPlxuICAgICAgICAgIDxoMSBpZD1cInRpdGxlXCI+UG9wY29ybiBUYWxlczwvaDE+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHRUb29sYmFyXCI+XG4gICAgICAgICAgICA8U29jaWFsTWVudS8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIDxQYXBlciBpZD1cImJhbm5lci1jb250YWluZXJcIiBlbGV2YXRpb249ezEwfT5cbiAgICAgICAgPENhcm91c2VsIHNob3dUaHVtYnM9e2ZhbHNlfSBzaG93U3RhdHVzPXtmYWxzZX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFubmVycy5tYXAoYmFubmVyPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtiYW5uZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGF6eUltYWdlICBjbGFzc05hbWU9XCJtb3ZpZS1pbWdcIiBzcmM9e2Jhbm5lci51cmx9IGtleT17YmFubmVyLmlkfSBhbHQ9XCJNb3ZpZSBCYW5uZXJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L1BhcGVyID5cbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezEyfSBpZD1cImZpbHRlckdyaWRcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgIGNsYXNzTmFtZT1cImZpbHRlci1zb3J0XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hGaWVsZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9IG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNofSBwbGFjZWhvbGRlcj1cIk1vdmllIFRpdGxlXCIvPlxuICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxuICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTb3J0XCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpY29uQnRuXCIgb25DbGljaz17dGhpcy5vcGVuU29ydH0gPjxTb3J0SWNvbiBmb250U2l6ZT17XCJsYXJnZVwifSAvPjwvQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkZpbHRlclwiPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiaWNvbkJ0blwiIG9uQ2xpY2s9e3RoaXMub3BlbkZpbHRlcn0gPjxGaWx0ZXJMaXN0SWNvbiBmb250U2l6ZT17XCJsYXJnZVwifSAgLz4gPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgIDxIaWRkZW4gbWRVcD5cbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlNvcnRcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImljb25CdG5cIiBvbkNsaWNrPXt0aGlzLm9wZW5Tb3J0fSA+PFNvcnRJY29uIGZvbnRTaXplPXtcImRlZmF1bHRcIn0gLz48L0J1dHRvbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJGaWx0ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImljb25CdG5cIiBvbkNsaWNrPXt0aGlzLm9wZW5GaWx0ZXJ9PjxGaWx0ZXJMaXN0SWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9IC8+IDwvQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgPFNvcnQgb3Blbj17dGhpcy5zdGF0ZS5zb3J0T3Blbn0gY2xvc2U9eyhkYXRhKT0+dGhpcy5oYW5kbGVTb3J0Q2xvc2UoZGF0YSl9IGRhdGE9e3RoaXMuc3RhdGUuc29ydGVyfS8+XG4gICAgICAgIDxGaWx0ZXIgb3Blbj17dGhpcy5zdGF0ZS5maWx0ZXJPcGVufSBjbG9zZT17KGRhdGEpPT50aGlzLmhhbmRsZUZpbHRlckNsb3NlKGRhdGEpfSBkYXRhPXt0aGlzLnN0YXRlLmZpbHRlcn0gZmlsdGVyRGF0YT17dGhpcy5zdGF0ZS5maWx0ZXJEYXRhfS8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC1Db250ZW50XCI+XG4gICAgICAgIDxHcmlkTGlzdCBjbGFzc05hbWU9XCJjYXJkR3JpZExpc3RcIiAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRMaXN0Lm1hcChpbWFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTGF5b3V0IGtleT17aW1hZ2UudGl0bGV9IHJldmlldz17aW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICApKX0gXG4gICAgICAgIDwvR3JpZExpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPFBhZ2luYXRpb24gIGNvdW50PXt0aGlzLnN0YXRlLnRvdGFsUGFnZXMlOH0gcGFnZT17dGhpcy5zdGF0ZS5hY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZWR9Lz5cblxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIiBpZD1cImZvb3RlclRleHRcIj5cbiAgICAgICAgICAgICAgPGg0IGlkPVwiZmVlZGJhY2tUZXh0XCI+TmVlZCB5b3VyIGZlZWRiYWNrIHRvIGltcHJvdmUgIDwvaDQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86cG9wY29ybnRhbGVzMTlAZ21haWwuY29tXCI+IDxNYWlsSWNvbi8+PC9hPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuZ2V0RmlsdGVyZWREYXRhKHJlc3VsdCl7XG4gIHZhciBsYW5ndWFnZXM9W1wiQWxsXCJdO1xuICB2YXIgeWVhcnMgPVtcIkFsbFwiXTtcbiAgZm9yKHZhciBpPTA7aTxyZXN1bHQubGVuZ3RoO2krKyl7XG4gICAgaWYobGFuZ3VhZ2VzLmluY2x1ZGVzKHJlc3VsdFtpXS5sYW5ndWFnZSkpIGNvbnRpbnVlO1xuICAgIGxhbmd1YWdlcy5wdXNoKHJlc3VsdFtpXS5sYW5ndWFnZSk7fVxuICBmb3IodmFyIGk9MDtpPHJlc3VsdC5sZW5ndGg7aSsrKXtcbiAgICAgIGlmKHllYXJzLmluY2x1ZGVzKHJlc3VsdFtpXS55ZWFyKSkgY29udGludWU7XG4gICAgICB5ZWFycy5wdXNoKHJlc3VsdFtpXS55ZWFyKTt9XG4gIHllYXJzLnNvcnQoKTtcbiAgcmV0dXJuIHtcbiAgICBsYW5ndWFnZXM6bGFuZ3VhZ2VzLFxuICAgIHllYXJzOnllYXJzLFxuICAgIHJhdGluZzpbMC4wLDUuMF1cbiAgfTtcbn1cblxuaGFuZGxlRmlsdGVyQ2xvc2UoZGF0YSl7XG4gIGlmKGRhdGEgPT0gbnVsbCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJPcGVuOmZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciByZXZpZXdzID0gW107XG4gIGZvcih2YXIgaT0wO2k8dGhpcy5zdGF0ZS5hbGxSZXZpZXdzLmxlbmd0aDtpKyspe1xuICAgIHJldmlld3MucHVzaCh0aGlzLnN0YXRlLmFsbFJldmlld3NbaV0pO31cbiAgaWYoZGF0YS5maWx0ZXIubGFuZ3VhZ2UhPVwiQWxsXCIpe1xuICAgIHJldmlld3MgPSByZXZpZXdzLmZpbHRlcihmdW5jdGlvbihyKXtyZXR1cm4gci5sYW5ndWFnZSA9PSBkYXRhLmZpbHRlci5sYW5ndWFnZX0pO31cbiAgaWYoZGF0YS5maWx0ZXIueWVhciE9XCJBbGxcIil7XG4gICAgICByZXZpZXdzID0gcmV2aWV3cy5maWx0ZXIoZnVuY3Rpb24ocil7cmV0dXJuIHIueWVhciA9PSBkYXRhLmZpbHRlci55ZWFyfSk7fVxuICBcbiAgcmV2aWV3cyA9IHJldmlld3MuZmlsdGVyKGZ1bmN0aW9uKHIpe3JldHVybiByLnJhdGluZyA+PSBkYXRhLmZpbHRlci5yYXRpbmdbMF0gJiYgci5yYXRpbmcgPD0gZGF0YS5maWx0ZXIucmF0aW5nWzFdfSk7XG4gICAgXG4gIHZhciBjdXJyZW50UGFnZXMgPSBbXTtcbiAgdmFyIGxlbiA9IChyZXZpZXdzLmxlbmd0aCA+IDgpPzg6cmV2aWV3cy5sZW5ndGg7XG4gIGZvcih2YXIgaT0wO2k8IGxlbiA7aSsrKXtcbiAgICBjdXJyZW50UGFnZXMucHVzaChyZXZpZXdzW2ldKTtcbiAgfVxuICB0aGlzLnNldFN0YXRlKHtcbiAgICBhY3RpdmVQYWdlOiAxLFxuICAgIHRvdGFsUGFnZXM6IHJldmlld3MubGVuZ3RoLFxuICAgIHJldmlld3M6IHJldmlld3MsXG4gICAgY3VycmVudExpc3QgOiBjdXJyZW50UGFnZXMsXG4gICAgbG9hZGluZzpmYWxzZSxcbiAgICBzb3J0T3BlbjpmYWxzZSxcbiAgICBmaWx0ZXJPcGVuOmZhbHNlLFxuICAgIGZpbHRlcjpkYXRhLmZpbHRlcixcbiAgICBzZWFyY2hUZXh0OlwiXCJcbiAgfSk7XG59XG5oYW5kbGVTb3J0Q2xvc2UoZGF0YSl7XG4gIC8vIHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBEYXRlKGIudGltZVN0YW1wKS0gbmV3IERhdGUoYS50aW1lU3RhbXApfSk7XG4gIC8vIHNvcnRlcjp7XG4gIC8vICAgXCJmaWVsZFwiOlwidGltZVN0YW1wXCIsXG4gIC8vICAgXCJzb3J0VHlwZVwiOlwiQXNjZW5kaW5nXCJcbiAgLy8gfVxuICAgICAgaWYoZGF0YS5maWVsZCA9PT0gdGhpcy5zdGF0ZS5zb3J0ZXIuZmllbGQgJiYgZGF0YS5zb3J0VHlwZSA9PT0gdGhpcy5zdGF0ZS5zb3J0ZXIuc29ydFR5cGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3J0T3BlbjpmYWxzZX0pXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZXZpZXdzO1xuICAgICAgaWYodGhpcy5maWVsZCA9PT0gXCJ0aW1lU3RhbXBcIil7XG4gICAgICAgIGlmKGRhdGEuc29ydFR5cGUgPT09IFwiRGVzY2VuZGluZ1wiKVxuICAgICAgICAgIHJldmlld3MgPSB0aGlzLnN0YXRlLnJldmlld3Muc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRGF0ZShiLnRpbWVTdGFtcCktIG5ldyBEYXRlKGEudGltZVN0YW1wKX0pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXZpZXdzID0gdGhpcy5zdGF0ZS5yZXZpZXdzLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApLSBuZXcgRGF0ZShiLnRpbWVTdGFtcCl9KVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgaWYoZGF0YS5zb3J0VHlwZSA9PT0gXCJEZXNjZW5kaW5nXCIpXG4gICAgICAgICAgcmV2aWV3cyA9IHRoaXMuc3RhdGUucmV2aWV3cy5zb3J0KGZ1bmN0aW9uKGEsYil7aWYoYVtkYXRhLmZpZWxkXSA+IGJbZGF0YS5maWVsZF0pIHsgcmV0dXJuIC0xOyB9XG4gICAgICAgICAgaWYoYVtkYXRhLmZpZWxkXSA8IGJbZGF0YS5maWVsZF0pIHsgcmV0dXJuIDE7IH1cbiAgICAgICAgICByZXR1cm4gMDt9KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV2aWV3cyA9IHRoaXMuc3RhdGUucmV2aWV3cy5zb3J0KGZ1bmN0aW9uKGEsYil7aWYoYVtkYXRhLmZpZWxkXSA8IGJbZGF0YS5maWVsZF0pIHsgcmV0dXJuIC0xOyB9XG4gICAgICAgICAgaWYoYVtkYXRhLmZpZWxkXSA+IGJbZGF0YS5maWVsZF0pIHsgcmV0dXJuIDE7IH1cbiAgICAgICAgICByZXR1cm4gMDt9KVxuICAgICAgfVxuICAgICAgdmFyIGN1cnJlbnRQYWdlcyA9IFtdO1xuICAgICAgdmFyIGxlbiA9IChyZXZpZXdzLmxlbmd0aCA+IDgpPzg6cmV2aWV3cy5sZW5ndGg7XG4gICAgICBmb3IodmFyIGk9MDtpPCBsZW4gO2krKyl7XG4gICAgICAgIGN1cnJlbnRQYWdlcy5wdXNoKHJldmlld3NbaV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZVBhZ2U6IDEsXG4gICAgICAgIHRvdGFsUGFnZXM6IHJldmlld3MubGVuZ3RoLFxuICAgICAgICByZXZpZXdzOiByZXZpZXdzLFxuICAgICAgICBjdXJyZW50TGlzdCA6IGN1cnJlbnRQYWdlcyxcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgICAgc29ydE9wZW46ZmFsc2UsXG4gICAgICAgIHNvcnRlcjpkYXRhXG4gICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lzdGFudFBob3RvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CYXJDaGFydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GaWx0ZXJMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvUmF0aW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=