const toolTip2= document.querySelector("#toolTip2");
const body= document.querySelector("body");
const header= document.querySelector(".top-site");


// alvo.addEventListener("evento", funcao);
// mouseover, funcao arrow no body.

body.addEventListener("mouseover", (e) => {
    body.style.background = "unset";
});
body.addEventListener("mouseout", (e) => {  
    body.style.background = "#888";
});

toolTip2.addEventListener("mouseover", (e) => {
    const callToolTip2 = function(text){
        const newDiv = document.createElement("div");
        newDiv.classList.add("toolTip2");
        newDiv.innerHTML = text;

            if(document.querySelector(".toolTip2")){
                document.querySelector(".toolTip2").remove(); // Impede que o texto fique repetindo em um looping infinito
            } 

        newDiv.style.position = "fixed";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.left = (e.clientX + 200 > body.clientWidth ? e.clientX -250 : e.clientX + 200) + "px";
        newDiv.style.display = "flex";
        header.appendChild(newDiv); 
        
        //Mudando a cor atras do icone 
        toolTip2.style.background = "rgba(50,50,150,0.8)";
        
        //Mudando a cor atras do icone   
        toolTip2.addEventListener("mouseout", (e) => {
            toolTip2.style.background = "unset";
            if (document.querySelector(".toolTip2")){
            document.querySelector(".toolTip2").remove();
            }
        });
    }
    callToolTip2("TMinions ipsum bananaaaa po kass wiiiii bappleees. Hana dul sae me want bananaaa! Tank yuuu! Baboiii gelatooo daa butt gelatooo tatata bala tu. Para tú underweaaar daa bananaaaa uuuhhh la bodaaa tank yuuu! Baboiii ti aamoo! Underweaaar jeje bappleees poopayee baboiii butt uuuhhh underweaaar. Po kass hahaha la bodaaa tatata bala tu tulaliloo me want bananaaa! Chasy aaaaaah daa. Chasy la bodaaa chasy gelatooo potatoooo. Uuuhhh tank yuuu! Pepete jeje daa ti aamoo! Hahaha.")
});

//Criar uma funcao toolTip2 como padrao para usar = toolTip2("#toolTip2", "Texto do tipo");