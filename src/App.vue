<template>
  <div class=container>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'
import ColumnList, {ColumnProps} from "@/components/ColumnList.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test1专栏，非常的有意思哦'
  },{
    id: 2,
    title: 'test2的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test2专栏，非常的有意思哦'
  },
  {
    id: 3,
    title: 'test3的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test3专栏，非常的有意思哦'
  },
  {
    id: 4,
    title: 'test4的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test4专栏，非常的有意思哦'
  },{
    id: 5,
    title: 'test5的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test5专栏，非常的有意思哦'
  },{
    id: 6,
    title: 'test6的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test6专栏，非常的有意思哦'
  }
]
export default defineComponent({
  name: "App",
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    }
  }
})
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
