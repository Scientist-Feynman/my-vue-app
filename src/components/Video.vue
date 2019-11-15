<template>
    <div>
        <p>我是视频</p>
        <ul>
            <li><router-link to="/video/film">电影</router-link></li>
            <li><router-link to="/video/teleplay">电视剧</router-link></li>
            <li><router-link to="/video/documentary">纪录片</router-link></li>
            <li><router-link to="/video/popularscience">科普片</router-link></li>
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