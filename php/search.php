<?php
	$name = $_GET['name'];
	$url = "https://api.douban.com/v2/movie/search?tag=$name";
	$movieObj = file_get_contents($url);
//	$arr = ["err"=>1,"list"=>$movieObj];
	echo $movieObj;
	
?>