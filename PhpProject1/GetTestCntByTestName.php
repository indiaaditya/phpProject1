<?php  
    $strTestName = $_REQUEST['c'];
    $Result = GetCountOfTestById($strTestName);
    print "$Result";
?>