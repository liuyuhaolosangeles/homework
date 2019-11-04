<template>
    <h1>这个页面是:{{$route.params.id}}</h1>
    <!-- 路由参数的组件必须在名字前面加_  
    上面的id是和文件名id一样的 -->
</template>

<script>
export default {
    // validate校验作用

    validate(data){
        // console.log(data)
        // return true
    // return data.params.id == 1  
    // 返回的值不为true 加载404错误页面

    // 验证是纯数值才能通过否则404
    return /^\d+$/.test(data.params.id)
    }
}
</script>