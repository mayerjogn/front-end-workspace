const asideIcon = document.querySelector("#aside-icon");
const main = document.querySelector("main");

asideIcon.addEventListener("click",function(){
    // 스타일 변경하는 부분이 들어감
    main.classList.toggle("aside-change");
});
