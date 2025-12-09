function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroDe = parseInt(document.getElementById('de').value);
    let numeroAte = parseInt(document.getElementById('ate').value);

   
    let sorteados = []
    let numero;

    for(let i = 0; i < quantidade; i++){
    numero = numeroAleatorio(numeroDe,numeroAte);
    while(sorteados.includes(numero)){
          numero = numeroAleatorio(numeroDe,numeroAte);
    }
    sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    document.getElementById('btn-reiniciar').removeAttribute('disabled', true);



}

function numeroAleatorio(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function reiniciar(){
  sortear();
    document.getElementById('btn-reiniciar').removeAttribute('disabled', true);

}