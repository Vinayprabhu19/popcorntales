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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Wk0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tmQs");


/***/ }),

/***/ "0F/j":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5+fn":
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "7s9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
        alt: this.props.alt
      });
    } else if (!this.state.loaded) {
      return __jsx("img", {
        className: this.props.className,
        style: this.props.style,
        src: this.props.unloadedSrc,
        alt: this.props.alt
      });
    }

    return __jsx("img", {
      className: this.props.className,
      style: this.props.style,
      src: this.props.src,
      alt: this.props.alt
    });
  }

}

/***/ }),

/***/ "8Eyd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AssistantPhoto");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "DbMq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GYHf");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("x54t");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8Eyd");
/* harmony import */ var _material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JDU/");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s4mK");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0F/j");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function SocialMenu() {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return __jsx("div", null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    "aria-controls": "social-menu",
    "aria-haspopup": "true",
    onClick: handleClick
  }, __jsx(_material_ui_icons_AssistantPhoto__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary",
    fontSize: "default"
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "social-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleClose
  }, __jsx("a", {
    href: "https://www.facebook.com/popcorntales",
    className: "social-icon"
  }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "default"
  }))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleClose
  }, __jsx("a", {
    href: "https://www.instagram.com/popcorntaless",
    className: "social-icon"
  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "default"
  })))));
}

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "JDU/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dTjI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),

/***/ "n9sB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "s4mK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "tmQs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// CONCATENATED MODULE: ./components/Synopsis.js
var __jsx = external_react_default.a.createElement;


class Synopsis_Synopisis extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      synopsis: props.synopsis
    };
  }

  render() {
    return __jsx("div", {
      className: "review-component"
    }, this.state.synopsis.split("\n").map(para => __jsx("p", {
      key: para,
      className: "synopsis"
    }, para)));
  }

}

/* harmony default export */ var Synopsis = (Synopsis_Synopisis);
// EXTERNAL MODULE: external "@material-ui/icons/Beenhere"
var Beenhere_ = __webpack_require__("tt9V");
var Beenhere_default = /*#__PURE__*/__webpack_require__.n(Beenhere_);

// EXTERNAL MODULE: external "@material-ui/icons/Cancel"
var Cancel_ = __webpack_require__("dTjI");
var Cancel_default = /*#__PURE__*/__webpack_require__.n(Cancel_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// CONCATENATED MODULE: ./components/Review.js
var Review_jsx = external_react_default.a.createElement;






class Review_Review extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      pros: props.review.pros,
      cons: props.review.cons,
      url: "https://api.popcorntales.com/image?object=Graph/" + props.title + ".png&width=500&height=500"
    };
  }

  render() {
    return Review_jsx("div", {
      className: "review-component"
    }, Review_jsx("h4", {
      className: "subsection"
    }, "What worked well?"), this.state.pros.map(pro => Review_jsx("div", {
      className: "flexbox-container",
      key: pro
    }, Review_jsx("div", null, Review_jsx(Beenhere_default.a, {
      className: "checkIcon"
    })), Review_jsx("p", {
      className: "pointerText"
    }, pro))), Review_jsx("h4", {
      className: "subsection"
    }, "What didn't work well?"), this.state.cons.map(con => Review_jsx("div", {
      className: "flexbox-container",
      key: con
    }, Review_jsx("div", null, Review_jsx(Cancel_default.a, {
      className: "cancelIcon"
    })), Review_jsx("p", {
      className: "pointerText"
    }, con))), Review_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      className: "graphContainer"
    }, Review_jsx(Paper_default.a, {
      elevation: 10
    }, Review_jsx("img", {
      src: this.state.url,
      className: "graphImage",
      alt: "Popcorn Tales " + this.props.title
    }))));
  }

}

/* harmony default export */ var components_Review = (Review_Review);
// EXTERNAL MODULE: ./components/LazyImage.js
var LazyImage = __webpack_require__("7s9b");

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalMovies"
var LocalMovies_ = __webpack_require__("ubZR");
var LocalMovies_default = /*#__PURE__*/__webpack_require__.n(LocalMovies_);

// CONCATENATED MODULE: ./components/Cast.js
var Cast_jsx = external_react_default.a.createElement;



class Cast_Cast extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      cast: this.props.cast
    };
  }

  render() {
    return Cast_jsx("div", {
      className: "cast-component"
    }, Cast_jsx("h3", {
      className: "subsection"
    }, "Cast"), this.state.cast.map(c => Cast_jsx("div", {
      className: "flexbox-container",
      key: c
    }, Cast_jsx("div", null, Cast_jsx(LocalMovies_default.a, {
      className: "movieIcon"
    })), Cast_jsx("p", {
      className: "pointerText"
    }, c))));
  }

}

