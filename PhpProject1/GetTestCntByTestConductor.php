<?php  
    $strConductor = $_REQUEST['c'];
    $Result = GetCountOfTestByConductors($strConductor);
    print "$Result";
?>