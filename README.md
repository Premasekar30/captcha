# CAPTCHA Generator and Verifier

## Overview
This project is a simple CAPTCHA generator and verifier created using HTML, CSS, and JavaScript. The CAPTCHA ensures that the user is human by requiring them to enter the randomly generated characters displayed on the screen. After the user enters the CAPTCHA, the input is verified, and a message is displayed indicating whether the verification was successful or not.

## Features
- **Random CAPTCHA Generation:** A random 6-character string consisting of uppercase, lowercase letters, and numbers is generated.
- **User Verification:** Users must enter the CAPTCHA correctly to pass the verification.
- **Regeneration of CAPTCHA:** After each verification attempt (successful or not), a new CAPTCHA is generated automatically.

## How It Works
1. **HTML:** 
   - Provides the structure of the webpage with a CAPTCHA display, input field, and a verify button.
   
2. **CSS:** 
   - Styles the CAPTCHA box, input field, and verify button to make the interface user-friendly and visually appealing.

3. **JavaScript:** 
   - Generates the random CAPTCHA using a set of alphanumeric characters.
   - Handles the verification of the user’s input against the generated CAPTCHA.
   - Provides feedback to the user through alerts.

## Files Included
- `index.html`: The main HTML file containing the structure of the CAPTCHA verification system.
- `styles.css`: The CSS file for styling the CAPTCHA box, input field, and verify button.
- `script.js`: The JavaScript file that generates the CAPTCHA, handles user input, and verifies the CAPTCHA.

## Usage
1. Open `index.html` in a web browser.
2. A random CAPTCHA will be displayed on the screen.
3. Enter the CAPTCHA in the input field.
4. Click the "Verify" button to check if the entered CAPTCHA matches the displayed CAPTCHA.
5. A pop-up alert will inform you if the CAPTCHA verification was successful or if it failed.
6. The CAPTCHA will refresh after each verification attempt.

## Example
- Initial CAPTCHA Display: `EqFltz`
- User Input: `EqFltz`
- Verification Result: `CAPTCHA Verified Successfully!`
  
## Customization
- **Change CAPTCHA Length:** Modify the `generateCaptcha` function in `script.js` to change the length of the CAPTCHA.
- **Style Modifications:** You can customize the appearance by editing `styles.css`.

## Complexity
- The program runs with a constant time complexity for CAPTCHA generation and verification, making it efficient for most use cases.

## Technologies Used
- **HTML**
- **CSS**
- **JavaScript**


