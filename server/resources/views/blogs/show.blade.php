<?php
header('Access-Control-Allow-Origin: *');
$didDot = 0;
echo '{ "blogs": [';
foreach ($blogs as $blog) {
	if($didDot==1) echo",";
	$didDot=1;

	echo '{"user_id":'.$blog->user_id.',';
	echo '"title":"'.$blog->title.'",';
	echo '"body":"'.$blog->body.'"}';
}
echo ']}';

?>