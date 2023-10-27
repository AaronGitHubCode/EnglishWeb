<?php 
    require_once('./php/users.php');

    use users\User;

    $_username = $_POST['username'];
    $_password = $_POST['password'];

    $connection = new mysqli(
        $hostname = 'localhost',
        $username = 'aaron',
        $password = 'aaron12lol',
        $database = 'web'
    );

    try
    {
        $sql = "SELECT * FROM USER WHERE USERNAME LIKE '".$_username."' AND PASSWORD LIKE '".$_password."';";

        $row = $connection->query($sql)->fetch_assoc();

        echo $row['USERNAME'];

        if ($_username == $row['USERNAME'])
        {
            setcookie('username', sha1($username), strtotime('+30 days'));
            setcookie('password', sha1($password), strtotime('+30 days'));
            header('Location: ./index.php');
        }
    }catch(mysqli_sql_exception $e)
    {
        echo ''. $e->getMessage() .'';
    }finally
    {
        if (! $connection->close())
        {
            echo ''. $e->getMessage() .'';
        }
    }
?>