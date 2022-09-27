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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'todoFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('OpenType');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n\nhtml {\n    /* footer support */\n    position: relative;\n  }\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.content{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n    min-height: 100vh;\n    font-family: 'todoFont';\n}\n\n.header{\n    background-color: black;\n    grid-column: 1/3;\n    color: white;\n    font-family: 'todoFont';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-title{\n\n}\n\n.sidebar{\n    border-right-style: solid;\n    border-right-color: black;\n    display: flex;\n    flex-direction: column;\n    /* padding-left: 15px;\n    padding-right: 15px; */\n}\n\n.project-buttons-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* gap: 5px; */\n}\n.project-button{\n    border-style: none;\n    background-color: white;\n    border-top-style: solid;\n    border-color: black;\n    text-align: start;\n    padding: 15px;\n}\n.project-button:hover{\n    background-color: rgba(154, 252, 154, 0.5);\n}\n.project-button.selected{\n    background-color: rgb(154, 252, 154);\n    border-right-style: solid;\n    border-right-color: rgb(154, 252, 154);\n}\n\n.project-content{\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.task-container{\n    height: 40px;\n    width: 80%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.task-container.complete{\n    background-color: rgba(0, 212, 0, 0.552);\n}\n.task-container>*{\n    margin: 0;\n}\n\n.new-task-button{\n    width: 20%;\n}\n.new-task-button.hidden{\n    display: none;\n}\n\n.new-task-form{\n    height: 50px;\n    width: 90%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-text-input, .task-date-input{\n    width: 100%;\n    border-style: none;\n    border-left-style: solid;\n}\n\n.task-submit-button{\n    width: 100%;\n}\n\n.check-icon{\n    height: auto;\n    width: auto;\n}\n\n.new-project-button{\n    width: 80%;\n    height: 50px;\n    margin-top: 15px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-radius: 5px;\n}\n.new-project-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n.new-project-button.hidden{\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,+DAA0F;IAC1F,gBAAgB;IAChB,kBAAkB;EACpB;;;AAGF;IACI,mBAAmB;IACnB,kBAAkB;EACpB;;AAEF;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;AAEA;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB;0BACsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,0CAA0C;AAC9C;AACA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,SAAS;AACb;;AAEA;IACI,UAAU;AACd;AACA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'todoFont';\n    src: url('./assets/made_okine_sans/MADEOkineSansPERSONALUSE-Black.otf') format('OpenType');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n\nhtml {\n    /* footer support */\n    position: relative;\n  }\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.content{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n    min-height: 100vh;\n    font-family: 'todoFont';\n}\n\n.header{\n    background-color: black;\n    grid-column: 1/3;\n    color: white;\n    font-family: 'todoFont';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-title{\n\n}\n\n.sidebar{\n    border-right-style: solid;\n    border-right-color: black;\n    display: flex;\n    flex-direction: column;\n    /* padding-left: 15px;\n    padding-right: 15px; */\n}\n\n.project-buttons-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* gap: 5px; */\n}\n.project-button{\n    border-style: none;\n    background-color: white;\n    border-top-style: solid;\n    border-color: black;\n    text-align: start;\n    padding: 15px;\n}\n.project-button:hover{\n    background-color: rgba(154, 252, 154, 0.5);\n}\n.project-button.selected{\n    background-color: rgb(154, 252, 154);\n    border-right-style: solid;\n    border-right-color: rgb(154, 252, 154);\n}\n\n.project-content{\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.task-container{\n    height: 40px;\n    width: 80%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.task-container.complete{\n    background-color: rgba(0, 212, 0, 0.552);\n}\n.task-container>*{\n    margin: 0;\n}\n\n.new-task-button{\n    width: 20%;\n}\n.new-task-button.hidden{\n    display: none;\n}\n\n.new-task-form{\n    height: 50px;\n    width: 90%;\n    border-style: solid;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-text-input, .task-date-input{\n    width: 100%;\n    border-style: none;\n    border-left-style: solid;\n}\n\n.task-submit-button{\n    width: 100%;\n}\n\n.check-icon{\n    height: auto;\n    width: auto;\n}\n\n.new-project-button{\n    width: 80%;\n    height: 50px;\n    margin-top: 15px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(255, 250, 250);\n    border-radius: 5px;\n}\n.new-project-button:hover{\n    background-color: rgb(154, 252, 154);\n}\n.new-project-button.hidden{\n    display: none;\n}"],"sourceRoot":""}]);
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
    //create a form to collect info. When submited, delete content and call load project contents
    const newProjectForm = document.createElement('form')
    newProjectForm.classList.add('new-project-form')
    const projectTitleInput = document.createElement('input');
    projectTitleInput.type = 'text';
    projectTitleInput.required = true;
    projectTitleInput.placeholder = 'Project name'
    const submitProjectButton = document.createElement('input');
    submitProjectButton.type='submit';
    submitProjectButton.classList.add('submit-project-button')
    projectTitleInput.classList.add('project-text-input');
    newProjectForm.appendChild(projectTitleInput)
    newProjectForm.appendChild(submitProjectButton)

    newProjectForm.addEventListener('submit', ()=>{
        console.log('form sumbitted')
        const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(projectTitleInput.value, '', [])
        projectList.push(newProject)
        //update lcoal storage
        ;(0,_updateLocalStorage__WEBPACK_IMPORTED_MODULE_4__.updateLocalStorage)(projectList);
        (0,_deleteInitialPage__WEBPACK_IMPORTED_MODULE_1__.deleteInitialPage)()
        ;(0,_pages_loadInitialPage__WEBPACK_IMPORTED_MODULE_3__.loadInitialPage)(projectList)
        ;(0,_pages_loadProjectContent__WEBPACK_IMPORTED_MODULE_2__.loadProjectContent)(newProject);
        document.getElementById('newProjectbutton').classList.remove('hidden')
    })

    return newProjectForm;


}


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
    //create a form to collect info. When submited, delete content and call load project contents
    const newTaskForm = document.createElement('form');
    newTaskForm.classList.add('new-task-form')
    const taskTitleInput = document.createElement('input');
    taskTitleInput.type = 'text';
    taskTitleInput.required = true;
    taskTitleInput.placeholder = 'Task'

    const taskDescriptionInput = document.createElement('input')
    taskDescriptionInput.type = 'text';
    taskDescriptionInput.placeholder = 'Description';

    const taskDateInput = document.createElement('input');
    taskDateInput.type = 'date'
    taskDateInput.required = true;

    const submitTaskButton = document.createElement('input');
    submitTaskButton.type='submit';
    //classes
    taskTitleInput.classList.add('task-text-input');
    taskDescriptionInput.classList.add('task-text-input');
    taskDateInput.classList.add('task-date-input');
    submitTaskButton.classList.add('task-submit-button')

    newTaskForm.addEventListener('submit', ()=>{
        let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(taskTitleInput.value, taskDescriptionInput.value, '', false)
        project.addTask(newTask);
        project.tasks.push(newTask)
        ;(0,_updateLocalStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorageTask)(project);
        (0,_deleteProjectContent__WEBPACK_IMPORTED_MODULE_2__.deleteProjectContent)()
        ;(0,_pages_loadProjectContent__WEBPACK_IMPORTED_MODULE_0__.loadProjectContent)(project);
        document.getElementById('newTaskButton').classList.remove('hidden')
    })

    //append
    newTaskForm.appendChild(taskTitleInput)
    newTaskForm.appendChild(taskDescriptionInput)
    newTaskForm.appendChild(submitTaskButton)
    return newTaskForm;
}


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
    const content = document.getElementById('content')
    const header = document.createElement('div')
    header.classList.add('header')
    const sideBar = document.createElement('div')
    sideBar.classList.add('sidebar')
    //header content
    const headerTitle = document.createElement('h1')
    headerTitle.textContent = "Todo List"
    headerTitle.classList.add('header-title')
    header.appendChild(headerTitle)
    //sidebar contents
    const projectsHeading = document.createElement('h2')
    projectsHeading.textContent = 'Projects:'
    projectsHeading.classList.add('projects-heading')
    sideBar.appendChild(projectsHeading)

    const projectButtonsContainer = document.createElement('div')
    projectButtonsContainer.classList.add('project-buttons-container')
    sideBar.appendChild(projectButtonsContainer)

    const projectContent = document.createElement('div')
    projectContent.classList.add('project-content')
    projectContent.setAttribute('id', 'projectContent')
    
    content.appendChild(header)
    content.appendChild(sideBar)
    content.appendChild(projectContent)

    //create all buttons for projects
    for(let i = 0; i<projectList.length; i++){
        let projectButton = document.createElement('button')
        projectButton.classList.add('project-button')
        projectButton.textContent = projectList[i].getTitle()
        projectButton.id = projectList[i]
        projectButton.addEventListener('click', () =>{
            const buttons = document.querySelectorAll(".project-button");
            buttons.forEach((button) => {
                button.classList.remove('selected');
              });
            projectButton.classList.add('selected');
            (0,_functions_deleteProjectContent__WEBPACK_IMPORTED_MODULE_1__.deleteProjectContent)();
            (0,_loadProjectContent__WEBPACK_IMPORTED_MODULE_0__.loadProjectContent)(projectList[i]);
        })
        projectButtonsContainer.appendChild(projectButton)
    }
    const newProjectButton = document.createElement('button')
    newProjectButton.innerHTML = 'New project'
    newProjectButton.classList.add('new-project-button')
    newProjectButton.id = 'newProjectbutton'
    newProjectButton.addEventListener('click', () =>{
        newProjectButton.classList.add('hidden')
        projectButtonsContainer.appendChild((0,_functions_createNewProject__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectList));
    })
    projectButtonsContainer.appendChild(newProjectButton)
}



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
    const projectContent = document.getElementById('projectContent')
    const tasks = project.getTasks();
    //add all tasks
    for (let task of tasks) {
        const title = task.getTitle();
        const description = task.getDescription();
        const complete = task.getIsComplete();

        const taskContainer = document.createElement('div')
        taskContainer.classList.add('task-container')
        const taskTitle = document.createElement('p')
        taskTitle.textContent = title
        taskContainer.appendChild(taskTitle)
        const taskDesc = document.createElement('p')
        taskDesc.textContent = description
        taskContainer.appendChild(taskDesc)

        if (complete) {
            const picture = new Image();
            picture.classList.add('check-icon')
            picture.src = _assets_tick_png__WEBPACK_IMPORTED_MODULE_0__;
            taskContainer.appendChild(picture);
            taskContainer.classList.add('complete')
        }else{
            taskContainer.classList.add('incomplete')
            const checkBox = document.createElement('input')
            checkBox.type = 'checkbox';
            checkBox.name = taskTitle;
            checkBox.addEventListener('change', ()=>{
                project.setTasks(project.getTasks().filter( function(el) { return el.title != task.title; } ));
                project.tasks = project.tasks.filter( function(el) { return el.title != task.title; } )
                ;(0,_functions_updateLocalStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorageTask)(project);
                (0,_functions_deleteProjectContent__WEBPACK_IMPORTED_MODULE_3__.deleteProjectContent)();
                loadProjectContent(project);
            })
            taskContainer.appendChild(checkBox)
        }
        projectContent.appendChild(taskContainer)
    }

    //new task button
    const newTaskButton = document.createElement('button');
    newTaskButton.innerHTML = 'Add task'
    newTaskButton.classList.add('new-task-button')
    newTaskButton.id = 'newTaskButton'
    newTaskButton.addEventListener('click', ()=>{
        console.log('new Task')
        const newTaskForm = (0,_functions_createNewTask__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(project)
        projectContent.appendChild(newTaskForm)
        newTaskButton.classList.add('hidden')
    })
    projectContent.appendChild(newTaskButton)
    
}



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






