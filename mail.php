<?php

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];

$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "mkrk17@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");



?>