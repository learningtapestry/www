<?php
session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));
header('Content-type: application/json');

$Recipient = 'social@learningtapestry.com'; // <-- Set your email here

if($Recipient) {

	$Caller = $_POST['caller'];

	$Subject = "LT Contact Form";

	// Fields values
	$Name = $_POST['name'];
	$Email = $_POST['email'];
	$Message = $_POST['message'];
	
	$Email_body = "";
	if(strlen($Name) > 0) {
		$Email_body .= "From: " . $Name . " \n" .
					   "Email: " . $Email . "\n" .
					   "Message: " . $Message . "\n";
	} else {
		$Email_body .= "From: " . $Email . " \n" .
					   "Message: " . $Message . "\n";
	}

	$Email_headers = "";
	$Email_headers .= 'From: ' . $Name . ' <' . $Email . '>' . "\r\n".
					  "Reply-To: " .  $Email . "\r\n";

	// mail function
	$sent = mail($Recipient, $Subject, $Email_body, $Email_headers);

	if ($sent){
		$emailResult = array ('sent'=>'yes');
	} else {
		$emailResult = array ('sent'=>'no');
	}

	echo json_encode($emailResult);

} else {

	$emailResult = array ('sent'=>'no');
	echo json_encode($emailResult);

}

?>
