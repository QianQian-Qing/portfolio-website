const mainTitle = document.querySelector('header.container h1');
const changButton = document.querySelector('.btn');
changButton.addEventListener('click',function (event){
    event.preventDefault();
mainTitle.textContent="指令已接收,DOM已被在此修改.";
console.log("按钮被点击!事件监听器已成功触发.");
});


