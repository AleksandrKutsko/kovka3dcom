/* Кнопки описания версий */
$('.choice-prog').click(function(){
   $('.choice-prog').removeClass('choice-active');
   $(this).addClass('choice-active');
   var idClick = $(this).attr('id');
   $('.versions--block-descript').css('display', 'none');
   $('.versions--block-descript.'+idClick).fadeIn();
});

/* Страница описания программ - переключение версий */
$('.category-buttons-item').click(function(){
   $('.category-buttons-item').removeClass('active');
   $(this).addClass('active');
   var idClick = $(this).attr('id');
   $('.descript-content').css('display', 'none');
   $('.descript-content.'+idClick).fadeIn();
});

$(document).ready(function () {
   $('.block-loading').fadeOut(0);
   $('.page-content').fadeIn();
});
