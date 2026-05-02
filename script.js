const cartas = [
  {
    nome: "Carta 1",
    texto: "Uma mudança está chegando.",
    imagem: "img/carta1.jpg"
  },
  {
    nome: "Carta 2",
    texto: "Confie na sua intuição.",
    imagem: "img/carta2.jpg"
  },
  {
    nome: "Carta 3",
    texto: "Algo precisa ser encerrado.",
    imagem: "img/carta3.jpg"
  },
  {
    nome: "Carta 4",
    texto: "Uma oportunidade vai surgir.",
    imagem: "img/carta4.jpg"
  },
  {
    nome: "Carta 5",
    texto: "Cuidado com decisões impulsivas.",
    imagem: "img/carta5.jpg"
  },
  {
    nome: "Carta 6",
    texto: "Boas energias estão próximas.",
    imagem: "img/carta6.jpg"
  }
];

function scrollToSection() {
  document.getElementById("tiragem").scrollIntoView({
    behavior: "smooth"
  });
}

function iniciarTiragem() {
  const card = document.getElementById("card");
  const resultado = document.getElementById("resultado");
  const som = document.getElementById("som");

  card.classList.remove("flip");

  resultado.innerHTML = "🔮 Conectando energias...";

  setTimeout(() => {
    resultado.innerHTML = "✨ Revelando...";
  }, 1200);

  setTimeout(() => {
    const carta = cartas[Math.floor(Math.random() * cartas.length)];

    resultado.innerHTML = `
      <img src="${carta.imagem}" class="carta-img">
      <strong>${carta.nome}</strong>
      <p>${carta.texto}</p>
    `;

    card.classList.add("flip");

    som.currentTime = 0;
    som.play();
  }, 2600);
}

/* SCROLL */
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

  window.open("https://instagram.com/direct/new/", "_blank");
}
