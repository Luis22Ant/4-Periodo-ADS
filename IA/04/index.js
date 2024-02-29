
//npm init
//npm init -y
//node index.js
import BuscaBProfundidade from "../Completo/BuscaBProfundidade.js";
import ArvoreBuscaBinaria from "./ArvoreBuscaBinaria.js";
import BuscaBLargura from "./BuscaBLargura.js";
import No from "./No.js";

 let arvoreBST = new ArvoreBuscaBinaria(100);

//criando Arvore

arvoreBST.inserir(50);
arvoreBST.inserir(200);
arvoreBST.inserir(30);
arvoreBST.inserir(70);
arvoreBST.inserir(140);
arvoreBST.inserir(400);
arvoreBST.inserir(42);
arvoreBST.inserir(65);
arvoreBST.inserir(80);
arvoreBST.inserir(105);
arvoreBST.inserir(107);
arvoreBST.inserir(350);

BuscaBLargura.buscar(arvoreBST);
BuscaBProfundidade.buscar(arvoreBST);
ArvoreBuscaBinaria.buscar(arvoreBST);



// let noA = arvoreBST.raiz 
// let noB = new No("B");
// let noC = new No("C");
// let noD = new No("D");
// let noE = new No("E");
// let noF = new No("F");

// noA.adicionaFilhoEsquerda(noB);
// noA.adicionaFilhoDireita(noC);
// noB.adicionaFilhoDireita(noF); 
// noC.adicionaFilhoEsquerda(noD);
// noC.adicionaFilhoDireita(noE);

// arvoreBST.buscar("E");

// console.log(arvoreBST);

