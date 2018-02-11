<?php
    $TestResult = $_REQUEST['t'];
    $TestId = $_REQUEST['i'];
    $TestId = intval($TestId);
    UpdateTestResult($TestResult,$TestId);
    print("Set Test Result");
?>