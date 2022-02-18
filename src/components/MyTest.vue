<template>
    <div>
        <h1>{{num}}</h1>
        <h2>{{numtwo}}</h2>
        <button v-on:click="add">+1</button>
    </div>
</template>

<script lang='ts'>

import { defineComponent,computed,reactive,toRefs } from 'vue'
interface DataProps {
    num: number,
    // add: ()=> void,
    // numtwo: number
}
export default defineComponent({
    name: 'MyTest',
    setup() {
        // const num = ref(1)  //通过ref，定义vue的状态
        // const add = () => {  //自定义方法，vue2写在methos对象当中
        //     console.log('11')
        //    num.value ++
        // }
        // const numtwo = computed(()=>{   // computed计算属性
        //     return num.value *2
        // })
        // return {
        //     num,
        //     add,
        //     numtwo
        // }
        const data: DataProps = reactive({
            num: 0
        })
        const add = () => {
            data.num ++
        }
        const numtwo = computed(() => {
            return data.num *2
        })

        const dataRef = toRefs(data)
        return {
            ...dataRef,
            add,
            numtwo
        }
    },
})
</script>
