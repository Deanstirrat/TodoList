/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/made_okine_sans/MADEOkineSansPERSONALUSE-Black.otf */ "./src/assets/made_okine_sans/MADEOkineSansPERSONALUSE-Black.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'todoFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('OpenType');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n\nhtml {\n    /* footer support */\n    position: relative;\n  }\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.content{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n    min-height: 100vh;\n    font-family: 'todoFont';\n}\n\n.header{\n    background-color: black;\n    grid-column: 1/3;\n    color: white;\n    font-family: 'todoFont';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-title{\n\n}\n\n.sidebar{\n    border-right-style: solid;\n    border-right-color: black;\n    display: flex;\n    flex-direction: column;\n    /* padding-left: 15px;\n    padding-right: 15px; */\n}\n\n.projects-heading{\n    margin-left: 15px;\n}\n\n.project-buttons-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* gap: 5px; */\n}\n.project-button{\n    font-size: 1.3rem;\n    border-style: none;\n    background-color: white;\n    border-top-style: solid;\n    border-color: black;\n    text-align: start;\n    padding: 15px;\n}\n.project-button:hover{\n    background-color: rgba(154, 252, 154, 0.5);\n}\n.project-button.selected{\n    background-color: rgb(154, 252, 154);\n    border-right-style: solid;\n    border-right-color: rgb(154, 252, 154);\n}\n\n.project-content{\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.task-container{\n    height: 40px;\n    width: 80%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.task-container.complete{\n    background-color: rgba(0, 212, 0, 0.552);\n}\n.task-container>*{\n    margin: 0;\n}\n\n.new-task-button{\n    font-size: 1.3rem;\n    width: 90%;\n    height: 50px;\n    margin-top: 25px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-radius: 5px;\n}\n.new-task-button.hidden{\n    display: none;\n}\n.new-task-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n\n.new-task-form{\n    /* height: auto; */\n    width: 90%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-text-input, .task-date-input{\n    width: 100%;\n    border-style: none;\n    border-right-style: solid;\n    border-color: black;\n    font-size: 1.3rem;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.task-submit-button{\n    width: 100%;\n    font-size: 1.3rem;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-style: none;\n    border-radius: 5px;\n}\n.task-submit-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n\n.check-icon{\n    height: auto;\n    width: auto;\n}\n\n.new-project-button{\n    font-size: 1.3rem;\n    width: 80%;\n    height: 50px;\n    margin-top: 25px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-radius: 5px;\n}\n.new-project-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n.new-project-button.hidden{\n    display: none;\n}\n\n.new-project-form{\n    margin-top: 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n.project-text-input{\n    padding: 15px;\n    font-size: 1.3rem;\n}\n.submit-project-button{\n    padding: 15px;\n    font-size: 1.3rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,+DAA0F;IAC1F,gBAAgB;IAChB,kBAAkB;EACpB;;;AAGF;IACI,mBAAmB;IACnB,kBAAkB;EACpB;;AAEF;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;AAEA;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB;0BACsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,0CAA0C;AAC9C;AACA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,iBAAiB;AACrB","sourcesContent":["@font-face {\n    font-family: 'todoFont';\n    src: url('./assets/made_okine_sans/MADEOkineSansPERSONALUSE-Black.otf') format('OpenType');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n\nhtml {\n    /* footer support */\n    position: relative;\n  }\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.content{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n    min-height: 100vh;\n    font-family: 'todoFont';\n}\n\n.header{\n    background-color: black;\n    grid-column: 1/3;\n    color: white;\n    font-family: 'todoFont';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-title{\n\n}\n\n.sidebar{\n    border-right-style: solid;\n    border-right-color: black;\n    display: flex;\n    flex-direction: column;\n    /* padding-left: 15px;\n    padding-right: 15px; */\n}\n\n.projects-heading{\n    margin-left: 15px;\n}\n\n.project-buttons-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* gap: 5px; */\n}\n.project-button{\n    font-size: 1.3rem;\n    border-style: none;\n    background-color: white;\n    border-top-style: solid;\n    border-color: black;\n    text-align: start;\n    padding: 15px;\n}\n.project-button:hover{\n    background-color: rgba(154, 252, 154, 0.5);\n}\n.project-button.selected{\n    background-color: rgb(154, 252, 154);\n    border-right-style: solid;\n    border-right-color: rgb(154, 252, 154);\n}\n\n.project-content{\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.task-container{\n    height: 40px;\n    width: 80%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.task-container.complete{\n    background-color: rgba(0, 212, 0, 0.552);\n}\n.task-container>*{\n    margin: 0;\n}\n\n.new-task-button{\n    font-size: 1.3rem;\n    width: 90%;\n    height: 50px;\n    margin-top: 25px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-radius: 5px;\n}\n.new-task-button.hidden{\n    display: none;\n}\n.new-task-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n\n.new-task-form{\n    /* height: auto; */\n    width: 90%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-text-input, .task-date-input{\n    width: 100%;\n    border-style: none;\n    border-right-style: solid;\n    border-color: black;\n    font-size: 1.3rem;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.task-submit-button{\n    width: 100%;\n    font-size: 1.3rem;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-style: none;\n    border-radius: 5px;\n}\n.task-submit-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n\n.check-icon{\n    height: auto;\n    width: auto;\n}\n\n.new-project-button{\n    font-size: 1.3rem;\n    width: 80%;\n    height: 50px;\n    margin-top: 25px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-radius: 5px;\n}\n.new-project-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n.new-project-button.hidden{\n    display: none;\n}\n\n.new-project-form{\n    margin-top: 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n.project-text-input{\n    padding: 15px;\n    font-size: 1.3rem;\n}\n.submit-project-button{\n    padding: 15px;\n    font-size: 1.3rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/createNewProject.js":
/*!*******************************************!*\
  !*** ./src/functions/createNewProject.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/functions/project.js");
/* harmony import */ var _deleteInitialPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteInitialPage */ "./src/functions/deleteInitialPage.js");
/* harmony import */ var _pages_loadProjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/loadProjectContent */ "./src/pages/loadProjectContent.js");
/* harmony import */ var _pages_loadInitialPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/loadInitialPage */ "./src/pages/loadInitialPage.js");
/* harmony import */ var _updateLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateLocalStorage */ "./src/functions/updateLocalStorage.js");






