import { reactive, toRefs } from 'vue'
import axios from 'axios'

function useURLLoader(url: string) {
    const load = reactive({
        result: null,
        loading: true,
        loaded: false,
        error: null
    })
    axios.get(url).then((rowData)=>{
        load.loading = false
        load.loaded = true
        load.result = rowData.data
    }).catch((e)=>{
        load.error = e
        load.loading = false
    })
    return {
        ...toRefs(load)
    }
}

export default useURLLoader
