;(function($){
var idx=0,num=0,end,lian,friend,work;
//封装的图片切换
function imgPlay(_name,_nameImg,_left,_right){
	var	w=$(window).width(),
		len=$(_name).find(_nameImg).size();

	$(_left).on("tap",function(){
		idx--;
		if(idx<0) idx=0;
		_w=-idx*w;
		$(_name).css({"transform":"translate3d("+_w+"px,0,0)","transition":"all 1s"});
	})

	$(_right).on("tap",function(){
		idx++;
		if(idx>len-1) idx=len-1;
		_w=-idx*w;
		$(_name).css({"transform":"translate3d("+_w+"px,0,0)","transition":"all 1s"});
	})

	$(_name).on("touchstart",function(e){
		
		startX = e.touches[0].screenX;
	})
	$(_name).on("touchmove",function(e){
		moveX = e.touches[0].screenX;
	})
	$(_name).on("touchend",function(e){
		offsetX = moveX - startX;
		if(offsetX > 0){
			idx--;
			if(idx<0) idx=0;
			$(_name).css({"-webkit-transform":"translate3d("+(-idx*w)+"px,0,0)","-webkit-transition":"all 1s"});

		}else{
			idx++;
			if(idx>len-1) idx=len-1;
			$(_name).css({"-webkit-transform":"translate3d("+(-idx*w)+"px,0,0)","-webkit-transition":"all 1s"});
		}
	})

}
//----------------first---------------
	/*	time=0;
	function auto(){
		if(time>=100){
			$(".first").css({"display":"none"});
			//return false
		}
		time++
		$("._load").css("width",time+"%");
		$(".num").html(time+"%");
	}
	setInterval(auto,10);*/
	var pics = [
			'img/1.png',
			'img/1_friend.jpg',
			'img/1_lian.jpg',
			'img/1_work.jpg',
			'img/2.png',
			'img/2_friend.jpg',
			'img/2_lian.jpg',
			'img/2_work.jpg',
			'img/3.png',
			'img/4.png',
			'img/1.png',
			'img/2.png',
			'img/5.png',
			'img/6.png',
			'img/7.png',
			'img/8.png',
			'img/a-1.jpg',
			'img/a-2.jpg',
			'img/a-3.jpg',
			'img/a1.jpg',
			'img/a_1.png',
			'img/agin.png',
			'img/b-1.jpg',
			'img/b-2.jpg',
			'img/b-3.jpg',
			'img/b-4.jpg',
			'img/b2.jpg',
			'img/baidb.png',
			'img/bg.png',
			'img/btn.png',
			'img/c-1.jpg',
			'img/c-2.jpg',
			'img/c-3.jpg',
			'img/c3.jpg',
			'img/cun1.jpg',
			'img/cun2.jpg',
			'img/cun3.jpg',
			'img/czg_1.jpg',
			'img/czg_2.jpg',
			'img/czg_bg.jpg',
			'img/czg_line.jpg',
			'img/d-1.jpg',
			'img/d-2.jpg',
			'img/d-3.jpg',
			'img/d4.jpg',
			'img/first-bg.png',
			'img/huo.png',
			'img/kai_03.png',
			'img/left.png',
			'img/loser.png',
			'img/on.png',
			'img/result-1.png',
			'img/result-4.png',
			'img/right.png',
			'img/s-a1.jpg',
			'img/s-a2.jpg',
			'img/s-a3.jpg',
			'img/s-a4.jpg',
			'img/s-b1.jpg',
			'img/s-b2.jpg',
			'img/s-b3.jpg',
			'img/s-c1.jpg',
			'img/s-c2.jpg',
			'img/s-c3.jpg',
			'img/s-d1.jpg',
			'img/s-d2.jpg',
			'img/s-d3.jpg',
			'img/scene1.png',
			'img/scene2.png',
			'img/scene3.png',
			'img/success.png',
			'img/summer-1.jpg',
			'img/summer-2.jpg',
			'img/summer-3.jpg',
			'img/summer-4.jpg',
			'img/s-a1.jpg',
			'img/s-a2.jpg',
			'img/s-a3.jpg',
			'img/s-a4.jpg',
			'img/s-b1.jpg',
			'img/s-b2.jpg',
			'img/s-b3.jpg',
			'img/s-c1.jpg',
			'img/s-c2.jpg',
			'img/s-c3.jpg',
			'img/s-a4.jpg',
			'img/s-b1.jpg',
			'img/s-b2.jpg',
			'img/s-b3.jpg',
			'img/s-c1.jpg',
			'img/s-c2.jpg',
			'img/s-c3.jpg',
			'img/s-d1.jpg',
			'img/s-c2.jpg',
			'img/s-c3.jpg',
			'img/s-d1.jpg',
			'img/s-d2.jpg',
			'img/s-d3.jpg',
			'img/scene1.png',
			'img/scene2.png',
			'img/scene3.png',
			'img/success.png',
			'img/summer-1.jpg',
			'img/summer-2.jpg',
			'img/summer-3.jpg',
			'img/summer-4.jpg'
		];
		var arrImg = [],s=0,k=0;
		for(var i=0;i<pics.length;i++){
			arrImg[i] = new Image();
			//console.log(arrImg[i])
			arrImg[i].src = pics[i];
			//console.log(pics[i])
			
			arrImg[i].onload = function(){

				s++
				if(i == pics.length-1){
					_auto(1)

				}else{
					//console.log(Math.floor(i/pics.length*100))
					_auto(s/pics.length)
				}
				//$("._load").css("width",s+"%");
				$("._load").css("width",s+"%");
					
				
				
			}
			arrImg[i].onerror = function(){
				k++;
				alert("加载中出现了"+k+"次错误")
			}

			//console.log(arrImg[i].complete);
			
		}
		function _auto(num){
			var num = num*100>=100 ? 100 : Math.floor(num*100);
			//console.log(num)
			$(".num").html(num+'%');
			if(num == 100){
				$(".first").hide();
				$(".two").show();
			}
		}


//---------------two---------------
	$(".imgs").on("tap",function(){
		$(".two").css("display","none");
	})
//---------------third---------------
	$(".nav>ul>li>img").on("tap",function(){
		$(".third").css("display","none");
		idx = 0;
		imgPlay(".sel",".four-img",".left",".right");
	})
	$(".nav>ul>li>img").on("tap",function(){
		var Data=$(this).data("val");
		//console.log(Data);
	})
//---------------four---------------
	
	var Data;
	$(".btn").on("tap",function(){
		Data = $(".sel  .four-img").eq(idx).data("select");
		idx++;
		if(idx>$(".sel>.four-img").length-1) idx=$(".sel>.four-img").length-1;
		//console.log(Data);
		if(Data == "_love"){
				lian="_love";
				$("._LOVE").css("display","block").siblings().css("display","none");
		}else if(Data == "_work"){
				work="_work";
				$("._WORK").css("display","block").siblings().css("display","none");
			}else if(Data == "_summer"){
				friend="_summer";
				$("._SUMMER").css("display","block").siblings().css("display","none");
		}
	})
//---------------five-----------------
	$(".five-img").on("swipeDown",function(){
		$(".five").css("display","none");
		idx = 0;
		imgPlay(".tia",".six-img",".LEFT",".RIGHT");
	})
//---------------six-----------------
	
	$(".BTN").on("tap",function(){
		$(".six").css("display","none");
		
	})
//--------------serven-----------------
	$("._serven").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".tib",".serven-img",".LEFT_b",".RIGHT_b");	
	})
	
	$(".BTN_b").on("tap",function(){
		$(".serven").css("display","none");
	})	
