<?php

// Destination email address
$to = 'girges.sabry@gmail.com';

// Fetching form values from POST data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];

// Email headers
$headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

// Constructing the email body
$output = "Name: " . $name . "\nEmail: " . $email . "\nSubject: " . $subject . "\n\nMessage: " . $msg;

// Sending the email
$send = mail($to, $subject, $output, $headers);
