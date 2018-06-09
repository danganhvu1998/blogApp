<?php

header('Access-Control-Allow-Origin: *');
echo "{";
echo '"result":1,';
echo '"id":'.$result->id.",";
echo '"name":"'.$result->name.'",';
echo '"email":"'.$result->email.'"';
echo "}";

?>