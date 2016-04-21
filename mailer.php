<?php
       require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
       $mail = new PHPMailer(); // defaults to using php "mail()"
       $body = 'this is an email';
       $mail->AddReplyTo("keith.m4@gmail.com","Keith Moore");
       $mail->SetFrom('keith.m4@gmail.com', 'From Stephen Tiedemann');
       $address = "keith.m4@gmail.com";
       $mail->AddAddress($address, "Keith Moore");
       $mail->Subject    = "PHPMailer Test Subject via mail(), basic";
       $mail->MsgHTML($body);
       if(!$mail->Send()) {
       echo "Mailer Error: " . $mail->ErrorInfo;
       } else {
       echo "Message sent!";
       }