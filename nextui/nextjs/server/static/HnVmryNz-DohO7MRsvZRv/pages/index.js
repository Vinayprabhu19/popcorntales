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

/***/ "0F/j":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "3gxl":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

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

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

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

/***/ "Jtos":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Pagination");

/***/ }),

/***/ "KaAA":
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Backdrop"
var Backdrop_ = __webpack_require__("vxx+");
var Backdrop_default = /*#__PURE__*/__webpack_require__.n(Backdrop_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@material-ui/core/GridList"
var GridList_ = __webpack_require__("3gxl");
var GridList_default = /*#__PURE__*/__webpack_require__.n(GridList_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);

// EXTERNAL MODULE: external "@material-ui/icons/Sort"
var Sort_ = __webpack_require__("mPfk");
var Sort_default = /*#__PURE__*/__webpack_require__.n(Sort_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__("KaAA");

// EXTERNAL MODULE: external "@material-ui/icons/FilterList"
var FilterList_ = __webpack_require__("uq+W");
var FilterList_default = /*#__PURE__*/__webpack_require__.n(FilterList_);

// EXTERNAL MODULE: external "@material-ui/lab/Rating"
var Rating_ = __webpack_require__("n9sB");
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: ./components/LazyImage.js
var LazyImage = __webpack_require__("7s9b");

// CONCATENATED MODULE: ./components/CardLayout.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const StyledRating = Object(styles_["withStyles"])({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(Rating_default.a);

class CardLayout_CardLayout extends external_react_["Component"] {
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
          icon: __jsx(Favorite_default.a, {
            fontSize: "inherit"
          })
        })
      );
    });
  }

  render() {
    const stars = this.stars(this.props.review.rating);
    return __jsx(Paper_default.a, {
      className: "card-container",
      elevation: 8
    }, __jsx("h4", {
      className: "title"
    }, this.props.review.title), __jsx(Paper_default.a, {
      elevation: 0,
      className: "card"
    }, __jsx("a", {
      href: this.props.review.title
    }, __jsx("figure", {
      id: "card-figure"
    }, __jsx(LazyImage["a" /* default */], {
      className: "card-img",
      alt: "Popcorn Tales - " + this.props.review.title,
      src: this.props.review.titleImage
    })))), __jsx("div", {
      className: "detail"
    }, __jsx("h3", {
      className: "language"
    }, this.props.review.language), __jsx("h4", {
      className: "rating"
    }, this.props.review.rating, "/5")));
  }

}

/* harmony default export */ var components_CardLayout = (CardLayout_CardLayout);
// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// EXTERNAL MODULE: external "@material-ui/core/RadioGroup"
var RadioGroup_ = __webpack_require__("p1B1");
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/FormLabel"
var FormLabel_ = __webpack_require__("tYtf");
var FormLabel_default = /*#__PURE__*/__webpack_require__.n(FormLabel_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/ButtonGroup"
var ButtonGroup_ = __webpack_require__("lNDQ");
var ButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ButtonGroup_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./components/Sort.js
var Sort_jsx = external_react_default.a.createElement;












class Sort_Sort extends external_react_["Component"] {
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
    return Sort_jsx(Dialog_default.a, {
      onClose: data => this.props.close(data),
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      "aria-labelledby": "simple-dialog-title",
      open: this.props.open
    }, Sort_jsx(DialogTitle_default.a, {
      id: "simple-dialog-title"
    }, "Sort"), Sort_jsx("div", {
      className: "filtercontainer"
    }, Sort_jsx(FormControl_default.a, null, Sort_jsx(FormLabel_default.a, {
      component: "legend"
    }, "Field"), Sort_jsx(RadioGroup_default.a, {
      "aria-label": "movieAttribute",
      name: "movieAttribute",
      value: this.state.field,
      onChange: this.handleFieldChange
    }, Sort_jsx(FormControlLabel_default.a, {
      value: "timeStamp",
      control: Sort_jsx(Radio_default.a, null),
      label: "Date Added"
    }), Sort_jsx(FormControlLabel_default.a, {
      value: "title",
      control: Sort_jsx(Radio_default.a, null),
      label: "Title"
    }), Sort_jsx(FormControlLabel_default.a, {
      value: "year",
      control: Sort_jsx(Radio_default.a, null),
      label: "Year"
    }), Sort_jsx(FormControlLabel_default.a, {
      value: "rating",
      control: Sort_jsx(Radio_default.a, null),
      label: "Rating"
    }), Sort_jsx(FormControlLabel_default.a, {
      value: "language",
      control: Sort_jsx(Radio_default.a, null),
      label: "Language"
    }))), Sort_jsx(FormControl_default.a, null, Sort_jsx(FormLabel_default.a, {
      component: "legend"
    }, "Order"), Sort_jsx(RadioGroup_default.a, {
      "aria-label": "order",
      name: "order",
      value: this.state.sortType,
      onChange: this.handleOrderChange
    }, Sort_jsx(FormControlLabel_default.a, {
      value: "Ascending",
      control: Sort_jsx(Radio_default.a, null),
      label: "Ascending"
    }), Sort_jsx(FormControlLabel_default.a, {
      value: "Descending",
      control: Sort_jsx(Radio_default.a, null),
      label: "Descending"
    }))), Sort_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      id: "starPhoto"
    }, Sort_jsx(ButtonGroup_default.a, {
      variant: "text",
      className: "buttonGroup",
      color: "primary",
      "aria-label": "text primary button group"
    }, Sort_jsx(Button_default.a, {
      onClick: this.onOK
    }, "OK"), Sort_jsx(Button_default.a, {
      onClick: this.onCancel
    }, "Cancel")))));
  }

}

