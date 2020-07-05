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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\Cast.js";
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\DetailedRating.js";
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\Review.js";
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
        lineNumber: 16,
        columnNumber: 12
      }
    }, __jsx("h4", {
      className: "subsection",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, "What worked well?"), this.state.pros.map(pro => __jsx("div", {
      className: "flexbox-container",
      key: pro,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Beenhere__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "checkIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 26
      }
    })), __jsx("p", {
      className: "pointerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, pro))), __jsx("h4", {
      className: "subsection",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, "What didn't work well?"), this.state.cons.map(con => __jsx("div", {
      className: "flexbox-container",
      key: con,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "cancelIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 26
      }
    })), __jsx("p", {
      className: "pointerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, con))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      justify: "center",
      className: "graphContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      elevation: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: this.state.url,
      className: "graphImage",
      alt: "Popcorn Tales " + this.props.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\Synopsis.js";
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
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\components\\Ticket.js";
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
        lineNumber: 16,
        columnNumber: 12
      }
    }, __jsx("h5", {
      className: "Ticket",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, "Date Watched : ", this.state.ticketDetails.watchDate), __jsx("h5", {
      className: "Ticket",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, "Place Watched : ", this.state.ticketDetails.placeWatched), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 8
      }
    }, __jsx("div", {
      id: "ticket-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 8
      }
    }, __jsx("img", {
      src: this.state.ticketDetails.ticketImage,
      className: "ticketImage",
      alt: "Ticket image of the movie",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
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
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LazyImage */ "./components/LazyImage.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Cast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Cast */ "./components/Cast.js");
/* harmony import */ var _components_Ticket__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Ticket */ "./components/Ticket.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SocialMenu */ "./components/SocialMenu.js");
/* harmony import */ var _components_DetailedRating__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/DetailedRating */ "./components/DetailedRating.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\pages\\[movie].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const StyledRating = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["withStyles"])({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_17___default.a);
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
              lineNumber: 113,
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
              lineNumber: 117,
              columnNumber: 20
            }
          });
          break;

        case 2:
          return __jsx(_components_Cast__WEBPACK_IMPORTED_MODULE_12__["default"], {
            cast: this.state.selectedMovie.cast,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 18
            }
          });
          break;

        case 3:
          return __jsx(_components_Ticket__WEBPACK_IMPORTED_MODULE_13__["default"], {
            ticketDetails: this.state.selectedMovie.ticketDetails,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123,
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
                lineNumber: 126,
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
        icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19___default.a, {
          fontSize: "inherit",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 27
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
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

    debugger;
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 8
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    }, this.state.selectedMovie.title + " Review " + this.state.selectedMovie.rating + "/5"), __jsx("meta", {
      name: "description",
      content: this.state.selectedMovie.review.synopsis,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
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
        lineNumber: 149,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }), __jsx("link", {
      async: true,
      rel: "canonical",
      href: "https://www.Popcorntales.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
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
        lineNumber: 155,
        columnNumber: 11
      }
    }), __jsx("script", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }), __jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-170786754-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 5
      }
    }, __jsx("div", {
      id: "container",
      className: this.state.loading ? 'hidden' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "appBar",
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "toolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    })), __jsx("h1", {
      id: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, "Popcorn Tales"), __jsx("section", {
      className: "rightToolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, __jsx(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    })))), __jsx("div", {
      className: "movie-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
      elevation: 19,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, __jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "card-img",
      alt: "Popcorn Tales " + this.state.selectedMovie.title + " Review Image",
      unloadedSrc: this.state.selectedMovie.titleImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
      container: true,
      justify: "center",
      className: "ratingHearts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 15
      }
    }, overallRating))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
      mdUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "topHeader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
      container: true,
      alignItems: "center",
      spacing: 0,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }
    }, __jsx("h1", {
      className: "headerLevel1 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 19
      }
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), __jsx(_components_DetailedRating__WEBPACK_IMPORTED_MODULE_16__["default"], {
      selectedMovie: this.state.selectedMovie,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 19
      }
    })), __jsx("h3", {
      className: "headerLevel2 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }
    }, this.state.selectedMovie.language), __jsx("h3", {
      className: "headerLevel2 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 19
      }
    }, this.state.selectedMovie.genre.join(",")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
      container: true,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 19
      }
    }, overallRating))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "movie-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
      container: true,
      alignItems: "center",
      spacing: 0,
      justify: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, __jsx("h1", {
      className: "headerLevel1 centerAligned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), __jsx(_components_DetailedRating__WEBPACK_IMPORTED_MODULE_16__["default"], {
      selectedMovie: this.state.selectedMovie,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 19
      }
    })), __jsx("h2", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }
    }, this.state.selectedMovie.language), __jsx("h3", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }
    }, this.state.selectedMovie.genre.join(",")), __jsx("h3", {
      className: "headerLevel2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, this.state.selectedMovie.rating, "/5"), __jsx("div", {
      className: "icon-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterShareButton"], {
      url: this.state.shareUrl,
      quote: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
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
        lineNumber: 230,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 145
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 119
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramIcon"], {
      size: 28,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 119
      }
    }))))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
      mdDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "trailer_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
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
        lineNumber: 239,
        columnNumber: 19
      }
    })))), __jsx("div", {
      className: "movie-detail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
      elevation: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      position: "static",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
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
        lineNumber: 248,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 0,
      label: "Review",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 1,
      label: "Hit & Miss",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 2,
      label: "Cast & Crew",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: 3,
      label: "Ticket",
      className: "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 15
      }
    })))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }
    }, toolbar)), __jsx("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
      smUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
      container: true,
      justify: "center",
      className: "icon-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TwitterIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
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
        lineNumber: 265,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["FacebookIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 147
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["WhatsappIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 121
      }
    })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 19
      }
    }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_22__["TelegramIcon"], {
      size: 25,
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 121
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
      container: true,
      justify: "center",
      id: "footerText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 15
      }
    }, __jsx("h4", {
      id: "feedbackText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 15
      }
    }, "Need your feedback to improve  "), __jsx("a", {
      href: "mailto:popcorntales19@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 15
      }
    }, " ", __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 58
      }
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/[movie].js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vinay\Desktop\projects\ui\pages\[movie].js */"./pages/[movie].js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsZWRSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXp5SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3lub3BzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaWNrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21vdmllXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaXN0YW50UGhvdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmVlbmhlcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNb3ZpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2hhcmVcIiJdLCJuYW1lcyI6WyJDYXN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2FzdCIsInJlbmRlciIsIm1hcCIsImMiLCJEZXRhaWxlZFJhdGluZyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInN0YXJzIiwic3RhckNvdW50IiwidW5kZWZpbmVkIiwidmFsdWUiLCJhY3RpbmdSYXRpbmciLCJzZWxlY3RlZE1vdmllIiwiZGlyZWN0aW9uUmF0aW5nIiwiZGlhbG9ndWVzUmF0aW5nIiwic2NyaXB0UmF0aW5nIiwiZWRpdGluZ1JhdGluZyIsImNpbmVtYXRvZ3JhcGh5UmF0aW5nIiwibXVzaWNSYXRpbmciLCJCb29sZWFuIiwiTGF6eUltYWdlIiwibG9hZGVkIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCIsImltZyIsIkltYWdlIiwib25sb2FkIiwic2V0U3RhdGUiLCJvbmVycm9yIiwic3JjIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ1bmxvYWRlZFNyYyIsImFsdCIsIlJldmlldyIsInByb3MiLCJyZXZpZXciLCJjb25zIiwidXJsIiwidGl0bGUiLCJwcm8iLCJjb24iLCJTb2NpYWxNZW51IiwiU3lub3Bpc2lzIiwic3lub3BzaXMiLCJzcGxpdCIsInBhcmEiLCJ0aWNrZXREZXRhaWxzIiwid2F0Y2hEYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInRpY2tldEltYWdlIiwic3RhcnRzV2l0aCIsInBsYWNlV2F0Y2hlZCIsIlN0eWxlZFJhdGluZyIsIndpdGhTdHlsZXMiLCJpY29uRmlsbGVkIiwiY29sb3IiLCJpY29uSG92ZXIiLCJSYXRpbmciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzTW92aWUiLCJmZXRjaCIsIm1vdmllcyIsImpzb24iLCJ0aXRsZXMiLCJhIiwicGFyYW1zIiwibW92aWUiLCJpbmNsdWRlcyIsImZhaWx1cmVTdGF0dXMiLCJyZXMiLCJ3cml0ZUhlYWQiLCJsb2NhdGlvbiIsImVuZCIsIkRldGFpbCIsInNlbGVjdGVkVGFiIiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIiwibW92aWVUaXRsZSIsImxvYWRpbmciLCJzaGFyZVVybCIsInRhZ3MiLCJyZXBsYWNlIiwicXVvdGUiLCJoYW5kbGVDaGFuZ2UiLCJ2IiwidG9vbGJhciIsImdldFRvb2xiYXIiLCJvdmVyYWxsUmF0aW5nIiwiaGVhcnRzIiwicmF0aW5nIiwiX19odG1sIiwidGl0bGVJbWFnZSIsInllYXIiLCJsYW5ndWFnZSIsImdlbnJlIiwiam9pbiIsInRyYWlsZXIiLCJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLElBQU4sU0FBbUJDLCtDQUFuQixDQUE2QjtBQUN6QkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FB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QUE7QUFBQSxZQUEyQyxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBM0MsQ0FGQSxDQVRKLENBREYsQ0E1RUosQ0FEQSxDQXRDQSxDQURGO0FBd0lEOztBQTVNOEI7O0FBK01oQlYscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUkEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFttb3ZpZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9jYWxNb3ZpZXNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhbE1vdmllcyc7XHJcblxyXG5jbGFzcyBDYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBjYXN0OnRoaXMucHJvcHMuY2FzdFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNhc3QtY29tcG9uZW50XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnNlY3Rpb25cIj5DYXN0PC9oMz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FzdC5tYXAoYz0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Ym94LWNvbnRhaW5lclwiIGtleT17Y30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48TG9jYWxNb3ZpZXNJY29uIGNsYXNzTmFtZT1cIm1vdmllSWNvblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlclRleHRcIj57Y308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZFJhdGluZyhwcm9wcykge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBzdGFycyA9IChzdGFyQ291bnQpID0+IHtcclxuICAgIGlmKHN0YXJDb3VudCA9PSB1bmRlZmluZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHZhbHVlID0gc3RhckNvdW50O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSYXRpbmcgbmFtZT1cImN1c3RvbWl6ZWQtY29sb3JcIiBkZWZhdWx0VmFsdWU9e3ZhbHVlfSBwcmVjaXNpb249ezAuMX0gdmFsdWU9e3ZhbHVlfS8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWN0aW5nUmF0aW5nID0gc3RhcnMocHJvcHMuc2VsZWN0ZWRNb3ZpZS5hY3RpbmdSYXRpbmcpO1xyXG4gIGNvbnN0IGRpcmVjdGlvblJhdGluZyA9IHN0YXJzKHByb3BzLnNlbGVjdGVkTW92aWUuZGlyZWN0aW9uUmF0aW5nKTtcclxuICBjb25zdCBkaWFsb2d1ZXNSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLmRpYWxvZ3Vlc1JhdGluZyk7XHJcbiAgY29uc3Qgc2NyaXB0UmF0aW5nID0gc3RhcnMocHJvcHMuc2VsZWN0ZWRNb3ZpZS5zY3JpcHRSYXRpbmcpO1xyXG4gIGNvbnN0IGVkaXRpbmdSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLmVkaXRpbmdSYXRpbmcpO1xyXG4gIGNvbnN0IGNpbmVtYXRvZ3JhcGh5UmF0aW5nID0gc3RhcnMocHJvcHMuc2VsZWN0ZWRNb3ZpZS5jaW5lbWF0b2dyYXBoeVJhdGluZyk7XHJcbiAgY29uc3QgbXVzaWNSYXRpbmcgPSBzdGFycyhwcm9wcy5zZWxlY3RlZE1vdmllLm11c2ljUmF0aW5nKTtcclxuICByZXR1cm4gKCA8ZGl2PlxyXG4gICAgICAgIDxJbmZvSWNvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiaW5mb0J0blwiLz5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cInJhdGluZy1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT4gXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gIDxoNT5TY3JpcHQgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5zY3JpcHRSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7c2NyaXB0UmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5BY3RpbmcgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5hY3RpbmdSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7YWN0aW5nUmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5EaXJlY3Rpb24gLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5kaXJlY3Rpb25SYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7ZGlyZWN0aW9uUmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5EaWFsb2d1ZXMgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5kaWFsb2d1ZXNSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7ZGlhbG9ndWVzUmF0aW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5WaXN1YWxzIC0ge3Byb3BzLnNlbGVjdGVkTW92aWUuY2luZW1hdG9ncmFwaHlSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7Y2luZW1hdG9ncmFwaHlSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PkVkaXRpbmcgLSB7cHJvcHMuc2VsZWN0ZWRNb3ZpZS5lZGl0aW5nUmF0aW5nfS81PC9oNT5cclxuICAgICAgICAgICAge2VkaXRpbmdSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1Pk11c2ljIC0ge3Byb3BzLnNlbGVjdGVkTW92aWUubXVzaWNSYXRpbmd9LzU8L2g1PlxyXG4gICAgICAgICAgICB7bXVzaWNSYXRpbmd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZXJyb3I6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgaW1nLnNyYyA9IHRoaXMucHJvcHMuc3JjO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICBzcmM9e3RoaXMucHJvcHMudW5sb2FkZWRTcmN9XHJcbiAgICAgICAgICBhbHQ9e3RoaXMucHJvcHMuYWx0fSAvPlxyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmxvYWRlZCkge1xyXG4gICAgICAgIHJldHVybiA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICBzcmM9e3RoaXMucHJvcHMudW5sb2FkZWRTcmN9XHJcbiAgICAgICAgICBhbHQ9e3RoaXMucHJvcHMuYWx0fSAvPlxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxyXG4gICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHR9IC8+XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCZWVuaGVyZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JlZW5oZXJlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NhbmNlbCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5jbGFzcyBSZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHByb3MgOiBwcm9wcy5yZXZpZXcucHJvcyxcclxuICAgICAgICAgICAgY29ucyA6IHByb3BzLnJldmlldy5jb25zLFxyXG4gICAgICAgICAgICB1cmwgOiBcImh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vaW1hZ2U/b2JqZWN0PUdyYXBoL1wiK3Byb3BzLnRpdGxlK1wiLnBuZyZ3aWR0aD01MDAmaGVpZ2h0PTUwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNvbXBvbmVudFwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJzZWN0aW9uXCI+V2hhdCB3b3JrZWQgd2VsbD88L2g0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9zLm1hcChwcm89PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGJveC1jb250YWluZXJcIiBrZXk9e3Byb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48QmVlbmhlcmVJY29uIGNsYXNzTmFtZT1cImNoZWNrSWNvblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlclRleHRcIj57cHJvfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3Vic2VjdGlvblwiPldoYXQgZGlkbid0IHdvcmsgd2VsbD88L2g0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb25zLm1hcChjb249PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGJveC1jb250YWluZXJcIiBrZXk9e2Nvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48Q2FuY2VsSWNvbiBjbGFzc05hbWU9XCJjYW5jZWxJY29uXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyVGV4dFwiPntjb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5ID0gXCJjZW50ZXJcIiBjbGFzc05hbWU9XCJncmFwaENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxQYXBlciBlbGV2YXRpb249ezEwfT5cclxuICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS51cmx9IGNsYXNzTmFtZT1cImdyYXBoSW1hZ2VcIiBhbHQ9e1wiUG9wY29ybiBUYWxlcyBcIiArIHRoaXMucHJvcHMudGl0bGV9Lz5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgQXNzaXN0YW50UGhvdG9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Bc3Npc3RhbnRQaG90byc7XHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xyXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NpYWxNZW51KCkge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJzb2NpYWwtbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIDxBc3Npc3RhbnRQaG90b0ljb24gY29sb3I9e1wicHJpbWFyeVwifSBmb250U2l6ZT17XCJkZWZhdWx0XCJ9Lz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJzb2NpYWwtbWVudVwiXHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIHsvKiA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PiBcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vUG9wY29yblRhbGVzc1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIGZvbnRTaXplPXtcImRlZmF1bHRcIn0vPlxyXG4gICAgICAgICAgPC9hPjwvTWVudUl0ZW0+ICovfVxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wb3Bjb3JudGFsZXNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gZm9udFNpemU9e1wiZGVmYXVsdFwifS8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BvcGNvcm50YWxlc3NcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uIGZvbnRTaXplPXtcImRlZmF1bHRcIn0vPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU3lub3Bpc2lzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHN5bm9wc2lzIDogcHJvcHMuc3lub3BzaXNcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29tcG9uZW50XCI+XHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3lub3BzaXMuc3BsaXQoXCJcXG5cIikubWFwKHBhcmEgPT4oXHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9e3BhcmF9IGNsYXNzTmFtZT1cInN5bm9wc2lzXCI+e3BhcmF9PC9wPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgfSBcclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3lub3Bpc2lzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuY2xhc3MgQ2FzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBwcm9wcy50aWNrZXREZXRhaWxzLndhdGNoRGF0ZT1uZXcgRGF0ZShwcm9wcy50aWNrZXREZXRhaWxzLndhdGNoRGF0ZSkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMudGlja2V0RGV0YWlscy50aWNrZXRJbWFnZS5zdGFydHNXaXRoKFwiaHR0cHM6Ly9hcGkucG9wY29ybnRhbGVzLmNvbS9pbWFnZT9vYmplY3Q9XCIpKVxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50aWNrZXREZXRhaWxzLnRpY2tldEltYWdlID0gXCJodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL2ltYWdlP29iamVjdD1cIit0aGlzLnByb3BzLnRpY2tldERldGFpbHMudGlja2V0SW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHRpY2tldERldGFpbHM6dGhpcy5wcm9wcy50aWNrZXREZXRhaWxzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXQtY29tcG9uZW50XCI+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJUaWNrZXRcIj5EYXRlIFdhdGNoZWQgOiB7dGhpcy5zdGF0ZS50aWNrZXREZXRhaWxzLndhdGNoRGF0ZX08L2g1PlxyXG4gICAgICAgPGg1IGNsYXNzTmFtZT1cIlRpY2tldFwiPlBsYWNlIFdhdGNoZWQgOiB7dGhpcy5zdGF0ZS50aWNrZXREZXRhaWxzLnBsYWNlV2F0Y2hlZH08L2g1PlxyXG4gICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiPlxyXG4gICAgICAgPGRpdiBpZD1cInRpY2tldC1jb250YWluZXJcIj5cclxuICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLnRpY2tldERldGFpbHMudGlja2V0SW1hZ2V9IGNsYXNzTmFtZT1cInRpY2tldEltYWdlXCIgYWx0PXtcIlRpY2tldCBpbWFnZSBvZiB0aGUgbW92aWVcIn0+PC9pbWc+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XHJcbmltcG9ydCBIb21lQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcclxuaW1wb3J0IFN5bm9wc2lzIGZyb20gJy4uL2NvbXBvbmVudHMvU3lub3BzaXMnO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmV2aWV3JztcclxuaW1wb3J0IExhenlJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXp5SW1hZ2VcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENhc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYXN0JztcclxuaW1wb3J0IFRpY2tldCBmcm9tICcuLi9jb21wb25lbnRzL1RpY2tldCc7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCBTb2NpYWxNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvU29jaWFsTWVudSc7XHJcbmltcG9ydCBEZXRhaWxlZFJhdGluZyBmcm9tICcuLi9jb21wb25lbnRzL0RldGFpbGVkUmF0aW5nJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxyXG4gIFRlbGVncmFtU2hhcmVCdXR0b24sXHJcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gIFdoYXRzYXBwU2hhcmVCdXR0b24sXHJcbiAgRmFjZWJvb2tJY29uLFxyXG4gIFdoYXRzYXBwSWNvbixcclxuICBUZWxlZ3JhbUljb24sXHJcbiAgVHdpdHRlckljb25cclxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcclxuXHJcbmNvbnN0IFN0eWxlZFJhdGluZyA9IHdpdGhTdHlsZXMoe1xyXG4gIGljb25GaWxsZWQ6IHtcclxuICAgIGNvbG9yOiAnI2ZmNmQ3NScsXHJcbiAgfSxcclxuICBpY29uSG92ZXI6IHtcclxuICAgIGNvbG9yOiAnI2ZmM2Q0NycsXHJcbiAgfSxcclxufSkoUmF0aW5nKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKGNvbnRleHQpe1xyXG4gICAgdmFyIHJlc01vdmllID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnBvcGNvcm50YWxlcy5jb20vbW92aWVgKTtcclxuICAgIHZhciBtb3ZpZXMgPSBhd2FpdCByZXNNb3ZpZS5qc29uKCk7XHJcbiAgICB2YXIgdGl0bGVzID0gbW92aWVzLm1hcChmdW5jdGlvbihhKSB7cmV0dXJuIGEudGl0bGU7fSk7XHJcbiAgICB2YXIgdGl0bGU9Y29udGV4dC5wYXJhbXMubW92aWU7XHJcbiAgICBpZighdGl0bGVzLmluY2x1ZGVzKHRpdGxlKSl7XHJcbiAgICAgIHZhciBmYWlsdXJlU3RhdHVzPXRydWU7XHJcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICBjb250ZXh0LnJlcy53cml0ZUhlYWQoMzAyLCB7bG9jYXRpb246ICcvJ30pXHJcbiAgICAgICAgY29udGV4dC5yZXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZhaWx1cmVTdGF0dXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE9uIGNsaWVudFxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge31cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkucG9wY29ybnRhbGVzLmNvbS9tb3ZpZXJldmlldz9tb3ZpZT1gK2NvbnRleHQucGFyYW1zLm1vdmllKTtcclxuICAgIGNvbnN0IG1vdmllID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW92aWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgfVxyXG5jbGFzcyBEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB2YXIgcmVzdWx0ID0gcHJvcHMubW92aWU7XHJcbiAgICBpZih0eXBlb2YocmVzdWx0LnJldmlldykgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXN1bHQucmV2aWV3PUpTT04ucGFyc2UocmVzdWx0LnJldmlldyk7XHJcbiAgICBpZih0eXBlb2YocmVzdWx0LnRpY2tldERldGFpbHMpID09IFwic3RyaW5nXCIpXHJcbiAgICByZXN1bHQudGlja2V0RGV0YWlscyA9IEpTT04ucGFyc2UocmVzdWx0LnRpY2tldERldGFpbHMpO1xyXG4gICAgdmFyIG1vdmllVGl0bGUgPSByZXN1bHQudGl0bGU7XHJcblxyXG4gICAgaWYobW92aWVUaXRsZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICBtb3ZpZVRpdGxlPVwiUG9wY29ybiBUYWxlc1wiO1xyXG4gICAgfVxyXG4gICAgZGVidWdnZXI7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGxvYWRpbmc6dHJ1ZSxcclxuICAgICAgICBzaGFyZVVybDpcInd3dy5wb3Bjb3JudGFsZXMuY29tXCIsXHJcbiAgICAgICAgdGFnczpcIiNwb3Bjb3JudGFsZXMgI21vdmlldGltZSAjbW92aWVyZXZpZXcgI3BvcGNvcm4gI2xldHN3YXRjaFwiLFxyXG4gICAgICAgIHNlbGVjdGVkTW92aWUgOiByZXN1bHQsXHJcbiAgICAgICAgc2VsZWN0ZWRUYWI6MCxcclxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIHNoYXJlVXJsOlwid3d3LnBvcGNvcm50YWxlcy5jb20vcmV2aWV3L1wiK21vdmllVGl0bGUucmVwbGFjZSgvIC9nLCAnJTIwJyksXHJcbiAgICAgICAgcXVvdGU6XCJJIHJlYWQgYSByZXZpZXcgb2YgXCIrbW92aWVUaXRsZStcIiBhbmQgSSBmZWVsIHRoYXQgaXQncyB3b3J0aCB3YXRjaGluZy4gUmVhZCB0aGUgcmV2aWV3IGFuZCBsZXQncyB3YXRjaCBpdCB0b2dldGhlciEhXCJcclxuICAgICAgICAgIFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh2KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZFRhYjp2XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9vbGJhciA9ICgpID0+IHtcclxuICAgIHN3aXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkVGFiKSB7XHJcbiAgICAgICAgY2FzZSAwOiBcclxuICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yZXZpZXcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIDxTeW5vcHNpcyBzeW5vcHNpcz17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJldmlldy5zeW5vcHNpc30vPlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTogXHJcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUucmV2aWV3ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiA8UmV2aWV3IHJldmlldz17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJldmlld30gdGl0bGU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZX0vPlxyXG4gICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOiBcclxuICAgICAgICAgIHJldHVybiA8Q2FzdCBjYXN0PXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUuY2FzdH0vPlxyXG4gICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM6IFxyXG4gICAgICAgICAgcmV0dXJuIDxUaWNrZXQgdGlja2V0RGV0YWlscz17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnRpY2tldERldGFpbHN9Lz5cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cD48L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59O1xyXG5cclxuaGVhcnRzID0gKHN0YXJDb3VudCkgPT4ge1xyXG4gIGlmKHN0YXJDb3VudCA9PSB1bmRlZmluZWQpXHJcbiAgICByZXR1cm47XHJcbiAgY29uc3QgdmFsdWUgPSBzdGFyQ291bnQ7XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkUmF0aW5nIG5hbWU9XCJjdXN0b21pemVkLWNvbG9yXCIgZGVmYXVsdFZhbHVlPXt2YWx1ZX0gcHJlY2lzaW9uPXswLjF9IHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZhdm9yaXRlSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPn0vPlxyXG4gICk7XHJcbn1cclxuXHJcbnJlbmRlcigpe1xyXG4gIGNvbnN0IHRvb2xiYXIgPSB0aGlzLmdldFRvb2xiYXIoKTtcclxuICBjb25zdCBvdmVyYWxsUmF0aW5nID0gdGhpcy5oZWFydHModGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnJhdGluZyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnRpdGxlICsgXCIgUmV2aWV3IFwiK3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yYXRpbmcrXCIvNVwifTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUucmV2aWV3LnN5bm9wc2lzfS8+XHJcbiAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiICBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgICA8bGluayBhc3luYyByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cuUG9wY29ybnRhbGVzLmNvbS9cIiAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzcuMTQuMy9maXJlYmFzZS1hcHAuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy83LjE0LjMvZmlyZWJhc2UtYW5hbHl0aWNzLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgdmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeUFYdUlJTkxuUm13YWN4anlzM0k2eml1U1RxOGxKMGl3OFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aERvbWFpbjogXCJwb3Bjb3JudGFsZXMtNDA3NjcuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3BvcGNvcm50YWxlcy00MDc2Ny5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiBcInBvcGNvcm50YWxlcy00MDc2N1wiLFxyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJwb3Bjb3JudGFsZXMtNDA3NjcuYXBwc3BvdC5jb21cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUxMjEzNzc5NDA1MVwiLFxyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IFwiMTo1MTIxMzc3OTQwNTE6d2ViOmJlNjEyZjJkNmFhN2MzNjhkNGI0MzZcIixcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1MSzVEQlNCTVRSXCJcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmFuYWx5dGljcygpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcblxyXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnVUEtMTcwNzg2NzU0LTEnKTtcclxuICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtMTcwNzg2NzU0LTFcIj48L3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5sb2FkaW5nID8gJ2hpZGRlbicgOiAnJ30+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEFwcEJhciBpZD1cImFwcEJhclwiIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgaWQ9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+PEhvbWVCdXR0b24vPjwvYT5cclxuICAgICAgICAgICAgPGgxIGlkPVwidGl0bGVcIj5Qb3Bjb3JuIFRhbGVzPC9oMT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHRUb29sYmFyXCI+XHJcbiAgICAgICAgICAgIDxTb2NpYWxNZW51Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkXCIgPlxyXG4gICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezE5fT5cclxuICAgICAgICAgICAgICA8TGF6eUltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgYWx0PXtcIlBvcGNvcm4gVGFsZXMgXCIgKyB0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudGl0bGUgKyBcIiBSZXZpZXcgSW1hZ2VcIn0gdW5sb2FkZWRTcmM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZUltYWdlfS8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgY2xhc3NOYW1lPVwicmF0aW5nSGVhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAge292ZXJhbGxSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gbWRVcCA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXswfSBqdXN0aWZ5ID0gXCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMSBjZW50ZXJBbGlnbmVkXCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS50aXRsZX0gKHt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUueWVhcn0pPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPERldGFpbGVkUmF0aW5nIHNlbGVjdGVkTW92aWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZX0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDIgY2VudGVyQWxpZ25lZFwiID57dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLmxhbmd1YWdlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDIgY2VudGVyQWxpZ25lZFwiPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUuZ2VucmUuam9pbihcIixcIil9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnkgPSBcImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7b3ZlcmFsbFJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW92aWUtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17MH0ganVzdGlmeSA9IFwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDEgY2VudGVyQWxpZ25lZFwiPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudGl0bGV9ICh7dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLnllYXJ9KTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxEZXRhaWxlZFJhdGluZyBzZWxlY3RlZE1vdmllPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWV9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlckxldmVsMlwiPnt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUubGFuZ3VhZ2V9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXJMZXZlbDJcIj57dGhpcy5zdGF0ZS5zZWxlY3RlZE1vdmllLmdlbnJlLmpvaW4oXCIsXCIpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGVyTGV2ZWwyXCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZS5yYXRpbmd9LzU8L2gzPiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHF1b3RlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUd2l0dGVySWNvbiBzaXplPXsyOH0gcm91bmQvPjwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXt0aGlzLnN0YXRlLnNoYXJlVXJsfSB0aXRsZT17dGhpcy5zdGF0ZS5xdW90ZX0gaGFzaHRhZz17dGhpcy5zdGF0ZS50YWdzfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxGYWNlYm9va0ljb24gc2l6ZT17Mjh9IHJvdW5kLz48L0ZhY2Vib29rU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxXaGF0c2FwcEljb24gc2l6ZT17Mjh9IHJvdW5kLz48L1doYXRzYXBwU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VGVsZWdyYW1TaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUZWxlZ3JhbUljb24gc2l6ZT17Mjh9IHJvdW5kLz48L1RlbGVncmFtU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRyYWlsZXJfZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJ0cmFpbGVyXCIgdGl0bGU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZX0gc3JjPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWUudHJhaWxlcn1cclxuICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1kZXRhaWxcIj5cclxuICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezh9PlxyXG4gICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICA8VGFicyBvbkNoYW5nZT17KGUsdik9Pnt0aGlzLmhhbmRsZUNoYW5nZSh2KX19ICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFRhYn0gdmFyaWFudD1cImZ1bGxXaWR0aFwiIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFicyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17MH0gbGFiZWw9XCJSZXZpZXdcIiBjbGFzc05hbWU9XCJ0YWJcIi8+XHJcbiAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17MX0gbGFiZWw9XCJIaXQgJiBNaXNzXCIgY2xhc3NOYW1lPVwidGFiXCIvPlxyXG4gICAgICAgICAgICAgIDxUYWIgdmFsdWU9ezJ9IGxhYmVsPVwiQ2FzdCAmIENyZXdcIiBjbGFzc05hbWU9XCJ0YWJcIi8+XHJcbiAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17M30gbGFiZWw9XCJUaWNrZXRcIiBjbGFzc05hbWU9XCJ0YWJcIi8+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7dG9vbGJhcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyVGV4dFwiPiBcclxuICAgICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUd2l0dGVySWNvbiBzaXplPXsyNX0gcm91bmQvPjwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHF1b3RlPXt0aGlzLnN0YXRlLnF1b3RlfSBoYXNodGFnPXt0aGlzLnN0YXRlLnRhZ3N9IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCI+PEZhY2Vib29rSWNvbiBzaXplPXsyNX0gcm91bmQvPjwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b24gdXJsPXt0aGlzLnN0YXRlLnNoYXJlVXJsfSB0aXRsZT17dGhpcy5zdGF0ZS5xdW90ZX0gY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb25cIj48V2hhdHNhcHBJY29uIHNpemU9ezI1fSByb3VuZC8+PC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8VGVsZWdyYW1TaGFyZUJ1dHRvbiB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVcmx9IHRpdGxlPXt0aGlzLnN0YXRlLnF1b3RlfSBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiPjxUZWxlZ3JhbUljb24gc2l6ZT17MjV9IHJvdW5kLz48L1RlbGVncmFtU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeSA9IFwiY2VudGVyXCIgaWQ9XCJmb290ZXJUZXh0XCI+XHJcbiAgICAgICAgICAgICAgPGg0IGlkPVwiZmVlZGJhY2tUZXh0XCI+TmVlZCB5b3VyIGZlZWRiYWNrIHRvIGltcHJvdmUgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpwb3Bjb3JudGFsZXMxOUBnbWFpbC5jb21cIj4gPE1haWxJY29uLz48L2E+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Bc3Npc3RhbnRQaG90b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmVlbmhlcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhbmNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTW92aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvUmF0aW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaGFyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9