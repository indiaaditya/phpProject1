<?php
    $TestId = $_REQUEST[i];
    $TestId = intval($TestId);
    $TestStatus = $_REQUEST[s];
    $TestStatus = intval($TestStatus);
    UpdateTestStatus($TestId,$TestStatus);
    print("Set Test Status");
    

?>