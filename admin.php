<?php 
    require_once('./php/users.php');

    use users\PlayerUser;

    $users = [];

    $connection = new mysqli(
        $hostname = 'localhost',
        $username = 'aaron',
        $password = 'aaron12lol',
        $database = 'web'
    );

    try 
    {
        $result = $connection->query('SELECT * FROM USER');

        while ($row = $result->fetch_assoc())
        {
            $users[] = new PlayerUser($row['ID'], $row['USERNAME'], $row['PASSWORD']);
        }
    }catch(mysqli_sql_exception $e)
    {
        echo ''. $e->getMessage() .'';
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/admin.css">
    <title>Admin Data Base</title>
</head>
<body>
    <aside>
        <h1>Admin</h1>
        <hr>
        <div class="options">
            <hr>
            <button>Show users</button>
            <button>Show games</button>
            <button>Download info users</button>
            <hr>
        </div>
    </aside>
    <table border="0">
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
        </tr>
        <?php
            foreach ($users as $user) 
            {
                ?>
                    <tr>
                    <td id="<?php echo 'id: '.$user->getId()?>"><?php echo $user->getId();?></td>
                    <td id="<?php echo 'username: '.$user->getUsername()?>"><?php echo $user->getUsername();?></td>
                    <td id="<?php echo 'password: '.$user->getPassword()?>"><?php echo $user->getPassword();?></td>
                    </tr>
                <?php
            }
        ?>
    </table>
</body>
</html>