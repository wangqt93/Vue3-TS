<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="hello"/>
  <TestOne name='wangqt' />
  <Teleportde />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TestOne from './components/Test/one.vue'
import Teleportde from './TS_DEMO/Teleport.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    TestOne,
    Teleportde
  }
});
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  
</style>
