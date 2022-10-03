
=> criar pacote JSON
$npm init -y

=>Altere o script dentro do JSON:
"scripts": {
    "dev": "sass --watch ./assets/scss:./assets/css --style compressed --no-source-map"
  },

------------------------------------

=> instalar sass
$npm i -g sass

=> Iniciar o RUN DEV

$npm run dev

=>Automatizar o GIT no seu vsCode:
  "scripts": {
    "dev": "sass --watch ./assets/scss:./assets/css --style compressed --no-source-map",

    "git": "git add --all && git commit -m\"Deploy\" && git push origin main && echo \"Deployed\" && $npm run dev"
  },
  "repository": {
    "type": "git",

    "url": "https:=>github.com/thiagolluiz/paginaWebC6Bank.git"
  },

=> Comando usado para dar um push no GITHUB: 
$npm run git

=> Adicionar um commit com o PUSH:
$npm run git "E aqui o commit"

-------------------------------

Adicionado uma mascara REGEX ao CPF na pagina de login o padrão está do preenchimento: xxx.xxx.xxx-xx

-------------------------------

Como Funciona o Patern Adicionado no preenchimento de senha:
/^
  (?=.*\d)              => deve conter ao menos um dígito
  (?=.*[a-z])           => deve conter ao menos uma letra minúscula
  (?=.*[A-Z])           => deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#])         => deve conter ao menos um caractere especial
  [0-9a-zA-Z$*&@#]{8,}  => deve conter ao menos 8 dos caracteres mencionados
$/

-------------------------------

=> explicando o laco de repeticao

    let total= 2;
    setInterval(() =>{
        document.querySelector(alvo).innerHTML = texto[total >= texto.length -1? total = 0 : total+=1];
    }, tempo *1000);

=> Explicando: 
[total >= texto.length -1 => condicao
  ? total = 0 => Se condicao verdadeira
    : total+=1] => Se nao faca

--------------------------------