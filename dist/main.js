/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/Styles/styles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/Styles/styles.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Anuphan-VariableFont_wght.ttf */ \"./dist/Styles/Anuphan-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Web-design.jpg */ \"./dist/images/Web-design.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: anuphan;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\nhtml,\\nbody {\\n  height: 100%;\\n  margin: 0;\\n}\\n\\n.image {\\n  margin: 0;\\n  height: 100%;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center fixed;\\n  background-size: cover;\\n}\\n.container {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  margin: 5px;\\n  width: clamp(500px, 75%, 900px);\\n  height: 500px;\\n  background-color: white;\\n  display: flex;\\n}\\n.sidebar {\\n  font-family: anuphan;\\n  padding: 10px;\\n  background-color: beige;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.todo,\\n.projects,\\n.nodes {\\n  font-size: 25px;\\n  font-weight: bold;\\n  margin: 10px 10px;\\n}\\n.time {\\n  font-size: 20px;\\n  font-weight: 400;\\n  margin: 5px 20px;\\n}\\n.time:hover,\\n.todo:hover,\\n.projects:hover,\\n.nodes:hover {\\n  cursor: pointer;\\n  transform: scale(1.1);\\n}\\n.addItem {\\n  margin: 20px;\\n  margin-bottom: 40px;\\n  text-align: start;\\n}\\n#newItemButton {\\n  width: 50px;\\n  height: 50px;\\n  font-size: 30px;\\n  border-radius: 50%;\\n}\\nbutton:hover {\\n  cursor: pointer;\\n  box-shadow: 5px 5px 10px;\\n}\\n.formelement {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 10px;\\n  align-items: center;\\n  margin: 10px 5px;\\n}\\ntextarea {\\n  resize: none;\\n}\\n.content {\\n  width: 100%;\\n  padding: 10px;\\n  overflow: auto;\\n}\\n.item {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 18px;\\n}\\n.item:hover {\\n  background-color: rgb(127, 255, 0, 0.3);\\n}\\n.start {\\n  display: flex;\\n  align-items: start;\\n  gap: 20px;\\n}\\n.end {\\n  display: flex;\\n  align-items: start;\\n  gap: 20px;\\n}\\n#done:hover,\\n#description:hover,\\n#edit:hover,\\n#delete:hover {\\n  cursor: pointer;\\n  color: blue;\\n}\\n#toDo::backdrop,\\n#what_to_add::backdrop,\\n#project::backdrop,\\n#node::backdrop,\\n#descriptionModal::backdrop {\\n  backdrop-filter: blur(5px);\\n}\\n.descElement {\\n  padding: 10px;\\n  max-width: 500px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to_do_app/./dist/Styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to_do_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to_do_app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to_do_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./dist/Styles/styles.css":
/*!********************************!*\
  !*** ./dist/Styles/styles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/Styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to_do_app/./dist/Styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createHTML.js */ \"./src/modules/createHTML.js\");\n/* harmony import */ var _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addItem.js */ \"./src/modules/addItem.js\");\n/* harmony import */ var _modules_checkdone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkdone.js */ \"./src/modules/checkdone.js\");\n/* harmony import */ var _modules_print_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/print.js */ \"./src/modules/print.js\");\n/* harmony import */ var _modules_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/description.js */ \"./src/modules/description.js\");\n/* harmony import */ var _dist_Styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dist/Styles/styles.css */ \"./dist/Styles/styles.css\");\n\n\n\n\n\n\n\n\n(0,_modules_createHTML_js__WEBPACK_IMPORTED_MODULE_0__.createbody)();\n\nconst newItembutton = document.getElementById(\"newItemButton\");\nconst typeButton = document.getElementById(\"addTypeButton\");\nconst addToDoButton = document.getElementById(\"addToDoButton\");\nconst addProjectButton = document.getElementById(\"addProjectButton\");\nconst addNodeButton = document.getElementById(\"addNodeButton\");\nconst editToDoButton = document.getElementById(\"editToDoButton\");\n\nconst whatmodal = document.getElementById(\"what_to_add\");\nconst toDoModal = document.getElementById(\"toDo\");\nconst projectModal = document.getElementById(\"project\");\nconst nodeModal = document.getElementById(\"node\");\nconst edittoDoModal = document.getElementById(\"toDoEdit\");\n\nconst newToDoForm = document.getElementById(\"newToDo\");\nconst newProjectForm = document.getElementById(\"newProject\");\nconst newNodeForm = document.getElementById(\"newNode\");\nconst editToDoForm = document.getElementById(\"editToDo\");\n\nconst add = document.getElementsByName(\"add\");\n\nlet item = [],\n  id = 1,\n  editID,\n  deleteID;\n\nnewItembutton.addEventListener(\"click\", () => {\n  whatmodal.showModal();\n});\ntypeButton.addEventListener(\"click\", () => {\n  for (let i = 0; i < add.length; i++) {\n    if (add[i].checked) {\n      if (add[i].value == \"To_do\") toDoModal.showModal();\n      else if (add[i].value == \"Node\") nodeModal.showModal();\n      else if (add[i].value == \"Project\") projectModal.showModal();\n    }\n  }\n});\naddToDoButton.addEventListener(\"click\", () => {\n  item.push(\n    new _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1__.addToDo(\n      \"To_do\",\n      newToDoForm.title,\n      newToDoForm.description,\n      newToDoForm.project,\n      newToDoForm.date,\n      newToDoForm.priority,\n      id\n    )\n  );\n  id++;\n  newToDoForm.title.value = \"\";\n  newToDoForm.description.value = \"\";\n  (0,_modules_print_js__WEBPACK_IMPORTED_MODULE_3__.printToDos)(item);\n  (0,_modules_checkdone_js__WEBPACK_IMPORTED_MODULE_2__.done)(item);\n  (0,_modules_description_js__WEBPACK_IMPORTED_MODULE_4__.description)(item);\n  editToDo();\n  del();\n});\n\naddProjectButton.addEventListener(\"click\", () => {\n  item.push(new _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1__.addProject(\"Project\", newProjectForm.project));\n  (0,_modules_createHTML_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToForm)(item[item.length - 1].title.value);\n  newProjectForm.project.value = \"\";\n});\n\naddNodeButton.addEventListener(\"click\", () => {\n  item.push(new _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1__.addNode(\"Node\", newNodeForm.title, newNodeForm.description));\n  newNodeForm.title.value = \"\";\n  newNodeForm.description.value = \"\";\n});\n\neditToDoButton.addEventListener(\"click\", () => {\n  item.push(\n    new _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1__.addToDo(\n      \"To_do\",\n      editToDoForm.title,\n      editToDoForm.description,\n      editToDoForm.project,\n      editToDoForm.date,\n      editToDoForm.priority,\n      id\n    )\n  );\n  for (let i = 0; i < item.length; i++) {\n    if (editID == item[i].id) {\n      if (item[i].done == true) item[item.length - 1].done = true;\n      item.splice(i, 1);\n    }\n  }\n  id++;\n  (0,_modules_print_js__WEBPACK_IMPORTED_MODULE_3__.printToDos)(item);\n  (0,_modules_checkdone_js__WEBPACK_IMPORTED_MODULE_2__.done)(item);\n  (0,_modules_description_js__WEBPACK_IMPORTED_MODULE_4__.description)(item);\n  editToDo();\n  del();\n});\n\nfunction del() {\n  const deletes = document.querySelectorAll(\"#delete\");\n  deletes.forEach((delet) => {\n    delet.addEventListener(\"click\", () => {\n      deleteID = delet.parentNode.parentNode.id;\n      for (let i = 0; i < item.length; i++) {\n        if (deleteID == item[i].id) {\n          item.splice(i, 1);\n        }\n      }\n      (0,_modules_print_js__WEBPACK_IMPORTED_MODULE_3__.printToDos)(item);\n      (0,_modules_checkdone_js__WEBPACK_IMPORTED_MODULE_2__.done)(item);\n      (0,_modules_description_js__WEBPACK_IMPORTED_MODULE_4__.description)(item);\n      editToDo();\n      del();\n    });\n  });\n}\nfunction editToDo() {\n  const edits = document.querySelectorAll(\"#edit\");\n  edits.forEach((edit) => {\n    edit.addEventListener(\"click\", () => {\n      editID = edit.parentNode.parentNode.id;\n      for (let i = 0; i < item.length; i++) {\n        if (editID == item[i].id) {\n          editToDoForm.title.value = item[i].title;\n          editToDoForm.description.value = item[i].description;\n          editToDoForm.project.value = item[i].project;\n          editToDoForm.date.value = item[i].date;\n          editToDoForm.priority.value = item[i].priority;\n          edittoDoModal.showModal();\n        }\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://to_do_app/./src/index.js?");

