<?php    
print "Calling StoreTestParam begin";
$value = $_REQUEST['q']; //uirTestPressure
$value = intval($value);//Convert String to Integer
$value2 = $_REQUEST['r']; //uirOpenRotation
$value2 = intval($value2);//Convert String to Integer
$value3 = $_REQUEST['s']; //frClosingTq
$value3 = floatval($value3);//Convert String to float
$value4 = $_REQUEST['t']; //frEndTq
$value4 = floatval($value4);//Convert String to float
$value5 = $_REQUEST['u'];//uirTestCycles
$value5 = intval($value5);
$result = StoreTestParams($value, $value2, $value3, $value4, $value5);    
print "Calling StoreTestParams($value,$value2,$value3,$value4,$value5) returned $result";    
?>
