# Birthday Quiz Wishes 🎂

A personalized web application designed to surprise a friend or partner on their birthday. The user must pass a quiz about your relationship or their personal favorites to unlock a final surprise message.

## ⚙️ How It Works (The Logic)

This application follows a strict 3-step validation flow:

1.  **The Entry (`index.html`)**:
    * The user is greeted with a welcome screen and a "Start" button.
    * Clicking the button navigates the user to the `quiz.html` page.

2.  **The Gatekeeper (`quiz.html` & `script.js`)**:
    * This is the core logic layer. The user is presented with a series of input fields (questions).
    * When the user clicks "Submit", the **`script.js`** file triggers.
    * **Validation**: The script grabs the values from the input fields and compares them against hardcoded "correct" answers inside the JavaScript code.
    * **Conditionals**:
        * **If Correct**: The script executes a redirect command (`window.location.href`) to send the browser to `final.html`.
        * **If Incorrect**: The script prevents navigation and alerts the user to try again.

3.  **The Reward (`final.html`)**:
    * This page is only accessible (intended flow) after passing the quiz.
    * It contains the birthday wish, animations, and the photos (`img.png`, `img2.png`).

## 📂 Project Structure

* `index.html` - The landing page.
* `quiz.html` - The interface containing the questions form.
* `final.html` - The celebration page (hidden until the quiz is solved).
* `script.js` - Contains the answer keys and validation logic.
* `style.css` - Handles the visual design, colors, and layout.

## 🚀 Usage & Customization

### 1. Run Locally
Simply double-click `index.html` to open the project in your web browser. No server installation is required.

### 2. Changing the Passwords/Answers
To make this quiz work for *your* specific person, you must update the answer logic:

1.  Open **`script.js`** in a text editor.
2.  Look for the `if` statement checking the values. It will look something like this:
    ```javascript
    if (answer1.value == "their_answer" && answer2.value == "another_answer") {
        // Redirects to final.html
    }
    ```
3.  Replace the strings inside the quotes with the correct answers you want them to type.

### 3. Changing Images
* Replace **`img.png`** and **`img2.png`** in the root folder with your own photos.
* Ensure your new files have the exact same names, or update the `src` attributes in `final.html`.

## 🛠️ Tech Stack
* **HTML5**: Page structure.
* **CSS3**: Styling and responsive layout.
* **JavaScript (DOM)**: Form validation and page routing.

---
*Fork this repository to create your own birthday surprise!*
