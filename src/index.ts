import './css/style.css';
// import * as _ from 'lodash';

const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');
const contentScreen1: HTMLImageElement =
    document.querySelector('.content-screen-1');
const contentScreen2: HTMLImageElement =
    document.querySelector('.content-screen-2');
const row1 = document.querySelector('.row-1');
const row2 = document.querySelector('.row-2');
const timer = document.querySelector('.info-time-tracker');
const gameStartAgainButton = document.querySelector('.game-start-again-button');

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

function shuffle(array: any[]) {
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
let timerCount: string | number | NodeJS.Timeout | undefined;
let chosenLevelNumber: number;
const shuffledDeck = shuffle(CARDS);
let playCardsArr: any[] = [];
let minutes: Number | string = 0;
let seconds: Number | string = 0;

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
function cardsScreen(chosenLevelNumber: number) {
    switch (chosenLevelNumber) {
        case 1:
            for (let i: number = 0; i < 3; i++) {
                let randomCards = Math.floor(
                    Math.random() * shuffledDeck.length
                );
                if (playCardsArr.includes(randomCards)) {
                    i = i - 1;
                } else {
                    playCardsArr.push(shuffledDeck[randomCards]);
                }
            }
            shuffle(playCardsArr);
            return playCardsArr;
        case 2:
            for (let i: number = 0; i < 6; i++) {
                let randomCards = Math.floor(
                    Math.random() * shuffledDeck.length
                );
                if (playCardsArr.includes(randomCards)) {
                    i = i - 1;
                } else {
                    playCardsArr.push(shuffledDeck[randomCards]);
                }
            }
            shuffle(playCardsArr);
            return playCardsArr;
        case 3:
            for (let i: number = 0; i < 9; i++) {
                let randomCards = Math.floor(
                    Math.random() * shuffledDeck.length
                );
                if (playCardsArr.includes(randomCards)) {
                    i = i - 1;
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
        } else {
            row2.appendChild(card);
        }
    }
    const gameCards = document.querySelectorAll('.card-image');
    gameCards.forEach((element) => {
        element.classList.add('closed');
    });
    let gameCardsClosed = document.querySelectorAll('.closed');
    let gameCardsFront: NodeListOf<HTMLImageElement> =
        document.querySelectorAll('.active');

    setTimeout(() => {
        gameCards.forEach((element: HTMLImageElement) => {
            element.classList.add('closed');
            element.src = './static/img/cover.svg';
        });
        minutes === 0;
        seconds === 0;
        let min = 0;
        let sec = 0;
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

    gameCardsClosed.forEach(function clicks(gameCard: HTMLImageElement, i) {
        gameCard.addEventListener('click', function () {
            gameCardsFront = document.querySelectorAll('.active');
            // Если выбрана одна карта
            if (gameCardsFront.length < 2) {
                gameCard.src = playCardsArr[i].image;
                gameCard.classList.add('active');
                gameCard.classList.remove('closed');
            }
            // Если выбрано две карты
            if (gameCardsFront.length === 2) {
                gameCard.src = playCardsArr[i].image;
                if (gameCardsFront[0].src === gameCardsFront[1].src) {
                    gameCardsFront = document.querySelectorAll('.active');
                    gameCardsFront.forEach((element) => {
                        element.classList.remove('active');
                        element.classList.remove('closed');
                        gameCardsClosed = document.querySelectorAll('.closed');
                    });
                } else {
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

    function finalScreen() {
        gameCardsFront = document.querySelectorAll('.active');
        gameCardsClosed = document.querySelectorAll('.closed');
        gameCards.forEach((element) => {
            if (
                !element.classList.contains('active') &&
                !element.classList.contains('closed')
            ) {
                clearTimeout(timerCount);
                console.log(timer.innerHTML);
            } else {
                console.log('object');
            }
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
