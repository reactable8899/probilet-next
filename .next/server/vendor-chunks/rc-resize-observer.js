"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rc-resize-observer";
exports.ids = ["vendor-chunks/rc-resize-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/rc-resize-observer/lib/Collection.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-resize-observer/lib/Collection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireWildcard = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Collection = Collection;\nexports.CollectionContext = void 0;\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar CollectionContext = exports.CollectionContext = /*#__PURE__*/React.createContext(null);\n/**\n * Collect all the resize event from children ResizeObserver\n */\nfunction Collection(_ref) {\n  var children = _ref.children,\n    onBatchResize = _ref.onBatchResize;\n  var resizeIdRef = React.useRef(0);\n  var resizeInfosRef = React.useRef([]);\n  var onCollectionResize = React.useContext(CollectionContext);\n  var onResize = React.useCallback(function (size, element, data) {\n    resizeIdRef.current += 1;\n    var currentId = resizeIdRef.current;\n    resizeInfosRef.current.push({\n      size: size,\n      element: element,\n      data: data\n    });\n    Promise.resolve().then(function () {\n      if (currentId === resizeIdRef.current) {\n        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);\n        resizeInfosRef.current = [];\n      }\n    });\n\n    // Continue bubbling if parent exist\n    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);\n  }, [onBatchResize, onCollectionResize]);\n  return /*#__PURE__*/React.createElement(CollectionContext.Provider, {\n    value: onResize\n  }, children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2xpYi9Db2xsZWN0aW9uLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhCQUE4Qiw4SkFBZ0U7QUFDOUYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixvQ0FBb0MsbUJBQU8sQ0FBQyx3R0FBTztBQUNuRCx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcmEtYXBwLXYzLy4vbm9kZV9tb2R1bGVzL3JjLXJlc2l6ZS1vYnNlcnZlci9saWIvQ29sbGVjdGlvbi5qcz8wNjNiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db2xsZWN0aW9uID0gQ29sbGVjdGlvbjtcbmV4cG9ydHMuQ29sbGVjdGlvbkNvbnRleHQgPSB2b2lkIDA7XG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENvbGxlY3Rpb25Db250ZXh0ID0gZXhwb3J0cy5Db2xsZWN0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBDb2xsZWN0IGFsbCB0aGUgcmVzaXplIGV2ZW50IGZyb20gY2hpbGRyZW4gUmVzaXplT2JzZXJ2ZXJcbiAqL1xuZnVuY3Rpb24gQ29sbGVjdGlvbihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgb25CYXRjaFJlc2l6ZSA9IF9yZWYub25CYXRjaFJlc2l6ZTtcbiAgdmFyIHJlc2l6ZUlkUmVmID0gUmVhY3QudXNlUmVmKDApO1xuICB2YXIgcmVzaXplSW5mb3NSZWYgPSBSZWFjdC51c2VSZWYoW10pO1xuICB2YXIgb25Db2xsZWN0aW9uUmVzaXplID0gUmVhY3QudXNlQ29udGV4dChDb2xsZWN0aW9uQ29udGV4dCk7XG4gIHZhciBvblJlc2l6ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzaXplLCBlbGVtZW50LCBkYXRhKSB7XG4gICAgcmVzaXplSWRSZWYuY3VycmVudCArPSAxO1xuICAgIHZhciBjdXJyZW50SWQgPSByZXNpemVJZFJlZi5jdXJyZW50O1xuICAgIHJlc2l6ZUluZm9zUmVmLmN1cnJlbnQucHVzaCh7XG4gICAgICBzaXplOiBzaXplLFxuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdXJyZW50SWQgPT09IHJlc2l6ZUlkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgb25CYXRjaFJlc2l6ZSA9PT0gbnVsbCB8fCBvbkJhdGNoUmVzaXplID09PSB2b2lkIDAgfHwgb25CYXRjaFJlc2l6ZShyZXNpemVJbmZvc1JlZi5jdXJyZW50KTtcbiAgICAgICAgcmVzaXplSW5mb3NSZWYuY3VycmVudCA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ29udGludWUgYnViYmxpbmcgaWYgcGFyZW50IGV4aXN0XG4gICAgb25Db2xsZWN0aW9uUmVzaXplID09PSBudWxsIHx8IG9uQ29sbGVjdGlvblJlc2l6ZSA9PT0gdm9pZCAwIHx8IG9uQ29sbGVjdGlvblJlc2l6ZShzaXplLCBlbGVtZW50LCBkYXRhKTtcbiAgfSwgW29uQmF0Y2hSZXNpemUsIG9uQ29sbGVjdGlvblJlc2l6ZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sbGVjdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogb25SZXNpemVcbiAgfSwgY2hpbGRyZW4pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/lib/Collection.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/lib/SingleObserver/DomWrapper.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rc-resize-observer/lib/SingleObserver/DomWrapper.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireWildcard = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\")[\"default\"]);\nvar _interopRequireDefault = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"(ssr)/./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"(ssr)/./node_modules/@babel/runtime/helpers/createClass.js\"));\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"(ssr)/./node_modules/@babel/runtime/helpers/inherits.js\"));\nvar _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"(ssr)/./node_modules/@babel/runtime/helpers/createSuper.js\"));\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\n/**\n * Fallback to findDOMNode if origin ref do not provide any dom element\n */\nvar DomWrapper = exports[\"default\"] = /*#__PURE__*/function (_React$Component) {\n  (0, _inherits2.default)(DomWrapper, _React$Component);\n  var _super = (0, _createSuper2.default)(DomWrapper);\n  function DomWrapper() {\n    (0, _classCallCheck2.default)(this, DomWrapper);\n    return _super.apply(this, arguments);\n  }\n  (0, _createClass2.default)(DomWrapper, [{\n    key: \"render\",\n    value: function render() {\n      return this.props.children;\n    }\n  }]);\n  return DomWrapper;\n}(React.Component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2xpYi9TaW5nbGVPYnNlcnZlci9Eb21XcmFwcGVyLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhCQUE4Qiw4SkFBZ0U7QUFDOUYsNkJBQTZCLDRKQUErRDtBQUM1Riw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDhDQUE4QyxtQkFBTyxDQUFDLDRHQUF1QztBQUM3RiwyQ0FBMkMsbUJBQU8sQ0FBQyxzR0FBb0M7QUFDdkYsd0NBQXdDLG1CQUFPLENBQUMsZ0dBQWlDO0FBQ2pGLDJDQUEyQyxtQkFBTyxDQUFDLHNHQUFvQztBQUN2RixvQ0FBb0MsbUJBQU8sQ0FBQyx3R0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJhLWFwcC12My8uL25vZGVfbW9kdWxlcy9yYy1yZXNpemUtb2JzZXJ2ZXIvbGliL1NpbmdsZU9ic2VydmVyL0RvbVdyYXBwZXIuanM/YWI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKS5kZWZhdWx0O1xudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcbi8qKlxuICogRmFsbGJhY2sgdG8gZmluZERPTU5vZGUgaWYgb3JpZ2luIHJlZiBkbyBub3QgcHJvdmlkZSBhbnkgZG9tIGVsZW1lbnRcbiAqL1xudmFyIERvbVdyYXBwZXIgPSBleHBvcnRzLmRlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czIuZGVmYXVsdCkoRG9tV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMi5kZWZhdWx0KShEb21XcmFwcGVyKTtcbiAgZnVuY3Rpb24gRG9tV3JhcHBlcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMi5kZWZhdWx0KSh0aGlzLCBEb21XcmFwcGVyKTtcbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgKDAsIF9jcmVhdGVDbGFzczIuZGVmYXVsdCkoRG9tV3JhcHBlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRG9tV3JhcHBlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/lib/SingleObserver/DomWrapper.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/lib/SingleObserver/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rc-resize-observer/lib/SingleObserver/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireWildcard = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\")[\"default\"]);\nvar _interopRequireDefault = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ \"(ssr)/./node_modules/@babel/runtime/helpers/objectSpread2.js\"));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ \"(ssr)/./node_modules/@babel/runtime/helpers/typeof.js\"));\nvar _findDOMNode = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/findDOMNode */ \"(ssr)/./node_modules/rc-util/lib/Dom/findDOMNode.js\"));\nvar _ref = __webpack_require__(/*! rc-util/lib/ref */ \"(ssr)/./node_modules/rc-util/lib/ref.js\");\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar _Collection = __webpack_require__(/*! ../Collection */ \"(ssr)/./node_modules/rc-resize-observer/lib/Collection.js\");\nvar _observerUtil = __webpack_require__(/*! ../utils/observerUtil */ \"(ssr)/./node_modules/rc-resize-observer/lib/utils/observerUtil.js\");\nvar _DomWrapper = _interopRequireDefault(__webpack_require__(/*! ./DomWrapper */ \"(ssr)/./node_modules/rc-resize-observer/lib/SingleObserver/DomWrapper.js\"));\nfunction SingleObserver(props, ref) {\n  var children = props.children,\n    disabled = props.disabled;\n  var elementRef = React.useRef(null);\n  var wrapperRef = React.useRef(null);\n  var onCollectionResize = React.useContext(_Collection.CollectionContext);\n\n  // =========================== Children ===========================\n  var isRenderProps = typeof children === 'function';\n  var mergedChildren = isRenderProps ? children(elementRef) : children;\n\n  // ============================= Size =============================\n  var sizeRef = React.useRef({\n    width: -1,\n    height: -1,\n    offsetWidth: -1,\n    offsetHeight: -1\n  });\n\n  // ============================= Ref ==============================\n  var canRef = !isRenderProps && /*#__PURE__*/React.isValidElement(mergedChildren) && (0, _ref.supportRef)(mergedChildren);\n  var originRef = canRef ? mergedChildren.ref : null;\n  var mergedRef = (0, _ref.useComposeRef)(originRef, elementRef);\n  var getDom = function getDom() {\n    var _elementRef$current;\n    return (0, _findDOMNode.default)(elementRef.current) || (\n    // Support `nativeElement` format\n    elementRef.current && (0, _typeof2.default)(elementRef.current) === 'object' ? (0, _findDOMNode.default)((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0, _findDOMNode.default)(wrapperRef.current);\n  };\n  React.useImperativeHandle(ref, function () {\n    return getDom();\n  });\n\n  // =========================== Observe ============================\n  var propsRef = React.useRef(props);\n  propsRef.current = props;\n\n  // Handler\n  var onInternalResize = React.useCallback(function (target) {\n    var _propsRef$current = propsRef.current,\n      onResize = _propsRef$current.onResize,\n      data = _propsRef$current.data;\n    var _target$getBoundingCl = target.getBoundingClientRect(),\n      width = _target$getBoundingCl.width,\n      height = _target$getBoundingCl.height;\n    var offsetWidth = target.offsetWidth,\n      offsetHeight = target.offsetHeight;\n\n    /**\n     * Resize observer trigger when content size changed.\n     * In most case we just care about element size,\n     * let's use `boundary` instead of `contentRect` here to avoid shaking.\n     */\n    var fixedWidth = Math.floor(width);\n    var fixedHeight = Math.floor(height);\n    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {\n      var size = {\n        width: fixedWidth,\n        height: fixedHeight,\n        offsetWidth: offsetWidth,\n        offsetHeight: offsetHeight\n      };\n      sizeRef.current = size;\n\n      // IE is strange, right?\n      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;\n      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;\n      var sizeInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, size), {}, {\n        offsetWidth: mergedOffsetWidth,\n        offsetHeight: mergedOffsetHeight\n      });\n\n      // Let collection know what happened\n      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);\n      if (onResize) {\n        // defer the callback but not defer to next frame\n        Promise.resolve().then(function () {\n          onResize(sizeInfo, target);\n        });\n      }\n    }\n  }, []);\n\n  // Dynamic observe\n  React.useEffect(function () {\n    var currentElement = getDom();\n    if (currentElement && !disabled) {\n      (0, _observerUtil.observe)(currentElement, onInternalResize);\n    }\n    return function () {\n      return (0, _observerUtil.unobserve)(currentElement, onInternalResize);\n    };\n  }, [elementRef.current, disabled]);\n\n  // ============================ Render ============================\n  return /*#__PURE__*/React.createElement(_DomWrapper.default, {\n    ref: wrapperRef\n  }, canRef ? /*#__PURE__*/React.cloneElement(mergedChildren, {\n    ref: mergedRef\n  }) : mergedChildren);\n}\nvar RefSingleObserver = /*#__PURE__*/React.forwardRef(SingleObserver);\nif (true) {\n  RefSingleObserver.displayName = 'SingleObserver';\n}\nvar _default = exports[\"default\"] = RefSingleObserver;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2xpYi9TaW5nbGVPYnNlcnZlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4QkFBOEIsOEpBQWdFO0FBQzlGLDZCQUE2Qiw0SkFBK0Q7QUFDNUYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQywwR0FBc0M7QUFDMUYsc0NBQXNDLG1CQUFPLENBQUMsNEZBQStCO0FBQzdFLDBDQUEwQyxtQkFBTyxDQUFDLHdGQUE2QjtBQUMvRSxXQUFXLG1CQUFPLENBQUMsZ0VBQWlCO0FBQ3BDLG9DQUFvQyxtQkFBTyxDQUFDLHdHQUFPO0FBQ25ELGtCQUFrQixtQkFBTyxDQUFDLGdGQUFlO0FBQ3pDLG9CQUFvQixtQkFBTyxDQUFDLGdHQUF1QjtBQUNuRCx5Q0FBeUMsbUJBQU8sQ0FBQyw4RkFBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxXQUFXO0FBQzFGO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0EsZUFBZSxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcmEtYXBwLXYzLy4vbm9kZV9tb2R1bGVzL3JjLXJlc2l6ZS1vYnNlcnZlci9saWIvU2luZ2xlT2JzZXJ2ZXIvaW5kZXguanM/ZTk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKS5kZWZhdWx0O1xudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX29iamVjdFNwcmVhZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIikpO1xudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xudmFyIF9maW5kRE9NTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL0RvbS9maW5kRE9NTm9kZVwiKSk7XG52YXIgX3JlZiA9IHJlcXVpcmUoXCJyYy11dGlsL2xpYi9yZWZcIik7XG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9Db2xsZWN0aW9uID0gcmVxdWlyZShcIi4uL0NvbGxlY3Rpb25cIik7XG52YXIgX29ic2VydmVyVXRpbCA9IHJlcXVpcmUoXCIuLi91dGlscy9vYnNlcnZlclV0aWxcIik7XG52YXIgX0RvbVdyYXBwZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RvbVdyYXBwZXJcIikpO1xuZnVuY3Rpb24gU2luZ2xlT2JzZXJ2ZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkO1xuICB2YXIgZWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHdyYXBwZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBvbkNvbGxlY3Rpb25SZXNpemUgPSBSZWFjdC51c2VDb250ZXh0KF9Db2xsZWN0aW9uLkNvbGxlY3Rpb25Db250ZXh0KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ2hpbGRyZW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBpc1JlbmRlclByb3BzID0gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nO1xuICB2YXIgbWVyZ2VkQ2hpbGRyZW4gPSBpc1JlbmRlclByb3BzID8gY2hpbGRyZW4oZWxlbWVudFJlZikgOiBjaGlsZHJlbjtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaXplID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBzaXplUmVmID0gUmVhY3QudXNlUmVmKHtcbiAgICB3aWR0aDogLTEsXG4gICAgaGVpZ2h0OiAtMSxcbiAgICBvZmZzZXRXaWR0aDogLTEsXG4gICAgb2Zmc2V0SGVpZ2h0OiAtMVxuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBjYW5SZWYgPSAhaXNSZW5kZXJQcm9wcyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobWVyZ2VkQ2hpbGRyZW4pICYmICgwLCBfcmVmLnN1cHBvcnRSZWYpKG1lcmdlZENoaWxkcmVuKTtcbiAgdmFyIG9yaWdpblJlZiA9IGNhblJlZiA/IG1lcmdlZENoaWxkcmVuLnJlZiA6IG51bGw7XG4gIHZhciBtZXJnZWRSZWYgPSAoMCwgX3JlZi51c2VDb21wb3NlUmVmKShvcmlnaW5SZWYsIGVsZW1lbnRSZWYpO1xuICB2YXIgZ2V0RG9tID0gZnVuY3Rpb24gZ2V0RG9tKCkge1xuICAgIHZhciBfZWxlbWVudFJlZiRjdXJyZW50O1xuICAgIHJldHVybiAoMCwgX2ZpbmRET01Ob2RlLmRlZmF1bHQpKGVsZW1lbnRSZWYuY3VycmVudCkgfHwgKFxuICAgIC8vIFN1cHBvcnQgYG5hdGl2ZUVsZW1lbnRgIGZvcm1hdFxuICAgIGVsZW1lbnRSZWYuY3VycmVudCAmJiAoMCwgX3R5cGVvZjIuZGVmYXVsdCkoZWxlbWVudFJlZi5jdXJyZW50KSA9PT0gJ29iamVjdCcgPyAoMCwgX2ZpbmRET01Ob2RlLmRlZmF1bHQpKChfZWxlbWVudFJlZiRjdXJyZW50ID0gZWxlbWVudFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZWxlbWVudFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZWxlbWVudFJlZiRjdXJyZW50Lm5hdGl2ZUVsZW1lbnQpIDogbnVsbCkgfHwgKDAsIF9maW5kRE9NTm9kZS5kZWZhdWx0KSh3cmFwcGVyUmVmLmN1cnJlbnQpO1xuICB9O1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXREb20oKTtcbiAgfSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IE9ic2VydmUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgcHJvcHNSZWYgPSBSZWFjdC51c2VSZWYocHJvcHMpO1xuICBwcm9wc1JlZi5jdXJyZW50ID0gcHJvcHM7XG5cbiAgLy8gSGFuZGxlclxuICB2YXIgb25JbnRlcm5hbFJlc2l6ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgX3Byb3BzUmVmJGN1cnJlbnQgPSBwcm9wc1JlZi5jdXJyZW50LFxuICAgICAgb25SZXNpemUgPSBfcHJvcHNSZWYkY3VycmVudC5vblJlc2l6ZSxcbiAgICAgIGRhdGEgPSBfcHJvcHNSZWYkY3VycmVudC5kYXRhO1xuICAgIHZhciBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB3aWR0aCA9IF90YXJnZXQkZ2V0Qm91bmRpbmdDbC53aWR0aCxcbiAgICAgIGhlaWdodCA9IF90YXJnZXQkZ2V0Qm91bmRpbmdDbC5oZWlnaHQ7XG4gICAgdmFyIG9mZnNldFdpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoLFxuICAgICAgb2Zmc2V0SGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZSBvYnNlcnZlciB0cmlnZ2VyIHdoZW4gY29udGVudCBzaXplIGNoYW5nZWQuXG4gICAgICogSW4gbW9zdCBjYXNlIHdlIGp1c3QgY2FyZSBhYm91dCBlbGVtZW50IHNpemUsXG4gICAgICogbGV0J3MgdXNlIGBib3VuZGFyeWAgaW5zdGVhZCBvZiBgY29udGVudFJlY3RgIGhlcmUgdG8gYXZvaWQgc2hha2luZy5cbiAgICAgKi9cbiAgICB2YXIgZml4ZWRXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpO1xuICAgIHZhciBmaXhlZEhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcbiAgICBpZiAoc2l6ZVJlZi5jdXJyZW50LndpZHRoICE9PSBmaXhlZFdpZHRoIHx8IHNpemVSZWYuY3VycmVudC5oZWlnaHQgIT09IGZpeGVkSGVpZ2h0IHx8IHNpemVSZWYuY3VycmVudC5vZmZzZXRXaWR0aCAhPT0gb2Zmc2V0V2lkdGggfHwgc2l6ZVJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCAhPT0gb2Zmc2V0SGVpZ2h0KSB7XG4gICAgICB2YXIgc2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IGZpeGVkV2lkdGgsXG4gICAgICAgIGhlaWdodDogZml4ZWRIZWlnaHQsXG4gICAgICAgIG9mZnNldFdpZHRoOiBvZmZzZXRXaWR0aCxcbiAgICAgICAgb2Zmc2V0SGVpZ2h0OiBvZmZzZXRIZWlnaHRcbiAgICAgIH07XG4gICAgICBzaXplUmVmLmN1cnJlbnQgPSBzaXplO1xuXG4gICAgICAvLyBJRSBpcyBzdHJhbmdlLCByaWdodD9cbiAgICAgIHZhciBtZXJnZWRPZmZzZXRXaWR0aCA9IG9mZnNldFdpZHRoID09PSBNYXRoLnJvdW5kKHdpZHRoKSA/IHdpZHRoIDogb2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgbWVyZ2VkT2Zmc2V0SGVpZ2h0ID0gb2Zmc2V0SGVpZ2h0ID09PSBNYXRoLnJvdW5kKGhlaWdodCkgPyBoZWlnaHQgOiBvZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgc2l6ZUluZm8gPSAoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoKDAsIF9vYmplY3RTcHJlYWQyLmRlZmF1bHQpKHt9LCBzaXplKSwge30sIHtcbiAgICAgICAgb2Zmc2V0V2lkdGg6IG1lcmdlZE9mZnNldFdpZHRoLFxuICAgICAgICBvZmZzZXRIZWlnaHQ6IG1lcmdlZE9mZnNldEhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIC8vIExldCBjb2xsZWN0aW9uIGtub3cgd2hhdCBoYXBwZW5lZFxuICAgICAgb25Db2xsZWN0aW9uUmVzaXplID09PSBudWxsIHx8IG9uQ29sbGVjdGlvblJlc2l6ZSA9PT0gdm9pZCAwIHx8IG9uQ29sbGVjdGlvblJlc2l6ZShzaXplSW5mbywgdGFyZ2V0LCBkYXRhKTtcbiAgICAgIGlmIChvblJlc2l6ZSkge1xuICAgICAgICAvLyBkZWZlciB0aGUgY2FsbGJhY2sgYnV0IG5vdCBkZWZlciB0byBuZXh0IGZyYW1lXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uUmVzaXplKHNpemVJbmZvLCB0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBEeW5hbWljIG9ic2VydmVcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBnZXREb20oKTtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgJiYgIWRpc2FibGVkKSB7XG4gICAgICAoMCwgX29ic2VydmVyVXRpbC5vYnNlcnZlKShjdXJyZW50RWxlbWVudCwgb25JbnRlcm5hbFJlc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKDAsIF9vYnNlcnZlclV0aWwudW5vYnNlcnZlKShjdXJyZW50RWxlbWVudCwgb25JbnRlcm5hbFJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW2VsZW1lbnRSZWYuY3VycmVudCwgZGlzYWJsZWRdKTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRG9tV3JhcHBlci5kZWZhdWx0LCB7XG4gICAgcmVmOiB3cmFwcGVyUmVmXG4gIH0sIGNhblJlZiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQobWVyZ2VkQ2hpbGRyZW4sIHtcbiAgICByZWY6IG1lcmdlZFJlZlxuICB9KSA6IG1lcmdlZENoaWxkcmVuKTtcbn1cbnZhciBSZWZTaW5nbGVPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFNpbmdsZU9ic2VydmVyKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlZlNpbmdsZU9ic2VydmVyLmRpc3BsYXlOYW1lID0gJ1NpbmdsZU9ic2VydmVyJztcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IFJlZlNpbmdsZU9ic2VydmVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/lib/SingleObserver/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-resize-observer/lib/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireWildcard = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\")[\"default\"]);\nvar _interopRequireDefault = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"_rs\", ({\n  enumerable: true,\n  get: function get() {\n    return _observerUtil._rs;\n  }\n}));\nexports[\"default\"] = void 0;\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"(ssr)/./node_modules/@babel/runtime/helpers/extends.js\"));\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ \"(ssr)/./node_modules/rc-util/lib/Children/toArray.js\"));\nvar _warning = __webpack_require__(/*! rc-util/lib/warning */ \"(ssr)/./node_modules/rc-util/lib/warning.js\");\nvar _SingleObserver = _interopRequireDefault(__webpack_require__(/*! ./SingleObserver */ \"(ssr)/./node_modules/rc-resize-observer/lib/SingleObserver/index.js\"));\nvar _Collection = __webpack_require__(/*! ./Collection */ \"(ssr)/./node_modules/rc-resize-observer/lib/Collection.js\");\nvar _observerUtil = __webpack_require__(/*! ./utils/observerUtil */ \"(ssr)/./node_modules/rc-resize-observer/lib/utils/observerUtil.js\");\nvar INTERNAL_PREFIX_KEY = 'rc-observer-key';\nfunction ResizeObserver(props, ref) {\n  var children = props.children;\n  var childNodes = typeof children === 'function' ? [children] : (0, _toArray.default)(children);\n  if (true) {\n    if (childNodes.length > 1) {\n      (0, _warning.warning)(false, 'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.');\n    } else if (childNodes.length === 0) {\n      (0, _warning.warning)(false, '`children` of ResizeObserver is empty. Nothing is in observe.');\n    }\n  }\n  return childNodes.map(function (child, index) {\n    var key = (child === null || child === void 0 ? void 0 : child.key) || \"\".concat(INTERNAL_PREFIX_KEY, \"-\").concat(index);\n    return /*#__PURE__*/React.createElement(_SingleObserver.default, (0, _extends2.default)({}, props, {\n      key: key,\n      ref: index === 0 ? ref : undefined\n    }), child);\n  });\n}\nvar RefResizeObserver = /*#__PURE__*/React.forwardRef(ResizeObserver);\nif (true) {\n  RefResizeObserver.displayName = 'ResizeObserver';\n}\nRefResizeObserver.Collection = _Collection.Collection;\nvar _default = exports[\"default\"] = RefResizeObserver;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4QkFBOEIsOEpBQWdFO0FBQzlGLDZCQUE2Qiw0SkFBK0Q7QUFDNUYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZix1Q0FBdUMsbUJBQU8sQ0FBQyw4RkFBZ0M7QUFDL0Usb0NBQW9DLG1CQUFPLENBQUMsd0dBQU87QUFDbkQsc0NBQXNDLG1CQUFPLENBQUMsMEZBQThCO0FBQzVFLGVBQWUsbUJBQU8sQ0FBQyx3RUFBcUI7QUFDNUMsNkNBQTZDLG1CQUFPLENBQUMsNkZBQWtCO0FBQ3ZFLGtCQUFrQixtQkFBTyxDQUFDLCtFQUFjO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLCtGQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJhLWFwcC12My8uL25vZGVfbW9kdWxlcy9yYy1yZXNpemUtb2JzZXJ2ZXIvbGliL2luZGV4LmpzPzk1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIikuZGVmYXVsdDtcbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX3JzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9vYnNlcnZlclV0aWwuX3JzO1xuICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdG9BcnJheSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIikpO1xudmFyIF93YXJuaW5nID0gcmVxdWlyZShcInJjLXV0aWwvbGliL3dhcm5pbmdcIik7XG52YXIgX1NpbmdsZU9ic2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TaW5nbGVPYnNlcnZlclwiKSk7XG52YXIgX0NvbGxlY3Rpb24gPSByZXF1aXJlKFwiLi9Db2xsZWN0aW9uXCIpO1xudmFyIF9vYnNlcnZlclV0aWwgPSByZXF1aXJlKFwiLi91dGlscy9vYnNlcnZlclV0aWxcIik7XG52YXIgSU5URVJOQUxfUFJFRklYX0tFWSA9ICdyYy1vYnNlcnZlci1rZXknO1xuZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgdmFyIGNoaWxkTm9kZXMgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBbY2hpbGRyZW5dIDogKDAsIF90b0FycmF5LmRlZmF1bHQpKGNoaWxkcmVuKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAoMCwgX3dhcm5pbmcud2FybmluZykoZmFsc2UsICdGaW5kIG1vcmUgdGhhbiBvbmUgY2hpbGQgbm9kZSB3aXRoIGBjaGlsZHJlbmAgaW4gUmVzaXplT2JzZXJ2ZXIuIFBsZWFzZSB1c2UgUmVzaXplT2JzZXJ2ZXIuQ29sbGVjdGlvbiBpbnN0ZWFkLicpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICgwLCBfd2FybmluZy53YXJuaW5nKShmYWxzZSwgJ2BjaGlsZHJlbmAgb2YgUmVzaXplT2JzZXJ2ZXIgaXMgZW1wdHkuIE5vdGhpbmcgaXMgaW4gb2JzZXJ2ZS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC5rZXkpIHx8IFwiXCIuY29uY2F0KElOVEVSTkFMX1BSRUZJWF9LRVksIFwiLVwiKS5jb25jYXQoaW5kZXgpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2luZ2xlT2JzZXJ2ZXIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgcmVmOiBpbmRleCA9PT0gMCA/IHJlZiA6IHVuZGVmaW5lZFxuICAgIH0pLCBjaGlsZCk7XG4gIH0pO1xufVxudmFyIFJlZlJlc2l6ZU9ic2VydmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoUmVzaXplT2JzZXJ2ZXIpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVmUmVzaXplT2JzZXJ2ZXIuZGlzcGxheU5hbWUgPSAnUmVzaXplT2JzZXJ2ZXInO1xufVxuUmVmUmVzaXplT2JzZXJ2ZXIuQ29sbGVjdGlvbiA9IF9Db2xsZWN0aW9uLkNvbGxlY3Rpb247XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBSZWZSZXNpemVPYnNlcnZlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/lib/utils/observerUtil.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rc-resize-observer/lib/utils/observerUtil.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports._rs = exports._el = void 0;\nexports.observe = observe;\nexports.unobserve = unobserve;\nvar _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(/*! resize-observer-polyfill */ \"(ssr)/./node_modules/resize-observer-polyfill/dist/ResizeObserver.js\"));\n// =============================== Const ===============================\nvar elementListeners = new Map();\nfunction onResize(entities) {\n  entities.forEach(function (entity) {\n    var _elementListeners$get;\n    var target = entity.target;\n    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {\n      return listener(target);\n    });\n  });\n}\n\n// Note: ResizeObserver polyfill not support option to measure border-box resize\nvar resizeObserver = new _resizeObserverPolyfill.default(onResize);\n\n// Dev env only\nvar _el = exports._el =  true ? elementListeners : 0; // eslint-disable-line\nvar _rs = exports._rs =  true ? onResize : 0; // eslint-disable-line\n\n// ============================== Observe ==============================\nfunction observe(element, callback) {\n  if (!elementListeners.has(element)) {\n    elementListeners.set(element, new Set());\n    resizeObserver.observe(element);\n  }\n  elementListeners.get(element).add(callback);\n}\nfunction unobserve(element, callback) {\n  if (elementListeners.has(element)) {\n    elementListeners.get(element).delete(callback);\n    if (!elementListeners.get(element).size) {\n      resizeObserver.unobserve(element);\n      elementListeners.delete(element);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2xpYi91dGlscy9vYnNlcnZlclV0aWwuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsNkJBQTZCLDRKQUErRDtBQUM1Riw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixXQUFXLEdBQUcsV0FBVztBQUN6QixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLHFEQUFxRCxtQkFBTyxDQUFDLHNHQUEwQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxXQUFXLEdBQUcsS0FBcUMsc0JBQXNCLENBQUksRUFBRTtBQUN6RixVQUFVLFdBQVcsR0FBRyxLQUFxQyxjQUFjLENBQUksRUFBRTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcmEtYXBwLXYzLy4vbm9kZV9tb2R1bGVzL3JjLXJlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvb2JzZXJ2ZXJVdGlsLmpzPzRjODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5fcnMgPSBleHBvcnRzLl9lbCA9IHZvaWQgMDtcbmV4cG9ydHMub2JzZXJ2ZSA9IG9ic2VydmU7XG5leHBvcnRzLnVub2JzZXJ2ZSA9IHVub2JzZXJ2ZTtcbnZhciBfcmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiKSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBlbGVtZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gb25SZXNpemUoZW50aXRpZXMpIHtcbiAgZW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgdmFyIF9lbGVtZW50TGlzdGVuZXJzJGdldDtcbiAgICB2YXIgdGFyZ2V0ID0gZW50aXR5LnRhcmdldDtcbiAgICAoX2VsZW1lbnRMaXN0ZW5lcnMkZ2V0ID0gZWxlbWVudExpc3RlbmVycy5nZXQodGFyZ2V0KSkgPT09IG51bGwgfHwgX2VsZW1lbnRMaXN0ZW5lcnMkZ2V0ID09PSB2b2lkIDAgfHwgX2VsZW1lbnRMaXN0ZW5lcnMkZ2V0LmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIodGFyZ2V0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIE5vdGU6IFJlc2l6ZU9ic2VydmVyIHBvbHlmaWxsIG5vdCBzdXBwb3J0IG9wdGlvbiB0byBtZWFzdXJlIGJvcmRlci1ib3ggcmVzaXplXG52YXIgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwuZGVmYXVsdChvblJlc2l6ZSk7XG5cbi8vIERldiBlbnYgb25seVxudmFyIF9lbCA9IGV4cG9ydHMuX2VsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGVsZW1lbnRMaXN0ZW5lcnMgOiBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgX3JzID0gZXhwb3J0cy5fcnMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gb25SZXNpemUgOiBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBPYnNlcnZlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaykge1xuICBpZiAoIWVsZW1lbnRMaXN0ZW5lcnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgZWxlbWVudExpc3RlbmVycy5zZXQoZWxlbWVudCwgbmV3IFNldCgpKTtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG4gIGVsZW1lbnRMaXN0ZW5lcnMuZ2V0KGVsZW1lbnQpLmFkZChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiB1bm9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgaWYgKGVsZW1lbnRMaXN0ZW5lcnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgZWxlbWVudExpc3RlbmVycy5nZXQoZWxlbWVudCkuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICBpZiAoIWVsZW1lbnRMaXN0ZW5lcnMuZ2V0KGVsZW1lbnQpLnNpemUpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgIGVsZW1lbnRMaXN0ZW5lcnMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/lib/utils/observerUtil.js\n");

/***/ })

};
;