<template>
    <div>
        <p>我是电影</p>
        <button @click="cli">返回上一页</button>
    </div>
</template>
<script>
export default {
    
    methods:{
        cli(){
            this.$router.push('/video');
        }
    }
}
</script>
<style scoped>

</style>