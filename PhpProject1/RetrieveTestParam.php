<?php  
/*
//print "Calling DoubleUp begin";
$value = $_REQUEST['q']; //uirTestPressure
$value = intval($value);//Convert String to Integer
$value2 = $_REQUEST['r']; //uirOpenRotation
$value2 = intval($value2);//Convert String to Integer
$value3 = $_REQUEST['s']; //frClosingTq
$value3 = floatval($value3);//Convert String to Integer
$value4 = $_REQUEST['t']; 
$value4 = intval($value4);//Convert String to Integer
$result = StoreTestParams($value, $value2, $value3, $value4);    
print "Calling StoreTestParams($value,$value2,$value3,$value4) returned $result";    
*/
$TP_TestPr = RetrieveTestPressure();
print "$TP_TestPr,";
$TP_OpenRotation = RetrieveOpenRotation();
print "$TP_OpenRotation,";    
$TP_ClosingTq = RetrieveClosingTq();
print "$TP_ClosingTq,";
$TP_EndTq = RetrieveEndTq();
print "$TP_EndTq,";
$TP_TestCycles = RetrieveTestCycles();
print "$TP_TestCycles";    
?>
