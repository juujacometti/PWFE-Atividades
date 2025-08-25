// Ao clicar no botão, os confetes serão lançados
const botaoBingo = document.getElementById("botaoBingo");    // Procura no HTML o id 'botaoBingo'
botaoBingo.addEventListener("click", lancarConfetes);

//Função dos confetes, colcoar outras cores
    function lancarConfetes() {
        const cores = ['#f442b6ff', '#ea35862b', '#ff3d95ff', '#8b0249ff', '#68104cff'];
        const quantidade = 250;
 
        for (let i = 0; i < quantidade; i++) {
            const confete = document.createElement('div');
            confete.classList.add('confete');
 
            // Posição, cor e animação aleatórias

            confete.style.left = `${Math.random() * 100}vw`;
            confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
            confete.style.animationDelay = `${Math.random() * 2}s`;
            confete.style.width = `${Math.floor(Math.random() * 8) + 8}px`;
            confete.style.height = confete.style.width;
 
            document.body.appendChild(confete);
 
            // Remove o confete da tela após a animação para não sobrecarregar
            setTimeout(() => {
                confete.remove();
            }, 5000); // 5 segundo
        }
    }
 