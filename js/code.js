$(".telephone").focus(function(){
       	
       	$(".telephone").css("border","1px solid lightskyblue");
       	
       	$(".tipss").text("");
       	
       })
       
      
       $(".telephone").blur(function(){
       	
       	var tel=$(".telephone").val();
       	
       	var reg=/^1[3578]\d{9}$/;
       	
       	if( tel.length==0){
       		
       		$(".tipss").text("*手机号不能为空").css("color","red");
       	     
       	}else if(!reg.test(tel)){
       		
       		$(".tipss").text("*手机号格式错误").css("color","red");
       		
       	}else{
       		
       		$(".tipss").text("");
       	}
       	
       	$(".telephone").css("border","1px solid lightgray");
       	
       })
       //验证码框的判断

		$("#msg").blur(function(){
			
			var msgVal=$("#msg").val();
			
			var codeVal=$("#code").val();
	
			if(msgVal.length==0){
			
				$(".tipsss").text("*请输入验证码").css("color","red");
				
			}else if(msgVal!=codeVal){
				
				$(".tipsss").text("*验证码有误").css("color","red");
				
			}else{
				$(".tipsss").text("");
			}
			
		})
		
		$("#msg").focus(function(){
			
			$("#msg").css("border","1px solid lightskyblue"); 
			
		})
		//手机号验证
		
//		$("#log").on("click",function(){
//			
//			if($(".telephone").val()==""||$("#msg").val()==""){
//
//				alert("您还有没有填写的项目");
//				
//			}else{
//				
//				alert("登录成功");
//			}
//			
//			
//		})
		
		//
		$("#pnumber").focus(function(){
			
			$("#pnumber").css("border","1px solid lightskyblue"); 
		})

		//在全局定义验证码
		var code;

		//产生验证码

		window.onload = function createCode() {
			code = "";
			var codeLength = 4; //验证码的长度  
			var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
				'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
			];
			for(var i = 0; i < codeLength; i++) { //循环操作  
				var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
				code += random[index]; //根据索引取得随机数加到code上  
			}

			$("#code").val(code)
		}

		//当点击看不清换一张的时候 改变验证码
		$("#change").on("click", function() {
			code = "";
			var codeLength = 4; //验证码的长度  

			var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
				'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
			];

			for(var i = 0; i < codeLength; i++) { //循环操作  
				var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
				code += random[index]; //根据索引取得随机数加到code上  
			}

			$("#code").val(code); //把code值赋给验证码  

		})