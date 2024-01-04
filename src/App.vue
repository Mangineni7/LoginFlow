<template>
<div>
   <NavigationBar v-if="this.$store.state.check===false"/>
 <router-view></router-view>
<!-- <main-page></main-page>  -->

</div>
 
   
  
</template>
<script>
// import MainPage from './components/pages/MainPage.vue'
import NavigationBar from './components/pages/NavigationBar.vue'



export default {
  name: 'App',
  components: {
    NavigationBar,
    // MainPage
   
  },
   
  
};

</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 }
 

</style>
