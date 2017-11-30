<?php    
//print "Calling DoubleUp begin";
$value = $_REQUEST['q']; 
$value = intval($value);//Convert String to Integer
$value2 = $_REQUEST['r']; 
$value2 = intval($value2);//Convert String to Integer

$result = DoubleUp($value);    
print "Calling DoubleUp($value) returned $result";    

$result = AddUp();
print "AddUp() returned $result";  

$result = AddUp2Params($value, $value2);    
print "Calling AddUp2Params($value,$value2) returned $result";    
?>
