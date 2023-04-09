"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\npapaparse__WEBPACK_IMPORTED_MODULE_3___default().parse('/path/to/csv/file.csv', {\n  download: true,\n  header: true,\n  complete: function (results) {\n    results.data.forEach(function (data) {\n      let lat = parseFloat(data.latitude);\n      let lng = parseFloat(data.longitude);\n      let marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([lat, lng]);\n      marker.addTo(map);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnXG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KCcjYXBwJylcbmxldCBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjpbNDAuMDE3MSwgLTgzLjAxNjhdLFxuICAgIHpvb206NVxufVxubGV0IG1hcCA9IG5ldyBMLm1hcCgnT3BlblN0cmVldE1hcCcgLCBtYXBPcHRpb25zKTtcblxubGV0IGxheWVyID0gbmV3IEwuVGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyk7XG5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuXG5sZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFs0MC4wMTcxLCAtODMuMDE2OF0pO1xuXG5tYXJrZXIuYWRkVG8obWFwKTtcblxuUGFwYS5wYXJzZSgnL3BhdGgvdG8vY3N2L2ZpbGUuY3N2Jywge1xuICAgIGRvd25sb2FkOiB0cnVlLFxuICAgIGhlYWRlcjogdHJ1ZSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgcmVzdWx0cy5kYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBsZXQgbGF0ID0gcGFyc2VGbG9hdChkYXRhLmxhdGl0dWRlKVxuICAgICAgICBsZXQgbG5nID0gcGFyc2VGbG9hdChkYXRhLmxvbmdpdHVkZSlcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbbGF0LCBsbmddKVxuICAgICAgICBtYXJrZXIuYWRkVG8obWFwKVxuICAgICAgfSlcbiAgICB9XG4gIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "19e0b4f0e50fb476"; }
/******/ }();
/******/ 
/******/ }
);