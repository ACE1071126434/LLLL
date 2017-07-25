<?php

   $phone=$_GET["phoneNum"];
   
//连接数据库
   $link=mysqli_connect("localhost", "root", "", "tenseven");
   
    mysqli_query($link, "set names utf8");
	
	
	$num = mysqli_affected_rows($link);
	
//	if($num>0){
//		
//		echo "您已经注册过了,请直接登录!";
//		
//	}else{
//		
//		注册新用户

		$query = "INSERT INTO log(id,phonenum) VALUES(NULL,'{$phone}')";
		
		$result = mysqli_query($link, $query);
		
		if($result){
			 echo "注册成功";
		}
		
       
//	}
	
	
	
	
  


?>