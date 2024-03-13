import Vertice from "./Vertice.js";
import Grafo from "./Grafo.js";

let s = new Vertice("s", null); // início
let t = new Vertice("t", 0); // fim da heuristica
let a = new Vertice("a", 7);
let b = new Vertice("b" ,9);
let c = new Vertice("c" ,2);
let d = new Vertice("d",4);
let e = new Vertice("e",5);

let grafo = new Grafo(s,t);

s.adicionarAresta(a,3);

a.adicionarAresta(c,5);
c.adicionarAresta(t,3);
t.adicionarAresta(d,4);
d.adicionarAresta(e,2);
d.adicionarAresta(b,7);
e.adicionarAresta(b,7);
b.adicionarAresta(s,2);
