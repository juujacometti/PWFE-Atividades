// Exercício 1
// Crie um script que pergunte o nome do usuário e depois retorne uma mensagem de boas-vindas personalizada na tela 
let nome = prompt("Qual o seu nome?");
alert("Boas-vindas " + nome);

// Exercício 2
// Crie um script que pergunte a disciplina favorita ao usuário e exiba um alerta informando "A matéria {materia} realmente é ótima!"
let materia = prompt("Qual é a sua matéria favorita?");
alert("A matéria " + materia + " realmente é ótima!");

// Exercício 3
// Peça para o usuário informar a data de hoje 
let data = prompt("Informe a data de hoje:");
alert("A data informada é: " + data);

// Exercício 4
// Pergunte ao usuário "Está prepearado para o segundo semestre de desenvolvimento de sistemas?"
let prepearado = confirm("Está prepearado para o segundo semestre de desenvolvimento de sistemas?");

// Exercício 5
// Peça ao usuário para inserir dois números. Calcule e exiba o resultado das quatro operações aitméticas básicas entre esses dois números
let num1 = Number(prompt("Insira o primeiro número:"));
let num2 = Number(prompt("Insira o segundo número:"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

let resultado = alert("O resultado das operações são:\nSoma: " + soma + "\nSubtração: " + subtracao + "\nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao);

// Exercício 6
// Crie um programa que solicite ao usuário as notas de três provas. Calcule e exiba a média aritimética dessas notas.
let nota1 = Number(prompt("Informe a nota da sua 1° prova:"));
let nota2 = Number(prompt("Informe a nota da sua 2° prova:"));
let nota3 = Number(prompt("Informe a nota da sua 3° prova:"));

let media = (nota1 + nota2 + nota3) / 3;

alert("O resultado da média das suas notas é: " + media);

// Exercício 7
// Crie um programa que pergunte a largura e a altura de uma parede. Sabendo que 1 litro de tinta pinta 2 metros quadrados, calcule e exiba quantos litros de tinta serão necessários para pintar a parede.
let largura = Number(prompt("Informe a largura da parede:"));
let altura = Number(prompt("Informe a altura da parede:"));

let litrosNecessarios = (largura * altura) / 2;

alert("A área da parede é: " + (largura * altura) + "\nA quantidade de litros necessários para realizar a pintura é: " + litrosNecessarios);


// Respostas de cada exercício
console.log("Exercício 1 - " + nome);
console.log("Exercício 2 - " + materia);
console.log("Exercício 3 - " + data);
console.log("Exercício 4 - " + prepearado);
console.log("Exercício 5 - " + resultado);
console.log("Exercício 6 - " + media);
console.log("Exercício 7 - " + litrosNecessarios);
