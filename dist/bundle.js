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
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
// import * as _ from 'lodash';
const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');
const contentScreen1 = document.querySelector('.content-screen-1');
const contentScreen2 = document.querySelector('.content-screen-2');
const row1 = document.querySelector('.row-1');
const row2 = document.querySelector('.row-2');
const timer = document.querySelector('.info-time-tracker');
const gameStartAgainButton = document.querySelector('.game-start-again-button');
const gameStartAgainButtonFinal = document.querySelector('.game-start-again-button-final');
const finalTime = document.querySelector('.final-time');
// Глобальные переменные
const CARDS = [
    {
        name: '6diamonds',
        image: './static/img/6diamonds.svg',
    },
    {
        name: '6clubs',
        image: './static/img/6clubs.svg',
    },
    {
        name: '6spades',
        image: './static/img/6spades.svg',
    },
    {
        name: '6hearts',
        image: './static/img/6hearts.svg',
    },
    {
        name: '7diamonds',
        image: './static/img/7diamonds.svg',
    },
    {
        name: '7clubs',
        image: './static/img/7clubs.svg',
    },
    {
        name: '7spades',
        image: './static/img/7spades.svg',
    },
    {
        name: '7hearts',
        image: './static/img/7hearts.svg',
    },
    {
        name: '8diamonds',
        image: './static/img/8diamonds.svg',
    },
    {
        name: '8clubs',
        image: './static/img/8clubs.svg',
    },
    {
        name: '8spades',
        image: './static/img/8spades.svg',
    },
    {
        name: '8hearts',
        image: './static/img/8hearts.svg',
    },
    {
        name: '9diamonds',
        image: './static/img/9diamonds.svg',
    },
    {
        name: '9clubs',
        image: './static/img/9clubs.svg',
    },
    {
        name: '9spades',
        image: './static/img/9spades.svg',
    },
    {
        name: '9hearts',
        image: './static/img/9hearts.svg',
    },
    {
        name: '10diamonds',
        image: './static/img/10diamonds.svg',
    },
    {
        name: '10clubs',
        image: './static/img/10clubs.svg',
    },
    {
        name: '10spades',
        image: './static/img/10spades.svg',
    },
    {
        name: '10hearts',
        image: './static/img/10hearts.svg',
    },
    {
        name: 'jackofdiamonds',
        image: './static/img/jackofdiamonds.svg',
    },
    {
        name: 'jackofclubs',
        image: './static/img/jackofclubs.svg',
    },
    {
        name: 'jackofspades',
        image: './static/img/jackofspades.svg',
    },
    {
        name: 'jackofhearts',
        image: './static/img/jackofhearts.svg',
    },
    {
        name: 'queenofdiamonds',
        image: './static/img/queenofdiamonds.svg',
    },
    {
        name: 'queenofclubs',
        image: './static/img/queenofclubs.svg',
    },
    {
        name: 'queenofspades',
        image: './static/img/queenofspades.svg',
    },
    {
        name: 'queenofhearts',
        image: './static/img/queenofhearts.svg',
    },
    {
        name: 'kingofdiamonds',
        image: './static/img/kingofdiamonds.svg',
    },
    {
        name: 'kingofclubs',
        image: './static/img/kingofclubs.svg',
    },
    {
        name: 'kingofspades',
        image: './static/img/kingofspades.svg',
    },
    {
        name: 'kingofhearts',
        image: './static/img/kingofhearts.svg',
    },
    {
        name: 'aceofdiamonds',
        image: './static/img/aceofdiamonds.svg',
    },
    {
        name: 'aceofclubs',
        image: './static/img/aceofclubs.svg',
    },
    {
        name: 'aceofspades',
        image: './static/img/aceofspades.svg',
    },
    {
        name: 'aceofhearts',
        image: './static/img/aceofhearts.svg',
    },
];
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
let timerCount;
let chosenLevelNumber;
const shuffledDeck = shuffle(CARDS);
let playCardsArr = [];
let minutes = 0;
let seconds = 0;
let min = 0;
let sec = 0;
// Экран выбора уровня
function chooseLevelscreen() {
    chooseLevelStage.forEach((element) => {
        element.addEventListener('click', function () {
            document.querySelectorAll('.chosen-level').forEach((element) => {
                element.classList.remove('chosen-level');
            });
            chosenLevelNumber = Number(element.textContent);
            element.classList.toggle('chosen-level');
        });
    });
}
chooseLevelscreen();
// Генерим карточки и выводим
function cardsScreen(chosenLevelNumber) {
    switch (chosenLevelNumber) {
        case 1:
            for (let i = 0; i < 3; i++) {
                let randomCards = Math.floor(Math.random() * shuffledDeck.length);
                if (playCardsArr.includes(randomCards)) {
                    i = i - 1;
                }
                else {
                    playCardsArr.push(shuffledDeck[randomCards]);
                }
            }
            shuffle(playCardsArr);
            return playCardsArr;
        case 2:
            for (let i = 0; i < 6; i++) {
                let randomCards = Math.floor(Math.random() * shuffledDeck.length);
                if (playCardsArr.includes(randomCards)) {
                    i = i - 1;
                }
                else {
                    playCardsArr.push(shuffledDeck[randomCards]);
                }
            }
            shuffle(playCardsArr);
            return playCardsArr;
        case 3:
            for (let i = 0; i < 9; i++) {
                let randomCards = Math.floor(Math.random() * shuffledDeck.length);
                if (playCardsArr.includes(randomCards)) {
                    i = i - 1;
                }
                else {
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
    playCardsArr = [];
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
        }
        else {
            row2.appendChild(card);
        }
    }
    const gameCards = document.querySelectorAll('.card-image');
    gameCards.forEach((element) => {
        element.classList.add('closed');
    });
    let gameCardsClosed = document.querySelectorAll('.closed');
    let gameCardsFront = document.querySelectorAll('.active');
    setTimeout(() => {
        gameCards.forEach((element) => {
            element.classList.add('closed');
            element.src = './static/img/cover.svg';
        });
        minutes === 0;
        seconds === 0;
        min = 0;
        sec = 0;
        timerCount = setInterval(function () {
            sec = sec + 1;
            if (sec < 10) {
                seconds = '0' + sec;
            }
            if (sec >= 10) {
                seconds = sec;
            }
            if (sec > 58) {
                sec = 0;
                min = min + 1;
            }
            if (min < 10) {
                minutes = '0' + min;
            }
            if (min >= 10) {
                minutes = min;
            }
            timer.innerHTML = minutes + '.' + seconds;
        }, 1000);
    }, 5000);
    gameCardsClosed.forEach(function (gameCard, i) {
        gameCard.addEventListener('click', function clicks() {
            if (gameCard.classList.contains('active')) {
                removeEventListener('click', clicks, {
                    capture: true,
                });
            }
            gameCardsFront = document.querySelectorAll('.active');
            // Если выбрана одна карта
            if (gameCardsFront.length < 2) {
                gameCard.src = playCardsArr[i].image;
                gameCard.classList.add('active');
                gameCard.classList.remove('closed');
                gameCardsFront = document.querySelectorAll('.active');
            }
            // Если выбрано две карты
            if (gameCardsFront.length === 2) {
                gameCard.src = playCardsArr[i].image;
                if (gameCardsFront[0].src === gameCardsFront[1].src) {
                    gameCardsFront = document.querySelectorAll('.active');
                    gameCardsFront.forEach((element) => {
                        element.classList.add('guessed');
                        element.classList.remove('active');
                        element.classList.remove('closed');
                        gameCardsClosed = document.querySelectorAll('.closed');
                    });
                    if (document.querySelectorAll('.guessed').length ===
                        document.querySelectorAll('.card-image').length) {
                        clearTimeout(timerCount);
                        finalScreen(min, sec);
                    }
                }
                else {
                    gameCardsFront = document.querySelectorAll('.active');
                    gameCardsClosed = document.querySelectorAll('.closed');
                    gameCardsFront.forEach((element) => {
                        gameCard.src = playCardsArr[i].image;
                        element.classList.remove('active');
                        element.classList.add('closed');
                        gameCardsClosed = document.querySelectorAll('.closed');
                        setTimeout(() => {
                            element.src = './static/img/cover.svg';
                        }, 600);
                    });
                }
            }
        });
    });
    function finalScreen(min, sec) {
        const contentScreen3 = document.querySelector('.content-screen-3');
        if (sec < 10) {
            seconds = '0' + sec;
        }
        if (sec >= 10) {
            seconds = sec;
        }
        if (min < 10) {
            minutes = '0' + min;
        }
        if (min >= 10) {
            minutes = min;
        }
        finalTime.innerHTML = minutes + '.' + seconds;
        contentScreen3.style.display = 'flex';
        contentScreen2.style.display = 'none';
        gameStartAgainButtonFinal.addEventListener('click', function () {
            clearTimeout(timerCount);
            contentScreen3.style.display = 'none';
            playCardsArr = [];
            while (row1.firstChild) {
                row1.removeChild(row1.firstChild);
            }
            while (row2.firstChild) {
                row2.removeChild(row2.firstChild);
            }
            timer.innerHTML = '00.00';
            contentScreen1.style.display = 'flex';
            document.querySelectorAll('.chosen-level').forEach((element) => {
                element.classList.remove('chosen-level');
            });
            contentScreen2.style.display = 'none';
        });
    }
    gameStartAgainButton.addEventListener('click', function () {
        clearTimeout(timerCount);
        playCardsArr = [];
        while (row1.firstChild) {
            row1.removeChild(row1.firstChild);
        }
        while (row2.firstChild) {
            row2.removeChild(row2.firstChild);
        }
        timer.innerHTML = '00.00';
        contentScreen1.style.display = 'flex';
        document.querySelectorAll('.chosen-level').forEach((element) => {
            element.classList.remove('chosen-level');
        });
        contentScreen2.style.display = 'none';
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map