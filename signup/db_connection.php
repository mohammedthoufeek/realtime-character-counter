
<?php
$host = 'localhost';
$db = 'login_signup'; // Name of the database you created
$user = 'root';     // Default MySQL user in XAMPP
$password = '';     // Default MySQL password in XAMPP

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}
?>

