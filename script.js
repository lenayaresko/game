const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');

let chosenLevel;


chooseLevelStage.forEach(element => {
    element.addEventListener("click", function (event) {
        chosenLevel = element.textContent;
        element.classList.toggle('chosenLevel');
    });
});

chooseLevelbutton.addEventListener('click', function (event) {
    window.location.href = './game.html';
});