/* harmony default export */ var components_Sort = (Sort_Sort);
// EXTERNAL MODULE: external "@material-ui/lab/Pagination"
var Pagination_ = __webpack_require__("Jtos");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_);

// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__("bfSA");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// CONCATENATED MODULE: ./components/Filter.js
var Filter_jsx = external_react_default.a.createElement;










class Filter_Sort extends external_react_["Component"] {
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
    return Filter_jsx(Dialog_default.a, {
      maxWidth: 'sm',
      fullWidth: true,
      onClose: data => this.props.close(data),
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      "aria-labelledby": "simple-dialog-title",
      open: this.props.open
    }, Filter_jsx(DialogTitle_default.a, {
      id: "simple-dialog-title"
    }, "Filter"), Filter_jsx("div", {
      className: "filtercontainer"
    }, Filter_jsx("h4", {
      className: "item"
    }, "Language"), Filter_jsx(Select_default.a, {
      className: "item",
      variant: "outlined",
      value: this.state.filter.language,
      onChange: e => {
        var filter = this.state.filter;
        filter.language = e.target.value;
        this.setState({
          filter: filter
        });
      }
    }, this.state.filterData.languages.map(language => {
      return Filter_jsx(MenuItem_default.a, {
        value: language,
        key: language
      }, language);
    })), Filter_jsx("h4", {
      className: "item"
    }, "Year"), Filter_jsx(Select_default.a, {
      className: "item",
      variant: "outlined",
      value: this.state.filter.year,
      onChange: e => {
        var filter = this.state.filter;
        filter.year = e.target.value;
        this.setState({
          filter: filter
        });
      }
    }, this.state.filterData.years.map(year => {
      return Filter_jsx(MenuItem_default.a, {
        value: year,
        key: year
      }, year);
    })), Filter_jsx("h4", {
      className: "item"
    }, "Rating"), Filter_jsx(Slider_default.a, {
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
      valueLabelDisplay: "auto"
    }), Filter_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      id: "starPhoto"
    }, Filter_jsx(ButtonGroup_default.a, {
      variant: "text",
      className: "buttonGroup",
      color: "primary",
      "aria-label": "text primary button group"
    }, Filter_jsx(Button_default.a, {
      onClick: this.onOK
    }, "OK"), Filter_jsx(Button_default.a, {
      onClick: this.onCancel
    }, "Cancel")))));
  }

}

/* harmony default export */ var Filter = (Filter_Sort);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/icons/BarChart"
var BarChart_ = __webpack_require__("dY6f");
var BarChart_default = /*#__PURE__*/__webpack_require__.n(BarChart_);

// EXTERNAL MODULE: ./components/SocialMenu.js
var SocialMenu = __webpack_require__("DbMq");

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























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