//--------------eight-----------------
	$("._eight").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".tic",".eight-img",".LEFT_c",".RIGHT_c");	
	})

	$(".BTN_c").on("tap",function(){
		$(".eight").css("display","none");
	})	
//--------------love-d-----------------
	$("._love-d").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".tid",".love-d-img",".LEFT_d",".RIGHT_d");	
	})
		
	$(".BTN_d").on("tap",function(){
		$(".love-d").css("display","none");
	})
//--------------nine-----------------
	$("._nine").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".work-t1",".nine-img",".work_left1",".work_right1");
	})
	
	$(".work_btn1").on("tap",function(){
		$(".nine").css("display","none");
	})	
//--------------ten-----------------
	$("._ten").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".work-t2",".ten-img",".work_left2",".work_right2");
	})
	
	$(".work_btn2").on("tap",function(){
		$(".ten").css("display","none");
	})	
//--------------eleven-----------------
	$("._eleven").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".work-t3",".eleven-img",".work_left3",".work_right3");
	})
	
	$(".work_btn3").on("tap",function(){
		$(".eleven").css("display","none");
	})	
//--------------twelve-----------------
	$("._twelve").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".work-t4",".twelve-img",".work_left4",".work_right4");
	})

	$(".work_btn4").on("tap",function(){
		$(".twelve").css("display","none");
		$(".seventeen").css("display","block");
	})	
//--------------thirteen-----------------
	$("._thirteen").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".summer-t1",".thirteen-img",".summer_left1",".summer_right1");
	})
	
	$(".summer_btn1").on("tap",function(){
		$(".thirteen").css("display","none");
	})
//--------------fourteen-----------------
	$("._fourteen").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".summer-t2",".fourteen-img",".summer_left2",".summer_right2");
	})
	
	$(".summer_btn2").on("tap",function(){
		$(".fourteen").css("display","none");
	})
//--------------fifteen-----------------
	$("._fifteen").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".summer-t3",".fifteen-img",".summer_left3",".summer_right3");
	})
	
	$(".summer_btn3").on("tap",function(){
		$(".fifteen").css("display","none");
	})
