<?php 
    session_start();
    require 'mail.php';

    if(isset($_POST['send'])):
      $name=$_POST['fullName'] ;  
      $email=$_POST['email'] ;  
      $subject=$_POST['subject'] ;  
      $areaNote=$_POST['message'] ;  

      
      if ($email==''):
        return;
      endif;

      try{

        $mail->setFrom($email,$name);
        $mail->addAddress('basheeralshamiry1144@gmail.com');
        $mail->Subject= $subject ;
        $mail->Body= '<h3>'.$areaNote.'</h3><br> from this email <br>  <code>'.$email.'</code>';


        $mail->send();
      }catch(Exception $ex){
        $_SESSION['message']='<div class="alert alert-danger ">'
                        .'<p> An error occurred in the transmission process :'. $ex .'</p>'
                        .'<button onclick="this.parentElement.style.display=\'none\'">X</button>'
                     .' </div>' ;  
      }

      $_SESSION['message']='<div class="alert alert-success ">'
                        .'<p> Your message has been sent successfully , please wait for a response to your <code>email</code></p>'
                        .'<button onclick="this.parentElement.style.display=\'none\'">X</button>'
                     .' </div>' ;  

      header("location:../contact.html#contact-form");
      die();

    endif;

?>