
// $('.acc-head').append("<input  class='check' type='checkbox' >");


 

var i = 0;
var ll1  = 0; 
var ll2  = 0;
var ll3  = 0;
var ll4  = 0; 
var ll5  = 0;  
var ll6  = 0; 
var ll7  = 0;
	// $('.acc-head').append('<hr>')

 $('.check').on('click',function(){
 	p = 255-(i*10.6);
 	if($(this).prop("checked")){
 		i++
 	}else{
 		i--	
 	}
 	$('.stata').css('width',i*4+'%')
    $('.stata').css('background-color','rgb('+ p +','+i*10.6+',0)')
    $('.stata-text').text(i*4+ '%')
    $('span').text(i)
    $('span').css('transform','rotate('+i*360+'deg)')
  


    if( i == 25){
 	alert('Вітаемо , ви чудовий викладач!!!')
 	}


 })

 // Счётчик для первого модуля

  $('.acc1').on('click',function(){
 	if($(this).prop("checked")){
 		ll1++;
 	}else{
 		ll1--;
 	}
 	$('.l1').text(ll1 + '/4')
 })

// Счётчик для второго модуля

 $('.acc2').on('click',function(){
 	if($(this).prop("checked")){
 		ll2++;
 	}else{
 		ll2--;
 	}
 	$('.l2').text(ll2 + '/3')
 })

 // Счётчик для третьего модуля

  $('.acc3').on('click',function(){
 	if($(this).prop("checked")){
 		ll3++;
 	}else{
 		ll3--;
 	}
 	$('.l3').text(ll3 + '/5')
 })

  // Счётчик для четвёртого модуля
 $('.acc4').on('click',function(){
 	if($(this).prop("checked")){
 		ll4++;
 	}else{
 		ll4--;
 	}
 	$('.l4').text(ll4 + '/5')
 })


  // Счётчик для пятого модуля

 $('.acc5').on('click',function(){
 	if($(this).prop("checked")){
 		ll5++;
 	}else{
 		ll5--;
 	}
 	$('.l5').text(ll5 + '/4')
 })

  // Счётчик для шестого модуля

 $('.acc6').on('click',function(){
 	if($(this).prop("checked")){
 		ll6++;
 	}else{
 		ll6--;
 	}
 	$('.l6').text(ll6 + '/3')
 })

  // Счётчик для седьмого модуля

 $('.acc7').on('click',function(){
 	if($(this).prop("checked")){
 		ll7++;
 	}else{
 		ll7--;
 	}
 	$('.l7').text(ll7 + '/1')
 })