//--------------sixteen-----------------
	$("._sixteen").on("swipeDown",function(){
		$(this).css("display","none");
		idx = 0;
		imgPlay(".summer-t4",".sixteen-img",".summer_left4",".summer_right4");
	})
	
	$(".summer_btn4").on("tap",function(){
		$(".sixteen").css("display","none");
	})
//--------------seventeen-----------------
/*$(".seventeen").on("tap",function(){
	$(this).css("display","none");
})*/
//--------------eightteen-----------------
$("#huo").on("tap",function(){
	$(".eightteen").css("display","none");
})
//----------------love-获取分数----------------
$(".BTN").on("tap",function(){
	num+=$(".six-img").eq(idx).data("fen");
	$(".six-img").hide();
	$(".serven-img").show();

})
$(".BTN_b").on("tap",function(){
	num+=$(".serven-img").eq(idx).data("fen");
	$(".serven-img").hide();
	$(".eight-img").show();
})
$(".BTN_c").on("tap",function(){
	num+=$(".eight-img").eq(idx).data("fen");
	$(".eight-img").hide();
	$(".love-d-img").show();
})
//----------------work-获取分数----------------
$(".work_btn1").on("tap",function(){
	num+=$(".nine-img").eq(idx).data("fen");
	$(".nine-img").hide();
	$(".ten-img").show();
})
$(".work_btn2").on("tap",function(){
	num+=$(".ten-img").eq(idx).data("fen");
	$(".ten-img").hide();
	$(".eleven-img").show();
})
//----------------summer-获取分数----------------
$(".summer_btn1").on("tap",function(){
	num+=$(".thirteen-img").eq(idx).data("fen");
	$(".thirteen-img").hide();
	$(".fourteen-img").show();
})
$(".summer_btn2").on("tap",function(){
	num+=$(".fourteen-img").eq(idx).data("fen");
	$(".fourteen-img").hide();
	$(".fifteen-img").show();
})
$(".summer_btn3").on("tap",function(){
	num+=$(".fifteen-img").eq(idx).data("fen");
	$(".fifteen-img").hide();
	$(".sixteen-img").show();
})
//-----------------love-结果-------------------
$(".BTN_d").on("tap",function(){
	stop(".love-d-img",".love-d");
})
//-----------------work-结果-------------------
$(".work_btn4").on("tap",function(){
	stop(".eleven-img",".eleven");
	//$(".seventeen").show().siblings().hide();
})
//-----------------summer-结果-------------------
$(".summer_btn4").on("tap",function(){
	stop(".sixteen-img","._sixteen");
})
function stop(a,b){
	num+=$(a).eq(idx).data("fen");
	$(b).parent().hide().siblings().show();
	if(num==100){
		$(".seventeen").show().siblings().hide();
		end=99;
	}else if(num==95){
		$(".seventeen").show().siblings().hide();
		end=95;
	}else if(num>85 && num<95){
		$(".seventeen").show().siblings().hide();
		end=90;
	}else if(num>75 && num<85){
		$(".seventeen").show().siblings().hide();
		end=88;
	}else if(num>60 && num<75){
		$(".eightteen").show().siblings().hide();
		end=75;
	}else if(num>50 && num<60){
		$(".eightteen").show().siblings().hide();
		end=50;
	}else if(num>40 && num<50){
		$(".eightteen").show().siblings().hide();
		end=40;
	}else if(num>5 && num<40){
		$(".eightteen").show().siblings().hide();
		end=30;
	}
	$(".sum").html(end);
}	
$("#huo").on("tap",function(){
	var sj=1+Math.round(Math.random()*(2-1));
    if(lian){
        if(sj==1){
            $(".love1").show();
        }else if(sj==2){
            $(".love2").show();
        }
    }else if(work){
        if(sj==1){
            $(".work1").show();
        }else if(sj==2){
            $(".work2").show();
        }
    }else if(friend){
        if(sj==1){
            $(".summer1").show();
        }else if(sj==2){
            $(".summer2").show();
        }
    }
})
$(".love1").on("swipeDown",function(){
	$(this).css("display","none");
	$("._kai").css("display","block");
})
$(".love2").on("swipeDown",function(){
	$(this).css("display","none");
	$("._me").css("display","block");
})
$(".work1").on("swipeDown",function(){
	$(this).css("display","none");
	$("._man").css("display","block");
})
$(".work2").on("swipeDown",function(){
	$(this).css("display","none");
	$("._czg").css("display","block");
})
$(".summer1").on("swipeDown",function(){
	$(this).css("display","none");
	$("._tian").css("display","block");
})
$(".summer2").on("swipeDown",function(){
	$(this).css("display","none");
	$("._zhu").css("display","block");
})
})(Zepto)