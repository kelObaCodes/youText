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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WelcomeView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction WelcomeView() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        const inputValue = event.target.value;\n        const formattedText = inputValue.replace(/\\[(.*?)\\]/g, \"<b>$1</b>\");\n        setText(formattedText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"welcome-cover\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"welcome-header\",\n                    children: [\n                        \"Hello\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined animate__animated  animate__jello\",\n                            children: \"waving_hand\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \" Welcome to youText\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"We all have that one text we want handy and we just want to share it with that job opportunity, loved one but we want some parts to be customizable, dynamic and other parts resusable, youText gives you that.\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"create-btn cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"button-text\",\n                            children: \"Create your text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined symbol-icon\",\n                            children: \"edit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"create-you-text-area\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tooltip\",\n                            children: [\n                                \"how to save your youText\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"material-symbols-sharp cursor-pointer\",\n                                    children: \"info\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tooltiptext\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"For your dynamic youText, you can save it like so\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"material-symbols-sharp\",\n                                                    children: \"format_quote\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 33\n                                                }, this),\n                                                \"I have been trying to reach out to\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                    children: \"[company_name]. \"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 33\n                                                }, this),\n                                                \"My name is \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                    children: \"[myname]\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 44\n                                                }, this),\n                                                \" and i am a very skilled \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                    children: \"[profession] \"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, this),\n                                                \" and i have so many things that i would be interested in managing for \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                    children: \" [ceo_name] \"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, this),\n                                                \" and i have other things that i have done for you\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"material-symbols-sharp\",\n                                                    children: \"format_quote\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 33\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Explanation: for sentences or words you want to be dynamic, save the keywords in brackets without space and click save.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            rows: 15,\n                            value: text,\n                            onChange: handleChange,\n                            placeholder: \"Type your text here...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            dangerouslySetInnerHTML: {\n                                __html: text\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"create-btn cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"button-text\",\n                                    children: \"Save you\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"material-symbols-sharp symbol-icon\",\n                                    children: \"control_point_duplicate\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kelvinigbinoba/youtext/src/components/welcome.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(WelcomeView, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n_c = WelcomeView;\nvar _c;\n$RefreshReg$(_c, \"WelcomeView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUcrQztBQUVoQyxTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFTO0lBRXpDLE1BQU1JLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTUMsYUFBYUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQ3JDLE1BQU1DLGdCQUFnQkgsV0FBV0ksT0FBTyxDQUFDLGNBQWM7UUFFdkRQLFFBQVFNO0lBQ1Y7SUFDQSxxQkFDSTtrQkFDSSw0RUFBQ0U7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzt3QkFBaUI7d0JBQ3JCO3NDQUNOLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBOEQ7Ozs7Ozs7Ozs7Ozs4QkFJbEYsOERBQUNHOzhCQUFHOzs7Ozs7OEJBRUosOERBQUNDOzhCQUFFOzs7Ozs7OEJBTUgsOERBQUNDO29CQUFPTCxXQUFVOztzQ0FDZCw4REFBQ0U7NEJBQUtGLFdBQVU7c0NBQWM7Ozs7OztzQ0FDOUIsOERBQUNFOzRCQUFLRixXQUFVO3NDQUF3Qzs7Ozs7Ozs7Ozs7OzhCQUs1RCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQVU7OENBRXJCLDhEQUFDRTtvQ0FBS0YsV0FBVTs4Q0FBd0M7Ozs7Ozs4Q0FHeEQsOERBQUNEO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0k7c0RBQUU7Ozs7OztzREFJSCw4REFBQ0U7Ozs7O3NEQUNELDhEQUFDRjs7OERBQ0csOERBQUNGO29EQUFLRixXQUFVOzhEQUF5Qjs7Ozs7O2dEQUVsQztnREFDNEI7OERBQ25DLDhEQUFDTzs4REFBRTs7Ozs7O2dEQUFvQjs4REFDWiw4REFBQ0E7OERBQUU7Ozs7OztnREFBWTs4REFDbEIsOERBQUNBOzhEQUFFOzs7Ozs7Z0RBQWlCOzhEQUV4Qiw4REFBQ0E7OERBQUU7Ozs7OztnREFBZ0I7OERBRXZCLDhEQUFDTDtvREFBS0YsV0FBVTs4REFBeUI7Ozs7Ozs7Ozs7OztzREFJN0MsOERBQUNNOzs7OztzREFDRCw4REFBQ0Y7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FRWCw4REFBQ0k7NEJBQVNDLE1BQU07NEJBQ2RiLE9BQU9OOzRCQUNQb0IsVUFBVWxCOzRCQUNWbUIsYUFBWTs7Ozs7O3NDQUdkLDhEQUFDUDs0QkFBRVEseUJBQXlCO2dDQUFFQyxRQUFRdkI7NEJBQUs7Ozs7OztzQ0FDM0MsOERBQUNlOzRCQUFPTCxXQUFVOzs4Q0FDZCw4REFBQ0U7b0NBQUtGLFdBQVU7OENBQWM7Ozs7Ozs4Q0FDOUIsOERBQUNFO29DQUFLRixXQUFVOzhDQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3RTtHQXRGd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUudHN4P2JiODciXSwic291cmNlc0NvbnRlbnQiOlsiXG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VsY29tZVZpZXcoKSB7XG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRUZXh0ID0gaW5wdXRWYWx1ZS5yZXBsYWNlKC9cXFsoLio/KVxcXS9nLCAnPGI+JDE8L2I+Jyk7XG4gIFxuICAgICAgc2V0VGV4dChmb3JtYXR0ZWRUZXh0KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY292ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2VsY29tZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgSGVsbG97XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgYW5pbWF0ZV9fYW5pbWF0ZWQgIGFuaW1hdGVfX2plbGxvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZpbmdfaGFuZFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8aDI+IFdlbGNvbWUgdG8geW91VGV4dDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgV2UgYWxsIGhhdmUgdGhhdCBvbmUgdGV4dCB3ZSB3YW50IGhhbmR5IGFuZCB3ZSBqdXN0IHdhbnQgdG9cbiAgICAgICAgICAgICAgICAgICAgc2hhcmUgaXQgd2l0aCB0aGF0IGpvYiBvcHBvcnR1bml0eSwgbG92ZWQgb25lIGJ1dCB3ZSB3YW50XG4gICAgICAgICAgICAgICAgICAgIHNvbWUgcGFydHMgdG8gYmUgY3VzdG9taXphYmxlLCBkeW5hbWljIGFuZCBvdGhlciBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICByZXN1c2FibGUsIHlvdVRleHQgZ2l2ZXMgeW91IHRoYXQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlLWJ0biBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPkNyZWF0ZSB5b3VyIHRleHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgc3ltYm9sLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUteW91LXRleHQtYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdyB0byBzYXZlIHlvdXIgeW91VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1zaGFycCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcHRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHlvdXIgZHluYW1pYyB5b3VUZXh0LCB5b3UgY2FuIHNhdmUgaXQgbGlrZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1zaGFycFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0X3F1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBoYXZlIGJlZW4gdHJ5aW5nIHRvIHJlYWNoIG91dCB0b3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+W2NvbXBhbnlfbmFtZV0uIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgbmFtZSBpcyA8Yj5bbXluYW1lXTwvYj4gYW5kIGkgYW0gYSB2ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsZWQgPGI+W3Byb2Zlc3Npb25dIDwvYj4gYW5kIGkgaGF2ZSBzbyBtYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5ncyB0aGF0IGkgd291bGQgYmUgaW50ZXJlc3RlZCBpbiBtYW5hZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgPGI+IFtjZW9fbmFtZV0gPC9iPiBhbmQgaSBoYXZlIG90aGVyIHRoaW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IGkgaGF2ZSBkb25lIGZvciB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1zaGFycFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0X3F1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGxhbmF0aW9uOiBmb3Igc2VudGVuY2VzIG9yIHdvcmRzIHlvdSB3YW50IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGR5bmFtaWMsIHNhdmUgdGhlIGtleXdvcmRzIGluIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXQgc3BhY2UgYW5kIGNsaWNrIHNhdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHRleHQgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlLWJ0biBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dG9uLXRleHRcIj5TYXZlIHlvdTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLXN5bWJvbHMtc2hhcnAgc3ltYm9sLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sX3BvaW50X2R1cGxpY2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiV2VsY29tZVZpZXciLCJ0ZXh0Iiwic2V0VGV4dCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZm9ybWF0dGVkVGV4dCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJoMiIsInAiLCJidXR0b24iLCJiciIsImIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/welcome.tsx\n"));

/***/ })

});