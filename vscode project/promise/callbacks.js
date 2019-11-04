/**
 * 动态往DOM中添加内容
 * 回调
 */

const posts = [
  {title:"Post one",body:"this is post one"},
  {title:"Post two",body:"this is post two"}
];

// function getPosts(){
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post,index) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   },1000)
// }

// // getPosts();

// function createPost(post,callback){
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   },2000)
// }

// createPost({title:"Post Three",body:"this is post three"},getPosts);



function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post,index)=>{
      output += `<li>${post.title},${post.body}</li>`
      // output += `<li>${post.title}</li>`;
    })
    
  document.body.innerHTML = output;
  }, 1000);
}

function createPost(post,callback){
  setTimeout(() => {
    posts.push(post);
    callback()
  }, 2000);
}


createPost({title:'post Three',body:'this is postThree'},getPosts);