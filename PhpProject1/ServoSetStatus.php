<?php
$Srvo_DesTq = $_REQUEST['T'];
$Srvo_DesDirnOfRtn = $_REQUEST['S'];
$Srvo_DesDegOfRtn = $_REQUEST['R'];
$Srvo_DesDegOfRtn = intval($Srvo_DesDegOfRtn);//Convert String to Integer
$Srvo_DesDirnOfRtn = intval($Srvo_DesDirnOfRtn);
$Srvo_DesTq = floatval($Srvo_DesTq);
ServoSetDesiredTqAndDegOfRtn($Srvo_DesDegOfRtn,$Srvo_DesDirnOfRtn,$Srvo_DesTq);
?>
