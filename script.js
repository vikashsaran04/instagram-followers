// JavaScript for Animating Hero Section on Scroll
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const sectionPos = heroSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;
  
    if (sectionPos < screenPos) {
        heroSection.style.animation = "fadeIn 1.5s forwards";
    }
  });
  
  // Timer Code
  let timeLeft = 30 * 60; // 30 minutes in seconds
  
  function startTimer() {
  const timerElement = document.getElementById("timer");
  
  const timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
  
    // Format time as MM:SS
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerElement.textContent = `${minutes}:${seconds}`;
  
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "00:00";
    }
  
    timeLeft--;
  }, 1000);
  }
  
  // Start the timer when the page loads
  window.onload = function () {
  startTimer();
  countUp(); // Start visitor counter
  };

  
  // Function to open the popup
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
// Function to open the popup
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Function to handle the "Process" button click
function processPayment() {
  const paymentLink = "https://razorpay.me/@onlinepayviki?amount=kXxURMaXFk%2Bmrv%2B9uGrYpg%3D%3D";

  // Redirect the user to the payment link
  window.location.href = paymentLink;
}

// Attach the click event to the "Process" button
document.addEventListener("DOMContentLoaded", function () {
  const processButton = document.querySelector(".process");
  processButton.addEventListener("click", processPayment);
});
  