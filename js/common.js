//Angular控制器部分
var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "index-show.html"
	}).when("/index", {
		//首页
		templateUrl: "index-show.html"
	}).when("/severser", {
		//同城服务
		templateUrl: "severser.html"
	}).when("/libaiwu", {
		//礼拜五
		templateUrl: "libaiwu.html"
	}).when("/integral-shop", {
		//积分商城
		templateUrl: "integral-shop.html"
	}).when("/shopcar", {
		//购物车
		templateUrl: "shopcar.html"
	}).when("/center", {
		//个人中心
		templateUrl: "center.html",
	}).when("/my-count", {
		//我的账户
		templateUrl: "my-count.html",
	}).when("/my-order", {
		//我的订单
		templateUrl: "my-order-none.html",
	}).when("/my-integral", {
		//我的积分
		templateUrl: "my-integral.html",
	}).when("/integral-order", {
		//积分订单
		templateUrl: "integral-order.html",
	}).when("/my-wallet", {
		//我的钱包
		templateUrl: "my-wallet.html",
	}).when("/user-information", {
		//个人资料
		templateUrl: "user-information.html",
	}).when("/address-manger", {
		//地址管理
		templateUrl: "address-manger.html",
	}).when("/add-address", {
		//添加地址
		templateUrl: "add-address.html",
	}).when("/my-fav", {
		//我的收藏
		templateUrl: "my-fav.html",
	}).when("/recent", {
		//最近浏览
		templateUrl: "recent.html",
	}).when("/psd-edit", {
		//修改密码
		templateUrl: "psd-edit.html",
	}).when("/change-step1", {
		//换绑第一步
		templateUrl: "change-step1.html",
	}).when("/change-step2", {
		//换绑第二步
		templateUrl: "change-step2.html",
	}).when("/change-step3", {
		//换绑第三步
		templateUrl: "change-step3.html",
	}).when("/my-msg", {
		//我的消息
		templateUrl: "my-msg.html",
	}).when("/feedback", {
		//意见反馈
		templateUrl: "feedback.html",
	}).when("/logoIn", {
		//登录
		templateUrl: "phone-logoin.html",
	}).when("/forget", {
		//忘记密码
		templateUrl: "forget.html",
	}).when("/signUp", {
		//注册
		templateUrl: "phone-logoin.html",
	}).when("/exchange", {
		//充值卡兑换
		templateUrl: "exchange.html",
	}).when("/goods-intro", {
		//物品详情
		templateUrl: "goods-intro.html"
	}).when("/goods-class", {
		//商品分类
		templateUrl: "goods-class.html"
	}).when("/order-information", {
		//确认订单商品信息
		templateUrl: "order-information.html"
	}).when("/success-shopcar", {
		//成功提交订单
		templateUrl: "success-shopcar.html"
	}).when("/search", {
		//成功提交订单
		templateUrl: "search.html"
	});
	$routeProvider.otherwise({
		templateUrl: "error.html",
		controller: "errorCtrl"
	});
});
//路径错误404控制器
app.controller("errorCtrl", function($scope) {
	window.location.replace("error.html");
	document.body.scrollTop = 0;
});
app.controller("appCtrl", function($scope, $location, $http, $routeParams) {
	//	$http({
	//		url:"http://localhost/LBW2/php/all.php",
	//		method:"get",
	//		dataType:"json",
	//		success:function(data) {
	//			console.log(data);
	//		}
	//	})
	//获取登录用户的信息
	$scope.usersBol = false;
	$scope.phoneNum = window.sessionStorage.phoneNum;
	if($scope.phoneNum != undefined) {
		$scope.usersBol = true;
	} else {
		$scope.usersBol = false;
	}
	$http.get("http://localhost/LBW2/php/all.php").success(function(data) {
		//console.log(data);
		$scope.goodsArr = data.list;
		$scope.IndexArr1 = data.list;
		$scope.fridayArr = $scope.IndexArr1.slice(1,5);
	})
	$scope.search = function() {
		$scope.searchRes = angular.element("#searches").val();
		$location.path('/search');
		$http({
			url: "http://localhost/LBW2/php/search.php",
			method: 'get',
			params: {
				name: $scope.searchRes
			}
		}).success(function(data) {
			console.log(data.subjects);
			$scope.movieArr = data.subjects;
		});
	}
	$scope.movieFilter = function(index) {
		$http({
			url: "http://localhost/LBW2/php/search.php",
			method: 'get',
			params: {
				name: $scope.movieClassArr[index]
			}
		}).success(function(data) {
			console.log(data.subjects);
			$scope.movieArr = data.subjects;
		});
		$location.path('/goods-class');
	}
	$scope.movieTop = function(tag) {
		$http({
			url: "http://localhost/LBW2/php/search.php",
			method: 'get',
			params: {
				name: tag
			}
		}).success(function(data) {
			console.log(data.subjects);
			$scope.movieArr = data.subjects;
		});
		$location.path('/goods-class');
	}
	//定义购物车数组
	$scope.shopCarArr = [];
	//定义详情页对象
	$scope.introObj = "";
	//头部部分控制
	$scope.bol = true;
	//点击购物车, 加载购物车里的信息
	$scope.shopCar = function() {
		$scope.bol = false;
		$http({
			method: "get",
			url:"http://localhost/LBW2/php/shopcar.php",
			params:{
				flag:"find"
			}
		}).success(function(data) {
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				$scope.IndexArr1[data[i].goodsID].num = data[i].num;$scope.shopCarArr.push($scope.IndexArr1[data[i].goodsID]);
			}
			$location.path("/shopcar");
			document.body.scrollTop = 0;
		});
		
	}
	$scope.toIndex = function() {
		$location.path("/index");
		$scope.bol = true;
		window.location.reload();
	}
	$scope.toWhere = function(path) {
		$location.path(path);
		$scope.bol = true;
		document.body.scrollTop = 0;
	}
	//首页分类
	$scope.allClassArr = [{
		name: "新鲜水果",
		classes: ["水果礼盒", "进口水果", "有机水果", "国产水果"]
	}, {
		name: "田园蔬菜",
		classes: ["蔬菜礼篮", "有机蔬菜", "地产蔬菜", "进口蔬菜"]
	}, {
		name: "肉类家禽",
		classes: ["羊肉", "牛肉", "鸡鸭肉", "鱼肉"]
	}, {
		name: "海鲜水产",
		classes: ["海鲜礼盒", "国产海鲜", "进口海鲜", "干货其他"]
	}, {
		name: "优选食材",
		classes: ["优选米面", "优选杂粮", "粮油调味", "其他食材"]
	}, {
		name: "零食酒水",
		classes: ["零食", "特色干果", "休闲冲饮", "茶叶", "白酒", "啤酒", "葡萄酒", "其他酒品"]
	}, {
		name: "蛋奶速食",
		classes: ["方便速食", "奶制品", "面包甜点", "蛋品"]
	}, {
		name: "全球代购",
		classes: ["保健品", "洗护用品", "农副产品", "母婴用品"]
	}];

	//评论区数组
	$scope.introCommonArr = [{
		headImg: "img/headImg.png",
		userId: '15517726871',
		star: ["img/收藏-on.png", 'img/收藏-on.png', 'img/收藏-on.png', 'img/收藏-on.png', 'img/收藏-on.png'],
		starOff: [],
		common: '帮同事买的,性价比很高,很不错的',
		imgArr: ["img/commonImg.png", "img/headImg.png", 'img/1496829242506.jpg', 'img/1496829683863.jpg'],
		dates: '2017/7/15',
		time: '22:23:06'
	}, {
		headImg: "img/1496829242506.jpg",
		userId: '15518905676',
		star: ["img/收藏-on.png", 'img/收藏-on.png', 'img/收藏-on.png'],
		starOff: ['img/收藏-off.png', 'img/收藏-off.png'],
		common: '帮同事买的,性价比很高,很不错的',
		imgArr: ["img/headImg.png", "img/commonImg.png", 'img/1496829683863.jpg', 'img/1496829242506.jpg'],
		dates: '2017/6/02',
		time: '13:13:18'
	}, {
		headImg: "img/1496829683863.jpg",
		userId: '15537659428',
		star: ["img/收藏-on.png", 'img/收藏-on.png', 'img/收藏-on.png', 'img/收藏-on.png'],
		starOff: ['img/收藏-off.png'],
		common: '帮同事买的,性价比很高,很不错的',
		imgArr: ['img/1496829242506.jpg', "img/headImg.png", "img/commonImg.png", 'img/1496829683863.jpg'],
		dates: '2017/3/14',
		time: '17:46:36'
	}];

	//类型数组分类
	$scope.movieClassArr = ["科幻", "喜剧", "冒险", "恐怖", "动作", "战争", "爱情", "剧情", "犯罪"];

	$scope.indexClass = function(index) {
		console.log(index);
		$location.path('/goods-class');
		document.body.scrollTop = 0;
	}
	$scope.indexClasses = function(index) {
		console.log(index);
		$location.path('/goods-class');
		document.body.scrollTop = 0;
	}

	//购物车部分控制

	$scope.toShopCar = function(index) {
		if(!$scope.usersBol) {
			$location.path('/logoIn');
			document.body.scrollTop = 0;
		} else {
			$scope.shopCarArr.push($scope.IndexArr1[index]);
			var arr = [];
			for(var i = 0; i < $scope.shopCarArr.length; i++) {
				if(arr.indexOf($scope.shopCarArr[i]) < 0) {
					arr.push($scope.shopCarArr[i]);
				} else {
					arr[arr.indexOf($scope.shopCarArr[i])].num++;
				}
			}
			$scope.shopCarArr = arr;
			$http({
				method:"get",
				url:"http://localhost/LBW2/php/shopcar.php",
				params:{
					flag:'add',
					goodsID: $scope.IndexArr1[index].id,
					num: $scope.IndexArr1[index].num
				}
			}).success(function(data) {
				console.log(data);
			});
		}
	};
	//详情页进入购物车
	$scope.addToShopCar = function(obj) {
		if(!$scope.usersBol) {
			$location.path('/logoIn');
			document.body.scrollTop = 0;
		} else {
			$scope.shopCarArr.push(obj);
			$http({
				method:"get",
				url:"http://localhost/LBW2/php/shopcar.php",
				params:{
					flag: 'add',
					goodsID: obj.id,
					num: obj.num
				}
			}).success(function(data) {
				console.log(data);
			});
		}
		
	};

	//首页加载部分控制
	$scope.to = function(path) {
		//加载地址信息
		if(path == '/address-manger') {
			$http.get("http://localhost/LBW2/php/address.php?flag=all").success(function(data) {
				//console.log(data);
				$scope.addressArr = data.list;
			});
		}
		$location.path(path);
		document.body.scrollTop = 0;
	}
	//删除地址
	$scope.removeAddress = function(index) {
		var id = $scope.addressArr[index].id;
		$http.get("http://localhost/LBW2/php/address.php?flag=del&id=" + id).success(function(data) {
			//console.log(data);
			$scope.addressArr.splice(index, 1);
		});
	}
	//商品详情
	$scope.intro = function(index,$event) {
		
		$scope.introObj = $scope.IndexArr1[index];
		$scope.introImgSrc = $event.target.src;
		$location.path('/goods-intro');
		document.body.scrollTop = 0;
	}
	$scope.del = function(index) {
		$scope.shopCarArr[index].num--;
		if($scope.shopCarArr[index].num <= 1) {
			$scope.shopCarArr[index].num = 1;
		}
	};
	$scope.add = function(index) {
		$scope.shopCarArr[index].num++;
	};
	$scope.introDel = function() {
		$scope.introObj.num--;
		if($scope.introObj.num <= 1) {
			$scope.introObj.num = 1;
		}
	};
	$scope.introAdd = function() {
		$scope.introObj.num++;
	};
	$scope.remove = function(index) {
		$scope.shopCarArr.splice(index, 1);
	};
	$scope.sum = function() {
		var sum = 0;
		for(var i = 0; i < $scope.shopCarArr.length; i++) {
			sum += $scope.shopCarArr[i].nowPrice * $scope.shopCarArr[i].num;
		}
		return sum;
	};
	//底部部分控制器
	$scope.toWhere = function(path) {
		$location.path(path);
		$scope.bol = true;
		document.body.scrollTop = 0;
	}
});