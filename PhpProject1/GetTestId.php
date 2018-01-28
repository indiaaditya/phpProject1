<?php
//print "Get Test Id";
$value = $_REQUEST['D'];//Date
$value = intval($value);//Convert String to Integer
$value2 = $_REQUEST['M'];//Month
$value2 = intval($value2);//Convert String to Integer
$value3 = $_REQUEST['Y'];//year
$value3 = intval($value3);//Convert String to Integer
$value4 = $_REQUEST['H'];//Hour
$value4 = intval($value4);//Convert String to Integer
$value5 = $_REQUEST['m'];//Minute
$value5 = intval($value5);//Convert String to Integer
$Result = GetTestId($value,$value2,$value3,$value4,$value5);
print "$Result";   
?>