class pages_Home extends external_react_["Component"] {
  constructor(props) {
    super(props);

    pages_defineProperty(this, "handleSelect", (selectedIndex, e) => {
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
    return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Popcorn Tales"), pages_jsx("meta", {
      name: "description",
      content: "Popcorn Tales is an Indian movie review website reviewing movies from Kannada,Hindi,English,Tamil,Telugu,Malayalam and other languages. Find latest movie review here."
    }), pages_jsx("link", {
      async: true,
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }), pages_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), pages_jsx("meta", {
      name: "theme-color",
      content: "#000000"
    }), pages_jsx("link", {
      async: true,
      rel: "canonical",
      href: "https://www.Popcorntales.com/"
    }), pages_jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js"
    }), pages_jsx("script", {
      src: "https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"
    }), pages_jsx("script", {
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
      }
    })), pages_jsx("div", null, pages_jsx(Backdrop_default.a, {
      open: this.state.loading
    }, pages_jsx(CircularProgress_default.a, {
      color: "inherit"
    })), pages_jsx("div", {
      className: this.state.loading ? 'hidden' : 'App'
    }, pages_jsx(AppBar_default.a, {
      id: "appBar",
      position: "static"
    }, pages_jsx(Toolbar_default.a, null, pages_jsx(Tooltip_default.a, {
      title: "Analytics"
    }, pages_jsx("a", {
      href: "/analytics"
    }, pages_jsx(BarChart_default.a, {
      fontSize: "large",
      color: "primary"
    }))), pages_jsx("h1", {
      id: "title"
    }, "Popcorn Tales"), pages_jsx("section", {
      className: "rightToolbar"
    }, pages_jsx(SocialMenu["a" /* default */], null)))), pages_jsx(Paper_default.a, {
      id: "banner-container",
      elevation: 10
    }, pages_jsx(external_react_responsive_carousel_["Carousel"], {
      showThumbs: false,
      showStatus: false
    }, this.state.banners.map(banner => {
      return pages_jsx("div", {
        key: banner.id
      }, pages_jsx(LazyImage["a" /* default */], {
        className: "movie-img",
        src: banner.url,
        key: banner.id,
        alt: "Movie Banner"
      }));
    }))), pages_jsx(Paper_default.a, {
      elevation: 12,
      id: "filterGrid"
    }, pages_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      className: "filter-sort"
    }, pages_jsx("input", {
      type: "text",
      id: "searchField",
      value: this.state.searchText,
      onChange: this.onSearch,
      placeholder: "Movie Title"
    }), pages_jsx(Hidden_default.a, {
      smDown: true
    }, pages_jsx(Tooltip_default.a, {
      title: "Sort"
    }, pages_jsx(Button_default.a, {
      className: "iconBtn",
      onClick: this.openSort
    }, pages_jsx(Sort_default.a, {
      fontSize: "large"
    }))), pages_jsx(Tooltip_default.a, {
      title: "Filter"
    }, pages_jsx(Button_default.a, {
      className: "iconBtn",
      onClick: this.openFilter
    }, pages_jsx(FilterList_default.a, {
      fontSize: "large"
    }), " "))), pages_jsx(Hidden_default.a, {
      mdUp: true
    }, pages_jsx(Tooltip_default.a, {
      title: "Sort"
    }, pages_jsx(Button_default.a, {
      className: "iconBtn",
      onClick: this.openSort
    }, pages_jsx(Sort_default.a, {
      fontSize: "default"
    }))), pages_jsx(Tooltip_default.a, {
      title: "Filter"
    }, pages_jsx(Button_default.a, {
      className: "iconBtn",
      onClick: this.openFilter
    }, pages_jsx(FilterList_default.a, {
      fontSize: "default"
    }), " "))), pages_jsx(components_Sort, {
      open: this.state.sortOpen,
      close: data => this.handleSortClose(data),
      data: this.state.sorter
    }), pages_jsx(Filter, {
      open: this.state.filterOpen,
      close: data => this.handleFilterClose(data),
      data: this.state.filter,
      filterData: this.state.filterData
    }))), pages_jsx("div", {
      className: "App-Content"
    }, pages_jsx(GridList_default.a, {
      className: "cardGridList"
    }, this.state.currentList.map(image => pages_jsx(components_CardLayout, {
      key: image.title,
      review: image
    })))), pages_jsx("footer", null, pages_jsx(Pagination_default.a, {
      count: this.state.totalPages % 8,
      page: this.state.activePage,
      onChange: this.onPageChanged
    }), pages_jsx(Grid_default.a, {
      container: true,
      justify: "center",
      id: "footerText"
    }, pages_jsx("h4", {
      id: "feedbackText"
    }, "Need your feedback to improve  "), pages_jsx("a", {
      href: "mailto:popcorntales19@gmail.com"
    }, " ", pages_jsx(Mail_default.a, null)))))));
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

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "bfSA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dY6f":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BarChart");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "lNDQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonGroup");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "mPfk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Sort");

/***/ }),

/***/ "n9sB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "p1B1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "s4mK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "tYtf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "uq+W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vxx+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

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