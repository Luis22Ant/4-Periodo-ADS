
//npm init
//npm init -y
//node index.js

import ArvoreBinaria from "./ArvoreBinaria.js";
import ArvoreBuscaBinaria from "./ArvoreBuscaBinaria.js";
import No from "./No.js";


let arvoreB = new ArvoreBinaria("A");
let arvoreBST = new ArvoreBuscaBinaria("A");

console.log(arvoreB);

let noA = arvoreB.raiz 
let noB = new No("B");
let noC = new No("C");
let noD = new No("D");
let noE = new No("E");
let noF = new No("F");

noA.adicionaFilhoEsquerda(noB);
noA.adicionaFilhoDireita(noC);
noB.adicionaFilhoDireita(noF); 
noC.adicionaFilhoEsquerda(noD);
noC.adicionaFilhoDireita(noE);

//arvoreB.buscarPPreordem();
//arvoreB.buscarPPosordem();
//arvoreB.buscarPInordem();

console.log(arvoreB);


arvoreBST.buscar("E");
console.log(arvoreBST);



