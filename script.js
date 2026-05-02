function irParaTiragem() {
  document.getElementById("tiragem").scrollIntoView({
    behavior: "smooth"
  });
}

function virarCarta() {
  const card = document.getElementById("card");
  card.classList.toggle("flip");
}

function enviarPergunta() {
  const pergunta = document.getElementById("pergunta").value;

  if (pergunta.trim() === "") {
    alert("Digite sua pergunta.");
    return;
  }

  alert("Agora envie sua pergunta no Instagram @by.mabbi");

  window.open("https://instagram.com/direct/new/", "_blank");
}