/***/ }),

/***/ "./src/modules/addItem.js":
/*!********************************!*\
  !*** ./src/modules/addItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNode\": () => (/* binding */ addNode),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo)\n/* harmony export */ });\nclass addToDo {\n  constructor(type, title, description, project, date, priority, id) {\n    this.type = type;\n    this.title = title.value;\n    this.description = description.value;\n    this.project = project.value;\n    this.priority = priority.value;\n    if (date.value == \"\") this.date = \"--No_Date-\";\n    else this.date = date.value;\n    this.done = false;\n    this.id = id;\n  }\n}\nclass addProject {\n  constructor(type, title) {\n    this.type = type;\n    this.title = title.value;\n  }\n}\nclass addNode {\n  constructor(type, title, description) {\n    this.type = type;\n    this.title = title.value;\n    this.description = description.value;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://to_do_app/./src/modules/addItem.js?");

/***/ }),

/***/ "./src/modules/checkdone.js":
/*!**********************************!*\
  !*** ./src/modules/checkdone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"done\": () => (/* binding */ done)\n/* harmony export */ });\nfunction done(item) {\n  const dones = document.querySelectorAll(\"input[type=checkbox]\");\n  let donID;\n  dones.forEach((don) => {\n    don.addEventListener(\"click\", () => {\n      if (don.checked == true) {\n        donID = don.parentNode.parentNode.id;\n        for (let i = 0; i < item.length; i++) {\n          if (donID == item[i].id) item[i].done = true;\n        }\n      } else if (don.checked == false) {\n        donID = don.parentNode.parentNode.id;\n        for (let i = 0; i < item.length; i++) {\n          if (donID == item[i].id) item[i].done = false;\n        }\n      }\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack://to_do_app/./src/modules/checkdone.js?");

/***/ }),

