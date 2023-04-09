/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"?6849\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n// import Papa from 'papaparse'\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\n// const fs = require(\"fs\");\nconst {\n  parse\n} = __webpack_require__(/*! csv-parse */ \"./node_modules/csv-parse/dist/cjs/index.cjs\");\nfs__WEBPACK_IMPORTED_MODULE_3___default().createReadStream(\"/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv\").pipe(parse({\n  delimiter: \",\",\n  from_line: 2\n})).on(\"data\", function (row) {\n  console.log(row);\n});\n// Papa.parse('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv', {\n//     download: true,\n//     header: true,\n//     complete: function(results) {\n//       results.data.forEach(function(data) {\n//         console.log(data);\n//         // let lat = parseFloat(data.latitude)\n//         // let lng = parseFloat(data.longitude)\n//         // let marker = new L.Marker([lat, lng])\n//         // marker.addTo(map)\n//       })\n//     }\n//   })\n\n// csv()\n//     .fromFile('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv').then(response => response.text())\n//     .then((json) => {\n//         console.log(json);\n//         for (let i = 0; i < json.length; i++) {\n\n//         let marker = new L.Marker([json[i].latitude, json[i].longitude]);\n//         marker.addTo(map);\n//     }\n//   }).catch((err) => {\n//     console.log(err)\n//   })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG4vLyBpbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KCcjYXBwJylcbmxldCBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjpbNDAuMDE3MSwgLTgzLjAxNjhdLFxuICAgIHpvb206NVxufVxubGV0IG1hcCA9IG5ldyBMLm1hcCgnT3BlblN0cmVldE1hcCcgLCBtYXBPcHRpb25zKTtcblxubGV0IGxheWVyID0gbmV3IEwuVGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyk7XG5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuXG5sZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFs0MC4wMTcxLCAtODMuMDE2OF0pO1xuXG5tYXJrZXIuYWRkVG8obWFwKTtcbi8vIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgeyBwYXJzZSB9ID0gcmVxdWlyZShcImNzdi1wYXJzZVwiKTtcbmZzLmNyZWF0ZVJlYWRTdHJlYW0oXCIvVXNlcnMvc2hhcnl1L0RvY3VtZW50cy9JQ0NMRVByb2plY3QvQ2Fwc3RvbmVQcm9qZWN0L2RhdGFfZmlsZXMvaG9tZWRhdGEuY3N2XCIpXG4gIC5waXBlKHBhcnNlKHsgZGVsaW1pdGVyOiBcIixcIiwgZnJvbV9saW5lOiAyIH0pKVxuICAub24oXCJkYXRhXCIsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICBjb25zb2xlLmxvZyhyb3cpO1xuICB9KVxuLy8gUGFwYS5wYXJzZSgnL1VzZXJzL3NoYXJ5dS9Eb2N1bWVudHMvSUNDTEVQcm9qZWN0L0NhcHN0b25lUHJvamVjdC9kYXRhX2ZpbGVzL2hvbWVkYXRhLmNzdicsIHtcbi8vICAgICBkb3dubG9hZDogdHJ1ZSxcbi8vICAgICBoZWFkZXI6IHRydWUsXG4vLyAgICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlc3VsdHMpIHtcbi8vICAgICAgIHJlc3VsdHMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgICAgIC8vIGxldCBsYXQgPSBwYXJzZUZsb2F0KGRhdGEubGF0aXR1ZGUpXG4vLyAgICAgICAgIC8vIGxldCBsbmcgPSBwYXJzZUZsb2F0KGRhdGEubG9uZ2l0dWRlKVxuLy8gICAgICAgICAvLyBsZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFtsYXQsIGxuZ10pXG4vLyAgICAgICAgIC8vIG1hcmtlci5hZGRUbyhtYXApXG4vLyAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgfSlcblxuLy8gY3N2KClcbi8vICAgICAuZnJvbUZpbGUoJy9Vc2Vycy9zaGFyeXUvRG9jdW1lbnRzL0lDQ0xFUHJvamVjdC9DYXBzdG9uZVByb2plY3QvZGF0YV9maWxlcy9ob21lZGF0YS5jc3YnKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbi8vICAgICAudGhlbigoanNvbikgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG5cbi8vICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbanNvbltpXS5sYXRpdHVkZSwganNvbltpXS5sb25naXR1ZGVdKTtcbi8vICAgICAgICAgbWFya2VyLmFkZFRvKG1hcCk7XG4vLyAgICAgfVxuLy8gICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyKVxuLy8gICB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "?6849":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2ef60865757f8bf8"; }
/******/ }();
/******/ 
/******/ }
);