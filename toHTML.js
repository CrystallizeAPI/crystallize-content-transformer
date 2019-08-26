(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/converters/html/toHTML.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/converters/html/helpers.js":
/*!****************************************!*\
  !*** ./src/converters/html/helpers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar containers = {\n  div: {\n    kind: 'block',\n    type: 'container'\n  },\n  main: {\n    kind: 'block',\n    type: 'container'\n  },\n  span: {\n    kind: 'inline',\n    type: 'container'\n  }\n};\nvar strongs = {\n  strong: {\n    kind: 'inline',\n    type: 'strong'\n  },\n  b: {\n    kind: 'inline',\n    type: 'strong'\n  }\n};\nvar emphasizeds = {\n  em: {\n    kind: 'inline',\n    type: 'emphasized'\n  },\n  i: {\n    kind: 'inline',\n    type: 'emphasized'\n  }\n};\n\nvar HTMLElementToTypeMap = _objectSpread({}, containers, {}, strongs, {}, emphasizeds, {\n  a: {\n    kind: 'inline',\n    type: 'link'\n  },\n  abbr: {\n    kind: 'inline',\n    type: 'abbrevition'\n  },\n  acronym: {\n    kind: 'inline',\n    type: 'abbrevition'\n  },\n  address: {\n    kind: 'block',\n    type: 'address'\n  },\n  article: {\n    kind: 'block',\n    type: 'article'\n  },\n  aside: {\n    kind: 'inline',\n    type: 'aside'\n  },\n  quote: {\n    kind: 'block',\n    type: 'quote'\n  },\n  br: {\n    kind: 'inline',\n    type: 'line-break'\n  },\n  caption: {\n    kind: 'block',\n    type: 'table-caption'\n  },\n  cite: {\n    kind: 'block',\n    type: 'title-of-a-work'\n  },\n  code: {\n    kind: 'block',\n    type: 'code'\n  },\n  del: {\n    kind: 'block',\n    type: 'deleted'\n  },\n  details: {\n    kind: 'block',\n    type: 'details'\n  },\n  figcaption: {\n    kind: 'block',\n    type: 'figcaption'\n  },\n  figure: {\n    kind: 'block',\n    type: 'figure'\n  },\n  h1: {\n    kind: 'block',\n    type: 'heading1'\n  },\n  h2: {\n    kind: 'block',\n    type: 'heading2'\n  },\n  h3: {\n    kind: 'block',\n    type: 'heading3'\n  },\n  h4: {\n    kind: 'block',\n    type: 'heading4'\n  },\n  h5: {\n    kind: 'block',\n    type: 'heading5'\n  },\n  h6: {\n    kind: 'block',\n    type: 'heading6'\n  },\n  hr: {\n    kind: 'block',\n    type: 'horizontal-line'\n  },\n  img: {\n    kind: 'block',\n    type: 'image'\n  },\n  li: {\n    kind: 'block',\n    type: 'list-item'\n  },\n  mark: {\n    kind: 'inline',\n    type: 'highlight'\n  },\n  ol: {\n    kind: 'block',\n    type: 'ordered-list'\n  },\n  p: {\n    kind: 'block',\n    type: 'paragraph'\n  },\n  pre: {\n    kind: 'block',\n    type: 'preformatted'\n  },\n  picture: {\n    kind: 'block',\n    type: 'picture'\n  },\n  section: {\n    kind: 'block',\n    type: 'section'\n  },\n  strong: {\n    kind: 'inline',\n    type: 'strong'\n  },\n  sub: {\n    kind: 'inline',\n    type: 'subscripted'\n  },\n  sup: {\n    kind: 'inline',\n    type: 'superscripted'\n  },\n  table: {\n    kind: 'block',\n    type: 'table'\n  },\n  tbody: {\n    kind: 'block',\n    type: 'table-body'\n  },\n  td: {\n    kind: 'block',\n    type: 'table-cell'\n  },\n  tfoot: {\n    kind: 'block',\n    type: 'table-footer'\n  },\n  th: {\n    kind: 'block',\n    type: 'table-head-cell'\n  },\n  thead: {\n    kind: 'block',\n    type: 'table-head'\n  },\n  time: {\n    kind: 'inline',\n    type: 'time'\n  },\n  tr: {\n    kind: 'block',\n    type: 'table-row'\n  },\n  u: {\n    kind: 'inline',\n    type: 'underlined'\n  },\n  ul: {\n    kind: 'block',\n    type: 'unordered-list'\n  }\n});\n\nvar selfClosingTags = ['br'];\nvar keys = Object.keys(HTMLElementToTypeMap);\n\nfunction findHTMLTagByNode(_ref) {\n  var kind = _ref.kind,\n      type = _ref.type,\n      _ref$metadata = _ref.metadata,\n      metadata = _ref$metadata === void 0 ? {} : _ref$metadata;\n\n  var _loop = function _loop(x) {\n    var tagName = keys[x];\n    var item = HTMLElementToTypeMap[tagName];\n    var match = item.kind === kind && item.type === type; // Special check if metadata is provided\n\n    if (match && item.metadata && metadata) {\n      var targetMetadataMatches = Object.keys(item.metadata).reduce(function (acc, key) {\n        if (item.metadata[key] !== metadata[key]) {\n          return false;\n        }\n\n        return acc;\n      }, true);\n\n      if (!targetMetadataMatches) {\n        match = false;\n      }\n    }\n\n    if (match) {\n      return {\n        v: {\n          tagName: tagName,\n          definition: item\n        }\n      };\n    }\n  };\n\n  for (var x = 0; x < keys.length; x++) {\n    var _ret = _loop(x);\n\n    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret) === \"object\") return _ret.v;\n  }\n\n  return null;\n} // The shared valid attributes\n\n\nvar sharedValidAttributes = ['id']; // The valid attributes for each element\n\nvar validAttributesMap = {\n  a: [].concat(sharedValidAttributes, ['href', 'target'])\n};\n\nfunction getValidAttributes(_ref2) {\n  var tagName = _ref2.tagName;\n  return validAttributesMap[tagName] || sharedValidAttributes;\n}\n\nmodule.exports = {\n  HTMLElementToTypeMap: HTMLElementToTypeMap,\n  findHTMLTagByNode: findHTMLTagByNode,\n  validAttributesMap: validAttributesMap,\n  getValidAttributes: getValidAttributes,\n  selfClosingTags: selfClosingTags\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/converters/html/helpers.js?");

/***/ }),

