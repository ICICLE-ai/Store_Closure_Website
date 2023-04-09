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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import Papa from 'papaparse'\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\nconst fs = (__webpack_require__(/*! fs */ \"?6849\").promises);\nasync function readFile(filePath) {\n  try {\n    const data = await fs.readFile(filePath);\n    console.log(data.toString());\n  } catch (error) {\n    console.error(`Got an error trying to read the file: ${error.message}`);\n  }\n}\nreadFile('Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv');\n\n// Papa.parse('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv', {\n//     download: true,\n//     header: true,\n//     complete: function(results) {\n//       results.data.forEach(function(data) {\n//         console.log(data);\n//         // let lat = parseFloat(data.latitude)\n//         // let lng = parseFloat(data.longitude)\n//         // let marker = new L.Marker([lat, lng])\n//         // marker.addTo(map)\n//       })\n//     }\n//   })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuLy8gaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJ1xuXG5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpXG5sZXQgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6WzQwLjAxNzEsIC04My4wMTY4XSxcbiAgICB6b29tOjVcbn1cbmxldCBtYXAgPSBuZXcgTC5tYXAoJ09wZW5TdHJlZXRNYXAnICwgbWFwT3B0aW9ucyk7XG5cbmxldCBsYXllciA9IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycpO1xubWFwLmFkZExheWVyKGxheWVyKTtcblxubGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbNDAuMDE3MSwgLTgzLjAxNjhdKTtcblxubWFya2VyLmFkZFRvKG1hcCk7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKS5wcm9taXNlcztcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEZpbGUoZmlsZVBhdGgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEudG9TdHJpbmcoKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgR290IGFuIGVycm9yIHRyeWluZyB0byByZWFkIHRoZSBmaWxlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn1cbnJlYWRGaWxlKCdVc2Vycy9zaGFyeXUvRG9jdW1lbnRzL0lDQ0xFUHJvamVjdC9DYXBzdG9uZVByb2plY3QvZGF0YV9maWxlcy9ob21lZGF0YS5jc3YnKTtcblxuXG4vLyBQYXBhLnBhcnNlKCcvVXNlcnMvc2hhcnl1L0RvY3VtZW50cy9JQ0NMRVByb2plY3QvQ2Fwc3RvbmVQcm9qZWN0L2RhdGFfZmlsZXMvaG9tZWRhdGEuY3N2Jywge1xuLy8gICAgIGRvd25sb2FkOiB0cnVlLFxuLy8gICAgIGhlYWRlcjogdHJ1ZSxcbi8vICAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVzdWx0cykge1xuLy8gICAgICAgcmVzdWx0cy5kYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgICAgLy8gbGV0IGxhdCA9IHBhcnNlRmxvYXQoZGF0YS5sYXRpdHVkZSlcbi8vICAgICAgICAgLy8gbGV0IGxuZyA9IHBhcnNlRmxvYXQoZGF0YS5sb25naXR1ZGUpXG4vLyAgICAgICAgIC8vIGxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoW2xhdCwgbG5nXSlcbi8vICAgICAgICAgLy8gbWFya2VyLmFkZFRvKG1hcClcbi8vICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "65bbfa54fbcfe8e8"; }
/******/ }();
/******/ 
/******/ }
);