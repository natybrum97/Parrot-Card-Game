let numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Atenção: Escolha somente números pares de 4 a 14."));
while (isNaN(numeroDeCartas) || numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
    numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Atenção: Escolha somente números pares de 4 a 14."));
}

function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.toggle("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.toggle("back");
    
  }

let cartasHTML = '';
let cont = 0;
while (cont < numeroDeCartas) {
    cont++;
    cartasHTML += '<div onclick="virarCarta(this)" class="card"> \
        <div class="carta1 face"> \
        <img class="frente" src="./imagens/back.png" /> \
        </div> \
        <div class="carta2 back-face face"> \
            Verso \
        </div> \
    </div>';
}
document.getElementById("cartas").innerHTML = '<ul id="minha-div" class="alinhar">' + cartasHTML + '</ul>';

  
if (numeroDeCartas === 4){
    document.getElementById("minha-div").style.width = "302px";
  } else if(numeroDeCartas ===6) {
    document.getElementById("minha-div").style.width = "453px";
  } else if(numeroDeCartas ===8) {
    document.getElementById("minha-div").style.width = "604px";
  } else if(numeroDeCartas ===10) {
    document.getElementById("minha-div").style.width = "755px";
  } else if(numeroDeCartas ===12) {
    document.getElementById("minha-div").style.width = "906px";
  } else if(numeroDeCartas ===14) {
    document.getElementById("minha-div").style.width = "1057px";
  }