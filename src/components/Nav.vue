<template>
    <div>
        <ul>
            <li><router-link to="/main">首页</router-link></li>
            <li><router-link to="/video">视频</router-link></li>
            <li><router-link to="/picture">图片</router-link></li>
        </ul>
       <router-view></router-view>
    </div>   
</template>

<script>
export default {
    data(){
        return{
            msg:""
        }
    }
}
</script>

<style scoped>
    ul,li{
        list-style-type: none;
    }
</style>