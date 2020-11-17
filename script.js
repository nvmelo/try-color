const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer');
const botaoReiniciar = document.getElementById('reset-game');
const placar = document.getElementById('score');
const cores = [];

function numeroAleatorio(mul) {
  const numero = Math.floor(Math.random() * mul);
  return numero;
}

function corAleatoria() {
  const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;
  return rgb;
}

function cliqueNaBola(event) {
  const corSelecionada = event.target.style.backgroundColor;
  if(corSelecionada === textoCor.textContent) {
    textoResposta.textContent = 'Acertou!';
    placar.textContent = parseInt(placar.textContent) + 3;
    localStorage.setItem('p', placar.textContent);
  } else {
    textoResposta.textContent = 'Errou! Tente novamente!';
  }
}

if (localStorage.getItem('p') !== null) {
  placar.textContent = localStorage.getItem('p');
}

for (let bola = 0; bola < bolas.length; bola++) {
  const cor = corAleatoria();
  bolas[bola].style.backgroundColor = cor;
  cores[bola] = cor;
  bolas[bola].addEventListener('click', cliqueNaBola);
}

function adicionaCorAleatoria() {
  textoCor.textContent = cores[numeroAleatorio(6)];
}

adicionaCorAleatoria();

function reiniciaJogo() {
  window.location.reload();
}

botaoReiniciar.addEventListener('click', reiniciaJogo);