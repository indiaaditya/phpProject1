<?php 
    $TestID = $_REQUEST['i'];
    $Result = RetrieveTestParamFromDB($TestID);
    print "$Result";
?>