$(function(){
/*点击搜索栏*/
	$(".glass").click(function(){		//出现
		$(".glass-box").slideDown('fast')
	});

	$(".glass-box span").click(function(){	//收回
		$(".glass-box").slideUp('fast')
		
	});
	
	$('.glassUp').click(function(){		//点其他任何处收回
	$(".glass-box").slideUp('fast');
});
/*侧面菜单栏和遮罩层*/
	$(".menu").click(function(){		//点击显示宽度，出现
		$(".menu-left").animate({width:"8rem"}).css('display','block');
		$(".mask").animate({opacity:'0.8'}).css('display','block');
	});

	$(".menu-left span ").click(function(){		//点击宽度缩再消失，链式
		$(".menu-left").animate({width:"0"},function(){$(this).css('display','none')});
		$(".mask").animate({opacity:'0'},function(){$(this).css('display','none')});
	});
	
/*八个小图标导航手指接触到变色*/
$(".pic-ul li span").on("touchstart",function(){
	$(this).css({color:"#1a2a38",background:"#f9b511"});
});
$(".pic-ul li span").on("touchend",function(){
	$(this).css({color:"#f9b511",background:"#1a2a38"});
});

/*汽车轮播图*/
//自动轮播部分：隔4秒滑到下一个，然后恢复初始状态，继续4秒后滑动
var paresnt='-100%'
timer=setInterval(starTime,4000);

function starTime(){
 	paresnt=parseInt(paresnt)-100+'%';
 
	 if (parseInt(paresnt)<=-200) {
 		$(".figure").animate({left:paresnt},function(){
 			paresnt=-100+'%';
 			$(".figure").css('left','-100%');
 		});
	 } else{
 		$(".figure").animate({left:paresnt});
 	}

}
//PS：touchstart触摸事件在jq中并没有简写事件，用事件绑定或者js事件
var touchStar=0;				//手指初始触碰X坐标
var touchMove=0;			//手指移动时动态X坐标
var starLeft=0;					//初始 定位left值

//手指放下：获取初始left和touchStar
$(".figure").on('touchstart',star);
function star(e){
	starLeft=$(this).css('left');
	touchStar=e.changedTouches[0].pageX;
	clearInterval(timer);
}
//手指移动：移动时动态坐标=touchMove-touchStar+原left
$(".figure").on('touchmove',move);
function move(e){
	touchMove=e.changedTouches[0].pageX;
	var moveLeft=touchMove-touchStar+parseInt(starLeft);
	$(this).css('left',moveLeft);
	//alert(moveLeft)
}
//手指抬起：
$(".figure").on('touchend',end);
function end(e){
	timer=setInterval(starTime,4000);			//触屏松开定时器继续
	
	var winWidth=$('.main').width()/2;		//获取当前浏览器窗口一半的宽度

/*判断当触屏手指左右滑动距离超过当前浏览器宽度的一半时才移到下一张
 不到一半自动滑回*/
	if (touchMove-touchStar<-winWidth) {		//向左滑超过一半时
			paresnt=parseInt(paresnt)-100+'%';			//定位left加上一倍
			$(".figure").animate({left:paresnt},function(){
				$(".figure").css('left','-100%');			//滑动下一张动画结束后left设为初始状态
			});
			if(parseInt(paresnt)<=-200){paresnt=-100+'%'};	//paresnt设会初始	
	} else if(touchMove-touchStar>winWidth){
			paresnt=parseInt(paresnt)+100+'%';
			$(".figure").animate({left:paresnt},function(){
				$(".figure").css('left','-100%');
			});
			if(parseInt(paresnt)>=-200){paresnt=-100+'%'};
	}else{					//滑动不超过一半时
		$(".figure").animate({left:paresnt});			//滑回
	}
}


})






