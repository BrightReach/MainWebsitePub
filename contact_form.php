<?php
// Fetching Values from URL.
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try{                                // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'archimedes.krystal.co.uk';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'admin@brightreachstudio.co.uk';    // SMTP username
        $mail->Password = 'CENSORED';                       // SMTP password
        $mail->Port = CENSORED;  

        $name = $_POST['name1'];
        $email = $_POST['email1'];
        $phone = $_POST['phone1'];
        $message = $_POST['message1'];
        
        $mail->setFrom($email, $name);
        $mail->addAddress('craig@brightreachstudio.co.uk', 'Craig Taylor');     // Add a recipient
        $mail->addCC($email, $name);

        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Contact via Web - [' . $name . ']';
        $template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
        . '<br/>Thank you very much for your query.<br/><br/>'
        . 'Name:' . $name . '<br/>'
        . 'Email:' . $email . '<br/>'
        . 'Contact No:' . $phone . '<br/>'
        . 'Message:' . $message . '<br/><br/>'
        . 'This is a Contact Confirmation mail.'
        . '<br/>'
        . 'Your reply will arrive within 48 hours.</div>';
        $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" .$template ."</div>";
        $mail->Body = $sendmessage;
        $mail->WordWrap = 78;
        $mail->send();

           // Message lines should not exceed 70 characters (PHP rule), so wrap it.
        
        // Send mail by PHP Mail Function.
       echo "Thank you for getting in contact with me. Please give me up to 48 hours to reply to your query.";
                
        }
                catch (Exception $e)
        {
               echo "There's been a problem with sending your email. Apologies for the inconvenience.<br>";
               echo 'Mailer Error: ' . $mail->ErrorInfo;
       }
        
?>