/***/ "./src/modules/createHTML.js":
/*!***********************************!*\
  !*** ./src/modules/createHTML.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToForm\": () => (/* binding */ addProjectToForm),\n/* harmony export */   \"createbody\": () => (/* binding */ createbody)\n/* harmony export */ });\n/* harmony import */ var _dist_Styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/Styles/styles.css */ \"./dist/Styles/styles.css\");\n\n\nfunction createbody() {\n  const body = document.querySelector(\"body\");\n  body.innerHTML = `\n  <div class=\"image\"></div>\n  <div class=\"container\">\n    <div class=\"sidebar\">\n      <div class=\"todos\">\n        <div class=\"todo\">To-Dos</div>\n        <div class=\"time\" id=\"today\">Today</div>\n        <div class=\"time\" id=\"week\">Week</div>\n        <div class=\"time\" id=\"month\">Month</div>\n        <div class=\"time\" id=\"year\">Year</div>\n        <div class=\"time\" id=\"all\">All</div>\n      </div>\n      <div class=\"projects\">Projects</div>\n      <div class=\"nodes\">Nodes</div>\n      <div class=\"addItem\">\n        <button title=\"Add Item\" id=\"newItemButton\">+</button>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"item\">\n        <div class=\"start\">\n          <input type=\"checkbox\" id=\"done\" />\n          <div id=\"title\">sport</div>\n        </div>\n        <div class=\"end\">\n          <div id=\"description\">Details</div>\n          <div id=\"date\">20.04.22</div>\n          <i class=\"fa-solid fa-pen-to-square\" id=\"edit\"></i>\n          <i class=\"fa-solid fa-trash\" id=\"delete\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <dialog id=\"what_to_add\">\n    <form action=\"...\" method=\"dialog\">\n      <div class=\"radiobutton\">\n        <h3>Wich type of Item do you want to add?</h3>\n        <div>\n          <input type=\"radio\" name=\"add\" value=\"To_do\" checked>To do<br>\n          <input type=\"radio\" name=\"add\" value=\"Node\">Node<br>\n          <input type=\"radio\" name=\"add\" value=\"Project\">Project<br>\n        <div>\n        <div\n          class=\"formelement\"\n          style=\"padding-top: 10px; justify-content: center;gap:10px;\"\n        >\n          <button type=\"submit\" id=\"addTypeButton\">Submit</button>\n          <button id=\"cancel\">Cancel</button>\n        </div>\n    </form>\n  </dialog>\n  <dialog id=\"toDo\">\n    <form action=\"...\" method=\"dialog\" id=\"newToDo\">\n      <div class=\"formelement\">\n        <label for=\"title\">Title</label>\n        <textarea id=\"title\" rows=\"1\" name=\"title\"></textarea>\n      </div>\n      <div class=\"formelement\">\n        <label for=\"description\">Description</label>\n        <textarea rows=\"3\" id=\"description\" name=\"description\"></textarea>\n      </div>\n      <div class=\"formelement\">\n        Project\n        <select name=\"project\" id=\"choice\">\n          <option value=\"None\">None</option>\n        </select>\n      </div>\n      <div class=\"formelement\">\n        <label for=\"date\">Due Date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" />\n      </div>\n      <div class=\"formelement\">\n        Prioritylevel\n        <select name=\"priority\">\n          <option value=\"high\">High</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"low\">Low</option>\n        </select>\n      </div>\n      <div\n        class=\"formelement\"\n        style=\"padding-top: 20px; justify-content: space-evenly\"\n      >\n        <button type=\"submit\" id=\"addToDoButton\">Submit</button>\n        <button id=\"cancel\">Cancel</button>\n      </div>\n    </form>\n  </dialog>\n  \n  <dialog id=\"project\">\n    <form action=\"...\" method=\"dialog\" id=\"newProject\">\n      <div class=\"formelement\">\n        <label for=\"project\">Project</label>\n        <textarea id=\"project\" rows=\"1\" name=\"project\"></textarea>\n      </div>\n      <div\n        class=\"formelement\"\n        style=\"padding-top: 20px; justify-content: space-evenly\"\n      >\n        <button type=\"submit\" id=\"addProjectButton\">Submit</button>\n        <button id=\"cancel\">Cancel</button>\n      </div>\n    </form>\n  </dialog>\n\n  <dialog id=\"node\">\n    <form action=\"...\" method=\"dialog\" id=\"newNode\">\n      <div class=\"formelement\">\n        <label for=\"title\">Title</label>\n        <textarea id=\"title\" rows=\"1\" name=\"title\"></textarea>\n      </div>\n      <div class=\"formelement\">\n        <label for=\"description\">Description</label>\n        <textarea rows=\"3\" id=\"description\" name=\"description\"></textarea>\n      </div>\n      <div\n        class=\"formelement\"\n        style=\"padding-top: 20px; justify-content: space-evenly\"\n      >\n        <button type=\"submit\" id=\"addNodeButton\">Submit</button>\n        <button id=\"cancel\">Cancel</button>\n      </div>\n    </form>\n  </dialog>\n  \n  <dialog id=\"toDoEdit\">\n    <form action=\"...\" method=\"dialog\" id=\"editToDo\">\n      <div class=\"formelement\">\n        <label for=\"title\">Title</label>\n        <textarea id=\"title\" rows=\"1\" name=\"title\"></textarea>\n      </div>\n      <div class=\"formelement\">\n        <label for=\"description\">Description</label>\n        <textarea rows=\"3\" id=\"description\" name=\"description\"></textarea>\n      </div>\n      <div class=\"formelement\">\n        Project\n        <select name=\"project\" id=\"choice\">\n          <option value=\"None\">None</option>\n        </select>\n      </div>\n      <div class=\"formelement\">\n        <label for=\"date\">Due Date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" />\n      </div>\n      <div class=\"formelement\">\n        Prioritylevel\n        <select name=\"priority\">\n          <option value=\"high\">High</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"low\">Low</option>\n        </select>\n      </div>\n      <div\n        class=\"formelement\"\n        style=\"padding-top: 20px; justify-content: space-evenly\"\n      >\n        <button type=\"submit\" id=\"editToDoButton\">Edit</button>\n        <button id=\"cancel\">Cancel</button>\n      </div>\n    </form>\n  </dialog>\n  \n  <dialog id=\"descriptionModal\">\n  </dialog>`;\n}\nfunction addProjectToForm(title) {\n  const choice = document.getElementById(\"choice\");\n  const project = document.createElement(\"option\");\n  project.setAttribute(\"value\", String(title));\n  project.textContent = String(title);\n  choice.appendChild(project);\n}\n\n\n\n//# sourceURL=webpack://to_do_app/./src/modules/createHTML.js?");

