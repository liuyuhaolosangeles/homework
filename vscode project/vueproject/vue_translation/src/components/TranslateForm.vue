<template>
  <div id="translateForm">
       
    <form action="" v-on:submit="formsubmit">
        <input type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容">
        <select v-model="language">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="ko">Korean</option>
            <option value="ja">janpnenese</option>
        </select>
        <input type="submit" name="" id="" value="翻译">
    
    </form>
  </div>
</template>

<script>


export default {
    name: 'translateForm',
    data:function(){
        return{
            textToTranslate:"",
            language:""
        }
    },
    methods:{
        formsubmit:function(e){//拿到用户输入的内容
        //    alert(this.textToTranslate);
            this.$emit("FormSubmit",this.textToTranslate,this.language)//与前面的formsubmit没关系
            e.preventDefault();
        }
    }
}
</script>

<style>


</style>
