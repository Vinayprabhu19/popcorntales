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
              lineNumber: 135,
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
              lineNumber: 139,
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
              lineNumber: 142,
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
              lineNumber: 145,
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
                lineNumber: 148,
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
            lineNumber: 159,
            columnNumber: 27
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }
      });
    });

    var result = props.movie;
    if (false) {}
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

  processImageData(data) {
    var width, height;
    var width, height;

    if (window.matchMedia("(max-width: 576px)").matches) {
      width = 150;
      height = 200;
    } else if (window.matchMedia("(max-width: 958px)").matches) {
      width = 200;
      height = 260;
    } else if (window.matchMedia("(max-width: 1300px)").matches) {
      width = 220;
      height = 250;
    } else if (window.matchMedia("(max-width: 2000px)").matches) {
      width = 250;
      height = 300;
    } else {
      width = 400;
      height = 500;
    }

    data.titleImage = data.titleImage + "&width=" + width + "&height=" + height;
    return data;
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
        lineNumber: 168,
        columnNumber: 8
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    }, this.state.selectedMovie.title + " Review " + this.state.selectedMovie.rating + "/5"), __jsx("meta", {
      name: "description",
      content: this.state.selectedMovie.review.synopsis,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
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
              firebase.analytics(); `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }), " "), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 5
      }
    }, __jsx("div", {
      id: "container",
      className: this.state.loading ? 'hidden' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "appBar",
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "toolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    })), __jsx("h1", {
      id: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }, "Popcorn Tales"), __jsx("section", {
      className: "rightToolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, __jsx(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }
    })))), __jsx("div", {
      className: "movie-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
      elevation: 19,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "card-img",
      alt: "Popcorn Tales " + this.state.selectedMovie.title + " Review Image",
      src: this.state.selectedMovie.titleImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      className: "ratingHearts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 15
      }
    }, overallRating))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      mdUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "topHeader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
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
        lineNumber: 219,
        columnNumber: 21
      }
    }, __jsx("h1", {
      className: "headerLevel1 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 19
      }
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), __jsx(_components_DetailedRating__WEBPACK_IMPORTED_MODULE_15__["default"], {
      selectedMovie: this.state.selectedMovie,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 19
      }
    })), __jsx("h3", {
      className: "headerLevel2 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 19
      }
    }, this.state.selectedMovie.language), __jsx("h3", {
      className: "headerLevel2 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 19
      }
    }, this.state.selectedMovie.genre.join(",")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 19
      }
    }, overallRating))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "movie-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
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
        lineNumber: 232,
        columnNumber: 17
      }
    }, __jsx("h1", {
      className: "headerLevel1 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 19
      }
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), __jsx(_components_DetailedRating__WEBPACK_IMPORTED_MODULE_15__["default"], {
      selectedMovie: this.state.selectedMovie,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 19
      }
    })), __jsx("h2", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }
    }, this.state.selectedMovie.language), __jsx("h3", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }
    }, this.state.selectedMovie.genre.join(",")), __jsx("h3", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }
    }, this.state.selectedMovie.rating, "/5"), __jsx("div", {
      className: "icon-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterShareButton"], {
      url: this.state.shareUrl,
      quote: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
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
        lineNumber: 241,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 145
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 119
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 119
      }
    }))))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      mdDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "trailer_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
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
        lineNumber: 250,
        columnNumber: 19
      }
    })))), __jsx("div", {
      className: "movie-detail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
      elevation: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
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
        lineNumber: 259,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 0,
      label: "Review",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 1,
      label: "Hit & Miss",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 2,
      label: "Cast & Crew",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 3,
      label: "Ticket",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 15
      }
    })))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 11
      }
    }, toolbar)), __jsx("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      smUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      className: "icon-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
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
        lineNumber: 276,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 147
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 121
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 121
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      justify: "center",
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 15
      }
    }, __jsx("h4", {
      id: "feedbackText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 15
      }
    }, "Need your feedback to improve  "), __jsx("a", {
      href: "mailto:popcorntales19@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 15
      }
    }, " ", __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsZWRSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXp5SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3lub3BzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaWNrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21vdmllXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmVlbmhlcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNb3ZpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2hhcmVcIiJdLCJuYW1lcyI6WyJDYXN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2FzdCIsInJlbmRlciIsIm1hcCIsImMiLCJEZXRhaWxlZFJhdGluZyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInN0YXJzIiwic3RhckNvdW50IiwidW5kZWZpbmVkIiwidmFsdWUiLCJhY3RpbmdSYXRpbmciLCJzZWxlY3RlZE1vdmllIiwiZGlyZWN0aW9uUmF0aW5nIiwiZGlhbG9ndWVzUmF0aW5nIiwic2NyaXB0UmF0aW5nIiwiZWRpdGluZ1JhdGluZyIsImNpbmVtYXRvZ3JhcGh5UmF0aW5nIiwibXVzaWNSYXRpbmciLCJCb29sZWFuIiwiTGF6eUltYWdlIiwibG9hZGVkIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCIsImltZyIsIkltYWdlIiwib25sb2FkIiwic2V0U3RhdGUiLCJvbmVycm9yIiwic3JjIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ1bmxvYWRlZFNyYyIsImFsdCIsIlJldmlldyIsInByb3MiLCJyZXZpZXciLCJjb25zIiwidXJsIiwidGl0bGUiLCJwcm8iLCJjb24iLCJTb2NpYWxNZW51IiwiU3lub3Bpc2lzIiwic3lub3BzaXMiLCJzcGxpdCIsInBhcmEiLCJ0aWNrZXREZXRhaWxzIiwid2F0Y2hEYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInRpY2tldEltYWdlIiwic3RhcnRzV2l0aCIsInBsYWNlV2F0Y2hlZCIsIlN0eWxlZFJhdGluZyIsIndpdGhTdHlsZXMiLCJpY29uRmlsbGVkIiwiY29sb3IiLCJpY29uSG92ZXIiLCJSYXRpbmciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzTW92aWUiLCJmZXRjaCIsIm1vdmllcyIsImpzb24iLCJ0aXRsZXMiLCJhIiwicGFyYW1zIiwibW92aWUiLCJpbmNsdWRlcyIsImZhaWx1cmVTdGF0dXMiLCJyZXMiLCJ3cml0ZUhlYWQiLCJsb2NhdGlvbiIsImVuZCIsIkRldGFpbCIsInNlbGVjdGVkVGFiIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwibW92aWVUaXRsZSIsImxvYWRpbmciLCJzaGFyZVVybCIsInRhZ3MiLCJyZXBsYWNlIiwicXVvdGUiLCJwcm9jZXNzSW1hZ2VEYXRhIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aXRsZUltYWdlIiwiaGFuZGxlQ2hhbmdlIiwidiIsInRvb2xiYXIiLCJnZXRUb29sYmFyIiwib3ZlcmFsbFJhdGluZyIsImhlYXJ0cyIsInJhdGluZyIsIl9faHRtbCIsInllYXIiLCJsYW5ndWFnZSIsImdlbnJlIiwiam9pbiIsInRyYWlsZXIiLCJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLElBQU4sU0FB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Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFttb3ZpZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9jYWxNb3ZpZXNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhbE1vdmllcyc7XHJcblxyXG5jbGFzcyBDYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBjYXN0OnRoaXMucHJvcHMuY2FzdFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNhc3QtY29tcG9uZW50XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnNlY3Rpb25cIj5DYXN0PC9oMz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FzdC5tYXAoYz0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Ym94LWNvbnRhaW5lclwiIGtleT17Y30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48TG9jYWxNb3ZpZXNJY29uIGNsYXNzTmFtZT1cIm1vdmllSWNvblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlclRleHRcIj57Y308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZFJhdGluZyhwcm9wcykge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBzdGFycyA9IChzdGFyQ291bnQpID0+IHtcclxuICAgIGlmKHN0YXJDb3VudCA9PSB1bmRlZmluZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHZhbHVlID0gc3RhckNvdW50O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSYXRpbmcgbmFtZT1cImN1c3RvbWl6ZWQtY29sb3JcIiBkZWZhdWx0VmFsdWU9e3ZhbHVlfSBwcmVjaXNpb249ezAuMX0gdmFsdWU9e3ZhbHVlfS8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWN0aW5nUmF0aW5nID0gc3RhcnMocHJvcHMuc2VsZWN0ZWRNb3ZpZS5hY3RpbmdSYXRpbmcpO1xyXG4gIGNvbnN0IGRpcmVjdGlvblJhdGluZyA9IHN0YXJzKHByb3BzLnNlbGVjdGVkTW92aWUuZGlyZWN0aW9uUmF0aW5nKTtcclxuICBjb25zdCBkaWFsb2d1ZXNSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLmRpYWxvZ3Vlc1JhdGluZyk7XHJcbiAgY29uc3Qgc2NyaXB0UmF0aW5nID0gc3RhcnMocHJvcHMuc2VsZWN0ZWRNb3ZpZS5zY3JpcHRSYXRpbmcpO1xyXG4gIGNvbnN0IGVkaXRpbmdSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLmVkaXRpbmdSYXRpbmcpO1xyXG4gIGNvbnN0IGNpbmVtYXRvZ3JhcGh5UmF0aW5nID0gc3RhcnMocHJvcHMuc2VsZWN0ZWRNb3ZpZS5jaW5lbWF0b2dyYXBoeVJhdGluZyk7XHJcbiAgY29uc3QgbXVzaWNSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLm11c2ljUmF0aW5nKTtcclxuICByZXR1cm4gKCA8ZGl2PlxyXG4gICAgICAgIDxJbmZvSWNvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiaW5mb0J0blwiLz5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cInJhdGluZy1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT4gXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gIDxoNT5TY3JpcHQgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5zY3JpcHRSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7c2NyaXB0UmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5BY3RpbmcgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5hY3RpbmdSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7YWN0aW5nUmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5EaXJlY3Rpb24gLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5kaXJlY3Rpb25SYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7ZGlyZWN0aW9uUmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5EaWFsb2d1ZXMgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5kaWFsb2d1ZXNSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7ZGlhbG9ndWVzUmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5WaXN1YWxzIC0ge3Byb3BzLnNlbGVjdGVkTW92aWUuY2luZW1hdG9ncmFwaHlSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7Y2luZW1hdG9ncmFwaHlSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PkVkaXRpbmcgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5lZGl0aW5nUmF0aW5nfS81PC9oNT5cclxuICAgICAgICAgICAge2VkaXRpbmdSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1Pk11c2ljIC0ge3Byb3BzLnNlbGVjdGVkTW92aWUubXVzaWNSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7bXVzaWNSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZXJyb3I6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgICBpbWcuc3JjID0gdGhpcy5wcm9wcy5zcmM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy51bmxvYWRlZFNyY31cclxuICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHR9IC8+XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy51bmxvYWRlZFNyY31cclxuICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHR9IC8+XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxyXG4gICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9XHJcbiAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdH0gLz5cclxuICAgIH1cclxuICB9IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJlZW5oZXJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmVlbmhlcmUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBMYXp5SW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF6eUltYWdlXCI7XHJcbmNsYXNzIFJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgcHJvcyA6IHByb3BzLnJldmlldy5wcm9zLFxyXG4gICAgICAgICAgICBjb25zIDogcHJvcHMucmV2aWV3LmNvbnMsXHJcbiAgICAgICAgICAgIHVybCA6IFwiaHR0cHM6Ly9hcGkucG9wY29ybnRhbGVzLmNvbS9pbWFnZT9vYmplY3Q9R3JhcGgvXCIrcHJvcHMudGl0bGUrXCIucG5nJndpZHRoPTUwMCZoZWlnaHQ9NTAwXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29tcG9uZW50XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1YnNlY3Rpb25cIj5XaGF0IHdvcmtlZCB3ZWxsPzwvaDQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByb3MubWFwKHBybz0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Ym94LWNvbnRhaW5lclwiIGtleT17cHJvfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxCZWVuaGVyZUljb24gY2xhc3NOYW1lPVwiY2hlY2tJY29uXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyVGV4dFwiPntwcm99PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJzZWN0aW9uXCI+V2hhdCBkaWRuJ3Qgd29yayB3ZWxsPzwvaDQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbnMubWFwKGNvbj0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Ym94LWNvbnRhaW5lclwiIGtleT17Y29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxDYW5jZWxJY29uIGNsYXNzTmFtZT1cImNhbmNlbEljb25cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvaW50ZXJUZXh0XCI+e2Nvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiIGNsYXNzTmFtZT1cImdyYXBoQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MTB9PlxyXG4gICAgICAgIDxMYXp5SW1hZ2Ugc3JjPXt0aGlzLnN0YXRlLnVybH0gY2xhc3NOYW1lPVwiZ3JhcGhJbWFnZVwiIGFsdD17XCJQb3Bjb3JuIFRhbGVzIFwiICsgdGhpcy5wcm9wcy50aXRsZX0vPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBBc3Npc3RhbnRQaG90b0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lzdGFudFBob3RvJztcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbE1lbnUoKSB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCdXR0b24gYXJpYS1jb250cm9scz1cInNvY2lhbC1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgPEFzc2lzdGFudFBob3RvSWNvbiBjb2xvcj17XCJwcmltYXJ5XCJ9IGZvbnRTaXplPXtcImRlZmF1bHRcIn0vPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cInNvY2lhbC1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9Qb3Bjb3JuVGFsZXNzXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cclxuICAgICAgICAgICAgICA8VHdpdHRlckljb24gZm9udFNpemU9e1wiZGVmYXVsdFwifS8+XHJcbiAgICAgICAgICA8L2E+PC9NZW51SXRlbT4gKi99XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BvcGNvcm50YWxlc1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBmb250U2l6ZT17XCJkZWZhdWx0XCJ9Lz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcG9wY29ybnRhbGVzc1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPEluc3RhZ3JhbUljb24gZm9udFNpemU9e1wiZGVmYXVsdFwifS8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTeW5vcGlzaXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc3lub3BzaXMgOiBwcm9wcy5zeW5vcHNpc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jb21wb25lbnRcIj5cclxuICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zeW5vcHNpcy5zcGxpdChcIlxcblwiKS5tYXAocGFyYSA9PihcclxuICAgICAgICAgICAgICAgIDxwIGtleT17cGFyYX0gY2xhc3NOYW1lPVwic3lub3BzaXNcIj57cGFyYX08L3A+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICB9IFxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW5vcGlzaXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgTGF6eUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0xhenlJbWFnZVwiO1xyXG5jbGFzcyBDYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHByb3BzLnRpY2tldERldGFpbHMud2F0Y2hEYXRlPW5ldyBEYXRlKHByb3BzLnRpY2tldERldGFpbHMud2F0Y2hEYXRlKS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy50aWNrZXREZXRhaWxzLnRpY2tldEltYWdlLnN0YXJ0c1dpdGgoXCJodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL2ltYWdlP29iamVjdD1cIikpXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRpY2tldERldGFpbHMudGlja2V0SW1hZ2UgPSBcImh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vaW1hZ2U/b2JqZWN0PVwiK3RoaXMucHJvcHMudGlja2V0RGV0YWlscy50aWNrZXRJbWFnZTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgdGlja2V0RGV0YWlsczp0aGlzLnByb3BzLnRpY2tldERldGFpbHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldC1jb21wb25lbnRcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cIlRpY2tldFwiPkRhdGUgV2F0Y2hlZCA6IHt0aGlzLnN0YXRlLnRpY2tldERldGFpbHMud2F0Y2hEYXRlfTwvaDU+XHJcbiAgICAgICA8aDUgY2xhc3NOYW1lPVwiVGlja2V0XCI+UGxhY2UgV2F0Y2hlZCA6IHt0aGlzLnN0YXRlLnRpY2tldERldGFpbHMucGxhY2VXYXRjaGVkfTwvaDU+XHJcbiAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCI+XHJcbiAgICAgICA8ZGl2IGlkPVwidGlja2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgPExhenlJbWFnZSBzcmM9e3RoaXMuc3RhdGUudGlja2V0RGV0YWlscy50aWNrZXRJbWFnZX0gY2xhc3NOYW1lPVwidGlja2V0SW1hZ2VcIiBhbHQ9e1wiVGlja2V0IGltYWdlIG9mIHRoZSBtb3ZpZVwifS8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XHJcbmltcG9ydCBIb21lQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcclxuaW1wb3J0IFN5bm9wc2lzIGZyb20gJy4uL2NvbXBvbmVudHMvU3lub3BzaXMnO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmV2aWV3JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENhc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYXN0JztcclxuaW1wb3J0IFRpY2tldCBmcm9tICcuLi9jb21wb25lbnRzL1RpY2tldCc7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCBTb2NpYWxNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvU29jaWFsTWVudSc7XHJcbmltcG9ydCBEZXRhaWxlZFJhdGluZyBmcm9tICcuLi9jb21wb25lbnRzL0RldGFpbGVkUmF0aW5nJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXp5SW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF6eUltYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcclxuICBUZWxlZ3JhbVNoYXJlQnV0dG9uLFxyXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcclxuICBXaGF0c2FwcFNoYXJlQnV0dG9uLFxyXG4gIEZhY2Vib29rSWNvbixcclxuICBXaGF0c2FwcEljb24sXHJcbiAgVGVsZWdyYW1JY29uLFxyXG4gIFR3aXR0ZXJJY29uXHJcbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XHJcblxyXG5jb25zdCBTdHlsZWRSYXRpbmcgPSB3aXRoU3R5bGVzKHtcclxuICBpY29uRmlsbGVkOiB7XHJcbiAgICBjb2xvcjogJyNmZjZkNzUnLFxyXG4gIH0sXHJcbiAgaWNvbkhvdmVyOiB7XHJcbiAgICBjb2xvcjogJyNmZjNkNDcnLFxyXG4gIH0sXHJcbn0pKFJhdGluZyk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzIChjb250ZXh0KXtcclxuICAgIHZhciByZXNNb3ZpZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL21vdmllYCk7XHJcbiAgICB2YXIgbW92aWVzID0gYXdhaXQgcmVzTW92aWUuanNvbigpO1xyXG4gICAgdmFyIHRpdGxlcyA9IG1vdmllcy5tYXAoZnVuY3Rpb24oYSkge3JldHVybiBhLnRpdGxlO30pO1xyXG4gICAgdmFyIHRpdGxlPWNvbnRleHQucGFyYW1zLm1vdmllO1xyXG4gICAgaWYoIXRpdGxlcy5pbmNsdWRlcyh0aXRsZSkpe1xyXG4gICAgICB2YXIgZmFpbHVyZVN0YXR1cz10cnVlO1xyXG4gICAgICBpZih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgY29udGV4dC5yZXMud3JpdGVIZWFkKDMwMiwge2xvY2F0aW9uOiAnLyd9KVxyXG4gICAgICAgIGNvbnRleHQucmVzLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBmYWlsdXJlU3RhdHVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBPbiBjbGllbnRcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vbW92aWVyZXZpZXc/bW92aWU9YCtjb250ZXh0LnBhcmFtcy5tb3ZpZSk7XHJcbiAgICBjb25zdCBtb3ZpZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIG1vdmllXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgLy90aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gIH1cclxuY2xhc3MgRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdmFyIHJlc3VsdCA9IHByb3BzLm1vdmllO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKVxyXG4gICAgcmVzdWx0ID0gdGhpcy5wcm9jZXNzSW1hZ2VEYXRhKHJlc3VsdCk7XHJcbiAgICBpZih0eXBlb2YocmVzdWx0LnJldmlldykgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXN1bHQucmV2aWV3PUpTT04ucGFyc2UocmVzdWx0LnJldmlldyk7XHJcbiAgICBpZih0eXBlb2YocmVzdWx0LnRpY2tldERldGFpbHMpID09IFwic3RyaW5nXCIpXHJcbiAgICByZXN1bHQudGlja2V0RGV0YWlscyA9IEpTT04ucGFyc2UocmVzdWx0LnRpY2tldERldGFpbHMpO1xyXG4gICAgdmFyIG1vdmllVGl0bGUgPSByZXN1bHQudGl0bGU7XHJcblxyXG4gICAgaWYobW92aWVUaXRsZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICBtb3ZpZVRpdGxlPVwiUG9wY29ybiBUYWxlc1wiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkaW5nOnRydWUsXHJcbiAgICAgICAgc2hhcmVVcmw6XCJ3d3cucG9wY29ybnRhbGVzLmNvbVwiLFxyXG4gICAgICAgIHRhZ3M6XCIjcG9wY29ybnRhbGVzICNtb3ZpZXRpbWUgI21vdmllcmV2aWV3ICNwb3Bjb3JuICNsZXRzd2F0Y2hcIixcclxuICAgICAgICBzZWxlY3RlZE1vdmllIDogcmVzdWx0LFxyXG4gICAgICAgIHNlbGVjdGVkVGFiOjAsXHJcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcclxuICAgICAgICBzaGFyZVVybDpcInd3dy5wb3Bjb3JudGFsZXMuY29tL3Jldmlldy9cIittb3ZpZVRpdGxlLnJlcGxhY2UoLyAvZywgJyUyMCcpLFxyXG4gICAgICAgIHF1b3RlOlwiSSByZWFkIGEgcmV2aWV3IG9mIFwiK21vdmllVGl0bGUrXCIgYW5kIEkgZmVlbCB0aGF0IGl0J3Mgd29ydGggd2F0Y2hpbmcuIFJlYWQgdGhlIHJldmlldyBhbmQgbGV0J3Mgd2F0Y2ggaXQgdG9nZXRoZXIhIVwiXHJcbiAgICAgICAgICBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW1hZ2VEYXRhKGRhdGEpe1xyXG4gICAgdmFyIHdpZHRoLGhlaWdodDtcclxuICAgIHZhciB3aWR0aCxoZWlnaHQ7XHJcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDU3NnB4KVwiKS5tYXRjaGVzKXtcclxuICAgICAgd2lkdGg9MTUwO2hlaWdodD0yMDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU4cHgpXCIpLm1hdGNoZXMpe1xyXG4gICAgICB3aWR0aD0yMDA7aGVpZ2h0PTI2MDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMzAwcHgpXCIpLm1hdGNoZXMpe1xyXG4gICAgICB3aWR0aD0yMjA7aGVpZ2h0PTI1MDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAyMDAwcHgpXCIpLm1hdGNoZXMpe1xyXG4gICAgICB3aWR0aD0yNTA7aGVpZ2h0PTMwMDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHdpZHRoPTQwMDtoZWlnaHQ9NTAwO1xyXG4gICAgfVxyXG4gICAgZGF0YS50aXRsZUltYWdlPSAgZGF0YS50aXRsZUltYWdlK1wiJndpZHRoPVwiK3dpZHRoK1wiJmhlaWdodD1cIitoZWlnaHQ7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKHYpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkVGFiOnZcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRUb29sYmFyID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWIpIHtcclxuICAgICAgICBjYXNlIDA6IFxyXG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJldmlldyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gPFN5bm9wc2lzIHN5bm9wc2lzPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUucmV2aWV3LnN5bm9wc2lzfS8+XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOiBcclxuICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yZXZpZXcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIDxSZXZpZXcgcmV2aWV3PXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUucmV2aWV3fSB0aXRsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnRpdGxlfS8+XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6IFxyXG4gICAgICAgICAgcmV0dXJuIDxDYXN0IGNhc3Q9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5jYXN0fS8+XHJcbiAgICAgICBicmVhaztcclxuICAgIGNhc2UgMzogXHJcbiAgICAgICAgICByZXR1cm4gPFRpY2tldCB0aWNrZXREZXRhaWxzPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudGlja2V0RGV0YWlsc30vPlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPjwvcD5cclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn07XHJcblxyXG5oZWFydHMgPSAoc3RhckNvdW50KSA9PiB7XHJcbiAgaWYoc3RhckNvdW50ID09IHVuZGVmaW5lZClcclxuICAgIHJldHVybjtcclxuICBjb25zdCB2YWx1ZSA9IHN0YXJDb3VudDtcclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRSYXRpbmcgbmFtZT1cImN1c3RvbWl6ZWQtY29sb3JcIiBkZWZhdWx0VmFsdWU9e3ZhbHVlfSBwcmVjaXNpb249ezAuMX0gdmFsdWU9e3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8RmF2b3JpdGVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+fS8+XHJcbiAgKTtcclxufVxyXG5cclxucmVuZGVyKCl7XHJcbiAgY29uc3QgdG9vbGJhciA9IHRoaXMuZ2V0VG9vbGJhcigpO1xyXG4gIGNvbnN0IG92ZXJhbGxSYXRpbmcgPSB0aGlzLmhlYXJ0cyh0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUucmF0aW5nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudGl0bGUgKyBcIiBSZXZpZXcgXCIrdGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJhdGluZytcIi81XCJ9PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yZXZpZXcuc3lub3BzaXN9Lz5cclxuICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cclxuICAgICAgICAgIDxsaW5rIGFzeW5jIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3d3dy5Qb3Bjb3JudGFsZXMuY29tL1wiIC8+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNy4xNC4zL2ZpcmViYXNlLWFwcC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzcuMTQuMy9maXJlYmFzZS1hbmFseXRpY3MuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IFwiQUl6YVN5QVh1SUlOTG5SbXdhY3hqeXMzSTZ6aXVTVHE4bEowaXc4XCIsXHJcbiAgICAgICAgICAgICAgICBhdXRoRG9tYWluOiBcInBvcGNvcm50YWxlcy00MDc2Ny5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICAgICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcG9wY29ybnRhbGVzLTQwNzY3LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IFwicG9wY29ybnRhbGVzLTQwNzY3XCIsXHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlQnVja2V0OiBcInBvcGNvcm50YWxlcy00MDc2Ny5hcHBzcG90LmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTEyMTM3Nzk0MDUxXCIsXHJcbiAgICAgICAgICAgICAgICBhcHBJZDogXCIxOjUxMjEzNzc5NDA1MTp3ZWI6YmU2MTJmMmQ2YWE3YzM2OGQ0YjQzNlwiLFxyXG4gICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRJZDogXCJHLUxLNURCU0JNVFJcIlxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7IGAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9zY3JpcHQ+IDwvSGVhZD5cclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxvYWRpbmcgPyAnaGlkZGVuJyA6ICcnfT5cclxuICAgICAgICBcclxuICAgICAgICA8QXBwQmFyIGlkPVwiYXBwQmFyXCIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VG9vbGJhciBpZD1cInRvb2xiYXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48SG9tZUJ1dHRvbi8+PC9hPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlBvcGNvcm4gVGFsZXM8L2gxPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodFRvb2xiYXJcIj5cclxuICAgICAgICAgICAgPFNvY2lhbE1lbnUvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRcIiA+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MTl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIiBhbHQ9e1wiUG9wY29ybiBUYWxlcyBcIiArIHRoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZSArIFwiIFJldmlldyBJbWFnZVwifSBzcmM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZUltYWdlfS8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgY2xhc3NOYW1lPVwicmF0aW5nSGVhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAge292ZXJhbGxSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gbWRVcCA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXswfSBqdXN0aWZ5ID0gXCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMSBjZW50ZXJBbGlnbmVkXCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZX0gKHt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUueWVhcn0pPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPERldGFpbGVkUmF0aW5nIHNlbGVjdGVkTW92aWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZX0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDIgY2VudGVyQWxpZ25lZFwiID57dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLmxhbmd1YWdlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDIgY2VudGVyQWxpZ25lZFwiPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUuZ2VucmUuam9pbihcIixcIil9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7b3ZlcmFsbFJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW92aWUtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17MH0ganVzdGlmeSA9IFwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDEgY2VudGVyQWxpZ25lZFwiPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudGl0bGV9ICh7dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnllYXJ9KTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxEZXRhaWxlZFJhdGluZyBzZWxlY3RlZE1vdmllPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWV9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMlwiPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUubGFuZ3VhZ2V9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDJcIj57dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLmdlbnJlLmpvaW4oXCIsXCIpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGVyTGV2ZWwyXCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yYXRpbmd9LzU8L2gzPiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHF1b3RlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUd2l0dGVySWNvbiBzaXplPXsyOH0gcm91bmQvPjwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXt0aGlzLnN0YXRlLnNoYXJlVXJsfSB0aXRsZT17dGhpcy5zdGF0ZS5xdW90ZX0gaGFzaHRhZz17dGhpcy5zdGF0ZS50YWdzfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxGYWNlYm9va0ljb24gc2l6ZT17Mjh9IHJvdW5kLz48L0ZhY2Vib29rU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxXaGF0c2FwcEljb24gc2l6ZT17Mjh9IHJvdW5kLz48L1doYXRzYXBwU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VGVsZWdyYW1TaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUZWxlZ3JhbUljb24gc2l6ZT17Mjh9IHJvdW5kLz48L1RlbGVncmFtU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRyYWlsZXJfZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJ0cmFpbGVyXCIgdGl0bGU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZX0gc3JjPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudHJhaWxlcn1cclxuICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1kZXRhaWxcIj5cclxuICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezh9PlxyXG4gICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICA8VGFicyBvbkNoYW5nZT17KGUsdik9Pnt0aGlzLmhhbmRsZUNoYW5nZSh2KX19ICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFRhYn0gdmFyaWFudD1cImZ1bGxXaWR0aFwiIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFicyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17MH0gbGFiZWw9XCJSZXZpZXdcIiBjbGFzc05hbWU9XCJ0YWJcIi8+XHJcbiAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17MX0gbGFiZWw9XCJIaXQgJiBNaXNzXCIgY2xhc3NOYW1lPVwidGFiXCIvPlxyXG4gICAgICAgICAgICAgIDxUYWIgdmFsdWU9ezJ9IGxhYmVsPVwiQ2FzdCAmIENyZXdcIiBjbGFzc05hbWU9XCJ0YWJcIi8+XHJcbiAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17M30gbGFiZWw9XCJUaWNrZXRcIiBjbGFzc05hbWU9XCJ0YWJcIi8+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7dG9vbGJhcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyVGV4dFwiPiBcclxuICAgICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUd2l0dGVySWNvbiBzaXplPXsyNX0gcm91bmQvPjwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHF1b3RlPXt0aGlzLnN0YXRlLnF1b3RlfSBoYXNodGFnPXt0aGlzLnN0YXRlLnRhZ3N9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PEZhY2Vib29rSWNvbiBzaXplPXsyNX0gcm91bmQvPjwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b24gdXJsPXt0aGlzLnN0YXRlLnNoYXJlVXJsfSB0aXRsZT17dGhpcy5zdGF0ZS5xdW90ZX0gY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb25cIj48V2hhdHNhcHBJY29uIHNpemU9ezI1fSByb3VuZC8+PC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8VGVsZWdyYW1TaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUZWxlZ3JhbUljb24gc2l6ZT17MjV9IHJvdW5kLz48L1RlbGVncmFtU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgaWQ9XCJmb290ZXJUZXh0XCI+XHJcbiAgICAgICAgICAgICAgPGg0IGlkPVwiZmVlZGJhY2tUZXh0XCI+TmVlZCB5b3VyIGZlZWRiYWNrIHRvIGltcHJvdmUgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpwb3Bjb3JudGFsZXMxOUBnbWFpbC5jb21cIj4gPE1haWxJY29uLz48L2E+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Bc3Npc3RhbnRQaG90b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmVlbmhlcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhbmNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTW92aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvUmF0aW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaGFyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9