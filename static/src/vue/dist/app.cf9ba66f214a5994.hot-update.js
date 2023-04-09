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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted() {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:8000/store_closure/api/locations/').then(response => {\n      this.locations = response.data;\n      console.log(this.locations);\n      this.displayMap();\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n  methods: {\n    displayMap() {\n      // Initialize the map\n      let mapOptions = {\n        center: [40.0171, -83.0168],\n        zoom: 5\n      };\n      let map = new (leaflet__WEBPACK_IMPORTED_MODULE_1___default().map)('OpenStreetMap', mapOptions);\n      let layer = new (leaflet__WEBPACK_IMPORTED_MODULE_1___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\n      map.addLayer(layer);\n\n      // Add markers for each location\n      this.locations.forEach(location => {\n        leaflet__WEBPACK_IMPORTED_MODULE_1___default().marker([location.latitude, location.longitude]).addTo(map);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL09TTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9PU01hcC52dWU/Zjg5NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQgPVwiT3BlblN0cmVldE1hcFwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICBpbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbW91bnRlZCAoKSB7XG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zdG9yZV9jbG9zdXJlL2FwaS9sb2NhdGlvbnMvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9jYXRpb25zKVxuICAgICAgICB0aGlzLmRpc3BsYXlNYXAoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgICAgIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGRpc3BsYXlNYXAgKCkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgbWFwXG4gICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgY2VudGVyOls0MC4wMTcxLCAtODMuMDE2OF0sXG4gICAgICAgIHpvb206NVxuICAgICAgfVxuICAgICAgbGV0IG1hcCA9IG5ldyBMLm1hcCgnT3BlblN0cmVldE1hcCcgLCBtYXBPcHRpb25zKTtcbiAgICAgIGxldCBsYXllciA9IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycpO1xuICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcbiAgXG4gICAgICAvLyBBZGQgbWFya2VycyBmb3IgZWFjaCBsb2NhdGlvblxuICAgICAgdGhpcy5sb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgICAgIEwubWFya2VyKFtsb2NhdGlvbi5sYXRpdHVkZSwgbG9jYXRpb24ubG9uZ2l0dWRlXSkuYWRkVG8obWFwKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  id: \"OpenStreetMap\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9PU01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I4YmM4ZjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQUE7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL09TTWFwLnZ1ZT9mODk2Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZCA9XCJPcGVuU3RyZWV0TWFwXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtb3VudGVkICgpIHtcbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3N0b3JlX2Nsb3N1cmUvYXBpL2xvY2F0aW9ucy8nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhdGlvbnMpXG4gICAgICAgIHRoaXMuZGlzcGxheU1hcCgpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KVxuICAgICAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZGlzcGxheU1hcCAoKSB7XG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBtYXBcbiAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICBjZW50ZXI6WzQwLjAxNzEsIC04My4wMTY4XSxcbiAgICAgICAgem9vbTo1XG4gICAgICB9XG4gICAgICBsZXQgbWFwID0gbmV3IEwubWFwKCdPcGVuU3RyZWV0TWFwJyAsIG1hcE9wdGlvbnMpO1xuICAgICAgbGV0IGxheWVyID0gbmV3IEwuVGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyk7XG4gICAgICBtYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICBcbiAgICAgIC8vIEFkZCBtYXJrZXJzIGZvciBlYWNoIGxvY2F0aW9uXG4gICAgICB0aGlzLmxvY2F0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgICAgTC5tYXJrZXIoW2xvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGVdKS5hZGRUbyhtYXApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "922790f543eef563"; }
/******/ }();
/******/ 
/******/ }
);