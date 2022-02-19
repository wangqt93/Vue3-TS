<template>
    <div>
        <p>X:{{x}}</p>
        <p>Y:{{y}}</p>
        <div>
            <h1 v-if="loading">loading...</h1>
            <img v-else :src=img alt="">
        </div>
    </div>
</template>


<script lang='ts'>
// 非reactive版本
// import { defineComponent,onMounted,onUnmounted,ref } from 'vue'
// export default defineComponent({
//     name: 'TestOne',
//     setup() {
//         const x = ref(0);
//         const y = ref(0)
        
//         const getMouseEvent = (e:MouseEvent) => {
//             console.log(e)
//             x.value = e.pageX;
//             y.value = e.pageY
//         }
//         onMounted(() => {
//             document.addEventListener('click',getMouseEvent)
//         })
//         onUnmounted(() => {
//             document.removeEventListener('click',getMouseEvent)
//         })

//         return {
//             x,
//             y
//         }
//     },
// })

// reactive 版本
    import  { defineComponent,reactive,toRefs,onMounted,onUnmounted } from 'vue'
    import usesUrlHook from '../../hooks/useUrlHook'
    interface DataProps{
        x:number,
        y: number,
    }
    export default defineComponent({
        name: 'TestOne',
        setup(){
            const {img,loading,error} = usesUrlHook('https://dog.ceo/api/breeds/image/random')
            const data:DataProps = reactive({
                x: 0,
                y: 0,
            })
            const getMouseEvent = (e:MouseEvent) => {
                data.x = e.pageX,
                data.y = e.pageY
            }
            onMounted(() => {
                document.addEventListener('click',getMouseEvent)
            })
            onUnmounted(() => {
                document.removeEventListener('click',getMouseEvent)
            })
            const refData = toRefs(data)
            return {
                ...refData,
                img,
                loading,
                error
            } 
        }
    })
</script>
