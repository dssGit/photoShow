var $wrap = $('.wrapper');
setTimeout(function() {
    $wrap.removeClass('init');
},200)

$('.item').on('click',function(){
    $(this).addClass('active');
    $wrap.addClass('wrapper-active');
})
$('.colse').on('click',function(e){
    e.stopPropagation();
    $('.active').removeClass('active');
    $wrap.removeClass('wrapper-active');
})