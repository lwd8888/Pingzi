;(function(){
	var des = ['.enginer','.designer','.operate'];
	var dese = ['#enginer','#designer','#operate'];
	$(des[0]).eq(0).show();
	$('#fir > div').click(function(){
		$('.sec').hide();
		$('.sec').eq($(this).index()).show();
		$('.enginer,.designer,.operate').hide();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(des[$(this).index()]).eq(0).show();
		$(dese[$(this).index()]).find('.secLevel').removeClass('active').eq(0).addClass('active');
	});
	$('#enginer .secLevel').click(function() {
		$('.enginer').hide();
		$('.enginer').eq($(this).index()).show();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	$('#designer .secLevel').click(function() {
		$('.designer').hide();
		$('.designer').eq($(this).index()).show();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	$('#operate .secLevel').click(function() {
		$('.operate').hide();
		$('.operate').eq($(this).index()).show();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

})()
