<?php 
    if ($_COOKIE['username'] != 'null' || $_COOKIE['password'] != 'null')
        header('Location: ./index.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/login.css">
    <title>Login page</title>
</head>
<body>
    <canvas id="background"></canvas>
    <div class="container">
        <div class="img-container">
            <img src="./resources/default_user.png" width="100" height="100">
        </div>
        <hr>
        <form action="./_log.php" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username">
            <label for="password">Password:</label>
            <input type="password" name="password" id="password">
            <button type="submit" id="sub">Log In</button>
        </form>
        <hr>
        <div class="register-container">
            <button>Register</button>
        </div>
    </div>
    <script type="commonjs" src="./javascript/background.js"></script>
</body>
</html>