const createNewProject = (projectList) => {
  // create a form to collect info. When submited, delete content and call load project contents
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('new-project-form');
  const projectTitleInput = document.createElement('input');
  projectTitleInput.type = 'text';
  projectTitleInput.required = true;
  projectTitleInput.placeholder = 'Project name';
  const submitProjectButton = document.createElement('input');
  submitProjectButton.type = 'submit';
  submitProjectButton.classList.add('submit-project-button');
  projectTitleInput.classList.add('project-text-input');
  newProjectForm.appendChild(projectTitleInput);
  newProjectForm.appendChild(submitProjectButton);

  newProjectForm.addEventListener('submit', () => {
    console.log('form sumbitted');
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(projectTitleInput.value, '', []);
    projectList.push(newProject);
    // update lcoal storage
    (0,_updateLocalStorage__WEBPACK_IMPORTED_MODULE_4__.updateLocalStorage)(projectList);
    (0,_deleteInitialPage__WEBPACK_IMPORTED_MODULE_1__.deleteInitialPage)();
    (0,_pages_loadInitialPage__WEBPACK_IMPORTED_MODULE_3__.loadInitialPage)(projectList);
    (0,_pages_loadProjectContent__WEBPACK_IMPORTED_MODULE_2__.loadProjectContent)(newProject);
    document.getElementById('newProjectbutton').classList.remove('hidden');
  });

  return newProjectForm;
};



/***/ }),

/***/ "./src/functions/createNewTask.js":
/*!****************************************!*\
  !*** ./src/functions/createNewTask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewTask": () => (/* binding */ createNewTask)
/* harmony export */ });
/* harmony import */ var _pages_loadProjectContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/loadProjectContent */ "./src/pages/loadProjectContent.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/functions/task.js");
/* harmony import */ var _deleteProjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteProjectContent */ "./src/functions/deleteProjectContent.js");
/* harmony import */ var _updateLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateLocalStorage */ "./src/functions/updateLocalStorage.js");





const createNewTask = (project) => {
  // create a form to collect info. When submited, delete content and call load project contents
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('new-task-form');
  const taskTitleInput = document.createElement('input');
  taskTitleInput.type = 'text';
  taskTitleInput.required = true;
  taskTitleInput.placeholder = 'Task';

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.type = 'text';
  taskDescriptionInput.placeholder = 'Description';

  const taskDateInput = document.createElement('input');
  taskDateInput.type = 'date';
  taskDateInput.required = true;

  const submitTaskButton = document.createElement('input');
  submitTaskButton.type = 'submit';
  // classes
  taskTitleInput.classList.add('task-text-input');
  taskDescriptionInput.classList.add('task-text-input');
  submitTaskButton.classList.add('task-submit-button');

  newTaskForm.addEventListener('submit', () => {
    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(taskTitleInput.value, taskDescriptionInput.value, '', false);
    project.addTask(newTask);
    project.tasks.push(newTask);
    (0,_updateLocalStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorageTask)(project);
    (0,_deleteProjectContent__WEBPACK_IMPORTED_MODULE_2__.deleteProjectContent)();
    (0,_pages_loadProjectContent__WEBPACK_IMPORTED_MODULE_0__.loadProjectContent)(project);
    document.getElementById('newTaskButton').classList.remove('hidden');
  });

  // append
  newTaskForm.appendChild(taskTitleInput);
  newTaskForm.appendChild(taskDescriptionInput);
  newTaskForm.appendChild(submitTaskButton);
  return newTaskForm;
};



/***/ }),

/***/ "./src/functions/deleteInitialPage.js":
/*!********************************************!*\
  !*** ./src/functions/deleteInitialPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteInitialPage": () => (/* binding */ deleteInitialPage)
