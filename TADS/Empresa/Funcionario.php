<?php
require_once "Pessoa.php";
class Funcionario extends Pessoa {
    private int $matricula;

    public function __construct(float $salario, string $nome, int $matricula) {
        parent::__construct($salario, $nome);
        $this->matricula = $matricula;
    }

    public function setSalario(float $salario) {
        if ($salario >= 1000) {
            $this->salario = $salario;
        }
    }

    public function getSalario(): float {
        return $this->salario;
    }

    public function setNome(string $nome) {
        $this->nome = $nome;
    }

    public function getNome(): string {
        return $this->nome;
    }

    public function getMatricula(): int {
        return $this->matricula;
    }

    public function setMatricula(int $matricula) {
        $this->matricula = $matricula;
    }
}
