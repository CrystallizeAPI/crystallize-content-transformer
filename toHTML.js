module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/isarray/index.js?");

/***/ }),

/***/ "./src/converters/html/helpers.js":
/*!****************************************!*\
  !*** ./src/converters/html/helpers.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar containers = {\n  div: {\n    kind: 'block',\n    type: 'container'\n  },\n  main: {\n    kind: 'block',\n    type: 'container'\n  },\n  span: {\n    kind: 'inline',\n    type: 'container'\n  }\n};\n\nvar emphasizeds = {\n  em: {\n    kind: 'inline',\n    type: 'emphasized'\n  },\n  b: {\n    kind: 'inline',\n    type: 'emphasized'\n  }\n};\n\nvar HTMLElementToTypeMap = _extends({}, containers, emphasizeds, {\n  a: {\n    kind: 'inline',\n    type: 'link'\n  },\n  abbr: {\n    kind: 'inline',\n    type: 'abbrevition'\n  },\n  acronym: {\n    kind: 'inline',\n    type: 'abbrevition'\n  },\n  address: {\n    kind: 'block',\n    type: 'address'\n  },\n  article: {\n    kind: 'block',\n    type: 'article'\n  },\n  aside: {\n    kind: 'inline',\n    type: 'aside'\n  },\n  quote: {\n    kind: 'block',\n    type: 'quote'\n  },\n  br: {\n    kind: 'block',\n    type: 'line-break'\n  },\n  caption: {\n    kind: 'block',\n    type: 'table-caption'\n  },\n  cite: {\n    kind: 'block',\n    type: 'title-of-a-work'\n  },\n  code: {\n    kind: 'block',\n    type: 'code'\n  },\n  del: {\n    kind: 'block',\n    type: 'deleted'\n  },\n  details: {\n    kind: 'block',\n    type: 'details'\n  },\n  figcaption: {\n    kind: 'block',\n    type: 'figcaption'\n  },\n  figure: {\n    kind: 'block',\n    type: 'figure'\n  },\n  h1: {\n    kind: 'block',\n    type: 'heading1'\n  },\n  h2: {\n    kind: 'block',\n    type: 'heading2'\n  },\n  h3: {\n    kind: 'block',\n    type: 'heading3'\n  },\n  h4: {\n    kind: 'block',\n    type: 'heading4'\n  },\n  h5: {\n    kind: 'block',\n    type: 'heading5'\n  },\n  h6: {\n    kind: 'block',\n    type: 'heading6'\n  },\n  hr: {\n    kind: 'block',\n    type: 'horizontal-line'\n  },\n  i: {\n    kind: 'inline',\n    type: 'italic'\n  },\n  img: {\n    kind: 'block',\n    type: 'image'\n  },\n  li: {\n    kind: 'block',\n    type: 'list-item'\n  },\n  mark: {\n    kind: 'inline',\n    type: 'highlight'\n  },\n  ol: {\n    kind: 'block',\n    type: 'ordered-list'\n  },\n  p: {\n    kind: 'block',\n    type: 'paragraph'\n  },\n  pre: {\n    kind: 'block',\n    type: 'preformatted'\n  },\n  picture: {\n    kind: 'block',\n    type: 'picture'\n  },\n  section: {\n    kind: 'block',\n    type: 'section'\n  },\n  strong: {\n    kind: 'inline',\n    type: 'emphasized'\n  },\n  sub: {\n    kind: 'inline',\n    type: 'subscripted'\n  },\n  sup: {\n    kind: 'inline',\n    type: 'superscripted'\n  },\n  table: {\n    kind: 'block',\n    type: 'table'\n  },\n  tbody: {\n    kind: 'block',\n    type: 'table-body'\n  },\n  td: {\n    kind: 'block',\n    type: 'table-cell'\n  },\n  tfoot: {\n    kind: 'block',\n    type: 'table-footer'\n  },\n  th: {\n    kind: 'block',\n    type: 'table-head-cell'\n  },\n  thead: {\n    kind: 'block',\n    type: 'table-head'\n  },\n  time: {\n    kind: 'inline',\n    type: 'time'\n  },\n  tr: {\n    kind: 'block',\n    type: 'table-row'\n  },\n  u: {\n    kind: 'inline',\n    type: 'underlined'\n  },\n  ul: {\n    kind: 'block',\n    type: 'unordered-list'\n  }\n});\n\nvar selfClosingTags = ['br'];\n\nvar keys = Object.keys(HTMLElementToTypeMap);\n\nfunction findHTMLTagByChunk(_ref) {\n  var kind = _ref.kind,\n      type = _ref.type,\n      _ref$metadata = _ref.metadata,\n      metadata = _ref$metadata === undefined ? {} : _ref$metadata;\n\n  var _loop = function _loop(x) {\n    var tagName = keys[x];\n    var item = HTMLElementToTypeMap[tagName];\n\n    var match = item.kind === kind && item.type === type;\n\n    // Special check if metadata is provided\n    if (match && item.metadata && metadata) {\n      var targetMetadataMatches = Object.keys(item.metadata).reduce(function (acc, key) {\n        if (item.metadata[key] !== metadata[key]) {\n          return false;\n        }\n        return acc;\n      }, true);\n      if (!targetMetadataMatches) {\n        match = false;\n      }\n    }\n\n    if (match) {\n      return {\n        v: {\n          tagName: tagName,\n          definition: item\n        }\n      };\n    }\n  };\n\n  for (var x = 0; x < keys.length; x++) {\n    var _ret = _loop(x);\n\n    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n  }\n  return null;\n}\n\n// The shared valid attributes\nvar sharedValidAttributes = ['id'];\n\n// The valid attributes for each element\nvar validAttributesMap = {\n  a: [].concat(sharedValidAttributes, ['href', 'target'])\n};\n\nfunction getValidAttributes(_ref2) {\n  var tagName = _ref2.tagName;\n\n  return validAttributesMap[tagName] || sharedValidAttributes;\n}\n\nmodule.exports = {\n  HTMLElementToTypeMap: HTMLElementToTypeMap,\n  findHTMLTagByChunk: findHTMLTagByChunk,\n  validAttributesMap: validAttributesMap,\n  getValidAttributes: getValidAttributes,\n  selfClosingTags: selfClosingTags\n};\n\n//# sourceURL=webpack:///./src/converters/html/helpers.js?");

/***/ }),

