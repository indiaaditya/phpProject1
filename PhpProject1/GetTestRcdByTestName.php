<?php  
    $strTestName = $_REQUEST['c'];
    $RecordNum = $_REQUEST['r'];
    $RecordNum = intval($RecordNum);
    $Result = GetSpecificRcdOfId($strTestName,$RecordNum);
    print "$Result";
?>