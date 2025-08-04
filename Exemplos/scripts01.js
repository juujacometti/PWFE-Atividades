// Introdução (variáveis, prompts, alerts e console)
console.log("Julya Jacometti") 

var uma = "uma";
let duas = "duas";
const tres = 3;

console.log(uma, duas, tres);

alert("Bom dia a todos(as)!");

let nome = prompt("Quem é o mais novo?");
console.log("O mais novo é: " + nome)

let confirmar = confirm("Você é julya?");
console.log(confirmar); 


// Arrays
let arr = ["Julya", "Yasme", "Layslle", "Letice"];
console.log(arr[0]);

let obj = {nome: "Yasme", idade: 45}
console.log(obj);
console.log(obj.nome);

let pessoa = "Leticia";
console.log(nome[0]);
console.log(nome.charAt(6)); 

let a = "a";
let b = "b";
console.log(b > a);

console.log(typeof(a)); // Tipo de dado
console.log(typeof(b.toString()));
console.log(arr.length); // Tamanho do array 
console.log(nome.slice(0, 2));// Fatiamento de strings
console.log(nome.toLowerCase);// Todas as letras minúsculas 
console.log(nome.toUpperCase);// Todas as letras maiúsculas
console.log(nome.replace("Ma", "Ke")); // Substitui partes das strings 

let lista = "Julya, Yasme, Layslle, Letice";
console.log(lista);
lista = lista.split(" ");
console.log(lista);
lista = lista.split(",");
console.log(lista);
lista = lista.join(",");
console.log(lista);

arr.push("Marcia"); // Push adiciona coisas ao final da lista
console.log(arr);
arr.unshift("Marcos"); // Unshift adiciona coisas ao primeiro lugar na lista 
arr.pop(); // Pop tira elementos do fim da lista 
arr.shiffti(); // Tira do começo da lista 


// Condicionais
// Dentro das considicionais é possível realizar condições mais complexas por meio do 'AND' = &&, por meio do 'OU' = || ou por meio do 'NOT' = !
if (3 > 4){
    console.log("3 é maior que 4");
}

else if (5 > 6){
    console.log("5 é maior que 6");
}

else{
    console.log("Nada é verdadeiro");
}

let cor = prompt("Escolha uma cor:");

switch (cor){
    case "amarelo":
        console.log("Você gosta de: " + cor);
        break;
    case "vermelho":
        console.log("Você gosta de: " + cor);
        break;
    case "rosa":
        console.log("Você gosta de: " + cor);
    default:
        console.log("Você é um coloridinho.");
}

// Operador ternário

let idade = 19;
let maiorDeIdade = idade > 18 ? "sim" : "não";
console.log(maiorDeIdade);