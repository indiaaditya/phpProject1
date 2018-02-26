<?php    
print "Calling StoreResumeTestParam begin";
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
$value6 = $_REQUEST['v'];//Test ID
$value6 = intval($value6);
$value7 = $_REQUEST['w'];//Completed Cycles
printf("Function Call begins");
$result = storeResumeTestParams($value, $value2, $value3, $value4, $value5, $value6, $value7);    
printf("Function Call Ends");
?>
