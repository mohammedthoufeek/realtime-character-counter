<?php
include 'db_connection.php';

$error_message = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

    if (mysqli_query($conn, $query)) {
        // Successful signup
        mysqli_close($conn);
        header('Location: ../textcount/main.html'); // Redirect to index.html
        exit();
    } else {
        echo '<script type="text/javascript">
            window.onload = function () { alert("Try Again!!"); }
        </script>';
    }
}

mysqli_close($conn);
?>
