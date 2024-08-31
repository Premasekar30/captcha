// Function to generate a random CAPTCHA string
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Function to verify the CAPTCHA input
function verifyCaptcha(input, captcha) {
    if (input === captcha) {
        alert('CAPTCHA Verified Successfully!');
    } else {
        alert('CAPTCHA Verification Failed. Please try again.');
    }
}

// Initial CAPTCHA generation
const captchaElement = document.getElementById('captcha');
let currentCaptcha = generateCaptcha();
captchaElement.innerText = currentCaptcha;

// Verification button click event
document.getElementById('verify-btn').addEventListener('click', () => {
    const input = document.getElementById('captcha-input').value;
    verifyCaptcha(input, currentCaptcha);
    // Optionally regenerate CAPTCHA after each attempt
    currentCaptcha = generateCaptcha();
    captchaElement.innerText = currentCaptcha;
});
