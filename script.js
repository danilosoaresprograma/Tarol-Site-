function scrollToSection() {
  document.getElementById("tiragem").scrollIntoView({
    behavior: "smooth"
  });
}

function flipCard() {
  document.getElementById("card").classList.toggle("flip");
}

function enviarPergunta() {
  const pergunta = document.getElementById("pergunta").value;

  if (pergunta.trim() === "") {
    alert("Digite uma pergunta.");
    return;
  }

  alert("Envie sua pergunta no Instagram @by.mabbi");
  window.open("https://instagram.com/direct/new/", "_blank");
}

/* ANIMAÇÃO AO SCROLL */
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