/* harmony export */ });
const deleteInitialPage = () => {
    console.log('deleting page')
    const content = document.getElementById('content')
    content.innerHTML = ''
}


/***/ }),

/***/ "./src/functions/deleteProjectContent.js":
/*!***********************************************!*\
  !*** ./src/functions/deleteProjectContent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProjectContent": () => (/* binding */ deleteProjectContent)
/* harmony export */ });
const deleteProjectContent = () => {
    console.log('deleting content')
    const projectContent = document.getElementById('projectContent')
    projectContent.innerHTML = ''
}


/***/ }),

/***/ "./src/functions/project.js":
/*!**********************************!*\
  !*** ./src/functions/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Project = (title, description, tasks) => {

    //Getters
    const getTitle = () => {
        return title
    }
    const getDescription = () => {
        return description
    }
    const getTasks = () =>{
        return tasks
    }

    //setters
    const addTask = (task) => {
        tasks.push(task);
    }
    const clearTasks = ()=>{
        tasks = [];
    }
    const setTasks = (newTasks)=>{
        tasks = newTasks;
    }
    const removeTask = (task) => {
        tasks = tasks.filter( function(el) { return el != task; } )
    }

    return{title: title, description: description, tasks: tasks, getTitle, getDescription, getTasks, addTask, clearTasks, setTasks, removeTask}
}



/***/ }),

/***/ "./src/functions/task.js":
/*!*******************************!*\
  !*** ./src/functions/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
const Task = (title, description, priority, isComplete) => {

    //Getters
    const getTitle = () => {
        return title
    }
    const getDescription = () => {
        return description
    }
    // const getDueDate = () => {
    //     return dueDate
    // }
    const getPriority = () => {
        return priority
    }
    const getIsComplete = () =>{
        return isComplete
    }

    //Setters
    const toggleIsComplete = () =>{
        isComplete = !isComplete;
    }

    return{title: title, description: description, priority: priority, isComplete: isComplete, getTitle, getDescription, getPriority, getIsComplete, toggleIsComplete}
}



/***/ }),

/***/ "./src/functions/updateLocalStorage.js":
/*!*********************************************!*\
  !*** ./src/functions/updateLocalStorage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage),
/* harmony export */   "updateLocalStorageTask": () => (/* binding */ updateLocalStorageTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/functions/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/functions/task.js");



const updateLocalStorage = (listToStore) => {
    console.log('localStorage - adding new project');
    const stringListToStore = JSON.stringify(listToStore);
    localStorage.setItem('projectList', stringListToStore);
}

const updateLocalStorageTask = (project) => {
    let projectList = []
    console.log('localStorage - adding new task')
    const retrieveList = JSON.parse(localStorage.getItem('projectList'));
    for (let proj of retrieveList) {
        const title = proj.title;
        const desc = proj.desc;
        const tasks = proj.tasks;
        proj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(title, desc, tasks);
        let taskList = [];
        for (let task of proj.getTasks()) {
            const title = task.title;
            const desc = task.desc;
            const priority = task.priority;
            const isComplete = task.isComplete;
            let tempTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(title, desc, priority, isComplete);
            taskList.push(tempTask);
        }
        proj.setTasks(taskList);
        projectList.push(proj);
    }

    let newList = projectList.filter(function(el) { return el.getTitle() != project.getTitle(); });
    newList.push(project);
    updateLocalStorage(newList);
}



/***/ }),

/***/ "./src/pages/loadInitialPage.js":
/*!**************************************!*\
  !*** ./src/pages/loadInitialPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadInitialPage": () => (/* binding */ loadInitialPage)
/* harmony export */ });
/* harmony import */ var _loadProjectContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadProjectContent */ "./src/pages/loadProjectContent.js");
/* harmony import */ var _functions_deleteProjectContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/deleteProjectContent */ "./src/functions/deleteProjectContent.js");
/* harmony import */ var _functions_createNewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/createNewProject */ "./src/functions/createNewProject.js");




const loadInitialPage = (projectList) => {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  header.classList.add('header');
  const sideBar = document.createElement('div');
  sideBar.classList.add('sidebar');
  // header content
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'Todo List';
  headerTitle.classList.add('header-title');
  header.appendChild(headerTitle);
  // sidebar contents
  const projectsHeading = document.createElement('h2');
  projectsHeading.textContent = 'Projects:';
  projectsHeading.classList.add('projects-heading');
  sideBar.appendChild(projectsHeading);

  const projectButtonsContainer = document.createElement('div');
  projectButtonsContainer.classList.add('project-buttons-container');
  sideBar.appendChild(projectButtonsContainer);

  const projectContent = document.createElement('div');
  projectContent.classList.add('project-content');
  projectContent.setAttribute('id', 'projectContent');

  content.appendChild(header);
  content.appendChild(sideBar);
  content.appendChild(projectContent);

  // create all buttons for projects
  for (let i = 0; i < projectList.length; i++) {
    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    projectButton.textContent = projectList[i].getTitle();
    projectButton.id = projectList[i];
    projectButton.addEventListener('click', () => {
      const buttons = document.querySelectorAll('.project-button');
      buttons.forEach((button) => {
        button.classList.remove('selected');
      });
      projectButton.classList.add('selected');
      (0,_functions_deleteProjectContent__WEBPACK_IMPORTED_MODULE_1__.deleteProjectContent)();
      (0,_loadProjectContent__WEBPACK_IMPORTED_MODULE_0__.loadProjectContent)(projectList[i]);
    });
    projectButtonsContainer.appendChild(projectButton);
  }
  const newProjectButton = document.createElement('button');
  newProjectButton.innerHTML = 'New project';
  newProjectButton.classList.add('new-project-button');
  newProjectButton.id = 'newProjectbutton';
  newProjectButton.addEventListener('click', () => {
    newProjectButton.classList.add('hidden');
    projectButtonsContainer.appendChild((0,_functions_createNewProject__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectList));
  });
  projectButtonsContainer.appendChild(newProjectButton);
};




