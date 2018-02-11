<?php  
$strConductor = $_REQUEST['c'];
$RecordNum = $_REQUEST['r'];
$RecordNum = intval($RecordNum);
$Result = GetSpecificRcdOfTestByConductors($strConductor,$RecordNum);
print "$Result";
?>