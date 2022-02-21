<template>
  <div class="container">
    <GobalHeader :userInfo="userInfo" />
    <ColumnList :list="list"  />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GobalHeader, { userprops } from './components/GobalHeader.vue'

const testData:ColumnProps[] = [
  {
  id: 1,
  title: 'test1的专栏',
  description: '这是tesst1专栏，有爱后哈哈哈哈哈',
  // avatar: 'https://cn.vuejs.org/images/logo.svg',
  },
    {
  id: 2,
  title: 'test2的专栏',
  description: '这是tesst1专栏，有爱后哈哈哈哈哈',
  // avatar: 'https://cn.vuejs.org/images/logo.svg',
  },
    {
  id: 3,
  title: 'test3的专栏',
  description: '这是tesst1专栏，有爱后哈哈哈哈哈',
  // avatar: 'https://cn.vuejs.org/images/logo.svg',
  },
    {
  id: 4,
  title: 'test4的专栏',
  description: '这是tesst1专栏，有爱后哈哈哈哈哈',
  avatar: 'https://cn.vuejs.org/images/logo.svg',
  }
]

const userInfo:userprops = {
  isLogin: true,
  name: 'wangqt',
  id: 123
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GobalHeader
  },
  setup() {

    return {
      list: testData,
      userInfo: userInfo
    }    
  }
});
</script>

<style>

</style>
