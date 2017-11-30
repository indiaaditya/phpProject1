<?php	 
$ServoTq = ServoGetActualTq();
print "$ServoTq,";
$ServoPosn = ServoGetActualPosn();
print "$ServoPosn,";
$ServoCmdStat = ServoGetCmdStatus();
print "$ServoCmdStat";
?>
