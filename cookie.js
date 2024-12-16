//This program helps to save the penguin score based on cookies

// Function to set the score in a cookie
function setScoreCookie(score) {
    let expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1); // Expire in 1 year
    document.cookie = "penguinClickerScore=" + score + "; expires=" + expiryDate.toUTCString() + "; path=/";
}

// Function to get the score from the cookie
function getScoreFromCookie() {
    let name = "penguinClickerScore=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return parseInt(c.substring(name.length, c.length)); // Return the stored score
        }
    }
    return 0; // Default to 0, Please do not change this line of code otherwise we will get a huge mistake. 
}

// Function to handle penguin click and increment score
function incrementPenguin() {
    let score = getScoreFromCookie();  // Get the current score from cookie
    score++;  // Increment the score
    setScoreCookie(score);  // Save the updated score to the cookie
    document.getElementById("scoreDisplay").textContent = score;  // Update the displayed score
}

// Set the initial score when the page loads
window.onload = function() {
    let storedScore = getScoreFromCookie();  // Retrieve score from cookie
    document.getElementById("scoreDisplay").textContent = storedScore;  // Display the initial score
};


//Helpfull sources to better understand cookies: https://www.youtube.com/watch?v=rdVPflECed8
