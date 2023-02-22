/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burger": () => (/* binding */ burger)
/* harmony export */ });
function burger() {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.menu-close-btn');
  const menu = document.querySelector('.header__menu');
  const bg = document.querySelector('.header-mobile-overlay');
  const applyBtn = menu.querySelector('.submit-application');
  menuBtn.addEventListener('click', function () {
    openMenu();
  });
  closeBtn.addEventListener('click', function () {
    closeMenu();
  });
  window.addEventListener('resize', function () {
    if (menu.classList.contains('_active')) {
      closeMenu();
    }
  });
  function openMenu() {
    menuBtn.classList.add('_active');
    menu.classList.add('_active');
    bg.classList.add('_visible');
    closeBtn.classList.add('_visible');
    if (menu.classList.contains('_active')) {
      applyBtn.classList.remove('transparent-orange-btn');
      applyBtn.classList.add('orange-btn');
    }
    document.body.style.overflow = menu.classList.contains('_active') ? 'hidden' : '';
  }
  function closeMenu() {
    menuBtn.classList.remove('_active');
    menu.classList.remove('_active');
    bg.classList.remove('_visible');
    closeBtn.classList.remove('_visible');
    document.body.style.overflow = '';
  }
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculator": () => (/* binding */ calculator)
/* harmony export */ });
function calculator() {
  const price = document.querySelector('.price');
  const payment = document.querySelector('.payment');
  const period = document.querySelector('.period');
  const summary = document.querySelector('.summary');
  const monthSummary = document.querySelector('.month-summary');
  function getNum(item) {
    return item.querySelector('.number');
  }
  function getRange(item) {
    return item.querySelector('.range');
  }
  const priceNum = getNum(price);
  const priceRange = getRange(price);
  const paymentNum = getNum(payment);
  const paymentRange = getRange(payment);
  const periodNum = getNum(period);
  const periodRange = getRange(period);

  // price
  priceNum.addEventListener('input', () => {
    priceRange.value = priceNum.value;
    if (priceNum.value > 6000000) {
      priceNum.value = 6000000;
    }
    calc();
  });
  priceRange.addEventListener('input', () => {
    priceNum.value = priceRange.value;
    calc();
  });

  // payment
  paymentNum.addEventListener('input', () => {
    paymentRange.value = paymentNum.value;
    calc();
  });
  paymentRange.addEventListener('input', () => {
    paymentNum.value = paymentRange.value;
    const sumInp = payment.querySelector('.summ');
    sumInp.value = priceNum.value * paymentNum.value / 100;
    calc();
  });

  // period
  periodNum.addEventListener('input', () => {
    periodRange.value = periodNum.value;
    calc();
  });
  periodRange.addEventListener('input', () => {
    periodNum.value = periodRange.value;
    calc();
  });
  function calc() {
    const monthSummaryValue = Math.ceil(priceNum.value - paymentNum.value * 9.2 / (1 + 9.2) - periodNum.value);
    monthSummary.textContent = monthSummaryValue;
    const summaryValue = Math.ceil(priceNum.value + periodNum.value * monthSummaryValue);
    summary.textContent = summaryValue;
  }
}

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scripts_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


(0,_scripts_burger__WEBPACK_IMPORTED_MODULE_0__.burger)();
(0,_scripts_calculator__WEBPACK_IMPORTED_MODULE_1__.calculator)();
})();

/******/ })()
;