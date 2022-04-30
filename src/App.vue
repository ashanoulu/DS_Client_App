<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from "./components/Nav";
    export default {
        name: 'App',
        components: {
            Nav
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
