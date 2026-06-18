function revelar(){
    const imagem = document.getElementById("imagemJogador");
    imagem.src = "img/_vinicius_junior.png";

    (span)
    document.getElementById("nome").textContent = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("data").textContent = "12/07/2000 (25 anos)";
    document.getElementById("altura").textContent = "1,76 m";
    document.getElementById("posicao").textContent = "Ponta-esquerda / Atacante";
    document.getElementById("rank").textContent = "9,5";
    
    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(elemento => {
        elemento.classList.remove("placeholder");
        elemento.classList.add("card-text");
    });
}
    
}