<template>
  <div class="hello">
    <p>{{ error }}</p>
    <Suspense>
      <template #default>
        <dog-show></dog-show>
      </template>
      <template #fallback>
        <h1>loading....</h1>
      </template>
    </Suspense>
    <img alt="Vue logo" src="/public/favicon.ico" />
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h1>{{ number }}</h1>
      </li>
    </ul>
    <modal :isOpen="modalIsOpen" @close-modal="onModalClose">打开modal</modal>
    <button @click="openModal">打开</button>
    <h1 v-if="loading">Loading......</h1>
    <img v-if="loaded" :src="result.message"/>
    <h1>{{ persion.name }}</h1>
    <h1>{{ greetings }}</h1>
    <button @click="updateGreeting">updateTitle</button>
    <span>x:{{x}},y:{{y}}</span>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from '@/components/modal.vue'
import useMousePosition from '@/hooks/useMousePosition'
import useURLLoader from "@/hooks/useURLLoader"
import { defineComponent } from "vue"
import DogShow from '@/components/DogShow.vue'
import {
  ref,
  computed,
  reactive,
  toRefs,
  onUpdated,
  onRenderTriggered,
  watch,
  onErrorCaptured
} from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  persion: { name?: string };
}
export default defineComponent({
  name: "Hello World",
  components: {
    Modal,
    DogShow
  },
  setup() {
    // const count = ref(0)
    // const increment = () => {
    //   count.value ++
    // }
    // const double = computed(()=>{
    //   return count.value * 2
    // })

    const loader = useURLLoader("https://dog.ceo/api/breeds/image/random")

    onUpdated(() => {
      // log("on updated");
    });
    onRenderTriggered((event) => {
      // console.log(event);
    });
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
    })
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
      // console.log(newValue);
      // console.log(oldValue);
      document.title = "update" + greetings.value + data.count;
    });
    const dataRefs = toRefs(data);

    //引用单独的ts文件完成鼠标点击获取坐标
    const state = useMousePosition()

    const modalIsOpen = ref(false)
    const openModal = () => {
      modalIsOpen.value = true
    }
    const onModalClose = () => {
      modalIsOpen.value = false
    }
    return {
      ...dataRefs,
      greetings,
      ...toRefs(state),
      ...toRefs(loader),
      modalIsOpen,
      openModal,
      onModalClose,
      error
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
