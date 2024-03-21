import Rastreador from "./Rastreador";

export default class Grafo {
    inicio = null;
    meta = null;

    constructor(inicio, meta) {
        this.inicio = inicio;
        this.meta = meta;
    }

    buscaMelhorEscolha(){
        let fila = [];
        let ordenados = [];
        let atual;

        fila.push(new Rastreador(this.inicio,null));

        while(fila.length > 0){
            atual = fila.shift();
            if(atual.vertice == this.meta){
                return atual;
            }else{
                ordenados = atual.vertice.getOrdenados();
                ordenados.forEach(adjacente => {
                    fila.push(new Rastreador(adjacente,atual));
                });
            }
        }

        return null;

    }
}