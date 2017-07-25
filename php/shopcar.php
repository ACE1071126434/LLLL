<?php
$link = mysqli_connect("localhost", "root", "", "tenseven");

$flag = $_GET["flag"];

switch ($flag) {
	case 'add' :
		$goodsID = $_GET["goodsID"];
		$num = $_GET["num"];

		$query = "SELECT * FROM shopcar WHERE goodsID={$goodsID}";
		mysqli_query($link, "set names utf8");
		$result = mysqli_query($link, $query);
		$row = mysqli_fetch_assoc($result);
		if ($row != NULL) {
			$addNum = $row["num"];
			$query = "UPDATE shopcar SET num={$addNum}+1 WHERE goodsID={$goodsID}";
			$result = mysqli_query($link, $query);
			echo "成功增加";
		} else {
			$query = "INSERT INTO shopcar(id,goodsID,num) VALUES(NULL,{$goodsID},{$num})";
			$result = mysqli_query($link, $query);
			echo "成功加入购物车";
		}
		break;
	case 'find':
		$query = "SELECT * FROM shopcar";
		$result = mysqli_query($link, $query);
		$arr = [];
		while($row = mysqli_fetch_assoc($result)) {
			$arr[] = $row;
		}
		echo json_encode($arr);
		break;
	case '':
		break;
	default :
		break;
}

mysqli_close($link);
?>