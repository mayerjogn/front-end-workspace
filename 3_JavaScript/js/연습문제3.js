//console.log(Math.floor(Math.random()*3)+1);
// 1~3 랜덤 숫자!

const c = document.querySelector('.click'); // 한칸 띄고 쓰는 btn click은 클래스가 두개가 들어간거임 그래서 .click만 불러옴 
const rt = document.querySelector('.restart')// ↑ 위 동일

const imgList = document.querySelectorAll('.main-image img');

const result = document.querySelector('.main-result');

const span = document.querySelector('.click span')


let count=0;
function clickHandler(){
    span.innerHTML = ++ count;
    const random = [Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1];
        // console.log(random) //const random 배열 확인용

    for(let i=0; i<imgList.length; i++){
        //  console.log(imgList[i]); //<- 배열로 담은 위에 const List 확인용
        imgList[i].setAttribute("src",`../../resources/spy${random[i]}.jpg`);//Attribute?
    }
    if(random[0]===random[1]&&random[1]===random[2]){

        result.innerHTML="개어렵네" // 성공시 나오는 문구

        // console.log("얌") //<-- 이미지 3개가 맞는지 확인용

        c.setAttribute("disabled", "disabled"); // 성공시 버튼멈추기

    }
}


// 돔 복습좀해라 십새야


function restartHandler(){
    //console.log("restart") //restart 확인용
    for(let i=0; i<imgList.length; i++){
        imgList[i].setAttribute("src","../../resources/spy1.jpg")
    }
    count = 0;
    span.innerHTML = "";
    result.innerHTML= "";
    rt.removeAttribute("disabled");

}


c.addEventListener('click', clickHandler);

rt.addEventListener('click',restartHandler);

// console.log(Math.floor(Math.random()*3)+1);