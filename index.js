const btnClear = document.querySelector('#btn-clear');
const btnEncrypt = document.querySelector('#btn-encrypt');
const btnDecrypt = document.querySelector('#btn-decrypt');
const key = document.querySelector('#key');
const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function keyValidation(event) {
    let shiftInput = event.target.value;
    shiftInput = shiftInput.replace(/[^a-zA-Z]/g, '');
    event.target.value = shiftInput;
}
                    
function encryptText() {
    const textarea = document.querySelector('#text');
    const resultArea = document.querySelector('#result');
    const keyValue = Number(key.value);
    let newText = '';

    for (let letter of textarea.value) {
        letter = letter.toLowerCase();
        if (!listLetters.includes(letter)) {
            newText += letter;
            continue;
        }

        const indexOfLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = indexOfLetter + keyValue;

        if (indexNewLetter > 25) {
            indexNewLetter -= 26;
        }

        newText += listLetters[indexNewLetter];
    }

    resultArea.value = newText;
};

function decryptText() {
    const textarea = document.querySelector('#text');
    const resultArea = document.querySelector('#result');
    const keyValue = Number(key.value);
    let newText = '';

    for (let letter of textarea.value) {
        letter = letter.toLowerCase();
        if (!listLetters.includes(letter)) {
            newText += letter;
            continue;
        }

        const indexOfLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = indexOfLetter - keyValue;

        if (indexNewLetter < 0) {
            indexNewLetter += 26;
        }

        newText += listLetters[indexNewLetter];
    }

    resultArea.value = newText;
};

function clearTextArea() {
    document.getElementById('text').value = '';
    document.getElementById('key').value = '';
    document.getElementById('result').value = '';
};
