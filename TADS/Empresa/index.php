<?php
require_once "Departamento.php";
require_once "Funcionario.php";


$funcionario = new Funcionario(1336,"Luis",123);
$funcionario2 = new Funcionario(1234,"Thiago",15000);

$dep = new Departamento();

$dep->addFuncionario($funcionario);
$dep->addFuncionario($funcionario2);

var_dump($dep->getFuncionario(1));

echo Departamento::$quantidade;










