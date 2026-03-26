const pet = document.getElementById("pet");
const statusTexto = document.getElementById("status");
const toggle = document.getElementById("modoNoite");

// imagens
const img = {
  normal: "cria_norm.png",
  fome: "cria_puto.png",
  feliz: "cria_feliz.png",
  comendo: "cria_eat.png",
  morto: "cria_morto.png"
};

// fundo
const fundo = {
  dia: "background.png",
  noite: "background_noite.png"
};

// estado
let fome = 0;
let vivo = true;

// iniciar fundo
document.body.style.backgroundImage = `url('${fundo.dia}')`;

// alimentar
function alimentar() {
  if (!vivo) {
    alert("Ele morreu 😢");
    return;
  }

  fome = 0;
  pet.src = img.comendo;
  statusTexto.innerText = "Estado: Comendo...";

  setTimeout(() => {
    pet.src = img.feliz;
    statusTexto.innerText = "Estado: Feliz!";
  }, 1000);

  setTimeout(() => {
    pet.src = img.normal;
    statusTexto.innerText = "Estado: Normal";
  }, 2500);
}

// fome automática
setInterval(() => {
  if (!vivo) return;

  fome++;

  if (fome > 10) {
    vivo = false;
    pet.src = img.morto;
    statusTexto.innerText = "Estado: MORTO 💀";
  } 
  else if (fome > 5) {
    pet.src = img.fome;
    statusTexto.innerText = "Estado: COM FOME!";
  }

}, 3000);

// modo noite manual
function trocarModo() {
  if (toggle.checked) {
    document.body.style.backgroundImage = `url('${fundo.noite}')`;
  } else {
    document.body.style.backgroundImage = `url('${fundo.dia}')`;
  }
}