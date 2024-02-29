//npm init
//npm init -y
//node index.js


import ArvoreBinaria from "./ArvoreBinaria.js";
import No from "./No.js";

let arvoreB = new ArvoreBinaria("A");

console.log(arvoreB);

let noA = arvoreB.raiz //pegar a raíz da arvore
let noB = new No("B");
let noC = new No("C");
let noD = new No("D");
let noE = new No("E");
let noF = new No("F");

noA.adicionaFilhoEsquerda(noB);
noA.adicionaFilhoDireita(noC);

noB.adicionaFilhoDireita(noF); //pode ser direita tbm, filho único

noC.adicionaFilhoEsquerda(noD);
noC.adicionaFilhoDireita(noE);



console.log(arvoreB);
