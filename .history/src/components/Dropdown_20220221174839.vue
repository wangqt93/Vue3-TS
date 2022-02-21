<template>
    <div >
        <!-- <button @click="getMoreInfo" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            你好！{{userInfo.name}}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" :style="isShow ? 'display:block' : 'display:none'">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul> -->
            <!-- <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        Button
        <DownOutlined />
      </a-button>
    </a-dropdown> -->
    <Dropdown>
        <Button>按钮</Button>
    </Dropdown>

    </div>
</template>
<script lang='ts'>
import { defineComponent,PropType,ref } from 'vue'
import { userprops } from './GobalHeader.vue'
import {Dropdown,Button} from 'ant-design-vue'

export default defineComponent({
    name: 'Dropdown',
    props:  {
        userInfo: {
            type: Object as PropType<userprops>,
            required: true
        }
    },
    components: {
        Dropdown,
        Button
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