/***/ }),

/***/ "./src/pages/loadProjectContent.js":
/*!*****************************************!*\
  !*** ./src/pages/loadProjectContent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProjectContent": () => (/* binding */ loadProjectContent)
/* harmony export */ });
/* harmony import */ var _assets_tick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tick.png */ "./src/assets/tick.png");
/* harmony import */ var _functions_createNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/createNewTask */ "./src/functions/createNewTask.js");
/* harmony import */ var _functions_updateLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/updateLocalStorage */ "./src/functions/updateLocalStorage.js");
/* harmony import */ var _functions_deleteProjectContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/deleteProjectContent */ "./src/functions/deleteProjectContent.js");





const loadProjectContent = (project) => {
  const projectContent = document.getElementById('projectContent');
  const tasks = project.getTasks();
  // add all tasks
  for (const task of tasks) {
    const title = task.getTitle();
    const description = task.getDescription();
    const complete = task.getIsComplete();

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    const taskTitle = document.createElement('p');
    taskTitle.textContent = title;
    taskContainer.appendChild(taskTitle);
    const taskDesc = document.createElement('p');
    taskDesc.textContent = description;
    taskContainer.appendChild(taskDesc);

    if (complete) {
      const picture = new Image();
      picture.classList.add('check-icon');
      picture.src = _assets_tick_png__WEBPACK_IMPORTED_MODULE_0__;
      taskContainer.appendChild(picture);
      taskContainer.classList.add('complete');
    } else {
      taskContainer.classList.add('incomplete');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = taskTitle;
      checkBox.addEventListener('change', () => {
        project.setTasks(project.getTasks().filter((el) => el.title != task.title));
        project.tasks = project.tasks.filter((el) => el.title != task.title);
        (0,_functions_updateLocalStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorageTask)(project);
        (0,_functions_deleteProjectContent__WEBPACK_IMPORTED_MODULE_3__.deleteProjectContent)();
        loadProjectContent(project);
      });
      taskContainer.appendChild(checkBox);
    }
    projectContent.appendChild(taskContainer);
  }

  // new task button
  const newTaskButton = document.createElement('button');
  newTaskButton.innerHTML = 'Add task';
  newTaskButton.classList.add('new-task-button');
  newTaskButton.id = 'newTaskButton';
  newTaskButton.addEventListener('click', () => {
    console.log('new Task');
    const newTaskForm = (0,_functions_createNewTask__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(project);
    projectContent.appendChild(newTaskForm);
    newTaskButton.classList.add('hidden');
  });
  projectContent.appendChild(newTaskButton);
};




/***/ }),

/***/ "./src/assets/made_okine_sans/MADEOkineSansPERSONALUSE-Black.otf":
/*!***********************************************************************!*\
  !*** ./src/assets/made_okine_sans/MADEOkineSansPERSONALUSE-Black.otf ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e62c94525b67fcbd75d4.otf";

/***/ }),

/***/ "./src/assets/tick.png":
/*!*****************************!*\
  !*** ./src/assets/tick.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e247d4fd84d24bfe421.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_loadInitialPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/loadInitialPage */ "./src/pages/loadInitialPage.js");
/* harmony import */ var _functions_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/project */ "./src/functions/project.js");
/* harmony import */ var _functions_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/task */ "./src/functions/task.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const content = document.createElement('div');
content.classList.add('content');
content.setAttribute('id', 'content');
document.body.appendChild(content);

