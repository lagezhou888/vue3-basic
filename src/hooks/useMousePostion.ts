
import { ref, onMounted, onUnmounted } from 'vue'
function useMousePosition (){
    const x = ref(0);
    const y = ref(0);
    const updatePosition = (e: MouseEvent) => {
      x.value = e.x;
      y.value = e.y;
    }
    onMounted(() => {
      console.log("on mounted");
      document.addEventListener('click', updatePosition);
    });
    onUnmounted(()=>{
      console.log("on unmounted")
      document.removeEventListener('click', updatePosition)
    })
    return {x,y}
}

export default useMousePosition