<?php

session_start();
session_destroy();

header("location: gigslogin.html");

exit();

?>