// add logic to see if there are saved tasks/projects here
if (!localStorage.getItem('projectList')) {
  localStorage.setItem('projectList', JSON.stringify([]));
  (0,_pages_loadInitialPage__WEBPACK_IMPORTED_MODULE_0__.loadInitialPage)([]);
} else {
  // localStorage.setItem('projectList', JSON.stringify([]))
  const retrieveList = JSON.parse(localStorage.getItem('projectList'));
  const projectList = [];
  if (retrieveList.length != 0) {
    for (let proj of retrieveList) {
      const { title } = proj;
      const { desc } = proj;
      const { tasks } = proj;
      proj = (0,_functions_project__WEBPACK_IMPORTED_MODULE_1__.Project)(title, desc, tasks);
      const taskList = [];
      for (const task of proj.getTasks()) {
        const { title } = task;
        const { desc } = task;
        const { priority } = task;
        const { isComplete } = task;
        const tempTask = (0,_functions_task__WEBPACK_IMPORTED_MODULE_2__.Task)(title, desc, priority, isComplete);
        taskList.push(tempTask);
      }
      proj.setTasks(taskList);
      projectList.push(proj);
    }
  }
  (0,_pages_loadInitialPage__WEBPACK_IMPORTED_MODULE_0__.loadInitialPage)(projectList);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBMEQ7QUFDWjtBQUNOO0FBQ25COztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVFQUFlO0FBQ2pCLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEIsYUFBYSwyREFBTztBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFdBQVc7QUFDM0IsZ0JBQWdCLGFBQWE7QUFDN0IseUJBQXlCLHFEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUVBQWU7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZU5ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL2RlbGV0ZUluaXRpYWxQYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kZWxldGVQcm9qZWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvdXBkYXRlTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3BhZ2VzL2xvYWRJbml0aWFsUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlcy9sb2FkUHJvamVjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbWFkZV9va2luZV9zYW5zL01BREVPa2luZVNhbnNQRVJTT05BTFVTRS1CbGFjay5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd0b2RvRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ09wZW5UeXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5cXG5odG1sIHtcXG4gICAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICd0b2RvRm9udCc7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAndG9kb0ZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci10aXRsZXtcXG5cXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLnByb2plY3RzLWhlYWRpbmd7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGdhcDogNXB4OyAqL1xcbn1cXG4ucHJvamVjdC1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDI1MiwgMTU0LCAwLjUpO1xcbn1cXG4ucHJvamVjdC1idXR0b24uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDI1MiwgMTU0KTtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIxMiwgMCwgMC41NTIpO1xcbn1cXG4udGFzay1jb250YWluZXI+KntcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmV3LXRhc2stYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTAsIDI1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm5ldy10YXNrLWJ1dHRvbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uZXctdGFzay1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDI1MiwgMTU0KTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm17XFxuICAgIC8qIGhlaWdodDogYXV0bzsgKi9cXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stdGV4dC1pbnB1dCwgLnRhc2stZGF0ZS1pbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2stc3VibWl0LWJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MCwgMjUwKTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrLXN1Ym1pdC1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDI1MiwgMTU0KTtcXG59XFxuXFxuLmNoZWNrLWljb257XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MCwgMjUwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxufVxcbi5uZXctcHJvamVjdC1idXR0b24uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybXtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4ucHJvamVjdC10ZXh0LWlucHV0e1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLnN1Ym1pdC1wcm9qZWN0LWJ1dHRvbntcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQTBGO0lBQzFGLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7OztBQUdGO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztBQUVBOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCOzBCQUNzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3RvZG9Gb250JztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL21hZGVfb2tpbmVfc2Fucy9NQURFT2tpbmVTYW5zUEVSU09OQUxVU0UtQmxhY2sub3RmJykgZm9ybWF0KCdPcGVuVHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuXFxuaHRtbCB7XFxuICAgIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAndG9kb0ZvbnQnO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ3RvZG9Gb250JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdGl0bGV7XFxuXFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7ICovXFxufVxcblxcbi5wcm9qZWN0cy1oZWFkaW5ne1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBnYXA6IDVweDsgKi9cXG59XFxuLnByb2plY3QtYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4ucHJvamVjdC1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAyNTIsIDE1NCwgMC41KTtcXG59XFxuLnByb2plY3QtYnV0dG9uLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDE1NCwgMjUyLCAxNTQpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMTIsIDAsIDAuNTUyKTtcXG59XFxuLnRhc2stY29udGFpbmVyPip7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUwLCAyNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5uZXctdGFzay1idXR0b24uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubmV3LXRhc2stYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxufVxcblxcbi5uZXctdGFzay1mb3Jte1xcbiAgICAvKiBoZWlnaHQ6IGF1dG87ICovXFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXRleHQtaW5wdXQsIC50YXNrLWRhdGUtaW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrLXN1Ym1pdC1idXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTAsIDI1MCk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFzay1zdWJtaXQtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxufVxcblxcbi5jaGVjay1pY29ue1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTAsIDI1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMjUyLCAxNTQpO1xcbn1cXG4ubmV3LXByb2plY3QtYnV0dG9uLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm17XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLnByb2plY3QtdGV4dC1pbnB1dHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5zdWJtaXQtcHJvamVjdC1idXR0b257XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBkZWxldGVJbml0aWFsUGFnZSB9IGZyb20gJy4vZGVsZXRlSW5pdGlhbFBhZ2UnO1xuaW1wb3J0IHsgbG9hZFByb2plY3RDb250ZW50IH0gZnJvbSAnLi4vcGFnZXMvbG9hZFByb2plY3RDb250ZW50JztcbmltcG9ydCB7IGxvYWRJbml0aWFsUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xvYWRJbml0aWFsUGFnZSc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3VwZGF0ZUxvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAocHJvamVjdExpc3QpID0+IHtcbiAgLy8gY3JlYXRlIGEgZm9ybSB0byBjb2xsZWN0IGluZm8uIFdoZW4gc3VibWl0ZWQsIGRlbGV0ZSBjb250ZW50IGFuZCBjYWxsIGxvYWQgcHJvamVjdCBjb250ZW50c1xuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpO1xuICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2plY3RUaXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIHByb2plY3RUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgcHJvamVjdFRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBuYW1lJztcbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHN1Ym1pdFByb2plY3RCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wcm9qZWN0LWJ1dHRvbicpO1xuICBwcm9qZWN0VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRleHQtaW5wdXQnKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlSW5wdXQpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0QnV0dG9uKTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm0gc3VtYml0dGVkJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdFRpdGxlSW5wdXQudmFsdWUsICcnLCBbXSk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAvLyB1cGRhdGUgbGNvYWwgc3RvcmFnZVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgZGVsZXRlSW5pdGlhbFBhZ2UoKTtcbiAgICBsb2FkSW5pdGlhbFBhZ2UocHJvamVjdExpc3QpO1xuICAgIGxvYWRQcm9qZWN0Q29udGVudChuZXdQcm9qZWN0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdGJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9KTtcblxuICByZXR1cm4gbmV3UHJvamVjdEZvcm07XG59O1xuZXhwb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgbG9hZFByb2plY3RDb250ZW50IH0gZnJvbSAnLi4vcGFnZXMvbG9hZFByb2plY3RDb250ZW50JztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENvbnRlbnQgfSBmcm9tICcuL2RlbGV0ZVByb2plY3RDb250ZW50JztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2sgfSBmcm9tICcuL3VwZGF0ZUxvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAocHJvamVjdCkgPT4ge1xuICAvLyBjcmVhdGUgYSBmb3JtIHRvIGNvbGxlY3QgaW5mby4gV2hlbiBzdWJtaXRlZCwgZGVsZXRlIGNvbnRlbnQgYW5kIGNhbGwgbG9hZCBwcm9qZWN0IGNvbnRlbnRzXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgdGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0YXNrVGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrJztcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcblxuICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0RhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICB0YXNrRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0VGFza0J1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gIC8vIGNsYXNzZXNcbiAgdGFza1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0LWlucHV0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dC1pbnB1dCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3VibWl0LWJ1dHRvbicpO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0YXNrVGl0bGVJbnB1dC52YWx1ZSwgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsICcnLCBmYWxzZSk7XG4gICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIHByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrKHByb2plY3QpO1xuICAgIGRlbGV0ZVByb2plY3RDb250ZW50KCk7XG4gICAgbG9hZFByb2plY3RDb250ZW50KHByb2plY3QpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrQnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0pO1xuXG4gIC8vIGFwcGVuZFxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J1dHRvbik7XG4gIHJldHVybiBuZXdUYXNrRm9ybTtcbn07XG5leHBvcnQgeyBjcmVhdGVOZXdUYXNrIH07XG4iLCJjb25zdCBkZWxldGVJbml0aWFsUGFnZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRpbmcgcGFnZScpXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXG59XG5leHBvcnQge2RlbGV0ZUluaXRpYWxQYWdlfSIsImNvbnN0IGRlbGV0ZVByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkZWxldGluZyBjb250ZW50JylcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGVudCcpXG4gICAgcHJvamVjdENvbnRlbnQuaW5uZXJIVE1MID0gJydcbn1cbmV4cG9ydCB7ZGVsZXRlUHJvamVjdENvbnRlbnR9IiwiY29uc3QgUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tzKSA9PiB7XG5cbiAgICAvL0dldHRlcnNcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgfVxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICB9XG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PntcbiAgICAgICAgcmV0dXJuIHRhc2tzXG4gICAgfVxuXG4gICAgLy9zZXR0ZXJzXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIGNvbnN0IGNsZWFyVGFza3MgPSAoKT0+e1xuICAgICAgICB0YXNrcyA9IFtdO1xuICAgIH1cbiAgICBjb25zdCBzZXRUYXNrcyA9IChuZXdUYXNrcyk9PntcbiAgICAgICAgdGFza3MgPSBuZXdUYXNrcztcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCBmdW5jdGlvbihlbCkgeyByZXR1cm4gZWwgIT0gdGFzazsgfSApXG4gICAgfVxuXG4gICAgcmV0dXJue3RpdGxlOiB0aXRsZSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCB0YXNrczogdGFza3MsIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0VGFza3MsIGFkZFRhc2ssIGNsZWFyVGFza3MsIHNldFRhc2tzLCByZW1vdmVUYXNrfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0IH0iLCJjb25zdCBUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpID0+IHtcblxuICAgIC8vR2V0dGVyc1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGl0bGVcbiAgICB9XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgIH1cbiAgICAvLyBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gZHVlRGF0ZVxuICAgIC8vIH1cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5XG4gICAgfVxuICAgIGNvbnN0IGdldElzQ29tcGxldGUgPSAoKSA9PntcbiAgICAgICAgcmV0dXJuIGlzQ29tcGxldGVcbiAgICB9XG5cbiAgICAvL1NldHRlcnNcbiAgICBjb25zdCB0b2dnbGVJc0NvbXBsZXRlID0gKCkgPT57XG4gICAgICAgIGlzQ29tcGxldGUgPSAhaXNDb21wbGV0ZTtcbiAgICB9XG5cbiAgICByZXR1cm57dGl0bGU6IHRpdGxlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIHByaW9yaXR5OiBwcmlvcml0eSwgaXNDb21wbGV0ZTogaXNDb21wbGV0ZSwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRQcmlvcml0eSwgZ2V0SXNDb21wbGV0ZSwgdG9nZ2xlSXNDb21wbGV0ZX1cbn1cblxuZXhwb3J0IHsgVGFzayB9IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2snXG5cbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IChsaXN0VG9TdG9yZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgLSBhZGRpbmcgbmV3IHByb2plY3QnKTtcbiAgICBjb25zdCBzdHJpbmdMaXN0VG9TdG9yZSA9IEpTT04uc3RyaW5naWZ5KGxpc3RUb1N0b3JlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBzdHJpbmdMaXN0VG9TdG9yZSk7XG59XG5cbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2sgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdXG4gICAgY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSAtIGFkZGluZyBuZXcgdGFzaycpXG4gICAgY29uc3QgcmV0cmlldmVMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSk7XG4gICAgZm9yIChsZXQgcHJvaiBvZiByZXRyaWV2ZUxpc3QpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBwcm9qLnRpdGxlO1xuICAgICAgICBjb25zdCBkZXNjID0gcHJvai5kZXNjO1xuICAgICAgICBjb25zdCB0YXNrcyA9IHByb2oudGFza3M7XG4gICAgICAgIHByb2ogPSBQcm9qZWN0KHRpdGxlLCBkZXNjLCB0YXNrcyk7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2ouZ2V0VGFza3MoKSkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IHRhc2suZGVzYztcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxldGUgPSB0YXNrLmlzQ29tcGxldGU7XG4gICAgICAgICAgICBsZXQgdGVtcFRhc2sgPSBUYXNrKHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgaXNDb21wbGV0ZSk7XG4gICAgICAgICAgICB0YXNrTGlzdC5wdXNoKHRlbXBUYXNrKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qLnNldFRhc2tzKHRhc2tMaXN0KTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3TGlzdCA9IHByb2plY3RMaXN0LmZpbHRlcihmdW5jdGlvbihlbCkgeyByZXR1cm4gZWwuZ2V0VGl0bGUoKSAhPSBwcm9qZWN0LmdldFRpdGxlKCk7IH0pO1xuICAgIG5ld0xpc3QucHVzaChwcm9qZWN0KTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UobmV3TGlzdCk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSwgdXBkYXRlTG9jYWxTdG9yYWdlVGFzayB9IiwiaW1wb3J0IHsgbG9hZFByb2plY3RDb250ZW50IH0gZnJvbSAnLi9sb2FkUHJvamVjdENvbnRlbnQnO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENvbnRlbnQgfSBmcm9tICcuLi9mdW5jdGlvbnMvZGVsZXRlUHJvamVjdENvbnRlbnQnO1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4uL2Z1bmN0aW9ucy9jcmVhdGVOZXdQcm9qZWN0JztcblxuY29uc3QgbG9hZEluaXRpYWxQYWdlID0gKHByb2plY3RMaXN0KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAvLyBoZWFkZXIgY29udGVudFxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG4gIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAvLyBzaWRlYmFyIGNvbnRlbnRzXG4gIGNvbnN0IHByb2plY3RzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudCA9ICdQcm9qZWN0czonO1xuICBwcm9qZWN0c0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGluZycpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGluZyk7XG5cbiAgY29uc3QgcHJvamVjdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b25zLWNvbnRhaW5lcicpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zQ29udGFpbmVyKTtcblxuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQnKTtcbiAgcHJvamVjdENvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Q29udGVudCcpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XG5cbiAgLy8gY3JlYXRlIGFsbCBidXR0b25zIGZvciBwcm9qZWN0c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcbiAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbaV0uZ2V0VGl0bGUoKTtcbiAgICBwcm9qZWN0QnV0dG9uLmlkID0gcHJvamVjdExpc3RbaV07XG4gICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG4gICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBkZWxldGVQcm9qZWN0Q29udGVudCgpO1xuICAgICAgbG9hZFByb2plY3RDb250ZW50KHByb2plY3RMaXN0W2ldKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgfVxuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdXR0b24uaW5uZXJIVE1MID0gJ05ldyBwcm9qZWN0JztcbiAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1idXR0b24nKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5pZCA9ICduZXdQcm9qZWN0YnV0dG9uJztcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdExpc3QpKTtcbiAgfSk7XG4gIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xufTtcblxuZXhwb3J0IHsgbG9hZEluaXRpYWxQYWdlIH07XG4iLCJpbXBvcnQgVGljayBmcm9tICcuLi9hc3NldHMvdGljay5wbmcnO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFzayB9IGZyb20gJy4uL2Z1bmN0aW9ucy9jcmVhdGVOZXdUYXNrJztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSwgdXBkYXRlTG9jYWxTdG9yYWdlVGFzayB9IGZyb20gJy4uL2Z1bmN0aW9ucy91cGRhdGVMb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENvbnRlbnQgfSBmcm9tICcuLi9mdW5jdGlvbnMvZGVsZXRlUHJvamVjdENvbnRlbnQnO1xuXG5jb25zdCBsb2FkUHJvamVjdENvbnRlbnQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGVudCcpO1xuICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgLy8gYWRkIGFsbCB0YXNrc1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRhc2suZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCBjb21wbGV0ZSA9IHRhc2suZ2V0SXNDb21wbGV0ZSgpO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG5cbiAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgIGNvbnN0IHBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHBpY3R1cmUuY2xhc3NMaXN0LmFkZCgnY2hlY2staWNvbicpO1xuICAgICAgcGljdHVyZS5zcmMgPSBUaWNrO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaWN0dXJlKTtcbiAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmNvbXBsZXRlJyk7XG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgIGNoZWNrQm94Lm5hbWUgPSB0YXNrVGl0bGU7XG4gICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLmZpbHRlcigoZWwpID0+IGVsLnRpdGxlICE9IHRhc2sudGl0bGUpKTtcbiAgICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3QudGFza3MuZmlsdGVyKChlbCkgPT4gZWwudGl0bGUgIT0gdGFzay50aXRsZSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2socHJvamVjdCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RDb250ZW50KCk7XG4gICAgICAgIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgfVxuICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB9XG5cbiAgLy8gbmV3IHRhc2sgYnV0dG9uXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VGFza0J1dHRvbi5pbm5lckhUTUwgPSAnQWRkIHRhc2snO1xuICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbicpO1xuICBuZXdUYXNrQnV0dG9uLmlkID0gJ25ld1Rhc2tCdXR0b24nO1xuICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCduZXcgVGFzaycpO1xuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gY3JlYXRlTmV3VGFzayhwcm9qZWN0KTtcbiAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG4gICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSk7XG4gIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xufTtcblxuZXhwb3J0IHsgbG9hZFByb2plY3RDb250ZW50IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZEluaXRpYWxQYWdlIH0gZnJvbSAnLi9wYWdlcy9sb2FkSW5pdGlhbFBhZ2UnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25zL3Byb2plY3QnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vZnVuY3Rpb25zL3Rhc2snO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbi8vIGFkZCBsb2dpYyB0byBzZWUgaWYgdGhlcmUgYXJlIHNhdmVkIHRhc2tzL3Byb2plY3RzIGhlcmVcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgbG9hZEluaXRpYWxQYWdlKFtdKTtcbn0gZWxzZSB7XG4gIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KFtdKSlcbiAgY29uc3QgcmV0cmlldmVMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSk7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGlmIChyZXRyaWV2ZUxpc3QubGVuZ3RoICE9IDApIHtcbiAgICBmb3IgKGxldCBwcm9qIG9mIHJldHJpZXZlTGlzdCkge1xuICAgICAgY29uc3QgeyB0aXRsZSB9ID0gcHJvajtcbiAgICAgIGNvbnN0IHsgZGVzYyB9ID0gcHJvajtcbiAgICAgIGNvbnN0IHsgdGFza3MgfSA9IHByb2o7XG4gICAgICBwcm9qID0gUHJvamVjdCh0aXRsZSwgZGVzYywgdGFza3MpO1xuICAgICAgY29uc3QgdGFza0xpc3QgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qLmdldFRhc2tzKCkpIHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSB9ID0gdGFzaztcbiAgICAgICAgY29uc3QgeyBkZXNjIH0gPSB0YXNrO1xuICAgICAgICBjb25zdCB7IHByaW9yaXR5IH0gPSB0YXNrO1xuICAgICAgICBjb25zdCB7IGlzQ29tcGxldGUgfSA9IHRhc2s7XG4gICAgICAgIGNvbnN0IHRlbXBUYXNrID0gVGFzayh0aXRsZSwgZGVzYywgcHJpb3JpdHksIGlzQ29tcGxldGUpO1xuICAgICAgICB0YXNrTGlzdC5wdXNoKHRlbXBUYXNrKTtcbiAgICAgIH1cbiAgICAgIHByb2ouc2V0VGFza3ModGFza0xpc3QpO1xuICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qKTtcbiAgICB9XG4gIH1cbiAgbG9hZEluaXRpYWxQYWdlKHByb2plY3RMaXN0KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==