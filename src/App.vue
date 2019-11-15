<template>
  <div id="app">   
    <Es6Practise />
    <Nav />
  </div>
</template>

<script>
import Es6Practise from './components/Es6Practise'
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav,
    Es6Practise
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
