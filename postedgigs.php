<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins:wght@700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/uploader.css" />
    <title>Document</title>
</head>
<body>
    
<?php

ob_start();

$fecha1 = $_POST['fecha1'];
echo "<h1 class='fecha'>$fecha1</h1>"  ;
echo "<div class='divline'></div>";
$ds1 = $_POST['ds1'];
echo nl2br("<p class='descrip'>$ds1</p>");
$ralink1 = $_POST['ralink1'];
echo "<a href='$ralink1'target='_blank' class='ralink'>$ralink1</a>";
echo "<div class='divline'></div>";

$fecha2 = $_POST['fecha2'];
echo "<h1 class='fecha'>$fecha2</h1>"  ;
echo "<div class='divline'></div>";
$ds2 = $_POST['ds2'];
echo nl2br("<p class='descrip'>$ds2</p>");
$ralink2 = $_POST['ralink2'];
echo "<a href='$ralink2'target='_blank' class='ralink'>$ralink2</a>";
echo "<div class='divline'></div>";

$fecha3 = $_POST['fecha3'];
echo "<h1 class='fecha'>$fecha3</h1>"  ;
echo "<div class='divline'></div>";
$ds3 = $_POST['ds3'];
echo nl2br("<p class='descrip'>$ds3</p>");
$ralink3 = $_POST['ralink3'];
echo "<a href='$ralink3'target='_blank' class='ralink'>$ralink3</a>";
echo "<div class='divline'></div>";

$fecha4 = $_POST['fecha4'];
echo "<h1 class='fecha'>$fecha4</h1>"  ;
echo "<div class='divline'></div>";
$ds4 = $_POST['ds4'];
echo nl2br("<p class='descrip'>$ds4</p>");
$ralink4 = $_POST['ralink4'];
echo "<a href='$ralink4'target='_blank' class='ralink'>$ralink4</a>";
echo "<div class='divline'></div>";

$fecha5 = $_POST['fecha5'];
echo "<h1 class='fecha'>$fecha5</h1>"  ;
echo "<div class='divline'></div>";
$ds5 = $_POST['ds5'];
echo nl2br("<p class='descrip'>$ds5</p>");
$ralink5 = $_POST['ralink5'];
echo "<a href='$ralink5'target='_blank' class='ralink'>$ralink5</a>";
echo "<div class='divline'></div>";

$postedgigs = ob_get_clean();
file_put_contents('/home/u884635543/domains/tonydeepdisco.com/public_html/post.php', $postedgigs);

echo "<h1 class='title'>GIGS POSTED TO YOUR WEBSITE...  Done Bro!<h1/> ";
echo "<div class='logoutbtn'><a href='salir.php'> CLICK HERE TO LOGOUT!</a></div>";

?>



</body>
</html>