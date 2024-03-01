<?php

$dados = array(
    array(0,"João","joao@i.br","123456","m",1),
    array(1,"Maria","maria@i.br","165473","f",1),
    array(2,"Gabriela","gabilimnda@i.br","9477343","f",1),
    array(3,"Kurt","cobain@i.br","2332233","m",0),
    array(4,"James","hetfield@i.br","44533","m",0);
)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <th>
    <td>Id</td>
    <td>Nome</td>
    <td>Email</td>
    <td>Senha</td>
    <td>Gênero</td>
    <td>Receber email?</td>
</th>
<?php
foreach ($dados as $registro) :
    ?>
    <tr>
    <td><?= $registro[0]?></td>
    <td><?= $registro[1]?></td>
    <td><?= $registro[2]?></td>
    <td><?= $registro[3]?></td>
    <td><?= ($registro[4] == 'm')? 'Masculino' : 'Feminino'?></td>
    <td><?= ($registro[5] == 0)? 'Sim' : 'Não'?></td>
</tr>
<?php
endforeach
?>
</table>
</body>
</html>