const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');
const contentScreen1 = document.querySelector('.content-screen-1');
const contentScreen2 = document.querySelector('.content-screen-2');
const row1 = document.querySelector('.row-1');
const row2 = document.querySelector('.row-2');
const row3 = document.querySelector('.row-3');

const CARDS = [
    {
        name: '6 бубны',
        image: './img/6 бубны.svg',
    },
    {
        name: '6 крести',
        image: './img/6 крести.svg',
    },
    {
        name: '6 пики',
        image: './img/6 пики.svg',
    },
    {
        name: '6 черви',
        image: './img/6 черви.svg',
    },
    {
        name: '7 бубны',
        image: './img/7 бубны.svg',
    },
    {
        name: '7 крести',
        image: './img/7 крести.svg',
    },
    {
        name: '7 пики',
        image: './img/7 пики.svg',
    },
    {
        name: '7 черви',
        image: './img/7 черви.svg',
    },
    {
        name: '8 бубны',
        image: './img/8 бубны.svg',
    },
    {
        name: '8 крести',
        image: './img/8 крести.svg',
    },
    {
        name: '8 пики',
        image: './img/8 пики.svg',
    },
    {
        name: '8 черви',
        image: './img/8 черви.svg',
    },
    {
        name: '9 бубны',
        image: './img/9 бубны.svg',
    },
    {
        name: '9 крести',
        image: './img/9 крести.svg',
    },
    {
        name: '9 пики',
        image: './img/9 пики.svg',
    },
    {
        name: '9 черви',
        image: './img/9 черви.svg',
    },
    {
        name: '10 бубны',
        image: './img/10 бубны.svg',
    },
    {
        name: '10 крести',
        image: './img/10 крести.svg',
    },
    {
        name: '10 пики',
        image: './img/10 пики.svg',
    },
    {
        name: '10 черви',
        image: './img/10 черви.svg',
    },
    {
        name: 'валет бубны',
        image: './img/валет бубны.svg',
    },
    {
        name: 'валет крести',
        image: './img/валет крести.svg',
    },
    {
        name: 'валет пики',
        image: './img/валет пики.svg',
    },
    {
        name: 'валет черви',
        image: './img/валет черви.svg',
    },
    {
        name: 'дама бубны',
        image: './img/дама бубны.svg',
    },
    {
        name: 'дама крести',
        image: './img/дама крести.svg',
    },
    {
        name: 'дама пики',
        image: './img/дама пики.svg',
    },
    {
        name: 'дама черви',
        image: './img/дама черви.svg',
    },
    {
        name: 'король бубны',
        image: './img/король бубны.svg',
    },
    {
        name: 'король крести',
        image: './img/король крести.svg',
    },
    {
        name: 'король пики',
        image: './img/король пики.svg',
    },
    {
        name: 'король черви',
        image: './img/король черви.svg',
    },
    {
        name: 'туз бубны',
        image: './img/туз бубны.svg',
    },
    {
        name: 'туз крести',
        image: './img/туз крести.svg',
    },
    {
        name: 'туз пики',
        image: './img/туз пики.svg',
    },
    {
        name: 'туз черви',
        image: './img/туз черви.svg',
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

chooseLevelStage.forEach((element) => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.chosen-level').forEach((element) => {
            element.classList.remove('chosen-level');
        });
        chosenLevelNumber = element.textContent;
        element.classList.toggle('chosen-level');
    });
});

chooseLevelbutton.addEventListener('click', function () {
    const shuffledDeck = shuffle(CARDS);
    let arr = [];
    if (Number(chosenLevelNumber) === 1) {
        for (let i = 0; i < 3; i++) {
            const card = document.createElement('img');
            card.src = './img/рубашка.svg';
            card.classList.add('card-image-back');
            row1.appendChild(card);
            let a = Math.floor(Math.random() * shuffledDeck.length);
            arr.push(shuffledDeck[a]);
        }
        for (let i = 0; i < 3; i++) {
            const card = document.createElement('img');
            card.src = './img/рубашка.svg';
            card.classList.add('card-image-back');
            row2.appendChild(card);
        }

        const gameCards = document.querySelectorAll('.card-image-back');
        gameCards.forEach((element) => {
            element.addEventListener('click', function () {
                Math.floor(Math.random() * shuffledDeck.length);
                element.src = arr[0].image;
                setTimeout(() => {
                    gameCards.forEach((element) => {
                        element.src = './img/рубашка.svg';
                    });
                }, 2500);
            });
        });
    } else if (Number(chosenLevelNumber) === 2) {
        for (let i = 0; i < 6; i++) {
            const card = document.createElement('img');
            card.src = './img/рубашка.svg';
            card.classList.add('card-image-back');
            row1.appendChild(card);
        }
        for (let i = 0; i < 6; i++) {
            const card = document.createElement('img');
            card.src = './img/рубашка.svg';
            card.classList.add('card-image-back');
            row2.appendChild(card);
        }
    } else if (Number(chosenLevelNumber) === 3) {
        for (let i = 0; i < 6; i++) {
            const card = document.createElement('img');
            card.src = './img/рубашка.svg';
            card.classList.add('card-image-back');
            row1.appendChild(card);
        }
        for (let i = 0; i < 6; i++) {
            const card = document.createElement('img');
            card.src = './img/рубашка.svg';
            card.classList.add('card-image-back');
            row2.appendChild(card);
        }
        for (let i = 0; i < 6; i++) {
            const card = document.createElement('img');
            card.src = './img/рубашка.svg';
            card.classList.add('card-image-back');
            row3.appendChild(card);
        }
    }

    contentScreen1.style.display = 'none';
    contentScreen2.style.display = 'flex';

    console.log(chosenLevelNumber);
});