/***/ }),

/***/ "./src/modules/description.js":
/*!************************************!*\
  !*** ./src/modules/description.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"description\": () => (/* binding */ description)\n/* harmony export */ });\nfunction description(item) {\n  const descripts = document.querySelectorAll(\"#description\");\n  const descriptionModal = document.getElementById(\"descriptionModal\");\n  descripts.forEach((descript) => {\n    descript.addEventListener(\"click\", () => {\n      let descriptionID = descript.parentNode.parentNode.id;\n      for (let i = 0; i < item.length; i++) {\n        if (descriptionID == item[i].id) {\n          descriptionModal.showModal();\n          descriptionModal.innerHTML =\n            `\n            <form action=\"...\" method=\"dialog\">\n              <div class=\"descElement\" id=\"desItem\"><strong>Item:</strong>  ` +\n            item[i].type +\n            `</div>\n              <div class=\"descElement\" id=\"desTitle\"><strong>Title:</strong>` +\n            item[i].title +\n            `</div>\n              <div class=\"descElement\" id=\"desDescription\"><strong>Description:</strong>` +\n            item[i].description +\n            `</div>\n              <div class=\"descElement\" id=\"desProject\"><strong>Project:</strong>` +\n            item[i].project +\n            `</div>\n              <div class=\"descElement\" id=\"desDate\"><strong>Due Date:</strong>` +\n            item[i].date +\n            `</div>\n              <div class=\"descElement\" id=\"desPriority\"><strong>Priority:</strong>` +\n            item[i].priority +\n            `</div>\n              <div style=\"margin-top:10px;width:100%;display:flex; justify-content:center;\"><button id=\"cancel\">Close</button></div>\n            </form>`;\n        }\n      }\n    });\n  });\n}\n\n\n\n\n//# sourceURL=webpack://to_do_app/./src/modules/description.js?");

/***/ }),