/***/ "./src/converters/html/toHTML.js":
/*!***************************************!*\
  !*** ./src/converters/html/toHTML.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n/* eslint no-param-reassign: 0 */\nvar isarray = __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\");\n\nvar helpers = __webpack_require__(/*! ./helpers */ \"./src/converters/html/helpers.js\");\n\nfunction getTagFromChunk(_ref) {\n  var kind = _ref.kind,\n      type = _ref.type,\n      metadata = _ref.metadata;\n\n  var mapInstance = helpers.findHTMLTagByChunk({ kind: kind, type: type, metadata: metadata });\n  if (mapInstance) {\n    return mapInstance.tagName;\n  }\n\n  return null;\n}\n\nfunction getAttributes(_ref2) {\n  var tagName = _ref2.tagName,\n      metadata = _ref2.metadata;\n\n  var validAttributes = helpers.getValidAttributes({ tagName: tagName });\n  if (!validAttributes) {\n    return '';\n  }\n\n  var attributes = [];\n\n  if (metadata) {\n    Object.keys(metadata).filter(function (key) {\n      return validAttributes.includes(key);\n    }).forEach(function (key) {\n      return attributes.push(key + '=\"' + metadata[key] + '\"');\n    });\n  }\n\n  if (!attributes.length) {\n    return '';\n  }\n\n  return ' ' + attributes.join(' ');\n}\n\nfunction parseTextContent(unsafeString) {\n  return unsafeString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#039;');\n}\n\nfunction getHtmlFromChunk(chunk) {\n  var tagName = getTagFromChunk(chunk);\n\n  var childrenHtml = void 0;\n  if (isarray(chunk.children)) {\n    childrenHtml = chunk.children.reduce(function (acc, n) {\n      return acc + getHtmlFromChunk(n);\n    }, '');\n  }\n\n  var content = '';\n  if (chunk.textContent) {\n    content = parseTextContent(chunk.textContent);\n  } else if (childrenHtml) {\n    content = childrenHtml;\n  }\n\n  if (tagName) {\n    var attrs = getAttributes(_extends({ tagName: tagName }, chunk));\n\n    var isSelfClosing = helpers.selfClosingTags.includes(tagName);\n    if (isSelfClosing) {\n      return '<' + tagName + attrs + '/>';\n    }\n\n    return '<' + tagName + attrs + '>' + content + '</' + tagName + '>';\n  }\n\n  return content;\n}\n\nfunction toHTML(model) {\n  if (!model) {\n    return '';\n  }\n\n  if (isarray(model)) {\n    return model.map(getHtmlFromChunk).join('');\n  }\n\n  return getHtmlFromChunk(model);\n}\n\nmodule.exports = toHTML;\n\n//# sourceURL=webpack:///./src/converters/html/toHTML.js?");

/***/ })

/******/ });