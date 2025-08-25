// Sorteio de números 
const sortearNumero = document.getElementById("sortearNumero");    // Procura no HTML o id 'sortearNumero'
sortearNumero.addEventListener("click", sorteio);
let historicoNumeros = [];    // Lista para guardar os números já sorteados, impedindo a repetição

// Função para realizar o sorteio de números
function sorteio() {
    let quantidadeNumeros = 75;
    let numeroSorteado;
    let letra;

    // Looping para a realização do sorteio 
    do {
        numeroSorteado = Math.floor(Math.random() * quantidadeNumeros) + 1;    // Sorteio dos números aleatoriamente (1 a 75)

        // Definição das letras da cartela
        if (numeroSorteado <= 15) {
            letra = "B"
        }

        else if (numeroSorteado > 15 && numeroSorteado <= 30) {
            letra = "I"
        }

        else if (numeroSorteado > 30 && numeroSorteado <= 45) {
            letra = "N"
        }

        else if (numeroSorteado > 45 && numeroSorteado <= 60) {
            letra = "G"
        }

        else if (numeroSorteado > 60 && numeroSorteado <= 75) {
            letra = "O"
        }

    } while (historicoNumeros.includes(numeroSorteado));    // Repete o sorteio caso o número sorteado já tenha saído antes

    historicoNumeros.push(numeroSorteado);    // Adiciona o novo número sorteado a lista de histórico
    document.getElementById("numeroSorteado").textContent = letra + " - " + numeroSorteado; // mostra na tela

    // Destaque de números sorteados na tabela 
    let celulas = document.querySelectorAll("td");    // Seleciona todas as células da tabela

    for (let i = 0; i < celulas.length; i++) {
        let celula = celulas[i];    // Pega a célula atual
        let numero = parseInt(celula.textContent);    // Transfornma o número da celula de string para inteiro para comparar com o número sorteado

        if (numero === numeroSorteado) {
            celula.style.backgroundColor = "#a9287e";    // Altera a cor de fundo da célula
            celula.style.color = "#ffffff";    // Altera a cor do texto dentro da célula
        }
    }
}


// Animação de confetes + botão 'bingo'
// Ao clicar no botão, os confetes serão lançados
const botaoBingo = document.getElementById("botaoBingo");
botaoBingo.addEventListener("click", lancarConfetes);

//Função dos confetes que será executada ao clicar no botão
function lancarConfetes() {
    const cores = ['#f442b6ff', '#ff3d95ff', '#8b0249ff', '#68104cff', '#ea35862b'];
    const quantidadeConfete = 250;    // Quantidade de confetes que irão cair
    
    // Looping que realiza a criação dos 250 confetes
    for (let i = 0; i < quantidadeConfete; i++) {
        const confete = document.createElement('div');    // Criação de uma div na memória
        confete.classList.add('confete');    // Adiciona a class 'confete' na div criada 

        // Posição, cor e animação sorteadas aleatoriamente
        confete.style.left = `${Math.random() * 100}vw`;
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confete.style.animationDelay = `${Math.random() * 2}s`;
        confete.style.width = `${Math.floor(Math.random() * 8) + 8}px`;
        confete.style.height = confete.style.width;

        document.body.appendChild(confete);    // Adiciona os confetes na tela

        // Remove o confete da tela após a animação para não sobrecarregar
        setTimeout(() => {
            confete.remove();
        }, 5000); // 5 segundos
    }

    reiniciar();    // Chamada da função 'reiniciar' ao anunciar o bingo
}
 

// Reiniciar o sorteio
const reiniciarSorteio = document.getElementById("reiniciarSorteio");
reiniciarSorteio.addEventListener("click", reiniciar);

function reiniciar() {
    historicoNumeros = [];    // Limpa a lista de números já sorteados
    document.getElementById("numeroSorteado").textContent = "";    // Limpa o número exibido

    let celulas = document.querySelectorAll("td");

    // forEach -> percorre todos os elementos da lista sem a necessidade da criação de um looping 'for' comum
    celulas.forEach(celula => {    // Arrow function que recebe cada celula como parâmetro 
        celula.style.backgroundColor = "";    // Limpa o background 
        celula.style.color = "";    // Limpa a cor do texto 
    });
}


// 
