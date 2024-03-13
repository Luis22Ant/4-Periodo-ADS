import Aresta from "./Aresta.js";

export default class Vertice{
    valor = "";
    adjacentes = [];  //aresta
<<<<<<< HEAD
    heuristica = null; //distancia em linha reta

    constructor(valor, heuristica){
        this.valor = valor;
        this.heuristica = heuristica;
    }

    adicionarAresta(destino,peso){
        this.adjacentes.push(new Aresta(this,
            destino, peso))
    }

    getOrdenados(){
        this.adjacentes.sort((a,b) =>{
            if(a.destino.heuristica < b.destino.heuristica){ //queremos comparar vértices, não arestas
                return -1;
            }else if(a.destino.heuristica > b.destino.heuristica){
                return 1;
            }

            return 0;
        });

        let ordenados = [];
        this.adjacentes.forEach(aresta =>{
            ordenados.push(aresta.destino);
        })
        
        return ordenados;
    }
=======

    constructor(valor){
        this.valor = valor;
    }

    adicionarAresta(destino,peso){
        this.arestas.push(new Aresta(this, destino, peso))
    }

>>>>>>> 073f815ccbd179d5ac6755ee5396b21b7918106e

}