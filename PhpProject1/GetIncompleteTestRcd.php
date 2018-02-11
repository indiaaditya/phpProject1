<?php
$RecordNum = $_REQUEST['r'];
$RecordNum = intval($RecordNum);
$result = GetSpecificRcdOfIncompleteTests($RecordNum);
print "$result";
?>