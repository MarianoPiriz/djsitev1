<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins:wght@700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/uploader.css" />
    <title>GigadminLogin</title>
  </head>
  <body>


<?php
require 'conexion.php';

session_start();

$user = $_POST['user'];
$pass = $_POST['pass'];
$md5pass = md5($pass);

if(!isset($user) && !isset($pass)){
    
  session_destroy();

  header("location: gigslogin.html");
  
  exit();
};



$q = "SELECT COUNT(*) as contador from users where user = '$user' and pass ='$md5pass' ";


$consulta =mysqli_query($conexion,$q);



$array =mysqli_fetch_array($consulta);



if($array['contador']>0){
    
    
    
    $_SESSION['username']=$user;
    
    header("location: giguploader.php");
    
}

else{
  
  session_destroy();

    echo "<h1 class='title'>WRONG LOGIN... Try again Bro!<h1/> ";
    echo "<li><a href='/gigslogin.html'>BACK TO LOGIN</a></li>";
};


?>


  </body>
</html>