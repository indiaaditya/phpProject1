<?php
$PrT_CurrentInMAX1000 = $_REQUEST['M'];
$PrT_MaxPressure = $_REQUEST['P'];
$PrT_CurrentInMAX1000 = intval($PrT_CurrentInMAX1000);
$PrT_MaxPressure = intval($PrT_MaxPressure);
$ResultPressure = PrTransConvertCurrentToPressure($PrT_CurrentInMAX1000,$PrT_MaxPressure);
?>