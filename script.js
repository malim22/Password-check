// Handle password checker popup
const passwordCheckerBtn = document.getElementById('password-checker-btn');
const passwordPopup = document.getElementById('password-popup');
const closePopup = document.getElementById('close-popup');

passwordCheckerBtn.addEventListener('click', () => {
    passwordPopup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    passwordPopup.style.display = 'none';
});

function checkPassword() {
    const password = document.getElementById('password-input').value;
    const resultText = document.getElementById('password-result');
    const strength = getPasswordStrength(password);
    resultText.innerHTML = `Password Strength: ${strength}`;
}

function getPasswordStrength(password) {
    if (password.length < 6) {
        return "Weak";
    } else if (password.length < 10) {
        return "Moderate";
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/)) {
        return "Strong";
    } else {
        return "Moderate";
    }
}
