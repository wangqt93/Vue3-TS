<template>
    <div class="dropdown">
        <button @click="getMoreInfo" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            你好！{{userInfo.name}}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" :style="isShow ? 'display:block' : 'display:none'">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>

    </div>
</template>
<script lang='ts'>
import { defineComponent,PropType,ref } from 'vue'
import { userprops } from './GobalHeader.vue'

export default defineComponent({
    name: 'Dropdown',
    props:  {
        userInfo: {
            type: Object as PropType<userprops>,
            required: true
        }
    },
    components: {
  
    },
    setup() {
        const isShow = ref(false)
        const getMoreInfo = () => {
            isShow.value = !isShow.value
        }
        return {
            isShow,
            getMoreInfo
        }
    },
})
</script>
