let fields = Array.from(document.getElementsByClassName('cell'));
let usedFields = [];
let nowPlayer = 'dagger';
let isClicked = false;
const winFields = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [6,4,2],
    [0,4,8],

];

function playerNumberOne(event) {
    let clickField = event.target;
    let clickFieldIndex = fields.indexOf(clickField);

    if (usedFields.includes(clickFieldIndex)) {
        console.log('clicked');
    }
    else {
        usedFields.push(clickFieldIndex);
        console.log(`userFields: ${usedFields}`);
        clickField.innerHTML = 'O';
        clickField.classList.add('dagger');
        nowPlayer = 'dagger';   
    }   checkPlayerStep();      
}


function playerNumberTwo(event) {
    let clickField = event.target;
    let clickFieldIndex = fields.indexOf(clickField);

    if (usedFields.includes(clickFieldIndex)) {
        console.log('clicked');

    }
    else {
        usedFields.push(clickFieldIndex);
        console.log(`userFields2: ${usedFields}`);
        clickField.innerHTML = '&times;';
        clickField.classList.add('dagger');
        nowPlayer = 'zero';
        checkPlayerStep();
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