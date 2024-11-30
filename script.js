// 1. Typewriter Effect for Terminal
const terminalText = "Happy Happy birthday Falak bhaiii Love you 🎉";
let i = 0;
function typeWriter() {
    if (i < terminalText.length) {
        document.getElementById("terminal-text").innerHTML += terminalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// 2. Show Birthday Message
function showBirthdayMessage() {
    alert('Happy Birthday mere HTML ke programmer, Allah apko hamesha khush rakhy abad rakhy hamary sath rakhyy, love you sooo soo much')
}

// 3. Confetti
function triggerConfetti() {
    confetti();
}

// 4. Easter Egg Reveal
function revealEasterEgg() {
    const input = document.getElementById("easter-egg-input").value;
    if (input === "phuddubhai") {
        alert("Congratulations Brooo, Pathani is yours")
    } else {
        alert("Wrong code! Try again!");
    }
}

// 5. Memory Image Wall
function showImageDetails(message) {
    document.getElementById("image-detail").textContent = message;
    document.getElementById("image-detail").classList.remove("hidden");
}

// Run the typewriter effect on load
window.onload = typeWriter;
