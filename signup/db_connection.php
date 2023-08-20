
<?php
$host = 'dpg-cjh2hg337aks7385gukg-a';
$db = 'login_signup'; // Name of the database you created
$user = 'root';     // Default MySQL user in XAMPP
$password = 'SKHaGBQlhlGiGnltO6vp3509PkcoA8Hb';     // Default MySQL password in XAMPP

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}
?>

