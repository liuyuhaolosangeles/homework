<template>
    <div class="test">
        <h1>{{title}}</h1>
        <p>firstName:{{user.firstName}}</p>
        <p v-text="user.lastName"></p>


        <!-- v-if -->
         <p v-if="showName">firstName:{{user.firstName}}</p>
        <!-- v-else  如果showName为假执行else内容-->
        <p v-else="">nobody</p>

        <!-- v-for -->
        <ul>
            <li v-for="sb in items">{{sb.title}}</li>
        </ul>
    
        <!-- v-on 事件-->
        <button v-on:click="greet('hello everybody')">say hello</button>
        <!-- 键盘事件 -->
        <br>
        <!-- 按着ALT和enter才会触发enterhit方法 -->
        <input type="text" v-on:keyup="presskey('输入')" 
                   v-on:keyup.alt.enter="enterhit">

        <hr>
        <!-- computed计算属性 -->
        <label for="">first Name</label>
        <input type="text" v-model="user.firstName">
        <br>
        <label for="">last Name</label>
        <input type="text" v-model="user.lastName">
        <h3>{{fullName}}</h3>
        
        <!-- props 属性 -->
        <h2>{{msg}}</h2>
    </div>

</template>

<script >
    export default{
        // 只能是vue文件名字的大小写
        name:"Test",
        props:{
            msg:{
                type:String,
                default:"默认文字"
            }
        },
        data(){
            return {
                title:"hello vue.js!",
                user:{
                    firstName :"Jack",
                    lastName:"James"
                },
                showName:false,
                items:[
                    {"title":"no 1"},
                    {"title":"no 2"},
                    {"title":"no 3"},
                ]
                
            }
        },
        methods:{
            greet:function(e){
                alert(e)
            },
            presskey:function(e){
                console.log(e)
            },
            enterhit:function(){
                console.log("lalallaallala")
            }
        },
        computed:{
            fullName:function(){
                return this.user.firstName + " "+
                this.user.lastName;
            }
        }
    }
</script>


<style  scoped>
/*scoped 只对该页面的代码起作用 */
</style>