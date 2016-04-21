<?php
require_once 'swiftmailer/lib/swift_required.php';

// get user info from the contact form
$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$fullName = $firstName . ' ' . $lastName;
$email = $_POST['email'];
$myMessage = $_POST['message'];

// Sendmail
$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');

// Create the Mailer using your created Transport
$mailer = Swift_Mailer::newInstance($transport);

// Create the message
$message = Swift_Message::newInstance()
  // Give the message a subject
  ->setSubject('New Message');

  // Set the From address with an associative array
  ->setFrom(array($email => $fullName));

  // Set the To addresses with an associative array
  ->setTo(array('keith.m4@gmail.com' => 'Keith Moore'));

  // Give it a body
  ->setBody($myMessage);

  // And optionally an alternative body
  ->addPart('<q>Here is the message itself</q>', 'text/html');
  ;

$result = $mailer->send($message);