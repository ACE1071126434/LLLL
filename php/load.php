<?php

    $phone=$_GET["phoneNum"];
    
	$link = mysqli_connect("localhost", "root", "", "tenseven");

	$query = "SELECT * FROM log WHERE phonenum='{$phone}'";

	mysqli_query($link, "set names utf8");

	$result = mysqli_query($link, $query);
	
	$row = mysqli_fetch_assoc($result);
	
	 if($row['phonenum']==$phone){
		
		     echo "登录成功";
		
	  }else{
			
			echo "无此用户,点击注册";
		}

?>