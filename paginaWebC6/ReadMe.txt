

//criar pacoite JSON
npm init -y

//Altere o script:
"scripts": {
    "dev": "sass --watch ./assets/scss:./assets/css --style compressed --no-source-map"
  },

// instalar sass
npm i -g sass

// Iniciar o RUN DEV

npm run dev

//Automatizar o GIT no seu vsCode:

  "scripts": {
    "dev": "sass --watch ./assets/scss:./assets/css --style compressed --no-source-map",
=>    "git": "git add --all && git commit -m\"Deploy\" && git push origin main && echo \"Deployed\" && npm run dev"
  },
  "repository": {
    "type": "git",
=>    "url": "https://github.com/thiagolluiz/paginaWebC6Bank.git"
  },

comando usado é: npm run git
Se for adicionar commit é: npm run git "E aqui o commit"

