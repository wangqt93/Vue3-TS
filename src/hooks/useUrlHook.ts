import {ref,reactive,toRefs} from 'vue'
import axios from 'axios'

const useUrlHook =  (url:string) => {

    const data = reactive({
        img: '',
        loading: true,
        error: ''
    })


    axios.get(url).then(res => {
        console.log(res)
        if(res.status === 200) {
            data.img = res.data.message
            data.loading = false
        }
    }).catch(err => {
        console.log(err)
        data.error = err
    })
    const imgData = toRefs(data)
    return {
        ...imgData
    }
    
}

export default useUrlHook