/* harmony default export */ var components_Cast = (Cast_Cast);
// CONCATENATED MODULE: ./components/Ticket.js
var Ticket_jsx = external_react_default.a.createElement;




class Ticket_Cast extends external_react_["Component"] {
  constructor(props) {
    super(props);
    props.ticketDetails.watchDate = new Date(props.ticketDetails.watchDate).toDateString();
    if (!this.props.ticketDetails.ticketImage.startsWith("https://api.popcorntales.com/image?object=")) this.props.ticketDetails.ticketImage = "https://api.popcorntales.com/image?object=" + this.props.ticketDetails.ticketImage;
    this.state = {
      ticketDetails: this.props.ticketDetails
    };
  }

  render() {
    return Ticket_jsx("div", {
      className: "ticket-component"
    }, Ticket_jsx("h5", {
      className: "Ticket"
    }, "Date Watched : ", this.state.ticketDetails.watchDate), Ticket_jsx("h5", {
      className: "Ticket"
    }, "Place Watched : ", this.state.ticketDetails.placeWatched), Ticket_jsx(Grid_default.a, {
      container: true,
      justify: "center"
    }, Ticket_jsx("div", {
      id: "ticket-container"
    }, Ticket_jsx("img", {
      src: this.state.ticketDetails.ticketImage,
      className: "ticketImage",
      alt: "Ticket image of the movie"
    }))));
  }

}

/* harmony default export */ var Ticket = (Ticket_Cast);
// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);

// EXTERNAL MODULE: ./components/SocialMenu.js
var SocialMenu = __webpack_require__("DbMq");

// EXTERNAL MODULE: external "@material-ui/core/Menu"
var Menu_ = __webpack_require__("GYHf");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/lab/Rating"
var Rating_ = __webpack_require__("n9sB");
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");

// EXTERNAL MODULE: external "@material-ui/icons/Info"
var Info_ = __webpack_require__("/Wk0");
var Info_default = /*#__PURE__*/__webpack_require__.n(Info_);

// CONCATENATED MODULE: ./components/DetailedRating.js
var DetailedRating_jsx = external_react_default.a.createElement;







function DetailedRating(props) {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const stars = starCount => {
    if (starCount == undefined) return;
    const value = starCount;
    return DetailedRating_jsx(Rating_default.a, {
      name: "customized-color",
      defaultValue: value,
      precision: 0.1,
      value: value
    });
  };

  const actingRating = stars(props.selectedMovie.actingRating);
  const directionRating = stars(props.selectedMovie.directionRating);
  const dialoguesRating = stars(props.selectedMovie.dialoguesRating);
  const scriptRating = stars(props.selectedMovie.scriptRating);
  const editingRating = stars(props.selectedMovie.editingRating);
  const cinematographyRating = stars(props.selectedMovie.cinematographyRating);
  const musicRating = stars(props.selectedMovie.musicRating);
  return DetailedRating_jsx("div", null, DetailedRating_jsx(Info_default.a, {
    onClick: handleClick,
    className: "infoBtn"
  }), DetailedRating_jsx(Menu_default.a, {
    id: "rating-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, DetailedRating_jsx(MenuItem_default.a, {
    onClick: handleClose
  }, DetailedRating_jsx("div", null, DetailedRating_jsx("h5", null, "Script - ", props.selectedMovie.scriptRating, "/5"), scriptRating)), DetailedRating_jsx(MenuItem_default.a, {
    onClick: handleClose
  }, DetailedRating_jsx("div", null, DetailedRating_jsx("h5", null, "Acting - ", props.selectedMovie.actingRating, "/5"), actingRating)), DetailedRating_jsx(MenuItem_default.a, {
    onClick: handleClose
  }, DetailedRating_jsx("div", null, DetailedRating_jsx("h5", null, "Direction - ", props.selectedMovie.directionRating, "/5"), directionRating)), DetailedRating_jsx(MenuItem_default.a, {
    onClick: handleClose
  }, DetailedRating_jsx("div", null, DetailedRating_jsx("h5", null, "Dialogues - ", props.selectedMovie.dialoguesRating, "/5"), dialoguesRating)), DetailedRating_jsx(MenuItem_default.a, {
    onClick: handleClose
  }, DetailedRating_jsx("div", null, DetailedRating_jsx("h5", null, "Visuals - ", props.selectedMovie.cinematographyRating, "/5"), cinematographyRating)), DetailedRating_jsx(MenuItem_default.a, {
    onClick: handleClose
  }, DetailedRating_jsx("div", null, DetailedRating_jsx("h5", null, "Editing - ", props.selectedMovie.editingRating, "/5"), editingRating)), DetailedRating_jsx(MenuItem_default.a, {
    onClick: handleClose
  }, DetailedRating_jsx("div", null, DetailedRating_jsx("h5", null, "Music - ", props.selectedMovie.musicRating, "/5"), musicRating))));
}
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__("5+fn");

