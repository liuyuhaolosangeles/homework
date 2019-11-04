// #06c .box
const box = document.querySelector(".box");
const boxStyles = getComputedStyle(box); //获取.bOX的所有样式
// console.log(boxStyles);
const boxBorderColor = boxStyles.getPropertyValue("--box-border-color");  //获取
// console.log(boxBorderColor);

const header = document.querySelector("#main-header");
header.style.setProperty("--header-bg-color","green"); //赋值