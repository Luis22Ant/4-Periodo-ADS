import Arvore from "./Arvore.js";
import No from "./No.js";

let arvore = new Arvore("A");

console.log(arvore);

let noA = arvore.raiz //pegar a raíz da arvore
let noB = new No("B");
let noC = new No("C");
let noD = new No("D");
let noE = new No("E");
let noF = new No("F");


noA.adicionaFilho(noB);
noA.adicionaFilho(noC);

noC.adicionaFilho(noD);
noC.adicionaFilho(noE);

noB.adicionaFilho(noF);

console.log(arvore);
