<?php
require_once("UsuarioSessao.php");


$Usuario = new UsuarioSessao("Juquinha","Juca");


$Usuario->Salvar();
$Usuario->Ler();


var_dump($Usuario);