<?php
class UsuarioSessao{
    public $login;
    public $nome;



    public function Salvar(){
        echo "Salvar";
    }

    public function Ler(){
        echo "Ler";

    }


    function __construct($login,$nome){
        $this->login = $login;
        $this->nome = $nome;
        echo "Novo objeto";
    }  
}