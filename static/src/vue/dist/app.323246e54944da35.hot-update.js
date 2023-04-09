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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nPapa.parse('/path/to/csv/file.csv', {\n  download: true,\n  header: true,\n  complete: function (results) {\n    results.data.forEach(function (data) {\n      let lat = parseFloat(data.latitude);\n      let lng = parseFloat(data.longitude);\n      let marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([lat, lng]);\n      marker.addTo(map);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpXG5sZXQgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6WzQwLjAxNzEsIC04My4wMTY4XSxcbiAgICB6b29tOjVcbn1cbmxldCBtYXAgPSBuZXcgTC5tYXAoJ09wZW5TdHJlZXRNYXAnICwgbWFwT3B0aW9ucyk7XG5cbmxldCBsYXllciA9IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycpO1xubWFwLmFkZExheWVyKGxheWVyKTtcblxubGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbNDAuMDE3MSwgLTgzLjAxNjhdKTtcblxuUGFwYS5wYXJzZSgnL3BhdGgvdG8vY3N2L2ZpbGUuY3N2Jywge1xuICAgIGRvd25sb2FkOiB0cnVlLFxuICAgIGhlYWRlcjogdHJ1ZSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgcmVzdWx0cy5kYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBsZXQgbGF0ID0gcGFyc2VGbG9hdChkYXRhLmxhdGl0dWRlKVxuICAgICAgICBsZXQgbG5nID0gcGFyc2VGbG9hdChkYXRhLmxvbmdpdHVkZSlcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbbGF0LCBsbmddKVxuICAgICAgICBtYXJrZXIuYWRkVG8obWFwKVxuICAgICAgfSlcbiAgICB9XG4gIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "11ef115fa720edcc"; }
/******/ }();
/******/ 
/******/ }
);