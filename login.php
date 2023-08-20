<?php
include 'db_connection.php';

$error_message = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) === 1) {
        // Successful login
        mysqli_close($conn);
        header('Location: textcount/main.html'); // Redirect to index.html
        exit();
    } else {
        // Failed login
        echo '<script type="text/javascript">
            window.onload = function () { alert("Invalid username or password"); }
        </script>';
    }
}

mysqli_close($conn);
?>
