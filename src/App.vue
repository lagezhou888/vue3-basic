<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed, reactive, toRefs}  from 'vue'; 
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default defineComponent({
  name: "App",
  setup() {
    // const count = ref(0)
    // const increment = () => {
    //   count.value ++
    // }
    // const double = computed(()=>{
    //   return count.value * 2
    // })
    const data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {data.count ++}
    })
    const dataRefs = toRefs(data)
    return {
      ...dataRefs
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
