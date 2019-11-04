<template>
    <div class="users">
      <h1>users</h1>
    <!-- 添加用户 -->
        <form v-on:submit="add">
            <input type="text" v-model="newuser.name" placeholder="添加新用户的姓名">
            <input type="text" v-model="newuser.email" placeholder="添加新用户的邮箱">
            <input type="submit" value="submit">
        </form>


      <!--展示用户 -->
      <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" 
                v-model="user.contacted">
                <span :class="{contacted:user.contacted}">
                    {{user.name}} : {{user.email}}
                    <button v-on:click="deletuser(user)">X</button>
                </span>
 
            </li>  
      </ul>
    </div>

</template>

<script >
    export default{
        // 只能是vue文件名字的大小写
        name:"users",
        
        data(){
           return{ 
               newuser:{},
               users:[
               {
                   name:'liuyuhao',
                   email:'8904682@qq.com',
                   contacted:false
               },
                {
                   name:'zxjis',
                   email:'342822@qq.com',
                   contacted:false
               },
                {
                   name:'dsdaxc',
                   email:'24046222@qq.com',
                   contacted:false
               }
           ],
           }
          
        },
        methods:{
          add:function(e){
              this.users.push({
                  name:this.newuser.name,
                  email:this.newuser.email,
                  contacted:false,
              })
            e.preventDefault();
          },

          deletuser:function(user){
         
              this.users.splice(this.users.indexOf(user),1);

          }
        },
        created:function(){
            this.$http.get("http://jsonplaceholder.typicode.com/users")
            .then(function(response){
                this.users = response.data
            })
        },
        computed:{
           
        }
    }
</script>


<style  scoped>
/*scoped 只对该页面的代码起作用 */
li{
    list-style: none;
}


.contacted{
    text-decoration: line-through;
}
</style>