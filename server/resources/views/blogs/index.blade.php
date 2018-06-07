<?php
header('Access-Control-Allow-Origin: *');
$didDot = 0;
echo '{"blogs":[';
foreach ($blogs as $blog) {
	if($didDot==1) echo",";
	$didDot=1;

	echo '{"user_id":'.$blog['blog']->user_id.',';
	echo '"created_at":"'.$blog['blog']->created_at.'",';
	echo '"created_by":"'.$blog['name'].'",';
	echo '"title":"'.$blog['blog']->title.'",';
	echo '"body":"'.$blog['blog']->body.'"}';
}
echo ']}';

?>