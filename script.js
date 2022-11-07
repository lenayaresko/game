const chooseLevelParent = document.querySelector('.choose-level-number-box');
const chooseLevelStage = document.querySelectorAll('.choose-level-number');
const chooseLevelbutton = document.querySelector('.choose-level-button');

let chosenLevelNumber;


chooseLevelParent.addEventListener('click', function (event) {
    console.log(event.target);

});

// chooseLevelStage.forEach(element => {
//     element.addEventListener("click", function (event) {
//         console.log(chooseLevelParent.children);
//         // for (let i = 0; i < chooseLevelParent.children.length; i++) {
//         //     element.classList.remove('chosenLevel')
//         // }
//         chosenLevelNumber = element.textContent;
//         element.classList.toggle('chosenLevel');
//     });
// });


chooseLevelbutton.addEventListener('click', function (event) {
    console.log(chosenLevelNumber);
    window.location.href = './game.html';

});