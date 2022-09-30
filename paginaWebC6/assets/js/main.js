// Trabalhando com JavaScript em um arquivo externo
const nome = "Fiap";
console.log(nome, "chamando variável criada com VAR");
//nome = "Avanade";

//nome = "Fiap"; 
// TypeError, constante(const) não pode receber outro valor 

escreve("Exemplo de função nominal");

// função nominal - udf
function escreve(titulo){
//    alerta(titulo);
}

// 7 tipos de erros no JS - 3 mais comuns(os três mais comuns *)
// 1* - SintaxError - escreveu algo errado
// 2* - ReferencerError - chamou quem não existe ou não está acessivel
// 3* - TypeError - violou alguma regra do JavaScript
// 4 - RangeError - estorou o limite de alinhamento ou faixa de valores
// 5 - EvalError - existe um comando perigoso no JavaScript chamado Eval
// 6 - InternalError - memória, processamento, cash no chrome ou V8
// 7 - URIError - erros que acontecem ao consumir dados externos, com url inválidas

// existem 4 formas de criar uma função em JavaScript

// função nominal - sofre hoisting.
function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}
//escopo, orientação a objeto

mudaTitulo("Vai Corinthians");
// expressão de função - Function Expression Ex.:"const nomeDaVariavel = ...."
// função anônima, quando tem 'function' mas não tem um nome "Ex.: =function(parametro)", precisa de contexto 
const mudaTitulo2 = function(novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
}

mudaTitulo2("Trocando o subtítulo");

// Arrow Function - É uma função criada no ES6 ou ES2015
// Não existe o 'this' dentro de uma arrow function
// Não existe método construtor
// Sintaxe mais simples e prática
const relogio = () => {
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
};
setInterval(relogio, 1000);