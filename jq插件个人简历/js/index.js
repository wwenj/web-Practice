$(function(){
	$(".box").fullpage({
		'navigation': true,
		'navigationPosition':'left',
		'navigationColor':'red',
		'loopBottom':true,
		onLeave:function(index,nextIndex,direction ){
			//添加css3动画实现页面翻转背景色渐变
			$(".aa").eq(index-1).css({animation:'myfirst 0.6s'});
			//$(".aa").eq(index-1).animate({background:'#6EE95E'})
		},
		afterLoad:function(anchorLink,index){
			//翻转过后颜色变回
			$(".aa").siblings().css({background:'#22C3AA',animation:'myfirst1 0.5s'})
		},
	})
	
	$("li").mouseenter(function(){
		/*$(".navTitle").eq($(this).index()).css('opacity','1').siblings().css('opacity','0');*/
		$("i").eq($(this).index()).fadeIn('normal');
	})
	$("li").mouseleave(function(){
		$("i").fadeOut(300);
	})
});
