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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\npapaparse__WEBPACK_IMPORTED_MODULE_3___default().parse('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/frontend/src/data/homedata.csv', {\n  download: true,\n  header: true,\n  complete: function (results) {\n    results.data.forEach(function (data) {\n      let lat = parseFloat(data.latitude);\n      let lng = parseFloat(data.longitude);\n      let marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([lat, lng]);\n      marker.addTo(map);\n    });\n  }\n});\n//   const csvFile = require('s/src/data/homedata.csv');\n\nfetch('static/src/data/homedata.csv').then(response => response.text()).then(csvData => {\n  // parse CSV data into JavaScript object   \n  console.log(csvData.longitude);\n  const parsedData = papaparse__WEBPACK_IMPORTED_MODULE_3___default().parse(csvData, {\n    header: true\n  });\n  parsedData.data.forEach(row => {\n    console.log(row);\n  });\n  // log parsed data to console\n  //console.log(parsedData);\n  // console.log(csvData)\n  // parsedData.data.forEach(function(data) {\n  //     let lat = parseFloat(data.latitude)\n  //     let lng = parseFloat(data.longitude)\n  //     let marker = new L.Marker([lat, lng])\n  //     marker.addTo(map)\n  //   })\n}).catch(error => {\n  console.error('Error loading CSV file:', error);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnXG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KCcjYXBwJylcbmxldCBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjpbNDAuMDE3MSwgLTgzLjAxNjhdLFxuICAgIHpvb206NVxufVxubGV0IG1hcCA9IG5ldyBMLm1hcCgnT3BlblN0cmVldE1hcCcgLCBtYXBPcHRpb25zKTtcblxubGV0IGxheWVyID0gbmV3IEwuVGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyk7XG5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuXG5sZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFs0MC4wMTcxLCAtODMuMDE2OF0pO1xuXG5tYXJrZXIuYWRkVG8obWFwKTtcblxuUGFwYS5wYXJzZSgnL1VzZXJzL3NoYXJ5dS9Eb2N1bWVudHMvSUNDTEVQcm9qZWN0L0NhcHN0b25lUHJvamVjdC9mcm9udGVuZC9zcmMvZGF0YS9ob21lZGF0YS5jc3YnLCB7XG4gICAgZG93bmxvYWQ6IHRydWUsXG4gICAgaGVhZGVyOiB0cnVlLFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICByZXN1bHRzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBsYXQgPSBwYXJzZUZsb2F0KGRhdGEubGF0aXR1ZGUpXG4gICAgICAgIGxldCBsbmcgPSBwYXJzZUZsb2F0KGRhdGEubG9uZ2l0dWRlKVxuICAgICAgICBsZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFtsYXQsIGxuZ10pXG4gICAgICAgIG1hcmtlci5hZGRUbyhtYXApXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbi8vICAgY29uc3QgY3N2RmlsZSA9IHJlcXVpcmUoJ3Mvc3JjL2RhdGEvaG9tZWRhdGEuY3N2Jyk7XG5cbmZldGNoKCdzdGF0aWMvc3JjL2RhdGEvaG9tZWRhdGEuY3N2JylcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAudGhlbihjc3ZEYXRhID0+IHtcbiAgICAvLyBwYXJzZSBDU1YgZGF0YSBpbnRvIEphdmFTY3JpcHQgb2JqZWN0ICAgXG4gICAgY29uc29sZS5sb2coY3N2RGF0YS5sb25naXR1ZGUpXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IFBhcGEucGFyc2UoY3N2RGF0YSwgeyBoZWFkZXI6IHRydWUgfSk7XG4gICAgcGFyc2VkRGF0YS5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocm93KTtcbiAgICAgIH0pO1xuICAgIC8vIGxvZyBwYXJzZWQgZGF0YSB0byBjb25zb2xlXG4gICAgLy9jb25zb2xlLmxvZyhwYXJzZWREYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjc3ZEYXRhKVxuICAgIC8vIHBhcnNlZERhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyAgICAgbGV0IGxhdCA9IHBhcnNlRmxvYXQoZGF0YS5sYXRpdHVkZSlcbiAgICAvLyAgICAgbGV0IGxuZyA9IHBhcnNlRmxvYXQoZGF0YS5sb25naXR1ZGUpXG4gICAgLy8gICAgIGxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoW2xhdCwgbG5nXSlcbiAgICAvLyAgICAgbWFya2VyLmFkZFRvKG1hcClcbiAgICAvLyAgIH0pXG4gIH0pXG4gIC5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBDU1YgZmlsZTonLCBlcnJvcik7XG4gIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8f3491bdd4812e0a"; }
/******/ }();
/******/ 
/******/ }
);