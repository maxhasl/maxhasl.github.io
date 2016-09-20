<?php
echo 1; exit;
    $email = $_POST['email'];
    //validate
    if(preg_match("/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/", $email)){
        //write in base
        db_query("INSERT INTO {o_subscribe} (email) VALUES ('%s')",$email);
        //result
        echo 1;
    }
    else
        echo 0;
