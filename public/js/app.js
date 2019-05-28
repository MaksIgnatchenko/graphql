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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/resources/js/app.js: Unexpected token, expected \"=>\" (32:36)\n\n\u001b[0m \u001b[90m 30 | \u001b[39m        getMe() {\u001b[0m\n\u001b[0m \u001b[90m 31 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 | \u001b[39m            async getChampionByName () {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m                \u001b[36mconst\u001b[39m res \u001b[33m=\u001b[39m await axios\u001b[33m.\u001b[39mpost(\u001b[0m\n\u001b[0m \u001b[90m 34 | \u001b[39m                    \u001b[32m'http://localhost:4000/graphql'\u001b[39m\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 35 | \u001b[39m                        query\u001b[33m:\u001b[39m \u001b[32m`\u001b[39m\u001b[0m\n    at Parser.raise (/var/www/node_modules/@babel/parser/lib/index.js:6344:17)\n    at Parser.unexpected (/var/www/node_modules/@babel/parser/lib/index.js:7659:16)\n    at Parser.expect (/var/www/node_modules/@babel/parser/lib/index.js:7645:28)\n    at Parser.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:8706:18)\n    at Parser.parseExprSubscripts (/var/www/node_modules/@babel/parser/lib/index.js:8413:23)\n    at Parser.parseMaybeUnary (/var/www/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Parser.parseExprOps (/var/www/node_modules/@babel/parser/lib/index.js:8280:23)\n    at Parser.parseMaybeConditional (/var/www/node_modules/@babel/parser/lib/index.js:8253:23)\n    at Parser.parseMaybeAssign (/var/www/node_modules/@babel/parser/lib/index.js:8200:21)\n    at Parser.parseExpression (/var/www/node_modules/@babel/parser/lib/index.js:8148:23)\n    at Parser.parseStatementContent (/var/www/node_modules/@babel/parser/lib/index.js:9917:23)\n    at Parser.parseStatement (/var/www/node_modules/@babel/parser/lib/index.js:9788:17)\n    at Parser.parseBlockOrModuleBlockBody (/var/www/node_modules/@babel/parser/lib/index.js:10364:25)\n    at Parser.parseBlockBody (/var/www/node_modules/@babel/parser/lib/index.js:10351:10)\n    at Parser.parseBlock (/var/www/node_modules/@babel/parser/lib/index.js:10335:10)\n    at Parser.parseFunctionBody (/var/www/node_modules/@babel/parser/lib/index.js:9408:24)\n    at Parser.parseFunctionBodyAndFinish (/var/www/node_modules/@babel/parser/lib/index.js:9378:10)\n    at Parser.parseMethod (/var/www/node_modules/@babel/parser/lib/index.js:9332:10)\n    at Parser.parseObjectMethod (/var/www/node_modules/@babel/parser/lib/index.js:9248:19)\n    at Parser.parseObjPropValue (/var/www/node_modules/@babel/parser/lib/index.js:9290:23)\n    at Parser.parseObjectMember (/var/www/node_modules/@babel/parser/lib/index.js:9214:10)\n    at Parser.parseObj (/var/www/node_modules/@babel/parser/lib/index.js:9138:25)\n    at Parser.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:8774:21)\n    at Parser.parseExprSubscripts (/var/www/node_modules/@babel/parser/lib/index.js:8413:23)\n    at Parser.parseMaybeUnary (/var/www/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Parser.parseExprOps (/var/www/node_modules/@babel/parser/lib/index.js:8280:23)\n    at Parser.parseMaybeConditional (/var/www/node_modules/@babel/parser/lib/index.js:8253:23)\n    at Parser.parseMaybeAssign (/var/www/node_modules/@babel/parser/lib/index.js:8200:21)\n    at Parser.parseObjectProperty (/var/www/node_modules/@babel/parser/lib/index.js:9265:101)\n    at Parser.parseObjPropValue (/var/www/node_modules/@babel/parser/lib/index.js:9290:101)\n    at Parser.parseObjectMember (/var/www/node_modules/@babel/parser/lib/index.js:9214:10)\n    at Parser.parseObj (/var/www/node_modules/@babel/parser/lib/index.js:9138:25)\n    at Parser.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:8774:21)\n    at Parser.parseExprSubscripts (/var/www/node_modules/@babel/parser/lib/index.js:8413:23)\n    at Parser.parseMaybeUnary (/var/www/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Parser.parseExprOps (/var/www/node_modules/@babel/parser/lib/index.js:8280:23)");

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/resources/js/app.js */"./resources/js/app.js");


/***/ })

/******/ });