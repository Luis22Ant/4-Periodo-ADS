<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
$patos = 99;
while ($patos != 0) {
    echo "<h5>$patos patinhos foram passear<br>Além das montanhas<br>Para brincar<br>A mamãe gritou: ";
    for ($i = 0; $i < $patos; $i++) {
        echo "quá, ";
    }
    echo "<br>Mas só {$patos - 1} patinhos voltaram de lá</h5>";
    $patos--;
}
?>
</body>
</html>
