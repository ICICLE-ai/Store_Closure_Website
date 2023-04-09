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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import Papa from 'papaparse'\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\n\n// const fs = require('fs').promises;\n\n// async function readFile(filePath) {\n//   try {\n//     const data = await fs.readFile(filePath);\n//     console.log(data.toString());\n//   } catch (error) {\n//     console.error(`Got an error trying to read the file: ${error.message}`);\n//   }\n// }\n// readFile('Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv');\n// Papa.parse('Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv', {\n//     download: true,\n//     header: true,\n//     complete: function(results) {\n//       results.data.forEach(function(data) {\n//         console.log(data);\n//         // let lat = parseFloat(data.latitude)\n//         // let lng = parseFloat(data.longitude)\n//         // let marker = new L.Marker([lat, lng])\n//         // marker.addTo(map)\n//       })\n//     }\n//   })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCdcbi8vIGltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSdcblxuY3JlYXRlQXBwKEFwcCkubW91bnQoJyNhcHAnKVxubGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgY2VudGVyOls0MC4wMTcxLCAtODMuMDE2OF0sXG4gICAgem9vbTo1XG59XG5sZXQgbWFwID0gbmV3IEwubWFwKCdPcGVuU3RyZWV0TWFwJyAsIG1hcE9wdGlvbnMpO1xuXG5sZXQgbGF5ZXIgPSBuZXcgTC5UaWxlTGF5ZXIoJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnKTtcbm1hcC5hZGRMYXllcihsYXllcik7XG5cbmxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoWzQwLjAxNzEsIC04My4wMTY4XSk7XG5cbm1hcmtlci5hZGRUbyhtYXApO1xuXG4vLyBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJykucHJvbWlzZXM7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoKSB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhLnRvU3RyaW5nKCkpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoYEdvdCBhbiBlcnJvciB0cnlpbmcgdG8gcmVhZCB0aGUgZmlsZTogJHtlcnJvci5tZXNzYWdlfWApO1xuLy8gICB9XG4vLyB9XG4vLyByZWFkRmlsZSgnVXNlcnMvc2hhcnl1L0RvY3VtZW50cy9JQ0NMRVByb2plY3QvQ2Fwc3RvbmVQcm9qZWN0L2RhdGFfZmlsZXMvaG9tZWRhdGEuY3N2Jyk7XG4vLyBQYXBhLnBhcnNlKCdVc2Vycy9zaGFyeXUvRG9jdW1lbnRzL0lDQ0xFUHJvamVjdC9DYXBzdG9uZVByb2plY3QvZGF0YV9maWxlcy9ob21lZGF0YS5jc3YnLCB7XG4vLyAgICAgZG93bmxvYWQ6IHRydWUsXG4vLyAgICAgaGVhZGVyOiB0cnVlLFxuLy8gICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XG4vLyAgICAgICByZXN1bHRzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgICAgICAvLyBsZXQgbGF0ID0gcGFyc2VGbG9hdChkYXRhLmxhdGl0dWRlKVxuLy8gICAgICAgICAvLyBsZXQgbG5nID0gcGFyc2VGbG9hdChkYXRhLmxvbmdpdHVkZSlcbi8vICAgICAgICAgLy8gbGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbbGF0LCBsbmddKVxuLy8gICAgICAgICAvLyBtYXJrZXIuYWRkVG8obWFwKVxuLy8gICAgICAgfSlcbi8vICAgICB9XG4vLyAgIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b2c1a59673d9e81f"; }
/******/ }();
/******/ 
/******/ }
);