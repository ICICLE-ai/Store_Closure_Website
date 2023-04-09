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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_sharyu_Documents_ICCLEProject_CapstoneProject_data_files_homedata_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data_files/homedata.csv */ \"../data_files/homedata.csv\");\n/* harmony import */ var _Users_sharyu_Documents_ICCLEProject_CapstoneProject_data_files_homedata_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_sharyu_Documents_ICCLEProject_CapstoneProject_data_files_homedata_csv__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\npapaparse__WEBPACK_IMPORTED_MODULE_3___default().parse((_Users_sharyu_Documents_ICCLEProject_CapstoneProject_data_files_homedata_csv__WEBPACK_IMPORTED_MODULE_4___default()), {\n  download: true,\n  header: true,\n  complete: function (results) {\n    results.data.forEach(function (data) {\n      console.log(data);\n      let lat = parseFloat(data.latitude);\n      let lng = parseFloat(data.longitude);\n      let marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([lat, lng]);\n      marker.addTo(map);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnXG5pbXBvcnQgY3N2cyBmcm9tICcvVXNlcnMvc2hhcnl1L0RvY3VtZW50cy9JQ0NMRVByb2plY3QvQ2Fwc3RvbmVQcm9qZWN0L2RhdGFfZmlsZXMvaG9tZWRhdGEuY3N2J1xuXG5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpXG5sZXQgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6WzQwLjAxNzEsIC04My4wMTY4XSxcbiAgICB6b29tOjVcbn1cbmxldCBtYXAgPSBuZXcgTC5tYXAoJ09wZW5TdHJlZXRNYXAnICwgbWFwT3B0aW9ucyk7XG5cbmxldCBsYXllciA9IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycpO1xubWFwLmFkZExheWVyKGxheWVyKTtcblxubGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbNDAuMDE3MSwgLTgzLjAxNjhdKTtcblxubWFya2VyLmFkZFRvKG1hcCk7XG5cblBhcGEucGFyc2UoY3N2cywge1xuICAgIGRvd25sb2FkOiB0cnVlLFxuICAgIGhlYWRlcjogdHJ1ZSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgcmVzdWx0cy5kYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgbGV0IGxhdCA9IHBhcnNlRmxvYXQoZGF0YS5sYXRpdHVkZSlcbiAgICAgICAgbGV0IGxuZyA9IHBhcnNlRmxvYXQoZGF0YS5sb25naXR1ZGUpXG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoW2xhdCwgbG5nXSlcbiAgICAgICAgbWFya2VyLmFkZFRvKG1hcClcbiAgICAgIH0pXG4gICAgfVxuICB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "50a5d7fb10c7c58c"; }
/******/ }();
/******/ 
/******/ }
);