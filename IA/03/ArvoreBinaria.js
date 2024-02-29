import No from "./No.js";
//import BuscaBProfundidade from "./BuscaBProfundidade.js";
import BuscaBLargura from "./BuscaBLargura.js";

class ArvoreBinaria{
    raiz = null;

    constructor(valor){
        this.raiz = new No(valor);
    }

    //buscarPPreordem(){
    //    console.log("Busca em pré ordem");
    //    BuscaBProfundidade.preOrdem(this.raiz);
    //}
    //buscarPPosordem(){
    //    console.log("Busca em pós ordem");
    //   BuscaBProfundidade.preOrdem(this.raiz);
    //}
    //buscarPInordem(){
    //    console.log("Busca em in ordem");
    //    BuscaBProfundidade.preOrdem(this.raiz);
    //}
    //
    buscarL(){
        console.log("Buscar por largura!!");
        BuscaBLargura.buscar(this.raiz);

    }

}

export default ArvoreBinaria;