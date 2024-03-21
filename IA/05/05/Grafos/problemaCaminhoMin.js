import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";

let s = new Vertice("s");
let a = new Vertice("a");
let b = new Vertice("b");
let f = new Vertice("f");
let g = new Vertice("g");
let e = new Vertice("e");
let c = new Vertice("c");
let d = new Vertice("d");
let t = new Vertice("t");

let grafo = new Grafo(s,t);

s.adicionarAresta(a,3.1);
s.adicionarAresta(d,4.9);
a.adicionarAresta(b,3.1);
b.adicionarAresta(f,5.1);
b.adicionarAresta(c,3.5);
d.adicionarAresta(e,2.2);
e.adicionarAresta(f,2.2);
f.adicionarAresta(g,2.2);
g.adicionarAresta(t,2.5);
c.adicionarAresta(t,4.8);