// CONCATENATED MODULE: ./pages/[movie].js
var _movie_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const StyledRating = Object(styles_["withStyles"])({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(Rating_default.a);
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

class _movie_Detail extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "getToolbar", () => {
      switch (this.state.selectedTab) {
        case 0:
          if (this.state.selectedMovie.review !== undefined) return _movie_jsx(Synopsis, {
            synopsis: this.state.selectedMovie.review.synopsis
          });
          break;

        case 1:
          if (this.state.selectedMovie.review !== undefined) return _movie_jsx(components_Review, {
            review: this.state.selectedMovie.review,
            title: this.state.selectedMovie.title
          });
          break;

        case 2:
          return _movie_jsx(components_Cast, {
            cast: this.state.selectedMovie.cast
          });
          break;

        case 3:
          return _movie_jsx(Ticket, {
            ticketDetails: this.state.selectedMovie.ticketDetails
          });
          break;

        default:
          {
            return _movie_jsx("p", null);
          }
      }
    });

    _defineProperty(this, "hearts", starCount => {
      if (starCount == undefined) return;
      const value = starCount;
      return _movie_jsx(StyledRating, {
        name: "customized-color",
        defaultValue: value,
        precision: 0.1,
        value: value,
        icon: _movie_jsx(Favorite_default.a, {
          fontSize: "inherit"
        })
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
    return _movie_jsx(external_react_default.a.Fragment, null, _movie_jsx(head_default.a, null, _movie_jsx("title", null, this.state.selectedMovie.title + " Review " + this.state.selectedMovie.rating + "/5"), _movie_jsx("meta", {
      name: "description",
      content: this.state.selectedMovie.review.synopsis
    }), _movie_jsx("link", {
      async: true,
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }), _movie_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), _movie_jsx("meta", {
      name: "theme-color",
      content: "#000000"
    }), _movie_jsx("link", {
      async: true,
      rel: "canonical",
      href: "https://www.Popcorntales.com/"
    }), _movie_jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js"
    }), _movie_jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"
    }), _movie_jsx("script", {
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
    }), _movie_jsx("script", null), _movie_jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-170786754-1"
    })), _movie_jsx("div", null, _movie_jsx("div", {
      id: "container",
      className: this.state.loading ? 'hidden' : ''
    }, _movie_jsx(AppBar_default.a, {
      id: "appBar",
      position: "static"
    }, _movie_jsx(Toolbar_default.a, {
      id: "toolbar"
    }, _movie_jsx("a", {
      href: "/"
    }, _movie_jsx(Home_default.a, null)), _movie_jsx("h1", {
      id: "title"
    }, "Popcorn Tales"), _movie_jsx("section", {
      className: "rightToolbar"
    }, _movie_jsx(SocialMenu["a" /* default */], null)))), _movie_jsx("div", {
      className: "movie-header"
    }, _movie_jsx("div", {
      id: "card"
    }, _movie_jsx(Paper_default.a, {
      elevation: 19
    }, _movie_jsx(LazyImage["a" /* default */], {
      className: "card-img",
      alt: "Popcorn Tales " + this.state.selectedMovie.title + " Review Image",
      unloadedSrc: this.state.selectedMovie.titleImage
    })), _movie_jsx(Hidden_default.a, {
      smDown: true
    }, _movie_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      className: "ratingHearts"
    }, overallRating))), _movie_jsx(Hidden_default.a, {
      mdUp: true
    }, _movie_jsx("div", {
      className: "topHeader"
    }, _movie_jsx(Grid_default.a, {
      container: true,
      alignItems: "center",
      spacing: 0,
      justify: "center"
    }, _movie_jsx("h1", {
      className: "headerLevel1 centerAligned"
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), _movie_jsx(DetailedRating, {
      selectedMovie: this.state.selectedMovie
    })), _movie_jsx("h3", {
      className: "headerLevel2 centerAligned"
    }, this.state.selectedMovie.language), _movie_jsx("h3", {
      className: "headerLevel2 centerAligned"
    }, this.state.selectedMovie.genre.join(",")), _movie_jsx(Grid_default.a, {
      container: true,
      justify: "center"
    }, overallRating))), _movie_jsx(Hidden_default.a, {
      smDown: true
    }, _movie_jsx("div", {
      id: "movie-description"
    }, _movie_jsx(Grid_default.a, {
      container: true,
      alignItems: "center",
      spacing: 0,
      justify: "center"
    }, _movie_jsx("h1", {
      className: "headerLevel1 centerAligned"
    }, this.state.selectedMovie.title, " (", this.state.selectedMovie.year, ")"), _movie_jsx(DetailedRating, {
      selectedMovie: this.state.selectedMovie
    })), _movie_jsx("h2", {
      className: "headerLevel2"
    }, this.state.selectedMovie.language), _movie_jsx("h3", {
      className: "headerLevel2"
    }, this.state.selectedMovie.genre.join(",")), _movie_jsx("h3", {
      className: "headerLevel2"
    }, this.state.selectedMovie.rating, "/5"), _movie_jsx("div", {
      className: "icon-container"
    }, _movie_jsx(external_react_share_["TwitterShareButton"], {
      url: this.state.shareUrl,
      quote: this.state.quote,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["TwitterIcon"], {
      size: 28,
      round: true
    })), _movie_jsx(external_react_share_["FacebookShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      hashtag: this.state.tags,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["FacebookIcon"], {
      size: 28,
      round: true
    })), _movie_jsx(external_react_share_["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["WhatsappIcon"], {
      size: 28,
      round: true
    })), _movie_jsx(external_react_share_["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["TelegramIcon"], {
      size: 28,
      round: true
    }))))), _movie_jsx(Hidden_default.a, {
      mdDown: true
    }, _movie_jsx("div", {
      id: "trailer_div"
    }, _movie_jsx("iframe", {
      id: "trailer",
      title: this.state.selectedMovie,
      src: this.state.selectedMovie.trailer,
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    })))), _movie_jsx("div", {
      className: "movie-detail"
    }, _movie_jsx(Paper_default.a, {
      elevation: 8
    }, _movie_jsx(AppBar_default.a, {
      position: "static"
    }, _movie_jsx(Tabs_default.a, {
      onChange: (e, v) => {
        this.handleChange(v);
      },
      value: this.state.selectedTab,
      variant: "fullWidth",
      "aria-label": "simple tabs example"
    }, _movie_jsx(Tab_default.a, {
      value: 0,
      label: "Review",
      className: "tab"
    }), _movie_jsx(Tab_default.a, {
      value: 1,
      label: "Hit & Miss",
      className: "tab"
    }), _movie_jsx(Tab_default.a, {
      value: 2,
      label: "Cast & Crew",
      className: "tab"
    }), _movie_jsx(Tab_default.a, {
      value: 3,
      label: "Ticket",
      className: "tab"
    })))), _movie_jsx("div", null, toolbar)), _movie_jsx("footer", null, _movie_jsx("div", {
      id: "footerText"
    }, _movie_jsx(Hidden_default.a, {
      smUp: true
    }, _movie_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      className: "icon-container"
    }, _movie_jsx(external_react_share_["TwitterShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["TwitterIcon"], {
      size: 25,
      round: true
    })), _movie_jsx(external_react_share_["FacebookShareButton"], {
      url: this.state.shareUrl,
      quote: this.state.quote,
      hashtag: this.state.tags,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["FacebookIcon"], {
      size: 25,
      round: true
    })), _movie_jsx(external_react_share_["WhatsappShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["WhatsappIcon"], {
      size: 25,
      round: true
    })), _movie_jsx(external_react_share_["TelegramShareButton"], {
      url: this.state.shareUrl,
      title: this.state.quote,
      className: "social-media-icon"
    }, _movie_jsx(external_react_share_["TelegramIcon"], {
      size: 25,
      round: true
    })))), _movie_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      id: "footerText"
    }, _movie_jsx("h4", {
      id: "feedbackText"
    }, "Need your feedback to improve  "), _movie_jsx("a", {
      href: "mailto:popcorntales19@gmail.com"
    }, " ", _movie_jsx(Mail_default.a, null))))))));
  }

}

/* harmony default export */ var _movie_ = __webpack_exports__["default"] = (_movie_Detail);

/***/ }),

/***/ "tt9V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Beenhere");

/***/ }),

/***/ "ubZR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalMovies");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });