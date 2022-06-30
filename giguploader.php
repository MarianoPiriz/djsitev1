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
    
    <title>Gig Uploader</title>
</head>
 
<body>


<?php

session_start();
$sesionuser = $_SESSION['username'];

if(!isset($sesionuser)){

    
  session_destroy();

  header("location: gigslogin.html");
  
  exit();

} else {
    echo "<H1 class='title'> WELCOME TO GIG ADMIN </H1>";
}

?>






<form method="POST" action="postedgigs.php">
        <span class="number">#1</span> <br />
        <span>Date:</span>
        <input class="formstyler" name="fecha1" type="text" /><br />
        <br />
        <span>Description:</span>

        <textarea
          style="overflow: hidden"
          class="formstyler"
          name="ds1"
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <span>RA link:</span>

        <input class="formstyler" name="ralink1" type="text" />
        <br />
        <br />
        <span class="number">#2</span> <br />
        <span>Date:</span>
        <input class="formstyler" name="fecha2" type="text" /><br />
        <br />
        <span>Description:</span>

        <textarea
          style="overflow: hidden"
          class="formstyler"
          name="ds2"
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <span>RA link:</span>

        <input class="formstyler" name="ralink2" type="text" />
        <br />
        <br />
        <span class="number">#3</span> <br />
        <span>Date:</span>
        <input class="formstyler" name="fecha3" type="text" /><br />
        <br />
        <span>Description:</span>

        <textarea
          style="overflow: hidden"
          class="formstyler"
          name="ds3"
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <span>RA link:</span>

        <input class="formstyler" name="ralink3" type="text" />
        <br />
        <br />
        <span class="number">#4</span> <br />
        <span>Date:</span>
        <input class="formstyler" name="fecha4" type="text" /><br />
        <br />
        <span>Description:</span>

        <textarea
          style="overflow: hidden"
          class="formstyler"
          name="ds4"
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <span>RA link:</span>

        <input class="formstyler" name="ralink4" type="text" />
        <br />
        <br />
        <span class="number">#5</span> <br />
        <span>Date:</span>
        <input class="formstyler" name="fecha5" type="text" /><br />
        <br />
        <span>Description:</span>

        <textarea
          style="overflow: hidden"
          class="formstyler"
          name="ds5"
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <span>RA link:</span>

        <input class="formstyler" name="ralink5" type="text" />
        <br />
        <br />

        <input class="formbtn" type="submit" value="SEND" />
      </form>



<?php

echo "<div class='logoutbtn'><a href='salir.php'>LOGOUT!</a></div>";


?>





</body>
</html>