/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");


const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');
const contentScreen1 = document.querySelector('.content-screen-1');
const contentScreen2 = document.querySelector('.content-screen-2');
const row1 = document.querySelector('.row-1');
const row2 = document.querySelector('.row-2');
// const row3 = document.querySelector('.row-3');

// Глобальные переменные
const CARDS = [
    {
        name: '6 бубны',
        image: './static/img/6 бубны.svg',
    },
    {
        name: '6 крести',
        image: './static/img/6 крести.svg',
    },
    {
        name: '6 пики',
        image: './static/img/6 пики.svg',
    },
    {
        name: '6 черви',
        image: './static/img/6 черви.svg',
    },
    {
        name: '7 бубны',
        image: './static/img/7 бубны.svg',
    },
    {
        name: '7 крести',
        image: './static/img/7 крести.svg',
    },
    {
        name: '7 пики',
        image: './static/img/7 пики.svg',
    },
    {
        name: '7 черви',
        image: './static/img/7 черви.svg',
    },
    {
        name: '8 бубны',
        image: './static/img/8 бубны.svg',
    },
    {
        name: '8 крести',
        image: './static/img/8 крести.svg',
    },
    {
        name: '8 пики',
        image: './static/img/8 пики.svg',
    },
    {
        name: '8 черви',
        image: './static/img/8 черви.svg',
    },
    {
        name: '9 бубны',
        image: './static/img/9 бубны.svg',
    },
    {
        name: '9 крести',
        image: './static/img/9 крести.svg',
    },
    {
        name: '9 пики',
        image: './static/img/9 пики.svg',
    },
    {
        name: '9 черви',
        image: './static/img/9 черви.svg',
    },
    {
        name: '10 бубны',
        image: './static/img/10 бубны.svg',
    },
    {
        name: '10 крести',
        image: './static/img/10 крести.svg',
    },
    {
        name: '10 пики',
        image: './static/img/10 пики.svg',
    },
    {
        name: '10 черви',
        image: './static/img/10 черви.svg',
    },
    {
        name: 'валет бубны',
        image: './static/img/валет бубны.svg',
    },
    {
        name: 'валет крести',
        image: './static/img/валет крести.svg',
    },
    {
        name: 'валет пики',
        image: './static/img/валет пики.svg',
    },
    {
        name: 'валет черви',
        image: './static/img/валет черви.svg',
    },
    {
        name: 'дама бубны',
        image: './static/img/дама бубны.svg',
    },
    {
        name: 'дама крести',
        image: './static/img/дама крести.svg',
    },
    {
        name: 'дама пики',
        image: './static/img/дама пики.svg',
    },
    {
        name: 'дама черви',
        image: './static/img/дама черви.svg',
    },
    {
        name: 'король бубны',
        image: './static/img/король бубны.svg',
    },
    {
        name: 'король крести',
        image: './static/img/король крести.svg',
    },
    {
        name: 'король пики',
        image: './static/img/король пики.svg',
    },
    {
        name: 'король черви',
        image: './static/img/король черви.svg',
    },
    {
        name: 'туз бубны',
        image: './static/img/туз бубны.svg',
    },
    {
        name: 'туз крести',
        image: './static/img/туз крести.svg',
    },
    {
        name: 'туз пики',
        image: './static/img/туз пики.svg',
    },
    {
        name: 'туз черви',
        image: './static/img/туз черви.svg',
    },
];

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

let chosenLevelNumber;
const shuffledDeck = shuffle(CARDS);
let playCardsArr = [];

// Экран выбора уровня
chooseLevelStage.forEach((element) => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.chosen-level').forEach((element) => {
            element.classList.remove('chosen-level');
        });
        chosenLevelNumber = Number(element.textContent);
        element.classList.toggle('chosen-level');
    });
});

// Генерим карточки и выводим
function cardsScreen(chosenLevelNumber) {
    switch (chosenLevelNumber) {
        case 1:
            for (let i = 0; i < 3; i++) {
                let randomCards = Math.floor(
                    Math.random() * shuffledDeck.length
                );
                if (playCardsArr.includes(randomCards)) {
                    let i = i - 1;
                } else {
                    playCardsArr.push(shuffledDeck[randomCards]);
                }
            }
            shuffle(playCardsArr);
            return playCardsArr;
        case 2:
            for (let i = 0; i < 6; i++) {
                let randomCards = Math.floor(
                    Math.random() * shuffledDeck.length
                );
                if (playCardsArr.includes(randomCards)) {
                    let i = i - 1;
                } else {
                    playCardsArr.push(shuffledDeck[randomCards]);
                }
            }
            shuffle(playCardsArr);
            return playCardsArr;
        case 3:
            for (let i = 0; i < 9; i++) {
                let randomCards = Math.floor(
                    Math.random() * shuffledDeck.length
                );
                if (playCardsArr.includes(randomCards)) {
                    let i = i - 1;
                } else {
                    playCardsArr.push(shuffledDeck[randomCards]);
                }
            }
            shuffle(playCardsArr);
            return playCardsArr;
        default:
            alert('Что-то пошло не так');
    }
}

chooseLevelbutton.addEventListener('click', function () {
    cardsScreen(chosenLevelNumber);
    contentScreen1.style.display = 'none';
    contentScreen2.style.display = 'flex';
    playCardsArr = playCardsArr.concat(playCardsArr);
    shuffle(playCardsArr);
    for (let i = 0; i < playCardsArr.length; i++) {
        const element = playCardsArr[i];
        const card = document.createElement('img');
        card.src = element.image;
        card.classList.add('card-image');
        if (i < playCardsArr.length / 2) {
            row1.appendChild(card);
        } else {
            row2.appendChild(card);
        }
    }
    const gameCardsFront = document.querySelectorAll('.card-image');

    setTimeout(() => {
        gameCardsFront.forEach((element) => {
            element.src = './static/img/рубашка.svg';
        });
    }, 5000);

    gameCardsFront.forEach(function (gameCard, i) {
        gameCard.addEventListener('click', function () {
            let activeCardsFront = document.querySelectorAll('.active');
            if (activeCardsFront.length < 2) {
                gameCard.src = playCardsArr[i].image;
                gameCard.classList.add('active');
                activeCardsFront = document.querySelectorAll('.active');
                if (
                    activeCardsFront.length === 2 &&
                    activeCardsFront[0].src === activeCardsFront[1].src
                ) {
                    setTimeout(() => {
                        alert('Вы выиграли');
                    }, 300);
                } else if (
                    activeCardsFront.length === 2 &&
                    activeCardsFront[0].src !== activeCardsFront[1].src
                ) {
                    setTimeout(() => {
                        alert('Вы проиграли');
                    }, 300);
                }
            } else {
                activeCardsFront.forEach((element) => {
                    element.classList.remove('active');
                    element.src = './src/static/img/рубашка.svg';
                });
            }
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map