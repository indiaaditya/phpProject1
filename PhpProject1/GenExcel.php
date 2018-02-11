<?php  
 $TestId = $_REQUEST['i'];//string 
 $TestId = intval($TestId);//Convert String to Integer
 GenerateExcelRpt($TestId);
 print("GenerateExcelRpt function called!");
?>