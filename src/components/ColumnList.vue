<template>
        <div class="row">
            <div class="col-4 " v-for="column in columnList" :key='column.id' style="margin-bottom:20px;">
                <div class="card">
                    <div class="card-body text-center">
                        <img class="card-img-top rounded-circle border border-light my-3 " :src="column.avatar" alt="" >
                        <h5 class="card-title">{{column.title}}</h5>
                        <p class="card-text">{{column.description}}</p>
                        <a href="#"  class="btn btn-outline-primary">进入专栏</a>
                    </div>
                </div>
            </div>
        </div>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
    id: number,
    title: string,
    avatar?: string,
    description: string
}



export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            required: true
        }
    },
    setup(props,context) {
        const columnList = computed(() => {
            return  props.list.map(li => {
                if(!li.avatar) {
                    li.avatar = require('@/assets/avatar.jpg')
                }
                return li
            })
            
        })
        return {
          columnList
        }
    },
})
</script>

<style scoped>
 img {
     width: 100px;
     height: 100px;
 }
</style>
