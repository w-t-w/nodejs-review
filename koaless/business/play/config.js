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
/******/ 	return __webpack_require__(__webpack_require__.s = "./koaless/source/play/config/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./koaless/source/play/config/index.js":
/*!*********************************************!*\
  !*** ./koaless/source/play/config/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const IP = '127.0.0.1',
    PORT = 3000;

const config = {
    column: {
        protocol: 'rpc',
        ip: IP,
        port: PORT,
        timeout: 6666,
        protobufFile: __webpack_require__(/*! ../proto/columns.proto */ "./koaless/source/play/proto/columns.proto"),
        requestStruct: 'ColumnRequest',
        responseStruct: 'ColumnResponse',
        before: (data) => {
            return data;
        },
        then: (result) => {
            return result.column;
        },
        catch: (err) => {
            console.error(err);
        }
    },
    articleList: {
        protocol: 'http',
        url: 'http://127.0.0.1:4000',
        before: (data) => {
            return data;
        },
        then: (result) => {
            return JSON.parse(result).data.list;
        },
        catch: (err) => {
            console.error(err);
        }
    }
};

module.exports = config;




/***/ }),

/***/ "./koaless/source/play/proto/columns.proto":
/*!*************************************************!*\
  !*** ./koaless/source/play/proto/columns.proto ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "message Column {\n  required int32 id = 1;\n  required uint32 type = 2;\n  required string column_cover = 3;\n  required string column_title = 4;\n  required string column_subtitle = 5;\n  required string author_name = 6;\n  required string author_intro = 7;\n  required string column_intro = 8;\n  required string column_unit = 9;\n  required uint32 sub_count = 10;\n  required string update_frequency = 11;\n  required uint32 column_price = 12;\n  required uint32 column_price_market = 13;\n  repeated Article articles = 14;\n}\n\nmessage Article {\n  required int32 id = 1;\n  required bool is_video_preview = 2;\n  required string article_title = 3;\n}\n\nmessage ColumnRequest {\n  required int32 column_id = 1;\n}\n\nmessage ColumnResponse {\n  required Column column = 1;\n  repeated Column recommend_columns = 2;\n}\n"

/***/ })

/******/ });