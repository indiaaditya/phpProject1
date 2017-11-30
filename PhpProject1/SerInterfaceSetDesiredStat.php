<?php
$DesIsoValve = $_REQUEST['i'];
$DesIsoValve = intval($DesIsoValve);
$DesInletVentValve = $_REQUEST['v'];
$DesInletVentValve = intval($DesInletVentValve);
$DesOutletVentValve = $_REQUEST['o'];
$DesOutletVentValve = intval($DesOutletVentValve);
$DesCntRly = $_REQUEST['c'];
$DesCntRly = intval($DesCntRly);
$DesRstRly = $_REQUEST['r'];
$DesRstRly = intval($DesRstRly);
SerInterfaceSetDesiredStat($DesIsoValve,$DesInletVentValve,$DesOutletVentValve,$DesCntRly,$DesRstRly);
$ActualIsoValveStatus = SerInterfaceGetInletValveStatus();
print"$ActualIsoValveStatus,";
$ActualInletVentValveStatus = SerInterfaceGetInletValveStatus();
print "$ActualInletVentValveStatus,";
$ActualOutletVentValveStatus = SerInterfaceGetOutletValveStatus();
print "$ActualOutletVentValveStatus,";
$InletPressure = SerInterfaceGetInletPressureStatus();
print "$InletPressure,";
$OutletPressure = SerInterfaceGetOutletPressureStatus();
print "$OutletPressure,";
$TqPosRawVal = SerInterfaceGetPosTqRawVal();
print "$TqPosRawVal,";
$TqNegRawVal = SerInterfaceGetNegTqRawVal();
print "$TqNegRawVal";
?>

