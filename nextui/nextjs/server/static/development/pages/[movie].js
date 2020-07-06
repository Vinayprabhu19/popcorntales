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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cast.js":
/*!****************************!*\
  !*** ./components/Cast.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_LocalMovies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/LocalMovies */ "@material-ui/icons/LocalMovies");
/* harmony import */ var _material_ui_icons_LocalMovies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMovies__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Cast.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Cast extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      cast: this.props.cast
    };
  }

  render() {
    return __jsx("div", {
      className: "cast-component",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    }, __jsx("h3", {
      className: "subsection",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, "Cast"), this.state.cast.map(c => __jsx("div", {
      className: "flexbox-container",
      key: c,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_LocalMovies__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "movieIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 26
      }
    })), __jsx("p", {
      className: "pointerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, c))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cast);

/***/ }),

/***/ "./components/DetailedRating.js":
/*!**************************************!*\
  !*** ./components/DetailedRating.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailedRating; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\DetailedRating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function DetailedRating(props) {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const stars = starCount => {
    if (starCount == undefined) return;
    const value = starCount;
    return __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_3___default.a, {
      name: "customized-color",
      defaultValue: value,
      precision: 0.1,
      value: value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    });
  };

  const actingRating = stars(props.selectedMovie.actingRating);
  const directionRating = stars(props.selectedMovie.directionRating);
  const dialoguesRating = stars(props.selectedMovie.dialoguesRating);
  const scriptRating = stars(props.selectedMovie.scriptRating);
  const editingRating = stars(props.selectedMovie.editingRating);
  const cinematographyRating = stars(props.selectedMovie.cinematographyRating);
  const musicRating = stars(props.selectedMovie.musicRating);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleClick,
    className: "infoBtn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "rating-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, "Script - ", props.selectedMovie.scriptRating, "/5"), scriptRating)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Acting - ", props.selectedMovie.actingRating, "/5"), actingRating)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Direction - ", props.selectedMovie.directionRating, "/5"), directionRating)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Dialogues - ", props.selectedMovie.dialoguesRating, "/5"), dialoguesRating)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Visuals - ", props.selectedMovie.cinematographyRating, "/5"), cinematographyRating)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Editing - ", props.selectedMovie.editingRating, "/5"), editingRating)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Music - ", props.selectedMovie.musicRating, "/5"), musicRating))));
}

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

/***/ "./components/Review.js":
/*!******************************!*\
  !*** ./components/Review.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Beenhere */ "@material-ui/icons/Beenhere");
/* harmony import */ var _material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "@material-ui/icons/Cancel");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Review.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Review extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      pros: props.review.pros,
      cons: props.review.cons,
      url: "https://api.popcorntales.com/image?object=Graph/" + props.title + ".png&width=500&height=500"
    };
  }

  render() {
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
    }, "What worked well?"), this.state.pros.map(pro => __jsx("div", {
      className: "flexbox-container",
      key: pro,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "checkIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 26
      }
    })), __jsx("p", {
      className: "pointerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, pro))), __jsx("h4", {
      className: "subsection",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, "What didn't work well?"), this.state.cons.map(con => __jsx("div", {
      className: "flexbox-container",
      key: con,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "cancelIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 26
      }
    })), __jsx("p", {
      className: "pointerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, con))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      justify: "center",
      className: "graphContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      elevation: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Review);

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

/***/ "./components/Synopsis.js":
/*!********************************!*\
  !*** ./components/Synopsis.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Synopsis.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Synopisis extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      synopsis: props.synopsis
    };
  }

  render() {
    return __jsx("div", {
      className: "review-component",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 12
      }
    }, this.state.synopsis.split("\n").map(para => __jsx("p", {
      key: para,
      className: "synopsis",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, para)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Synopisis);

/***/ }),

/***/ "./components/Ticket.js":
/*!******************************!*\
  !*** ./components/Ticket.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\components\\Ticket.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Cast extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    props.ticketDetails.watchDate = new Date(props.ticketDetails.watchDate).toDateString();
    if (!this.props.ticketDetails.ticketImage.startsWith("https://api.popcorntales.com/image?object=")) this.props.ticketDetails.ticketImage = "https://api.popcorntales.com/image?object=" + this.props.ticketDetails.ticketImage;
    this.state = {
      ticketDetails: this.props.ticketDetails
    };
  }

  render() {
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
    }, "Place Watched : ", this.state.ticketDetails.placeWatched), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Cast);

/***/ }),

/***/ "./pages/[movie].js":
/*!**************************!*\
  !*** ./pages/[movie].js ***!
  \**************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Synopsis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Synopsis */ "./components/Synopsis.js");
