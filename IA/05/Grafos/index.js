<<<<<<< HEAD
//npm init
//npm init -y
//node index.js
  
import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";

let s = new Vertice("s", null);
let t = new Vertice("t", 0);
let a = new Vertice("a", 8.1);
let b = new Vertice("b", 5.2);
let c = new Vertice("c", 4.8);
let d = new Vertice("d", 8.3);
let e = new Vertice("e", 6.4);
let f = new Vertice("f", 4.7);
let g = new Vertice("g", 2.5);

let grafo = new Grafo(s,t);

s.adicionarAresta(a,3.1);
s.adicionarAresta(d,4.9);
a.adicionarAresta(b,3.1);
d.adicionarAresta(e,2.2);
e.adicionarAresta(f,2.2);
f.adicionarAresta(b,5.1);
f.adicionarAresta(g,2.2);
b.adicionarAresta(f,5.1);
b.adicionarAresta(c,3.5);
c.adicionarAresta(t,4.8);
g.adicionarAresta(t,2.5);

console.log(s.getOrdenados());
=======

import Vertice from "./Vertice.js";

let y = new Vertice("Y");
let x = new Vertice("X");
let w = new Vertice("W");
let u = new Vertice("U");
let v = new Vertice("V");

v.adicionarAresta(u,0);
v.adicionarAresta(w,0);
v.adicionarAresta(x,0);
u.adicionarAresta(u,0);
u.adicionarAresta(x,0);
w.adicionarAresta(x,0);
w.adicionarAresta(x,0);
x.adicionarAresta(y,0);


>>>>>>> 073f815ccbd179d5ac6755ee5396b21b7918106e
