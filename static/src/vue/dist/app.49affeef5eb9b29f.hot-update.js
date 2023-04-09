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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! csv-parser */ \"./node_modules/csv-parser/index.js\");\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(csv_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"?6849\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\nfs__WEBPACK_IMPORTED_MODULE_4___default().createReadStream('data/data.csv').pipe(csv_parser__WEBPACK_IMPORTED_MODULE_3___default()()).on('data', data => {\n  console.log(data);\n}).on('end', () => {\n  console.log('CSV file successfully processed.');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCdcbmltcG9ydCBjc3YgZnJvbSAnY3N2LXBhcnNlcic7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpXG5sZXQgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6WzQwLjAxNzEsIC04My4wMTY4XSxcbiAgICB6b29tOjVcbn1cbmxldCBtYXAgPSBuZXcgTC5tYXAoJ09wZW5TdHJlZXRNYXAnICwgbWFwT3B0aW9ucyk7XG5cbmxldCBsYXllciA9IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycpO1xubWFwLmFkZExheWVyKGxheWVyKTtcblxubGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbNDAuMDE3MSwgLTgzLjAxNjhdKTtcblxubWFya2VyLmFkZFRvKG1hcCk7XG5mcy5jcmVhdGVSZWFkU3RyZWFtKCdkYXRhL2RhdGEuY3N2Jylcbi5waXBlKGNzdigpKVxuLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59KVxuLm9uKCdlbmQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdDU1YgZmlsZSBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkLicpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "78d41ebc15e4b43e"; }
/******/ }();
/******/ 
/******/ }
);