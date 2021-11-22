const data = require("./src/data.json");
const chalk = require("chalk");

const resultat = data.resultater;

console.log("Er jeg sej? " + chalk.green(`${resultat}`));
console.log(Math.floor(Math.random(resultat.length)));
