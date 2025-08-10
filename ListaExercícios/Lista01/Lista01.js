// Exercício 1
// Peça um número para o usuário e imprima se ele é par ou ímpar. E se é múltiplo de 3 ou de 5.

// let numero = Number(prompt("Insira um número para descobrir se ele é par ou ímpar: "));

// if (isNaN(numero)) {     //  Função que verifica se o valor digitado realmente é um número
//     alert("O valor informado não é um número.");
// }

// else {
//     let mensagem = "O número " + numero;

//     if (numero % 2 == 0) {
//         mensagem += " é par.";
// }

//     else {
//         mensagem +=  " é ímpar.";
//     }

//     if (numero % 3 == 0) {
//         mensagem += "\nEsse número é múltiplo de 3.";
//     }

//     if (numero % 5 == 0) {
//         mensagem += "\nEsse número é múltiplo de 5.";
//     }

//     alert(mensagem)
// }


// Exercício 2 
// Peça três números para o usuário e imprima qual o maior

// alert("Informe 3 números para descobrir qual deles é o maior.");

// let num1 = Number(prompt("Informe o primeiro número:"));
// let num2 = Number(prompt("Informe o segundo número:"));
// let num3 = Number(prompt("Informe o terceiro número:"));

// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     alert("Algum dos valores informados não é um número.");
// }

// else {
//     let maior = Math.max(num1, num2, num3);     // Função que verifica qual dos elementos é o maior

//     if (num1 == num2 && num2 == num3) {
//         alert("Os números informados são todos iguais!")
//     }

//     else {

//         let quantidade = 0;

//         if (num1 === maior) quantidade++;
//         if (num2 === maior) quantidade++;
//         if (num3 === maior) quantidade++;

//         if (quantidade > 1) {
//             alert("Você informou mais de um número igual ao maior.\nO maior número informado foi: " + maior)
//         }

//         else {
//             alert("O maior número que você informou foi: " + maior);
//         }
//     }
// }


// // Exercício 3
// // Peça um número para o usuário e imprima a classificação de idade: bebe = < 2 / criança < 13 /adolescente < 18 / adulto < 60 / idoso >= 60

// let entrada = prompt("Informe sua idade (anos) para ver a sua classificação:");

// if (entrada === null || entrada.trim() === "" || isNaN(Number(entrada)) || Number(entrada) < 0) {
//     alert("O valor informado é inválido.");
// } 
// else {
//     let idade = Number(entrada);

//     if (idade < 2) {
//         alert("Classificação: Bebê");
//     } 
//     else if (idade < 13) {
//         alert("Classificação: Criança");
//     } 
//     else if (idade < 18) {
//         alert("Classificação: Adolescente");
//     } 
//     else if (idade < 60) {
//         alert("Classificação: Adulto");
//     } 
//     else {
//         alert("Classificação: Idoso");
//     }
// }


// Exercício 4
// Conversor de Unidades. Escreva um programa que permite ao usuário escolher entre converter uma temperatura de Celsius para Fahrenheit ou vice-versa. 
// Solicite o valor e execute a conversão.

// let escolha = Number(prompt("Conversor de temperatura. Deseja converter para (informe o número da opção):\n1 -> Celsius\n2 -> Fahrenheit"));

// if (isNaN(escolha)) {
//     alert("Valor informado é inválido.");
// } 

// else {
//     if (escolha == 1) {
//         let temperatura = Number(prompt("Informe a temperatura em Fahrenheit:"));
//         temperatura = (temperatura - 32) * (5 / 9);
//         alert("Temperatura em graus Celsius: " + temperatura);
//     }

//     else if (escolha == 2) {
//         let temperatura = Number(prompt("Informe a temperatura em Celsius:"));
//         temperatura = (temperatura * (9 / 5)) + 32;
//         alert("Temperatura em graus Fahrenheit: " + temperatura);
//     }

//     else {
//         alert("Escolha inválida. Tente novamente!");
//     }
// }


// Exercício 5
// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. 
// Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

// let velocidade = Number(prompt("Verificação de multa.\nInforme a velocidade do carro (Km/h):"));

// if (isNaN(velocidade)) {
//     alert("Você não informou um valor válido.")
// }

// else {
//     if (velocidade > 80) {
//         let velocidadeAcima = velocidade - 80;
//         let multa = velocidadeAcima * 5;
//         alert("O motorista deste veículo foi multado!\nValor a ser pago: R$ " + multa.toFixed(2));      // Função para limitar a duas casas decimais 
// }

//     else {
//         alert("O condutor está dentro do limite.\nNenhuma multa aplicada.")
//     }
// }


// Exercício 6
// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. 
// Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

// let distancia = Number(prompt("Informe a distância da sua viagem em Km/h para verificar o valor da sua passagem:"));

// if (isNaN(distancia)) {
//     alert("Você informou um valor inválido.")
// }

// else {
//     if (distancia <= 200) {
//         let passagem = distancia * 0.5;
//         alert("O valor da sua passagem ficou em R$ " + passagem.toFixed(2));
//     }

//     else {
//         let passagem = distancia * 0.45;
//         alert("O valor da sua passagem ficou em R$ " + passagem.toFixed(2));
//     }
// }


// Exercício 7
// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.

// let anoNascimento = Number(prompt("Para verificar se é necessário votar, informe o seu ano de nascimento:"));

// if (isNaN(anoNascimento)) {
//     alert("Você não informou uma idade válida.")
// }

// else {
//     let idade = 2025 - anoNascimento;

