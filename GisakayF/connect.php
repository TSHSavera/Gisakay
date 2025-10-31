<?php
$sn = "localhost";
$un = "root";
$pw = "";
$db = "gisakay";

$conn = new mysqli($sn, $un, $pw, $db);

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());

}

//Echo
echo "<script>console.log('Connected to DB $db successfully');</script>";

?>