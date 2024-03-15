/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/@globals/consts.ts":
/*!********************************!*\
  !*** ./src/@globals/consts.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultSettings: () => (/* binding */ defaultSettings),\n/* harmony export */   groupOpts: () => (/* binding */ groupOpts),\n/* harmony export */   root: () => (/* binding */ root),\n/* harmony export */   subjectMappings: () => (/* binding */ subjectMappings),\n/* harmony export */   subjectMappingsDrut: () => (/* binding */ subjectMappingsDrut)\n/* harmony export */ });\nlet rootFolder = \"\";\nswitch (document.location.hostname) {\n    case \"nightfallht.github.io\":\n        rootFolder = \"/timetableV2/\";\n        break;\n    case \"localhost\":\n    case \"127.0.0.1\":\n        rootFolder = \"/\";\n        break;\n    default:\n}\nconst root = location.protocol + \"//\" + location.host + rootFolder;\nconst groupOpts = {\n    aids_proj: [\n        \"poniedziałek rano\",\n        \"poniedziałek po południu\",\n        \"środa\",\n        \"piątek\",\n    ],\n    aids_lab: [\"parzyste\", \"nieparzyste\"],\n    peim_lab: [\"A\", \"B\"],\n    uc_proj: [\"poniedziałek\", \"wtorek\", \"środa\"],\n    uc_lab: [\"wtorek\", \"piątek\"],\n    so_lab: [\"wtorek\", \"środa\"],\n    oop_lab: [\"wtorek\", \"środa\"],\n};\nconst defaultSettings = {\n    mode: \"dark\",\n    show_all_classes: false,\n    show_notes: false,\n    english_classroom: \"301\",\n    groups: {\n        aids_proj: \"poniedziałek rano\",\n        aids_lab: \"parzyste\",\n        peim_lab: \"A\",\n        uc_proj: \"poniedziałek\",\n        uc_lab: \"wtorek\",\n        so_lab: \"wtorek\",\n        oop_lab: \"wtorek\",\n    },\n};\nconst subjectMappings = new Map([\n    [\"aids_proj\", \"Projektowe AiSD\"],\n    [\"aids_lab\", \"Laby AiSD\"],\n    [\"peim_lab\", \"Laby PEiM\"],\n    [\"uc_proj\", \"Projektowe Układy Cyfrowe\"],\n    [\"uc_lab\", \"Laby Układy Cyfrowe\"],\n    [\"so_lab\", \"Laby Systemy Operacyjne\"],\n    [\"oop_lab\", \"Laby Programowanie Obiektowe\"],\n]);\nconst subjectMappingsDrut = new Map([\n    [\"aids_proj\", \"[P]Algorytmy i struktury danych\"],\n    [\"aids_lab\", \"[L]Algorytmy i struktury danych\"],\n    [\"peim_lab\", \"[L]Podstawy elektroniki i metrologii\"],\n    [\"uc_proj\", \"[P]Układy cyfrowe\"],\n    [\"uc_lab\", \"[L]Układy cyfrowe\"],\n    [\"so_lab\", \"[L]Systemy operacyjne\"],\n    [\"oop_lab\", \"[L]Programowanie obiektowe\"],\n]);\n\n\n//# sourceURL=webpack:///./src/@globals/consts.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var globals_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globals/consts */ \"./src/@globals/consts.ts\");\n\n//  it's rly convenient to just use group opts as global variable,\n//  but then the function isn't pure so idk man\nfunction buttonClickHandler(e) {\n    const targetSubject = e.target.getAttribute(\"target_subject\");\n    const settingInput = document.getElementById(targetSubject);\n    const subjectOpts = globals_consts__WEBPACK_IMPORTED_MODULE_0__.groupOpts[targetSubject];\n    const delta = parseInt(e.target.getAttribute(\"delta\"));\n    const index = subjectOpts.indexOf(settingInput.value);\n    if (index + delta < 0) {\n        settingInput.value = subjectOpts.slice(-1)[0];\n    }\n    else if (index + delta >= subjectOpts.length) {\n        settingInput.value = subjectOpts[0];\n    }\n    else {\n        settingInput.value = subjectOpts[index + delta];\n    }\n    localStorage.setItem(targetSubject, settingInput.value);\n}\nfunction createSettings(settings, data, mappings) {\n    let output = \"\";\n    // let group: keyof typeof groupOpts;\n    let subject;\n    for (subject in data.groups) {\n        // console.log(subject);\n        const settingSection = document.createElement(\"div\");\n        const settingGroup = document.createElement(\"div\");\n        settingSection.className = \"settings-section\";\n        const label = Object.assign(document.createElement(\"label\"), {\n            for: subject,\n            textContent: mappings.get(subject) + \":\",\n        });\n        const input = Object.assign(document.createElement(\"input\"), {\n            type: \"text\",\n            id: subject,\n            className: \"settings-input\",\n            readOnly: true,\n            value: localStorage.getItem(subject),\n        });\n        const prevButtton = Object.assign(document.createElement(\"button\"), {\n            className: \"prevGroup\",\n            textContent: \"<\",\n            target_subject: subject,\n            delta: -1,\n        });\n        const nextButtton = Object.assign(document.createElement(\"button\"), {\n            className: \"nextGroup\",\n            textContent: \">\",\n            target_subject: subject,\n            delta: 1,\n        });\n        prevButtton.setAttribute(\"target_subject\", subject);\n        prevButtton.setAttribute(\"delta\", \"-1\");\n        nextButtton.setAttribute(\"target_subject\", subject);\n        nextButtton.setAttribute(\"delta\", \"1\");\n        settings.prepend(settingSection);\n        settingSection.appendChild(label);\n        settingSection.appendChild(settingGroup);\n        settingGroup.appendChild(prevButtton);\n        settingGroup.appendChild(input);\n        settingGroup.appendChild(nextButtton);\n        prevButtton.addEventListener(\"click\", buttonClickHandler);\n        nextButtton.addEventListener(\"click\", buttonClickHandler);\n        // output += template.replace(/{%GROUP_CODE%}/g, group);\n    }\n    return output;\n}\nlet userSettings = document.cookie === \"\" ? globals_consts__WEBPACK_IMPORTED_MODULE_0__.defaultSettings : JSON.parse(document.cookie);\nconst settingsDiv = document.getElementById(\"settings-container\");\nconst displayAllCheck = document.getElementById(\"all_classes\");\nconst notesCheck = document.getElementById(\"show_notes\");\ndisplayAllCheck.checked = localStorage.getItem(\"all_classes\") === \"true\";\nnotesCheck.checked = localStorage.getItem(\"show_notes\") === \"true\";\nnotesCheck?.addEventListener(\"change\", (e) => {\n    localStorage.setItem(\"notes\", e.target.checked.toString());\n});\ndisplayAllCheck?.addEventListener(\"change\", (e) => {\n    localStorage.setItem(\"display-all\", e.target.checked.toString());\n});\nsettingsDiv\n    ? createSettings(settingsDiv, userSettings, globals_consts__WEBPACK_IMPORTED_MODULE_0__.subjectMappings)\n    : alert(\"settings div not found\");\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/settings.ts");
/******/ 	
/******/ })()
;