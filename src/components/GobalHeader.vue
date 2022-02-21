<template>
<nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">哈哈哈</a>
    <div class="list-inline mb-0" v-if="!userInfo.isLogin">
        <div>登录</div>
        <div>注册</div>
    </div>
    <div class="list-inline mb-0" v-else>
        <Dropdown :userInfo='userInfo' />
    </div>
  </div>
</nav>
</template>
<script lang='ts'>
import { defineComponent,PropType } from 'vue'
import Dropdown from './Dropdown.vue'

export interface userprops {
    isLogin: boolean,
    name: string,
    id?: number | string
}

export default defineComponent({
    name: 'GobalHeader',
    props: {
        userInfo: {
            type: Object as PropType<userprops>,
            required: true
        }
    },
    components: {
        Dropdown
    },
    setup(){
        return {

        }
    }
})
</script>
