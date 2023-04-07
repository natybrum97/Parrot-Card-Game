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
  const gifs1 = [
    { id: 1, imagem: 'fiestaparrot.gif' },
    { id: 2, imagem: 'bobrossparrot.gif' }
  ];
  const gifs2 = [
    { id: 1, imagem: 'fiestaparrot.gif' },
    { id: 2, imagem: 'bobrossparrot.gif' },
    { id: 3, imagem: 'explodyparrot.gif' }
  ]
const gifs3 = [
    { id: 1, imagem: 'fiestaparrot.gif' },
    { id: 2, imagem: 'bobrossparrot.gif' },
    { id: 3, imagem: 'explodyparrot.gif' },
    { id: 4, imagem: 'metalparrot.gif' }
]
const gifs4 = [
    { id: 1, imagem: 'fiestaparrot.gif' },
    { id: 2, imagem: 'bobrossparrot.gif' },
    { id: 3, imagem: 'explodyparrot.gif' },
    { id: 4, imagem: 'metalparrot.gif' },
    { id: 5, imagem: 'revertitparrot.gif' }
]
const gifs5 = [
    { id: 1, imagem: 'fiestaparrot.gif' },
    { id: 2, imagem: 'bobrossparrot.gif' },
    { id: 3, imagem: 'explodyparrot.gif' },
    { id: 4, imagem: 'metalparrot.gif' },
    { id: 5, imagem: 'revertitparrot.gif' },
    { id: 6, imagem: 'tripletsparrot.gif' }
]
  const gifs = [
    { id: 1, imagem: 'fiestaparrot.gif' },
    { id: 2, imagem: 'bobrossparrot.gif' },
    { id: 3, imagem: 'explodyparrot.gif' },
    { id: 4, imagem: 'metalparrot.gif' },
    { id: 5, imagem: 'revertitparrot.gif' },
    { id: 6, imagem: 'tripletsparrot.gif' },
    { id: 7, imagem: 'unicornparrot.gif' }
  ];
  const cartasDuplicadas1 = [...gifs1, ...gifs1];
  const cartasDuplicadas2 = [...gifs2, ...gifs2];
  const cartasDuplicadas3 = [...gifs3, ...gifs3];
  const cartasDuplicadas4 = [...gifs4, ...gifs4];
  const cartasDuplicadas5 = [...gifs5, ...gifs5];
  const cartasDuplicadas = [...gifs, ...gifs];

  const cartasEmbaralhadas1 = cartasDuplicadas1.sort(comparador);
  const cartasEmbaralhadas2 = cartasDuplicadas2.sort(comparador);
  const cartasEmbaralhadas3 = cartasDuplicadas3.sort(comparador);
  const cartasEmbaralhadas4 = cartasDuplicadas4.sort(comparador);
  const cartasEmbaralhadas5 = cartasDuplicadas5.sort(comparador);
  const cartasEmbaralhadas = cartasDuplicadas.sort(comparador);


function comparador() { 
	return Math.random() - 0.5; 
}
  

let cartasHTML = '';
if (numeroDeCartas === 4) {
cartasEmbaralhadas1.slice(0, numeroDeCartas).forEach(cartaemb => {
    cartasHTML += `<div data-test="card" onclick="virarCarta(this)" class="card"> 
        <div class="carta1 face"> 
            <img data-test="face-down-image" class="frente" src="./imagens/back.png" /> 
        </div> 
        <div class="carta2 back-face face"> 
            <img data-test="face-up-image" class="frente" src="./imagens/${cartaemb.imagem}" /> 
        </div> 
    </div>`;
});
} else if (numeroDeCartas === 6) {
    cartasEmbaralhadas2.slice(0, numeroDeCartas).forEach(cartaemb => {
        cartasHTML += `<div data-test="card" onclick="virarCarta(this)" class="card"> 
            <div class="carta1 face"> 
                <img data-test="face-down-image" class="frente" src="./imagens/back.png" /> 
            </div> 
            <div class="carta2 back-face face"> 
                <img data-test="face-up-image" class="frente" src="./imagens/${cartaemb.imagem}" /> 
            </div> 
        </div>`;
    });
} else if (numeroDeCartas === 8) {
    cartasEmbaralhadas3.slice(0, numeroDeCartas).forEach(cartaemb => {
        cartasHTML += `<div data-test="card" onclick="virarCarta(this)" class="card"> 
            <div class="carta1 face"> 
                <img data-test="face-down-image" class="frente" src="./imagens/back.png" /> 
            </div> 
            <div class="carta2 back-face face"> 
                <img data-test="face-up-image" class="frente" src="./imagens/${cartaemb.imagem}" /> 
            </div> 
        </div>`;
    });
} else if (numeroDeCartas === 10) {
    cartasEmbaralhadas4.slice(0, numeroDeCartas).forEach(cartaemb => {
        cartasHTML += `<div data-test="card" onclick="virarCarta(this)" class="card"> 
            <div class="carta1 face"> 
                <img data-test="face-down-image" class="frente" src="./imagens/back.png" /> 
            </div> 
            <div class="carta2 back-face face"> 
                <img data-test="face-up-image" class="frente" src="./imagens/${cartaemb.imagem}" /> 
            </div> 
        </div>`;
    });
} else if (numeroDeCartas === 12) {
    cartasEmbaralhadas5.slice(0, numeroDeCartas).forEach(cartaemb => {
        cartasHTML += `<div data-test="card" onclick="virarCarta(this)" class="card"> 
            <div class="carta1 face"> 
                <img data-test="face-down-image" class="frente" src="./imagens/back.png" /> 
            </div> 
            <div class="carta2 back-face face"> 
                <img data-test="face-up-image" class="frente" src="./imagens/${cartaemb.imagem}" /> 
            </div> 
        </div>`;
    });
} else if (numeroDeCartas === 14) {
    cartasEmbaralhadas.slice(0, numeroDeCartas).forEach(cartaemb => {
        cartasHTML += `<div data-test="card" onclick="virarCarta(this)" class="card"> 
            <div class="carta1 face"> 
                <img data-test="face-down-image" class="frente" src="./imagens/back.png" /> 
            </div> 
            <div class="carta2 back-face face"> 
                <img data-test="face-up-image" class="frente" src="./imagens/${cartaemb.imagem}" /> 
            </div> 
        </div>`;
    });
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