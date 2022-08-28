const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const pResult = document.querySelector('#result');

const btn = document.querySelector('#btnCalcular');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}