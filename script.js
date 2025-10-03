// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Digital Clock Update
function updateClock() {
  const now = new Date();

  // Digital Clock
  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');
  document.getElementById("digitalClock").textContent = `${hours}:${minutes}:${seconds}`;

  // Analog Clock
  const hourDeg = ((now.getHours() % 12) / 12) * 360 + ((now.getMinutes()/60)*30);
  const minuteDeg = (now.getMinutes() / 60) * 360;
  const secondDeg = (now.getSeconds() / 60) * 360;

  document.getElementById("hourHand").style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById("minuteHand").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("secondHand").style.transform = `rotate(${secondDeg}deg)`;
}

// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);
