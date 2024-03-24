const btnClear = document.querySelector('#btn-clear');
const btnEncrypt = document.querySelector('#btn-encrypt');
const btnDecrypt = document.querySelector('#btn-decrypt');
const key = document.querySelector('#key');
const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let newText = '';

function encryptText() {
    btnEncrypt.addEventListener('click', () => {
        const textarea = document.querySelector('#text');
        const keyValue = Number(key.value);

        for (let letter of textarea.value) {
            letter = letter.toLowerCase();
            if(!listLetters.includes(letter)) {
                continue
            }

            const indexOfLetter = listLetters.findIndex((item) => item === letter);
            let indexNewLetter = indexOfLetter + keyValue;

            if(indexNewLetter > 25) {
                indexNewLetter -= 26;
            }

            newText += listLetters[indexNewLetter];
            textarea.value = newText;
        }
        newText = '';
    });
};

function decryptText() {
    btnDecrypt.addEventListener('click', () => {
        const textarea = document.querySelector('#text');
        const keyValue = Number(key.value);

        for (let letter of textarea.value) {
            letter = letter.toLowerCase();
            if(!listLetters.includes(letter)) {
                continue
            }

            const indexOfLetter = listLetters.findIndex((item) => item === letter);
            let indexNewLetter = indexOfLetter - keyValue;

            if(indexNewLetter < 0) {
                indexNewLetter += 26;
            }

            newText += listLetters[indexNewLetter];
            textarea.value = newText;
        }
        newText = '';
    });
};

function clearTextArea() {
    btnClear.addEventListener('click', () => {
        document.getElementById('text').value='';
    });
};