//     if (idade < 16) {
//         alert("Você possui " + idade + " anos de idade.\nVocê ainda NÃO PODE votar.");
//     }

//     else if (idade >= 16 && idade < 18) {
//         alert("Você possui " + idade + " anos de idade.\nVocê possui VOTO OPCIONAL.");
//     }

//     else {
//         alert("Você possui " + idade + " anos de idade.\nVocê possui VOTO OBRIGATÓRIO.");
//     }
// }



//Exercício 8
// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.

// let ano = Number(prompt("Informe um ano para saber se ele é ou não bissexto:"));

// if (isNaN(ano)) {
//     alert("Você não informou um ano válido.")
// }

// else {
//     if (ano % 4 == 0) {
//         if (ano % 100 == 0) {
//             if (ano % 400 == 0) {
//                 alert("O ano " + ano + " é um ano bissexto");
//             } 
            
//             else {
//                 alert("O ano " + ano + " não é bissexto.");
//             }
//         } 
        
//         else {
//             alert("O ano " + ano + " é um ano bissexto");
//         }
//     } 

//     else {
//         alert("O ano " + ano + " não é bissexto.");
//     }
// }




// Exercício 9 
// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
// - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
// - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.

// let genero = prompt("Informe a primeira letra referente ao seu gênero:\nF -> Feminino\nM -> Masculino");

// genero = genero.toUpperCase()   // Função para tornar maiúsculo o que o usuário digitar

// if (genero == "M") {
//     let idade2 = Number(prompt("Informe a sua idade:"));

//     if (isNaN(idade2)) {
//         alert("Você informou uma idade inválida.")
//     }

//     else {
//         if (idade2 < 18) {
//             alert("Você possui " + idade2 + " anos de idade.\nRestam " + (18 - idade2) + " anos para ser necessário realizar o alistamento.");
//         }

//         else if (idade2 == 18) {
//             alert("Você possui " + idade2 + " anos de idade.\nVocê necessita realizar o seu alistamento!");
//         }

//         else {
//             alert("Você possui " + idade2 + " anos de idade.\nSe passaram " + (idade2 - 18) + " anos do seu alistamento.");
//         }
//     }
// }

// else if (genero == "F") {
//     alert("Não será necessário realizar alistamento.")
// }

// else {
//     alert("Você informou um gênero inválido.")
// }


// Exercício 10 (incompleto)
// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, 
// sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

// let horaInicio = prompt("Tempo da partida de xadrez.\nInforme a hora em que o jogo foi iniciado (0 a 23): ");
// let horaFim = prompt("Agora, informe a hora em que a partida foi finalizada (0 a 23)");


// Exercício 11 (pendente)
// A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).

// alert("Verificação de recebimento de hora extra.");

// let horasTrabalhadasMes = prompt("Informe quantas horas você trabalhou durante esse mês: ");
// let salarioHora = prompt("Informe quanto é o seu salário por hora: ");
// let salarioTotal;

// let horaExtra = horasTrabalhadasMes - (40 * 4);

// if (horaExtra <= 0) {
//     alert("Você não receberá hora extra.")
// }

// else {
    
// }



// Exercício 12 (pendente)
// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. 
// Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.


// Exercício 13 (pendente)
// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. 
// Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). 
// Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.


// Exercício 14 (pendente)
// Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. 
// Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). 
// Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.


// Desafio
// Uma empresa precisa reajustar o salário dos seus funcionários, dando um aumento de acordo com alguns fatores. 
// Faça um programa que leia o salário atual, o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
    // - menos de 15 anos de empresa: +5%
    // - de 15 até 20 anos de empresa: +12%
    // - mais de 20 anos de empresa: +23%
// - Homens
    // - menos de 20 anos de empresa: +3%
    // - de 20 até 30 anos de empresa: +13%
    // - mais de 30 anos de empresa: +25%

// let salarioAtual = parseFloat(prompt("Cálculo de reajuste salarial.\nInforme o seu salário atual:"))
// let genero = prompt("Certo, agora informe o seu gênero.\nDigite 'F' para Feminino\nDigite 'M' para masculino")
// let anosTrabalhados = Number(prompt("Por último, informe há quantos anos você trabalha na empresa:"))
// let novoSalario = 0 

// if (isNaN(salarioAtual) || isNaN(anosTrabalhados) || salarioAtual < 0 || anosTrabalhados < 0) {
//     alert("Algum dos valores informados é inválido.")
// }

// else {
//     genero = genero.toUpperCase()

//     if (genero == "F") {
//         if (anosTrabalhados < 15) {
//             novoSalario = salarioAtual + (salarioAtual * (5 / 100));
//         }

//         else if (anosTrabalhados >= 15 && anosTrabalhados <= 20 ) {
//             novoSalario = salarioAtual + (salarioAtual * (12 / 100));
//         }

//         else {
//             novoSalario = salarioAtual + (salarioAtual * (23 / 100));
//         }
//     }

//     else if (genero == "M") {
//         if (anosTrabalhados < 20) {
//             novoSalario = salarioAtual + (salarioAtual * (3 / 100));
//         }

//         else if (anosTrabalhados >= 20 && anosTrabalhados <= 30 ) {
//             novoSalario = salarioAtual + (salarioAtual * (13 / 100));
//         }

//         else {
//             novoSalario = salarioAtual + (salarioAtual * (25 / 100));
//         }
//     }

//     alert("O seu novo salário é de R$ " + novoSalario.toFixed(2))
// }