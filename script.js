const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressBar = document.getElementById("progress-bar");
const friendMsg = document.getElementById("friendMsg");
const stickerImages = document.querySelectorAll(".sticker-img");

// 💖 CUSTOMIZE THE WISHES AND QUESTIONS HERE 💖
// "wish": The message shown at the top (from a friend/family member)
// "question": The question she has to answer about herself
const quizData = [
    {
        wish: "Happy Birthday my love! Mom loves you so much ❤️",
        question: "What is my absolute favorite food? 🍕",
        options: ["Pizza", "Sushi", "Home-cooked Dal", "Pasta"],
        answer: "Pizza" 
    },
    {
        wish: "Wishing you the craziest year ahead! - Bestie 🤪",
        question: "Which place do I dream of visiting? ✈️",
        options: ["Paris", "Bali", "New York", "Maldives"],
        answer: "Paris"
    },
    {
        wish: "Stay stylish and beautiful always! 💃",
        question: "What is my go-to mood lifter? 🎵",
        options: ["Shopping", "Music", "Sleeping", "Ice Cream"],
        answer: "Music"
    },
    {
        wish: "Hope all your dreams come true! ✨",
        question: "What is my zodiac sign? ✨",
        options: ["Leo", "Virgo", "Libra", "Scorpio"],
        answer: "Virgo" 
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    // 1. Reset Image to Default
    updateImages("assets/her-default.png");

    const currentQuiz = quizData[currentQuestion];
    
    // 2. Update Progress Bar
    const progressPercent = ((currentQuestion) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // 3. Load Wish and Question
    friendMsg.innerText = currentQuiz.wish; // Display the specific wish
    questionEl.innerText = currentQuiz.question;
    optionsEl.innerHTML = "";

    // 4. Create Buttons
    currentQuiz.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        
        // Animation delay for smooth effect
        btn.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
        
        btn.onclick = () => checkAnswer(option, btn);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    const correctAnswer = quizData[currentQuestion].answer;
    const allBtns = optionsEl.querySelectorAll(".option-btn");
    
    // Disable buttons
    allBtns.forEach(b => b.disabled = true);

    if(selected === correctAnswer) {
        // ✅ CORRECT: Show Happy Image & Celebration Msg
        updateImages("assets/her-happy.png");
        btn.classList.add("correct");
        score++;
        friendMsg.innerText = "Yay! You know yourself well! 😂";
    } else {
        // ❌ WRONG: Show Wrong Image
        updateImages("assets/her-wrong.png");
        btn.classList.add("wrong");
        friendMsg.innerText = "Oops! Did you forget? 🙈";
        
        allBtns.forEach(b => {
            if(b.innerText === correctAnswer) b.classList.add("correct");
        });
    }

    // Delay before next question
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }, 2000); // 2 seconds to read the feedback
}

function showResults() {
    progressBar.style.width = "100%";
    
    // Final Result Card
    document.querySelector(".quiz-card").innerHTML = `
        <i class="fas fa-gift icon-header"></i>
        <h2 style="color: #ff6b6b; font-size: 2.2rem;">All Wishes Received! 💌</h2>
        <p style="font-size: 1.3rem; margin-bottom: 30px;">
            We all love you so much! <br>
            Are you ready for your big surprise? 🎁
        </p>
        <button class="option-btn" 
            style="background: #ff6b6b; color: white; width: 100%; font-size: 1.5rem;" 
            onclick="goToSurprise()">
            YES! Show me! ✨
        </button>
    `;
    
    updateImages(""); 
    document.querySelectorAll('.side-img-container').forEach(el => el.style.display = 'none');
}

function updateImages(src) {
    stickerImages.forEach(img => {
        if(src === "") {
            img.style.display = "none";
        } else {
            img.style.display = "block";
            img.src = src;
        }
    });
}

function goToSurprise() {
    window.location.href = "final.html"; 
}

// Start
loadQuiz();