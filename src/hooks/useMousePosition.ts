import { toRefs, reactive, onMounted, onUnmounted } from 'vue'

function useMousePosition() {
    const coordinate = reactive({x:0,y:0})
    const update = (e: MouseEvent) => {
        coordinate.x = e.pageX
        coordinate.y = e.pageY
    }

    onMounted(() => {
        document.addEventListener('click', update)
    })

    onUnmounted(()=> {
        document.removeEventListener('click', update)
    })

    return { ...toRefs(coordinate) }
}

export default useMousePosition
