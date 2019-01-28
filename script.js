/* alert("Olá");  */

/*
let nome = prompt("Qual seu nome?");
alert("Olá " + nome + "! Seja bem vindo");
*/

/*
console.log("Olá " + nome + "!");
*/

/*
if (condicao){
    colocar a função a ser executada;
}
else if (condicao){
    colocar a função a ser executada;
}
else{
    o contrário da condição anterior;
}
*/

/*
let nome = prompt("Qual seu nome?");

if (nome == "Lucas"){
    console.log("ok");
}
else if (nome == "lucas"){
    console.log("letra minúscula");
    alert("letra minúscula");
}
else{
    alert("nok");
}
*/

/*
let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let salario = prompt(nome + ", qual o seu salário");
let vlEmprestimo = prompt("Qual o valor de empréstimo desejado?");

if (((idade >=25 ) && (idade <=60)) && (vlEmprestimo<=(salario*5))){
    alert("Parabés, aprovado");
}
else{
    alert("Empréstimo reprovado");
}
*/

/*
let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");

if ((idade >=25 ) && (idade <=60)){
    let salario = prompt(nome + ", qual o seu salário");
    let vlEmprestimo = prompt("Qual o valor de empréstimo desejado?");
    if (vlEmprestimo<=(salario*5)){
        alert("Parabens, aprovado");
    }
}
else {
    alert("Empréstimo reprovado");
}
*/


let botao = document.querySelector("#botao");
/* document
    queryselector - vai investigar os elementos no html
   getelementbyid
   */
let corpo = document.querySelector("body");
let texto = document.querySelector("p");

function mudarCor(){
    corpo.style.backgroundColor = "blue";
    botao.style.backgroundColor = "pink";
    botao.style.color = "red";
}

function mudarTexto(){
    texto.innerHTML = "< Voce clicou no botão ao lado";
}

/* 
botao.onclick = mudarCor;
botao.ondbclick
botao.onmouseenter
*/
botao.onmouseleave = mudarTexto;
botao.onclick = mudarCor;