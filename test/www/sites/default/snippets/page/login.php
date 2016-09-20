<?php
  function isUserHasRole2($role = "administrator"){
    global $user;
    return ( ($user->uid == 1) || (in_array($role, array_values($user->roles))) ) ? true : false;
  }

  global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/";
  if(isUserHasRole2()){  header ("Location: ".base_path().$langpath); }
?>
