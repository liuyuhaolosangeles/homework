// console.log(document.getElementById('task').id);
// console.log(document.getElementById('task').className);
//  只能获取第一个
// const task = document.getElementById('task');                         

// const task = document.querySelector('#task');
// const task = document.querySelector('li:last-child');
// task.style.background = '#333';  配getElementById 对一个进行操作


// 可以获取所有
//1.  const task = document.getElementsByClassName('aa');     
// task[0].textContent = 'sad';
// console.log(task[0]);
// getElementById 后面不加#



//2.   let list = document.getElementsByTagName('a');
// console.log(list);
// console.log(list[0]);
// list[0].style.color = 'red';
// list[2].textContent = 'sad';

// list = Array.from(list);//将HTML数组转化为转化为数组格式
// // 下面方法必须 进行上面转化
// list.reverse();

// list.forEach(function(li,index){
//         console.log(li.className);
//         li.textContent = `${index}:hello!`;  //是ESC下面 那个符号 不是单引号
    
// });
// 3. 
// document.querySelectorAll
// const z = document.querySelectorAll('ul li.aa a');
// console.log(z)



//style修改只能一个个来 不能一起


// 奇偶数
// 奇
// const odd = document.querySelectorAll('li:nth-child(odd)');
// // console.log(odd);

// odd.forEach(function(li,index){
//     li.style. background = 'red';
// });
//偶

// const even = document.querySelectorAll('li:nth-child(even)');
// console.log(even);
//循环两种方法
// for(let i =0;i<even.length;i++){
//     even[i].style.background = '#333';
// }
// even.forEach(function(li,index){
//     li.style. background = 'red';
//  });


//鼠标事件
//事件监听  addEventListener配套querySelector方法

// document.querySelector(".clear-task").addEventListener('click',function(e){
//     // console.log(e);
// let val;
// val = e.target;//找到鼠标点击的标签
// val = e.clientX;//找到鼠标点击的位置
// val = e.clientY
// console.log(val);
// e.preventDefault();//干掉默认事件
// }) ;

// const card = document.querySelector('.container');  
// const clearbtn = document.querySelector('.clear-task');
// const head = document.querySelector('h5');

//鼠标单击

// clearbtn.addEventListener('click',runEvent);

//鼠标双击

// clearbtn.addEventListener('dblclick',runEvent);

// //mousedown 鼠标按下去就触发 不抬起来

// clearbtn.addEventListener('mousedown',runEvent);

// //mouseup 鼠标按下去不触发 抬起来触发

// clearbtn.addEventListener('mouseup',runEvent);


// //mouseenter 鼠标移入事件

// clearbtn.addEventListener('mouseenter',runEvent);

//mouseover 

// card.addEventListener('mouseover',runEvent);

// mouseleave 和 enter相反 

// card.addEventListener('mouseleave',runEvent);

// mouseout 和 over相反 

// card.addEventListener('mouseout',runEvent);

// mousemove 一动就触发、

// card.addEventListener('mousemove',runEvent);
// function runEvent(e)
// {
//     console.log(`Event Type : ${e.type}`);
//     head.textContent = `mouseX: ${e.offsetX} mouseY: ${e.offsetY}`
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},5)`
// }





//键盘事件

const form = document.querySelector('form');
const inp = document.getElementById('task');
const head = document.querySelector('h5');
const select = document.querySelector('select');


// form.addEventListener('submit',runEvent);

//claer input
inp.value = '';

// //keydown
// inp.addEventListener('keydown',runEvent);

// //keyup
// inp.addEventListener('keyup',runEvent);

// //keypress
// inp.addEventListener('keypress',runEvent);


// // focus 鼠标点一下输入框触发
// inp.addEventListener('focus',runEvent);


// // blur 鼠标点输入框外其他的地方触发
// inp.addEventListener('blur',runEvent);

// // cu't 剪切是触发
// inp.addEventListener('cut',runEvent);

// // paste 粘贴时触发
// inp.addEventListener('paste',runEvent);


// // input 所有和input有关的事件触发
// inp.addEventListener('input',runEvent);

// change
select.addEventListener('change',runEvent);


function runEvent(e){
    console.log(`Event Type : ${e.type}`)
    // console.log(inp.value)
    head.textContent = e.target.value;

} 