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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'csv-parser'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"?6849\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\nfs__WEBPACK_IMPORTED_MODULE_4___default().createReadStream('data/data.csv').pipe(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'csv-parser'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()).on('data', data => {\n  console.log(data);\n}).on('end', () => {\n  console.log('CSV file successfully processed.');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IGNzdiBmcm9tICdjc3YtcGFyc2VyJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KCcjYXBwJylcbmxldCBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjpbNDAuMDE3MSwgLTgzLjAxNjhdLFxuICAgIHpvb206NVxufVxubGV0IG1hcCA9IG5ldyBMLm1hcCgnT3BlblN0cmVldE1hcCcgLCBtYXBPcHRpb25zKTtcblxubGV0IGxheWVyID0gbmV3IEwuVGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyk7XG5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuXG5sZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFs0MC4wMTcxLCAtODMuMDE2OF0pO1xuXG5tYXJrZXIuYWRkVG8obWFwKTtcbmZzLmNyZWF0ZVJlYWRTdHJlYW0oJ2RhdGEvZGF0YS5jc3YnKVxuLnBpcGUoY3N2KCkpXG4ub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pXG4ub24oJ2VuZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0NTViBmaWxlIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQuJyk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "49affeef5eb9b29f"; }
/******/ }();
/******/ 
/******/ }
);