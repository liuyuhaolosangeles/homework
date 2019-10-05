// 获取弹窗元素

var modal = document.getElementById("simpleModal");


// 获取按钮元素

var modalBtn = document.getElementById("modalBtn");

//获取关闭弹窗按钮元素
 var closeBtn = document.getElementsByClassName('closeBtn')[0];
 



 //打开弹窗事件 单击
modalBtn.addEventListener("click",openModal);
function openModal(){
    modal.style.display = "block";
}

//关闭弹窗事件
closeBtn.addEventListener("click",close);
function close(){
    modal.style.display  = 'none';
}

//点击弹窗外围也关闭弹窗
window.addEventListener("click",out);

function out(e)
{
    if (e.target == modal)
    {
        modal.style.display  = 'none';
    }
}