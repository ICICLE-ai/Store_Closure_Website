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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\nfetch('s/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files').then(response => response.text()).then(csvData => {\n  // parse CSV data into JavaScript object\n  const parsedData = papaparse__WEBPACK_IMPORTED_MODULE_3___default().parse(csvData, {\n    header: true\n  }).data;\n  parsedData.forEach(function (data) {\n    let lat = parseFloat(data.latitude);\n    let lng = parseFloat(data.longitude);\n    let marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([lat, lng]);\n    marker.addTo(map);\n  });\n}).catch(error => {\n  console.error('Error loading CSV file:', error);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJ1xuY3JlYXRlQXBwKEFwcCkubW91bnQoJyNhcHAnKVxubGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgY2VudGVyOls0MC4wMTcxLCAtODMuMDE2OF0sXG4gICAgem9vbTo1XG59XG5sZXQgbWFwID0gbmV3IEwubWFwKCdPcGVuU3RyZWV0TWFwJyAsIG1hcE9wdGlvbnMpO1xuXG5sZXQgbGF5ZXIgPSBuZXcgTC5UaWxlTGF5ZXIoJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnKTtcbm1hcC5hZGRMYXllcihsYXllcik7XG5cbmxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoWzQwLjAxNzEsIC04My4wMTY4XSk7XG5cbm1hcmtlci5hZGRUbyhtYXApO1xuXG5mZXRjaCgncy9Vc2Vycy9zaGFyeXUvRG9jdW1lbnRzL0lDQ0xFUHJvamVjdC9DYXBzdG9uZVByb2plY3QvZGF0YV9maWxlcycpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgLnRoZW4oY3N2RGF0YSA9PiB7XG4gICAgLy8gcGFyc2UgQ1NWIGRhdGEgaW50byBKYXZhU2NyaXB0IG9iamVjdFxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBQYXBhLnBhcnNlKGNzdkRhdGEsIHsgaGVhZGVyOiB0cnVlIH0pLmRhdGE7XG5cbiAgICBwYXJzZWREYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgbGV0IGxhdCA9IHBhcnNlRmxvYXQoZGF0YS5sYXRpdHVkZSlcbiAgICAgIGxldCBsbmcgPSBwYXJzZUZsb2F0KGRhdGEubG9uZ2l0dWRlKVxuICAgICAgbGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbbGF0LCBsbmddKVxuICAgICAgbWFya2VyLmFkZFRvKG1hcClcbiAgICB9KTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIENTViBmaWxlOicsIGVycm9yKTtcbiAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2d05c09ae5e141be"; }
/******/ }();
/******/ 
/******/ }
);