const content = document.createElement('div')
content.classList.add('content')
content.setAttribute("id", "content")
document.body.appendChild(content)

//add logic to see if there are saved tasks/projects here
if (!localStorage.getItem('projectList')) {
  localStorage.setItem('projectList', JSON.stringify([]))
  ;(0,_pages_loadInitialPage__WEBPACK_IMPORTED_MODULE_0__.loadInitialPage)([]);
} else {
  // localStorage.setItem('projectList', JSON.stringify([]))
  const retrieveList = JSON.parse(localStorage.getItem('projectList'));
  let projectList = [];
  if (retrieveList.length != 0) {
    for (let proj of retrieveList) {
      const title = proj.title;
      const desc = proj.desc;
      const tasks = proj.tasks;
      proj = (0,_functions_project__WEBPACK_IMPORTED_MODULE_1__.Project)(title, desc, tasks)
      let taskList = [];
      for (let task of proj.getTasks()) {
        const title = task.title;
        const desc = task.desc;
        const priority = task.priority;
        const isComplete = task.isComplete;
        let tempTask = (0,_functions_task__WEBPACK_IMPORTED_MODULE_2__.Task)(title,desc,priority,isComplete);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDWjtBQUNOO0FBQ25CO0FBQ2lCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdFQUFlO0FBQ2pCLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyREFBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RUFBZTtBQUNqQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVOZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVOZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kZWxldGVJbml0aWFsUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvZGVsZXRlUHJvamVjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3VwZGF0ZUxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlcy9sb2FkSW5pdGlhbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGFnZXMvbG9hZFByb2plY3RDb250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21hZGVfb2tpbmVfc2Fucy9NQURFT2tpbmVTYW5zUEVSU09OQUxVU0UtQmxhY2sub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAndG9kb0ZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCdPcGVuVHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuXFxuaHRtbCB7XFxuICAgIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAndG9kb0ZvbnQnO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ3RvZG9Gb250JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdGl0bGV7XFxuXFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7ICovXFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiA1cHg7ICovXFxufVxcbi5wcm9qZWN0LWJ1dHRvbntcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4ucHJvamVjdC1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAyNTIsIDE1NCwgMC41KTtcXG59XFxuLnByb2plY3QtYnV0dG9uLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDE1NCwgMjUyLCAxNTQpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMTIsIDAsIDAuNTUyKTtcXG59XFxuLnRhc2stY29udGFpbmVyPip7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbntcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuLm5ldy10YXNrLWJ1dHRvbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXctdGFzay1mb3Jte1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay10ZXh0LWlucHV0LCAudGFzay1kYXRlLWlucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XFxufVxcblxcbi50YXNrLXN1Ym1pdC1idXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2staWNvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTAsIDI1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMjUyLCAxNTQpO1xcbn1cXG4ubmV3LXByb2plY3QtYnV0dG9uLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QiwrREFBMEY7SUFDMUYsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7O0FBR0Y7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7MEJBQ3NCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAndG9kb0ZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvbWFkZV9va2luZV9zYW5zL01BREVPa2luZVNhbnNQRVJTT05BTFVTRS1CbGFjay5vdGYnKSBmb3JtYXQoJ09wZW5UeXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5cXG5odG1sIHtcXG4gICAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICd0b2RvRm9udCc7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAndG9kb0ZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci10aXRsZXtcXG5cXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBnYXA6IDVweDsgKi9cXG59XFxuLnByb2plY3QtYnV0dG9ue1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDI1MiwgMTU0LCAwLjUpO1xcbn1cXG4ucHJvamVjdC1idXR0b24uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDI1MiwgMTU0KTtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIxMiwgMCwgMC41NTIpO1xcbn1cXG4udGFzay1jb250YWluZXI+KntcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmV3LXRhc2stYnV0dG9ue1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG4ubmV3LXRhc2stYnV0dG9uLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm17XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLXRleHQtaW5wdXQsIC50YXNrLWRhdGUtaW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLnRhc2stc3VibWl0LWJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaGVjay1pY29ue1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MCwgMjUwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAyNTIsIDE1NCk7XFxufVxcbi5uZXctcHJvamVjdC1idXR0b24uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0IHsgZGVsZXRlSW5pdGlhbFBhZ2UgfSBmcm9tIFwiLi9kZWxldGVJbml0aWFsUGFnZVwiXG5pbXBvcnQgeyBsb2FkUHJvamVjdENvbnRlbnQgfSBmcm9tIFwiLi4vcGFnZXMvbG9hZFByb2plY3RDb250ZW50XCJcbmltcG9ydCB7bG9hZEluaXRpYWxQYWdlIH0gZnJvbSAnLi4vcGFnZXMvbG9hZEluaXRpYWxQYWdlJ1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi91cGRhdGVMb2NhbFN0b3JhZ2UnXG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICAvL2NyZWF0ZSBhIGZvcm0gdG8gY29sbGVjdCBpbmZvLiBXaGVuIHN1Ym1pdGVkLCBkZWxldGUgY29udGVudCBhbmQgY2FsbCBsb2FkIHByb2plY3QgY29udGVudHNcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWZvcm0nKVxuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHByb2plY3RUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IG5hbWUnXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0UHJvamVjdEJ1dHRvbi50eXBlPSdzdWJtaXQnO1xuICAgIHN1Ym1pdFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LXByb2plY3QtYnV0dG9uJylcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRleHQtaW5wdXQnKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVJbnB1dClcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0QnV0dG9uKVxuXG4gICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gc3VtYml0dGVkJylcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdFRpdGxlSW5wdXQudmFsdWUsICcnLCBbXSlcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KVxuICAgICAgICAvL3VwZGF0ZSBsY29hbCBzdG9yYWdlXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgICAgIGRlbGV0ZUluaXRpYWxQYWdlKClcbiAgICAgICAgbG9hZEluaXRpYWxQYWdlKHByb2plY3RMaXN0KVxuICAgICAgICBsb2FkUHJvamVjdENvbnRlbnQobmV3UHJvamVjdCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0YnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xuXG5cbn1cbmV4cG9ydCB7Y3JlYXRlTmV3UHJvamVjdH0iLCJpbXBvcnQgeyBsb2FkUHJvamVjdENvbnRlbnQgfSBmcm9tICcuLi9wYWdlcy9sb2FkUHJvamVjdENvbnRlbnQnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzaydcbmltcG9ydCAgeyBkZWxldGVQcm9qZWN0Q29udGVudCB9IGZyb20gJy4vZGVsZXRlUHJvamVjdENvbnRlbnQnXG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrIH0gZnJvbSAnLi91cGRhdGVMb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBjcmVhdGVOZXdUYXNrID0gKHByb2plY3QpID0+IHtcbiAgICAvL2NyZWF0ZSBhIGZvcm0gdG8gY29sbGVjdCBpbmZvLiBXaGVuIHN1Ym1pdGVkLCBkZWxldGUgY29udGVudCBhbmQgY2FsbCBsb2FkIHByb2plY3QgY29udGVudHNcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJylcbiAgICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzaydcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuXG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0RhdGVJbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgdGFza0RhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRUYXNrQnV0dG9uLnR5cGU9J3N1Ym1pdCc7XG4gICAgLy9jbGFzc2VzXG4gICAgdGFza1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0LWlucHV0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0LWlucHV0Jyk7XG4gICAgdGFza0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUtaW5wdXQnKTtcbiAgICBzdWJtaXRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3VibWl0LWJ1dHRvbicpXG5cbiAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKT0+e1xuICAgICAgICBsZXQgbmV3VGFzayA9IFRhc2sodGFza1RpdGxlSW5wdXQudmFsdWUsIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLCAnJywgZmFsc2UpXG4gICAgICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2socHJvamVjdCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RDb250ZW50KClcbiAgICAgICAgbG9hZFByb2plY3RDb250ZW50KHByb2plY3QpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSlcblxuICAgIC8vYXBwZW5kXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J1dHRvbilcbiAgICByZXR1cm4gbmV3VGFza0Zvcm07XG59XG5leHBvcnQge2NyZWF0ZU5ld1Rhc2t9IiwiY29uc3QgZGVsZXRlSW5pdGlhbFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RlbGV0aW5nIHBhZ2UnKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJ1xufVxuZXhwb3J0IHtkZWxldGVJbml0aWFsUGFnZX0iLCJjb25zdCBkZWxldGVQcm9qZWN0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRpbmcgY29udGVudCcpXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENvbnRlbnQnKVxuICAgIHByb2plY3RDb250ZW50LmlubmVySFRNTCA9ICcnXG59XG5leHBvcnQge2RlbGV0ZVByb2plY3RDb250ZW50fSIsImNvbnN0IFByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrcykgPT4ge1xuXG4gICAgLy9HZXR0ZXJzXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aXRsZVxuICAgIH1cbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gICAgfVxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT57XG4gICAgICAgIHJldHVybiB0YXNrc1xuICAgIH1cblxuICAgIC8vc2V0dGVyc1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBjb25zdCBjbGVhclRhc2tzID0gKCk9PntcbiAgICAgICAgdGFza3MgPSBbXTtcbiAgICB9XG4gICAgY29uc3Qgc2V0VGFza3MgPSAobmV3VGFza3MpPT57XG4gICAgICAgIHRhc2tzID0gbmV3VGFza3M7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlciggZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsICE9IHRhc2s7IH0gKVxuICAgIH1cblxuICAgIHJldHVybnt0aXRsZTogdGl0bGUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgdGFza3M6IHRhc2tzLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldFRhc2tzLCBhZGRUYXNrLCBjbGVhclRhc2tzLCBzZXRUYXNrcywgcmVtb3ZlVGFza31cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9IiwiY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKSA9PiB7XG5cbiAgICAvL0dldHRlcnNcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgfVxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICB9XG4gICAgLy8gY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGR1ZURhdGVcbiAgICAvLyB9XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmlvcml0eVxuICAgIH1cbiAgICBjb25zdCBnZXRJc0NvbXBsZXRlID0gKCkgPT57XG4gICAgICAgIHJldHVybiBpc0NvbXBsZXRlXG4gICAgfVxuXG4gICAgLy9TZXR0ZXJzXG4gICAgY29uc3QgdG9nZ2xlSXNDb21wbGV0ZSA9ICgpID0+e1xuICAgICAgICBpc0NvbXBsZXRlID0gIWlzQ29tcGxldGU7XG4gICAgfVxuXG4gICAgcmV0dXJue3RpdGxlOiB0aXRsZSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBwcmlvcml0eTogcHJpb3JpdHksIGlzQ29tcGxldGU6IGlzQ29tcGxldGUsIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0UHJpb3JpdHksIGdldElzQ29tcGxldGUsIHRvZ2dsZUlzQ29tcGxldGV9XG59XG5cbmV4cG9ydCB7IFRhc2sgfSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJ1xuXG5jb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAobGlzdFRvU3RvcmUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIC0gYWRkaW5nIG5ldyBwcm9qZWN0Jyk7XG4gICAgY29uc3Qgc3RyaW5nTGlzdFRvU3RvcmUgPSBKU09OLnN0cmluZ2lmeShsaXN0VG9TdG9yZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0Jywgc3RyaW5nTGlzdFRvU3RvcmUpO1xufVxuXG5jb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXVxuICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgLSBhZGRpbmcgbmV3IHRhc2snKVxuICAgIGNvbnN0IHJldHJpZXZlTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIGZvciAobGV0IHByb2ogb2YgcmV0cmlldmVMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcHJvai50aXRsZTtcbiAgICAgICAgY29uc3QgZGVzYyA9IHByb2ouZGVzYztcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qLnRhc2tzO1xuICAgICAgICBwcm9qID0gUHJvamVjdCh0aXRsZSwgZGVzYywgdGFza3MpO1xuICAgICAgICBsZXQgdGFza0xpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qLmdldFRhc2tzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSB0YXNrLmRlc2M7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgICAgICBjb25zdCBpc0NvbXBsZXRlID0gdGFzay5pc0NvbXBsZXRlO1xuICAgICAgICAgICAgbGV0IHRlbXBUYXNrID0gVGFzayh0aXRsZSwgZGVzYywgcHJpb3JpdHksIGlzQ29tcGxldGUpO1xuICAgICAgICAgICAgdGFza0xpc3QucHVzaCh0ZW1wVGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvai5zZXRUYXNrcyh0YXNrTGlzdCk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvaik7XG4gICAgfVxuXG4gICAgbGV0IG5ld0xpc3QgPSBwcm9qZWN0TGlzdC5maWx0ZXIoZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsLmdldFRpdGxlKCkgIT0gcHJvamVjdC5nZXRUaXRsZSgpOyB9KTtcbiAgICBuZXdMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKG5ld0xpc3QpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UsIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2sgfSIsImltcG9ydCB7IGxvYWRQcm9qZWN0Q29udGVudCB9IGZyb20gXCIuL2xvYWRQcm9qZWN0Q29udGVudFwiXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0Q29udGVudCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZGVsZXRlUHJvamVjdENvbnRlbnRcIlxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvY3JlYXRlTmV3UHJvamVjdFwiXG5cbmNvbnN0IGxvYWRJbml0aWFsUGFnZSA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxuICAgIC8vaGVhZGVyIGNvbnRlbnRcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCJcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGl0bGUnKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSlcbiAgICAvL3NpZGViYXIgY29udGVudHNcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcHJvamVjdHNIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Byb2plY3RzOidcbiAgICBwcm9qZWN0c0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGluZycpXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRpbmcpXG5cbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b25zLWNvbnRhaW5lcicpXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uc0NvbnRhaW5lcilcblxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQnKVxuICAgIHByb2plY3RDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdENvbnRlbnQnKVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZUJhcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KVxuXG4gICAgLy9jcmVhdGUgYWxsIGJ1dHRvbnMgZm9yIHByb2plY3RzXG4gICAgZm9yKGxldCBpID0gMDsgaTxwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpXG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpXS5nZXRUaXRsZSgpXG4gICAgICAgIHByb2plY3RCdXR0b24uaWQgPSBwcm9qZWN0TGlzdFtpXVxuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdENvbnRlbnQoKTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0TGlzdFtpXSk7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pXG4gICAgfVxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG5ld1Byb2plY3RCdXR0b24uaW5uZXJIVE1MID0gJ05ldyBwcm9qZWN0J1xuICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uJylcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmlkID0gJ25ld1Byb2plY3RidXR0b24nXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdExpc3QpKTtcbiAgICB9KVxuICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pXG59XG5cbmV4cG9ydCB7IGxvYWRJbml0aWFsUGFnZSB9OyIsImltcG9ydCBUaWNrIGZyb20gJy4uL2Fzc2V0cy90aWNrLnBuZyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdUYXNrIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2NyZWF0ZU5ld1Rhc2snO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlLCB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VwZGF0ZUxvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0Q29udGVudCB9IGZyb20gJy4uL2Z1bmN0aW9ucy9kZWxldGVQcm9qZWN0Q29udGVudCc7XG5cbmNvbnN0IGxvYWRQcm9qZWN0Q29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENvbnRlbnQnKVxuICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICAgIC8vYWRkIGFsbCB0YXNrc1xuICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrLmdldFRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9IHRhc2suZ2V0SXNDb21wbGV0ZSgpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJylcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2MpXG5cbiAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjb25zdCBwaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWljb24nKVxuICAgICAgICAgICAgcGljdHVyZS5zcmMgPSBUaWNrO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaWN0dXJlKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5jb21wbGV0ZScpXG4gICAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgY2hlY2tCb3gubmFtZSA9IHRhc2tUaXRsZTtcbiAgICAgICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhwcm9qZWN0LmdldFRhc2tzKCkuZmlsdGVyKCBmdW5jdGlvbihlbCkgeyByZXR1cm4gZWwudGl0bGUgIT0gdGFzay50aXRsZTsgfSApKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoIGZ1bmN0aW9uKGVsKSB7IHJldHVybiBlbC50aXRsZSAhPSB0YXNrLnRpdGxlOyB9IClcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgbG9hZFByb2plY3RDb250ZW50KHByb2plY3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcilcbiAgICB9XG5cbiAgICAvL25ldyB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnV0dG9uLmlubmVySFRNTCA9ICdBZGQgdGFzaydcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbicpXG4gICAgbmV3VGFza0J1dHRvbi5pZCA9ICduZXdUYXNrQnV0dG9uJ1xuICAgIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3IFRhc2snKVxuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGNyZWF0ZU5ld1Rhc2socHJvamVjdClcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pXG4gICAgICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9KVxuICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pXG4gICAgXG59XG5cbmV4cG9ydCB7IGxvYWRQcm9qZWN0Q29udGVudCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRJbml0aWFsUGFnZSB9IGZyb20gJy4vcGFnZXMvbG9hZEluaXRpYWxQYWdlJ1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25zL3Byb2plY3QnXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9mdW5jdGlvbnMvdGFzaydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBpcyB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbi8vYWRkIGxvZ2ljIHRvIHNlZSBpZiB0aGVyZSBhcmUgc2F2ZWQgdGFza3MvcHJvamVjdHMgaGVyZVxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShbXSkpXG4gIGxvYWRJbml0aWFsUGFnZShbXSk7XG59IGVsc2Uge1xuICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShbXSkpXG4gIGNvbnN0IHJldHJpZXZlTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcbiAgaWYgKHJldHJpZXZlTGlzdC5sZW5ndGggIT0gMCkge1xuICAgIGZvciAobGV0IHByb2ogb2YgcmV0cmlldmVMaXN0KSB7XG4gICAgICBjb25zdCB0aXRsZSA9IHByb2oudGl0bGU7XG4gICAgICBjb25zdCBkZXNjID0gcHJvai5kZXNjO1xuICAgICAgY29uc3QgdGFza3MgPSBwcm9qLnRhc2tzO1xuICAgICAgcHJvaiA9IFByb2plY3QodGl0bGUsIGRlc2MsIHRhc2tzKVxuICAgICAgbGV0IHRhc2tMaXN0ID0gW107XG4gICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2ouZ2V0VGFza3MoKSkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0YXNrLmRlc2M7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgY29uc3QgaXNDb21wbGV0ZSA9IHRhc2suaXNDb21wbGV0ZTtcbiAgICAgICAgbGV0IHRlbXBUYXNrID0gVGFzayh0aXRsZSxkZXNjLHByaW9yaXR5LGlzQ29tcGxldGUpO1xuICAgICAgICB0YXNrTGlzdC5wdXNoKHRlbXBUYXNrKTtcbiAgICAgIH1cbiAgICAgIHByb2ouc2V0VGFza3ModGFza0xpc3QpO1xuICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qKTtcbiAgICB9XG4gIH1cbiAgbG9hZEluaXRpYWxQYWdlKHByb2plY3RMaXN0KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=