import No from "./No.js";
 class BuscaBLargura{
    static buscar(raiz){
        let atual;
        let lista = [];

        if(!raiz){
            return;
        }
        lista.push(raiz);
        while(lista.length > 0) {
            atual = lista.shift(); //remove o 1 da lista
            console.log(atual.valor);
        

            if(atual.filhoEsquerda){
            lista.push(atual.Esquerda);
            }
            if(atual.filhoDireita){
            lista.push(atual.filhoDireita);
            }
         }
    }
 }
 export default BuscaBLargura;
