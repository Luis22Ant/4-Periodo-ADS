<?php
require_once "Funcionario.php";
class Departamento 
{
    private $funcionarios;
    const IDENTIFICADOR = 789;
    static $quantidade = 0;

    public function __construct(){
        $this->funcionarios = array();
}




function addFuncionario(Funcionario $funcionario){
    $this->funcionarios[] = $funcionario;
    self::$quantidade++;
}

    public function  getFuncionarios(){
        return $this->funcionarios;
    }



    function getFuncionario(int $index){
        return $this->funcionarios[$index];
    }


}