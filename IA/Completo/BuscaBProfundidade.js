class BuscaBProfundidade{

    static preOrdem(no){
        if(!no){
            return;
        }
       console.log(no.valor); 

   
       BuscaBProfundidade.preOrdem(no.filhoEsquerda);

       BuscaBProfundidade.preOrdem(no.filhoDireita);

    }

    static posOrdem(no){
        if(!no){
            return;
        }
             
       BuscaBProfundidade.preOrdem(no.filhoEsquerda);

       BuscaBProfundidade.preOrdem(no.filhoDireita);

       console.log(no.valor); 

    }


    static inOrdem(no){
        if(!no){
            return;
        }
    
       BuscaBProfundidade.preOrdem(no.filhoEsquerda);

       BuscaBProfundidade.preOrdem(no.filhoDireita);

       console.log(no.valor); 
    }

}

export default BuscaBProfundidade;