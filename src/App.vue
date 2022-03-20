<template>
    <div id="app">
      
            <router-view></router-view>
       
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import Register from "./components/Register";
    export default {
        name: 'App',
        components: {
            // Register,
            // HelloWorld
        }

    }
</script>

<style >
    #app {
        font-family: "roboto", Arial, sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height:100%;
        width:100%;
       
    }



</style>
