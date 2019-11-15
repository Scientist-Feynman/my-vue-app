<template>
    <div>
        <transition name="fade">
            <ul v-if="show">
                    <li v-for="(item, index) in lists" @click="findKey(index,item)">
                        <span>{{index}}</span>
                        <span>姓名：{{item.name}}</span>
                        <span>年龄：{{item.age}}</span>
                        <span>性别：{{item.sex}}</span>
                        <span>研究领域{{item.fields}}</span>
                        <span>国籍：{{item.country}}</span>
                    </li>
            </ul>
        </transition>
        <button v-on:click="show = !show">Toggle</button>
        <router-view></router-view>
        
    </div>
</template>

<script>
import ListItem from './ListItem'

export default {
    data(){
        return{
            show: true,
            lists:[
                {'name':'Newton','age':'65','sex':'male','fields':'physics','country':'UK'},
                {'name':'E.Fermi','age':'55','sex':'male','fields':'physics','country':'Italiy'},
                {'name':'Milnor','age':'65','sex':'male','fields':'math','country':'USA'},
                {'name':'Riemann','age':'45','sex':'male','fields':'math','country':'Germany'}
            ]
        }
    },
    methods:{
        findKey(key,item){
            alert(key+','+item.name)
            //this.$router.push({path:'/main/listitem', query:{id:key}});
        }
    },
    components:{
        ListItem
    }
}
</script>

<style scoped>
    ul,li,ol{
        list-style-type: none;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>