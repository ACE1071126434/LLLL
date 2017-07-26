<?php
$link = mysqli_connect("localhost", "root", "", "tenseven");
mysqli_query($link, "set names utf8");
$flag = $_GET["flag"];

switch ($flag) {
	case 'add' :
		$goodsID = $_GET["goodsID"];
		$shopName = $_GET["shopName"];
		$goodsName = $_GET["goodsName"];
		$showImgUrl = $_GET["showImgUrl"];
		$intro = $_GET["intro"];
		$standard = $_GET["standard"];
		$oldPrice = $_GET["oldPrice"];
		$nowPrice = $_GET["nowPrice"];
		$num = $_GET["num"];

		$query = "SELECT * FROM shopcar WHERE goodsID={$goodsID}";
		
		$result = mysqli_query($link, $query);
		$row = mysqli_fetch_assoc($result);
		if ($row != NULL) {
			$addNum = $row["num"];
			$query = "UPDATE shopcar SET num={$addNum}+1 WHERE goodsID={$goodsID}";
			$result = mysqli_query($link, $query);
			echo "成功增加";
		} else {
			$query = "INSERT INTO shopcar(id,goodsID,shopName,goodsName,showImgUrl,intro,standard,oldPrice,nowPrice,num) VALUES(NULL,{$goodsID},'{$shopName}','{$goodsName}','{$showImgUrl}','{$intro}','{$standard}','{$oldPrice}','{$nowPrice}',{$num})";
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