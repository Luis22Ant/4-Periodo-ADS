import No from "./No.js";
import BuscaBProfundidade from "./BuscaBProfundidade.js";

class ArvoreBinaria{
    raiz = null;

    constructor(valor){
        this.raiz = new No(valor);
    }

    buscarPPreordem(){
        console.log("Busca em pré ordem");
        BuscaBProfundidade.preOrdem(this.raiz);
    }
    buscarPPosordem(){
        console.log("Busca em pós ordem");
        BuscaBProfundidade.preOrdem(this.raiz);
    }
    buscarIInordem(){
        console.log("Busca em in ordem");
        BuscaBProfundidade.preOrdem(this.raiz);
    }
    

}

export default ArvoreBinaria;