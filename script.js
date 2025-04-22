const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const passwordOutput = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+=-`~[]\{}|;\':",./<>?';

function generatePassword() {
    const length = parseInt(lengthInput.value);
    let allowedChars = '';
    let password = '';

    if (uppercaseInput.checked) allowedChars += uppercaseChars;
    if (lowercaseInput.checked) allowedChars += lowercaseChars;
    if (numbersInput.checked) allowedChars += numberChars;
    if (symbolsInput.checked) allowedChars += symbolChars;

    if (allowedChars.length === 0) {
        passwordOutput.value = 'Select at least one option';
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomIndex);
    }

    passwordOutput.value = password;
}

function copyPassword() {
    const password = passwordOutput.value;
    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('Password copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    } else {
        alert('No password to copy!');
    }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);