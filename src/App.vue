<template>
  <div>
  <div class=container>
    <img alt="Vue logo" src="./assets/logo.png" />
    <ColumnList :list="list"></ColumnList>
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h1>{{ number }}</h1>
      </li>
    </ul>
    <h1 v-if="loading">loading ...</h1>
    <img :src="result.message" v-if="loaded"/>
    <h1>{{ persion.name }}</h1>
    <h1>{{ greetings }}</h1>
    <h1>{{x}}:{{y}}</h1>
    <button @click="increase">+1</button>
    <button @click="updateGreeting">updateTitle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered,
  watch,
  onUnmounted
} from "vue";
import useMousePosition from './hooks/useMousePostion'
import useURLLoader from './hooks/useURLLoader'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  persion: { name?: string };
}
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
    // const count = ref(0)
    // const increment = () => {
    //   count.value ++
    // }
    // const double = computed(()=>{
    //   return count.value * 2
    // })
    onUpdated(() => {
      console.log("on updated");
    });
    onRenderTriggered((event) => {
      console.log(event);
    });

    const {
      result,
      error,
      loading,
      loaded
    } = useURLLoader("https://dog.ceo/api/breeds/image/random")

    const data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
      numbers: [1, 2, 3],
      persion: {},
    });
    data.numbers[0] = 5;
    data.persion.name = "lage";
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "hello!";
    };
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
      document.title = "update" + greetings.value + data.count;
    });

    const {x, y} = useMousePosition()

    const dataRefs = toRefs(data);
    return {
      ...dataRefs,
      greetings,
      updateGreeting,
      x,
      y,
      result,
      error,
      loading,
      loaded
    };
  },
});
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
