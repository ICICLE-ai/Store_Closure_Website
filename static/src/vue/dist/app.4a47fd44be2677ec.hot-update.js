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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted() {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:8000/store_closure/api/locations/').then(response => {\n      this.locations = response.data;\n      console.log(this.locations);\n      this.displayMap();\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n  methods: {\n    displayMap() {\n      // Initialize the map\n      let mapOptions = {\n        center: [40.0171, -83.0168],\n        zoom: 5\n      };\n      let map = new (leaflet__WEBPACK_IMPORTED_MODULE_1___default().map)('OpenStreetMap', mapOptions);\n\n      // Add markers for each location\n      this.locations.forEach(location => {\n        leaflet__WEBPACK_IMPORTED_MODULE_1___default().marker([location.latitude, location.longitude]).addTo(map);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL09TTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL09TTWFwLnZ1ZT9mODk2Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgaW1wb3J0IEwgZnJvbSAnbGVhZmxldCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1vdW50ZWQgKCkge1xuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc3RvcmVfY2xvc3VyZS9hcGkvbG9jYXRpb25zLycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9ucylcbiAgICAgICAgdGhpcy5kaXNwbGF5TWFwKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pXG4gICAgICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwbGF5TWFwICgpIHtcbiAgICAgIC8vIEluaXRpYWxpemUgdGhlIG1hcFxuICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgIGNlbnRlcjpbNDAuMDE3MSwgLTgzLjAxNjhdLFxuICAgICAgICB6b29tOjVcbiAgICAgIH1cbiAgICAgIGxldCBtYXAgPSBuZXcgTC5tYXAoJ09wZW5TdHJlZXRNYXAnICwgbWFwT3B0aW9ucyk7XG5cbiAgXG4gICAgICAvLyBBZGQgbWFya2VycyBmb3IgZWFjaCBsb2NhdGlvblxuICAgICAgdGhpcy5sb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgICAgIEwubWFya2VyKFtsb2NhdGlvbi5sYXRpdHVkZSwgbG9jYXRpb24ubG9uZ2l0dWRlXSkuYWRkVG8obWFwKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/OSMap.vue?vue&type=template&id=7b8bc8f8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ae7a25c0a9cf1b7f"; }
/******/ }();
/******/ 
/******/ }
);