// 每次加载前的等待
import { ref } from 'vue'
import axios from 'axios'
function useURLLoader(url: string) {
    const result = ref(null);
    const loading = ref(true);
    const loaded = ref(false);
    const error = ref(null);
    axios.get(url).then((rawData) => {
        result.value = rawData.data;
        loading.value = false;
        loaded.value = true;
    }).catch(e => {
        error.value = e;
        loading.value = false
    })
    return {
        result,
        loading,
        loaded,
        error
    }
}
export default useURLLoaderimport { reactive, toRefs } from 'vue'
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
