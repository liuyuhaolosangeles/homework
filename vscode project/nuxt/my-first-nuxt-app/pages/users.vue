<template>
    <!-- 必须和父类文件夹名字相同 -->
   
    <div>
        <h1>这是父级</h1>
        <input type="text" v-model="userId">
        <button v-on:click="onLoadUser">用户详情</button>
        <nuxt-child></nuxt-child>
        <!-- 调用子级 -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            userId:''
        }
    },
    methods:{
        onLoadUser(){
            this.$router.push('/users/'+this.userId)
        }
    },
    layout:'users'
    // 调用layouts里面的样式
}
</script>