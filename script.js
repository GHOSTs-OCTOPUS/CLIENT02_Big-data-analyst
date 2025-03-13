// Countdown logic
const countdownDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "The wait is over!";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
