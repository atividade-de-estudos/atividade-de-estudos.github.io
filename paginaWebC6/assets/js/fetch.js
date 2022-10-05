const cep = document.querySelector("#cep");

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+ campo)){
            document.querySelector("#"+ campo).value = result[campo];
        }
    }
}

cep.addEventListener("blur", async(e) =>{
    let search = cep.value.replace("-", ""); // so pode pegar um valor de um formulario depois de um evento (depois que for digitado algo)
    console.log(search);
    
    if(search.length < 8 || Number(search.value) === NaN){
        alert("CEP invalido");
        cep.focus();
        return;
    }

    const options = {
        method: "GET",
        mode: "cors", // Cross-Origin Resource Sharing
        cahche: "default",
    };

    /* const resultado = await fetch( `https://viacep.com.br/ws/${search}/json/`, options); // So pode usar await dentro de uma async */

    //axios - biblioteca javascript que usa fetch

    try{
        const resultado = await fetch( `https://viacep.com.br/ws/${search}/json/`, options);
        const json = await resultado.json();
        showData(json);
    }catch(error){
        console.log("Temos um problema ",error.message);
    }

    // Recurso assincrono, retorna uma promise, por que eu nao sei se vai funcionar
    // Promise e um recuro que nao temos certeza se deu certo ou nao, e uma intencao
    // Se der certo vai retornar o resolve, se der errado vai retornar reject
    // Resolver quer dizer, funcionou, ai usamos a funcao then, se der errado, usamos a o catch
/*     fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{
        response.json()
        .then(result=> {
            console.log(result);
        });
    })
    .catch(err => { console.log(e.mesage);}); */

    // outra forma de fazer o codigo acima

});
