const pet = document.getElementById("pet");
const avatar = document.getElementById("avatar");
const statusTexto = document.getElementById("status");
const btn = document.getElementById("btnAlimentar");
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

let fome = 0;
let vivo = true;

// fundo inicial
document.body.style.backgroundImage = `url('${fundo.dia}')`;

// alimentar
function alimentar() {
  if (!vivo) {
    alert("Ele morreu 😢");
    return;
  }

  fome = 0;
  pet.src = img.comendo;
  avatar.src = img.comendo;
  statusTexto.innerText = "Estado: Comendo...";

  setTimeout(() => {
    pet.src = img.feliz;
    avatar.src = img.feliz;
    statusTexto.innerText = "Estado: Feliz!";
  }, 1000);

  setTimeout(() => {
    pet.src = img.normal;
    avatar.src = img.normal;
    statusTexto.innerText = "Estado: Normal";
  }, 2500);
}

btn.addEventListener("click", alimentar);

// fome
setInterval(() => {
  if (!vivo) return;

  fome++;

  if (fome > 10) {
    vivo = false;
    pet.src = img.morto;
    avatar.src = img.morto;
    statusTexto.innerText = "Estado: MORTO 💀";
  } 
  else if (fome > 5) {
    pet.src = img.fome;
    avatar.src = img.fome;
    statusTexto.innerText = "Estado: COM FOME!";
  }

}, 3000);

// modo noite
toggle.addEventListener("change", () => {
  document.body.style.backgroundImage = toggle.checked
    ? `url('${fundo.noite}')`
    : `url('${fundo.dia}')`;
});