/***/ "./src/modules/print.js":
/*!******************************!*\
  !*** ./src/modules/print.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printToDos\": () => (/* binding */ printToDos)\n/* harmony export */ });\nfunction printToDos(ToDo) {\n  const content = document.querySelector(\".content\");\n  content.innerHTML = \"\";\n  for (let i = 0; i < ToDo.length; i++) {\n    let item = document.createElement(\"div\");\n\n    item.setAttribute(\"class\", \"item\");\n    item.setAttribute(\"id\", ToDo[i].id);\n    if (ToDo[i].done == false) {\n      item.innerHTML =\n        `\n            <div class=\"start\">\n                <input type=\"checkbox\" id=\"done\"/>\n                <div id=\"title\">` +\n        ToDo[i].title +\n        `</div>\n            </div>\n            <div class=\"end\">\n                <div id=\"description\">Details</div>\n                <div id=\"date\">` +\n        ToDo[i].date +\n        `</div>\n                <i class=\"fa-solid fa-pen-to-square\" id=\"edit\" title=\"edit\"></i>\n                <i class=\"fa-solid fa-trash\" id=\"delete\" title=\"delete\"></i>\n            </div>`;\n      content.appendChild(item);\n    } else {\n      item.innerHTML =\n        `\n            <div class=\"start\">\n                <input type=\"checkbox\" id=\"done\" checked/>\n                <div id=\"title\">` +\n        ToDo[i].title +\n        `</div>\n            </div>\n            <div class=\"end\">\n                <div id=\"description\">Details</div>\n                <div id=\"date\">` +\n        ToDo[i].date +\n        `</div>\n                <i class=\"fa-solid fa-pen-to-square\" id=\"edit\" title=\"edit\"></i>\n                <i class=\"fa-solid fa-trash\" id=\"delete\" title=\"delete\"></i>\n            </div>`;\n      content.appendChild(item);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://to_do_app/./src/modules/print.js?");

/***/ }),

/***/ "./dist/Styles/Anuphan-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./dist/Styles/Anuphan-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2635ae8491d40c7ebd37.ttf\";\n\n//# sourceURL=webpack://to_do_app/./dist/Styles/Anuphan-VariableFont_wght.ttf?");

/***/ }),

/***/ "./dist/images/Web-design.jpg":
/*!************************************!*\
  !*** ./dist/images/Web-design.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e096a92c8d762f352c5a.jpg\";\n\n//# sourceURL=webpack://to_do_app/./dist/images/Web-design.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;