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

/***/ "./pages/addMovie.js":
/*!***************************!*\
  !*** ./pages/addMovie.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "@material-ui/core/TextareaAutosize");
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\projects\\ui\\pages\\addMovie.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Movie extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setupBeforeUnloadListener", () => {
      window.addEventListener("beforeunload", ev => {
        ev.preventDefault();
        return ev.returnValue = "Are you sure you want to close ?";
      });
    });

    this.state = {
      title: "",
      titleImage: "",
      year: "2020-05",
      genre: "",
      rating: 5,
      scriptRating: 5,
      directionRating: 5,
      dialoguesRating: 5,
      cinematographyRating: 5,
      editingRating: 5,
      musicRating: 5,
      actingRating: 5,
      synopsis: "",
      pros: "",
      cons: "",
      language: "",
      cast: "",
      ticketImage: "",
      watchDate: "2020-05-19",
      placeWatched: "",
      userId: "",
      password: "",
      trailer: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentDidMount() {
    // Activate the event listener
    this.setupBeforeUnloadListener();
  }

  onSubmit(evt) {
    var data = {
      title: this.state.title,
      titleImage: this.state.titleImage,
      year: this.state.year.substr(0, 4),
      language: this.state.language,
      genre: this.state.genre.split(","),
      rating: this.state.rating,
      scriptRating: this.state.scriptRating,
      directionRating: this.state.directionRating,
      dialoguesRating: this.state.dialoguesRating,
      cinematographyRating: this.state.cinematographyRating,
      editingRating: this.state.editingRating,
      musicRating: this.state.musicRating,
      actingRating: this.state.actingRating,
      trailer: this.state.trailer,
      review: {
        synopsis: this.state.synopsis,
        pros: this.state.pros.split("\n"),
        cons: this.state.cons.split("\n")
      },
      cast: this.state.cast.split("\n"),
      ticketDetails: {
        ticketImage: this.state.ticketImage,
        watchDate: this.state.watchDate,
        placeWatched: this.state.placeWatched
      },
      userId: this.state.userId,
      password: this.state.password
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    var proxyUrl = 'https://fierce-chamber-21718.herokuapp.com/';
    var url = 'https://api.popcorntales.com/movie';
    fetch(proxyUrl + url, requestOptions).then(response => response.json()).then(data => {
      alert(data.message);
      console.log(data);
    }).catch(error => {
      alert(error);
      console.error(error);
    });
  }

  render() {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 12
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }, "Add Review"), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default.a, {
      component: "fieldset",
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "text",
      value: this.state.title,
      onChange: e => this.setState({
        title: e.target.value
      }),
      label: "Title",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mediumField",
      type: "text",
      value: this.state.titleImage,
      onChange: e => this.setState({
        titleImage: e.target.value
      }),
      label: "Title Image",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mediumField",
      type: "text",
      value: this.state.language,
      onChange: e => this.setState({
        language: e.target.value
      }),
      label: "Language",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "month",
      value: this.state.year,
      onChange: e => this.setState({
        year: e.target.value
      }),
      label: "Year",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "text",
      value: this.state.genre,
      onChange: e => this.setState({
        genre: e.target.value
      }),
      label: "Genre",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.rating,
      onChange: e => this.setState({
        rating: e.target.value
      }),
      label: "Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.scriptRating,
      onChange: e => this.setState({
        scriptRating: e.target.value
      }),
      label: "Script Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.directionRating,
      onChange: e => this.setState({
        directionRating: e.target.value
      }),
      label: "Direction Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.dialoguesRating,
      onChange: e => this.setState({
        dialoguesRating: e.target.value
      }),
      label: "Dialogues Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.cinematographyRating,
      onChange: e => this.setState({
        cinematographyRating: e.target.value
      }),
      label: "Cinematography Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.editingRating,
      onChange: e => this.setState({
        editingRating: e.target.value
      }),
      label: "Editing Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.musicRating,
      onChange: e => this.setState({
        musicRating: e.target.value
      }),
      label: "Music Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "number",
      value: this.state.actingRating,
      onChange: e => this.setState({
        actingRating: e.target.value
      }),
      label: "Acting Rating",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mediumField",
      type: "text",
      value: this.state.trailer,
      onChange: e => this.setState({
        trailer: e.target.value
      }),
      label: "Trailer",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Synopsis",
      rowsMin: 3,
      placeholder: "Synopsis",
      value: this.state.synopsis,
      onChange: e => this.setState({
        synopsis: e.target.value
      }),
      className: "textArea",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Pros",
      rowsMin: 3,
      placeholder: "Pros",
      value: this.state.pros,
      onChange: e => this.setState({
        pros: e.target.value
      }),
      className: "textArea",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Cons",
      rowsMin: 3,
      placeholder: "Cons",
      value: this.state.cons,
      onChange: e => this.setState({
        cons: e.target.value
      }),
      className: "textArea",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Cast",
      rowsMin: 3,
      placeholder: "Cast",
      value: this.state.cast,
      onChange: e => this.setState({
        cast: e.target.value
      }),
      className: "textArea",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mediumField",
      type: "text",
      value: this.state.ticketImage,
      onChange: e => this.setState({
        ticketImage: e.target.value
      }),
      label: "Ticket Image",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "date",
      value: this.state.watchDate,
      onChange: e => this.setState({
        watchDate: e.target.value
      }),
      label: "Watch Date",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "text",
      value: this.state.placeWatched,
      onChange: e => this.setState({
        placeWatched: e.target.value
      }),
      label: "Venue",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "text",
      value: this.state.userId,
      onChange: e => this.setState({
        userId: e.target.value
      }),
      label: "User Id",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "smallField",
      type: "password",
      value: this.state.password,
      onChange: e => this.setState({
        password: e.target.value
      }),
      label: "Password",
      InputProps: {
        disableUnderline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClick: this.onSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, "Submit"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/addMovie.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vinay\Desktop\projects\ui\pages\addMovie.js */"./pages/addMovie.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/TextareaAutosize":
