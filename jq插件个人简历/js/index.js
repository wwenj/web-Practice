$(function(){
	$(".box").fullpage({
		'navigation': true,
		'navigationPosition':'left',
		'navigationColor':'red',
		'loopBottom':true,
		onLeave:function(index,nextIndex,direction ){
			$(".aa").eq(index-1).css('background','#6EE95E')
		},
		afterLoad:function(anchorLink,index){
			$(".aa").siblings().css('background','#1bbc9b')
		},
	})
});
