"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/welcome.tsx":
/*!************************************!*\
  !*** ./src/components/welcome.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WelcomeView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip */ \"(app-pages-browser)/./src/components/tooltip.tsx\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helper */ \"(app-pages-browser)/./src/helper.tsx\");\n/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emoji-picker-react */ \"(app-pages-browser)/./node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction WelcomeView() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [translation, setTranslation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showEmoji, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (event)=>{\n        const inputValue = event.target.value;\n        const formattedText = inputValue.replace(/\\[(.*?)\\]/g, \"[<b>$1</b>]\");\n        setText(formattedText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"welcome-cover\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"welcome-header\",\n                    children: [\n                        \"Hello\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined animate__animated  animate__jello\",\n                            children: \"waving_hand\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \" Welcome to youText\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"We all have that one text we want handy and we just want to share it with that job opportunity, loved one but we want some parts to be customizable, dynamic and other parts resusable, youText gives you that.\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"create-btn cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"button-text\",\n                            children: \"Create your text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined symbol-icon\",\n                            children: \"edit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    toolTipData: (0,_helper__WEBPACK_IMPORTED_MODULE_3__.youTextDataExplainer)()\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 18\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-area-div\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            rows: 15,\n                            onChange: handleChange,\n                            placeholder: \"Type your text here...\",\n                            onMouseEnter: ()=>setTranslation(true),\n                            onBlur: ()=>setTranslation(!translation)\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this),\n                        translation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"translate-youText\",\n                            dangerouslySetInnerHTML: {\n                                __html: text\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"emoji-cover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(emoji_picker_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"create-btn cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"button-text\",\n                            children: \"Save you\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-sharp symbol-icon\",\n                            children: \"control_point_duplicate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(WelcomeView, \"169IW6KevKLXANNWmieULwNZbog=\");\n_c = WelcomeView;\nvar _c;\n$RefreshReg$(_c, \"WelcomeView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU4QztBQUNkO0FBQ21CO0FBQ047QUFFOUIsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDUyxXQUFXQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFVO0lBRS9DLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDbEIsTUFBTUMsYUFBYUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQ3JDLE1BQU1DLGdCQUFnQkgsV0FBV0ksT0FBTyxDQUFDLGNBQWM7UUFFdkRYLFFBQVFVO0lBQ1o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ0U7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzt3QkFBaUI7d0JBQ3JCO3NDQUNOLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBOEQ7Ozs7Ozs7Ozs7Ozs4QkFJbEYsOERBQUNHOzhCQUFHOzs7Ozs7OEJBRUosOERBQUNDOzhCQUFFOzs7Ozs7OEJBTUgsOERBQUNDO29CQUFPTCxXQUFVOztzQ0FDZCw4REFBQ0U7NEJBQUtGLFdBQVU7c0NBQWM7Ozs7OztzQ0FDOUIsOERBQUNFOzRCQUFLRixXQUFVO3NDQUF3Qzs7Ozs7Ozs7Ozs7OzhCQUszRCw4REFBQ2xCLGdEQUFPQTtvQkFBQ3dCLGFBQWF2Qiw2REFBb0JBOzs7Ozs7OEJBRTNDLDhEQUFDZ0I7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDTzs0QkFDR0MsTUFBTTs0QkFDTkMsVUFBVWpCOzRCQUNWa0IsYUFBWTs0QkFDWkMsY0FBYyxJQUFNdEIsZUFBZTs0QkFDbkN1QixRQUFRLElBQU12QixlQUFlLENBQUNEOzs7Ozs7d0JBR2pDQSw2QkFDRyw4REFBQ2dCOzRCQUNHSixXQUFVOzRCQUNWYSx5QkFBeUI7Z0NBQUVDLFFBQVE1Qjs0QkFBSzs7Ozs7Ozs7Ozs7OzhCQUlwRCw4REFBQ2E7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNEO2tDQUNHLDRFQUFDZiwwREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJcEIsOERBQUNxQjtvQkFBT0wsV0FBVTs7c0NBQ2QsOERBQUNFOzRCQUFLRixXQUFVO3NDQUFjOzs7Ozs7c0NBQzlCLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekU7R0FyRXdCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy93ZWxjb21lLnRzeD9iYjg3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb29sVGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IHlvdVRleHREYXRhRXhwbGFpbmVyIH0gZnJvbSBcIi4vLi4vaGVscGVyXCI7XG5pbXBvcnQgRW1vamlQaWNrZXIgZnJvbSBcImVtb2ppLXBpY2tlci1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lVmlldygpIHtcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFt0cmFuc2xhdGlvbiwgc2V0VHJhbnNsYXRpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93RW1vamksIHNldFNob3ddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRUZXh0ID0gaW5wdXRWYWx1ZS5yZXBsYWNlKC9cXFsoLio/KVxcXS9nLCBcIls8Yj4kMTwvYj5dXCIpO1xuXG4gICAgICAgIHNldFRleHQoZm9ybWF0dGVkVGV4dCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY292ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2VsY29tZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgSGVsbG97XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgYW5pbWF0ZV9fYW5pbWF0ZWQgIGFuaW1hdGVfX2plbGxvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZpbmdfaGFuZFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8aDI+IFdlbGNvbWUgdG8geW91VGV4dDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgV2UgYWxsIGhhdmUgdGhhdCBvbmUgdGV4dCB3ZSB3YW50IGhhbmR5IGFuZCB3ZSBqdXN0IHdhbnQgdG9cbiAgICAgICAgICAgICAgICAgICAgc2hhcmUgaXQgd2l0aCB0aGF0IGpvYiBvcHBvcnR1bml0eSwgbG92ZWQgb25lIGJ1dCB3ZSB3YW50XG4gICAgICAgICAgICAgICAgICAgIHNvbWUgcGFydHMgdG8gYmUgY3VzdG9taXphYmxlLCBkeW5hbWljIGFuZCBvdGhlciBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICByZXN1c2FibGUsIHlvdVRleHQgZ2l2ZXMgeW91IHRoYXQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlLWJ0biBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPkNyZWF0ZSB5b3VyIHRleHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgc3ltYm9sLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgezxUb29sVGlwIHRvb2xUaXBEYXRhPXt5b3VUZXh0RGF0YUV4cGxhaW5lcigpfSAvPn1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hcmVhLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHRleHQgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFRyYW5zbGF0aW9uKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRUcmFuc2xhdGlvbighdHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2xhdGUteW91VGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1vamktY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbW9qaVBpY2tlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlLWJ0biBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPlNhdmUgeW91PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1zeW1ib2xzLXNoYXJwIHN5bWJvbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sX3BvaW50X2R1cGxpY2F0ZVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRvb2xUaXAiLCJ5b3VUZXh0RGF0YUV4cGxhaW5lciIsIkVtb2ppUGlja2VyIiwiV2VsY29tZVZpZXciLCJ0ZXh0Iiwic2V0VGV4dCIsInRyYW5zbGF0aW9uIiwic2V0VHJhbnNsYXRpb24iLCJzaG93RW1vamkiLCJzZXRTaG93IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXR0ZWRUZXh0IiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImgyIiwicCIsImJ1dHRvbiIsInRvb2xUaXBEYXRhIiwidGV4dGFyZWEiLCJyb3dzIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm9uTW91c2VFbnRlciIsIm9uQmx1ciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/welcome.tsx\n"));

/***/ })

});