<?php  
    $StartDate = $_REQUEST['d'];
    $StartDate = intval($StartDate);
    $StartMonth = $_REQUEST['m'];
    $StartMonth = intval($StartMonth);
    $StartYear = $_REQUEST['y'];
    $StartYear = intval($StartYear);
    $EndDate = $_REQUEST['D'];
    $EndDate = intval($EndDate);
    $EndMonth = $_REQUEST['M'];
    $EndMonth = intval($EndMonth);
    $EndYear = $_REQUEST['Y'];
    $EndYear = intval($EndYear);
    $RcdNum = $_REQUEST['r'];
    $RcdNum = intval($RcdNum);
    $Result = GetSpecificRcdOfTestBetnDates($StartDate,$StartMonth,$StartYear,$EndDate,$EndMonth,$EndYear,$RcdNum);
    print "$Result";  
?>