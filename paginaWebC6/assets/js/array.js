const carrosDOM = document.querySelector("#carros")

const veiculos = [
"Chevrolet", 
"Ford", 
"Fiat", 
"Vw", 
"Honda", 
"Toyota", 
"Hyundai"
];

// adiciona no final do array
veiculos.push("BMW", "Mercedes"); // length = 9

// adiciona no inicio do array
veiculos.unshift("Audi"); // length 10

// removendo do inicio do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elementodo array ", primeiro); //remove o primeiro "Audi"

// removendo do final do array
const ultimo = veiculos.pop();
console.log("Removendo o ultimo elementodo array ", ultimo); // removendo o ultimo "Mercedes"

// removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1); // removendo a posicao 2, um elemento, "Fiat"

// removendo mais de um elemento do array
const removidos = veiculos.splice(1, 2); //removendo na posicao 1 "ford", vai remover 2 ou seja "ford e  VW"

// removendo e adicionando elementos
const removidos2 = veiculos.splice(1,2,"Ferrari", "Lamborghini"); //removendo na posicao 1 "Honda", vai remover 2 ou seja "Honda e Toyota" e adicionando "Ferrari", "Lamborghini"

veiculos.forEach((value, key) =>{
    carrosDOM.innerHTML += `<Option name="${key}">${value}</Option>`
})

/* ------------------------------------------------------------------- */
// splice - remove e adicna elementos

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

// sliece - retorna um novo array, o primeiro parametro e opcional, ecomeca em zero
// o ultimo parametro determina ate onde deve ser filtrado, porem excluindo este ultimo elemento
const newNba = nbaTeams.slice(3,nbaTeams.length);// mostra todos os elementos a partir do 3 elemento
const newNba2 = nbaTeams.slice(1);// remove o primeiro
const newNba3 = nbaTeams.slice(0);// mostra todos os elementos

console.log(nbaTeams);
console.log(newNba, "Mostra todos os elementos a partir do 3 elemento");
console.log(newNba2, " remove o primeiro");
console.log(newNba3, " mostra todos os elementos");

// slice - retorna um novo array
/* ------------------------------------------------------------------------- */
// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Galucio Daniel Souza Santos";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join("");
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
}
/* --------------------------------------------------------------------------- */

const celticsMap = nbaTeams.map(procuraCeltic); // retorna um novo array, mapeando e buscando no array anterior
const celticsFilter = nbaTeams.filter(procuraCeltic); // retorna um novo array, procura do comeco ate o fim do array anterior, quem retornou retornou true para a funcao usada
const celticsFind = nbaTeams.find(procuraCeltic); // o find para ao encontrar o primeiro verdadeiro

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "find");