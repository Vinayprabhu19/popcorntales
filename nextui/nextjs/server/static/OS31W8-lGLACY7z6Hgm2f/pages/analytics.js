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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NFYf");


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "HAYV":
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "NFYf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qt1I");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Q6gG");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HAYV");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YZXy");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4151");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ms0O");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xAQ3");
/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_chartkick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










async function getServerSideProps(context) {
  const res = await fetch('https://api.popcorntales.com/movie');
  const movies = await res.json(); // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time

  return {
    props: {
      movies
    }
  };
}

class Analytics extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);
    var result = props.movies;
    var languagesData = this.getLanguages(result);
    var yearData = this.getMovieCountByYear(result);
    var categoryData = this.getMovieCountByCategory(result);
    var ratingByCategory = this.getRatingCountByCategory(result);
    var ratingCountByLanguage = this.getratingCountByLanguage(result);
    this.state = {
      totalMovies: result.length,
      languagesData: languagesData,
      yearData: yearData,
      categoryData: categoryData,
      ratingByCategory: ratingByCategory,
      ratingCountByLanguage: ratingCountByLanguage
    };
  }

  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx("title", null, "Popcorn Tales"), __jsx("meta", {
      name: "description",
      content: "Popcorn Tales is an Indian movie review website reviewing movies from Kannada,Hindi,English,Tamil,Telugu,Malayalam and other languages. Find latest movie review here."
    }), __jsx("link", {
      async: true,
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), __jsx("meta", {
      name: "theme-color",
      content: "#000000"
    }), __jsx("link", {
      async: true,
      rel: "canonical",
      href: "https://www.Popcorntales.com/"
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js"
    }), __jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"
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
      }
    }), __jsx("script", null), __jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-170786754-1"
    })), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "appBar",
      position: "static"
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "toolbar"
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
      container: true,
      alignContent: "center"
    }, __jsx("a", {
      href: "/"
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default.a, null)), __jsx("h1", {
      id: "title"
    }, "Popcorn Tales")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
      container: true,
      justify: "center",
      className: "analytics"
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      elevation: 15,
      className: "mediumChart"
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
      container: true,
      justify: "center"
    }, __jsx("h3", null, "Total Movies : ", this.state.totalMovies), __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_8__["PieChart"], {
      id: "movieChart",
      data: this.state.languagesData,
      legend: "bottom",
      width: 250,
      height: 250
    }))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      elevation: 15,
      className: "mediumChart"
    }, __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_8__["PieChart"], {
      data: this.state.categoryData,
      legend: "bottom",
      donut: true,
      id: "categoryChart"
    })), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      elevation: 15,
      className: "mediumChart"
    }, __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_8__["LineChart"], {
      data: this.state.ratingCountByLanguage,
      id: "languageLineChart",
      precision: 2,
      xtitle: "Movie",
      ytitle: "Rating",
      min: 0,
      max: 5.0,
      legend: "bottom"
    })), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      elevation: 15,
      className: "mediumChart"
    }, __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_8__["LineChart"], {
      data: this.state.ratingByCategory,
      precision: 2,
      id: "categoryLineChart",
      xtitle: "Category",
      ytitle: "Rating",
      min: 0,
      max: 5.0,
      legend: "bottom"
    })), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      elevation: 15,
      className: "mediumChart"
    }, __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_8__["ColumnChart"], {
      data: this.state.yearData,
      id: "yearChart",
      xtitle: "Year",
      ytitle: "Movies Watched"
    }))), __jsx("footer", null, __jsx("div", {
      id: "footerText"
    }, __jsx("h6", null, "Need your feedback to improve", __jsx("a", {
      href: "mailto:popcorntales19@gmail.com"
    }, " ", __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a, null))))));
  }

  getLanguages(result) {
    var languages = [];
    var languageCount = [];

    for (var i = 0; i < result.length; i++) {
      if (!languages.includes(result[i].language)) {
        languages.push(result[i].language);
      }
    }

    for (i = 0; i < languages.length; i++) {
      const count = result.filter(obj => obj.language === languages[i]).length;
      languageCount.push([languages[i], count]);
    }

    return languageCount;
  }

  getMovieCountByYear(result) {
    var year = [];
    var yearCount = [];

    for (var i = 0; i < result.length; i++) {
      var y = new Date(result[i].timeStamp).getFullYear();

      if (!year.includes(y)) {
        year.push(y);
      }
    }

    for (i = 0; i < year.length; i++) {
      const count = result.filter(obj => new Date(obj.timeStamp).getFullYear() === year[i]).length;
      yearCount.push([year[i], count]);
    }

    return yearCount;
  }

  getratingCountByLanguage(result) {
    var languages = [];

    for (var i = 0; i < result.length; i++) {
      if (!languages.includes(result[i].language)) {
        languages.push(result[i].language);
      }
    }

    var languageData = [{
      name: "min",
      data: {}
    }, {
      name: "avg",
      data: {}
    }, {
      name: "max",
      data: {}
    }];

    for (i = 0; i < languages.length; i++) {
      var filteredByLanguage = result.filter(obj => obj.language === languages[i]);
      var min = 999;
      var max = -1;
      var sum = 0;

      for (var j = 0; j < filteredByLanguage.length; j++) {
        if (filteredByLanguage[j].rating < min) min = filteredByLanguage[j].rating;
        if (filteredByLanguage[j].rating > max) max = filteredByLanguage[j].rating;
        sum = sum + filteredByLanguage[j].rating;
      }

      var avg = sum / filteredByLanguage.length;
      languageData[0].data[languages[i]] = min;
      languageData[1].data[languages[i]] = avg;
      languageData[2].data[languages[i]] = max;
    }

    return languageData;
  }

  getRatingCountByCategory(result) {
    var catergories = [];
    var categoryCount = [];

    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i].genre.length; j++) {
        if (!catergories.includes(result[i].genre[j])) catergories.push(result[i].genre[j]);
      }
    }

    var categoryData = [{
      name: "min",
      data: {}
    }, {
      name: "avg",
      data: {}
    }, {
      name: "max",
      data: {}
    }];

    for (i = 0; i < catergories.length; i++) {
      var filteredByCategory = result.filter(obj => obj.genre.includes(catergories[i]));
      var min = 999;
      var max = -1;
      var sum = 0;

      for (var j = 0; j < filteredByCategory.length; j++) {
        if (filteredByCategory[j].rating < min) min = filteredByCategory[j].rating;
        if (filteredByCategory[j].rating > max) max = filteredByCategory[j].rating;
        sum = sum + filteredByCategory[j].rating;
      }

      var avg = sum / filteredByCategory.length;
      categoryData[0].data[catergories[i]] = min;
      categoryData[1].data[catergories[i]] = avg;
      categoryData[2].data[catergories[i]] = max;
    }

    return categoryData;
  }

  getMovieCountByCategory(result) {
    var catergories = [];
    var categoryCount = [];

    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i].genre.length; j++) {
        if (!catergories.includes(result[i].genre[j])) catergories.push(result[i].genre[j]);
      }
    }

    for (var i = 0; i < catergories.length; i++) {
      const count = result.filter(obj => obj.genre.includes(catergories[i])).length;
      categoryCount.push([catergories[i], count]);
    }

    return categoryCount;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Analytics);

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "xAQ3":
/***/ (function(module, exports) {

module.exports = require("react-chartkick");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });