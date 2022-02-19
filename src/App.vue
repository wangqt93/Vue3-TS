<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="hello"/>
  <TestOne name='wangqt' />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TestOne from './components/Test/one.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    TestOne
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
