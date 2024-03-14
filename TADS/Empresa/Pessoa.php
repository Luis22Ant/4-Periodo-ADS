<?php

abstract class Pessoa{
    protected string $nome;
    protected float $salario;


     public function __construct(float $salario,string $nome) {
     $this->salario = $salario;
     $this->nome = $nome;
    }

    abstract public function setSalario(float $salario);
    abstract public function getSalario() : float;

    abstract public function setNome(string $nome);
    abstract public function getNome() : string;

 
}