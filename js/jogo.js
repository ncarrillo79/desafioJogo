

var mapa = document.getElementById('mapa');
mapa.addEventListener('click');
var distancia = obterDistancia(e, objetivo);
var objetivo = objetivoAleatorio(distancia);

if (distancia < 20) {
  alert('"Ganhou, foi!"');
  location.reload;
}

//posiçoes aleatorias
function obterNumeroAeatorio(limite) {
  return Math.floor(Math.random() * limite);
}

//funcao para medir a distancia onde esta a bala.
//e=onde clica o usuario; objetivo= onde a bala está

function obterDistancia(e, Objetivo) {
  //diferenca e-objetivo
  return;
}

//preciso uma funcao para guardar o ponto aleatorio

function objetivoAleatorio() {}

function queAproximado() {
  if (distancia < 30) {
    return 'acho que você vai comer bala sim!';
  } else if (distancia) {
    return 'Quente!';
  } else if (distancia < 100) {
    return 'longe!';
  } else if (distancia < 160) {
    return 'frio mesmo!';
  } else {
    return 'congelado!';
  }
}
