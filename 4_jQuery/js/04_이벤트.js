// 1. 이벤트 연결

// 1) on, off

// $('#area1').on('mouseenter', function(event){
//     // 마우스가 올라갔을 때
//     // 배경색상 : beige, 텍스트는 : 마우스가 올라감
//    $(event.target).css('backgroundColor','beige').text('마우스가 올라감');
// });

// // mouseleave 함수

// // 배경색상 : hotpink, 텍스트는 : 마우스가 내려감

// $('#area1').on('mouseleave',function(){
//     $(event.target).css('backgroundColor', 'hotpink').text('마우스가 내려감')
// })

// $('#area1').on('mouseenter mouseleave', function(event){
//     console.log(event.type)
//     if(event.type === 'mouseenter'){
//         $(event.target).css('backgroundColor','beige').text('마우스가 올라감');

//     }else if(event.type === 'mouseleave'){      
//            $(event.target).css('backgroundColor', 'hotpink').text('마우스가 내려감')
//     }
// });

$('#area1').on({
    mouseenter:function(event){
        $(event.target).css('background-color', 'beige'
                     ).text('마우스가 올라감');
    },
    mouseleave:function(event){
        $(event.target).css('background-color', 'hotpink'
                    ).text('마우스가 내려감'); 
    },
    click:function(event){
        $(event.target).css('background-color', 'white')
        .text('').off('mouseenter mouseleave');       
    }
});



// 2) one

$('#area2').one('click',function(){
    alert('실행')
})

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup

// keydown : 키보드가 눌려질 때
// $('#textarea1').keydown(function(e){
//     console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
// })

// // keypress : 글자가 입력 될 때
// $('#textarea1').keypress(function(e){
//     console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
// })

// // keyup : 키보드가 떼어질 때
// $('#textarea1').keyup(function(e){
//     console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
// })

// 3가지를 on 메소드로 한번에

$('#textarea1').on({
    keydown:function(e){
      console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)       
    },
    keypress:function(e){
        console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
    },
    keyup:function(e){
        console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
    }
})


// substring                               console.log(.substring(0,49))
//console.log("hello~".substring(0,1))

$('#textarea2').on('keyup',function(e){
    const currentLength = $(e.target).val().length;
    $('#counter').text(currentLength);
    const maxLength = parseInt($('#maxLenght').text());   
    console.log(typeof maxLength);  
    
    if(currentLength > maxLength){
        // 글자 수 제한 substring
        $(e.target).val($(e.target).val().substring(0, maxLength)); // 50글자
       
    }else{ // currentLength <= maxLenght
    $('#counter').text(currentLength);
    }
});

// 3) 아이디 조건 확인
// 사용 가능한 아이디입니다.
// 사용 불가능한 아이디입니다.

$('#userId').on('keyup',function(e){   
    const regExp = /^[a-z][A-Z 0-9]{4,12}$/;
    const a = $(e.target).val();
    if(regExp.test(a)){ // 사용가능한 아이디
        $('#idCheck').text('사용 가능한 아이디입니다').css('color', 'green')
    }else if(a===""){ //아이디 지울때 문구 지우는 조건문
        $('#idCheck').text("");
    }else{// 불가능아이디
        $('#idCheck').text('사용 불가능한 아이디입니다').css('color', 'red')
    } 
});


// 3. trigger() 메소드
// $('#area3').on('click', function(e){
//     let num=0
//     $('#counter2').text(++num)
// })
   

$('#area3').on('click', function(e){
   let currentCount = parseInt($('#counter2').text());
   $('#counter2').text(++currentCount);
})

// trigger 로직 다른 이벤트를 그대로 가져와서 사용할때 씀
$('#btn').on('click', function(){
    $('#area3').trigger('click');

})

