// diferenças entre arrow function e funções nominais ou expressão de função

const resultado  = document.querySelector("#resultado")

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}

//chamando a função
myFunc1.showArguments(
    "Vai Corinthians",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

// explicar spread operator, destructor assignment
let myFunc2 = {
    showArguments: () => {
        // resultado.innerHTML = arguments;
        // console.log(...arguments);
    }
}
myFunc2.showArguments(
    "Vai Corinthians",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);



let user = {
    name: "Glaucio Daniel",
    usandoArrow: () => {
        console.log("Meu nome é", this.name, "Arrow Function") // O Arrow Function não pega o "this"
    },
    usandoNominal(){
        console.log("Meu nome é", this.name, "Nominal Function") 
    }
};

user.usandoArrow();
user.usandoNominal();
/*

{
    "name" : "Glaucio Daniel",
    "email" : "glauciodaniel@gmail.com"
    "password" : "123456"
}

cont {password, ...data} = await prisma.user.findById(1):

return data;

*/