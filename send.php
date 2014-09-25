<?

		function strip_all($str_to_strip)
		 {
			$striped=strip_tags($striped);
		 	$striped=urldecode($str_to_strip);
		 	$striped=mysql_escape_string($striped);
		 	return $striped;
		 }
		//print_r($_POST);
		$fname = $_POST['name'];
		$femail = $_POST['email'];
		// $femail = 'whatever@what.as';


		//yb@uxdepot.ru

		if($fname != ''){
			$headers = 'MIME-Version: 1.0' . "\r\n" ;
			$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n" ;
			$headers .= 'From: Wisetest <info@wisetest.ru>' . "\r\n";
			$message = "Name:\n ".$fname."\n<br>\n\n"."Email:\n ".$femail."\n<br>\n\n Useragent:".$_SERVER['HTTP_USER_AGENT']."\n\n\t\t=====".$_SERVER['REMOTE_ADDR'];
			mail('akella.a@gmail.com,yb@uxdepot.ru', '[WISETEST] Beta', $message, $headers);
		}
		echo 'Sent';
		?>