<?php
    setcookie('username', 'null', strtotime('+30 days'));
    setcookie('password', 'null', strtotime('+30 days'));

    if ($_COOKIE['username'] == 'null' || $_COOKIE['password'] == 'null') {  
        header('Location: ./login.php');
    }
?>  
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
</head>
<body>
    
</body>
</html>