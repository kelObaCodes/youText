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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WelcomeView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip */ \"(app-pages-browser)/./src/components/tooltip.tsx\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helper */ \"(app-pages-browser)/./src/helper.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction WelcomeView() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        const inputValue = event.target.value;\n        const formattedText = inputValue.replace(/\\[(.*?)\\]/g, \"[<b>$1</b>]\");\n        setText(formattedText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"welcome-cover\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"welcome-header\",\n                    children: [\n                        \"Hello\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined animate__animated  animate__jello\",\n                            children: \"waving_hand\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \" Welcome to youText\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"We all have that one text we want handy and we just want to share it with that job opportunity, loved one but we want some parts to be customizable, dynamic and other parts resusable, youText gives you that.\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"create-btn cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"button-text\",\n                            children: \"Create your text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined symbol-icon\",\n                            children: \"edit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    toolTipData: (0,_helper__WEBPACK_IMPORTED_MODULE_3__.youTextDataExplainer)()\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 18\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    rows: 15,\n                    onChange: handleChange,\n                    placeholder: \"Type your text here...\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"translate-youText\",\n                    dangerouslySetInnerHTML: {\n                        __html: text\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"create-btn cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"button-text\",\n                            children: \"Save you\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-sharp symbol-icon\",\n                            children: \"control_point_duplicate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(WelcomeView, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n_c = WelcomeView;\nvar _c;\n$RefreshReg$(_c, \"WelcomeView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRytDO0FBQ2Y7QUFDa0I7QUFDbkMsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBUztJQUV6QyxNQUFNTSxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGFBQWFELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUNyQyxNQUFNQyxnQkFBZ0JILFdBQVdJLE9BQU8sQ0FBQyxjQUFjO1FBRXZEUCxRQUFRTTtJQUNWO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNFO1lBQUlDLFdBQVU7OzhCQUdYLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQWlCO3dCQUNyQjtzQ0FDTiw4REFBQ0U7NEJBQUtGLFdBQVU7c0NBQThEOzs7Ozs7Ozs7Ozs7OEJBSWxGLDhEQUFDRzs4QkFBRzs7Ozs7OzhCQUVKLDhEQUFDQzs4QkFBRTs7Ozs7OzhCQU1ILDhEQUFDQztvQkFBT0wsV0FBVTs7c0NBQ2QsOERBQUNFOzRCQUFLRixXQUFVO3NDQUFjOzs7Ozs7c0NBQzlCLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBd0M7Ozs7Ozs7Ozs7Ozs4QkFLM0QsOERBQUNiLGdEQUFPQTtvQkFDVG1CLGFBQ0lsQiw2REFBb0JBOzs7Ozs7OEJBT3BCLDhEQUFDbUI7b0JBQVNDLE1BQU07b0JBQ2RDLFVBQVVqQjtvQkFDVmtCLGFBQVk7Ozs7Ozs4QkFLZCw4REFBQ1g7b0JBQUlDLFdBQVU7b0JBQW9CVyx5QkFBeUI7d0JBQUVDLFFBQVF0QjtvQkFBSzs7Ozs7OzhCQUUzRSw4REFBQ2U7b0JBQU9MLFdBQVU7O3NDQUNkLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBYzs7Ozs7O3NDQUM5Qiw4REFBQ0U7NEJBQUtGLFdBQVU7c0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdFO0dBL0R3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2VsY29tZS50c3g/YmI4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvb2xUaXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCB7IHlvdVRleHREYXRhRXhwbGFpbmVyIH0gZnJvbSAnLi8uLi9oZWxwZXInXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lVmlldygpIHtcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFRleHQgPSBpbnB1dFZhbHVlLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICdbPGI+JDE8L2I+XScpO1xuICBcbiAgICAgIHNldFRleHQoZm9ybWF0dGVkVGV4dCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY292ZXJcIj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWxjb21lLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICBIZWxsb3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBhbmltYXRlX19hbmltYXRlZCAgYW5pbWF0ZV9famVsbG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmluZ19oYW5kXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMj4gV2VsY29tZSB0byB5b3VUZXh0PC9oMj5cblxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBXZSBhbGwgaGF2ZSB0aGF0IG9uZSB0ZXh0IHdlIHdhbnQgaGFuZHkgYW5kIHdlIGp1c3Qgd2FudCB0b1xuICAgICAgICAgICAgICAgICAgICBzaGFyZSBpdCB3aXRoIHRoYXQgam9iIG9wcG9ydHVuaXR5LCBsb3ZlZCBvbmUgYnV0IHdlIHdhbnRcbiAgICAgICAgICAgICAgICAgICAgc29tZSBwYXJ0cyB0byBiZSBjdXN0b21pemFibGUsIGR5bmFtaWMgYW5kIG90aGVyIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgIHJlc3VzYWJsZSwgeW91VGV4dCBnaXZlcyB5b3UgdGhhdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjcmVhdGUtYnRuIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvbi10ZXh0XCI+Q3JlYXRlIHlvdXIgdGV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBzeW1ib2wtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICB7PFRvb2xUaXBcbiAgICAgICAgICAgICAgICB0b29sVGlwRGF0YT17XG4gICAgICAgICAgICAgICAgICAgIHlvdVRleHREYXRhRXhwbGFpbmVyKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLz59XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciB0ZXh0IGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAvLyAgIG9uRm9jdXM9e31cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFuc2xhdGUteW91VGV4dCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjcmVhdGUtYnRuIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPlNhdmUgeW91PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1zaGFycCBzeW1ib2wtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xfcG9pbnRfZHVwbGljYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVG9vbFRpcCIsInlvdVRleHREYXRhRXhwbGFpbmVyIiwiV2VsY29tZVZpZXciLCJ0ZXh0Iiwic2V0VGV4dCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZm9ybWF0dGVkVGV4dCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJoMiIsInAiLCJidXR0b24iLCJ0b29sVGlwRGF0YSIsInRleHRhcmVhIiwicm93cyIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/welcome.tsx\n"));

/***/ })

});