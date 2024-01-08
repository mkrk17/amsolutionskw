<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "mkrk17@gmail.com";
    $to = "mkrk17@gmail.com, abbas@amsolutionskw.com";
    $subject = "New Form Submission";
    $headers = "From: $email";

    $mailBody = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    // Use mail() function to send the email
    if (mail($to, $subject, $mailBody, $headers)) {
        // Redirect to the thank you page
        header("Location: thankyou.html");
        exit();
    } else {
        // Optionally, you can redirect to an error page
        header("Location: error.html");
        exit();
    }
}
?>