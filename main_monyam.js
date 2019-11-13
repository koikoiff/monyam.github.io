$(function() {
	
//나타나기

$(window).scroll(function(){
	if($(this).scrolltop() > 0){
		$header.addclass('sticky');
	}else{
		$header.removeclass('sticky');
	}

	
	//service item 나타나기
	var listthreshold = $list_set.offset().top - 300;

	if($(this).scrolltop() > listthreshold){
		$list_set.addclass('active');
	}else{
		$list_set.removeclass('active');
	}

});
 