/* harmony import */ var _components_Review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Review */ "./components/Review.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Cast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Cast */ "./components/Cast.js");
/* harmony import */ var _components_Ticket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Ticket */ "./components/Ticket.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SocialMenu */ "./components/SocialMenu.js");
/* harmony import */ var _components_DetailedRating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/DetailedRating */ "./components/DetailedRating.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\popcorntales\\nextui\\pages\\[movie].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const StyledRating = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["withStyles"])({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_16___default.a);
async function getServerSideProps(context) {
  var resMovie = await fetch(`https://api.popcorntales.com/movie`);
  var movies = await resMovie.json();
  var titles = movies.map(function (a) {
    return a.title;
  });
  var title = context.params.movie;

  if (!titles.includes(title)) {
    var failureStatus = true;

    if (true) {
      context.res.writeHead(302, {
        location: '/'
      });
      context.res.end();
      return {
        props: {
          failureStatus
        }
      };
    } else {}

    return {};
  }

  const res = await fetch(`https://api.popcorntales.com/moviereview?movie=` + context.params.movie);
  const movie = await res.json();
  return {
    props: {
      movie
    }
  }; //this.props.history.push('/');
}

class Detail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "getToolbar", () => {
      switch (this.state.selectedTab) {
        case 0:
          if (this.state.selectedMovie.review !== undefined) return __jsx(_components_Synopsis__WEBPACK_IMPORTED_MODULE_6__["default"], {
            synopsis: this.state.selectedMovie.review.synopsis,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 20
            }
          });
          break;

