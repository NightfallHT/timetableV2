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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n/* harmony import */ var globals_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! globals/consts */ \"./src/@globals/consts.ts\");\n\n\nfunction getNextWeekday(day) {\n    let today = new Date();\n    while (today.getDay() !== day) {\n        today.setDate(today.getDate() + 1);\n    }\n    return today;\n}\nvar weekday;\n(function (weekday) {\n    weekday[weekday[\"sunday\"] = 0] = \"sunday\";\n    weekday[weekday[\"monday\"] = 1] = \"monday\";\n    weekday[weekday[\"tuesday\"] = 2] = \"tuesday\";\n    weekday[weekday[\"wednesday\"] = 3] = \"wednesday\";\n    weekday[weekday[\"thursday\"] = 4] = \"thursday\";\n    weekday[weekday[\"friday\"] = 5] = \"friday\";\n    weekday[weekday[\"saturday\"] = 6] = \"saturday\";\n})(weekday || (weekday = {}));\nconst timetableDiv = document.getElementById(\"timetable\");\nif (timetableDiv === null)\n    throw new Error(\"timetableDiv is null\");\nconst data = await fetch(globals_consts__WEBPACK_IMPORTED_MODULE_1__.root + \"timetable.json\").then((res) => res.json());\nconst dayTemplate = await fetch(globals_consts__WEBPACK_IMPORTED_MODULE_1__.root + \"templates/day.html\").then((res) => res.text());\nconst classTemplate = await fetch(globals_consts__WEBPACK_IMPORTED_MODULE_1__.root + \"templates/class.html\").then((res) => res.text());\n// day from 0 to 6, as per Date implementation\nfunction isPeimThisWeek(hour) {\n    // filter out additional slot\n    if (hour.startsWith(\"1\"))\n        return false;\n    const nextLab = getNextWeekday(weekday.monday);\n    const group = localStorage.getItem(\"peim_lab\");\n    return (((0,_util__WEBPACK_IMPORTED_MODULE_0__.getWeekNumber)(nextLab) % 2 === 0 && group === \"A\") ||\n        ((0,_util__WEBPACK_IMPORTED_MODULE_0__.getWeekNumber)(nextLab) % 2 === 1 && group === \"B\"));\n}\nfunction isAisdThisWeek() {\n    const nextLab = getNextWeekday(weekday.wednesday);\n    const group = localStorage.getItem(\"aids_lab\");\n    return (((0,_util__WEBPACK_IMPORTED_MODULE_0__.getWeekNumber)(nextLab) % 2 === 0 && group === \"nieparzyste\") ||\n        ((0,_util__WEBPACK_IMPORTED_MODULE_0__.getWeekNumber)(nextLab) % 2 === 1 && group === \"parzyste\"));\n}\nfunction getKeyByValue(map, searchValue) {\n    for (let [key, value] of map.entries()) {\n        if (value === searchValue)\n            return key;\n    }\n}\nfunction scrollCarousel(direction) {\n    console.log(\"scrolling...\");\n    const carousel = document.getElementById(\"timetable\");\n    carousel.scrollBy({\n        left: (carousel.scrollWidth / carousel.childElementCount) * direction,\n        behavior: \"smooth\",\n    });\n}\nlet key;\nfor (key in globals_consts__WEBPACK_IMPORTED_MODULE_1__.defaultSettings.groups) {\n    if (localStorage.getItem(key) === null) {\n        localStorage.setItem(key, globals_consts__WEBPACK_IMPORTED_MODULE_1__.defaultSettings.groups[key]);\n    }\n}\nlet day;\nfor (day in data) {\n    timetableDiv.innerHTML += dayTemplate.replace(/{%day%}/g, day);\n    const scheduleDiv = document.getElementById(day);\n    let output = [];\n    for (const classes of data[day]) {\n        let anyClassesHappening = false;\n        const empty = {\n            hour: classes.hour,\n            room: \"\",\n            subject_type: \"\",\n            subject_name: \"\",\n            teacher: \"\",\n            notes: \"\",\n            start_date: null,\n            end_date: null,\n        };\n        for (const classBlock of classes.items) {\n            // Ensure date exists; if not specified, classes last the entire semester.\n            // Dates chosen within reasonable boundaries.\n            if (classBlock.end_date !== null) {\n                classBlock.end_date = new Date(classBlock.end_date);\n            }\n            else {\n                classBlock.end_date = new Date(\"01.01.2038\");\n            }\n            if (classBlock.start_date !== null) {\n                classBlock.start_date = new Date(classBlock.start_date);\n            }\n            else {\n                classBlock.start_date = new Date(\"01.01.1970\");\n            }\n            let today = new Date();\n            // Check if classes start within bounds\n            if ((classBlock.start_date > today || classBlock.end_date < today) &&\n                localStorage.getItem(\"display-all\") !== \"true\")\n                continue;\n            let key = getKeyByValue(globals_consts__WEBPACK_IMPORTED_MODULE_1__.subjectMappingsDrut, classBlock.subject_type + classBlock.subject_name);\n            switch (key) {\n                case \"aids_proj\":\n                    if (!matchesAidsProj(day, classes.hour))\n                        continue;\n                    break;\n                case \"uc_proj\":\n                    if (!matchesUCProj(day, classes.hour))\n                        continue;\n                    break;\n                case \"uc_lab\":\n                    if (!matchesUCLab(day))\n                        continue;\n                    break;\n                case \"so_lab\":\n                    if (!matchesSO(day))\n                        continue;\n                    break;\n                case \"oop_lab\":\n                    if (!matchesOOP(day))\n                        continue;\n                    break;\n                case \"peim_lab\":\n                    if (!isPeimThisWeek(classes.hour))\n                        continue;\n                    break;\n                case \"aids_lab\":\n                    if (!isAisdThisWeek())\n                        continue;\n                    break;\n                default:\n                    break;\n            }\n            output.push(classBlock);\n            anyClassesHappening = true;\n        }\n        if (!anyClassesHappening) {\n            output.push(empty);\n        }\n    }\n    while (output[0].room === \"\")\n        output.shift();\n    while (output[output.length - 1].room === \"\")\n        output.pop();\n    for (const classes of output) {\n        scheduleDiv.innerHTML += (0,_util__WEBPACK_IMPORTED_MODULE_0__.replaceTemplate)(classes.hour, classTemplate, classes);\n    }\n}\nconst prevScrolls = document.getElementsByClassName(\"carousel-prev\");\nconst nextScrolls = document.getElementsByClassName(\"carousel-next\");\nfor (const button of prevScrolls) {\n    button.addEventListener(\"click\", () => {\n        scrollCarousel(-1);\n    });\n}\nfor (const button of nextScrolls) {\n    button.addEventListener(\"click\", () => {\n        scrollCarousel(1);\n    });\n}\n// Util functions necessary to map subject groups to days\nfunction matchesAidsProj(day, hour) {\n    const group = localStorage.getItem(\"aids_proj\");\n    switch (day) {\n        case \"monday\":\n            if (group === \"poniedziałek rano\" && hour[0] === \"0\")\n                return true;\n            if (group === \"poniedziałek po południu\" && hour[1] === \"1\")\n                return true;\n        case \"wednesday\":\n            return group === \"środa\";\n        case \"friday\":\n            return group === \"piątek\";\n        default:\n            return false;\n    }\n}\nfunction matchesUCProj(day, hour) {\n    const group = localStorage.getItem(\"uc_proj\");\n    switch (day) {\n        case \"monday\":\n            return group === \"poniedziałek\";\n        case \"tuesday\":\n            return group === \"wtorek\" && parseInt(hour[1]) < 8;\n        case \"wednesday\":\n            return group === \"środa\";\n        default:\n            return false;\n    }\n}\nfunction matchesUCLab(day) {\n    const group = localStorage.getItem(\"uc_lab\");\n    switch (day) {\n        case \"tuesday\":\n            return group === \"wtorek\";\n        case \"friday\":\n            return group === \"piątek\";\n        default:\n            return false;\n    }\n}\nfunction matchesSO(day) {\n    const group = localStorage.getItem(\"so_lab\");\n    switch (day) {\n        case \"tuesday\":\n            return group === \"wtorek\";\n        case \"wednesday\":\n            return group === \"środa\";\n        default:\n            return false;\n    }\n}\nfunction matchesOOP(day) {\n    const group = localStorage.getItem(\"oop_lab\");\n    switch (day) {\n        case \"tuesday\":\n            return group === \"wtorek\";\n        case \"wednesday\":\n            return group === \"środa\";\n        default:\n            return false;\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeekNumber: () => (/* binding */ getWeekNumber),\n/* harmony export */   replaceTemplate: () => (/* binding */ replaceTemplate)\n/* harmony export */ });\nfunction getWeekNumber(date) {\n    // TODO: figure out why there is var and how the names are resolved\n    var date = new Date(date.getTime());\n    date.setHours(0, 0, 0, 0);\n    // Thursday in current week decides the year.\n    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));\n    // January 4 is always in week 1.\n    var week1 = new Date(date.getFullYear(), 0, 4);\n    // Adjust to Thursday in week 1 and count number of weeks from date to week1.\n    return (1 +\n        Math.round(((date.getTime() - week1.getTime()) / 86400000 -\n            3 +\n            ((week1.getDay() + 6) % 7)) /\n            7));\n}\nfunction replaceTemplate(time, template, classItem) {\n    const showNote = localStorage.getItem(\"notes\") === \"true\";\n    const notes = classItem.notes !== \"null\" ? classItem.notes : null;\n    let outputHtml = template.replace(/{%room%}/g, classItem.room);\n    outputHtml = outputHtml.replace(/{%type%}/g, classItem.subject_type);\n    outputHtml = outputHtml.replace(/{%subject_name%}/g, classItem.subject_name);\n    outputHtml = outputHtml.replace(/{%teacher%}/g, classItem.teacher);\n    outputHtml = outputHtml.replace(/{%time%}/g, time);\n    outputHtml = outputHtml.replace(/{%notes%}/g, showNote && notes !== null ? notes : \"\");\n    return outputHtml;\n}\n\n\n//# sourceURL=webpack:///./src/util.ts?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;