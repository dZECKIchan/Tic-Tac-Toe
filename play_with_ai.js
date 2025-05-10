let fields = Array.from(document.getElementsByClassName('cell'));
let gridBox = document.getElementById('grid');
let chooseText = document.getElementById('chooseText');
let xButtonChoose = document.getElementById('xChooseButton');
let oButtonChoose = document.getElementById('oChooseButton');

let result = document.createElement('h1');

let usedFields = [];
let robotFields = [];
let userFields = [];
let nowPlayer = ''
let userChoose = '';
let robotChoose = '';

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

gridBox.style.display = 'none';

function checkWinner() {
    for(let i of winFields) {
        if(i.every((elem) => userFields.includes(elem))) {
            result.innerText = `Ви виграли!`;
            result.id = 'result_win';
            document.getElementById('gameContainer').appendChild(result);

            fields.forEach(field => {
                field.removeEventListener('click', User);
            })
        }
        if(i.every((elem) => robotFields.includes(elem))) {
            result.innerText = `Ви програли!`;
            result.id = 'result_lose';
            document.getElementById('gameContainer').appendChild(result);

            fields.forEach(field => {
                field.removeEventListener('click', User);
            })
        }
        if(usedFields.length === 9 && result.id === '') {
            result.innerText = `Нічия`;
            result.id = 'result_draw'
            document.getElementById('gameContainer').appendChild(result);
        }
    }
}

function User(event) {
    let clickField = event.target;
    let clickFieldIndex = fields.indexOf(clickField);

    if (usedFields.includes(clickFieldIndex)) {
        console.log('clicked');
    }
    else {
        usedFields.push(clickFieldIndex);
        userFields.push(clickFieldIndex);
        clickField.innerHTML = `${userChoose}`;
        clickField.classList.add('dagger');
        checkWinner();
        Robot();
    }

}

function Robot() {
    let randomNumber = Math.floor(Math.random() * 9);
    let robotChooseField = fields[randomNumber];
        if (usedFields.includes(randomNumber)) {
            try{
                Robot();
                return;
            }
            catch(e){
                console.log('end');
            }
        }
    else{
        if(userChoose === 'x'){
            robotChooseField.innerHTML = 'O';
        }
        else {
            robotChooseField.innerHTML = 'x';
        }
        robotChooseField.classList.add('dagger');
        robotFields.push(randomNumber);
        usedFields.push(randomNumber);
        fields.forEach(field => {
            field.addEventListener('click', User);
        })
        checkWinner()
    }
}

function startGame(playerChoose) {
    gridBox.style.display = 'grid';
    chooseText.style.display = 'none';
    oButtonChoose.style.display = 'none';
    xButtonChoose.style.display = 'none';
    userChoose = playerChoose;
    fields.forEach(field => {
        if(userChoose === 'o') {
            field.addEventListener('click', User);
            robotChoose = 'x';
            nowPlayer = 'x';
        }
        else {
            field.addEventListener('click', User);
            robotChoose = 'o';
            nowPlayer = 'x';
        }
    })
    if(userChoose === 'o') {
        Robot();
    }
}

xButtonChoose.addEventListener('click', () => startGame('x'));
oButtonChoose.addEventListener('click', () => startGame('o'));