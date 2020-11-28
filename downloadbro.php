<?php

    function sanitize($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $name = sanitize($_POST['name']);
    $phone = sanitize($_POST['phone']);
    $email = sanitize($_POST['email']);
    $content = sanitize($_POST['content']);

    // echo($name);
    // echo($phone);
    // echo($email);
    // echo($content);

    $to = 'testsoultree@modernspaaces.com';
    // $to = 'rajath@pyneedslocal.com';
    $subject = 'Leads from Soultree';
    $from = $email;

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $headers .= 'From: ' . $from . "\r\n" .
            'Reply-To: ' . $from . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

    $message = '<html><body>';
    $message .= '<p>Name: ' . $name . '</p>';
    $message .= '<p>Phone: ' . $phone . '</p>';
    $message .= '<p>Email: ' . $email . '</p>';
    $message .= '<p>content: ' . $content . '</p>';
    $message .= '</body></html>';
    
    // echo($message);

    mail($to, $subject, $message, $headers);
    header("Location: /soultree/pdffile.php");
?>