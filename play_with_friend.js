let fields = Array.from(document.getElementsByClassName('cell'));
let usedFields = [];
let zerosFields = [];
let daggersFields = [];
let nowPlayer = 'dagger';

const winFields = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner(playerFields, player) {
    for(let i of winFields) {
        if(i.every((elem) => playerFields.includes(elem))) {
            alert(`Виграли ${player}!`);
            window.location.href = 'index.html';
        }
    }
}

function playerNumberOne(event) {
    let clickField = event.target;
    let clickFieldIndex = fields.indexOf(clickField);

    if (usedFields.includes(clickFieldIndex)) {
        console.log('clicked');
    }
    else {
        usedFields.push(clickFieldIndex);
        zerosFields.push(clickFieldIndex);
        clickField.innerHTML = 'O';
        clickField.classList.add('dagger');
        nowPlayer = 'dagger';
        checkPlayerStep();
        checkWinner(zerosFields, 'O');
    }
}


function playerNumberTwo(event) {
    let clickField = event.target;
    let clickFieldIndex = fields.indexOf(clickField);

    if (usedFields.includes(clickFieldIndex)) {
        console.log('clicked');
    }
    else {
        usedFields.push(clickFieldIndex);
        daggersFields.push(clickFieldIndex);
        clickField.innerHTML = '&times;';
        clickField.classList.add('dagger');
        nowPlayer = 'zero';
        checkPlayerStep();
        checkWinner(daggersFields, 'X');
    }
}

function checkPlayerStep() {
    if(nowPlayer === 'dagger') {
        fields.forEach(field => {
            field.removeEventListener('click', playerNumberOne);
            field.addEventListener('click', playerNumberTwo);
        });
    }
    if(nowPlayer === 'zero'){
        fields.forEach(field => {
            field.removeEventListener('click', playerNumberTwo);
            field.addEventListener('click', playerNumberOne);
        });
    }
}
checkPlayerStep()
