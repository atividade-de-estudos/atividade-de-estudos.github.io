// Trabalhando com JavaScript em um arquivo externo
const nome = "Fiap";
console.log(nome, "chamando variável criada com VAR");

//nome = "Fiap"; 
// TypeError, constante(const) não pode receber outro valor 

escreve("Exemplo de função nominal");

// função nominal - udf
function escreve(titulo){
    alerta(titulo);
}

// 7 tipos de erros no JS - 3 mais comuns
// 1 - SintaxError - 
// 2 - ReferencerError - 
// 3 - TypeError -
// 4 - RangeError - 
// 5 - EvalError - 
// 6 - InternalError - 
// 7 - URIError - 