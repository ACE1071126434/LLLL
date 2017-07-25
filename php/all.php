<?php
	$link = mysqli_connect("localhost", "root", "", "tenseven");
	
	$query = "SELECT * FROM goods";
	
	mysqli_query($link, "set names utf8");
	
	$result = mysqli_query($link, $query);
	
	$arr = [];
	
	while($row = mysqli_fetch_assoc($result)) {
		$arr[] = $row;
	};
	$resultArr = ["err"=>1,"list"=>$arr];
	echo json_encode($resultArr);
	
?>