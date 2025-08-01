// Mostrar carta
document.getElementById("openHeartBtn").addEventListener("click", () => {
  document.querySelector(".front").classList.add("hidden");
  const loveLetter = document.getElementById("loveLetter");
  loveLetter.classList.remove("hidden");
  loveLetter.style.display = "block";
  loveLetter.classList.add("fade-in");
});

// Volver a portada
document.getElementById("closeHeartBtn").addEventListener("click", () => {
  const loveLetter = document.getElementById("loveLetter");
  loveLetter.classList.add("hidden");
  loveLetter.style.display = "none";
  document.querySelector(".front").classList.remove("hidden");
});

// Corazones flotantes
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  const size = 10 + Math.random() * 20;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  const duration = 4 + Math.random() * 4;
  heart.style.animationDuration = `${duration}s`;
  document.getElementById("heartsContainer").appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 300);

// Máquina de escribir
const text = "Nos encontramos sin buscar y nos elegimos sin dudar.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Activación de música por botón
document.getElementById('startMusicBtn').addEventListener('click', () => {
  const audio = document.getElementById('backgroundMusic');
  audio.volume = 0.7;
  audio.play().then(() => {
    document.getElementById('audioOverlay').style.display = 'none';
  }).catch(err => {
    alert("Toca de nuevo para activar el sonido ❤️");
  });
});