        case 1:
          if (this.state.selectedMovie.review !== undefined) return __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_7__["default"], {
            review: this.state.selectedMovie.review,
            title: this.state.selectedMovie.title,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 20
            }
          });
          break;

        case 2:
          return __jsx(_components_Cast__WEBPACK_IMPORTED_MODULE_11__["default"], {
            cast: this.state.selectedMovie.cast,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 18
            }
          });
          break;

        case 3:
          return __jsx(_components_Ticket__WEBPACK_IMPORTED_MODULE_12__["default"], {
            ticketDetails: this.state.selectedMovie.ticketDetails,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 18
            }
          });
          break;

        default:
          {
            return __jsx("p", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 20
              }
            });
          }
      }
    });

    _defineProperty(this, "hearts", starCount => {
      if (starCount == undefined) return;
      const value = starCount;
      return __jsx(StyledRating, {
        name: "customized-color",
        defaultValue: value,
        precision: 0.1,
        value: value,
        icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_18___default.a, {
          fontSize: "inherit",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 27
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }
      });
    });

    var result = props.movie;
    if (typeof result.review == "string") result.review = JSON.parse(result.review);
    if (typeof result.ticketDetails == "string") result.ticketDetails = JSON.parse(result.ticketDetails);
    var movieTitle = result.title;

    if (movieTitle == undefined) {
      movieTitle = "Popcorn Tales";
    }

    this.state = {
      loading: true,
      shareUrl: "www.popcorntales.com",
      tags: "#popcorntales #movietime #moviereview #popcorn #letswatch",
      selectedMovie: result,
      selectedTab: 0,
      loading: false,
      shareUrl: "www.popcorntales.com/review/" + movieTitle.replace(/ /g, '%20'),
      quote: "I read a review of " + movieTitle + " and I feel that it's worth watching. Read the review and let's watch it together!!"
    };
  }

  handleChange(v) {
    this.setState({
      selectedTab: v
    });
  }

  render() {
    const toolbar = this.getToolbar();
    const overallRating = this.hearts(this.state.selectedMovie.rating);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 8
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }
    }, this.state.selectedMovie.title + " Review " + this.state.selectedMovie.rating + "/5"), __jsx("meta", {
      name: "description",
      content: this.state.selectedMovie.review.synopsis,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    }), __jsx("link", {
      async: true,
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }), __jsx("link", {
      async: true,
      rel: "canonical",
      href: "https://www.Popcorntales.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
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
              firebase.analytics(); `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }
    }), " "), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 5
      }
    }, __jsx("div", {
      id: "container",
      className: this.state.loading ? 'hidden' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "appBar",
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "toolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 25
      }
    })), __jsx("h1", {
      id: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, "Popcorn Tales"), __jsx("section", {
      className: "rightToolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }, __jsx(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    })))), __jsx("div", {
      className: "movie-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
      elevation: 19,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "card-img",
      alt: "Popcorn Tales " + this.state.selectedMovie.title + " Review Image",
      src: this.state.selectedMovie.titleImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      className: "ratingHearts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 15
      }
    }, overallRating))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      mdUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "topHeader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      alignItems: "center",
      spacing: 0,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }, __jsx("h1", {
      className: "headerLevel1 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 19
      }
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), __jsx(_components_DetailedRating__WEBPACK_IMPORTED_MODULE_15__["default"], {
      selectedMovie: this.state.selectedMovie,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 19
      }
    })), __jsx("h3", {
      className: "headerLevel2 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 19
      }
    }, this.state.selectedMovie.language), __jsx("h3", {
      className: "headerLevel2 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 19
      }
    }, this.state.selectedMovie.genre.join(",")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }
    }, overallRating))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "movie-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      alignItems: "center",
      spacing: 0,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }
    }, __jsx("h1", {
      className: "headerLevel1 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 19
      }
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), __jsx(_components_DetailedRating__WEBPACK_IMPORTED_MODULE_15__["default"], {
      selectedMovie: this.state.selectedMovie,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 19
      }
    })), __jsx("h2", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, this.state.selectedMovie.language), __jsx("h3", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, this.state.selectedMovie.genre.join(",")), __jsx("h3", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, this.state.selectedMovie.rating, "/5"), __jsx("div", {
      className: "icon-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterShareButton"], {
      url: this.state.shareUrl,
      quote: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 118
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      hashtag: this.state.tags,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 145
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 119
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 119
      }
    }))))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      mdDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "trailer_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }, __jsx("iframe", {
      id: "trailer",
      title: this.state.selectedMovie,
      src: this.state.selectedMovie.trailer,
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 19
      }
    })))), __jsx("div", {
      className: "movie-detail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
      elevation: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: (e, v) => {
        this.handleChange(v);
      },
      value: this.state.selectedTab,
      variant: "fullWidth",
      "aria-label": "simple tabs example",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 0,
      label: "Review",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 1,
      label: "Hit & Miss",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 2,
      label: "Cast & Crew",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 3,
      label: "Ticket",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 15
      }
    })))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, toolbar)), __jsx("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      smUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      className: "icon-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 120
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookShareButton"], {
      url: this.state.shareUrl,
      quote: this.state.quote,
      hashtag: this.state.tags,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 147
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 121
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 121
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 15
      }
    }, __jsx("h4", {
      id: "feedbackText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 15
      }
    }, "Need your feedback to improve  "), __jsx("a", {
      href: "mailto:popcorntales19@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 15
      }
    }, " ", __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 58
      }
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/[movie].js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vinay\Desktop\popcorntales\nextui\pages\[movie].js */"./pages/[movie].js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

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

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

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

/***/ "@material-ui/icons/Beenhere":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Beenhere" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Beenhere");

/***/ }),

/***/ "@material-ui/icons/Cancel":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cancel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

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

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "@material-ui/icons/LocalMovies":
/*!*************************************************!*\
  !*** external "@material-ui/icons/LocalMovies" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalMovies");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsZWRSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXp5SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3lub3BzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaWNrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21vdmllXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmVlbmhlcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNb3ZpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2hhcmVcIiJdLCJuYW1lcyI6WyJDYXN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2FzdCIsInJlbmRlciIsIm1hcCIsImMiLCJEZXRhaWxlZFJhdGluZyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInN0YXJzIiwic3RhckNvdW50IiwidW5kZWZpbmVkIiwidmFsdWUiLCJhY3RpbmdSYXRpbmciLCJzZWxlY3RlZE1vdmllIiwiZGlyZWN0aW9uUmF0aW5nIiwiZGlhbG9ndWVzUmF0aW5nIiwic2NyaXB0UmF0aW5nIiwiZWRpdGluZ1JhdGluZyIsImNpbmVtYXRvZ3JhcGh5UmF0aW5nIiwibXVzaWNSYXRpbmciLCJCb29sZWFuIiwiTGF6eUltYWdlIiwibG9hZGVkIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCIsImltZyIsIkltYWdlIiwib25sb2FkIiwic2V0U3RhdGUiLCJvbmVycm9yIiwic3JjIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ1bmxvYWRlZFNyYyIsImFsdCIsIlJldmlldyIsInByb3MiLCJyZXZpZXciLCJjb25zIiwidXJsIiwidGl0bGUiLCJwcm8iLCJjb24iLCJTb2NpYWxNZW51IiwiU3lub3Bpc2lzIiwic3lub3BzaXMiLCJzcGxpdCIsInBhcmEiLCJ0aWNrZXREZXRhaWxzIiwid2F0Y2hEYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInRpY2tldEltYWdlIiwic3RhcnRzV2l0aCIsInBsYWNlV2F0Y2hlZCIsIlN0eWxlZFJhdGluZyIsIndpdGhTdHlsZXMiLCJpY29uRmlsbGVkIiwiY29sb3IiLCJpY29uSG92ZXIiLCJSYXRpbmciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzTW92aWUiLCJmZXRjaCIsIm1vdmllcyIsImpzb24iLCJ0aXRsZXMiLCJhIiwicGFyYW1zIiwibW92aWUiLCJpbmNsdWRlcyIsImZhaWx1cmVTdGF0dXMiLCJyZXMiLCJ3cml0ZUhlYWQiLCJsb2NhdGlvbiIsImVuZCIsIkRldGFpbCIsInNlbGVjdGVkVGFiIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwibW92aWVUaXRsZSIsImxvYWRpbmciLCJzaGFyZVVybCIsInRhZ3MiLCJyZXBsYWNlIiwicXVvdGUiLCJoYW5kbGVDaGFuZ2UiLCJ2IiwidG9vbGJhciIsImdldFRvb2xiYXIiLCJvdmVyYWxsUmF0aW5nIiwiaGVhcnRzIiwicmF0aW5nIiwiX19odG1sIiwidGl0bGVJbWFnZSIsInllYXIiLCJsYW5ndWFnZSIsImdlbnJlIiwiam9pbiIsInRyYWlsZXIiLCJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLElBQU4sU0FBbUJDLCtDQUFuQixDQUE2QjtBQUN6QkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FB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TWhCVixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlRQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcW21vdmllXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2NhbE1vdmllc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTW92aWVzJztcclxuXHJcbmNsYXNzIENhc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIGNhc3Q6dGhpcy5wcm9wcy5jYXN0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1jb21wb25lbnRcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3Vic2VjdGlvblwiPkNhc3Q8L2gzPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXN0Lm1hcChjPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhib3gtY29udGFpbmVyXCIga2V5PXtjfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxMb2NhbE1vdmllc0ljb24gY2xhc3NOYW1lPVwibW92aWVJY29uXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyVGV4dFwiPntjfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmcnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGVkUmF0aW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IHN0YXJzID0gKHN0YXJDb3VudCkgPT4ge1xyXG4gICAgaWYoc3RhckNvdW50ID09IHVuZGVmaW5lZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdGFyQ291bnQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFJhdGluZyBuYW1lPVwiY3VzdG9taXplZC1jb2xvclwiIGRlZmF1bHRWYWx1ZT17dmFsdWV9IHByZWNpc2lvbj17MC4xfSB2YWx1ZT17dmFsdWV9Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhY3RpbmdSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLmFjdGluZ1JhdGluZyk7XHJcbiAgY29uc3QgZGlyZWN0aW9uUmF0aW5nID0gc3RhcnMocHJvcHMuc2VsZWN0ZWRNb3ZpZS5kaXJlY3Rpb25SYXRpbmcpO1xyXG4gIGNvbnN0IGRpYWxvZ3Vlc1JhdGluZyA9IHN0YXJzKHByb3BzLnNlbGVjdGVkTW92aWUuZGlhbG9ndWVzUmF0aW5nKTtcclxuICBjb25zdCBzY3JpcHRSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLnNjcmlwdFJhdGluZyk7XHJcbiAgY29uc3QgZWRpdGluZ1JhdGluZyA9IHN0YXJzKHByb3BzLnNlbGVjdGVkTW92aWUuZWRpdGluZ1JhdGluZyk7XHJcbiAgY29uc3QgY2luZW1hdG9ncmFwaHlSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLmNpbmVtYXRvZ3JhcGh5UmF0aW5nKTtcclxuICBjb25zdCBtdXNpY1JhdGluZyA9IHN0YXJzKHByb3BzLnNlbGVjdGVkTW92aWUubXVzaWNSYXRpbmcpO1xyXG4gIHJldHVybiAoIDxkaXY+XHJcbiAgICAgICAgPEluZm9JY29uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJpbmZvQnRuXCIvPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPVwicmF0aW5nLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgPGg1PlNjcmlwdCAtIHtwcm9wcy5zZWxlY3RlZE1vdmllLnNjcmlwdFJhdGluZ30vNTwvaDU+XHJcbiAgICAgICAgICAgIHtzY3JpcHRSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PkFjdGluZyAtIHtwcm9wcy5zZWxlY3RlZE1vdmllLmFjdGluZ1JhdGluZ30vNTwvaDU+XHJcbiAgICAgICAgICAgIHthY3RpbmdSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PkRpcmVjdGlvbiAtIHtwcm9wcy5zZWxlY3RlZE1vdmllLmRpcmVjdGlvblJhdGluZ30vNTwvaDU+XHJcbiAgICAgICAgICAgIHtkaXJlY3Rpb25SYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PkRpYWxvZ3VlcyAtIHtwcm9wcy5zZWxlY3RlZE1vdmllLmRpYWxvZ3Vlc1JhdGluZ30vNTwvaDU+XHJcbiAgICAgICAgICAgIHtkaWFsb2d1ZXNSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PlZpc3VhbHMgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5jaW5lbWF0b2dyYXBoeVJhdGluZ30vNTwvaDU+XHJcbiAgICAgICAgICAgIHtjaW5lbWF0b2dyYXBoeVJhdGluZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT4gXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDU+RWRpdGluZyAtIHtwcm9wcy5zZWxlY3RlZE1vdmllLmVkaXRpbmdSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7ZWRpdGluZ1JhdGluZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT4gXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDU+TXVzaWMgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5tdXNpY1JhdGluZ30vNTwvaDU+XHJcbiAgICAgICAgICAgIHttdXNpY1JhdGluZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICAgIGltZy5zcmMgPSB0aGlzLnByb3BzLnNyYztcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxyXG4gICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnVubG9hZGVkU3JjfVxyXG4gICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdH0gLz5cclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5sb2FkZWQpIHtcclxuICAgICAgICByZXR1cm4gPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxyXG4gICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnVubG9hZGVkU3JjfVxyXG4gICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdH0gLz5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cclxuICAgICAgICBhbHQ9e3RoaXMucHJvcHMuYWx0fSAvPlxyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmVlbmhlcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CZWVuaGVyZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYW5jZWwnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXp5SW1hZ2VcIjtcclxuY2xhc3MgUmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBwcm9zIDogcHJvcHMucmV2aWV3LnByb3MsXHJcbiAgICAgICAgICAgIGNvbnMgOiBwcm9wcy5yZXZpZXcuY29ucyxcclxuICAgICAgICAgICAgdXJsIDogXCJodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL2ltYWdlP29iamVjdD1HcmFwaC9cIitwcm9wcy50aXRsZStcIi5wbmcmd2lkdGg9NTAwJmhlaWdodD01MDBcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jb21wb25lbnRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3Vic2VjdGlvblwiPldoYXQgd29ya2VkIHdlbGw/PC9oND5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcy5tYXAocHJvPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhib3gtY29udGFpbmVyXCIga2V5PXtwcm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PEJlZW5oZXJlSWNvbiBjbGFzc05hbWU9XCJjaGVja0ljb25cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvaW50ZXJUZXh0XCI+e3Byb308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1YnNlY3Rpb25cIj5XaGF0IGRpZG4ndCB3b3JrIHdlbGw/PC9oND5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY29ucy5tYXAoY29uPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhib3gtY29udGFpbmVyXCIga2V5PXtjb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PENhbmNlbEljb24gY2xhc3NOYW1lPVwiY2FuY2VsSWNvblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlclRleHRcIj57Y29ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgY2xhc3NOYW1lPVwiZ3JhcGhDb250YWluZXJcIj5cclxuICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsxMH0+XHJcbiAgICAgICAgPExhenlJbWFnZSBzcmM9e3RoaXMuc3RhdGUudXJsfSBjbGFzc05hbWU9XCJncmFwaEltYWdlXCIgYWx0PXtcIlBvcGNvcm4gVGFsZXMgXCIgKyB0aGlzLnByb3BzLnRpdGxlfS8+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlldztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEFzc2lzdGFudFBob3RvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG8nO1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJztcclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29jaWFsTWVudSgpIHtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwic29jaWFsLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICA8QXNzaXN0YW50UGhvdG9JY29uIGNvbG9yPXtcInByaW1hcnlcIn0gZm9udFNpemU9e1wiZGVmYXVsdFwifS8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPVwic29jaWFsLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICB7LyogPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT4gXHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL1BvcGNvcm5UYWxlc3NcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9Lz5cclxuICAgICAgICAgIDwvYT48L01lbnVJdGVtPiAqL31cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcG9wY29ybnRhbGVzXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cclxuICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIGZvbnRTaXplPXtcImRlZmF1bHRcIn0vPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wb3Bjb3JudGFsZXNzXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cclxuICAgICAgICAgICAgICA8SW5zdGFncmFtSWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9Lz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFN5bm9waXNpcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzeW5vcHNpcyA6IHByb3BzLnN5bm9wc2lzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNvbXBvbmVudFwiPlxyXG4gICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN5bm9wc2lzLnNwbGl0KFwiXFxuXCIpLm1hcChwYXJhID0+KFxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXtwYXJhfSBjbGFzc05hbWU9XCJzeW5vcHNpc1wiPntwYXJhfTwvcD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgIH0gXHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5bm9waXNpcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBMYXp5SW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF6eUltYWdlXCI7XHJcbmNsYXNzIENhc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgcHJvcHMudGlja2V0RGV0YWlscy53YXRjaERhdGU9bmV3IERhdGUocHJvcHMudGlja2V0RGV0YWlscy53YXRjaERhdGUpLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnRpY2tldERldGFpbHMudGlja2V0SW1hZ2Uuc3RhcnRzV2l0aChcImh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vaW1hZ2U/b2JqZWN0PVwiKSlcclxuICAgICAgICAgIHRoaXMucHJvcHMudGlja2V0RGV0YWlscy50aWNrZXRJbWFnZSA9IFwiaHR0cHM6Ly9hcGkucG9wY29ybnRhbGVzLmNvbS9pbWFnZT9vYmplY3Q9XCIrdGhpcy5wcm9wcy50aWNrZXREZXRhaWxzLnRpY2tldEltYWdlO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICB0aWNrZXREZXRhaWxzOnRoaXMucHJvcHMudGlja2V0RGV0YWlsc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0LWNvbXBvbmVudFwiPlxyXG4gICAgICA8aDUgY2xhc3NOYW1lPVwiVGlja2V0XCI+RGF0ZSBXYXRjaGVkIDoge3RoaXMuc3RhdGUudGlja2V0RGV0YWlscy53YXRjaERhdGV9PC9oNT5cclxuICAgICAgIDxoNSBjbGFzc05hbWU9XCJUaWNrZXRcIj5QbGFjZSBXYXRjaGVkIDoge3RoaXMuc3RhdGUudGlja2V0RGV0YWlscy5wbGFjZVdhdGNoZWR9PC9oNT5cclxuICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIj5cclxuICAgICAgIDxkaXYgaWQ9XCJ0aWNrZXQtY29udGFpbmVyXCI+XHJcbiAgICAgICA8TGF6eUltYWdlIHNyYz17dGhpcy5zdGF0ZS50aWNrZXREZXRhaWxzLnRpY2tldEltYWdlfSBjbGFzc05hbWU9XCJ0aWNrZXRJbWFnZVwiIGFsdD17XCJUaWNrZXQgaW1hZ2Ugb2YgdGhlIG1vdmllXCJ9Lz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcclxuaW1wb3J0IEhvbWVCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnO1xyXG5pbXBvcnQgU3lub3BzaXMgZnJvbSAnLi4vY29tcG9uZW50cy9TeW5vcHNpcyc7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9SZXZpZXcnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9jb21wb25lbnRzL0Nhc3QnO1xyXG5pbXBvcnQgVGlja2V0IGZyb20gJy4uL2NvbXBvbmVudHMvVGlja2V0JztcclxuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcclxuaW1wb3J0IFNvY2lhbE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxNZW51JztcclxuaW1wb3J0IERldGFpbGVkUmF0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWlsZWRSYXRpbmcnO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXp5SW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxyXG4gIFRlbGVncmFtU2hhcmVCdXR0b24sXHJcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gIFdoYXRzYXBwU2hhcmVCdXR0b24sXHJcbiAgRmFjZWJvb2tJY29uLFxyXG4gIFdoYXRzYXBwSWNvbixcclxuICBUZWxlZ3JhbUljb24sXHJcbiAgVHdpdHRlckljb25cclxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcclxuXHJcbmNvbnN0IFN0eWxlZFJhdGluZyA9IHdpdGhTdHlsZXMoe1xyXG4gIGljb25GaWxsZWQ6IHtcclxuICAgIGNvbG9yOiAnI2ZmNmQ3NScsXHJcbiAgfSxcclxuICBpY29uSG92ZXI6IHtcclxuICAgIGNvbG9yOiAnI2ZmM2Q0NycsXHJcbiAgfSxcclxufSkoUmF0aW5nKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKGNvbnRleHQpe1xyXG4gICAgdmFyIHJlc01vdmllID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vbW92aWVgKTtcclxuICAgIHZhciBtb3ZpZXMgPSBhd2FpdCByZXNNb3ZpZS5qc29uKCk7XHJcbiAgICB2YXIgdGl0bGVzID0gbW92aWVzLm1hcChmdW5jdGlvbihhKSB7cmV0dXJuIGEudGl0bGU7fSk7XHJcbiAgICB2YXIgdGl0bGU9Y29udGV4dC5wYXJhbXMubW92aWU7XHJcbiAgICBpZighdGl0bGVzLmluY2x1ZGVzKHRpdGxlKSl7XHJcbiAgICAgIHZhciBmYWlsdXJlU3RhdHVzPXRydWU7XHJcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICBjb250ZXh0LnJlcy53cml0ZUhlYWQoMzAyLCB7bG9jYXRpb246ICcvJ30pXHJcbiAgICAgICAgY29udGV4dC5yZXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZhaWx1cmVTdGF0dXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE9uIGNsaWVudFxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge31cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkucG9wY29ybnRhbGVzLmNvbS9tb3ZpZXJldmlldz9tb3ZpZT1gK2NvbnRleHQucGFyYW1zLm1vdmllKTtcclxuICAgIGNvbnN0IG1vdmllID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW92aWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgfVxyXG5jbGFzcyBEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB2YXIgcmVzdWx0ID0gcHJvcHMubW92aWU7XHJcbiAgICBpZih0eXBlb2YocmVzdWx0LnJldmlldykgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXN1bHQucmV2aWV3PUpTT04ucGFyc2UocmVzdWx0LnJldmlldyk7XHJcbiAgICBpZih0eXBlb2YocmVzdWx0LnRpY2tldERldGFpbHMpID09IFwic3RyaW5nXCIpXHJcbiAgICByZXN1bHQudGlja2V0RGV0YWlscyA9IEpTT04ucGFyc2UocmVzdWx0LnRpY2tldERldGFpbHMpO1xyXG4gICAgdmFyIG1vdmllVGl0bGUgPSByZXN1bHQudGl0bGU7XHJcblxyXG4gICAgaWYobW92aWVUaXRsZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICBtb3ZpZVRpdGxlPVwiUG9wY29ybiBUYWxlc1wiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkaW5nOnRydWUsXHJcbiAgICAgICAgc2hhcmVVcmw6XCJ3d3cucG9wY29ybnRhbGVzLmNvbVwiLFxyXG4gICAgICAgIHRhZ3M6XCIjcG9wY29ybnRhbGVzICNtb3ZpZXRpbWUgI21vdmllcmV2aWV3ICNwb3Bjb3JuICNsZXRzd2F0Y2hcIixcclxuICAgICAgICBzZWxlY3RlZE1vdmllIDogcmVzdWx0LFxyXG4gICAgICAgIHNlbGVjdGVkVGFiOjAsXHJcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcclxuICAgICAgICBzaGFyZVVybDpcInd3dy5wb3Bjb3JudGFsZXMuY29tL3Jldmlldy9cIittb3ZpZVRpdGxlLnJlcGxhY2UoLyAvZywgJyUyMCcpLFxyXG4gICAgICAgIHF1b3RlOlwiSSByZWFkIGEgcmV2aWV3IG9mIFwiK21vdmllVGl0bGUrXCIgYW5kIEkgZmVlbCB0aGF0IGl0J3Mgd29ydGggd2F0Y2hpbmcuIFJlYWQgdGhlIHJldmlldyBhbmQgbGV0J3Mgd2F0Y2ggaXQgdG9nZXRoZXIhIVwiXHJcbiAgICAgICAgICBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2Uodil7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRUYWI6dlxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFRvb2xiYXIgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2godGhpcy5zdGF0ZS5zZWxlY3RlZFRhYikge1xyXG4gICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUucmV2aWV3ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiA8U3lub3BzaXMgc3lub3BzaXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yZXZpZXcuc3lub3BzaXN9Lz5cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6IFxyXG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJldmlldyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gPFJldmlldyByZXZpZXc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yZXZpZXd9IHRpdGxlPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudGl0bGV9Lz5cclxuICAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjogXHJcbiAgICAgICAgICByZXR1cm4gPENhc3QgY2FzdD17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLmNhc3R9Lz5cclxuICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOiBcclxuICAgICAgICAgIHJldHVybiA8VGlja2V0IHRpY2tldERldGFpbHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aWNrZXREZXRhaWxzfS8+XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gPHA+PC9wPlxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufTtcclxuXHJcbmhlYXJ0cyA9IChzdGFyQ291bnQpID0+IHtcclxuICBpZihzdGFyQ291bnQgPT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuO1xyXG4gIGNvbnN0IHZhbHVlID0gc3RhckNvdW50O1xyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFJhdGluZyBuYW1lPVwiY3VzdG9taXplZC1jb2xvclwiIGRlZmF1bHRWYWx1ZT17dmFsdWV9IHByZWNpc2lvbj17MC4xfSB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxGYXZvcml0ZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz59Lz5cclxuICApO1xyXG59XHJcblxyXG5yZW5kZXIoKXtcclxuICBjb25zdCB0b29sYmFyID0gdGhpcy5nZXRUb29sYmFyKCk7XHJcbiAgY29uc3Qgb3ZlcmFsbFJhdGluZyA9IHRoaXMuaGVhcnRzKHRoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yYXRpbmcpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZSArIFwiIFJldmlldyBcIit0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUucmF0aW5nK1wiLzVcIn08L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJldmlldy5zeW5vcHNpc30vPlxyXG4gICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiAgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vd3d3LlBvcGNvcm50YWxlcy5jb20vXCIgLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy83LjE0LjMvZmlyZWJhc2UtYXBwLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNy4xNC4zL2ZpcmViYXNlLWFuYWx5dGljcy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICAgIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lBWHVJSU5MblJtd2FjeGp5czNJNnppdVNUcThsSjBpdzhcIixcclxuICAgICAgICAgICAgICAgIGF1dGhEb21haW46IFwicG9wY29ybnRhbGVzLTQwNzY3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wb3Bjb3JudGFsZXMtNDA3NjcuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZDogXCJwb3Bjb3JudGFsZXMtNDA3NjdcIixcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicG9wY29ybnRhbGVzLTQwNzY3LmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MTIxMzc3OTQwNTFcIixcclxuICAgICAgICAgICAgICAgIGFwcElkOiBcIjE6NTEyMTM3Nzk0MDUxOndlYjpiZTYxMmYyZDZhYTdjMzY4ZDRiNDM2XCIsXHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctTEs1REJTQk1UUlwiXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5hbmFseXRpY3MoKTsgYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L3NjcmlwdD4gPC9IZWFkPlxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubG9hZGluZyA/ICdoaWRkZW4nIDogJyd9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxBcHBCYXIgaWQ9XCJhcHBCYXJcIiBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyIGlkPVwidG9vbGJhclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxIb21lQnV0dG9uLz48L2E+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cInRpdGxlXCI+UG9wY29ybiBUYWxlczwvaDE+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJpZ2h0VG9vbGJhclwiPlxyXG4gICAgICAgICAgICA8U29jaWFsTWVudS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZFwiID5cclxuICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsxOX0+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIGFsdD17XCJQb3Bjb3JuIFRhbGVzIFwiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnRpdGxlICsgXCIgUmV2aWV3IEltYWdlXCJ9IHNyYz17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnRpdGxlSW1hZ2V9Lz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIiBjbGFzc05hbWU9XCJyYXRpbmdIZWFydHNcIj5cclxuICAgICAgICAgICAgICAgICB7b3ZlcmFsbFJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEhpZGRlbiBtZFVwID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezB9IGp1c3RpZnkgPSBcImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyTGV2ZWwxIGNlbnRlckFsaWduZWRcIj57dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnRpdGxlfSAoe3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS55ZWFyfSk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8RGV0YWlsZWRSYXRpbmcgc2VsZWN0ZWRNb3ZpZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllfS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMiBjZW50ZXJBbGlnbmVkXCIgPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUubGFuZ3VhZ2V9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMiBjZW50ZXJBbGlnbmVkXCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5nZW5yZS5qb2luKFwiLFwiKX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtvdmVyYWxsUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPEhpZGRlbiBzbURvd24+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb3ZpZS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXswfSBqdXN0aWZ5ID0gXCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMSBjZW50ZXJBbGlnbmVkXCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZX0gKHt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUueWVhcn0pPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPERldGFpbGVkUmF0aW5nIHNlbGVjdGVkTW92aWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZX0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyTGV2ZWwyXCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5sYW5ndWFnZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMlwiPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUuZ2VucmUuam9pbihcIixcIil9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDJcIj57dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJhdGluZ30vNTwvaDM+ICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uIHVybD17dGhpcy5zdGF0ZS5zaGFyZVVybH0gcXVvdGU9e3RoaXMuc3RhdGUucXVvdGV9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PFR3aXR0ZXJJY29uIHNpemU9ezI4fSByb3VuZC8+PC9Ud2l0dGVyU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBoYXNodGFnPXt0aGlzLnN0YXRlLnRhZ3N9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PEZhY2Vib29rSWNvbiBzaXplPXsyOH0gcm91bmQvPjwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxXaGF0c2FwcFNoYXJlQnV0dG9uIHVybD17dGhpcy5zdGF0ZS5zaGFyZVVybH0gdGl0bGU9e3RoaXMuc3RhdGUucXVvdGV9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PFdoYXRzYXBwSWNvbiBzaXplPXsyOH0gcm91bmQvPjwvV2hhdHNhcHBTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUZWxlZ3JhbVNoYXJlQnV0dG9uIHVybD17dGhpcy5zdGF0ZS5zaGFyZVVybH0gdGl0bGU9e3RoaXMuc3RhdGUucXVvdGV9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PFRlbGVncmFtSWNvbiBzaXplPXsyOH0gcm91bmQvPjwvVGVsZWdyYW1TaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidHJhaWxlcl9kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGlmcmFtZSBpZD1cInRyYWlsZXJcIiB0aXRsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllfSBzcmM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50cmFpbGVyfVxyXG4gICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWRldGFpbFwiPlxyXG4gICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17OH0+XHJcbiAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgICAgIDxUYWJzIG9uQ2hhbmdlPXsoZSx2KT0+e3RoaXMuaGFuZGxlQ2hhbmdlKHYpfX0gIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFifSB2YXJpYW50PVwiZnVsbFdpZHRoXCIgYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJzIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICA8VGFiIHZhbHVlPXswfSBsYWJlbD1cIlJldmlld1wiIGNsYXNzTmFtZT1cInRhYlwiLz5cclxuICAgICAgICAgICAgICA8VGFiIHZhbHVlPXsxfSBsYWJlbD1cIkhpdCAmIE1pc3NcIiBjbGFzc05hbWU9XCJ0YWJcIi8+XHJcbiAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17Mn0gbGFiZWw9XCJDYXN0ICYgQ3Jld1wiIGNsYXNzTmFtZT1cInRhYlwiLz5cclxuICAgICAgICAgICAgICA8VGFiIHZhbHVlPXszfSBsYWJlbD1cIlRpY2tldFwiIGNsYXNzTmFtZT1cInRhYlwiLz5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHt0b29sYmFyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJUZXh0XCI+IFxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uIHVybD17dGhpcy5zdGF0ZS5zaGFyZVVybH0gdGl0bGU9e3RoaXMuc3RhdGUucXVvdGV9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PFR3aXR0ZXJJY29uIHNpemU9ezI1fSByb3VuZC8+PC9Ud2l0dGVyU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uIHVybD17dGhpcy5zdGF0ZS5zaGFyZVVybH0gcXVvdGU9e3RoaXMuc3RhdGUucXVvdGV9IGhhc2h0YWc9e3RoaXMuc3RhdGUudGFnc30gY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb25cIj48RmFjZWJvb2tJY29uIHNpemU9ezI1fSByb3VuZC8+PC9GYWNlYm9va1NoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxXaGF0c2FwcEljb24gc2l6ZT17MjV9IHJvdW5kLz48L1doYXRzYXBwU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxUZWxlZ3JhbVNoYXJlQnV0dG9uIHVybD17dGhpcy5zdGF0ZS5zaGFyZVVybH0gdGl0bGU9e3RoaXMuc3RhdGUucXVvdGV9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PFRlbGVncmFtSWNvbiBzaXplPXsyNX0gcm91bmQvPjwvVGVsZWdyYW1TaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIiBpZD1cImZvb3RlclRleHRcIj5cclxuICAgICAgICAgICAgICA8aDQgaWQ9XCJmZWVkYmFja1RleHRcIj5OZWVkIHlvdXIgZmVlZGJhY2sgdG8gaW1wcm92ZSAgPC9oND5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnBvcGNvcm50YWxlczE5QGdtYWlsLmNvbVwiPiA8TWFpbEljb24vPjwvYT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lzdGFudFBob3RvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CZWVuaGVyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luZm9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNb3ZpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNoYXJlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=