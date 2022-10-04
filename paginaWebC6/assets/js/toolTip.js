const toolTip= document.querySelector("#toolTip");
const body= document.querySelector("body");
const header= document.querySelector(".top-site");


// alvo.addEventListener("evento", funcao);

// mouseover, funcao arrow no body.

body.addEventListener("mouseover", (e) => {
    body.style.background = "#888";
});
body.addEventListener("mouseout", (e) => {
    body.style.background = "unset";
});

toolTip.addEventListener("mouseover", (e) => {
    toolTip.style.background = "#FF0000";

console.log("Altura da pagina", body.clientHeight)
console.log("Larguna da pagina", body.clientWidth)
console.log("Altura do toolTip", toolTip.clientHeight)
console.log("Largura do toolTip", toolTip.clientWidth)
console.log("Altura do mouse", e.clientY)
console.log("Largura do mouse", e.clientX)

    if(document.querySelector(".toolTip")){
        document.querySelector(".toolTip").remove(); // Impede que o texto fique repetindo em um looping infinito
    } 

    const newDiv = document.createElement("div");
    newDiv.classList.add("toolTip");
    newDiv.innerHTML = 
    "Gelatooo para tú aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa! Daa jiji bappleees tank yuuu! Butt po kass gelatooo hahaha. Potatoooo poulet tikka masala butt poopayee uuuhhh po kass. Chasy belloo! Daa baboiii ti aamoo! Daa."

    newDiv.style.position = "fixed";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.left = 
        (e.clientX + 200 > body.clientWidth 
            ? e.clientX - 200 
                : e.clientX + 200) 
                    + "px";
    newDiv.style.display = "flex";
    header.appendChild(newDiv); 

});

toolTip.addEventListener("mouseout", (e) => {
    toolTip.style.background = "unset";
    if (document.querySelector(".toolTip")){
    document.querySelector(".toolTip").remove();
    }
});

//Criar uma funcao toolTip como padrao para usar = toolTip("#toolTip", "Texto do tipo");
console.log('');