/***/ "./src/converters/html/toHTML.js":
/*!***************************************!*\
  !*** ./src/converters/html/toHTML.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint no-param-reassign: 0 */\nvar isarray = __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\");\n\nvar helpers = __webpack_require__(/*! ./helpers */ \"./src/converters/html/helpers.js\");\n\nfunction getTagFromNode(_ref) {\n  var kind = _ref.kind,\n      type = _ref.type,\n      metadata = _ref.metadata;\n  var mapInstance = helpers.findHTMLTagByNode({\n    kind: kind,\n    type: type,\n    metadata: metadata\n  });\n\n  if (mapInstance) {\n    return mapInstance.tagName;\n  }\n\n  return null;\n}\n\nfunction getAttributes(_ref2) {\n  var tagName = _ref2.tagName,\n      metadata = _ref2.metadata;\n  var validAttributes = helpers.getValidAttributes({\n    tagName: tagName\n  });\n\n  if (!validAttributes) {\n    return '';\n  }\n\n  var attributes = [];\n\n  if (metadata) {\n    Object.keys(metadata).filter(function (key) {\n      return validAttributes.includes(key);\n    }).forEach(function (key) {\n      return attributes.push(\"\".concat(key, \"=\\\"\").concat(metadata[key], \"\\\"\"));\n    });\n  }\n\n  if (!attributes.length) {\n    return '';\n  }\n\n  return \" \".concat(attributes.join(' '));\n}\n\nfunction parseTextContent(unsafeString) {\n  return unsafeString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#039;');\n}\n\nfunction getHtmlFromNode(contentNode) {\n  var tagName = getTagFromNode(contentNode);\n  var childrenHtml;\n\n  if (isarray(contentNode.children)) {\n    childrenHtml = contentNode.children.reduce(function (acc, n) {\n      return acc + getHtmlFromNode(n);\n    }, '');\n  }\n\n  var content = '';\n\n  if (contentNode.textContent) {\n    content = parseTextContent(contentNode.textContent);\n  } else if (childrenHtml) {\n    content = childrenHtml;\n  }\n\n  if (tagName) {\n    var attrs = getAttributes(_objectSpread({\n      tagName: tagName\n    }, contentNode));\n    var isSelfClosing = helpers.selfClosingTags.includes(tagName);\n\n    if (isSelfClosing) {\n      return \"<\".concat(tagName).concat(attrs, \"/>\");\n    }\n\n    return \"<\".concat(tagName).concat(attrs, \">\").concat(content, \"</\").concat(tagName, \">\");\n  }\n\n  return content;\n}\n\nfunction toHTML(model) {\n  if (!model) {\n    return '';\n  }\n\n  if (isarray(model)) {\n    return model.map(getHtmlFromNode).join('');\n  }\n\n  return getHtmlFromNode(model);\n}\n\nmodule.exports = toHTML;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/converters/html/toHTML.js?");

/***/ })

/******/ });
});