/*
DESAFIO
Faça a leitura de 2 números uma única vez ao clicar no botão informar números

Ao clicar no botão somar, mestre a soma.
Ao clicar no botão subtrair, mostre a subtração.
Ao clicar no botão multiplicar, mostre a multiplicação.
Ao clicar no botão dividdir, mostre a divisão. 
*/

// variavel global
var numero1 = 0;
var numero2 = 0;

// variavel constante
const x = 'Ivan';

function inserir(){
   numero1 = window.prompt('Insira o primeiro numero');
   numero1 = parseFloat(numero1);
   numero2 = window.prompt('Insira o segundo numero');
   numero2 = parseFloat(numero2);
}

function somar(){
    //variavel local  
    let resultado = numero1 + numero2;
    window.alert(numero1 + ' + ' + numero2 + ' = ' + resultado);
}

function subtrair(){
    let resultado = numero1 - numero2;
    window.alert(numero1 + ' - ' + numero2 + ' = ' + resultado);
}

function multiplicar(){
    let resultado = numero1 * numero2;
    window.alert(numero1 + ' x ' + numero2 + ' = ' + resultado);
}

function dividir(){
    let resultado = numero1 / numero2;
    window.alert(numero1 + ' / ' + numero2 + ' = ' + resultado);
}