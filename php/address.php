<?php
	$flag = $_GET["flag"];
	$link = mysqli_connect("localhost", "root" ,"" , "tenseven");
	mysqli_query($link, "set names utf8");
	switch ($flag) {
		case 'add':
			$name = $_GET["name"];
			$areas = $_GET["areas"];
			$address = $_GET["address"];
			$tel = $_GET["tel"];
			$query = "INSERT INTO address(id,userName,area,street,tel) VALUES(NULL,'{$name}','{$areas}','{$address}','{$tel}')";
			
			$result = mysqli_query($link, $query);
			if($result) {
				echo "成功";
			} else {
				echo "失败";
			}
			break;
		case 'all':
			$query = "SELECT * FROM address";
			$result = mysqli_query($link, $query);
			$arr = [];
			while($row = mysqli_fetch_assoc($result)) {
				$arr[] = $row;
			}
			$res = ["list"=>$arr];
			echo json_encode($res);
			break;
		case 'del':
			$id = $_GET["id"];
			$query = "DELETE FROM address WHERE id={$id}";
			$result = mysqli_query($link, $query);
			if($result) {
				echo "成功删除";
			} else {
				echo "删除失败";
			}
			break;
		default:
			break;
	}
	mysqli_close($link);
	
?>