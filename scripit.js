const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

const getText = (imc) => {
    if(imc > 40) return 'Obesidade grau III';
    if(imc > 38) return 'Obesidade grau II';
    if(imc > 35) return 'Obesidade grau I';
    if(imc > 25) return 'Pouco acima do peso';
    if(imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso';
}

const ImcCalc =() => {
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
}

button.addEventListener('click', ImcCalc);


