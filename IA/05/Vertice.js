import Aresta from './Aresta.js';

export default class Vertice {
    valor = "";
    adjacentes = [];
    heuristica = null;

    constructor(valor, heuristica) {
        this.valor = valor;
        this.heuristica = heuristica;
    }

    adicionarAresta(destino, peso) {
        this.adjacentes.push(new Aresta(this, destino, peso));
    }


    getOrdenados() {
     this.adjacentes.sort((a, b) => {
            if (a.destino.heuristica < b.destino.heuristica) {
                return -1;
            } else if (a.destino.heuristica > b.destino.heuristica) {
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

}