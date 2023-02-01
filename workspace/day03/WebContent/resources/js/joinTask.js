/**
 * 
 */

/*let check = null;*/

/*let borderColor = null;*/

const emailVarifyBtn = $('.emailVarify');

emailVarifyBtn.click(function(){
	console.log('안녕');
})

$('.input-text input').focus(function(){
	$(this).css('border','1px solid #5CC9CA');
	/*check = $(this);*/
});

$('.input-text input').blur(function(){
	$(this).css('border','1px solid #dde2e6');
	/*check = null;*/
	
	let val = $(this).val();
	let warningText = $(this).next();
	
	if(val == "") {
		warningText.css('opacity', 1);
	} else {
		warningText.css('opacity', 0);
	}
});

$('.pwVarify input').blur(function(){
	let pw = $('.pw input').val();
	let pwVarify = $(this).val();
	let warningText = $(this).next();
	
	if(pwVarify != pw){
		warningText.css('opacity', 1);
	} else warningText.css('opacity', 0);
})

/*$('.input-text input').hover(function(){
	borderColor = $(this).css('border');
	
    }, function() {
	if(check = $(this)) return;
	
	$(this).css('border','1px solid #dde2e6');
});*/











