const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');
const chosenLevelNumberParagraph = document.querySelector('.your-level');
const contentScreen1 = document.querySelector('.content');
const contentScreen2 = document.querySelector('.content-screen-2');

let chosenLevelNumber;

chooseLevelStage.forEach((element) => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.chosenLevel').forEach((element) => {
            element.classList.remove('chosenLevel');
        });
        chosenLevelNumber = element.textContent;
        element.classList.toggle('chosenLevel');
    });
});

chooseLevelbutton.addEventListener('click', function () {
    contentScreen1.style.display = 'none';
    contentScreen2.style.display = 'flex';
    chosenLevelNumberParagraph.innerHTML = `Вы выбрали уровень: ${chosenLevelNumber}`;
});
