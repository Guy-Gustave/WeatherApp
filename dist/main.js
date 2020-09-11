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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: searchbar, searchbutton, name, temp, desc, humidity, body, tempswitchBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchbar\", function() { return searchbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchbutton\", function() { return searchbutton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"temp\", function() { return temp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desc\", function() { return desc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"humidity\", function() { return humidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"body\", function() { return body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tempswitchBtn\", function() { return tempswitchBtn; });\nconst searchbar = document.getElementById('search_term');\nconst searchbutton = document.getElementById('search_button');\nconst name = document.getElementById('city_name');\nconst temp = document.getElementById('temp');\nconst desc = document.getElementById('desc');\nconst humidity = document.getElementById('humidity');\nconst body = document.getElementById('body');\nconst tempswitchBtn = document.getElementById('temp_unit');\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/getdata.js":
/*!************************!*\
  !*** ./src/getdata.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst key = 'bdc41b55a4c712c6598fce628e1a5254';\nconst url = 'https://api.openweathermap.org/data/2.5/weather?q=';\n\nconst getweather = async (term) => {\n  const res = await (\n    await fetch(`${url}${term}&units=metric&appid=${key}`)\n  ).json();\n  return res;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getweather);\n\n\n//# sourceURL=webpack:///./src/getdata.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getdata */ \"./src/getdata.js\");\n\n\n\n\nconst emptyresutl = () => {\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"desc\"].innerHTML = '';\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"name\"].innerHTML = '';\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"temp\"].innerHTML = '';\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"humidity\"].innerHTML = '';\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"tempswitchBtn\"].className = 'none';\n};\n\nconst tempswitch = (val, type) => {\n  let temp = null;\n  if (type === '℃') {\n    temp = (val * (9 / 5) + 32).toFixed(2);\n    type = '℉';\n  } else {\n    temp = ((val - 32) * (5 / 9)).toFixed(2);\n    type = '℃';\n  }\n  return { temp, type };\n};\n\nconst datapros = async (term) => {\n  const data = await Object(_getdata__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(term);\n  if (data.cod === 200) {\n    emptyresutl();\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"desc\"].innerHTML = ` Weather : ${data.weather[0].description}`;\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"name\"].innerHTML = data.name;\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"temp\"].innerHTML = `${data.main.temp} Celcius`;\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"humidity\"].innerHTML = `Humidity : ${data.main.humidity} %`;\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"tempswitchBtn\"].className = 'temp_unit';\n\n    let tempoutput = data.main.temp;\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"tempswitchBtn\"].addEventListener('click', (e) => {\n      e.preventDefault();\n      const tempSwitch = tempswitch(tempoutput, _dom__WEBPACK_IMPORTED_MODULE_0__[\"tempswitchBtn\"].innerHTML);\n      tempoutput = tempSwitch.temp;\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"tempswitchBtn\"].innerHTML = tempSwitch.type;\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"temp\"].innerHTML = `${tempSwitch.temp} ${tempSwitch.type}`;\n    });\n\n    if (data.weather[0].main === 'Rain') {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"body\"].className = 'rain';\n    } else if (\n      data.weather[0].main === 'Haze'\n      || data.weather[0].main === 'Clouds'\n    ) {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"body\"].className = 'haze';\n    } else {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"body\"].className = 'clear';\n    }\n  } else {\n    emptyresutl();\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"desc\"].innerHTML = \"Sorry ,we couldn't find the city :(\";\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"body\"].className = 'body';\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"desc\"].className = 'error';\n  }\n};\ndatapros('fes');\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"searchbutton\"].addEventListener('click', (e) => {\n  e.preventDefault();\n  datapros(_dom__WEBPACK_IMPORTED_MODULE_0__[\"searchbar\"].value);\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"searchbar\"].value = '';\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });