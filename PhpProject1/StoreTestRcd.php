<?php 
$viTestId = $_REQUEST['b'];
$viTestId = intval($viTestId);
$viTestCycleNum = $_REQUEST['c'];
$viTestCycleNum = intval($viTestCycleNum);
$viInletPressure = $_REQUEST['d'];
$viInletPressure = intval($viInletPressure);
$viOutletPressure = $_REQUEST['e'];
$viOutletPressure = intval($viOutletPressure);
$vfPgmdTq = $_REQUEST['f'];
$vfPgmdTq = floatval($vfPgmdTq);
$vfTestTq = $_REQUEST['g'];
$vfTestTq = floatval($vfTestTq);
$viInletVentingVlvStat = $_REQUEST['h'];
$viInletVentingVlvStat = intval($viInletVentingVlvStat);
$viOutletVentingVlvStat = $_REQUEST['i'];
$viOutletVentingVlvStat = intval($viOutletVentingVlvStat);
$viOutletExhaustVlvStat = $_REQUEST['j'];
$viOutletExhaustVlvStat = intval($viOutletExhaustVlvStat);
$viServoStat = $_REQUEST['k'];
$viServoStat = intval($viServoStat);
$viTstDate = $_REQUEST['l'];
$viTstDate = intval($viTstDate);
$viTstMonth = $_REQUEST['m'];
$viTstMonth = intval($viTstMonth);
$viTstYr = $_REQUEST['n'];
$viTstYr = intval($viTstYr);
$viTstHH = $_REQUEST['o'];
$viTstHH = intval($viTstHH);
$viTstMM = $_REQUEST['p'];
$viTstMM = intval($viTstMM);
$viTstSS = $_REQUEST['q'];
$viTstSS = intval($viTstSS);
$viTstSampleNum = $_REQUEST['r'];
$viTstSampleNum = intval($viTstSampleNum);
storeTestRcd($viTestId,$viTestCycleNum,$viInletPressure,$viOutletPressure,$vfPgmdTq,$vfTestTq,$viInletVentingVlvStat,$viOutletVentingVlvStat,$viOutletExhaustVlvStat,$viServoStat,$viTstDate,$viTstMonth,$viTstYr,$viTstHH,$viTstMM,$viTstSS,$viTstSampleNum);
?>
