<?php
$oldPhone = $_GET["phoneNum"];
$userName = $_GET["userName"];
$gender = $_GET["gender"];
$birthday = $_GET['birthday'];
$newPhone = $_GET['newPhone'];

$link = mysqli_connect("localhost", "root", "", "tenseven");
mysqli_query($link, "set names utf8");

$query = "SELECT * FROM log WHERE phoneNum='{$oldPhone}'";

$result = mysqli_query($link, $query);

$row = mysqli_fetch_assoc($result);

$id = $row["id"];

$query = "UPDATE log SET nickName='{$userName}',gender='{$gender}',birthday='{$birthday}',phonenum='{$newPhone}' WHERE id='{$id}'";

$result = mysqli_query($link, $query);

$row = mysqli_affected_rows($link);

if ($row) {
	echo "修改成功";
} else {
	echo "修改失败";
}
?>