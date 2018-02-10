<?php    
$value = $_REQUEST['q']; //Test ID
$value = intval($value);//Convert String to Integer
$value2 = $_REQUEST['r']; //Desired Status
$value2 = intval($value2);//Convert String to Integer
$result = UpdateTestStatus($value, $value2);    
//print "Calling StoreTestParams($value,$value2,$value3,$value4,$value5,$value6,$value7) returned $result";    
?>