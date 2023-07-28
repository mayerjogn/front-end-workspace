// 1. show, hide, toggle

$('#show').click(function(){
    $('#img').show(2000);
});

$('#hide').click(function(){
    $('#img').hide(2000, 'swing');
});

$('#toggle').click(function(){
    $('#img').toggle(2000);
});


$('#fadeIn').click(function(){
    $('#img').fadeIn(2000)
})

$('#fadeOut').click(function(){
    $('#img').fadeOut(2000)
})
$('#fadeToggle').click(function(){
    $('#img').fadeToggle(2000)
})

$('#img').hover(
    function(){
        $(this).fadeTo(1000, 0.5);
    },
    function(){
        $(this).fadeTo(1000, 1);
    }
)

// 3. slideDown, slideUp, slideToggle

$('.menu').click(function(e){
    const content =$(e.target).next();
    // if(content.css('display')==='none'){
    //     content.slideDown(500)
    // }else{
    //  content.slideUp(500)
    // }
  
    // content.slideToggle(500);

    // 컨텐츠 하나만 slideDown 되도록
   $('.content').slideUp();
   content.slideDown();
})
