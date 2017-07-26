<?php
	$link = mysqli_connect("localhost", "root", "", "tenseven");
	
	$phonenum = $_GET["phonenum"];
	$password = $_GET["password"];
	$query = "UPDATE log SET password='{$password}' WHERE phonenum='{$phonenum}'";
	$result = mysqli_query($link, $query);
	if($result) {
		echo "成功";
	} else {
		echo "失败";
	}
	
	mysqli_close($link);
	
?>