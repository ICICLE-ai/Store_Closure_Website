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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\nconst fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst {\n  parse\n} = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'csv-parse'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nfs.createReadStream(\"/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv\").pipe(parse({\n  delimiter: \",\",\n  from_line: 2\n})).on(\"data\", function (row) {\n  console.log(row);\n});\n// Papa.parse('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv', {\n//     download: true,\n//     header: true,\n//     complete: function(results) {\n//       results.data.forEach(function(data) {\n//         console.log(data);\n//         // let lat = parseFloat(data.latitude)\n//         // let lng = parseFloat(data.longitude)\n//         // let marker = new L.Marker([lat, lng])\n//         // marker.addTo(map)\n//       })\n//     }\n//   })\n\n// csv()\n//     .fromFile('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv').then(response => response.text())\n//     .then((json) => {\n//         console.log(json);\n//         for (let i = 0; i < json.length; i++) {\n\n//         let marker = new L.Marker([json[i].latitude, json[i].longitude]);\n//         marker.addTo(map);\n//     }\n//   }).catch((err) => {\n//     console.log(err)\n//   })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJ1xuXG5cblxuXG5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpXG5sZXQgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6WzQwLjAxNzEsIC04My4wMTY4XSxcbiAgICB6b29tOjVcbn1cbmxldCBtYXAgPSBuZXcgTC5tYXAoJ09wZW5TdHJlZXRNYXAnICwgbWFwT3B0aW9ucyk7XG5cbmxldCBsYXllciA9IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycpO1xubWFwLmFkZExheWVyKGxheWVyKTtcblxubGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbNDAuMDE3MSwgLTgzLjAxNjhdKTtcblxubWFya2VyLmFkZFRvKG1hcCk7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IHsgcGFyc2UgfSA9IHJlcXVpcmUoXCJjc3YtcGFyc2VcIik7XG5mcy5jcmVhdGVSZWFkU3RyZWFtKFwiL1VzZXJzL3NoYXJ5dS9Eb2N1bWVudHMvSUNDTEVQcm9qZWN0L0NhcHN0b25lUHJvamVjdC9kYXRhX2ZpbGVzL2hvbWVkYXRhLmNzdlwiKVxuICAucGlwZShwYXJzZSh7IGRlbGltaXRlcjogXCIsXCIsIGZyb21fbGluZTogMiB9KSlcbiAgLm9uKFwiZGF0YVwiLCBmdW5jdGlvbiAocm93KSB7XG4gICAgY29uc29sZS5sb2cocm93KTtcbiAgfSlcbi8vIFBhcGEucGFyc2UoJy9Vc2Vycy9zaGFyeXUvRG9jdW1lbnRzL0lDQ0xFUHJvamVjdC9DYXBzdG9uZVByb2plY3QvZGF0YV9maWxlcy9ob21lZGF0YS5jc3YnLCB7XG4vLyAgICAgZG93bmxvYWQ6IHRydWUsXG4vLyAgICAgaGVhZGVyOiB0cnVlLFxuLy8gICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XG4vLyAgICAgICByZXN1bHRzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgICAgICAvLyBsZXQgbGF0ID0gcGFyc2VGbG9hdChkYXRhLmxhdGl0dWRlKVxuLy8gICAgICAgICAvLyBsZXQgbG5nID0gcGFyc2VGbG9hdChkYXRhLmxvbmdpdHVkZSlcbi8vICAgICAgICAgLy8gbGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbbGF0LCBsbmddKVxuLy8gICAgICAgICAvLyBtYXJrZXIuYWRkVG8obWFwKVxuLy8gICAgICAgfSlcbi8vICAgICB9XG4vLyAgIH0pXG5cbi8vIGNzdigpXG4vLyAgICAgLmZyb21GaWxlKCcvVXNlcnMvc2hhcnl1L0RvY3VtZW50cy9JQ0NMRVByb2plY3QvQ2Fwc3RvbmVQcm9qZWN0L2RhdGFfZmlsZXMvaG9tZWRhdGEuY3N2JykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4vLyAgICAgLnRoZW4oKGpzb24pID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuXG4vLyAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoW2pzb25baV0ubGF0aXR1ZGUsIGpzb25baV0ubG9uZ2l0dWRlXSk7XG4vLyAgICAgICAgIG1hcmtlci5hZGRUbyhtYXApO1xuLy8gICAgIH1cbi8vICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycilcbi8vICAgfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c3581a726fe6e3cc"; }
/******/ }();
/******/ 
/******/ }
);