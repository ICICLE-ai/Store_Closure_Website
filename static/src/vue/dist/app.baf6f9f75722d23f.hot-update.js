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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_homedata_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/homedata.csv */ \"./src/data/homedata.csv\");\n/* harmony import */ var _data_homedata_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_homedata_csv__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\n\n// Papa.parse('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/frontend/src/data/homedata.csv', {\n//     download: true,\n//     header: true,\n//     complete: function(results) {\n//       results.data.forEach(function(data) {\n//         let lat = parseFloat(data.latitude)\n//         let lng = parseFloat(data.longitude)\n//         let marker = new L.Marker([lat, lng])\n//         marker.addTo(map)\n//       })\n//     }\n//   })\n\n// fetch(dataset.toString())\n//   .then(response => response.text())\n//   .then(csvData => {\n//     // parse CSV data into JavaScript object\n//     Papa.parse(csvData, {\n//       header: true,\n//       complete: function(results) {\n//         //console.log(results.data);\n\n//         results.data.forEach(function(data) {\n//           //console.log(data)\n//           let lat = parseFloat(data.latitude);\n//           let lng = parseFloat(data.longitude);\n//           if (!isNaN(lat) && !isNaN(lng)) {\n//             let marker = new L.Marker([lat, lng]);\n//             marker.addTo(map);\n//           }\n//         });\n//       },\n//     });\n//   })\n//   .catch(error => {\n//     console.error('Error loading CSV file:', error);\n//   });\n\nfetch((_data_homedata_csv__WEBPACK_IMPORTED_MODULE_4___default())).then(response => response.text()).then(csvData => {\n  // parse CSV data into JavaScript object   \n  const parsedData = papaparse__WEBPACK_IMPORTED_MODULE_3___default().parse(csvData, {\n    header: true\n  }).data;\n  console.log(parsedData);\n  parsedData.forEach(function (data) {\n    console.log(data.longitude);\n\n    //   let lat = parseFloat(data.latitude)\n    //   let lng = parseFloat(data.longitude)\n    //   let marker = new L.Marker([lat, lng])\n    //   marker.addTo(map)\n  });\n}).catch(error => {\n  console.error('Error loading CSV file:', error);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnXG5pbXBvcnQgZGF0YXNldCBmcm9tICdAL2RhdGEvaG9tZWRhdGEuY3N2J1xuXG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KCcjYXBwJylcbmxldCBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjpbNDAuMDE3MSwgLTgzLjAxNjhdLFxuICAgIHpvb206NVxufVxubGV0IG1hcCA9IG5ldyBMLm1hcCgnT3BlblN0cmVldE1hcCcgLCBtYXBPcHRpb25zKTtcblxubGV0IGxheWVyID0gbmV3IEwuVGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyk7XG5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuXG5sZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFs0MC4wMTcxLCAtODMuMDE2OF0pO1xuXG5tYXJrZXIuYWRkVG8obWFwKTtcblxuLy8gUGFwYS5wYXJzZSgnL1VzZXJzL3NoYXJ5dS9Eb2N1bWVudHMvSUNDTEVQcm9qZWN0L0NhcHN0b25lUHJvamVjdC9mcm9udGVuZC9zcmMvZGF0YS9ob21lZGF0YS5jc3YnLCB7XG4vLyAgICAgZG93bmxvYWQ6IHRydWUsXG4vLyAgICAgaGVhZGVyOiB0cnVlLFxuLy8gICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XG4vLyAgICAgICByZXN1bHRzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgIGxldCBsYXQgPSBwYXJzZUZsb2F0KGRhdGEubGF0aXR1ZGUpXG4vLyAgICAgICAgIGxldCBsbmcgPSBwYXJzZUZsb2F0KGRhdGEubG9uZ2l0dWRlKVxuLy8gICAgICAgICBsZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFtsYXQsIGxuZ10pXG4vLyAgICAgICAgIG1hcmtlci5hZGRUbyhtYXApXG4vLyAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgfSlcblxuLy8gZmV0Y2goZGF0YXNldC50b1N0cmluZygpKVxuLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4vLyAgIC50aGVuKGNzdkRhdGEgPT4ge1xuLy8gICAgIC8vIHBhcnNlIENTViBkYXRhIGludG8gSmF2YVNjcmlwdCBvYmplY3Rcbi8vICAgICBQYXBhLnBhcnNlKGNzdkRhdGEsIHtcbi8vICAgICAgIGhlYWRlcjogdHJ1ZSxcbi8vICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XG4vLyAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0cy5kYXRhKTtcblxuLy8gICAgICAgICByZXN1bHRzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuLy8gICAgICAgICAgIGxldCBsYXQgPSBwYXJzZUZsb2F0KGRhdGEubGF0aXR1ZGUpO1xuLy8gICAgICAgICAgIGxldCBsbmcgPSBwYXJzZUZsb2F0KGRhdGEubG9uZ2l0dWRlKTtcbi8vICAgICAgICAgICBpZiAoIWlzTmFOKGxhdCkgJiYgIWlzTmFOKGxuZykpIHtcbi8vICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoW2xhdCwgbG5nXSk7XG4vLyAgICAgICAgICAgICBtYXJrZXIuYWRkVG8obWFwKTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSxcbi8vICAgICB9KTtcbi8vICAgfSlcbi8vICAgLmNhdGNoKGVycm9yID0+IHtcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIENTViBmaWxlOicsIGVycm9yKTtcbi8vICAgfSk7XG5cblxuXG5mZXRjaChkYXRhc2V0KVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gIC50aGVuKGNzdkRhdGEgPT4ge1xuICAgIC8vIHBhcnNlIENTViBkYXRhIGludG8gSmF2YVNjcmlwdCBvYmplY3QgICBcbiAgICBjb25zdCBwYXJzZWREYXRhID0gUGFwYS5wYXJzZShjc3ZEYXRhLCB7IGhlYWRlcjogdHJ1ZSB9KS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKHBhcnNlZERhdGEpXG4gICAgcGFyc2VkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgY29uc29sZS5sb2coZGF0YS5sb25naXR1ZGUpXG5cbiAgICAvLyAgIGxldCBsYXQgPSBwYXJzZUZsb2F0KGRhdGEubGF0aXR1ZGUpXG4gICAgLy8gICBsZXQgbG5nID0gcGFyc2VGbG9hdChkYXRhLmxvbmdpdHVkZSlcbiAgICAvLyAgIGxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoW2xhdCwgbG5nXSlcbiAgICAvLyAgIG1hcmtlci5hZGRUbyhtYXApXG4gICAgfSlcblxuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgQ1NWIGZpbGU6JywgZXJyb3IpO1xuICB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1fec2566bcd1a5e4"; }
/******/ }();
/******/ 
/******/ }
);