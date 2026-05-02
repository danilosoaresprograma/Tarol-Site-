function scrollToSection() {
  document.getElementById("tiragem").scrollIntoView({
    behavior: "smooth"
  });
}

function flipCard() {
  const card = document.getElementById("mainCard");
  card.classList.toggle("flip");
}

/* ANIMAÇÃO SCROLL */
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

/* ENVIO */
function enviarPergunta() {
  const pergunta = document.getElementById("pergunta").value;

  if (pergunta.trim() === "") {
    alert("Digite sua pergunta.");
    return;
  }

  alert("Agora envie sua pergunta no Instagram @by.mabbi");
  window.open("https://instagram.com/direct/new/", "_blank");
}
