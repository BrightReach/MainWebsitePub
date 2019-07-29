<?php
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$phone = $_POST['phone1'];
$type = $_POST['type1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
        $subject = 'Contact via Web - [' . $name . '] [' .$type. ']';
        // To send HTML mail, the Content-type header must be set.
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        $headers .= 'From: ' . $email. "\r\n"; // Sender's Email
        $headers .= 'Cc: ' . $email. "\r\n"; // Carbon copy to Sender
        $template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
        . '<br/>Thank you...! For Contacting Us.<br/><br/>'
        . 'Name:' . $name . '<br/>'
        . 'Email:' . $email . '<br/>'
        . 'Business Type: ' . $type. '<br/>'
        . 'Contact No:' . $phone . '<br/>'
        . 'Message:' . $message . '<br/><br/>'
        . 'This is a Contact Confirmation mail.'
        . '<br/>'
        . 'We Will contact You as soon as possible .</div>';
        $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
        // Message lines should not exceed 70 characters (PHP rule), so wrap it.
        $sendmessage = wordwrap($sendmessage, 70);
        // Send mail by PHP Mail Function.
        $mail = mail('admin@brightreachstudio.co.uk', $subject, $sendmessage, $headers);
       if ($mail)
       { //echo "Thank you for getting in contact with me. Please give me up to 48 hours to reply to your query.";
                echo $subject, $sendmessage, $headers;
        }
       else {
               echo "There's been a problem with sending your email. Apologies for the inconvenience.";
       }

       // mail("craigtaylor89@yahoo.co.uk","Success","Great, Localhost Mail works");
        
?>