/*!*****************************************************!*\
  !*** external "@material-ui/core/TextareaAutosize" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextareaAutosize");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRkTW92aWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJNb3ZpZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwic3RhdGUiLCJ0aXRsZSIsInRpdGxlSW1hZ2UiLCJ5ZWFyIiwiZ2VucmUiLCJyYXRpbmciLCJzY3JpcHRSYXRpbmciLCJkaXJlY3Rpb25SYXRpbmciLCJkaWFsb2d1ZXNSYXRpbmciLCJjaW5lbWF0b2dyYXBoeVJhdGluZyIsImVkaXRpbmdSYXRpbmciLCJtdXNpY1JhdGluZyIsImFjdGluZ1JhdGluZyIsInN5bm9wc2lzIiwicHJvcyIsImNvbnMiLCJsYW5ndWFnZSIsImNhc3QiLCJ0aWNrZXRJbWFnZSIsIndhdGNoRGF0ZSIsInBsYWNlV2F0Y2hlZCIsInVzZXJJZCIsInBhc3N3b3JkIiwidHJhaWxlciIsIm9uU3VibWl0IiwiYmluZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXR1cEJlZm9yZVVubG9hZExpc3RlbmVyIiwiZXZ0IiwiZGF0YSIsInN1YnN0ciIsInNwbGl0IiwicmV2aWV3IiwidGlja2V0RGV0YWlscyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJveHlVcmwiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJhbGVydCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInJlbmRlciIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZGlzYWJsZVVuZGVybGluZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FB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SjtBQUE2SixnQkFBVSxFQUFFO0FBQUVDLHdCQUFnQixFQUFFO0FBQXBCLE9BQXpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF6QkosRUE0QkksTUFBQywrREFBRDtBQUFRLGFBQU8sRUFBRSxLQUFLckMsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkosQ0FEQyxDQUZJLENBQVA7QUFvQ0Q7O0FBckgyQjs7QUF3SGZqQyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRkTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcclxuY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICB0aXRsZUltYWdlOlwiXCIseWVhcjpcIjIwMjAtMDVcIixnZW5yZTpcIlwiLHJhdGluZzo1LHNjcmlwdFJhdGluZzo1LGRpcmVjdGlvblJhdGluZzo1LGRpYWxvZ3Vlc1JhdGluZzo1LGNpbmVtYXRvZ3JhcGh5UmF0aW5nOjUsXHJcbiAgICAgIGVkaXRpbmdSYXRpbmc6NSxtdXNpY1JhdGluZzo1LGFjdGluZ1JhdGluZzo1LFxyXG4gICAgICBzeW5vcHNpczpcIlwiLHByb3M6XCJcIixjb25zOlwiXCIsbGFuZ3VhZ2U6XCJcIixjYXN0OlwiXCIsXHJcbiAgICAgIHRpY2tldEltYWdlOlwiXCIsd2F0Y2hEYXRlOlwiMjAyMC0wNS0xOVwiLHBsYWNlV2F0Y2hlZDpcIlwiLHVzZXJJZDpcIlwiLHBhc3N3b3JkOlwiXCIsdHJhaWxlcjpcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3Qpe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBzZXR1cEJlZm9yZVVubG9hZExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZXYucmV0dXJuVmFsdWU9XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgP1wiO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIEFjdGl2YXRlIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgdGhpcy5zZXR1cEJlZm9yZVVubG9hZExpc3RlbmVyKCk7XHJcbn1cclxuICBcclxuICBvblN1Ym1pdChldnQpe1xyXG4gICAgdmFyIGRhdGEgPXtcclxuICAgICAgdGl0bGU6dGhpcy5zdGF0ZS50aXRsZSxcclxuICAgICAgdGl0bGVJbWFnZTp0aGlzLnN0YXRlLnRpdGxlSW1hZ2UsXHJcbiAgICAgIHllYXI6dGhpcy5zdGF0ZS55ZWFyLnN1YnN0cigwLDQpLFxyXG4gICAgICBsYW5ndWFnZTp0aGlzLnN0YXRlLmxhbmd1YWdlLFxyXG4gICAgICBnZW5yZTp0aGlzLnN0YXRlLmdlbnJlLnNwbGl0KFwiLFwiKSxcclxuICAgICAgcmF0aW5nOnRoaXMuc3RhdGUucmF0aW5nLFxyXG4gICAgICBzY3JpcHRSYXRpbmc6dGhpcy5zdGF0ZS5zY3JpcHRSYXRpbmcsXHJcbiAgICAgIGRpcmVjdGlvblJhdGluZzp0aGlzLnN0YXRlLmRpcmVjdGlvblJhdGluZyxcclxuICAgICAgZGlhbG9ndWVzUmF0aW5nOnRoaXMuc3RhdGUuZGlhbG9ndWVzUmF0aW5nLFxyXG4gICAgICBjaW5lbWF0b2dyYXBoeVJhdGluZzp0aGlzLnN0YXRlLmNpbmVtYXRvZ3JhcGh5UmF0aW5nLFxyXG4gICAgICBlZGl0aW5nUmF0aW5nOnRoaXMuc3RhdGUuZWRpdGluZ1JhdGluZyxcclxuICAgICAgbXVzaWNSYXRpbmc6dGhpcy5zdGF0ZS5tdXNpY1JhdGluZyxcclxuICAgICAgYWN0aW5nUmF0aW5nOnRoaXMuc3RhdGUuYWN0aW5nUmF0aW5nLFxyXG4gICAgICB0cmFpbGVyOnRoaXMuc3RhdGUudHJhaWxlcixcclxuICAgICAgcmV2aWV3OntcclxuICAgICAgICBzeW5vcHNpczp0aGlzLnN0YXRlLnN5bm9wc2lzLFxyXG4gICAgICAgIHByb3M6dGhpcy5zdGF0ZS5wcm9zLnNwbGl0KFwiXFxuXCIpLFxyXG4gICAgICAgIGNvbnM6dGhpcy5zdGF0ZS5jb25zLnNwbGl0KFwiXFxuXCIpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhc3Q6dGhpcy5zdGF0ZS5jYXN0LnNwbGl0KFwiXFxuXCIpLFxyXG4gICAgICB0aWNrZXREZXRhaWxzOntcclxuICAgICAgICB0aWNrZXRJbWFnZTp0aGlzLnN0YXRlLnRpY2tldEltYWdlLFxyXG4gICAgICAgIHdhdGNoRGF0ZTp0aGlzLnN0YXRlLndhdGNoRGF0ZSxcclxuICAgICAgICBwbGFjZVdhdGNoZWQ6dGhpcy5zdGF0ZS5wbGFjZVdhdGNoZWRcclxuICAgICAgfSxcclxuICAgICAgdXNlcklkOnRoaXMuc3RhdGUudXNlcklkLFxyXG4gICAgICBwYXNzd29yZDp0aGlzLnN0YXRlLnBhc3N3b3JkXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICB9O1xyXG5cclxuICB2YXIgcHJveHlVcmwgPSAnaHR0cHM6Ly9maWVyY2UtY2hhbWJlci0yMTcxOC5oZXJva3VhcHAuY29tLyc7XHJcbiAgdmFyIHVybCA9ICdodHRwczovL2FwaS5wb3Bjb3JudGFsZXMuY29tL21vdmllJztcclxuXHJcbiAgZmV0Y2gocHJveHlVcmwgKyB1cmwsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PntcclxuICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4gXHJcbiAgICAgIDxoMz5BZGQgUmV2aWV3PC9oMz5cclxuICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe3RpdGxlIDogZS50YXJnZXQudmFsdWV9KX0gbGFiZWw9e1wiVGl0bGVcIn0gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19Lz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibWVkaXVtRmllbGRcIiB0eXBlPXtcInRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUudGl0bGVJbWFnZX0gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHt0aXRsZUltYWdlIDogZS50YXJnZXQudmFsdWV9KX0gbGFiZWw9e1wiVGl0bGUgSW1hZ2VcIn0gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19Lz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibWVkaXVtRmllbGRcIiB0eXBlPXtcInRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUubGFuZ3VhZ2V9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7bGFuZ3VhZ2UgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJMYW5ndWFnZVwifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJtb250aFwifSB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe3llYXIgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJZZWFyXCJ9IElucHV0UHJvcHM9e3sgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSB9fS8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cInNtYWxsRmllbGRcIiB0eXBlPXtcInRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUuZ2VucmV9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7Z2VucmUgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJHZW5yZVwifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJudW1iZXJcIn0gdmFsdWU9e3RoaXMuc3RhdGUucmF0aW5nfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe3JhdGluZyA6IGUudGFyZ2V0LnZhbHVlfSl9IGxhYmVsPXtcIlJhdGluZ1wifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJudW1iZXJcIn0gdmFsdWU9e3RoaXMuc3RhdGUuc2NyaXB0UmF0aW5nfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe3NjcmlwdFJhdGluZyA6IGUudGFyZ2V0LnZhbHVlfSl9IGxhYmVsPXtcIlNjcmlwdCBSYXRpbmdcIn0gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19Lz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwic21hbGxGaWVsZFwiIHR5cGU9e1wibnVtYmVyXCJ9IHZhbHVlPXt0aGlzLnN0YXRlLmRpcmVjdGlvblJhdGluZ30gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHtkaXJlY3Rpb25SYXRpbmcgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJEaXJlY3Rpb24gUmF0aW5nXCJ9IElucHV0UHJvcHM9e3sgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSB9fS8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cInNtYWxsRmllbGRcIiB0eXBlPXtcIm51bWJlclwifSB2YWx1ZT17dGhpcy5zdGF0ZS5kaWFsb2d1ZXNSYXRpbmd9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7ZGlhbG9ndWVzUmF0aW5nIDogZS50YXJnZXQudmFsdWV9KX0gbGFiZWw9e1wiRGlhbG9ndWVzIFJhdGluZ1wifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJudW1iZXJcIn0gdmFsdWU9e3RoaXMuc3RhdGUuY2luZW1hdG9ncmFwaHlSYXRpbmd9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7Y2luZW1hdG9ncmFwaHlSYXRpbmcgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJDaW5lbWF0b2dyYXBoeSBSYXRpbmdcIn0gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19Lz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwic21hbGxGaWVsZFwiIHR5cGU9e1wibnVtYmVyXCJ9IHZhbHVlPXt0aGlzLnN0YXRlLmVkaXRpbmdSYXRpbmd9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZ1JhdGluZyA6IGUudGFyZ2V0LnZhbHVlfSl9IGxhYmVsPXtcIkVkaXRpbmcgUmF0aW5nXCJ9IElucHV0UHJvcHM9e3sgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSB9fS8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cInNtYWxsRmllbGRcIiB0eXBlPXtcIm51bWJlclwifSB2YWx1ZT17dGhpcy5zdGF0ZS5tdXNpY1JhdGluZ30gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHttdXNpY1JhdGluZyA6IGUudGFyZ2V0LnZhbHVlfSl9IGxhYmVsPXtcIk11c2ljIFJhdGluZ1wifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJudW1iZXJcIn0gdmFsdWU9e3RoaXMuc3RhdGUuYWN0aW5nUmF0aW5nfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe2FjdGluZ1JhdGluZyA6IGUudGFyZ2V0LnZhbHVlfSl9IGxhYmVsPXtcIkFjdGluZyBSYXRpbmdcIn0gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19Lz4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibWVkaXVtRmllbGRcIiB0eXBlPXtcInRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUudHJhaWxlcn0gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHt0cmFpbGVyIDogZS50YXJnZXQudmFsdWV9KX0gbGFiZWw9e1wiVHJhaWxlclwifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemUgYXJpYS1sYWJlbD1cIlN5bm9wc2lzXCIgcm93c01pbj17M30gcGxhY2Vob2xkZXI9XCJTeW5vcHNpc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnN5bm9wc2lzfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe3N5bm9wc2lzIDogZS50YXJnZXQudmFsdWV9KX0gY2xhc3NOYW1lPVwidGV4dEFyZWFcIiAgLz5cclxuICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplIGFyaWEtbGFiZWw9XCJQcm9zXCIgcm93c01pbj17M30gcGxhY2Vob2xkZXI9XCJQcm9zXCIgdmFsdWU9e3RoaXMuc3RhdGUucHJvc30gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHtwcm9zIDogZS50YXJnZXQudmFsdWV9KX0gIGNsYXNzTmFtZT1cInRleHRBcmVhXCIvPlxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemUgYXJpYS1sYWJlbD1cIkNvbnNcIiByb3dzTWluPXszfSBwbGFjZWhvbGRlcj1cIkNvbnNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb25zfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe2NvbnMgOiBlLnRhcmdldC52YWx1ZX0pfSAgY2xhc3NOYW1lPVwidGV4dEFyZWFcIi8+XHJcbiAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBhcmlhLWxhYmVsPVwiQ2FzdFwiIHJvd3NNaW49ezN9IHBsYWNlaG9sZGVyPVwiQ2FzdFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNhc3R9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7Y2FzdCA6IGUudGFyZ2V0LnZhbHVlfSl9ICBjbGFzc05hbWU9XCJ0ZXh0QXJlYVwiLz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibWVkaXVtRmllbGRcIiB0eXBlPXtcInRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUudGlja2V0SW1hZ2V9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7dGlja2V0SW1hZ2UgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJUaWNrZXQgSW1hZ2VcIn0gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19Lz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwic21hbGxGaWVsZFwiIHR5cGU9e1wiZGF0ZVwifSB2YWx1ZT17dGhpcy5zdGF0ZS53YXRjaERhdGV9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7d2F0Y2hEYXRlIDogZS50YXJnZXQudmFsdWV9KX0gbGFiZWw9e1wiV2F0Y2ggRGF0ZVwifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXt0aGlzLnN0YXRlLnBsYWNlV2F0Y2hlZH0gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHtwbGFjZVdhdGNoZWQgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJWZW51ZVwifSBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJzbWFsbEZpZWxkXCIgdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJJZH0gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHt1c2VySWQgOiBlLnRhcmdldC52YWx1ZX0pfSBsYWJlbD17XCJVc2VyIElkXCJ9IElucHV0UHJvcHM9e3sgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSB9fS8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cInNtYWxsRmllbGRcIiB0eXBlPXtcInBhc3N3b3JkXCJ9IHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17ZT0+IHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkIDogZS50YXJnZXQudmFsdWV9KX0gbGFiZWw9e1wiUGFzc3dvcmRcIn0gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19Lz5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vblN1Ym1pdH0gPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==