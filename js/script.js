
$(function(){
	$('#slogan').hide();
	$('#logo').hide().fadeIn(2000);
	$('#slogan').fadeIn(4000);

}),

$(function(){
	$('p#today').find('#hover').hide();
	$('p#today').on('mouseenter', function(){
		$(this).find('#before').hide();
		$(this).find('#hover').show();
	})
	.mouseleave(function(){
		$(this).find('#hover').hide();
		$(this).find('#before').show();
	})
});